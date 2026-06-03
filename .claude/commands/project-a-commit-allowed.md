---
description: 只提交用户明确授权的文件清单，JSON 和 UI 分开提交，排除记忆文件和禁止文件。
---

# project-a-commit-allowed — 只提交明确允许清单

## 用途

在任务完成后，只将用户明确授权的文件暂存、提交和推送。严禁混入未授权文件。

## 执行流程

### 第一步：列出当前状态

```bash
git status --short
```

```bash
git status -sb
```

向用户展示：
- 已暂存文件（staged）
- 已修改未暂存文件（unstaged）
- 未跟踪文件（untracked）

### 第二步：确认提交范围

请用户明确指定要提交的文件。**不要**自行决定范围。

示例：
```text
以下文件将进入本次 commit：
- data/paper1_questions.json
- data/paper3_questions.json
- EVIDENCE_AUDIT_BATCH3_REWRITE_AUDIT.md
- EVIDENCE_AUDIT_BATCH3_REWRITE_SPOTCHECK.md

是否确认？是否有其他文件需要同时提交？
```

### 第三步：提交前安全检查

**如果本次提交包含 `data/paper1_questions.json` 或 `data/paper3_questions.json`：**

必须先跑 `/project-a-safety-check`，全部检查通过后才能继续。

### 第四步：暂存文件

```bash
git add <用户确认的文件1> <用户确认的文件2> ...
```

**明确不暂存：**
- `PROJECT_A_MEMORY.md`
- `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`（除非用户明确要求）
- PDF 文件
- `iiqe_offline_300.html`
- `sharedFiles/`
- `tmp/`
- `__pycache__/`
- `_vendor/`

### 第五步：Staged 验证

```bash
git diff --cached --name-only
```

确认暂存区只有用户明确允许的文件。

```bash
git diff --cached --name-only | grep -i "PROJECT_A_MEMORY"
```

如果 `PROJECT_A_MEMORY.md` 出现在 staged，立即 `git reset HEAD PROJECT_A_MEMORY.md` 移除。

### 第六步：Commit

```bash
git commit -m "<用户指定的 commit message>"
```

Commit message 规则：
- 中文或英文，简洁描述本次变更。
- 示例：`Add evidence-audited explanations batch 3`
- JSON commit 和 UI commit **必须分开**，不得混在同一个 commit。

### 第七步：Post-commit 验证

```bash
git log -1 --oneline
```

```bash
git status -sb
```

确认：
- Commit 成功。
- 工作区干净或仅剩允许的未跟踪文件。

### 第八步：Push（需再次确认）

```bash
git push origin main
```

**Push 前必须再次向用户确认**，除非用户原始指令中包含"提交并推送"。

**禁止：**
- Force push
- 修改远程 URL
- 推送到非 origin/main 的分支

### 第九步：Post-push 验证

```bash
git status -sb
```

```bash
git log -1 --oneline
```

确认 `main...origin/main` 已对齐。

## 停止条件

以下情况必须停止：

- staged 文件包含 `PROJECT_A_MEMORY.md`
- staged 文件包含 PDF / 离线版 / `sharedFiles`
- 安全校验未通过
- `git push` 失败
- 远程 URL 不是 `https://github.com/a764119732/insurance-iiqe-study-app.git`
- 需要 force push

## 使用方式

```
/project-a-commit-allowed
```
