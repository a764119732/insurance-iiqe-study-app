# Risky 第三批写入指令草稿

生成日期：2026-05-30

以下内容可直接复制给新的 Codex 对话使用。

```text
继续项目A。

请先读取：
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\PROJECT_A_MEMORY.md
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\RISKY_BATCH3_MANUAL_AUDIT.md
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\RISKY_BATCH3_REWRITE_PLAN.md

本轮目标：
执行 Risky 第三批 26 题 `simple_explanation` 写入，并生成 `RISKY_BATCH3_REWRITE_AUDIT.md`。

只允许修改：
- `data/paper1_questions.json`
- `data/paper3_questions.json`

且只允许修改以下 26 题的 `simple_explanation`：

P1-1200, P1-1203, P1-1205, P3-541, P3-599, P3-714, P3-418, P3-751, P3-790, P1-460, P1-490, P1-530, P1-552, P1-576, P1-709, P1-732, P1-733, P1-778, P1-1160, P3-347, P3-498, P3-561, P3-677, P3-789, P1-423, P1-444

必须排除，不得写入：

P3-543, P1-1192, P3-553, P3-555

不得修改：
- `original_explanation`
- `question_traditional`
- `question_simplified`
- `options_traditional`
- `options_simplified`
- `correct_answer`
- `source_file`
- `source_page`
- `reference`
- `chapter`
- `chapter_title`
- `section`
- `section_title`
- `app.js`
- `index.html`
- `style.css`
- `extract_questions.py`
- `README.md`
- PDF
- 离线版
- `sharedFiles`

写入前必须做保护字段快照：

对 26 题保存以下字段：
- `original_explanation`
- `question_traditional`
- `question_simplified`
- `options_traditional`
- `options_simplified`
- `correct_answer`
- `source_file`
- `source_page`
- `reference`
- `chapter`
- `chapter_title`
- `section`
- `section_title`

每题 `simple_explanation` 必须使用五段式：

1. `这题考什么：`
2. `为什么正确答案对：`
3. `其他选项为什么不适合：`
4. `记忆口诀：`
5. `遇到类似题怎么快速判断：`

重写规则：
- 组合题必须逐项解释 i / ii / iii / iv。
- 否定题必须明确题干问的是“不正确 / 不是 / 不属于 / 不应出现”等反向问法。
- “以上各项 / 以上所有 / 以上皆是”题必须说明为什么全选成立，或为什么因包含错误项而不成立。
- 不编造 PDF 原文。
- 不写“其他选项与题干不一致”这类空泛句子，必须说明错在哪里。
- 对 `P1-444` 的债权人 / 欠债人表述要保守按 `original_explanation` 解释，不扩大法律结论。

写入后必须检查：

1. `data/paper1_questions.json` JSON parse 通过。
2. `data/paper3_questions.json` JSON parse 通过。
3. P1 题数仍为 1391。
4. P3 题数仍为 807。
5. 总题数仍为 2198。
6. P1 ID 从 `P1-001` 到 `P1-1391` 连续。
7. P3 ID 从 `P3-001` 到 `P3-807` 连续。
8. 26 题均包含五段式标题：
   - `这题考什么：`
   - `为什么正确答案对：`
   - `其他选项为什么不适合：`
   - `记忆口诀：`
   - `遇到类似题怎么快速判断：`
9. 26 题不再包含“新增题待人工复核”模板。
10. 26 题污染词未命中：
   - `#INTERNAL`
   - `INTERNAL`
   - `只供香港宏利內部培訓使用`
   - `只供內部培訓使用`
   - `版權所有`
   - `不得翻印`
   - `有顏色背景的題目`
11. 编码检查：
   - `????` 未命中
   - Unicode 替换符 `�` 计数 0
   - `锟` 未命中
12. 保护字段快照比对全部通过。
13. 计划外题号未写入。

写入后生成：

`RISKY_BATCH3_REWRITE_AUDIT.md`

审计报告必须包括：

1. 本轮写入题号。
2. 实际修改题数。
3. 跳过题数和原因。
4. 每题只修改 `simple_explanation` 的确认。
5. 保护字段快照比对结果。
6. JSON parse、题数、ID 连续检查结果。
7. 五段式、模板残留、污染词、编码检查结果。
8. 是否发现答案冲突。
9. 未修改 JSON 以外的任何文件的说明。
10. 下一步建议：先生成 `RISKY_BATCH3_REWRITE_SPOTCHECK.md` 做重写质量抽查，不要直接进入第四批写入。
```

## 执行边界

这份指令只用于未来写入阶段。本文件生成时未修改 JSON。
