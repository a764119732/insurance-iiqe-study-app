# 项目A最终交接状态

生成日期：2026-05-30

## 1. 本文件用途

本文件用于新 Codex 对话或 ChatGPT 规划阶段快速恢复项目A当前状态。

本轮只读恢复上下文，并新增交接/计划类 Markdown。未修改题库 JSON、UI、PDF、离线版、`sharedFiles`、`extract_questions.py` 或 README。

## 2. 当前题库状态

| 项目 | 状态 |
| --- | --- |
| 在线版 P1 题数 | 1391 |
| 在线版 P3 题数 | 807 |
| 总题数 | 2198 |
| P1 ID | `P1-001` 至 `P1-1391`，连续 |
| P3 ID | `P3-001` 至 `P3-807`，连续 |
| JSON parse | `data/paper1_questions.json`、`data/paper3_questions.json` 均已在既有报告中记录为通过 |
| 离线版 | 不再维护 |
| 当前主要风险 | 污染清零不等于答案、题干、选项和解析质量全部正确；Risky 阶段仍需小批量审计 |

当前阶段默认保护字段：

- 不改题干。
- 不改选项。
- 不改 `correct_answer`。
- 不改 `source_page`。
- 不改 `reference`。
- 不改 `chapter` / `section`。
- 不改 `original_explanation`，除非未来有单独明确指令和字段级计划。
- Risky 写入阶段只允许改指定题号的 `simple_explanation`。

## 3. 污染清理封存状态

污染清理阶段已完成并封存。

依据：

- `POLLUTION_CLEANUP_FINAL_REVIEW.md`
- `POLLUTION_CLEANUP_FINAL_BATCH_AUDIT.md`
- 各批次污染清理审计报告

封存结论：

| 检查项 | 结果 |
| --- | --- |
| 初始污染题 | 226 |
| 已清理污染题 | 226 |
| 跳过题 | 0 |
| 最终全库污染关键词复扫 | 0 题 |
| 非解释字段污染命中 | 0 |
| `????` | 未命中 |
| Unicode 替换符 `�` | 0 |

污染清理阶段只修改过解释字段：

- `original_explanation`
- `simple_explanation`

污染清理阶段未修改：

- 题干
- 选项
- `correct_answer`
- `source_page`
- `reference`
- `chapter` / `section`
- UI
- PDF
- 离线版
- `sharedFiles`
- `extract_questions.py`
- README

注意：污染清零只代表页眉、表头、内部培训标记、版权页脚、颜色背景提示等污染残留已清理；不代表答案依据、题干、选项和解析质量已经全部正确。

## 4. Risky 第一批完成状态

已生成文件：

- `RISKY_EXPLANATION_AUDIT_PLAN.md`
- `RISKY_BATCH1_MANUAL_AUDIT.md`
- `RISKY_BATCH1_REWRITE_PLAN.md`
- `RISKY_BATCH1_REWRITE_AUDIT.md`
- `RISKY_BATCH1_REWRITE_SPOTCHECK.md`

第一批已重写 20 题 `simple_explanation`：

`P1-316`、`P1-318`、`P1-319`、`P1-321`、`P1-323`、`P1-333`、`P1-337`、`P1-338`、`P1-339`、`P1-340`、`P1-341`、`P1-342`、`P1-343`、`P1-348`、`P1-352`、`P1-356`、`P1-361`、`P1-364`、`P1-365`、`P1-370`

抽查结论：

| 项目 | 结果 |
| --- | --- |
| 五段式完整 | 20/20 |
| 贴合题干、选项、答案 | 20/20 |
| 否定题逻辑讲反 | 未发现 |
| 组合题逻辑讲反 | 未发现 |
| “以上各项”逻辑讲反 | 未发现 |
| 建议保留 | 20/20 |
| 需要人工复核 | 0/20 |
| 需要返修 | 0/20 |

第一批写入只修改指定题目的 `simple_explanation`。

## 5. Risky 第二批完成状态

已生成文件：

- `RISKY_BATCH2_MANUAL_AUDIT.md`
- `RISKY_BATCH2_REWRITE_PLAN.md`
- `RISKY_BATCH2_REWRITE_AUDIT.md`
- `RISKY_BATCH2_REWRITE_SPOTCHECK.md`

第二批已重写 30 题 `simple_explanation`：

`P1-461`、`P1-496`、`P1-498`、`P1-510`、`P1-519`、`P1-527`、`P1-575`、`P1-578`、`P1-620`、`P1-625`、`P1-650`、`P1-676`、`P1-823`、`P1-1057`、`P1-1126`、`P1-1163`、`P1-1184`、`P1-1197`、`P1-1198`、`P1-1239`、`P3-348`、`P3-376`、`P3-380`、`P3-428`、`P3-463`、`P3-473`、`P3-540`、`P3-563`、`P3-617`、`P3-726`

写入审计状态：

- 跳过 0 题。
- 只修改 `simple_explanation`。
- 保护字段快照比对通过。
- JSON parse 通过。
- 题数仍为 P1=1391、P3=807，总计 2198。
- P1 / P3 ID 连续。
- 编码检查未发现问题。

抽查结论：

| 项目 | 结果 |
| --- | --- |
| 五段式完整 | 30/30 |
| 贴合题干、选项、答案 | 30/30 |
| 否定题逻辑讲反 | 未发现 |
| 组合题逻辑讲反 | 未发现 |
| “以上各项”逻辑讲反 | 未发现 |
| 建议保留 | 30/30 |
| 需要人工复核 | 0/30 |
| 需要返修 | 0/30 |

重点观察题：

- `P1-1197`
- `P1-1198`
- `P3-540`

这 3 题边界较细，但当前抽查结论为保守贴合题干、选项、答案和原始解析。未来若做 PDF 精核，可优先抽样，不阻塞进入第三批写入。

## 6. Risky 第三批当前状态

已生成文件：

- `RISKY_BATCH3_MANUAL_AUDIT.md`
- `RISKY_BATCH3_REWRITE_PLAN.md`
- `RISKY_BATCH3_WRITE_PROMPT.md`

第三批人工审计范围 30 题：

`P1-1200`、`P1-1203`、`P1-1205`、`P3-541`、`P3-543`、`P3-599`、`P3-714`、`P3-418`、`P3-751`、`P3-790`、`P1-460`、`P1-490`、`P1-530`、`P1-552`、`P1-576`、`P1-709`、`P1-732`、`P1-733`、`P1-778`、`P1-1160`、`P1-1192`、`P3-347`、`P3-498`、`P3-553`、`P3-555`、`P3-561`、`P3-677`、`P3-789`、`P1-423`、`P1-444`

第三批结论：

| 分类 | 题数 | 题号 |
| --- | ---: | --- |
| 可后续自动重写 `simple_explanation` | 26 | `P1-1200`、`P1-1203`、`P1-1205`、`P3-541`、`P3-599`、`P3-714`、`P3-418`、`P3-751`、`P3-790`、`P1-460`、`P1-490`、`P1-530`、`P1-552`、`P1-576`、`P1-709`、`P1-732`、`P1-733`、`P1-778`、`P1-1160`、`P3-347`、`P3-498`、`P3-561`、`P3-677`、`P3-789`、`P1-423`、`P1-444` |
| 必须人工确认 / 禁止自动处理 | 4 | `P3-543`、`P1-1192`、`P3-553`、`P3-555` |

第三批尚未执行 JSON 写入。

下一步只允许在明确写入轮次中执行：

1. 读取 `RISKY_BATCH3_WRITE_PROMPT.md`。
2. 只修改 26 题的 `simple_explanation`。
3. 排除 `P3-543`、`P1-1192`、`P3-553`、`P3-555`。
4. 写入后生成 `RISKY_BATCH3_REWRITE_AUDIT.md`。
5. 再只读抽查生成 `RISKY_BATCH3_REWRITE_SPOTCHECK.md`。

## 7. 第四批候选状态

已生成文件：

- `RISKY_REMAINING_GLOBAL_MAP.md`
- `RISKY_BATCH4_CANDIDATE_PLAN.md`
- `RISKY_STAGE_ROADMAP.md`

剩余风险池操作层统计：

| 层级 | P1 | P3 | 合计 |
| --- | ---: | ---: | ---: |
| Auto Rewrite Candidate | 880 | 406 | 1286 |
| Manual Review Required | 167 | 72 | 239 |
| Do Not Auto | 18 | 177 | 195 |

第四批候选 30 题：

`P1-462`、`P1-463`、`P1-468`、`P1-472`、`P1-487`、`P1-502`、`P1-508`、`P1-537`、`P1-539`、`P1-541`、`P1-555`、`P1-557`、`P1-593`、`P1-601`、`P1-640`、`P1-663`、`P1-687`、`P1-699`、`P1-713`、`P1-722`、`P3-354`、`P3-356`、`P3-377`、`P3-385`、`P3-391`、`P3-409`、`P3-416`、`P3-426`、`P3-443`、`P3-444`

第四批当前只是候选计划。下一步应先只读生成 `RISKY_BATCH4_MANUAL_AUDIT.md`，不得直接生成第四批写入计划，更不得直接修改 JSON。

## 8. 禁止自动处理题清单

已知必须继续排除 / 人工确认题：

- `P3-036`
- `P3-060`
- `P3-061`
- `P3-062`
- `P1-357`
- `P3-301`
- `P3-302`
- `P3-303`
- `P3-304`
- `P3-305`
- `P3-543`
- `P1-1192`
- `P3-553`
- `P3-555`

此外，`RISKY_REMAINING_GLOBAL_MAP.md` 中还有 Do Not Auto 层级：P1=18、P3=177、合计 195。该层级口径为 `original_explanation` 为空或过短，当前 JSON 不足以支撑自动重写。

完整登记另见：

- `RISKY_DO_NOT_AUTO_REGISTRY.md`

## 9. 永久安全边界

除非用户另行明确授权并给出字段级计划，否则永久遵守：

- 不改 `data/paper1_questions.json` 和 `data/paper3_questions.json`，除非该轮明确是题库写入轮次。
- 题库写入轮次也只能改指定题号的指定字段。
- Risky 写入默认只允许改 `simple_explanation`。
- 不改 `correct_answer`。
- 不改题干。
- 不改选项。
- 不改 `source_page`。
- 不改 `reference`。
- 不改 `chapter` / `section`。
- 不改 `original_explanation`。
- 不改 `app.js`、`index.html`、`style.css`。
- 不改 PDF。
- 不改离线版。
- 不改 `sharedFiles`。
- 不改 `extract_questions.py`。
- 不改 README。
- 不做批量删除、重命名、移动或仓库重置。

写入题库时必须校验：

- JSON parse。
- P1 / P3 题数。
- P1 / P3 ID 连续。
- 保护字段快照比对。
- 五段式标题。
- 模板残留。
- 污染词。
- 编码：`????`、`�`、`锟`。
- 是否有计划外题号被改。

## 10. 下次新对话恢复指令

可复制到新 Codex 对话：

```text
继续项目A。

请先读取：
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\PROJECT_A_MEMORY.md
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\PROJECT_A_FINAL_HANDOFF.md
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\NEXT_WEEK_CODEX_QUEUE.md

先只读恢复上下文，不要修改 JSON、UI、PDF、离线版、sharedFiles、extract_questions.py 或 README。

当前状态：
- 在线版 P1=1391，P3=807，总计 2198。
- 污染清理阶段已封存，全库污染关键词复扫为 0。
- Risky 第一批 20 题已重写 simple_explanation 并抽查通过。
- Risky 第二批 30 题已重写 simple_explanation 并抽查通过。
- Risky 第三批人工审计和重写计划已完成，26 题可写入，4 题禁止自动处理。
- 第三批尚未写入 JSON。
- 第四批只有候选计划，不得直接写入。

下一步最稳任务：
读取 RISKY_BATCH3_WRITE_PROMPT.md，执行第三批 26 题 simple_explanation 写入，并生成 RISKY_BATCH3_REWRITE_AUDIT.md。

硬性限制：
- 只允许修改 data/paper1_questions.json 与 data/paper3_questions.json 中指定 26 题的 simple_explanation。
- 必须排除 P3-543、P1-1192、P3-553、P3-555。
- 不改题干、选项、correct_answer、source_page、reference、chapter/section、original_explanation。
- 不改 UI、PDF、离线版、sharedFiles、extract_questions.py 或 README。
- 写入前做保护字段快照，写入后做 JSON parse、题数、ID 连续、五段式、模板残留、污染词、编码和保护字段校验。
```
