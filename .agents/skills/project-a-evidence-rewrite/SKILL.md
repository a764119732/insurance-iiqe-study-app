---
name: project-a-evidence-rewrite
description: Controlled Project A explanation rewrite workflow. Use when a task explicitly authorizes writing simple_explanation from a specific EVIDENCE_AUDIT_BATCHN_REWRITE_PLAN.md.
---

# Project A Evidence Rewrite

Use this skill only when the user explicitly authorizes JSON writing or explanation rewriting.

## Workflow

1. Read only the specified rewrite plan.
2. Extract the exact planned IDs and field scope.
3. Create protected-field snapshots before writing.
4. Modify only planned IDs' `simple_explanation`.
5. Do not modify:
   - `original_explanation`
   - question text
   - options
   - `correct_answer`
   - `source_page`
   - `reference`
   - chapter / section fields
6. Generate:
   - Use 4-section format from `project-a-explanation-style`: 1. 考点 2. 结论+解释 3. 一一解释其他选项为什么错 4. 记忆口诀
- **Strict 4-section only**：`simple_explanation` 必须严格只有 4 个一级编号标题：
  - `1. 考点`
  - `2. 结论 + 解释`
  - `3. 一一解释其他选项为什么错`
  - `4. 记忆口诀`
- **No 5th section**：禁止任何第 5 段（`5. 遇到类似题怎么快速判断`、`5. 快速判断`、`5. 做题技巧` 等）。如需做题技巧，必须合并进第 4 段。
- **Exact headings only**：第 3 段标题必须固定为 `3. 一一解释其他选项为什么错`，禁止 `3. ——解释其他选项为什么错`、`3. 其他选项为什么不适合`、`3. 其他选项为什么错`、`3. 逐项解释` 或任何带破折号 / 不完整标题。
- **No duplicate memory heading**：第 4 段标题必须固定为 `4. 记忆口诀`，正文中不要再次重复"记忆口诀"四个字。
- **Simplified Chinese only**：禁止繁体字。禁止"原始解析/教材第X章/1.1.2a"等教材引用。
- **Concrete wrong-option reasons**：每个错误选项必须说具体错因，禁止"和正确答案不同"等空泛句。
- **组合题特殊规则**：必须先逐项解释 i/ii/iii/iv，再解释 A/B/C/D。
   - Spotcheck must include: `simplified_chinese_check`, `no_source_reference_check`, `four_section_only_check`, `concrete_wrong_option_reason_check`, `no_generic_comparison_check`, `exact_four_headings_check`, `no_duplicate_heading_check`, `no_fifth_section_check`, `section3_exact_title_check`, `section4_no_repeated_memory_title_check`.
   - If any format check fails, count it in `generic_explanation_count` or `format_failure_count`, stop, and do not commit.
- `EVIDENCE_AUDIT_BATCHN_REWRITE_AUDIT.md`
   - `EVIDENCE_AUDIT_BATCHN_REWRITE_SPOTCHECK.md`
7. Run validation:
   - JSON parse
   - P1/P3 counts
   - ID continuity
   - changed-ID scope
   - changed-field scope
   - protected-field diff
   - Do Not Auto overlap
   - encoding checks

## Boundaries

- Stop on any validation failure.
- Do not stage, commit, or push unless the user explicitly asks for that task.
