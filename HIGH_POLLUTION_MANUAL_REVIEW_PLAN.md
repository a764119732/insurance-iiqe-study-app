# High 污染题 PDF 人工核对方案

生成日期：2026-05-29

## 依据与范围

本轮只读核对以下 10 道 High 污染题，未修改任何 JSON、UI、PDF、离线版或脚本：

`P1-851`、`P1-864`、`P1-887`、`P1-895`、`P1-926`、`P1-983`、`P1-1226`、`P1-1340`、`P1-1372`、`P3-590`

读取依据：

- `POLLUTION_CLEANUP_PLAN.md`
- `POLLUTION_CLEANUP_BATCH1_AUDIT.md`
- `NEW_QUESTION_QUALITY_AUDIT.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`
- PDF 文本抽取：
  - P1：`principles-practice-of-insurance-paper-1-cn-mock-questions-202505-255-explanation-manutouch.pdf`
  - P3：`c-long-terminsurance-paper-3-cn-mock-questions-510-May2025-with-explanation.pdf.pdf`

说明：本报告只做 PDF 边界核对和下一轮处理建议，不直接修题。

## 题号：P1-851

- source_file：`试卷一.pdf`
- source_page：116
- 当前污染字段：`original_explanation`, `simple_explanation`
- 污染类型：相邻题残留；完整 A/B/C/D 块混入解释
- PDF 题干是否完整：是。PDF 第 116 页题 8 为“個別產品的開發：”
- PDF 选项是否完整：是。A-D 与 JSON 一致
- correct_answer 是否一致：一致，PDF 为 A
- reference 是否一致：一致，PDF 为 `4.1(a)`
- original_explanation 是否可清理：可清理。真正解释边界为 `4.1(a) A` 后“為加強由於競力，個別產品的開發是一個延續不停的過程”，到下一题 `8 * 以下哪項...` 前结束
- simple_explanation 是否应重写：应重写
- 是否允许下一轮自动清理：Yes
- 建议清理方式：只保留本题 `4.1(a) A` 的解释核心句；删除后续 `8 *` 另一题题干、A-D、答案解释；重写五段式解析
- 风险等级：High，但 PDF 边界清楚
- 需要人工确认点：无需修题干/选项；只需确认是否接受“由於競力”作为 PDF 原文 OCR，不在本轮改写原始解释用字

## 题号：P1-864

- source_file：`试卷一.pdf`
- source_page：117
- 当前污染字段：`original_explanation`, `simple_explanation`
- 污染类型：页眉/表头/#INTERNAL/内部培训字样；相邻题残留；完整 A/B/C/D 块混入解释
- PDF 题干是否完整：是。PDF 第 117 页题 21 为“為客人列印保單副本，是客戶服務的哪個職責範圍？”
- PDF 选项是否完整：是。A-D 与 JSON 一致
- correct_answer 是否一致：一致，PDF 为 C
- reference 是否一致：一致，PDF 为 `4.2`
- original_explanation 是否可清理：可清理。真正解释边界为 `4.2 C` 后“文件的提供包括提供保單副本，更改現有保單的內容，索取汽車保險證書的副本等”，到下一题 `21 * 維護和提高公司形象...` 前结束
- simple_explanation 是否应重写：应重写
- 是否允许下一轮自动清理：Yes
- 建议清理方式：保留本题文件提供的解释；删除下一题题干、A-D、`4.2 B` 解释、页眉、表头、内部培训字样；重写五段式解析
- 风险等级：High，但 PDF 边界清楚
- 需要人工确认点：无需修题干/选项

## 题号：P1-887

- source_file：`试卷一.pdf`
- source_page：120
- 当前污染字段：`original_explanation`, `simple_explanation`
- 污染类型：页眉/表头/#INTERNAL/内部培训字样；相邻题残留；完整 A/B/C/D 块混入解释
- PDF 题干是否完整：是。PDF 第 120 页题 44 为“以下哪項屬於核保部門的職能範圍？”
- PDF 选项是否完整：是。A-D 与 JSON 一致
- correct_answer 是否一致：一致，PDF 为 D
- reference 是否一致：一致，PDF 为 `4.5`
- original_explanation 是否可清理：可清理。真正解释边界为 `4.5 D` 后“保險人須要為核保員工製備核保手冊、保費率指南和拒絕名單，以及訂定目標風險”，到下一题 `44 * 以下哪（幾）項...` 前结束
- simple_explanation 是否应重写：应重写
- 是否允许下一轮自动清理：Yes
- 建议清理方式：保留本题核保职能解释；删除后续同编号另一题题干、A-D、答案解释及页眉表头污染；重写五段式解析
- 风险等级：High，但 PDF 边界清楚
- 需要人工确认点：无需修题干/选项

## 题号：P1-895

- source_file：`试卷一.pdf`
- source_page：121
- 当前污染字段：`original_explanation`, `simple_explanation`
- 污染类型：页眉/表头/#INTERNAL/内部培训字样；相邻题残留；完整 A/B/C/D 块混入解释
- PDF 题干是否完整：是。PDF 第 121 页题 52 为“一般保險業務的特點”组合题
- PDF 选项是否完整：是。A-D 与 JSON 一致
- correct_answer 是否一致：一致，PDF 为 B
- reference 是否一致：一致，PDF 为 `4.5(b)`
- original_explanation 是否可清理：可清理。真正解释边界为 `4.5(b) B` 后“一般保險的保障類型多不勝數；保單在續保的時候，條件可以檢討，必要時保單甚至可以取消；核保權限較為分散”，到页脚前结束
- simple_explanation 是否应重写：应重写
- 是否允许下一轮自动清理：Yes
- 建议清理方式：保留本题三项核心解释；删除混入的另一题“下列哪一項有關一般保險業務的陳述是錯誤？”及其 A-D/答案解释；重写五段式解析
- 风险等级：High，但 PDF 边界清楚
- 需要人工确认点：无需修题干/选项

## 题号：P1-926

- source_file：`试卷一.pdf`
- source_page：126
- 当前污染字段：`original_explanation`, `simple_explanation`
- 污染类型：相邻题残留；完整 A/B/C/D 块混入解释
- PDF 题干是否完整：是。PDF 第 126 页题 84 为人寿保险理赔处理三项正确描述
- PDF 选项是否完整：是。A-D 与 JSON 一致
- correct_answer 是否一致：一致，PDF 为 B
- reference 是否一致：一致，PDF 为 `4.7(a)`
- original_explanation 是否可清理：可清理。真正解释边界为 `4.7(a) B` 后“人壽保險的理賠會考慮：受益人有關的爭拗，還未清償的保單貸款，權益轉讓，死亡的真確性和分紅等；代位權及損餘只適用於彌償保險（一般保險）”，到下一题 `84 * 以下哪類型保險...` 前结束
- simple_explanation 是否应重写：应重写
- 是否允许下一轮自动清理：Yes
- 建议清理方式：保留本题理赔考虑因素及“代位/损余只适用于弥偿保险”的解释；删除后续另一题题干、A-D、`4.7(a) A` 解释；重写五段式解析
- 风险等级：High，但 PDF 边界清楚
- 需要人工确认点：无需修题干/选项

## 题号：P1-983

- source_file：`试卷一.pdf`
- source_page：134
- 当前污染字段：`original_explanation`, `simple_explanation`
- 污染类型：页眉/表头/#INTERNAL/内部培训字样；相邻题残留；完整 A/B/C/D 块混入解释
- PDF 题干是否完整：是。PDF 第 134 页题 24 为忠实保证分类题
- PDF 选项是否完整：是。A-D 与 JSON 一致
- correct_answer 是否一致：一致，PDF 为 C
- reference 是否一致：一致，PDF 为 `5.1.1(b)`
- original_explanation 是否可清理：可清理。真正解释边界为 `5.1.1(b) C` 后“忠實保證屬於擔保這一分類”，到页脚前结束
- simple_explanation 是否应重写：应重写
- 是否允许下一轮自动清理：Yes
- 建议清理方式：保留忠实保证属于担保的核心句；删除重复题干、A-D、页眉表头及内部培训字样；重写五段式解析
- 风险等级：High，但 PDF 边界清楚
- 需要人工确认点：无需修题干/选项

## 题号：P1-1226

- source_file：`试卷一.pdf`
- source_page：171
- 当前污染字段：审计命中 `question`, `original_explanation`
- 污染类型：审计误判为题干污染；实际为题干原文包含“參考”
- PDF 题干是否完整：是。PDF 第 171 页题 181 原文即为“香港保險中介人在角色及職責上的法庭參考刊載於:”
- PDF 选项是否完整：是。A-D 与 JSON 一致
- correct_answer 是否一致：一致，PDF 为 A
- reference 是否一致：一致，PDF 为 `6.2.1`
- original_explanation 是否可清理：可清理。真正解释边界为 `6.2.1 A` 后“香港保險中介人在角色及職責上的法庭參考刊載於《保險業條例》”
- simple_explanation 是否应重写：应重写
- 是否允许下一轮自动清理：Yes
- 建议清理方式：不改题干；只去除 `original_explanation` 中重复 reference/answer 行，保留核心解释；重写五段式解析
- 风险等级：High 来源于误判，实际题干不需修改
- 需要人工确认点：是否接受 PDF 原文“法庭參考”这个表述；如怀疑应是“法定參考”，需另行人工查 PDF 图像或教材，不应自动改

## 题号：P1-1340

- source_file：`试卷一.pdf`
- source_page：190
- 当前污染字段：审计命中 `options`
- 污染类型：审计误判为选项污染；实际为选项原文包含“借參考/参考”
- PDF 题干是否完整：是。PDF 第 190 页题 66 为性别歧视合法待遇条件题
- PDF 选项是否完整：是。A-D 与 JSON 一致；A、B 中“借參考可合理依據來源...”为 PDF 选项原文
- correct_answer 是否一致：一致，PDF 为 A
- reference 是否一致：一致，PDF 为 `7.3.2`
- original_explanation 是否可清理：可清理。真正解释边界为 `7.3.2 A` 后两项条件：参照合理依据来源所得数据，且就数据及其他相关因素而言待遇合理
- simple_explanation 是否应重写：应重写
- 是否允许下一轮自动清理：Yes
- 建议清理方式：不改选项；保留两项合法差别待遇条件的核心解释；重写五段式解析
- 风险等级：High 来源于误判，实际选项不需修改
- 需要人工确认点：无需修选项；若要润色“借参考”用语，应另开人工校订任务，不属于污染清理

## 题号：P1-1372

- source_file：`试卷一.pdf`
- source_page：195
- 当前污染字段：`original_explanation`, `simple_explanation`
- 污染类型：相邻题残留；完整 A/B/C/D 块混入解释
- PDF 题干是否完整：是。PDF 第 195 页题 98 为《防止贿赂条例》第 9(1) 条利益题
- PDF 选项是否完整：是。A-D 与 JSON 一致
- correct_answer 是否一致：一致，PDF 为 D
- reference 是否一致：一致。PDF reference 分行为 `7.5.1 (a)(i)`，JSON 为同义多行字符串
- original_explanation 是否可清理：可清理。真正解释边界为 `7.5.1 (a)(i) D` 后“根據《防止賄賂條例》第9(1)條...如未經主事人的允許，不得索取或接受任何利益”，到下一题 `98 * 根據《防止賄賂條例》第9條...` 前结束
- simple_explanation 是否应重写：应重写
- 是否允许下一轮自动清理：Yes
- 建议清理方式：保留第 9(1) 条核心句；删除后续最高刑罚题题干、A-D、`7.5.1(a)(iv) B` 解释；重写五段式解析
- 风险等级：High，但 PDF 边界清楚
- 需要人工确认点：无需修题干/选项；reference 可保留现状，不建议在污染清理中改格式

## 题号：P3-590

- source_file：`试卷三.pdf`
- source_page：96
- 当前污染字段：`original_explanation`, `simple_explanation`
- 污染类型：页眉/表头/#INTERNAL/内部培训字样；颜色背景提示；相邻题残留；完整 A/B/C/D 块大量混入解释
- PDF 题干是否完整：是。PDF 第 96 页题 71 为次顺位受益人题
- PDF 选项是否完整：是。A-D 与 JSON 一致
- correct_answer 是否一致：一致，PDF 为 D
- reference 是否一致：一致，PDF 为 `4.4(b)`
- original_explanation 是否可清理：可清理，但必须严格按 PDF 边界截断。真正解释边界为 `4.4(b) D` 后“死亡保險金應付時，由第一順位受益人或第一受益人收取。以防所有第一順位受益人都不能比受保生命活得久，可在第一順位受益人以外，指定一個或一個以上的次順位受益人”，到下一题 `72 * 如果第一順位受益人...` 前结束
- simple_explanation 是否应重写：应重写
- 是否允许下一轮自动清理：Yes
- 建议清理方式：只保留题 71 的 `4.4(b) D` 解释；删除题 72 起及后续大量题目残留、页眉、表头、颜色背景提示、内部培训字样；重写五段式解析
- 风险等级：High，污染范围最大，但 PDF 边界清楚
- 需要人工确认点：下一轮修改时必须只截取题 71 解释，不能保留题 72 及后续内容

## 汇总

1. 10 道 High 中可自动清理：10 题  
   `P1-851`、`P1-864`、`P1-887`、`P1-895`、`P1-926`、`P1-983`、`P1-1226`、`P1-1340`、`P1-1372`、`P3-590`

2. 必须人工确认后才可修正题干/选项：0 题  
   `P1-1226` 和 `P1-1340` 经 PDF 文本核对后更像污染扫描误判，不建议改题干或选项。

3. 是否有题干/选项需要修正：未发现。  
   `P1-1226` 的“參考”属于 PDF 题干原文；`P1-1340` 的“借參考”属于 PDF 选项原文。

4. 是否发现 correct_answer 疑似问题：未发现。  
   10 题当前 `correct_answer` 均与 PDF 抽取文本一致。

5. 下一轮最小安全修改范围：
   - 只修改上述 10 题的 `original_explanation` 与 `simple_explanation`
   - 不修改 `correct_answer`
   - 不修改 `source_page`
   - 不修改题干、选项
   - 不修改 `reference`、`chapter`、`section`
   - 优先清理相邻题残留最严重的 `P3-590`，但必须按题 71 的解释边界截断
