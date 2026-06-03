---
description: 任务结束后追加更新 PROJECT_A_MEMORY.md，记录新状态但不删除历史关键结论。
---

# project-a-memory-update — 更新项目A记忆文件

## 用途

在任务（批次写入、commit、push、审计等）结束后，只读追加/更新 `PROJECT_A_MEMORY.md` 中的最新状态。

## 执行流程

### 第一步：读取当前状态

- 读取 `PROJECT_A_MEMORY.md` 的最后一个 section。
- 执行 `git log -1 --oneline`。
- 执行 `git status -sb`。

### 第二步：确定新增 Section 编号

在当前 `PROJECT_A_MEMORY.md` 最后一个 section 编号 + 1。

### 第三步：编写新 Section

新增 section 必须包含：

1. **Section 标题**：描述本轮任务（例如 `## N. Evidence Audit Batch 3 commit and push record`）。
2. **更新时间**：当前日期。
3. **Objective**：本轮目标。
4. **创建的文件**：列表。
5. **修改的文件**：列表（明确标注 `data/paper1_questions.json`、`data/paper3_questions.json` 是否修改）。
6. **明确未修改的关键文件**：
   - 题库保护字段
   - UI 文件（`app.js`、`style.css`、`index.html`）
   - PDF / 离线版 / `sharedFiles` / `extract_questions.py` / `README.md`
7. **验证结果**：
   - JSON parse
   - 题数（P1/P3/Total）
   - ID 连续性
   - 变更题号和字段范围
   - 保护字段变化（应为 0）
   - 编码检查
   - Commit hash 和 push 状态
8. **下一步最稳任务**：明确建议，不自动推进下一批。

### 第四步：追加更新

- 在 `PROJECT_A_MEMORY.md` 末尾追加新 section。
- 不要删除、重写、压缩历史 section（除非用户明确要求）。
- 不要覆盖已有的关键结论。

### 第五步：恢复指令

如果状态变化较大，在 section 末尾追加新对话恢复指令：

```text
继续项目A。
请先只读读取：
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\CLAUDE.md
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\AGENTS.md
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\PROJECT_A_MEMORY.md

只读恢复上下文，不要修改任何文件。

当前状态：
- （列出关键状态）
```

## 硬性限制

- `PROJECT_A_MEMORY.md` 只本地更新，**不提交**，**不推送**到公开仓库。
- 不修改 JSON、UI、PDF、离线版、`sharedFiles`。
- 不暂存、不 commit、不 push。
- 只追加，不删除历史。

## 使用方式

```
/project-a-memory-update
```
