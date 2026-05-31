# Risky 批次固定流程模板

生成日期：2026-05-30

## 1. 适用范围

本模板适用于项目A后续每一批 Risky 解析质量处理。

固定流程：

```text
MANUAL_AUDIT -> REWRITE_PLAN -> REWRITE_AUDIT -> SPOTCHECK -> 更新 PROJECT_A_MEMORY.md
```

任何批次不得跳过 `MANUAL_AUDIT` 直接写入，也不得跳过 `SPOTCHECK` 进入下一批写入。

## 2. 永久禁止修改范围

除非用户另行明确授权并给出字段级计划，否则 Risky 阶段不得修改：

- 题干：`question_traditional` / `question_simplified`
- 选项：`options_traditional` / `options_simplified`
- `correct_answer`
- `source_file`
- `source_page`
- `reference`
- `chapter`
- `chapter_title`
- `section`
- `section_title`
- `memory_tip`
- `original_explanation`
- `app.js`
- `index.html`
- `style.css`
- PDF
- 离线版
- `sharedFiles`
- `extract_questions.py`
- README

Risky 写入阶段默认只允许修改指定题号的 `simple_explanation`。

## 3. 第一步：MANUAL_AUDIT

目标：只读人工审计候选题，判断哪些题可以进入字段级重写计划。

输入文件：

- `PROJECT_A_MEMORY.md`
- 上一批 `SPOTCHECK` 或阶段路线图
- 候选计划文件，例如 `RISKY_BATCH*_CANDIDATE_PLAN.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

输出文件：

- `RISKY_BATCH*_MANUAL_AUDIT.md`

是否允许写 JSON：否。

允许修改：

- 仅新增本批人工审计 Markdown。

不允许修改：

- 所有题库字段。
- UI、PDF、离线版、`sharedFiles`、脚本、README。

必须审计：

- 题号。
- paper。
- chapter / section。
- source_file / source_page。
- `correct_answer`。
- 风险类型。
- 当前 `simple_explanation` 的具体问题。
- 是否可能误导学习。
- 是否需要 PDF 人工确认。
- 是否允许后续自动重写 `simple_explanation`。
- 是否禁止自动改 `correct_answer`。
- 建议处理方式。

必须转入 Do Not Auto 的情况：

- `original_explanation` 为空或过短。
- 原始解析与题干、选项或答案不完全贴合。
- 题干或选项疑似抽取错误。
- 涉及法律边界但当前依据不足。
- 正确答案虽可能对，但解释依据不足。
- 相邻题高度相似且存在串题风险。
- 任一保护字段疑似需要修改。

## 4. 第二步：REWRITE_PLAN

目标：为人工审计通过的题生成字段级重写计划，不写入 JSON。

输入文件：

- `RISKY_BATCH*_MANUAL_AUDIT.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

输出文件：

- `RISKY_BATCH*_REWRITE_PLAN.md`

是否允许写 JSON：否。

允许修改：

- 仅新增本批重写计划 Markdown。

不允许修改：

- 所有题库字段。
- UI、PDF、离线版、`sharedFiles`、脚本、README。

计划必须明确：

- 本批计划题数。
- P1 / P3 题数。
- 可写入题号。
- 排除题号及原因。
- 计划修改字段只能是 `simple_explanation`。
- 每题重写方向。
- 每题是否允许自动写入。
- 保护字段不改清单。
- 后续写入仍需单独执行。

五段式要求：

1. `这题考什么：`
2. `为什么正确答案对：`
3. `其他选项为什么不适合：`
4. `记忆口诀：`
5. `遇到类似题怎么快速判断：`

重写方向必须处理：

- 组合题逐项解释 i / ii / iii / iv。
- 否定题明确题干问的是“不正确 / 不是 / 不属于 / 不应出现”等反向问法。
- “以上各项 / 以上所有 / 以上皆是”题说明全选成立或因包含错误项而不成立。
- 不写空泛句子。
- 不编造 PDF 原文。
- 不新增当前依据无法支撑的法律结论。

## 5. 第三步：REWRITE_AUDIT

目标：执行字段级写入后，生成写入审计报告。

输入文件：

- `RISKY_BATCH*_MANUAL_AUDIT.md`
- `RISKY_BATCH*_REWRITE_PLAN.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

输出文件：

- 修改后的 `data/paper1_questions.json` / `data/paper3_questions.json`
- `RISKY_BATCH*_REWRITE_AUDIT.md`

是否允许写 JSON：允许，但仅限该批计划明确允许题号的 `simple_explanation`。

允许修改字段：

- 指定题号的 `simple_explanation`。

不允许修改字段：

- `original_explanation`
- 题干
- 选项
- `correct_answer`
- 来源字段
- 章节字段
- `memory_tip`

写入前必须做：

- 读取当前 JSON。
- 对本批所有计划题保存保护字段快照。
- 确认排除题不在写入范围内。
- 确认目标字段只有 `simple_explanation`。

写入后必须校验：

- JSON parse 通过。
- P1 题数仍为 1391。
- P3 题数仍为 807。
- 总题数仍为 2198。
- P1 / P3 ID 连续。
- 实际修改题号等于计划题号。
- 排除题未被写入。
- 保护字段快照比对通过。
- 每题五段式标题齐全。
- 模板残留未命中。
- 污染词未命中。
- `????` 未命中。
- Unicode 替换符 `�` 计数 0。
- `锟` 未命中。

审计报告必须记录：

- 本轮目标。
- 读取文件。
- 实际修改题号。
- 实际修改题数。
- 跳过题数和原因。
- 每题只改 `simple_explanation` 的确认。
- 保护字段快照比对结果。
- JSON parse、题数、ID 连续结果。
- 五段式、模板残留、污染词、编码结果。
- 是否发现答案冲突。
- 未修改 JSON 以外任何文件的说明。
- 下一步必须先做 `SPOTCHECK`。

## 6. 第四步：SPOTCHECK

目标：只读抽查写入后的解释质量。

输入文件：

- `RISKY_BATCH*_MANUAL_AUDIT.md`
- `RISKY_BATCH*_REWRITE_PLAN.md`
- `RISKY_BATCH*_REWRITE_AUDIT.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

输出文件：

- `RISKY_BATCH*_REWRITE_SPOTCHECK.md`

是否允许写 JSON：否。

允许修改：

- 仅新增本批抽查 Markdown。

不允许修改：

- 所有题库字段。
- UI、PDF、离线版、`sharedFiles`、脚本、README。

必须检查：

- 五段式是否完整。
- 是否贴合题干。
- 是否贴合选项。
- 是否贴合 `correct_answer`。
- 否定题是否讲反。
- 组合题是否逐项解释。
- “以上各项 / 以上所有”是否处理正确。
- 是否有空泛句子。
- 是否扩大题意。
- 是否越过教材边界。
- 是否建议保留。
- 是否需要人工复核。
- 是否需要返修 `simple_explanation`。

抽查结论必须给出：

- 总题数。
- 建议保留题数。
- 需要人工复核题数。
- 需要返修题数。
- 重点风险观察。
- 下一步是否允许进入下一批 `MANUAL_AUDIT`。

若出现任何实质问题：

- 不得进入下一批写入。
- 先生成返修计划。
- 返修仍只能改指定题号的 `simple_explanation`。

## 7. 第五步：更新 PROJECT_A_MEMORY.md

目标：把本批状态写入项目记忆。

输入文件：

- 本批 `MANUAL_AUDIT`
- 本批 `REWRITE_PLAN`
- 本批 `REWRITE_AUDIT`
- 本批 `SPOTCHECK`
- 当前 `PROJECT_A_MEMORY.md`

输出文件：

- 更新后的 `PROJECT_A_MEMORY.md`

是否允许写 JSON：否。

必须记录：

- 本批完成了哪些步骤。
- 新增了哪些 Markdown 文件。
- 是否修改了 JSON。
- 若修改 JSON，实际修改题号和字段。
- 保护字段是否通过。
- JSON parse、题数、ID 连续是否通过。
- 抽查结论。
- 需人工确认题。
- 下一步最稳任务。
- 禁止修改范围。
- 新 Codex 对话恢复指令。

## 8. 批次完成判定

一批 Risky 处理只有在以下条件全部满足时才算完成：

- `MANUAL_AUDIT` 已生成。
- `REWRITE_PLAN` 已生成。
- 若本批有可写入题，`REWRITE_AUDIT` 已生成且校验通过。
- `SPOTCHECK` 已生成。
- `PROJECT_A_MEMORY.md` 已更新。
- 抽查没有阻塞性返修项。

未完成前不得进入下一批写入。

## 9. 当前应套用的下一批

当前最稳顺序：

1. 执行 Risky 第三批 26 题写入。
2. 生成 `RISKY_BATCH3_REWRITE_AUDIT.md`。
3. 生成 `RISKY_BATCH3_REWRITE_SPOTCHECK.md`。
4. 更新 `PROJECT_A_MEMORY.md`。
5. 第三批抽查通过后，才进入第四批 `MANUAL_AUDIT`。
