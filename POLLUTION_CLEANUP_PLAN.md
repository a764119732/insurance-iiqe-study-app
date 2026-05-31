# 新增题污染清理方案

生成日期：2026-05-29

## 1. 当前在线版题库状态

- P1：1391 题，`P1-001` 至 `P1-1391`
- P3：807 题，`P3-001` 至 `P3-807`
- 总计：2198 题
- 在线版数据来源：
  - `data/paper1_questions.json`
  - `data/paper3_questions.json`
- 本报告只读依据：
  - `PROJECT_A_MEMORY.md`
  - `NEW_QUESTION_QUALITY_AUDIT.md`
  - `NEW_PDF_INTEGRATION_AUDIT.md`
  - `QUESTION_IMPORT_AUDIT.md`
  - `SECTION_IMPORT_AUDIT.md`
  - `MANUAL_REVIEW_CHECKLIST.md`

## 2. 污染题总数

| 项目 | 数量 |
| --- | ---: |
| P1 污染题 | 159 |
| P3 污染题 | 67 |
| 合计 | 226 |

污染清单来自 `NEW_QUESTION_QUALITY_AUDIT.md` 的 Polluted 记录。本报告未修改任何题库 JSON、UI、PDF、离线版或脚本。

## 3. 按污染位置统计

说明：审计报告中的字段名为 `question` / `options`，未进一步区分 traditional / simplified。

| 污染位置 | 题数 | 判断 |
| --- | ---: | --- |
| question_traditional / question_simplified | 1 | `P1-1226` 命中 `question:参考/參考`，不建议自动改题干 |
| options_traditional / options_simplified | 1 | `P1-1340` 命中 `options:参考/參考`，不建议自动改选项 |
| original_explanation | 225 | 主要污染位置 |
| simple_explanation | 224 | 主要污染位置 |
| memory_tip | 0 | 未命中 |
| tags / reference / section 相关异常 | 0 | 未命中 |
| 多字段污染 | 225 | 大多数同时污染 `original_explanation` 与 `simple_explanation` |

结论：污染主要集中在 `original_explanation` / `simple_explanation`，但已有 2 题命中题干或选项字段，不能完全按“解释字段清理”处理。

## 4. 按污染内容统计

| 污染内容 | 题数 | 说明 |
| --- | ---: | --- |
| `#INTERNAL` / `INTERNAL` | 221 | 多数与页眉、表头一起出现 |
| 只供香港宏利內部培訓使用 / 只供內部培訓使用 | 221 | 审计中实际命中为 `只供內部培訓使用` 或 OCR 变体 `只供內容培訓使用` |
| 版權所有 / 不得翻印 | 0 | 未命中 |
| 有顏色背景的題目 | 67 | 全部为 P3 污染题 |
| 題號 / 參考 / 答案 / 題目解釋 表头残留 | 222 | 最常见的结构性残留 |
| 页眉页脚 / 页码 | 154 | 主要表现为 `試卷一 第` |
| 上一题或下一题残留 | 8 | 高风险，可能混入其他题内容 |
| 多个完整 A/B/C/D 选项块混入解释 | 8 | 高风险，可能误导答案理解 |
| 其他明显噪声 | 0 | 未见独立其他类型 |

## 5. 风险等级统计

| 风险等级 | 题数 | 判定规则 |
| --- | ---: | --- |
| High | 10 | 题干/选项命中，或解释中混入相邻题残留、完整 A/B/C/D 选项块 |
| Medium | 216 | 污染在解释字段，含表头、页眉、内部培训字样、颜色背景提示等 |
| Low | 0 | 本轮未发现只有孤立、无害页脚或版权字样的题 |

High 题号：
`P1-851`、`P1-864`、`P1-887`、`P1-895`、`P1-926`、`P1-983`、`P1-1226`、`P1-1340`、`P1-1372`、`P3-590`

## 6. 污染命中清单

### P1 污染题

`P1-308`、`P1-317`、`P1-325`、`P1-333`、`P1-341`、`P1-348`、`P1-357`、`P1-364`、`P1-373`、`P1-382`、`P1-391`、`P1-400`、`P1-402`、`P1-410`、`P1-418`、`P1-426`、`P1-434`、`P1-442`、`P1-450`、`P1-458`、`P1-465`、`P1-471`、`P1-478`、`P1-486`、`P1-493`、`P1-500`、`P1-506`、`P1-513`、`P1-521`、`P1-528`、`P1-536`、`P1-542`、`P1-549`、`P1-556`、`P1-564`、`P1-571`、`P1-577`、`P1-584`、`P1-591`、`P1-598`、`P1-606`、`P1-614`、`P1-622`、`P1-629`、`P1-637`、`P1-642`、`P1-649`、`P1-657`、`P1-664`、`P1-672`、`P1-680`、`P1-688`、`P1-696`、`P1-704`、`P1-712`、`P1-720`、`P1-727`、`P1-735`、`P1-742`、`P1-749`、`P1-755`、`P1-762`、`P1-768`、`P1-776`、`P1-784`、`P1-791`、`P1-798`、`P1-806`、`P1-814`、`P1-821`、`P1-827`、`P1-832`、`P1-839`、`P1-843`、`P1-850`、`P1-851`、`P1-857`、`P1-864`、`P1-872`、`P1-880`、`P1-887`、`P1-895`、`P1-902`、`P1-909`、`P1-916`、`P1-924`、`P1-926`、`P1-929`、`P1-935`、`P1-942`、`P1-949`、`P1-956`、`P1-959`、`P1-967`、`P1-975`、`P1-983`、`P1-990`、`P1-996`、`P1-1004`、`P1-1012`、`P1-1019`、`P1-1027`、`P1-1034`、`P1-1043`、`P1-1047`、`P1-1054`、`P1-1060`、`P1-1067`、`P1-1074`、`P1-1086`、`P1-1092`、`P1-1099`、`P1-1105`、`P1-1111`、`P1-1117`、`P1-1123`、`P1-1129`、`P1-1135`、`P1-1140`、`P1-1148`、`P1-1155`、`P1-1162`、`P1-1169`、`P1-1176`、`P1-1183`、`P1-1190`、`P1-1196`、`P1-1201`、`P1-1206`、`P1-1212`、`P1-1220`、`P1-1226`、`P1-1228`、`P1-1235`、`P1-1242`、`P1-1248`、`P1-1255`、`P1-1262`、`P1-1269`、`P1-1275`、`P1-1281`、`P1-1288`、`P1-1295`、`P1-1303`、`P1-1310`、`P1-1315`、`P1-1322`、`P1-1329`、`P1-1337`、`P1-1340`、`P1-1344`、`P1-1352`、`P1-1358`、`P1-1364`、`P1-1371`、`P1-1372`、`P1-1377`、`P1-1383`、`P1-1391`

### P3 污染题

`P3-306`、`P3-309`、`P3-320`、`P3-330`、`P3-340`、`P3-349`、`P3-358`、`P3-366`、`P3-374`、`P3-381`、`P3-389`、`P3-397`、`P3-406`、`P3-415`、`P3-423`、`P3-430`、`P3-438`、`P3-446`、`P3-454`、`P3-462`、`P3-470`、`P3-474`、`P3-481`、`P3-490`、`P3-500`、`P3-510`、`P3-520`、`P3-529`、`P3-536`、`P3-542`、`P3-549`、`P3-556`、`P3-564`、`P3-573`、`P3-581`、`P3-589`、`P3-590`、`P3-598`、`P3-605`、`P3-611`、`P3-618`、`P3-624`、`P3-630`、`P3-635`、`P3-642`、`P3-649`、`P3-656`、`P3-664`、`P3-669`、`P3-675`、`P3-683`、`P3-690`、`P3-698`、`P3-704`、`P3-709`、`P3-717`、`P3-725`、`P3-733`、`P3-740`、`P3-747`、`P3-753`、`P3-761`、`P3-770`、`P3-779`、`P3-787`、`P3-794`、`P3-807`

## 7. 第一批 25 题清理方案

选择原则：优先 High，覆盖 P1 和 P3，覆盖题干/选项命中、相邻题残留、完整选项块、页眉页脚、表头、内部培训字样、颜色背景提示等类型。未选择 `P3-036`、`P3-060`、`P3-061`、`P3-062`。

| 题号 | paper | 当前字段污染位置 | 污染类型 | 风险等级 | 建议清理字段 | 清理方式 | 是否允许下一轮自动清理 | 不允许自动清理的原因 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `P1-851` | P1 | `original_explanation`, `simple_explanation` | 多个完整 A/B/C/D 选项块；上一题或下一题残留 | High | 暂不直接清理 | 需要对照 PDF 人工确认 | No | 解释中可能混入其他题内容，自动裁切容易删错或保留错题信息 |
| `P1-864` | P1 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；页眉；完整 A/B/C/D 块；相邻题残留 | High | 暂不直接清理 | 需要对照 PDF 人工确认 | No | 同时有页眉表头和相邻题残留，需确认原始解析边界 |
| `P1-887` | P1 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；页眉；完整 A/B/C/D 块；相邻题残留 | High | 暂不直接清理 | 需要对照 PDF 人工确认 | No | 同时有页眉表头和相邻题残留，需确认原始解析边界 |
| `P1-895` | P1 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；页眉；完整 A/B/C/D 块；相邻题残留 | High | 暂不直接清理 | 需要对照 PDF 人工确认 | No | 同时有页眉表头和相邻题残留，需确认原始解析边界 |
| `P1-926` | P1 | `original_explanation`, `simple_explanation` | 多个完整 A/B/C/D 选项块；上一题或下一题残留 | High | 暂不直接清理 | 需要对照 PDF 人工确认 | No | 解释中可能混入其他题内容，自动裁切容易删错或保留错题信息 |
| `P1-983` | P1 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；页眉；完整 A/B/C/D 块；相邻题残留 | High | 暂不直接清理 | 需要对照 PDF 人工确认 | No | 同时有页眉表头和相邻题残留，需确认原始解析边界 |
| `P1-1226` | P1 | `question`, `original_explanation` | 题干命中 `参考/參考`；解释命中 `參考` | High | 暂不直接清理 | 需要对照 PDF 人工确认 | No | 污染触及题干，本轮限制不允许改 `question` |
| `P1-1340` | P1 | `options` | 选项命中 `参考/參考` | High | 暂不直接清理 | 需要对照 PDF 人工确认 | No | 污染触及选项，本轮限制不允许改 `options` |
| `P1-1372` | P1 | `original_explanation`, `simple_explanation` | 多个完整 A/B/C/D 选项块；上一题或下一题残留 | High | 暂不直接清理 | 需要对照 PDF 人工确认 | No | 解释中可能混入其他题内容，自动裁切容易删错或保留错题信息 |
| `P3-590` | P3 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；颜色背景；题目解释表头；完整 A/B/C/D 块；相邻题残留 | High | 暂不直接清理 | 需要对照 PDF 人工确认 | No | P3 高风险样本，解释中同时有完整选项块和相邻题残留 |
| `P1-308` | P1 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；页眉；题号/参考残留 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P1-410` | P1 | `original_explanation`, `simple_explanation` | `#INTERNAL`；OCR 变体 `只供內容培訓使用`；表头；页眉；题号/参考残留 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P1-843` | P1 | `original_explanation`, `simple_explanation` | `#INTERNAL`；OCR 变体 `只供內容培訓使用`；表头；页眉；参考残留 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P1-850` | P1 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；页眉；题号/参考残留 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P1-857` | P1 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；页眉；题号/参考残留 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P1-1228` | P1 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；页眉；题号/参考残留 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P1-1391` | P1 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；页眉；题号/参考残留 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P3-306` | P3 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；有颜色背景；题目解释表头 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P3-309` | P3 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；有颜色背景；题目解释表头 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P3-320` | P3 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；有颜色背景；题目解释表头 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P3-330` | P3 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；有颜色背景；题目解释表头 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P3-340` | P3 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；有颜色背景；题目解释表头 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P3-349` | P3 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；有颜色背景；题目解释表头 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P3-358` | P3 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；表头；有颜色背景；题目解释表头 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |
| `P3-807` | P3 | `original_explanation`, `simple_explanation` | `#INTERNAL`；内部培训字样；有颜色背景 | Medium | `original_explanation`, `simple_explanation` | 删除页眉/页脚/表头；只保留原始解析核心句；重写 `simple_explanation` | Yes | 不适用 |

## 8. 不建议自动处理的题号

不建议下一轮自动清理：
`P1-851`、`P1-864`、`P1-887`、`P1-895`、`P1-926`、`P1-983`、`P1-1226`、`P1-1340`、`P1-1372`、`P3-590`

原因：
- `P1-1226` 命中题干字段，`P1-1340` 命中选项字段；按当前限制不得改 `question/options`。
- 其余 High 题存在完整 A/B/C/D 选项块或相邻题残留，自动裁剪可能误删原始解析或保留其他题内容。
- 这些题应先对照 PDF 标出正确解析边界，再决定是否清空 `original_explanation` 或人工重写。

## 9. 下一轮建议的最小修改范围

建议下一轮只处理第一批中允许自动清理的 15 题：
`P1-308`、`P1-410`、`P1-843`、`P1-850`、`P1-857`、`P1-1228`、`P1-1391`、`P3-306`、`P3-309`、`P3-320`、`P3-330`、`P3-340`、`P3-349`、`P3-358`、`P3-807`

最小修改范围：
- 只修改 `data/paper1_questions.json` 和 `data/paper3_questions.json` 中上述题号的 `original_explanation`、`simple_explanation`。
- 不修改 `correct_answer`。
- 不修改 `source_page`。
- 不修改 `question_traditional`、`question_simplified`。
- 不修改 `options_traditional`、`options_simplified`。
- 不修改 `reference`、`chapter`、`section`、`section_title`。
- 不修改 `app.js`、`style.css`、`index.html`、`extract_questions.py`、README、离线版、sharedFiles 或 PDF。

建议执行方式：
1. 先为上述 15 题生成具体字段级 diff。
2. 对每题只删除明显页眉、页脚、表头、内部培训字样和颜色背景提示。
3. `original_explanation` 如无法可靠保留核心句，则不要强行编写，应标记为需 PDF 复核。
4. `simple_explanation` 可重写为简短模板，但必须避免改变答案依据。
5. 修改后只运行 JSON 结构检查和污染关键词复扫。

## 10. 本轮结论

- 污染主要集中在 `original_explanation` / `simple_explanation`。
- 有污染出现在题干或选项：`P1-1226` 命中题干，`P1-1340` 命中选项。
- 第一批建议清理 25 题，其中 15 题可作为下一轮自动清理候选，10 题应先人工核对。
- 下一轮可以执行第一批中的自动清理子集，但不应自动处理 High 题。
