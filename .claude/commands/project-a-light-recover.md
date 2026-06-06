---
description: 日常轻量恢复——低上下文消耗衔接项目A当前状态，生成 ChatGPT 新对话粘贴版恢复报告。
---

# project-a-light-recover — 项目A轻量恢复（日常默认 / ChatGPT 粘贴版）

## 用途

**主要使用场景**：
- 新开 Claude Code / Codex / ChatGPT 项目A对话时，低上下文消耗衔接当前状态。
- 生成 **可直接粘贴给 ChatGPT 项目A新对话** 的精简恢复报告。
- 日常快速判断是否可继续前一天任务，或是否需要 Deep Recover。

**不适用场景**：git 状态异常、准备批量改题/扩题、准备 Specificity Repair / Batch repair、Light Recover 无法判断 → 改用 `/project-a-deep-recover`。

## 报告长度控制

- 默认输出不超过 **150 行**。
- 优先控制在 **80～120 行**。
- 禁止输出：
  - 完整 MEMORY / SESSION_LOG / 题库 JSON / git diff 正文
  - 大段历史批次记录
  - 完整保护字段清单
  - 完整 spotcheck 检查清单
- 只输出摘要和判断，不输出原文 dump。

## 硬性限制

- **只读**，不修改任何文件。
- 不暂存（`git add`）、不 commit、不 push。
- 不自动进入下一个任务或批次。
- 不自动执行批量写入脚本。
- 不修改题库 JSON。
- **禁止输出**：完整题库 JSON、完整 MEMORY.md、完整 SESSION_LOG.md、完整 NEXT_ACTION.md、完整 diff 正文。
- 如果判断不了当前状态，立即停止并建议改用 `/project-a-deep-recover`。

## 执行流程

### 第一步：Git 状态速查（必须执行）

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

按以下顺序只读读取，**禁止全文 dump**：

1. **CLAUDE.md** — 最多前 120 行，或 grep 核心规则关键词（保护字段、四段式、Spotcheck、禁止清单、JSON 写入流程）。
2. **PROJECT_A_NEXT_ACTION.md** — 最多前 120 行，提取最近 2-3 条下一步建议（含日期）、当前批次进度、暂停/等待事项。
3. **PROJECT_A_SESSION_LOG.md** — 最多最后 120 行，提取最近 2-3 条会话日志（日期 + 一句话简述）。
4. **PROJECT_A_MEMORY.md** — **只用 grep** 搜索以下关键词，每条最多返回 3 行上下文，**禁止全文输出**：
   - `当前阶段` / `Batch` / `下一步`
   - `P1` / `P3` / `simple_explanation`
   - `禁止字段` / `repair_needed` / `EPERM`
   - `编码风险` / `污染` / `保护字段`

### 第三步：异常检测（必须在输出报告前完成）

逐项检查以下条件，任一命中 → **标记为异常**：

| 异常条件 | 检测方式 |
|----------|----------|
| git dirty 且原因不明 | `git status -sb` 中有 M/A/D/R 标记 |
| main 与 origin/main 不对齐 | `git rev-list --left-right --count` 不为 `0 0` |
| 题库 JSON 出现 diff | `git diff --name-only` 含 `paper1_questions.json` 或 `paper3_questions.json` |
| UI 文件意外 diff | `git diff --name-only` 含 `app.js`、`style.css`、`index.html` |
| data/syllabus.js 意外 diff | `git diff --name-only` 含 `data/syllabus.js` |
| PDF / sharedFiles / extract_questions.py 意外 diff | `git diff --name-only` 含对应路径 |
| NEXT_ACTION 缺失或矛盾 | 文件不存在，或内容与 HEAD/memory/git 状态冲突 |
| MEMORY 中出现 `repair_needed` | grep 命中 |
| MEMORY 中出现 `EPERM` | grep 命中 |
| MEMORY 中出现编码风险关键词 | grep 命中 `编码风险` / `mojibake` / `U+FFFD` |
| JSON parse 风险 | 上下文提到 parse 失败但 git diff 不可见 |
| 上下文不足以判断当前批次或题型 | 读取摘要后仍无法确定进度和下一步 |

### 第四步：输出 ChatGPT 粘贴版恢复报告

用中文输出以下结构。**每项尽量一行，禁止大段原文 dump。**

```
# 【ChatGPT 项目A新对话粘贴版恢复报告】

## 当前 HEAD
- <hash> <message>

## 分支与对齐
- 分支: <branch>
- main ↔ origin/main: ahead=<n>, behind=<n> → <对齐/不对齐>

## 工作区文件
- staged: <n> | unstaged: <n> | untracked: <n>
- 已暂存: <列表或"无">
- 已修改未暂存: <列表或"无">
- 未跟踪: <列表或"无">

## 最近 NEXT_ACTION 摘要
- <PROJECT_A_NEXT_ACTION.md 最近 1-2 条建议的日期 + 一句话摘要>

## 当前项目A阶段摘要
- 阶段: <从 MEMORY grep 推断>
- 最近已完成: <1-2 项>
- 当前可继续: <1-2 项>
- 当前禁止: <1-2 项>

## 异常检测
- ✅ 无异常 / ⚠️ 警告项（列出）/ ⛔ 阻断项（列出）
- 是否需要 Deep Recover: <是/否，简述原因>

## 剩余风险
- <如：Batch 8B 计划已生成但未授权写入 / 本地有未推送 commit / MEMORY 条目可能过期>

## 建议下一步
- <具体可执行的一步，不要泛泛而谈>

## 给 ChatGPT 的判断重点
- <2-3 条关键判断依据，帮助新对话快速定位>
```

### 第五步：输出最终判断

```
✅ 状态正常，可以继续 PROJECT_A_NEXT_ACTION.md 中建议的任务。

或

⚠️ 发现警告：<具体警告>。建议先处理警告后再继续。

或

⛔ 发现阻断异常：<具体异常>。建议改用 `/project-a-deep-recover` 完整恢复上下文后再决定。
```

## Light Recover 停止/升级条件

出现以下任一情况，Light Recover **不应继续推断或建议写题**，必须明确建议改用 `/project-a-deep-recover`：

| 条件 | 说明 |
|------|------|
| 准备批量写入 `simple_explanation` | 任何 > 5 题的批量写入 |
| 准备 Specificity Repair / Batch repair | 包括 Batch 8B/8C/8D 等 |
| 准备扩题 | 新增题目前必须确认题库基线 |
| git dirty 且原因不明 | Light Recover 不足以诊断根本原因 |
| main 与 origin/main 不对齐且无法判断原因 | 需 Deep Recover 完整 git 历史 |
| 题库 JSON 出现 diff | 需完整保护字段变更检查 |
| UI / PDF / sharedFiles / extract_questions.py / syllabus 出现 diff | 需 Deep Recover 诊断 |
| PROJECT_A_NEXT_ACTION.md 缺失或互相矛盾 | 需 Deep Recover 重建上下文 |
| MEMORY 中出现 `repair_needed` | 有待修复项未处理 |
| MEMORY 中出现 `EPERM` | 权限风险需人工确认 |
| MEMORY 中出现编码风险 | 题库完整性可疑 |
| JSON parse 风险 | 题库完整性可疑 |
| 上下文不足以判断题型或批次 planned_ids | 需 Deep Recover 完整重建 |

## 使用方式

```
/project-a-light-recover
```

## 与 Deep Recover 的分工

| 场景 | 使用 |
|------|------|
| 新开 ChatGPT/Claude/Codex 项目A对话 | **Light Recover** |
| 日常快速确认状态 | **Light Recover** |
| 继续前一天任务前确认 | **Light Recover** |
| 生成 ChatGPT 粘贴版恢复报告 | **Light Recover** |
| git 状态异常（dirty、不对齐） | Deep Recover |
| 准备批量改 `simple_explanation`（> 5 题） | Deep Recover |
| 准备 Specificity Repair / Batch repair | Deep Recover |
| 准备扩题 | Deep Recover |
| memory / session log / next action 矛盾 | Deep Recover |
| `repair_needed` / `EPERM` / 编码风险 | Deep Recover |
| JSON parse 风险 | Deep Recover |
| Light Recover 判断不了当前状态 | Deep Recover |
| 长时间未操作后恢复（> 1 周） | Deep Recover |
