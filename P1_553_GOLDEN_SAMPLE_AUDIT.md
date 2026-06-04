# P1-553 Golden Sample Audit

## 修改目的

将 P1-553 单题返修为后续 Specificity Repair 的黄金样板题。目标是展示严格 4 段式、正确答案解释归位、第 3 段只解释非正确选项、无内部审计备注、无重复标题的用户可见解析标准。

本轮只允许修改：
- `data/paper1_questions.json` 中 P1-553 的 `simple_explanation`
- 新增本审计文件 `P1_553_GOLDEN_SAMPLE_AUDIT.md`

## P1-553 原问题

题号：P1-553

题干：以下哪项事实毋须向保险人披露？

正确答案：A

章节：第 3 章 保险原则

小节：3.2 最高诚信

reference：3.2.3b

原 `simple_explanation` 的主要问题：
- 第 3 段是“其他选项为什么错”，但仍包含正确答案 A 的解释。
- 第 2 段对正确答案解释偏短，不足以作为样板。
- 后续规则需要明确：第 2 段解释正确答案，第 3 段只解释非正确选项。

说明：P1-553 的 `memory_tip` 仍含历史待复核字样，但本轮严格授权只改 `simple_explanation`，因此未修改 `memory_tip`。

## 新 4 段式标准

本次写入的 `simple_explanation` 使用以下固定结构：

1. `1. 考点`
2. `2. 结论 + 解释`
3. `3. 一一解释其他选项为什么错`
4. `4. 记忆口诀`

关键格式要求：
- 严格只有 4 个一级编号标题。
- 没有第 5 段。
- 第 2 段集中说明正确答案 A 为什么对。
- 第 3 段只解释 B、C、D 为什么错。
- 第 4 段只出现一次 `4. 记忆口诀` 标题，正文没有单独重复“记忆口诀”。
- 用户可见解析不出现内部审计备注。

## 为什么可作为后续同类型题样板

P1-553 是最高诚信原则下的反向题，题目问“毋须披露”，容易被误写成普通正向题。新解析明确处理了三类关键风险：

- 题型方向：先指出这是找披露义务例外，不是找必须披露的重要事实。
- 正确答案归位：第 2 段完整解释 A 为什么属于不用披露的常识事实。
- 错误选项边界：第 3 段只解释 B/C/D 为什么仍属于通常必须披露的重要事实，不再重复 A 对。

因此它适合作为后续“最高诚信 / 披露义务 / 反向问法 / 例外题”的样板。

## 安全检查结果

已执行并通过：

- JSON parse 成功。
- P1=1391，P3=807，总计 2198。
- P1/P3 ID 连续。
- `git diff -- data/paper3_questions.json app.js style.css index.html README extract_questions.py` 无输出。
- 变更题号检查：`changed_ids=P1-553`。
- 变更字段检查：`changed_fields=simple_explanation`。
- P1-553 保护字段变化：0。
- 其他题目变化：0。
- 新 `simple_explanation` 与用户指定文本完全一致。
- 标题检查通过：`1. 考点` / `2. 结论 + 解释` / `3. 一一解释其他选项为什么错` / `4. 记忆口诀`。
- 没有第 5 段。
- 没有单独重复“记忆口诀”标题。
- 没有用户可见内部审计备注。
- 简体中文检查通过。
- `git diff --check` 通过。

## git status -sb

```text
## main...origin/main
 M data/paper1_questions.json
?? .claude/settings.local.json
?? FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md
?? P1_553_GOLDEN_SAMPLE_AUDIT.md
```
