---
description: 日常轻量恢复——快速知道项目A进度和git状态，尽量少消耗上下文。
---

# project-a-light-recover — 项目A轻量恢复（日常默认）

## 用途

在新开 Claude Code / Codex 对话时，一条命令低上下文消耗地恢复项目A当前进度和git状态，输出安全下一步建议。

**适用场景**：日常新对话、快速确认状态、继续前一天任务。

**不适用场景**：git状态异常、准备批量改题/扩题、memory/session log/next action矛盾 → 改用 `/project-a-deep-recover`。

## 硬性限制

- **只读**，不修改任何文件。
- 不暂存、不 commit、不 push。
- 不自动进入下一个任务或批次。
- **禁止输出**：完整题库JSON、完整PROJECT_A_MEMORY.md、完整PROJECT_A_SESSION_LOG.md、PDF/sharedFiles/离线版内容。
- 如果判断不了当前状态，立即停止并建议改用 `/project-a-deep-recover`。

## 执行流程

### 第一步：Git状态速查（必须执行）

以下命令全部只读，可连续批量执行：

```bash
git status -sb
```

```bash
git log -1 --oneline
```

```bash
git branch --show-current
```

```bash
git rev-list --left-right --count HEAD...origin/main
```

```bash
git diff --name-only
```

```bash
git diff --cached --name-only
```

```bash
git ls-files --others --exclude-standard
```

### 第二步：摘要读取（只读关键片段，禁止全文输出）

按以下顺序只读读取：

1. **CLAUDE.md** — 只读前120行（项目A长期规则摘要），不展开全文。
2. **PROJECT_A_NEXT_ACTION.md** — 只读前120行（最近下一步建议）。
3. **PROJECT_A_SESSION_LOG.md** — 只读最后120行（最近日志条目），不展开全部历史。
4. **PROJECT_A_MEMORY.md** — 只用 grep 搜索以下关键词，每条最多返回3行上下文；**禁止全文输出**：
   - `当前阶段` / `Batch` / `下一步`
   - `P1` / `P3` / `simple_explanation`
   - `禁止字段` / `repair_needed` / `EPERM`
   - `编码风险` / `污染`
   - `保护字段`

### 第三步：异常检测（必须在输出前完成）

逐项检查以下条件，任一项命中 → 标记异常，建议改用 `/project-a-deep-recover`：

| 异常条件 | 检测方式 |
|----------|----------|
| git dirty 且原因不明 | `git status -sb` 中有 M/A/D/R 标记 |
| main 与 origin/main 不对齐 | `git rev-list --left-right --count` 不为 `0 0` |
| 题库JSON出现diff | `git diff --name-only` 含 `paper1_questions.json` 或 `paper3_questions.json` |
| UI文件意外diff | `git diff --name-only` 含 `app.js`、`style.css`、`index.html` |
| PDF/sharedFiles/extract_questions.py 意外diff | `git diff --name-only` 含对应路径 |
| NEXT_ACTION 缺失或矛盾 | 文件不存在或内容与 HEAD/memory 冲突 |
| memory 中出现 `repair_needed` | grep 命中 |
| memory 中出现 `EPERM` | grep 命中 |
| memory 中出现编码风险 | grep 命中 |
| 上下文不足以判断当前批次 | 读取摘要后仍无法确定当前进度 |

### 第四步：输出轻量报告

用中文输出以下简短报告，每项一行：

```
## 项目A 轻量恢复报告

**HEAD**: <hash> <message>
**分支**: <branch> | main↔origin/main: <ahead>/<behind>
**工作区**: staged=<n> | unstaged=<n> | untracked=<n>
**最近NEXT_ACTION**: <PROJECT_A_NEXT_ACTION.md 最近条目的一行摘要>
**当前阶段**: <从MEMORY grep 推断的阶段>
**是否异常**: ✅ 无异常 / ⚠️ 发现异常（列出）
**建议**: 继续 / 停止 / 改用 deep recover / 人工确认
**下一步**: <具体建议>
```

### 第五步：输出判断

```
✅ 状态正常，可以继续 PROJECT_A_NEXT_ACTION.md 中建议的任务。

或

⚠️ 发现异常：<具体异常>。建议改用 `/project-a-deep-recover` 完整恢复上下文后再决定。
```

## 使用方式

```
/project-a-light-recover
```

## 与 Deep Recover 的分工

| 场景 | 使用 |
|------|------|
| 日常新对话 | Light Recover |
| 快速确认状态 | Light Recover |
| 继续前一天任务 | Light Recover |
| git 状态异常 | Deep Recover |
| 准备批量改 simple_explanation | Deep Recover |
| 准备扩题 | Deep Recover |
| memory/session log/next action 矛盾 | Deep Recover |
| repair_needed / EPERM / 编码风险 | Deep Recover |
| Light Recover 判断不了 | Deep Recover |
