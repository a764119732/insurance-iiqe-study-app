---
name: project-a-explanation-style
description: Project A simple_explanation writing standard. 4-section format for beginner-friendly, specific explanations.
---

# Project A Explanation Style

Use the 4-section explanation format for `simple_explanation`.

## Required Structure

```
1. 考点
2. 结论 + 解释
3. 一一解释其他选项为什么错
4. 记忆口诀
```

## Section Rules

### 1. 考点

- 必须用白话说明这题考哪个知识点。
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
- A/B/C/D 中每个非正确选项都必须有具体解释。
- **禁止空泛句**：
  - "与题干不符"
  - "不是本题要选的"
  - "属于正向项目"
  - "不符合原文"
  - "所以不选"
- 每个错误选项必须说明**具体错在哪里**：
  - 是另一个概念；
  - 是正常规则而题目问例外；
  - 是题干已经包含但不是答案；
  - 与题目方向相反；
  - 只是相似词但不是本题考点；
  - 范围过宽/过窄；
  - 主体、责任、时间、条件、对象不对。

### 4. 记忆口诀

- 必须和本题知识点有关。
- **不允许万能口诀。**
- **不允许只写"看清题干""注意关键词"。**
- 口诀要能帮助下次快速判断同类题。

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

## Writing Rules (General)

- Do not say only that an option does not match the question.
- Explain why each option is correct or wrong.
- For combination questions, explain included and excluded items.
- For negative, exception, and all-items questions, state the judgment direction first.
- For legal, regulatory, or institutional questions, rely on evidence audit. Do not invent rules.
- Keep wording beginner-friendly, concrete, and reviewable.
