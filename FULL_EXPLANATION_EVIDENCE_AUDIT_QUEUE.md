# Full Explanation Evidence Audit Queue

Updated: 2026-06-02

## 1. 当前状态总结

本文件是基于 `FULL_EXPLANATION_REMAINING_AUDIT_MAP.md` 生成的人工证据审计队列。它不是 Batch 17 写入计划，不授权修改 JSON，不授权 commit 或 push。

当前状态：

| 项目 | P1 | P3 | 合计 |
|---|---:|---:|---:|
| 题库总数 | 1391 | 807 | 2198 |
| Batch 1-16 已处理唯一题号 | 776 | 312 | 1088 |
| 当前 JSON 五段式解释 | 774 | 325 | 1099 |
| 剩余未五段式优化 | 617 | 482 | 1099 |
| Batch 17 严格自动候选 | 0 | 0 | 0 |

Batch 1-16 已完成并提交推送，最新已推送提交为 `64260cd Add beginner-friendly explanations batch 16`。

不能继续自动批量写入的原因：

- 严格自动候选已经为 0。
- 剩余题目大量重叠法律边界、监管/制度事实、否定题、组合题、以上各项题、Do Not Auto 或来源依据不足。
- 当前 JSON 的 `original_explanation` 对剩余题不一定足以证明答案和每个选项的边界。
- 后续必须先做 PDF/教材/原题证据核验，再决定是否允许只改 `simple_explanation`。

## 2. 剩余题风险分组

以下统计主要采用 `FULL_EXPLANATION_REMAINING_AUDIT_MAP.md` 的保守口径。类别可重叠，不能相加为总数。

| 风险类型 | P1 | P3 | 合计 | 当前处理策略 |
|---|---:|---:|---:|---|
| 可人工核验后重写 | 约 379 题候选池 | - | 约 379 | 仅代表可排入人工证据队列；不是自动写入许可 |
| 需要 PDF/教材逐题确认 | 3 | 11 | 14 | 先核对原题、选项、答案依据和教材段落 |
| 监管/制度事实题 | 282 | 80 | 362 | 必须核对制度主体、金额、程序、机构名称和适用边界 |
| 法律边界题 | 469 | 180 | 649 | 不得自动处理；证据不足即停止 |
| Do Not Auto / 暂不处理 | 22 | 176 | 198 | 不进入本轮候选；需要单独深度核验 |
| 题干/选项/原解析/答案潜在不一致题 | 至少 1 | 至少 2 | 至少 3 | 以登记表显式风险为准；发现冲突即停止 |
| 组合题 | 4 | 3 | 7 | 人工确认 i/ii/iii/iv 或组合选项关系 |
| 否定题 | 243 | 245 | 488 | 人工确认题干是否问反，解释不得讲反 |
| “以上各项”题 | 165 | 105 | 270 | 人工确认每个子项是否全部成立 |

说明：

- “可人工核验后重写”是本轮只读筛选出的候选池口径：未五段式、非 Do Not Auto、未命中高风险法律关键词、无直接答案字母冲突、四个选项齐全、`original_explanation` 不太短。它只用于排队，不证明内容正确。
- “题干/选项/原解析/答案潜在不一致题”采用显式登记风险，例如 `P1-1192`、`P3-553`、`P3-555`；本轮未做 PDF 逐题实质比对。

## 3. 第一批人工证据审计候选

筛选原则：

- 题干和选项结构相对清楚。
- `original_explanation` 有一定文字依据。
- 当前 `simple_explanation` 不是稳定五段式，或不适合小白直接理解。
- 不在 Do Not Auto 登记表或显式排除清单内。
- 未命中本轮高风险法律边界关键词。
- 只能在 PDF/教材核验通过后，才可能进入后续只改 `simple_explanation` 的计划。

| # | 题号 | paper | chapter / section | correct_answer | 当前 simple_explanation 问题 | 风险类型 | 需要核验的证据 | 是否需要打开 PDF/教材 | 核验通过后是否可能只改 simple_explanation | 核验不通过处理 |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | P1-965 | P1 | 5 / 5.1 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 一般概念题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 2 | P1-979 | P1 | 5 / 5.1 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 一般概念题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 3 | P1-484 | P1 | 3 / 3.1 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 一般概念题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 4 | P1-1366 | P1 | 7 / 7.5 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 一般概念题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.5 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 5 | P1-699 | P1 | 3 / 3.4 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 一般概念题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 6 | P3-354 | P3 | 3 / 3.1 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 7 | P3-674 | P3 | 5 / 5.2 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 8 | P1-736 | P1 | 3 / 3.4 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 9 | P3-372 | P3 | 3 / 3.2 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 10 | P1-641 | P1 | 3 / 3.3 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 11 | P1-713 | P1 | 3 / 3.4 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 12 | P3-633 | P3 | 5 / 5.2 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 13 | P3-634 | P3 | 5 / 5.2 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 14 | P3-802 | P3 | 5 / 5.6 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.6 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 15 | P3-643 | P3 | 5 / 5.2 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 16 | P1-1339 | P1 | 7 / 7.3 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 17 | P1-1218 | P1 | 6 / 6.1 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 18 | P1-1219 | P1 | 6 / 6.1 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 19 | P1-1354 | P1 | 7 / 7.4 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 20 | P1-1104 | P1 | 6 / 6.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 21 | P1-1133 | P1 | 6 / 6.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 22 | P1-1316 | P1 | 7 / 7.2 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 23 | P1-1347 | P1 | 7 / 7.4 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 24 | P1-1194 | P1 | 6 / 6.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 25 | P1-1195 | P1 | 6 / 6.1 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 26 | P1-1211 | P1 | 6 / 6.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 27 | P1-1080 | P1 | 6 / 6.1 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 28 | P1-1114 | P1 | 6 / 6.1 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 29 | P3-008 | P3 | 1 / 1.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 1/1.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 30 | P3-692 | P3 | 5 / 5.2 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 31 | P1-1070 | P1 | 6 / 6.1 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 32 | P1-1071 | P1 | 6 / 6.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 33 | P3-443 | P3 | 3 / 3.3 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 34 | P3-444 | P3 | 3 / 3.3 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 35 | P1-1304 | P1 | 7 / 7.2 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 36 | P1-1305 | P1 | 7 / 7.2 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 37 | P1-1306 | P1 | 7 / 7.2 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 38 | P1-1307 | P1 | 7 / 7.2 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 39 | P1-710 | P1 | 3 / 3.4 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 40 | P3-588 | P3 | 4 / 4.4 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 4/4.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 41 | P3-727 | P3 | 5 / 5.3 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 42 | P3-745 | P3 | 5 / 5.3 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 43 | P1-1326 | P1 | 7 / 7.3 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 44 | P3-680 | P3 | 5 / 5.2 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 45 | P1-1342 | P1 | 7 / 7.3 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 46 | P3-719 | P3 | 5 / 5.3 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 47 | P3-404 | P3 | 3 / 3.2 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 48 | P3-772 | P3 | 5 / 5.4 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 49 | P3-774 | P3 | 5 / 5.4 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 50 | P1-1174 | P1 | 6 / 6.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 51 | P1-1175 | P1 | 6 / 6.1 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 52 | P1-1191 | P1 | 6 / 6.1 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 53 | P3-382 | P3 | 3 / 3.2 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 54 | P3-730 | P3 | 5 / 5.3 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 55 | P3-384 | P3 | 3 / 3.2 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 56 | P3-570 | P3 | 4 / 4.3 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 4/4.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 57 | P3-792 | P3 | 5 / 5.6 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.6 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 58 | P3-403 | P3 | 3 / 3.2 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 59 | P3-410 | P3 | 3 / 3.2 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 60 | P1-958 | P1 | 4 / 4.11 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 4/4.11 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 61 | P1-1168 | P1 | 6 / 6.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 62 | P1-1390 | P1 | 7 / 7.6 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.6 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 63 | P1-964 | P1 | 5 / 5.1 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 64 | P1-969 | P1 | 5 / 5.1 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 65 | P3-468 | P3 | 3 / 3.4 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 66 | P3-499 | P3 | 3 / 3.5 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.5 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 67 | P1-1179 | P1 | 6 / 6.1 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 68 | P1-1166 | P1 | 6 / 6.1 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 69 | P1-1167 | P1 | 6 / 6.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 70 | P3-506 | P3 | 3 / 3.6 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.6 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 71 | P1-1264 | P1 | 6 / 6.2 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 72 | P1-1088 | P1 | 6 / 6.1 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 73 | P1-1095 | P1 | 6 / 6.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 74 | P1-1096 | P1 | 6 / 6.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 75 | P1-1336 | P1 | 7 / 7.3 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 76 | P1-1341 | P1 | 7 / 7.3 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 77 | P1-492 | P1 | 3 / 3.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 78 | P1-1328 | P1 | 7 / 7.3 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 79 | P1-1144 | P1 | 6 / 6.1 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 80 | P1-1188 | P1 | 6 / 6.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 81 | P3-791 | P3 | 5 / 5.6 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.6 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 82 | P1-1178 | P1 | 6 / 6.1 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 83 | P1-1180 | P1 | 6 / 6.1 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 84 | P1-1181 | P1 | 6 / 6.1 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 85 | P3-585 | P3 | 4 / 4.4 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 4/4.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 86 | P3-587 | P3 | 4 / 4.4 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 4/4.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 87 | P3-763 | P3 | 5 / 5.3 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.3 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 88 | P1-1215 | P1 | 6 / 6.1 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 监管/制度事实 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 89 | P3-647 | P3 | 5 / 5.2 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 组合题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 90 | P3-687 | P3 | 5 / 5.2 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 91 | P1-997 | P1 | 5 / 5.1 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 92 | P1-999 | P1 | 5 / 5.1 | B | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 93 | P1-799 | P1 | 3 / 3.5 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.5 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 94 | P1-1317 | P1 | 7 / 7.2 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 7/7.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 95 | P1-1153 | P1 | 6 / 6.1 | D | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 6/6.1 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 96 | P3-586 | P3 | 4 / 4.4 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 否定题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 4/4.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 97 | P3-388 | P3 | 3 / 3.2 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 3/3.2 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 98 | P3-580 | P3 | 4 / 4.4 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 4/4.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 99 | P3-582 | P3 | 4 / 4.4 | C | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 4/4.4 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |
| 100 | P3-800 | P3 | 5 / 5.6 | A | 非五段式旧解释；未逐项拆清正确项和干扰项。 | 以上各项题 | 核对 PDF 原题、A-D 选项、correct_answer、原解析与教材 5/5.6 对应关系。 | 是 | 是，若证据一致，可只改 simple_explanation。 | 停止；转入人工复核或 Do Not Auto，不改 JSON。 |

## 4. 下一步流程

下一步不是 rewrite，也不是 Batch 17 JSON 写入。

下一步应生成并执行：

- `EVIDENCE_AUDIT_BATCH1_MANUAL_CHECK.md`

该文件应逐题记录：

- PDF/教材证据位置。
- PDF 原题、A-D 选项、`correct_answer` 是否一致。
- `original_explanation` 是否能支撑答案和干扰项排除。
- 是否允许后续只改 `simple_explanation`。
- 是否需要移入 Do Not Auto 或深度人工复核。

只有 `EVIDENCE_AUDIT_BATCH1_MANUAL_CHECK.md` 明确通过的题，未来才可进入字段级 `REWRITE_PLAN`。即使通过，默认也只允许修改指定题号的 `simple_explanation`。

## 5. 停止条件

遇到以下情况必须停止，不得写入 JSON：

- PDF/教材依据不足。
- `correct_answer` 与原解析或选项不一致。
- 涉及法律/监管边界，且证据不足以清楚界定。
- 题目疑似 OCR 污染、串题、选项抽取错误。
- 无法判断选项含义。
- 否定题、组合题或“以上各项”题无法逐项确认。

## 6. 本轮安全边界

本轮只允许：

- 新增本 Markdown 队列文件。
- 更新本地 `PROJECT_A_MEMORY.md` 记录本轮计划结果。

本轮禁止：

- 修改 `data/paper1_questions.json`。
- 修改 `data/paper3_questions.json`。
- 修改 `app.js`、`style.css`、`index.html`、`README.md`、`extract_questions.py`。
- 修改 PDF、离线版或 `sharedFiles/`。
- 处理 `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`。
- commit 或 push。
