# 第二批污染清理计划

生成日期：2026-05-29

## 1. 本轮目标

本轮只读筛选第二批可自动清理的 Medium/Low 污染题，不修改任何题库 JSON、UI、脚本、离线版或 PDF。

第二批建议处理：30 题。

- P1：20 题
- P3：10 题
- 风险等级：全部 Medium
- Low：本轮未筛到独立 Low 题
- 污染字段：全部仅涉及 `original_explanation` / `simple_explanation`

## 2. 已排除题目

已排除第一批已清理的 25 题：

- Medium 第一批 15 题：`P1-308`、`P1-410`、`P1-843`、`P1-850`、`P1-857`、`P1-1228`、`P1-1391`、`P3-306`、`P3-309`、`P3-320`、`P3-330`、`P3-340`、`P3-349`、`P3-358`、`P3-807`
- High 第一批 10 题：`P1-851`、`P1-864`、`P1-887`、`P1-895`、`P1-926`、`P1-983`、`P1-1226`、`P1-1340`、`P1-1372`、`P3-590`

额外排除：

- 题干污染题
- 选项污染题
- 含 `full_ABCD_block` 的题
- 含 `possible_adjacent_question_residue` 的题
- 需要 PDF 人工确认解释边界的题
- 法律边界题：`P3-036`、`P3-060`、`P3-061`、`P3-062`

## 3. 筛选依据

读取并核对：

- `POLLUTION_CLEANUP_PLAN.md`
- `POLLUTION_CLEANUP_BATCH1_AUDIT.md`
- `HIGH_POLLUTION_CLEANUP_AUDIT.md`
- `NEW_QUESTION_QUALITY_AUDIT.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

从 `NEW_QUESTION_QUALITY_AUDIT.md` 的 226 条污染命中中，按以下条件筛选：

- 不在已清理 25 题中
- 污染字段仅为 `original_explanation` / `simple_explanation`
- 不含题干或选项污染
- 不含相邻题残留
- 不含完整 A/B/C/D 选项块残留
- 不属于需人工确认法律边界题

筛选后剩余可自动处理候选：201 题。

- P1：143 题
- P3：58 题

本批从候选中选取 30 题，采用 20 道 P1 + 10 道 P3，兼顾上一批报告建议的 P1 起点和 P3 颜色背景/表头污染类型。

## 4. 第二批字段级计划

| 题号 | 所在文件 | 污染字段 | 污染类型 | 风险等级 | 建议修改字段 | 是否允许自动清理 | 建议清理方式 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `P1-317` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-325` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-333` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-341` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-348` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-357` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-364` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-373` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-382` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-391` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-400` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-402` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-418` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-426` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-434` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-442` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-450` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-458` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-465` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P1-471` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训 OCR 变体；题号/参考/表头残留；P1 页眉/页码 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样及 OCR 变体；保留原始解析核心句；重写五段式 `simple_explanation` |
| `P3-366` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` |
| `P3-374` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` |
| `P3-381` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` |
| `P3-389` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` |
| `P3-397` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` |
| `P3-406` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` |
| `P3-415` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` |
| `P3-423` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` |
| `P3-430` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` |
| `P3-438` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | `#INTERNAL` / `INTERNAL`；内部培训字样；题号/参考/题目解释表头；有颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留原始解析核心句，若无实质解析则清空 `original_explanation`；重写五段式 `simple_explanation` |

## 5. 下一轮执行边界

下一轮如果执行第二批清理，建议最小修改范围为：

- 只修改 `data/paper1_questions.json` / `data/paper3_questions.json`
- 只修改上述 30 题的 `original_explanation` / `simple_explanation`
- 不修改 `correct_answer`
- 不修改 `source_page`
- 不修改 `question_traditional` / `question_simplified`
- 不修改 `options_traditional` / `options_simplified`
- 不修改 `reference`
- 不修改 `chapter` / `chapter_title`
- 不修改 `section` / `section_title`
- 不修改 UI、脚本、README、离线版、sharedFiles 或 PDF

## 6. 建议清理策略

- `original_explanation` 有实质解析：删除污染，只保留核心解析句。
- `original_explanation` 仅有页眉、表头、内部培训字样、颜色背景提示等噪声：清空。
- `simple_explanation`：统一重写为五段式大白话解析。
- 写入前应先快照目标 30 题的受保护字段；写入后逐字段比对。
- 写入后必须 JSON.parse 两个题库，并复扫污染关键词和编码异常。

## 7. 本轮是否修改文件

- 未修改 `data/paper1_questions.json`
- 未修改 `data/paper3_questions.json`
- 未修改 UI、脚本、README、离线版、sharedFiles 或 PDF
- 本轮仅新增本计划文件：`POLLUTION_CLEANUP_BATCH2_PLAN.md`
