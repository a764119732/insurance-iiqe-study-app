# 第三批污染清理计划

生成日期：2026-05-29

## 1. 第三批建议题数

第三批建议处理 30 题。

- P1：20 题
- P3：10 题
- 风险等级：全部 Medium
- Low：本轮未筛到独立 Low 题
- 污染字段：全部仅涉及 `original_explanation` / `simple_explanation`
- 是否建议自动清理：全部 Yes
- 是否需要人工确认 PDF 边界：全部 No

## 2. P1 / P3 数量

| 卷别 | 数量 |
| --- | ---: |
| P1 | 20 |
| P3 | 10 |
| 合计 | 30 |

## 3. 是否全部只涉及解释字段

是。第三批 30 题均只涉及：

- `original_explanation`
- `simple_explanation`

本批未选择题干污染题、选项污染题、相邻题残留严重题、完整 A/B/C/D 块混入解释题，亦未选择需要 PDF 人工确认边界的题。

## 4. 排除题说明

已排除第一批 Medium 15 题：

`P1-308`、`P1-410`、`P1-843`、`P1-850`、`P1-857`、`P1-1228`、`P1-1391`、`P3-306`、`P3-309`、`P3-320`、`P3-330`、`P3-340`、`P3-349`、`P3-358`、`P3-807`

已排除 High 已清理 10 题：

`P1-851`、`P1-864`、`P1-887`、`P1-895`、`P1-926`、`P1-983`、`P1-1226`、`P1-1340`、`P1-1372`、`P3-590`

已排除第二批 Medium 30 题：

`P1-317`、`P1-325`、`P1-333`、`P1-341`、`P1-348`、`P1-357`、`P1-364`、`P1-373`、`P1-382`、`P1-391`、`P1-400`、`P1-402`、`P1-418`、`P1-426`、`P1-434`、`P1-442`、`P1-450`、`P1-458`、`P1-465`、`P1-471`、`P3-366`、`P3-374`、`P3-381`、`P3-389`、`P3-397`、`P3-406`、`P3-415`、`P3-423`、`P3-430`、`P3-438`

额外排除：

- 题干污染题
- 选项污染题
- 含 `possible_adjacent_question_residue` 的题
- 含 `full_ABCD_block` 的题
- 需要 PDF 人工确认解释边界的题
- 法律边界题：`P3-036`、`P3-060`、`P3-061`、`P3-062`

筛选结果：

- `NEW_QUESTION_QUALITY_AUDIT.md` 中污染记录：226 条
- 已清理并排除：55 题
- 剩余安全候选：171 题
- 其中 P1：123 题
- 其中 P3：48 题

## 5. 30 题字段级计划

| 题号 | 所在文件 | 污染字段 | 污染类型 | 风险等级 | 建议修改字段 | 是否允许自动清理 | 建议清理方式 | 是否需要人工确认 PDF 边界 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `P1-478` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-486` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-493` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-500` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-506` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-513` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-521` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-528` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-536` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-542` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-549` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-556` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-564` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-571` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-577` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-584` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-591` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-598` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-606` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P1-614` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` | No |
| `P3-446` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` | No |
| `P3-454` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` | No |
| `P3-462` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` | No |
| `P3-470` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` | No |
| `P3-474` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` | No |
| `P3-481` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` | No |
| `P3-490` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` | No |
| `P3-500` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` | No |
| `P3-510` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` | No |
| `P3-520` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` | No |

## 6. 下一轮是否可以直接执行第三批清理

可以，但下一轮仍应先输出写入前字段级计划，并限制最小修改范围：

- 只修改 `data/paper1_questions.json` / `data/paper3_questions.json`
- 只修改上述 30 题的 `original_explanation` / `simple_explanation`
- 不修改 `correct_answer`
- 不修改 `source_page`
- 不修改题干
- 不修改选项
- 不修改 `reference`
- 不修改 `chapter` / `chapter_title`
- 不修改 `section` / `section_title`
- 不修改 UI、脚本、README、离线版、sharedFiles 或 PDF

建议写入后执行：

- JSON.parse 两个题库
- 复核 P1=1391、P3=807
- 复核 ID 连续
- 目标 30 题保护字段写入前后快照比对
- 目标字段污染关键词复扫
- 编码异常复扫

## 7. 本轮是否修改文件

- 未修改 `data/paper1_questions.json`
- 未修改 `data/paper3_questions.json`
- 未修改 UI、脚本、README、离线版、sharedFiles 或 PDF
- 本轮仅新增本计划文件：`POLLUTION_CLEANUP_BATCH3_PLAN.md`
