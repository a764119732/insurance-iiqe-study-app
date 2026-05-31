# Batch 1 失败写入差异诊断

更新时间：2026-05-31

## 1. 诊断目标

只读比较当前工作区 `data/paper1_questions.json`、`data/paper3_questions.json` 与 Git HEAD 中对应 JSON 的差异范围，避免输出整份 JSON。

## 2. 诊断结果

| 检查项 | 结果 |
|---|---|
| 当前 JSON parse | 通过 |
| P1 题数 | 1391 |
| P3 题数 | 807 |
| 总题数 | 2198 |
| P1 ID 连续 | 通过 |
| P3 ID 连续 | 通过 |
| 变化题号数量 | 27 |
| 是否只变化 `simple_explanation` | 是 |
| 变化题号是否严格等于 Batch 1 27 题 | 是 |
| 是否误包含 `P1-018` / `P1-091` / `P3-131` | 否 |
| 是否有保护字段变化 | 否 |
| 诊断是否干净 | 是 |

## 3. 变化题号与字段

| 题号 | 变化字段 |
|---|---|
| `P1-002` | `simple_explanation` |
| `P1-003` | `simple_explanation` |
| `P1-004` | `simple_explanation` |
| `P1-005` | `simple_explanation` |
| `P1-007` | `simple_explanation` |
| `P1-010` | `simple_explanation` |
| `P1-011` | `simple_explanation` |
| `P1-012` | `simple_explanation` |
| `P1-013` | `simple_explanation` |
| `P1-014` | `simple_explanation` |
| `P1-015` | `simple_explanation` |
| `P1-019` | `simple_explanation` |
| `P1-020` | `simple_explanation` |
| `P1-038` | `simple_explanation` |
| `P1-040` | `simple_explanation` |
| `P1-047` | `simple_explanation` |
| `P1-072` | `simple_explanation` |
| `P1-081` | `simple_explanation` |
| `P1-090` | `simple_explanation` |
| `P1-092` | `simple_explanation` |
| `P1-120` | `simple_explanation` |
| `P1-121` | `simple_explanation` |
| `P1-122` | `simple_explanation` |
| `P1-128` | `simple_explanation` |
| `P1-129` | `simple_explanation` |
| `P3-024` | `simple_explanation` |
| `P3-124` | `simple_explanation` |

## 4. 保护字段变化

未发现保护字段变化。

## 5. SHA256

- 当前 P1 SHA256：`2F266F4E259E971FA0D4CE771264EA958CF8FEF538CF1A76BDC47C21805F70DB`
- 当前 P3 SHA256：`BBAB1BC09B723068404EF6AF38A125156116DEE80FD87EB5C145984C76624BD4`

## 6. 分支建议

诊断干净：可不恢复 JSON，直接补生成 Batch 1 audit、spotcheck，并更新 memory。
