# Goal 2 全题库小白友好解析工程策略

更新时间：2026-05-31

## 1. 目标

把 Project A 全题库的 `simple_explanation` 逐步改造成保险小白能看懂、能复习、能排除干扰项的五段式解析。

目标不是一次性重写 2198 题，而是建立可审计、可中断、可回滚的长期工程流程。

## 2. 当前基线

- P1=1391，P3=807，总计 2198 题。
- 污染清理阶段已封存。
- Risky 第一批 20 题、第二批 30 题已重写并抽查通过。
- Do Not Auto 登记表已有 209 项。
- 离线版 `iiqe_offline_300.html` / `sharedFiles` 不再维护。
- 本阶段不修改 UI，不修改 README，不修改 PDF。

## 3. 每批规模

每批最多 30 题。

理由：

- 30 题以内可以人工审计每题的题干、选项、答案、原始解析和当前 `simple_explanation`。
- 可以在写入后逐题核对保护字段。
- 出错时回滚范围明确，不会污染大批题库。
- 便于在上下文、额度或人工精力不足时安全中断。

## 4. 固定流程

每批必须按以下顺序推进：

1. `MANUAL_AUDIT`
2. `REWRITE_PLAN`
3. `REWRITE_AUDIT`
4. `SPOTCHECK`
5. 更新 `PROJECT_A_MEMORY.md`

不得从扫描结果直接进入 JSON 写入。

## 5. 默认允许修改字段

默认只允许修改明确列入本批范围的题目的：

- `simple_explanation`

## 6. 禁止修改字段

除非用户针对具体题号和具体字段明确授权，否则禁止修改：

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
- `original_explanation`
- `memory_tip`
- `source_file`
- `tags`
- `is_hot_question`

## 7. 必须排除的题

以下题不得进入自动重写批次：

- `RISKY_DO_NOT_AUTO_REGISTRY.md` 中登记的题。
- 已标记法律边界、教材边界、答案依据不足的题。
- `correct_answer` 与题干、选项、原始解析存在疑似冲突的题。
- 原始解析为空或过短，当前 JSON 不足以支撑解释重写的题。
- 相邻题串题风险明显、PDF 抽取边界不清的题。

## 8. 五段式目标格式

每题建议统一为：

1. 这题考什么
2. 为什么选正确答案
3. 其他选项错在哪里
4. 记忆口诀
5. 遇到类似题怎么快速判断

组合题必须逐项解释 i/ii/iii/iv。

否定题必须明确提醒题干问的是“不正确 / 不属于 / 除外 / 不能”。

“以上各项 / 以上所有 / 以上皆是”题必须说明每个选项是否成立，以及为什么能选或不能选全项。

## 9. 质量标准

合格解析至少满足：

- 贴合题干问法。
- 贴合 A/B/C/D 每个选项。
- 贴合 `correct_answer`。
- 不扩大教材或法律结论。
- 不把否定题讲反。
- 不把“以上各项”题讲成普通单选。
- 不只重复原始解析。
- 不只说“这题考教材某节”。
- 不用“其他选项不符合题干考点”这类空泛句代替具体排除理由。

## 10. 批次优先级

优先处理：

- 当前 `simple_explanation` 明显模板化但 `original_explanation` 足够支撑重写的题。
- 低法律边界、低答案冲突风险的基础概念题。
- P1 / P3 中已稳定加载到线上站点、且不涉及 PDF 边界核对的题。

暂缓处理：

- Do Not Auto 题。
- 法律、监管、投诉、可保权益、不可异议、转让、除外责任等边界题。
- 需要 PDF 人工核对的题。

## 11. 校验要求

每批写入后必须检查：

- JSON parse。
- P1 / P3 题数。
- ID 连续。
- 只改指定题的 `simple_explanation`。
- 保护字段快照一致。
- 五段式标题是否齐全。
- 模板残留。
- 污染词残留。
- `????`
- `�`
- `锟`
- UTF-8 编码。

## 12. 本轮结论

本轮只生成工程方案，不写入题库 JSON。下一步最稳任务是先审计 `FULL_EXPLANATION_BATCH1_CANDIDATE_PLAN.md` 中列出的 30 题，再生成 Batch 1 的 `MANUAL_AUDIT`。
