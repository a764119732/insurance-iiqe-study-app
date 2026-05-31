# Risky 解析质量审计第一批人工报告

生成日期：2026-05-30

## 1. 本轮审计范围

本轮只读审计 `RISKY_EXPLANATION_AUDIT_PLAN.md` 第 4 节列出的 30 题。

读取文件：

- `PROJECT_A_MEMORY.md`
- `RISKY_EXPLANATION_AUDIT_PLAN.md`
- `POLLUTION_CLEANUP_FINAL_REVIEW.md`
- `MANUAL_REVIEW_CHECKLIST.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

只读核对 PDF：

- P1 来源 PDF：第 42-49 页
- P3 来源 PDF：第 8、11、12、23、24 页

未修改任何 JSON、UI、脚本、README、PDF、离线版或 `sharedFiles`。

## 2. 本轮审计 30 题清单

`P3-036`、`P3-060`、`P3-061`、`P3-062`、`P1-316`、`P1-318`、`P1-319`、`P1-321`、`P1-323`、`P1-333`、`P1-337`、`P1-338`、`P1-339`、`P1-340`、`P1-341`、`P1-342`、`P1-343`、`P1-348`、`P1-352`、`P1-356`、`P1-357`、`P1-361`、`P1-364`、`P1-365`、`P1-370`、`P3-301`、`P3-302`、`P3-303`、`P3-304`、`P3-305`

## 3. 逐题风险类型和处理建议

| 题号 | paper | chapter / section | source_file / page | correct_answer | 风险类型 | 当前 `simple_explanation` 的问题 | 是否可能误导学习 | 是否需要对照 PDF 人工确认 | 是否允许后续自动重写 `simple_explanation` | 是否禁止自动改 `correct_answer` | 建议处理方式 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `P3-036` | P3 | 1 / 1.2 | `c-long-terminsurance-paper-3-cn-mock-questions-510-May2025-with-explanation.pdf.pdf` / 8 | B | 法律边界题；`original_explanation` 过短 | 解释把寿险可保权益时间点泛化到本题，但原始解析只有极短提示，未充分说明“甲的姓名必须注明”的法律/教材依据 | 是，高 | 是；还需人工确认法律依据 | 否 | 是 | 需要人工确认后再改；暂不处理；保留 `original_explanation` |
| `P3-060` | P3 | 1 / 1.2 | `c-long-terminsurance-paper-3-cn-mock-questions-510-May2025-with-explanation.pdf.pdf` / 11 | C | 法律边界题 | 解释方向与 PDF 答案一致，但涉及保单转让、可保权益及规避可保权益要求的边界，当前解释未展开法律限制 | 是，中高 | 是 | 否 | 是 | 法律边界，禁止自动改；需要人工确认后再处理 |
| `P3-061` | P3 | 1 / 1.2 | `c-long-terminsurance-paper-3-cn-mock-questions-510-May2025-with-explanation.pdf.pdf` / 12 | A | 法律边界题 | 与 `P3-060` 同类，解释只讲一般原则，未处理选项 D 的边界表述 | 是，中高 | 是 | 否 | 是 | 法律边界，禁止自动改；需要人工确认后再处理 |
| `P3-062` | P3 | 1 / 1.2 | `c-long-terminsurance-paper-3-cn-mock-questions-510-May2025-with-explanation.pdf.pdf` / 12 | A | 法律边界题 | 与 `P3-060`/`P3-061` 同类，解释对 B、D 的细微法律差别处理不足 | 是，中高 | 是 | 否 | 是 | 法律边界，禁止自动改；需要人工确认后再处理 |
| `P1-316` | P1 | 2 / 2.2 | `试卷一.pdf` / 42 | C | 否定题；`simple_explanation` 过泛 | 仍是“新增题待人工复核”模板，只列答案和原始解析，未区分必要代理、表面代理、不容反悔代理、明示权限 | 是，中 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-318` | P1 | 2 / 2.2 | `试卷一.pdf` / 43 | C | 否定题；`simple_explanation` 过泛 | 模板解释未说明“未获授权但合理及必要”为必要代理的判别点 | 是，中 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-319` | P1 | 2 / 2.2 | `试卷一.pdf` / 43 | A | 否定题；`simple_explanation` 过泛 | 模板解释未解释“事前未获授权但法律上持有权限”的含义，容易与追认混淆 | 是，中 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-321` | P1 | 2 / 2.2 | `试卷一.pdf` / 43 | C | 否定题；`simple_explanation` 过泛 | 模板解释未处理“未授权或追认”与必要代理的关系 | 是，中 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-323` | P1 | 2 / 2.2 | `试卷一.pdf` / 43 | C | 否定题；`simple_explanation` 过泛 | 模板解释未区分必要权限、实际权限、表面权限、不容反悔代理权 | 是，中 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-333` | P1 | 2 / 2.2 | `试卷一.pdf` / 44 | B | 否定题；`simple_explanation` 过泛 | 已非“新增题”模板，但排除项仍用泛化句，未逐项说明为何不是明示、必要或追认权限 | 是，中 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-337` | P1 | 2 / 2.2 | `试卷一.pdf` / 45 | D | 以上各项题；`simple_explanation` 过泛 | 模板解释未逐项确认 A、B、C 均属委托人责任 | 是，中 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-338` | P1 | 2 / 2.2 | `试卷一.pdf` / 45 | A | 组合题；以上各项题；`simple_explanation` 过泛 | 模板解释未逐条说明 i、ii、iii 正确、iv 错误；“以上各项”干扰项未解释 | 是，高 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-339` | P1 | 2 / 2.2 | `试卷一.pdf` / 45 | C | 否定题；`simple_explanation` 过泛 | 模板解释未突出题干问“不属于”，也未说明电脑形式记录并非教材要求 | 是，中高 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-340` | P1 | 2 / 2.2 | `试卷一.pdf` / 45 | D | 以上各项题；`simple_explanation` 过泛 | 模板解释未逐项确认金钱、其他物件、代理活动记录都属于报账/记录范围 | 是，中 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-341` | P1 | 2 / 2.2 | `试卷一.pdf` / 45 | C | 否定题；`simple_explanation` 过泛 | 已非模板，但解释仍泛；未明确说明代理人无责任“只介绍有利可图的生意” | 是，中 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-342` | P1 | 2 / 2.2 | `试卷一.pdf` / 46 | B | 组合题；`simple_explanation` 过泛 | 模板解释未逐项判断；尤其 iii“争取最佳利益”与教材责任边界需解释清楚 | 是，高 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-343` | P1 | 2 / 2.2 | `试卷一.pdf` / 46 | C | 组合题；`simple_explanation` 过泛 | 模板解释未说明 i“所有指示”过宽、iii“最高利润”错误，因此容易误导组合题判断 | 是，高 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-348` | P1 | 2 / 2.2 | `试卷一.pdf` / 46 | D | 以上各项题；`simple_explanation` 过泛 | 已非模板，但仍使用泛化排除句；“以上所有评论”应逐项说明为何都正确 | 是，中 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-352` | P1 | 2 / 2.2 | `试卷一.pdf` / 47 | A | 否定题；以上各项题；`simple_explanation` 过泛 | 模板解释未说明为何“所有办公室支出”“每月或更频密报酬”“以上各项”不成立 | 是，中高 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-356` | P1 | 2 / 2.2 | `试卷一.pdf` / 47 | A | 否定题；`simple_explanation` 过泛 | 模板解释未突出题干问“不是委托人责任”；报账是代理人对委托人的责任，应明确反向排除 | 是，中高 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-357` | P1 | 2 / 2.2 | `试卷一.pdf` / 47 | C | 以上各项题；`simple_explanation` 过泛；其他 | PDF 和 JSON 答案均为 C，但原始解释更偏“报酬支付时间”，与 C 的“合理费用/开支”语义不完全贴合；不宜直接自动重写 | 是，高 | 是；需人工确认答案依据或原始解析是否错配 | 否 | 是 | 需要人工确认后再改；暂不处理；保留 `original_explanation` |
| `P1-361` | P1 | 2 / 2.2 | `试卷一.pdf` / 48 | A | 组合题；`simple_explanation` 过泛 | 模板解释未逐项说明 i、ii 正确，iii、iv 并非教材要求 | 是，中高 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-364` | P1 | 2 / 2.2 | `试卷一.pdf` / 48 | D | 组合题；`simple_explanation` 过泛 | 已非模板但仍泛；应逐项说明双方同意、撤销、死亡、精神错乱都可导致终止 | 是，中 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-365` | P1 | 2 / 2.2 | `试卷一.pdf` / 49 | D | 组合题；`simple_explanation` 过泛 | 模板解释未逐项说明时限、精神错乱、非法协议等终止原因 | 是，中 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P1-370` | P1 | 2 / 2.2 | `试卷一.pdf` / 49 | C | 以上各项题；`simple_explanation` 过泛 | 模板解释未说明 A、B 不足以终止，D 因包含错误项而不成立 | 是，中高 | 本轮已只读核对 PDF；重写后建议抽样复核 | 是 | 是 | 只改 `simple_explanation`；保留 `original_explanation` |
| `P3-301` | P3 | 2 / 2.1 | `试卷三.pdf` / 23 | B | 组合题；`original_explanation` 过短；`simple_explanation` 过泛 | PDF/JSON 原始解释仅有参考和答案；模板未解释为何储蓄寿险、终身寿险索偿无可避免，定期寿险不一定 | 是，高 | 是；PDF 无充分解释，需教材依据 | 否 | 是 | 需要人工确认后再改；保留 `original_explanation` |
| `P3-302` | P3 | 2 / 2.1 | `试卷三.pdf` / 23 | C | `original_explanation` 过短；`simple_explanation` 过泛 | PDF/JSON 原始解释仅有参考和答案；模板未解释人寿基本形式与“指明疾病死亡利益”的区别 | 是，高 | 是；PDF 无充分解释，需教材依据 | 否 | 是 | 需要人工确认后再改；保留 `original_explanation` |
| `P3-303` | P3 | 2 / 2.1 | `试卷三.pdf` / 24 | A | 否定题；`original_explanation` 过短；`simple_explanation` 过泛 | 否定题只列答案，未解释“无申请书”为何不可能属于基本变数 | 是，高 | 是；PDF 无充分解释，需教材依据 | 否 | 是 | 需要人工确认后再改；保留 `original_explanation` |
| `P3-304` | P3 | 2 / 2.1 | `试卷三.pdf` / 24 | A | 否定题；`original_explanation` 过短；`simple_explanation` 过泛 | 与 `P3-303` 相邻且题干高度相同，模板未说明选项 C/D 的变数性质 | 是，高 | 是；PDF 无充分解释，需教材依据 | 否 | 是 | 需要人工确认后再改；保留 `original_explanation` |
| `P3-305` | P3 | 2 / 2.1 | `试卷三.pdf` / 24 | A | 否定题；`original_explanation` 过短；`simple_explanation` 过泛 | 与 `P3-303`/`P3-304` 同组，PDF/JSON 无实质解释；A 项表述需教材确认 | 是，高 | 是；PDF 无充分解释，需教材依据 | 否 | 是 | 需要人工确认后再改；保留 `original_explanation` |

## 4. 可自动重写 `simple_explanation` 的题号

这些题的 `correct_answer` 与只读核对 PDF 中的答案一致，`original_explanation` 有可用依据；主要问题是 `simple_explanation` 过泛、模板化或未逐项解释。后续可在字段级计划中只改 `simple_explanation`，保留 `original_explanation`。

题号：

`P1-316`、`P1-318`、`P1-319`、`P1-321`、`P1-323`、`P1-333`、`P1-337`、`P1-338`、`P1-339`、`P1-340`、`P1-341`、`P1-342`、`P1-343`、`P1-348`、`P1-352`、`P1-356`、`P1-361`、`P1-364`、`P1-365`、`P1-370`

数量：20 题。

限制：

- 只允许后续改 `simple_explanation`。
- 不允许改 `correct_answer`、题干、选项、`source_page`、`reference`、`chapter` / `section`。
- 组合题和“以上各项”题重写时必须逐项解释。

## 5. 必须人工确认的题号

题号：

`P3-036`、`P3-060`、`P3-061`、`P3-062`、`P1-357`、`P3-301`、`P3-302`、`P3-303`、`P3-304`、`P3-305`

数量：10 题。

原因：

- `P3-036`、`P3-060`、`P3-061`、`P3-062`：法律边界题，必须人工确认。
- `P1-357`：PDF 和 JSON 答案一致，但原始解释与选项 C 的语义不完全贴合，需人工确认答案依据。
- `P3-301` 至 `P3-305`：PDF/JSON 原始解释过短，只有参考和答案，缺乏足够解释依据。

## 6. 禁止自动处理的题号

绝对禁止自动处理：

- `P3-036`
- `P3-060`
- `P3-061`
- `P3-062`

在补充人工依据前禁止自动重写：

- `P1-357`
- `P3-301`
- `P3-302`
- `P3-303`
- `P3-304`
- `P3-305`

所有 30 题均禁止自动修改 `correct_answer`。

## 7. 是否发现 `correct_answer` 疑似问题

未发现 JSON `correct_answer` 与本轮只读核对 PDF 答案存在直接冲突。

但发现两个需人工留意的依据风险：

- `P3-036`：PDF 答案为 B，但原始解释仅为极短提示，法律/教材依据不足。
- `P1-357`：PDF 与 JSON 答案均为 C，但原始解释偏向“报酬支付时间”，与选项 C 的“合理费用/开支”语义不完全贴合。此处不是答案冲突结论，只是依据不稳，需要人工确认。

## 8. 下一步建议

建议下一轮先处理 20 题可自动重写候选，生成字段级修改计划后再改 JSON：

1. 只改 `simple_explanation`。
2. 每题解释必须包含：
   - 本题考点；
   - 为什么正确答案成立；
   - 为什么其他选项不成立；
   - 对否定题、组合题、“以上各项”题逐项说明。
3. 不处理 `P3-036`、`P3-060`、`P3-061`、`P3-062`。
4. 暂不处理 `P1-357`、`P3-301` 至 `P3-305`，除非先补充人工依据。
5. 修改后必须运行 JSON parse、题数检查、ID 范围检查，并确认保护字段未变。

