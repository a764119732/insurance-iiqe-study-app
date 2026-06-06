---
description: 安全推送检查与执行：自动识别待推送 commit、禁止文件检查、两阶段（汇报→授权→push→验证）。
---

# project-a-push — 安全推送检查与执行

## 用途

每次阶段性提交后，自动识别当前 `main` 相对 `origin/main` 待推送的 commits，执行安全检查，仅在用户明确授权后执行 `git push origin main`，并做 push 后验证。

**设计原则**：不无脑 push。先汇报，再等用户说"允许 push"，然后才执行。全程不修改任何文件。

## 执行流程

### 阶段一：自动只读检查（无需用户确认，直接执行）

#### 1.1 分支位置检查

```bash
git status -sb
```

```bash
git rev-list --left-right --count main...origin/main
```

解析输出：
- `ahead` = 本地领先 commit 数
- `behind` = 本地落后 commit 数

**停止条件：**

| 条件 | 行为 |
|------|------|
| `ahead=0, behind=0` | 汇报"已对齐，无需 push"，**停止** |
| `behind > 0` | 汇报"本地落后远端 N 个 commit，禁止 push，需先 `git pull` 或人工处理"，**停止** |
| `ahead > 0, behind = 0` | 继续执行后续检查 |

#### 1.2 待推送 commit 列表

```bash
git log --oneline origin/main..main
```

解析并列出每个待推送 commit 的短 hash 和 message。

#### 1.3 待推送文件列表

```bash
git diff --stat origin/main..main
```

列出所有待推送文件和变更行数。

#### 1.4 工作区脏检查

```bash
git diff --name-only
```

```bash
git diff --cached --name-only
```

**停止条件：**
- 如有 tracked unstaged diff（`git diff --name-only` 非空）→ 停止，汇报"有未暂存变更，禁止 push，请先处理"
- 如有 staged diff（`git diff --cached --name-only` 非空）→ 停止，汇报"有已暂存未提交变更，禁止 push，请先 commit 或 unstage"

#### 1.5 未跟踪文件检查

```bash
git ls-files --others --exclude-standard
```

列出未跟踪文件。以下文件允许存在：
- `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`
- `.claude/settings.local.json`
- `.claude/` 目录下文件

如有其他未知未跟踪文件，**不停止**但在汇报中标注"注意"。

#### 1.6 禁止文件检查

检查待推送 commits 中是否包含以下禁止文件：

```bash
git diff --name-only origin/main..main
```

对输出逐一检查是否命中以下禁止文件：

| 禁止文件 | 严重程度 |
|----------|:--------:|
| `PROJECT_A_MEMORY.md` | 🔴 停止 |
| `.claude/settings.local.json` | 🔴 停止 |
| 任何 `.env` / `token` / `secret` / `key` / `credentials` 文件 | 🔴 停止 |
| `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md` | 🟡 警告（除非用户明确授权） |
| PDF 文件（`*.pdf`） | 🔴 停止 |
| `iiqe_offline_300.html` | 🔴 停止 |
| `sharedFiles/` 下任何文件 | 🔴 停止 |

**停止条件：** 命中任何 🔴 行即停止，汇报具体文件。

#### 1.7 项目A 专项变更类型提醒

检查待推送文件并分类：

| 文件 | 提醒 |
|------|------|
| `data/paper1_questions.json` / `data/paper3_questions.json` | ⚠️ **题库变更**：提醒用户这是题库 JSON 变更 |
| `app.js` / `style.css` / `index.html` / `README.md` | ⚠️ **UI/功能变更**：提醒用户这是界面变更 |
| `extract_questions.py` | 🔴 停止（除非用户明确说明本轮允许） |
| PDF / `iiqe_offline_300.html` / `sharedFiles/` | 🔴 停止 |

#### 1.8 远程 URL 检查

```bash
git remote get-url origin
```

确认远程为 `https://github.com/a764119732/insurance-iiqe-study-app.git`。否则警告但不停止。

### 阶段一输出：汇报模板

用中文输出以下汇报：

```
## 🔍 Push 前检查报告

| 检查项 | 结果 |
|--------|------|
| 分支位置 | main ahead N, behind 0 |
| 工作区 | 干净 / 有未暂存变更（列出）/ 有已暂存变更（列出） |
| 未跟踪文件 | （列出或"无误"） |
| 远程 URL | （URL 或"非预期"） |

### 待推送 Commits

| Hash | Message |
|------|---------|
| abc1234 | （message） |

### 待推送文件

| 文件 | +/- |
|------|-----|
| xxx | +N -N |

### 安全检查

| 检查项 | 状态 |
|--------|:----:|
| 禁止文件命中 | 0 / 命中（列出） |
| 题库 JSON 变更 | 是 / 否 |
| UI 变更 | 是 / 否 |
| 工作区干净 | ✅ / ❌ |

### 建议

✅ 检查通过，可以 push。请回复"允许 push"确认。

或

❌ 发现异常：<具体异常>。请先处理。
```

**硬性要求：阶段一不执行 push。等待用户明确授权。**

### 阶段二：用户授权后执行 push

仅在用户明确回复"允许 push"或其他明确授权词语后执行。

#### 2.1 再次快速确认

```bash
git status -sb
```

如果状态与阶段一不一致，停止并汇报变化。

#### 2.2 执行 push

```bash
git push origin main
```

**禁止：**
- Force push（`--force` / `-f`）
- 修改远程 URL
- 推送到非 `origin/main`
- `--no-verify`

#### 2.3 Push 后验证

```bash
git status -sb
```

```bash
git rev-list --left-right --count main...origin/main
```

```bash
git log --oneline -5
```

确认：
- `main...origin/main` 已对齐（ahead=0, behind=0）
- 工作区干净或仅剩允许的未跟踪文件
- 没有因 push 产生的新 tracked diff

#### 2.4 Push 后最终检查

```bash
git diff --name-only
```

```bash
git ls-files --others --exclude-standard
```

### 阶段二输出：结果汇报

```
## ✅ Push 完成报告

| 项目 | 内容 |
|------|------|
| Push 是否成功 | ✅ / ❌ |
| 推送前 ahead/behind | N / 0 |
| 推送后 ahead/behind | 0 / 0 |
| 推送 commits | （列表） |
| 推送文件 | （列表） |
| 禁止文件命中 | 0 |
| 远程 URL | （URL） |
| git status -sb | （输出） |
| 发现问题 | 无 / （列出） |

### 下一步建议

（根据当前项目状态给出建议）
```

## 完整【给 ChatGPT 的汇报】

每次运行结束后输出：

```markdown
## project-a-push 执行汇报

- **本轮目标**：安全推送 main 上待推送 commits 到 origin/main
- **是否执行 push**：是 / 否（原因）
- **push 前 ahead/behind**：N / 0
- **待推送 commit 列表**：（列出）
- **待推送文件列表**：（列出）
- **是否发现禁止文件**：否 / 是（列出）
- **push 是否成功**：✅ / ❌（如未执行，写"未执行"）
- **push 后 main 与 origin/main 是否对齐**：✅ / ❌ / N/A
- **git status -sb**：（输出）
- **发现问题**：无 / （列出）
- **建议下一步**：（建议）
```

## 快速使用

```
/project-a-push
```

## 硬性限制

- 阶段一只读，不修改任何文件。
- 阶段二仅执行 `git push origin main`，不修改文件。
- 绝不 force push。
- 绝不推送 `PROJECT_A_MEMORY.md`、`.claude/settings.local.json`、PDF、离线版或 `sharedFiles`。
- 如果 `behind > 0`，绝不允许 push（需先 pull/rebase）。
- 如果有未提交 diff，绝不允许 push。
- **权限提示**：阶段一所有命令均为只读（`git status`、`git diff`、`git log`、`git rev-list`），按照 CLAUDE.md 权限规则可直接执行。阶段二 `git push` 需要用户明确授权。
