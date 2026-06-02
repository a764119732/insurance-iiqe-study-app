---
name: project-a-commit-push
description: Safe Project A git commit and push workflow. Use when the user asks to commit and push an allowed Project A change to the fixed origin remote.
---

# Project A Commit Push

Use this skill for safe commit and push only after the task-specific work is complete.

## Pre-commit Checks

1. Run `git status --short`.
2. Stage only files allowed by the user task.
3. Check staged files:
   - `git diff --cached --name-only`
4. Confirm these are not staged:
   - `PROJECT_A_MEMORY.md`
   - PDF files
   - `iiqe_offline_300.html`
   - `sharedFiles/`
   - `tmp/`
   - `__pycache__/`
   - `_vendor/`
5. Run task-specific validation.

## Commit and Push

1. Commit with the exact message requested by the user.
2. Push only to:
   - `https://github.com/a764119732/insurance-iiqe-study-app.git`
3. Stop and ask if the remote differs, staged files are unexpected, credentials are unavailable, push fails, or force/history rewrite would be needed.

## Post-push Checks

1. Run `git status --short --branch`.
2. Run `git log -1 --oneline`.
3. Confirm `main...origin/main` is aligned.
4. Update local-only `PROJECT_A_MEMORY.md` with the real commit and push state.
