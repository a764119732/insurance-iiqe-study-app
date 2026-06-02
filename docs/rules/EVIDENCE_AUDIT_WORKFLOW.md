# Evidence Audit Workflow

## 适用背景

- Batch 17 strict automatic candidate 为 0 后，不再自动批量写解析。
- 剩余题目默认需要人工证据审计，再决定是否写入。

## 标准流程

1. Evidence queue
   - 从剩余题中选出候选队列。
   - 队列只用于审计优先级，不授权 JSON 写入。

2. Manual check
   - 只读审计 80-120 题。
   - 生成 `EVIDENCE_AUDIT_BATCHN_MANUAL_CHECK.md`。
   - 标明可写、人工确认、延后、Do Not Auto、证据不足或冲突。

3. Rewrite plan
   - 只纳入 manual check 明确可写题。
   - 生成 `EVIDENCE_AUDIT_BATCHN_REWRITE_PLAN.md`。
   - 明确题号、字段、证据依据和排除项。

4. JSON write
   - 小批写入计划内题目的 `simple_explanation`。
   - 建议每批实际写 20-50 题。
   - 不修改 protected fields。

5. Audit / spotcheck
   - 生成 `EVIDENCE_AUDIT_BATCHN_REWRITE_AUDIT.md`。
   - 生成 `EVIDENCE_AUDIT_BATCHN_REWRITE_SPOTCHECK.md`。
   - spotcheck 至少覆盖 30%，高风险题提高覆盖率。

6. Commit / push
   - 每个 evidence batch 独立校验、独立 commit、独立 push。

## 批量建议

- 每次只读审计 80-120 题。
- 从中筛出 30-60 题。
- 实际写入 20-50 题。
- 不要把多个 evidence batch 混进一个 commit。

## Do Not Auto

以下情况不得自动写入：

- Do Not Auto registry 命中。
- 法律边界不清。
- 证据不足。
- 答案冲突。
- 选项冲突。
- OCR 污染。
- 原始解析无法支撑逐项排错。
- 监管、法律、制度事实无法从 evidence audit 支撑。

## 硬停止

任何一步发现证据不足、答案冲突、Do Not Auto 命中、乱码、protected fields 变化或 staged 异常，必须停止并报告。
