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
3. 逐项解释其他选项为什么错
4. 记忆口诀
```

`simple_explanation` 必须严格只有以上 4 个一级编号标题。一级标题必须逐字匹配，不得改写、增删标点、加入破折号，且不得出现第 5 个一级编号标题。

**禁止出现第 5 段**，包括：
- "5. 遇到类似题怎么快速判断"
- "5. 快速判断"
- "5. 做题技巧"
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

## No Internal Audit Notes In User-Facing Text

`simple_explanation` 是用户可见解析，禁止出现内部审计、返修计划或待确认备注，包括：

- "新增题待复核"
- "待人工复核"
- "先确认答案"
- "教材依据待确认"
- "rewrite_basis"
- "risk_note"
- "audit"
- "spotcheck"

这些只能出现在审计 Markdown、rewrite plan、spotcheck 文档中，不得出现在 `simple_explanation`。

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
- 正确答案为什么对，必须集中在第 2 段说明。
- **不能只写"符合题意""原文支持""与题干一致"。**
- **禁止写以下空泛句**："贴合原始解析""命中原始解析""符合教材规则""符合题意""原文支持""这个选项最直接"。必须改成真正的因果解释。
- 可以加入简短生活化类比帮助理解，但不能太长，不能喧宾夺主。
- 如果题目是反向问法，必须解释为什么正确答案是"被排除/不属于/例外"的那个。

### 3. 逐项解释其他选项为什么错

第 3 段标题必须固定为：`3. 逐项解释其他选项为什么错`。

禁止以下标题写法：
- `3. ——解释其他选项为什么错`
- `3. 一一解释其他选项为什么错`
- `3. 其他选项为什么不适合`
- `3. 其他选项为什么错`
- `3. 逐项解释`
- 任何带破折号或不完整标题的写法

- 第 3 段只能解释**非正确选项**为什么错。
- 如果正确答案是 A，第 3 段只解释 B/C/D 为什么错。
- 如果正确答案是 B，第 3 段只解释 A/C/D 为什么错。
- 如果正确答案是 C，第 3 段只解释 A/B/D 为什么错。
- 如果正确答案是 D，第 3 段只解释 A/B/C 为什么错。
- 第 3 段不要重复正确答案解释。
- 禁止在第 3 段写 "A 对" / "B 对" / "C 对" / "D 对"。
- 组合题例外：如果题目包含 i/ii/iii/iv，允许先说明每个小项对错；但必须先解释小项，再解释错误组合，且仍不得把正确选项的完整理由搬到第 3 段。
- 必须逐项解释未选选项。
- A/B/C/D 中每个非正确选项都必须有**具体**解释。

**禁止以下空泛句（完整清单）：**
- "与题干不符" / "不符合题意" / "所以不选" / "不是本题要选的"
- "属于正向项目" / "不符合原文"
- "描述的概念/主体/范围与教材不同" / "与教材分类不同" / "不是正确组合"
- "和本题要找的答案不同" / "和正确答案不同"
- "应用正确选项的规则来对应" / "概念/主体/范围不同"
- "没有抓住核心判断点" / "只是相邻概念"

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
- 主体、责任、时间、条件、对象不对；
- 主体错：选项说的是 A 角色/实体，但题目要的是 B；
- 关系错：把代理关系、买卖关系、雇佣关系搞混；
- 责任类型错：混淆民事责任/刑事责任/合约责任/侵权责任；
- 适用场景错：选项规则在某个场景对，但不适用本题场景；
- 方向相反：题目问"不/毋须/除外"，选项却在讲"要/必须/包括"；
- 漏掉关键条件：选项内容本身没错，但少了一个关键条件导致不完整；
- 把两个概念混在一起：选项描述混合了两个不同概念的特征。

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

第 4 段标题必须固定为：`4. 记忆口诀`。

- 必须和本题知识点有关。
- **不允许万能口诀。**
- **不允许只写"看清题干""注意关键词"。**
- 口诀要能帮助下次快速判断同类题。
- 如需做题技巧，合并在本段。
- 正文中不要再次重复"记忆口诀"四个字。

错误示例：

```text
4. 记忆口诀
记忆口诀
xxxx
```

正确示例：

```text
4. 记忆口诀
xxxx
```

## 专题规则

### 代理/委托/第三方/销售合约类题

- 必须分清三方关系：**委托人（principal）/ 代理人（agent）/ 第三方（third party）**。
- 代理人替委托人办事，法律效果通常归到委托人。
- 代理关系通常在委托人与代理人之间。
- 销售合约通常在委托人与商店/第三方之间。
- 不能把代理人与第三方之间误说成代理合约。
- 如果出现"转承责任（vicarious liability）"，必须说明它通常是雇主为雇员行为承担责任的概念，不要误套到普通代理购物场景。

### 合约相对性 / 第三者不是合约一方类题

- 如果题干问"这是哪个法律原则 / 哪个普通法原则"，这是**正向定义题**，不要误判为反向题。
- "第三者不是合约一方，因此没有责任履行合约条款"对应的是**合约的相对性（privity of contract）**。
- 必须说明：合约权利义务通常只在合约当事人之间产生，不会自动加到第三者身上。
- 不能写"C 是不正确/不属于的选项"。

## 生活化类比规则

- 解析可以加入简短生活化类比，但不能太长。
- 例如："你让朋友帮你买奶茶，朋友只是跑腿，买卖关系还是你和店之间。"
- 类比必须帮助理解法律关系，不能喧宾夺主。

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
15. 一级标题不是严格 4 个，或第 3 / 第 4 段标题不是固定标题。
16. 第 4 段正文再次重复"记忆口诀"标题。
17. 第 3 段解释了正确选项，或出现 "A 对" / "B 对" / "C 对" / "D 对"。
18. 出现内部审计备注，如"新增题待复核"、"待人工复核"、"先确认答案"、"教材依据待确认"、"rewrite_basis"、"risk_note"、"audit"、"spotcheck"。

## Spotcheck Quality Criteria

写入后 spotcheck 必须检查以下质量项，任一失败则计入 `generic_explanation_count` 或 `format_failure_count`，并停止 commit：

| # | Check | Standard |
|---|-------|----------|
| 1 | `simplified_chinese_check` | 无繁体字 |
| 2 | `no_source_reference_check` | 无"原始解析/教材章節/编号" |
| 3 | `four_section_only_check` | 只有 1-4 段，无第 5 段 |
| 4 | `concrete_wrong_option_reason_check` | 每个错误选项有具体错因 |
| 5 | `no_generic_comparison_check` | 无"和正确答案不同"等空泛句 |
| 6 | `exact_four_headings_check` | 一级标题严格等于 1-4 固定标题 |
| 7 | `no_duplicate_heading_check` | 正文不重复一级标题 |
| 8 | `no_fifth_section_check` | 不出现任何 `5.` 一级段落 |
| 9 | `section3_exact_title_check` | 第 3 段标题必须为 `3. 逐项解释其他选项为什么错` |
| 10 | `section4_no_repeated_memory_title_check` | 第 4 段正文不再重复"记忆口诀" |
| 11 | `section3_excludes_correct_answer_check` | 第 3 段只解释非正确选项，不解释正确答案 |
| 12 | `no_internal_audit_note_check` | 用户可见解析无内部审计备注 |
| 13 | `section4_single_memory_heading_check` | 第 4 段只出现一次 `4. 记忆口诀`，正文无单独一行"记忆口诀" |
| 14 | `teaching_style_check` | 第 2 段有因果解释（非模板句），第 3 段有具体错因类型 |
| 15 | `no_original_explanation_reference_check` | 无"贴合原始解析/命中原始解析/符合教材规则/符合题意" |
| 16 | `concrete_option_reason_check` | 每个错误选项包含具体错因类型（主体错/关系错/方向相反等） |
| 17 | `agency_relationship_check` | 代理类题正确区分委托人/代理人/第三方关系 |
| 18 | `contract_privity_direction_check` | 合约相对性题正确识别为正向定义题 |
| 19 | `no_empty_template_phrase_check` | 无"没有抓住核心判断点/只是相邻概念/不是本题要选的"等空泛模板句 |

如果任一格式检查失败：
- `format_failure_count` 必须 > 0。
- `generic_explanation_count` 必须 > 0。
- 不得 commit。
- 必须停止并汇报。

## Writing Rules (General)

- All `simple_explanation` must be in simplified Chinese.
- Do not reference textbook sections or original explanations.
- Do not say only that an option does not match the question.
- Explain the correct answer in section 2 only.
- In section 3, explain only incorrect answer choices; do not repeat the correct answer explanation.
- Do not include internal audit notes in user-facing `simple_explanation`.
- Explain why each option is correct or wrong with concrete reasons.
- For combination questions, explain included and excluded items.
- For negative, exception, and all-items questions, state the judgment direction first.
- For legal, regulatory, or institutional questions, rely on evidence audit. Do not invent rules.
- Keep wording beginner-friendly, concrete, and reviewable.
- Strict 4-section only. No 5th section.
- Use exact section headings only:
  `1. 考点`, `2. 结论 + 解释`, `3. 逐项解释其他选项为什么错`, `4. 记忆口诀`.
