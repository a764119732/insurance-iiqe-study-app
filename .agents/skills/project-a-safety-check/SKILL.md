---
name: project-a-safety-check
description: Project A question-bank safety validation workflow. Use after any authorized JSON write, before committing explanation batches, or when checking protected fields and encoding integrity.
---

# Project A Safety Check

Use this skill to validate question-bank changes.

## Required Checks

1. JSON parse for both question files.
2. Counts:
   - P1 = 1391
   - P3 = 807
   - total = 2198
3. ID continuity for P1 and P3.
4. Changed IDs exactly match the planned ID list.
5. Changed fields are limited to the authorized field list.
6. Protected fields have zero changes.
7. Do Not Auto overlap is zero.
8. Encoding pollution check:
   - repeated question-mark marker
   - replacement character
   - common mojibake markers
9. Staged-file check before commit:
   - only task-allowed files staged
   - no memory file
   - no forbidden source files

## Failure Rule

If any check fails, stop immediately. Do not continue to the next batch, commit, or push. Report the exact failure and current file state.
