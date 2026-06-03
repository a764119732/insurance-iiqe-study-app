---
description: 启动 Evidence Audit Batch 3 候选池重建，从剩余非五段式题中筛选约500题。
---

# project-a-batch3-candidate — Evidence Audit Batch 3 候选池

## 用途

当旧 `FULL_EXPLANATION_EVIDENCE_AUDIT_QUEUE.md` 已被 Evidence Audit Batch 1/2 消耗完后，从当前 JSON 中剩余的非五段式题目里重新筛选约 500 题作为 Batch 3 候选池。

## 背景

- 旧证据审计队列 100 题已被 Batch 1（25 题）和 Batch 2（75 题）完全消耗。
- Batch 1 实际写入 13 题，Batch 2 实际写入 41 题，合计 54 题五段式。
- 剩余约 969 题非五段式，需从中重新筛选候选池。
- **不要因为旧队列剩余 0 就停止。**

## 执行流程

### 第一步：读取依据文件

只读读取：

1. `CLAUDE.md`
2. `AGENTS.md`
3. `PROJECT_A_MEMORY.md`
4. `.agents/skills/project-a-evidence-audit/SKILL.md`
5. `FULL_EXPLANATION_REMAINING_AUDIT_MAP.md`
6. `FULL_EXPLANATION_EVIDENCE_AUDIT_QUEUE.md`（历史参考）
7. `EVIDENCE_AUDIT_BATCH1_MANUAL_CHECK.md`（如存在）
8. `EVIDENCE_AUDIT_BATCH2_MANUAL_CHECK.md`（如存在）
9. `EVIDENCE_AUDIT_BATCH2_REWRITE_AUDIT.md`（如存在）
10. `docs/rules/EVIDENCE_AUDIT_WORKFLOW.md`

### 第二步：只读扫描题库

- 读取 `data/paper1_questions.json` 和 `data/paper3_questions.json`（只读）。
- 统计 P1/P3 题数、ID 连续性。
- 检测五段式解释数：核对 `1. 这题考什么` / `2. 为什么正确答案对` / `3. 其他选项` 三个核心标记。
- 识别所有非五段式题目。

### 第三步：构建排除名单

必须排除以下题目：

1. **Do Not Auto**：来自 `RISKY_DO_NOT_AUTO_REGISTRY.md` 和 `FULL_EXPLANATION_REMAINING_AUDIT_MAP.md` 的 Do Not Auto / Explicit Exclusion 清单。
2. **显式排除**：`P1-018`、`P1-091`、`P3-131`。
3. **已五段式**：已被 Batch 1-16 或 Evidence Batch 1-2 处理为五段式的题目（由五段式检测自动排除）。
4. **复杂法例边界**：同时命中 ≥3 个法律/监管关键词的题目。
5. **选项不完整**：缺少 A/B/C/D 任意一项的题目。
6. **OE 极短**：`original_explanation` 少于 10 字符且无参考来源。

### 第四步：候选筛选

从剩余非五段式、非排除题目中，按以下优先级筛选：

1. 题干清楚，选项完整（A/B/C/D 四项齐全）。
2. `correct_answer` 与 `options` 显式匹配。
3. `original_explanation` 至少 20 字符，能支撑答案方向。
4. 不涉及复杂法例边界、监管处罚、金额期限、牌照细节、争议性判断。
5. 不在 Batch 1-16 或 Evidence Batch 1-2 已处理范围。
6. 不修改 `original_explanation`、题干、选项、`correct_answer`、`source_page`、`reference`、`chapter/section`。

### 第五步：风险分层

按以下标准将候选题分为 A/B/C/D 四类：

| 类别 | 定义 | 后续策略 |
|:----:|------|----------|
| **A 类** | 可进入人工证据审计：题干清晰、选项完整、OE 充分、无法律/监管关键词 | 优先排入 MANUAL_CHECK |
| **B 类** | 需要人工确认：有少量风险因素（否定/组合/以上各项/轻微法律关键词/OE 偏短） | 可排入审计但需逐题确认风险 |
| **C 类** | 禁止自动处理：法律监管密集、OE 极短、选项不全或疑似 OCR 问题 | 排除出候选池 |
| **D 类** | 暂缓：选项缺失、OE < 10 字、或 Do Not Auto 命中 | 不进入审计队列 |

### 第六步：生成输出文件

创建 **唯一** 输出文件：`EVIDENCE_AUDIT_BATCH3_CANDIDATE_POOL.md`

文件内容必须包含：

1. 本轮读取的依据文件清单。
2. 当前题库总数校验：P1、P3、总数、ID 连续性。
3. 已处理题排除逻辑（Batch 1-16、Evidence Batch 1-2、Risky 批次）。
4. Do Not Auto 排除逻辑（来源、排除数量）。
5. Batch 3 候选池列表：总数约 500 题，按 P1/P3 分列。
6. A/B/C/D 风险分层及各层 ID 列表。
7. 建议从 A 类中抽取 80 题 + B 类补充 20 题进入 `EVIDENCE_AUDIT_BATCH3_MANUAL_CHECK.md`。
8. 明确声明本轮未修改 JSON、未修改 UI、未 commit、未 push。

## 硬性限制

- **不要修改** `data/paper1_questions.json`
- **不要修改** `data/paper3_questions.json`
- **不要修改** `app.js`、`style.css`、`index.html`
- **不要修改** `README.md`、PDF、`iiqe_offline_300.html`、`sharedFiles`、`extract_questions.py`
- **不要删除** `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`
- 不暂存、不 commit、不 push。
- 临时分析脚本完成后必须清理删除。

## 使用方式

```
/project-a-batch3-candidate
```
