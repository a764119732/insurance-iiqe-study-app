---
name: project-a-recovery
description: Read-only recovery workflow for Project A. Use when starting or resuming a Project A conversation, checking local state, confirming safe next steps, or rebuilding context before any write task.
---

# Project A Recovery

Use this skill to restore context without changing project files.

## Workflow

1. Read `PROJECT_A_MEMORY.md`.
2. Check the latest commit:
   - `git status --short --branch`
   - `git log -1 --oneline`
   - `git rev-list --left-right --count main...origin/main`
3. Confirm `PROJECT_A_MEMORY.md` is not tracked:
   - `git ls-files PROJECT_A_MEMORY.md`
4. Confirm forbidden sources are not tracked:
   - PDF files
   - `iiqe_offline_300.html`
   - `sharedFiles/`
5. Identify the next safest task from the user request and memory.
6. Stop after recovery. Do not write files, stage, commit, push, or enter a batch automatically.

## Report

Return:

- current branch and commit
- ahead/behind state
- local-only memory status
- forbidden tracked-file status
- next task boundary
