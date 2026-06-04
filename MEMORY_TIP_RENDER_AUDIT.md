# Memory Tip Render Audit

## 修改目的

P1-553 的 `simple_explanation` 已经是黄金样板，但网页答题结果区仍显示“新增题待复核：先确认答案 A 的教材依据。”。

只读检查确认，该旧内容来自同一题的 `memory_tip` 字段，而不是 `simple_explanation`。原 UI 在 `renderResult()` 中先显示 `simple_explanation`，再额外显示 `memory_tip`，导致：

- 大白话解析中已有第 4 段“记忆口诀”；
- 结果区又额外出现一个“记忆口诀”框；
- 旧的内部审计备注从 `memory_tip` 暴露到用户可见页面。

## 修改文件

- `app.js`
- `MEMORY_TIP_RENDER_AUDIT.md`

## 显示规则

新规则：

1. 如果 `simple_explanation` 存在且非空，只显示 `simple_explanation`。
2. 如果 `simple_explanation` 不存在或为空，才使用 `memory_tip` 作为大白话解析兜底。
3. 不再额外渲染独立的 `memory_tip` / “记忆口诀”框。
4. 原始 PDF 解析的折叠显示逻辑保持不变。

## 影响范围

本次只调整结果区渲染逻辑，不改变：

- 答题记录
- 错题统计
- 累计错题
- 章节进度
- 题号跳转
- 题库 JSON 字段
- 原始 PDF 解析折叠逻辑

## P1-553 原因说明

P1-553 的 `memory_tip` 字段仍包含历史备注：

```text
新增题待复核：先确认答案 A 的教材依据。
```

本轮任务严格禁止修改题库 JSON，因此未改 `memory_tip`。改为 UI 层不再在已有 `simple_explanation` 时额外显示 `memory_tip`。

## 检查结果

待本轮完成后记录：

- `node --check app.js`
- `git diff -- data/paper1_questions.json data/paper3_questions.json`
- `git status -sb`
