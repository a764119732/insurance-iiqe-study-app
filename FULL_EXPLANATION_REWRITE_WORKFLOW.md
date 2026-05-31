# Goal 2 小白解析批次工作流

更新时间：2026-05-31

## 1. 固定批次流程

每批最多 30 题，流程固定为：

1. `MANUAL_AUDIT`
2. `REWRITE_PLAN`
3. `REWRITE_AUDIT`
4. `SPOTCHECK`
5. 更新 `PROJECT_A_MEMORY.md`

任何扫描结果只能进入候选或审计，不能直接写入 JSON。

## 2. MANUAL_AUDIT

逐题读取：

- 题号
- paper
- chapter / section
- 题干
- A/B/C/D 选项
- `correct_answer`
- `original_explanation`
- 当前 `simple_explanation`

逐题判断：

- 当前解析问题是什么。
- 是否贴合题干。
- 是否贴合选项。
- 是否贴合 `correct_answer`。
- 是否涉及否定题、组合题、以上各项题。
- 是否有法律、教材、PDF 边界。
- 是否允许只改 `simple_explanation`。
- 是否需要 PDF 人工核对。

输出文件建议命名：

- `FULL_EXPLANATION_BATCH<N>_MANUAL_AUDIT.md`

## 3. REWRITE_PLAN

只为 MANUAL_AUDIT 明确通过的题生成字段级重写计划。

每题必须列出：

- 旧 `simple_explanation` 的主要问题。
- 新解析应覆盖的规则。
- 正确答案为什么成立。
- 每个错误选项为什么错。
- 否定题 / 组合题 / 以上各项题的特殊处理。
- 是否仍需跳过。

输出文件建议命名：

- `FULL_EXPLANATION_BATCH<N>_REWRITE_PLAN.md`

## 4. REWRITE_AUDIT

写入后必须生成写入审计。

审计内容：

- 实际修改题号。
- 实际修改字段。
- 跳过题号。
- 保护字段快照比对。
- JSON parse。
- 题数。
- ID 连续。
- 编码检查。
- 模板残留检查。

输出文件建议命名：

- `FULL_EXPLANATION_BATCH<N>_REWRITE_AUDIT.md`

## 5. SPOTCHECK

抽查至少覆盖：

- 全部边界题。
- 全部否定题。
- 全部组合题。
- 全部“以上各项”题。
- 若本批风险很低，也至少抽查 30%。

每题检查：

- 五段式是否完整。
- 是否贴合题干。
- 是否贴合选项。
- 是否贴合 `correct_answer`。
- 是否把问法讲反。
- 是否仍有空泛句。
- 是否建议保留。
- 是否需要人工复核。
- 是否需要返修。

输出文件建议命名：

- `FULL_EXPLANATION_BATCH<N>_SPOTCHECK.md`

## 6. 允许修改字段

默认只允许修改明确列入本批写入范围的题目的：

- `simple_explanation`

## 7. 禁止修改字段

禁止修改：

- 题干
- 选项
- `correct_answer`
- `source_page`
- `reference`
- `chapter`
- `chapter_title`
- `section`
- `section_title`
- `original_explanation`
- `memory_tip`
- `source_file`
- `tags`
- `is_hot_question`

## 8. 校验要求

写入后必须检查：

- UTF-8 解码。
- JSON parse。
- P1 / P3 题数。
- ID 连续。
- 保护字段比对。
- 本批题五段式标题。
- `新增题待人工复核`
- `这题考教材`
- `不符合题干考点`
- `????`
- `�`
- `锟`

## 9. 人工介入条件

出现以下情况必须人工介入：

- Do Not Auto 登记题。
- `original_explanation` 为空或过短。
- 题干、选项、答案、原始解析疑似不一致。
- 法律边界题。
- PDF 抽取疑似串题。
- 相邻题内容边界不清。
- 组合题无法确认 i/ii/iii/iv。
- “以上各项”无法确认是否全对。
- 否定题问法可能被讲反。

## 10. 避免 PowerShell 中文转码污染

禁止把包含中文正文的写入 payload 通过 PowerShell 管道传给 Node 或其他解释器。

推荐做法：

- 只读扫描脚本尽量使用 ASCII-only 或 Unicode 转义。
- 写入 JSON 时使用显式 UTF-8。
- 写入后立即检查 `????`、`�`、`锟`。
- 如果出现编码风险，停止扩大修改，只修复受影响文件。

## 11. 上下文快满处理

如果上下文超过 70%，应优先更新 `PROJECT_A_MEMORY.md`。

如果上下文超过 80%，停止继续写入型任务，只更新 `PROJECT_A_MEMORY.md`，记录：

- 已完成什么。
- 未完成什么。
- 当前批次边界。
- 下一步最稳任务。
- 新对话恢复指令。

## 12. 低额度处理

如果额度低：

- 不执行写入型 JSON 任务。
- 优先做只读审计、候选计划、handoff 文件。
- 每完成重要 Markdown 文件后落盘。
- 每两项任务后更新 `PROJECT_A_MEMORY.md`。

## 13. 提交与推送

Goal 2 解析工程默认不 commit、不 push。

若未来需要提交，必须先确认：

- 题库 JSON 是否确实应提交。
- `PROJECT_A_MEMORY.md` 未被 Git 跟踪。
- PDF、离线版、`sharedFiles` 未被 Git 跟踪。
- 暂存区只包含用户明确授权的文件。
