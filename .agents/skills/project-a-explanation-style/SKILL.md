---
name: project-a-explanation-style
description: Project A simple_explanation writing standard. 4-section format, simplified Chinese only, no textbook references, concrete option reasons.
---

# Project A Explanation Style

Use the 4-section explanation format for `simple_explanation`.

## Required Structure (Strict 4-Section Only)

```
1. 考点
2. 结论 + 解释
3. 一一解释其他选项为什么错
4. 记忆口诀
```

**禁止出现第 5 段**，包括：
- "遇到类似题怎么快速判断"
- "快速判断"
- "做题技巧"
- 任何第 5 个段落标题

如需做题技巧，合并进第 4 段记忆口诀。

## Simplified Chinese Only

`simple_explanation` 必须统一使用简体中文。

- 允许保留英文术语括号，例如 Online shopping business。
- `original_explanation` 可以保持原文，不处理。
- **禁止** `simple_explanation` 中出现繁体字，例如：
  風險、純粹、應該、選項、題目、錯誤、賠償、關係、條款、責任、對、為什麼、
  關係、條例、監管、機構、種類、選擇、問題、這裏、甚麼、哪裏、裏面。
- 写入后必须做简繁检查，发现繁体字或繁简混用必须返修。

## No Textbook/Source References

`simple_explanation` 中**禁止**出现：
- "原始解析"
- "原文指出"
- "教材第 X 章第 X 节"
- "教材第几章第几节"
- "1.1.2a" 等编号
- "根据教材"
- "核心知识点：以……"
- "教材依据："
- "本章介绍"

这些可以存在于 rewrite_basis / plan，但不能出现在给用户看的大白话解析里。

## Section Rules

### 1. 考点

- 必须用**简体中文白话**说明这题考哪个知识点。
- 必须说明题型：正向题、反向题、例外题、定义题、组合题、判断题。
- **不允许大段复制 original_explanation。**
- **不允许只复述题干。**
- 如果是反向题，必须明确写"这是反向题/例外题"。

### 2. 结论 + 解释

- 必须直接说明正确答案是什么。
- 必须解释正确选项为什么命中题干。
- **不能只写"符合题意""原文支持""与题干一致"。**
- 如果题目是反向问法，必须解释为什么正确答案是"被排除/不属于/例外"的那个。

### 3. 一一解释其他选项为什么错

- 必须逐项解释未选选项。
- A/B/C/D 中每个非正确选项都必须有**具体**解释。

**禁止以下空泛句（完整清单）：**
- "与题干不符" / "不符合题意" / "所以不选" / "不是本题要选的"
- "属于正向项目" / "不符合原文"
- "描述的概念/主体/范围与教材不同" / "与教材分类不同" / "不是正确组合"
- "和本题要找的答案不同" / "和正确答案不同"
- "应用正确选项的规则来对应" / "概念/主体/范围不同"

**每个错误选项必须写成具体原因**，示例：
- ❌ "A 描述的概念与教材不同" → ✅ "A 是投机风险，因为炒股可能赚也可能亏"
- ❌ "B 和正确答案不同" → ✅ "B 是经营风险，因为做生意可能盈利也可能亏损"
- ❌ "C 不符合题意" → ✅ "C 是投资风险，因为买基金可能获利也可能亏损"
- ❌ "D 不在教材范围内" → ✅ "D 是纯粹风险，因为撞车只会造成损失，不会产生收益"

**具体错因类型**：
- 是另一个概念（说出具体是什么概念）；
- 是正常规则而题目问例外；
- 是题干已经包含但不是答案；
- 与题目方向相反；
- 只是相似词但不是本题考点；
- 范围过宽/过窄；
- 主体、责任、时间、条件、对象不对。

#### 3a. 组合题特殊规则

当题干包含 i / ii / iii / iv 或选项是「i, ii」「i, iii, iv」等组合时：

**必须先解释 i/ii/iii/iv，再解释 A/B/C/D。**

**必须先逐项解释每个罗马数字项目：**
- i 是什么，为什么对/错
- ii 是什么，为什么对/错
- iii 是什么，为什么对/错
- iv 是什么，为什么对/错

**然后再解释 A/B/C/D 为什么正确或错误：**
- 必须指出每个错误选项错在包含了哪个不该包含的项目，或漏掉了哪个应该包含的项目。
- 必须说清楚具体是哪一个罗马数字项目导致该选项错误。

### 4. 记忆口诀

- 必须和本题知识点有关。
- **不允许万能口诀。**
- **不允许只写"看清题干""注意关键词"。**
- 口诀要能帮助下次快速判断同类题。
- 如需做题技巧，合并在本段。

## "Needs Repair" Detection

Any `simple_explanation` hitting any of these is marked `needs_repair`:

1. 大段复述 original_explanation，连续相似内容超过 60 字。
2. 第 1 段过长，像教材原文，不像白话考点。
3. 其他选项解释空泛。
4. 没有逐项解释 A/B/C/D。
5. 反向题/例外题没有说明题目方向。
6. 出现重复句或同一规则反复说。
7. 记忆法是万能句，没有结合本题。
8. 正确答案解释只写"符合题意/原文支持"，没有讲清原因。
9. 对法律原则、保险原则、产品特征、监管制度题，只复述概念，不解释选项差异。
10. 格式虽然完整，但内容不能帮助保险小白判断下一道类似题。
11. 出现繁体字或繁简混用。
12. 出现"原始解析""教材第X章""1.1.2a"等教材引用式表达。
13. 出现第 5 段。
14. 选项解释为"和正确答案不同/概念不同"等空泛句。

## Spotcheck Quality Criteria

写入后 spotcheck 必须检查以下 5 项，任一失败则 `generic_explanation_count > 0` 并停止 commit：

| # | Check | Standard |
|---|-------|----------|
| 1 | `simplified_chinese_check` | 无繁体字 |
| 2 | `no_source_reference_check` | 无"原始解析/教材章節/编号" |
| 3 | `four_section_only_check` | 只有 1-4 段，无第 5 段 |
| 4 | `concrete_wrong_option_reason_check` | 每个错误选项有具体错因 |
| 5 | `no_generic_comparison_check` | 无"和正确答案不同"等空泛句 |

## Writing Rules (General)

- All `simple_explanation` must be in simplified Chinese.
- Do not reference textbook sections or original explanations.
- Do not say only that an option does not match the question.
- Explain why each option is correct or wrong with concrete reasons.
- For combination questions, explain included and excluded items.
- For negative, exception, and all-items questions, state the judgment direction first.
- For legal, regulatory, or institutional questions, rely on evidence audit. Do not invent rules.
- Keep wording beginner-friendly, concrete, and reviewable.
- Strict 4-section only. No 5th section.
