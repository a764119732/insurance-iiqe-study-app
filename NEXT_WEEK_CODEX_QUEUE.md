# 下周 Codex 任务队列

生成日期：2026-05-30

## 1. 使用原则

本队列用于周额度刷新后按低风险、小批量、可验证方式继续项目A。

当前轮次不执行任何题库写入。本文件只是计划文件。

永久限制：

- 不跨步骤执行。
- 不跳过审计直接写入。
- 不批量处理 Do Not Auto 题。
- 不修改 UI、PDF、离线版、`sharedFiles`、`extract_questions.py` 或 README。
- 除明确写入步骤外，不修改 `data/paper1_questions.json` 或 `data/paper3_questions.json`。
- 写入步骤也只允许修改指定题号的 `simple_explanation`。

## 2. 队列总览

| 顺序 | 任务 | 输出文件 | 是否允许写 JSON |
| ---: | --- | --- | --- |
| 1 | 执行第三批 26 题 `simple_explanation` 写入 | `RISKY_BATCH3_REWRITE_AUDIT.md` | 是，仅指定 26 题 |
| 2 | 生成第三批写入审计 | `RISKY_BATCH3_REWRITE_AUDIT.md` | 随任务 1 一并完成 |
| 3 | 抽查第三批重写质量 | `RISKY_BATCH3_REWRITE_SPOTCHECK.md` | 否 |
| 4 | 第四批人工审计 | `RISKY_BATCH4_MANUAL_AUDIT.md` | 否 |
| 5 | 第四批重写计划 | `RISKY_BATCH4_REWRITE_PLAN.md` | 否 |
| 6 | 第四批写入 | `RISKY_BATCH4_REWRITE_AUDIT.md` | 是，仅人工审计通过题 |
| 7 | 第四批抽查 | `RISKY_BATCH4_REWRITE_SPOTCHECK.md` | 否 |
| 8 | Do Not Auto 深度人工核对 | `RISKY_DO_NOT_AUTO_DEEP_REVIEW_PLAN.md` 或分批审计文件 | 否 |
| 9 | 模板解释优先 50 题审计 | `TEMPLATE_EXPLANATION_PRIORITY50_AUDIT.md` | 否 |
| 10 | 高频章节解析强化 | `HIGH_FREQUENCY_CHAPTER_EXPLANATION_PLAN.md` | 否 |

## 3. 任务 1：执行第三批 26 题写入

目标：执行 `RISKY_BATCH3_WRITE_PROMPT.md`，写入第三批 26 题 `simple_explanation`。

输入文件：

- `PROJECT_A_MEMORY.md`
- `PROJECT_A_FINAL_HANDOFF.md`
- `RISKY_BATCH3_MANUAL_AUDIT.md`
- `RISKY_BATCH3_REWRITE_PLAN.md`
- `RISKY_BATCH3_WRITE_PROMPT.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

输出文件：

- 修改后的 `data/paper1_questions.json`
- 修改后的 `data/paper3_questions.json`
- `RISKY_BATCH3_REWRITE_AUDIT.md`

是否允许写 JSON：允许，但只限本任务。

允许修改字段：

- 仅以下 26 题的 `simple_explanation`：

`P1-1200`、`P1-1203`、`P1-1205`、`P3-541`、`P3-599`、`P3-714`、`P3-418`、`P3-751`、`P3-790`、`P1-460`、`P1-490`、`P1-530`、`P1-552`、`P1-576`、`P1-709`、`P1-732`、`P1-733`、`P1-778`、`P1-1160`、`P3-347`、`P3-498`、`P3-561`、`P3-677`、`P3-789`、`P1-423`、`P1-444`

禁止修改字段：

- `original_explanation`
- `question_traditional`
- `question_simplified`
- `options_traditional`
- `options_simplified`
- `correct_answer`
- `source_file`
- `source_page`
- `reference`
- `chapter`
- `chapter_title`
- `section`
- `section_title`
- `memory_tip`

必须排除题：

- `P3-543`
- `P1-1192`
- `P3-553`
- `P3-555`

校验要求：

- 写入前保存 26 题保护字段快照。
- 写入后 JSON parse 通过。
- P1 仍为 1391 题，P3 仍为 807 题，总计 2198。
- P1 / P3 ID 连续。
- 26 题均有五段式标题。
- 26 题不含“新增题待人工复核”模板。
- 26 题污染词未命中。
- `????` 未命中，`�` 计数 0，`锟` 未命中。
- 保护字段快照比对全部通过。
- 计划外题号未写入。

## 4. 任务 2：生成第三批写入审计

目标：对任务 1 的实际写入结果生成审计记录。

输入文件：

- 写入后的 `data/paper1_questions.json`
- 写入后的 `data/paper3_questions.json`
- 写入前保护字段快照
- `RISKY_BATCH3_REWRITE_PLAN.md`
- `RISKY_BATCH3_WRITE_PROMPT.md`

输出文件：

- `RISKY_BATCH3_REWRITE_AUDIT.md`

是否允许写 JSON：否；此任务是审计报告任务。若与任务 1 同轮完成，JSON 写入只属于任务 1。

允许修改字段：

- 无题库字段允许修改。

禁止修改字段：

- 所有题库字段。
- UI、PDF、离线版、`sharedFiles`、`extract_questions.py`、README。

校验要求：

- 报告实际修改题数。
- 报告跳过题数和原因。
- 确认每题只改 `simple_explanation`。
- 记录保护字段比对结果。
- 记录 JSON parse、题数、ID 连续检查结果。
- 记录五段式、模板残留、污染词、编码检查结果。
- 明确是否发现答案冲突。
- 明确未修改 JSON 以外文件。

## 5. 任务 3：第三批抽查

目标：只读抽查第三批 26 题重写后的解释质量。

输入文件：

- `PROJECT_A_MEMORY.md`
- `RISKY_BATCH3_MANUAL_AUDIT.md`
- `RISKY_BATCH3_REWRITE_PLAN.md`
- `RISKY_BATCH3_REWRITE_AUDIT.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

输出文件：

- `RISKY_BATCH3_REWRITE_SPOTCHECK.md`

是否允许写 JSON：否。

允许修改字段：

- 无题库字段允许修改。

禁止修改字段：

- 所有题库字段。
- UI、PDF、离线版、`sharedFiles`、`extract_questions.py`、README。

校验要求：

- 检查 26/26 五段式完整。
- 检查是否贴合题干、选项、`correct_answer`。
- 检查否定题是否讲反。
- 检查组合题是否逐项解释。
- 检查“以上各项 / 以上所有”逻辑是否正确。
- 检查是否有空泛句子。
- 检查是否扩大题意或越过教材边界。
- 每题给出建议保留、人工复核、返修结论。
- 明确不进入第四批写入。

## 6. 任务 4：第四批人工审计

目标：基于第四批候选 30 题生成只读人工审计。

输入文件：

- `PROJECT_A_MEMORY.md`
- `PROJECT_A_FINAL_HANDOFF.md`
- `RISKY_REMAINING_GLOBAL_MAP.md`
- `RISKY_BATCH4_CANDIDATE_PLAN.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

输出文件：

- `RISKY_BATCH4_MANUAL_AUDIT.md`

是否允许写 JSON：否。

允许修改字段：

- 无题库字段允许修改。

禁止修改字段：

- 所有题库字段。
- UI、PDF、离线版、`sharedFiles`、`extract_questions.py`、README。

校验要求：

- 审计第四批 30 题。
- 每题判断是否允许后续自动重写 `simple_explanation`。
- 每题判断是否需要 PDF 人工确认。
- 每题判断是否存在 `correct_answer` 疑似问题。
- 每题判断是否应移入 Do Not Auto。
- 不得直接生成写入计划。

## 7. 任务 5：第四批重写计划

目标：只为第四批人工审计通过的题生成字段级重写计划。

输入文件：

- `RISKY_BATCH4_MANUAL_AUDIT.md`
- `RISKY_BATCH4_CANDIDATE_PLAN.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

输出文件：

- `RISKY_BATCH4_REWRITE_PLAN.md`

是否允许写 JSON：否。

允许修改字段：

- 无题库字段允许修改。

禁止修改字段：

- 所有题库字段。

校验要求：

- 明确可写入题号。
- 明确排除题号和原因。
- 每题写明重写方向。
- 明确只计划修改 `simple_explanation`。
- 明确保护字段不改。
- 明确后续写入仍需单独执行。

## 8. 任务 6：第四批写入

目标：按 `RISKY_BATCH4_REWRITE_PLAN.md` 写入第四批人工审计通过题的 `simple_explanation`。

输入文件：

- `PROJECT_A_MEMORY.md`
- `RISKY_BATCH4_MANUAL_AUDIT.md`
- `RISKY_BATCH4_REWRITE_PLAN.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

输出文件：

- 修改后的 `data/paper1_questions.json`
- 修改后的 `data/paper3_questions.json`
- `RISKY_BATCH4_REWRITE_AUDIT.md`

是否允许写 JSON：允许，但只限第四批计划明确列出的题。

允许修改字段：

- 仅第四批计划明确允许题号的 `simple_explanation`。

禁止修改字段：

- `original_explanation`
- 题干
- 选项
- `correct_answer`
- 来源字段
- 章节字段
- `memory_tip`
- UI、PDF、离线版、`sharedFiles`、脚本、README

校验要求：

- 写入前做保护字段快照。
- 写入后做 JSON parse、题数、ID 连续。
- 做保护字段快照比对。
- 检查五段式、模板残留、污染词、编码。
- 生成审计报告。

## 9. 任务 7：第四批抽查

目标：只读抽查第四批写入质量。

输入文件：

- `RISKY_BATCH4_MANUAL_AUDIT.md`
- `RISKY_BATCH4_REWRITE_PLAN.md`
- `RISKY_BATCH4_REWRITE_AUDIT.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

输出文件：

- `RISKY_BATCH4_REWRITE_SPOTCHECK.md`

是否允许写 JSON：否。

允许修改字段：

- 无。

禁止修改字段：

- 所有题库字段和项目文件。

校验要求：

- 逐题检查五段式、题干、选项、答案贴合度。
- 重点检查组合题逐项判断。
- 重点检查“以上各项”是否讲反。
- 标记保留、人工复核、返修。
- 抽查未通过时不得进入第五批。

## 10. 任务 8：Do Not Auto 深度人工核对

目标：对禁止自动处理题建立深度人工核对计划，不直接修题。

输入文件：

- `RISKY_DO_NOT_AUTO_REGISTRY.md`
- `RISKY_REMAINING_GLOBAL_MAP.md`
- `RISKY_EXPLANATION_AUDIT_PLAN.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`
- 如用户明确允许，可读取 PDF 做人工核对；默认不写 PDF。

输出文件：

- `RISKY_DO_NOT_AUTO_DEEP_REVIEW_PLAN.md`
- 或按批次生成 `RISKY_DO_NOT_AUTO_BATCH*_MANUAL_AUDIT.md`

是否允许写 JSON：否。

允许修改字段：

- 无。

禁止修改字段：

- 所有题库字段。
- PDF、UI、离线版、`sharedFiles`、脚本、README。

校验要求：

- 按原因分组：法律边界、原解析过短/为空、题干/选项语义风险、答案依据不足。
- 每题说明需核对的 PDF 页码或教材依据。
- 不得自动改答案。
- 不得自动重写解释。

## 11. 任务 9：模板解释优先 50 题审计

目标：从仍含“新增题待人工复核”模板的题中，优先抽 50 题做只读审计。

输入文件：

- `NEW_QUESTION_QUALITY_AUDIT.md`
- `RISKY_REMAINING_GLOBAL_MAP.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

输出文件：

- `TEMPLATE_EXPLANATION_PRIORITY50_AUDIT.md`

是否允许写 JSON：否。

允许修改字段：

- 无。

禁止修改字段：

- 所有题库字段。

校验要求：

- 明确 50 题筛选口径。
- 排除已处理批次和 Do Not Auto。
- 每题判断是否可进入后续 `REWRITE_PLAN`。
- 只生成审计，不生成写入。

## 12. 任务 10：高频章节解析强化

目标：针对 P1 第 3/6 章、P3 第 3/4/5 章等高频章节制定解释强化计划。

输入文件：

- `RISKY_REMAINING_GLOBAL_MAP.md`
- `NEW_QUESTION_QUALITY_AUDIT.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

输出文件：

- `HIGH_FREQUENCY_CHAPTER_EXPLANATION_PLAN.md`

是否允许写 JSON：否。

允许修改字段：

- 无。

禁止修改字段：

- 所有题库字段。

校验要求：

- 按章节列出风险题数量和优先级。
- 区分 Auto Rewrite Candidate、Manual Review Required、Do Not Auto。
- 提出后续小批次队列。
- 不直接改题库。

## 13. 每完成一步后的记忆更新

以下任一情况必须更新 `PROJECT_A_MEMORY.md`：

- 完成一批人工审计。
- 完成一批重写计划。
- 完成一批写入审计。
- 完成一批抽查。
- 新增重要审计或计划文件。
- 修改题库 JSON。
- 用户准备新开对话。
- 上下文超过 70%。

若上下文超过 80%，只更新 `PROJECT_A_MEMORY.md` 并停止。
