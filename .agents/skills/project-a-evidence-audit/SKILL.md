---
name: project-a-evidence-audit
description: Read-only manual evidence audit workflow for Project A question explanations. Use when asked to audit remaining questions, build an evidence audit batch, or generate EVIDENCE_AUDIT_BATCHN_MANUAL_CHECK.md without JSON writing.
---

# Project A Evidence Audit

Use this skill for manual evidence review only.

## Inputs

Read only the files needed for the batch:

- `FULL_EXPLANATION_EVIDENCE_AUDIT_QUEUE.md`
- `FULL_EXPLANATION_REMAINING_AUDIT_MAP.md`
- `RISKY_DO_NOT_AUTO_REGISTRY.md`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

## Workflow

1. Select 80-120 queue items for read-only audit.
2. For each item, inspect question, options, answer, current explanations, source metadata, and risk markers.
3. Exclude Do Not Auto, legal-boundary, evidence-insufficient, answer-conflict, option-conflict, and OCR-polluted items.
4. Mark 30-60 items as possible rewrite candidates only when evidence is clear enough.
5. Generate `EVIDENCE_AUDIT_BATCHN_MANUAL_CHECK.md`.

## Boundaries

- Do not modify JSON.
- Do not generate a rewrite plan unless the user asks for that task.
- Do not stage, commit, or push.
- If evidence is weak, mark the item manual-confirmation or Do Not Auto instead of writing.
