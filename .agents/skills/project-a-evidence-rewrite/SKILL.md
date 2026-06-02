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
