# Risky 第一批 simple_explanation 重写审计报告

生成日期：2026-05-30

## 1. 本轮重写题号

本轮仅重写 `data/paper1_questions.json` 中以下 20 题的 `simple_explanation`：

`P1-316`、`P1-318`、`P1-319`、`P1-321`、`P1-323`、`P1-333`、`P1-337`、`P1-338`、`P1-339`、`P1-340`、`P1-341`、`P1-342`、`P1-343`、`P1-348`、`P1-352`、`P1-356`、`P1-361`、`P1-364`、`P1-365`、`P1-370`

## 2. 实际修改题数

| 项目 | 数量 |
| --- | ---: |
| 计划修改题数 | 20 |
| 实际修改题数 | 20 |
| 跳过题数 | 0 |

## 3. 跳过题数和原因

无跳过题。

## 4. 每题只修改 simple_explanation 的确认

| 题号 | 修改字段 | 保护字段状态 |
| --- | --- | --- |
| `P1-316` | `simple_explanation` | 未发现保护字段变化 |
| `P1-318` | `simple_explanation` | 未发现保护字段变化 |
| `P1-319` | `simple_explanation` | 未发现保护字段变化 |
| `P1-321` | `simple_explanation` | 未发现保护字段变化 |
| `P1-323` | `simple_explanation` | 未发现保护字段变化 |
| `P1-333` | `simple_explanation` | 未发现保护字段变化 |
| `P1-337` | `simple_explanation` | 未发现保护字段变化 |
| `P1-338` | `simple_explanation` | 未发现保护字段变化 |
| `P1-339` | `simple_explanation` | 未发现保护字段变化 |
| `P1-340` | `simple_explanation` | 未发现保护字段变化 |
| `P1-341` | `simple_explanation` | 未发现保护字段变化 |
| `P1-342` | `simple_explanation` | 未发现保护字段变化 |
| `P1-343` | `simple_explanation` | 未发现保护字段变化 |
| `P1-348` | `simple_explanation` | 未发现保护字段变化 |
| `P1-352` | `simple_explanation` | 未发现保护字段变化 |
| `P1-356` | `simple_explanation` | 未发现保护字段变化 |
| `P1-361` | `simple_explanation` | 未发现保护字段变化 |
| `P1-364` | `simple_explanation` | 未发现保护字段变化 |
| `P1-365` | `simple_explanation` | 未发现保护字段变化 |
| `P1-370` | `simple_explanation` | 未发现保护字段变化 |

## 5. 保护字段快照比对结果

写入脚本对 20 题的以下字段做了写入前后快照比对：

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
| 20 题保护字段 | 全部未变 |
| 20 题以外题目 | 未发现对象级内容变化 |
| `data/paper3_questions.json` | 未写入 |
| UI / 脚本 / README / PDF / 离线版 | 未修改 |

说明：写入过程中曾出现一次 PowerShell 管道编码导致的问号占位符校验失败；该问题只发生在目标 `simple_explanation` 字段，随后已用 UTF-8 payload 重新写入修复。最终检查以修复后的文件为准。

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
| 20 题五段式标题 | 全部存在 |

五段式标题检查包括：

- `这题考什么：`
- `为什么正确答案对：`
- `其他选项为什么不适合：`
- `记忆口诀：`
- `遇到类似题怎么快速判断：`

## 7. 污染词和编码检查结果

20 题 `simple_explanation` 污染词检查：

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
| 中文大面积丢失或乱码 | 未发现 |

## 8. 是否发现答案冲突

无。

本轮不修改 `correct_answer`，也未发现本批 20 题存在 JSON 答案与前序 PDF 只读核对结果直接冲突。

## 9. 下一步建议

建议先人工抽查本批 20 题，再继续 Risky 第二批审计。

抽查重点：

1. 否定题是否明确提醒反向问法。
2. 组合题是否逐项解释 i / ii / iii / iv。
3. “以上各项”题是否正确处理所有前置选项。
4. 是否存在解释过度展开或与 `original_explanation` 不一致的表述。

若人工抽查无问题，再进入 Risky 第二批只读审计。

