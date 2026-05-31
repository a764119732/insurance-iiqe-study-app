# Risky 第二批 simple_explanation 重写审计报告

生成日期：2026-05-30

## 1. 本轮重写题号

本轮仅重写 `data/paper1_questions.json` / `data/paper3_questions.json` 中以下 30 题的 `simple_explanation`：

`P1-461`、`P1-496`、`P1-498`、`P1-510`、`P1-519`、`P1-527`、`P1-575`、`P1-578`、`P1-620`、`P1-625`、`P1-650`、`P1-676`、`P1-823`、`P1-1057`、`P1-1126`、`P1-1163`、`P1-1184`、`P1-1197`、`P1-1198`、`P1-1239`、`P3-348`、`P3-376`、`P3-380`、`P3-428`、`P3-463`、`P3-473`、`P3-540`、`P3-563`、`P3-617`、`P3-726`

## 2. 实际修改题数

| 项目 | 数量 |
| --- | ---: |
| 计划修改题数 | 30 |
| 实际修改题数 | 30 |
| P1 修改题数 | 20 |
| P3 修改题数 | 10 |
| 跳过题数 | 0 |

## 3. 跳过题数和原因

无跳过题。

## 4. 每题只修改 simple_explanation 的确认

| 题号 | 修改字段 | 保护字段状态 |
| --- | --- | --- |
| `P1-461` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-496` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-498` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-510` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-519` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-527` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-575` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-578` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-620` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-625` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-650` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-676` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-823` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-1057` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-1126` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-1163` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-1184` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-1197` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-1198` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P1-1239` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P3-348` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P3-376` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P3-380` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P3-428` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P3-463` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P3-473` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P3-540` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P3-563` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P3-617` | `simple_explanation` | 写入脚本保护字段快照比对通过 |
| `P3-726` | `simple_explanation` | 写入脚本保护字段快照比对通过 |

## 5. 保护字段快照比对结果

写入脚本对 30 题的以下字段建立写入前快照，并在赋值后逐项比对：

- `original_explanation`
- `question_traditional`
- `question_simplified`
- `options_traditional`
- `options_simplified`
- `correct_answer`
- `source_page`
- `reference`
- `chapter`
- `chapter_title`
- `section`
- `section_title`

比对结果：

| 检查项 | 结果 |
| --- | --- |
| 30 题保护字段 | 全部未变 |
| 计划外题号 | 未写入 |
| 修改字段 | 仅 `simple_explanation` |
| UI / 脚本 / README / PDF / 离线版 | 未修改 |

说明：本轮写入前曾有一次通过 PowerShell 管道传递中文脚本给 Node 的尝试，被编码风险检查拦截，未写入 JSON。正式写入改用显式 UTF-8 临时脚本文件执行；临时脚本已删除。

## 6. JSON 校验结果

| 检查项 | 结果 |
| --- | --- |
| `data/paper1_questions.json` parse | 通过 |
| `data/paper3_questions.json` parse | 通过 |
| P1 题数 | 1391 |
| P3 题数 | 807 |
| 总题数 | 2198 |
| P1 ID 范围 | `P1-001` 至 `P1-1391` |
| P3 ID 范围 | `P3-001` 至 `P3-807` |
| P1 ID 连续 | True |
| P3 ID 连续 | True |
| 30 题五段式标题 | 全部存在 |
| 30 题残留“新增题待人工复核” | 未命中 |

五段式标题检查包括：

- `这题考什么：`
- `为什么正确答案对：`
- `其他选项为什么不适合：`
- `记忆口诀：`
- `遇到类似题怎么快速判断：`

## 7. 污染词和编码检查结果

30 题 `simple_explanation` 污染词检查：

| 污染词 | 结果 |
| --- | --- |
| `#INTERNAL` | 未命中 |
| `INTERNAL` | 未命中 |
| `只供香港宏利內部培訓使用` | 未命中 |
| `只供內部培訓使用` | 未命中 |
| `版權所有` | 未命中 |
| `不得翻印` | 未命中 |
| `有顏色背景的題目` | 未命中 |

编码检查：

| 检查项 | 结果 |
| --- | --- |
| `????` | 未命中 |
| Unicode 替换符 `�` | 0 |
| `锟` | 未命中 |
| 中文大面积丢失或乱码 | 未发现 |

## 8. 是否发现答案冲突

无。

本轮不修改 `correct_answer`，也未发现本批 30 题存在 `correct_answer` 与当前 `original_explanation` 的直接冲突。

## 9. 下一步建议

建议先抽查本批 30 题重写质量，再进入 Risky 第三批审计。

抽查重点：

1. `P1-1197`、`P1-1198`、`P3-540` 三题边界较细，应确认解释是否保守、未扩大题意。
2. 组合题是否逐项解释 i / ii / iii / iv。
3. 否定题是否明确提醒反向问法。
4. “以上各项 / 以上所有”题是否正确处理全选或排除逻辑。

若抽查无问题，再进入 Risky 第三批只读审计。
