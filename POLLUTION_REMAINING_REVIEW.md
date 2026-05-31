# 剩余污染题复盘报告

生成日期：2026-05-29

## 1. 当前题库状态

| 项目 | 数量 |
| --- | ---: |
| P1 总题数 | 1391 |
| P3 总题数 | 807 |
| 合计 | 2198 |

两个题库 JSON 均已按 UTF-8 读取并成功解析。

说明：本轮统计基于当前 `data/paper1_questions.json` 与 `data/paper3_questions.json` 重新扫描，不只依赖旧审计报告。`參考` / `答案` 只在表头残留语境中计入污染，避免把正常 `reference` 字段或普通学习解析误判为污染。

## 2. 已清理污染题批次摘要

已清理合计 85 题：

| 批次 | 数量 | 说明 |
| --- | ---: | --- |
| 第一批 Medium | 15 | 自动清理解释字段污染 |
| High 清理 | 10 | 经人工核对后仅清理解释字段 |
| 第二批 Medium | 30 | 自动清理解释字段污染 |
| 第三批 Medium | 30 | 自动清理解释字段污染 |

## 3. 当前剩余污染总数

当前剩余污染题：141 题。

该数量已排除全部已清理 85 题；清理后未发现污染复发。

## 4. P1 / P3 分布

| 卷别 | 剩余污染题数 |
| --- | ---: |
| P1 | 103 |
| P3 | 38 |
| 合计 | 141 |

## 5. 按字段统计

| 字段 | 命中题数 |
| --- | ---: |
| question | 0 |
| options | 0 |
| original_explanation | 141 |
| simple_explanation | 141 |
| memory_tip | 0 |
| tags/reference/section | 0 |

结论：当前剩余污染全部集中在 `original_explanation` / `simple_explanation`。

## 6. 按污染类型统计

| 污染类型 | 命中题数 |
| --- | ---: |
| 内部培训 / `#INTERNAL` | 141 |
| 表头残留 | 138 |
| 页眉页脚 | 103 |
| 颜色背景提示 | 38 |
| 相邻题残留 | 0 |
| 完整 A/B/C/D 块 | 0 |
| 版权 / 不得翻印 | 0 |
| 其他 | 0 |

## 7. 清理后仍命中的题

无。

已清理的 85 题经当前污染关键词复扫，没有再次命中污染。

## 8. Safe Auto 清单

Safe Auto 共 141 题，均只污染 `original_explanation` / `simple_explanation`，未发现题干/选项污染、相邻题残留、完整 A/B/C/D 块或 PDF 边界风险。

P1 Safe Auto 103 题：

`P1-622`、`P1-629`、`P1-637`、`P1-642`、`P1-649`、`P1-657`、`P1-664`、`P1-672`、`P1-680`、`P1-688`、`P1-696`、`P1-704`、`P1-712`、`P1-720`、`P1-727`、`P1-735`、`P1-742`、`P1-749`、`P1-755`、`P1-762`、`P1-768`、`P1-776`、`P1-784`、`P1-791`、`P1-798`、`P1-806`、`P1-814`、`P1-821`、`P1-827`、`P1-832`、`P1-839`、`P1-872`、`P1-880`、`P1-902`、`P1-909`、`P1-916`、`P1-924`、`P1-929`、`P1-935`、`P1-942`、`P1-949`、`P1-956`、`P1-959`、`P1-967`、`P1-975`、`P1-990`、`P1-996`、`P1-1004`、`P1-1012`、`P1-1019`、`P1-1027`、`P1-1034`、`P1-1043`、`P1-1047`、`P1-1054`、`P1-1060`、`P1-1067`、`P1-1074`、`P1-1086`、`P1-1092`、`P1-1099`、`P1-1105`、`P1-1111`、`P1-1117`、`P1-1123`、`P1-1129`、`P1-1135`、`P1-1140`、`P1-1148`、`P1-1155`、`P1-1162`、`P1-1169`、`P1-1176`、`P1-1183`、`P1-1190`、`P1-1196`、`P1-1201`、`P1-1206`、`P1-1212`、`P1-1220`、`P1-1235`、`P1-1242`、`P1-1248`、`P1-1255`、`P1-1262`、`P1-1269`、`P1-1275`、`P1-1281`、`P1-1288`、`P1-1295`、`P1-1303`、`P1-1310`、`P1-1315`、`P1-1322`、`P1-1329`、`P1-1337`、`P1-1344`、`P1-1352`、`P1-1358`、`P1-1364`、`P1-1371`、`P1-1377`、`P1-1383`

P3 Safe Auto 38 题：

`P3-529`、`P3-536`、`P3-542`、`P3-549`、`P3-556`、`P3-564`、`P3-573`、`P3-581`、`P3-589`、`P3-598`、`P3-605`、`P3-611`、`P3-618`、`P3-624`、`P3-630`、`P3-635`、`P3-642`、`P3-649`、`P3-656`、`P3-664`、`P3-669`、`P3-675`、`P3-683`、`P3-690`、`P3-698`、`P3-704`、`P3-709`、`P3-717`、`P3-725`、`P3-733`、`P3-740`、`P3-747`、`P3-753`、`P3-761`、`P3-770`、`P3-779`、`P3-787`、`P3-794`

## 9. Manual Review 清单

当前剩余污染中未发现 Manual Review 题。

判断依据：

- 未命中题干/选项污染
- 未命中相邻题残留
- 未命中完整 A/B/C/D 块
- 未发现 `source_page`、`reference`、`chapter`、`section` 相关污染命中

## 10. Do Not Auto 清单

当前剩余污染中未命中 Do Not Auto 题。

保留政策排除题：

- `P3-036`
- `P3-060`
- `P3-061`
- `P3-062`

上述四题本轮当前 JSON 污染复扫未命中，但后续如出现相关法律边界清理需求，仍不建议自动处理。

## 11. 第四批 30 题最小安全候选

第四批建议处理 30 题：

- P1：20 题
- P3：10 题
- 风险等级：Medium
- 建议修改字段：只限 `original_explanation` / `simple_explanation`
- 是否需要人工确认 PDF 边界：No

| 题号 | 所在文件 | 污染字段 | 污染类型 | 风险等级 | 建议修改字段 | 是否允许自动清理 | 建议清理方式 | 是否需要人工确认 PDF 边界 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `P1-622` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-629` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-637` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-642` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-649` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-657` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-664` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-672` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-680` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-688` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-696` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-704` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-712` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-720` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-727` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-735` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-742` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-749` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-755` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P1-762` | `data/paper1_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；页眉页脚 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除页眉/页脚/表头/#INTERNAL/内部培训字样；保留核心解析句；重写五段式解析 | No |
| `P3-529` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留核心解析句，若无实质解析则清空；重写五段式解析 | No |
| `P3-536` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留核心解析句，若无实质解析则清空；重写五段式解析 | No |
| `P3-542` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留核心解析句，若无实质解析则清空；重写五段式解析 | No |
| `P3-549` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留核心解析句，若无实质解析则清空；重写五段式解析 | No |
| `P3-556` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留核心解析句，若无实质解析则清空；重写五段式解析 | No |
| `P3-564` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留核心解析句，若无实质解析则清空；重写五段式解析 | No |
| `P3-573` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留核心解析句，若无实质解析则清空；重写五段式解析 | No |
| `P3-581` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留核心解析句，若无实质解析则清空；重写五段式解析 | No |
| `P3-589` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留核心解析句，若无实质解析则清空；重写五段式解析 | No |
| `P3-598` | `data/paper3_questions.json` | `original_explanation`, `simple_explanation` | 内部培训 / `#INTERNAL`；表头残留；颜色背景提示 | Medium | `original_explanation`, `simple_explanation` | Yes | 删除表头/#INTERNAL/内部培训字样/颜色背景提示；保留核心解析句，若无实质解析则清空；重写五段式解析 | No |

## 12. 是否建议执行第四批清理

建议可以执行第四批清理。

第四批候选 30 题均属于 Safe Auto，且污染仍只集中在 `original_explanation` / `simple_explanation`。下一轮执行时仍应先输出写入前字段级计划，并严格限制只修改两个解释字段。

## 13. 是否建议先处理 Manual Review

不建议先处理 Manual Review。

原因：当前剩余污染中未发现 Manual Review 题；还有 141 道 Safe Auto 题可按批次稳定清理。建议先执行第四批，再复盘一次剩余总量。

## 14. 本轮是否修改文件

- 未修改 `data/paper1_questions.json`
- 未修改 `data/paper3_questions.json`
- 未修改 UI、脚本、README、离线版、sharedFiles 或 PDF
- 本轮仅新增本复盘报告：`POLLUTION_REMAINING_REVIEW.md`
