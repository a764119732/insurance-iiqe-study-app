# GitHub Deployment Push Audit

Updated: 2026-05-31

## Summary

- Repository: `https://github.com/a764119732/insurance-iiqe-study-app.git`
- Branch: `main`
- Latest local commit: `130cb3d Prepare online IIQE study app for GitHub Pages`
- Push status: successful, based on user confirmation and local `main...origin/main` tracking status.
- GitHub Pages setting: user confirmed `Deploy from a branch`, branch `main`, folder `/(root)`.
- Expected GitHub Pages URL: `https://a764119732.github.io/insurance-iiqe-study-app/`

## Deployment Checks

- `git remote -v`: origin fetch/push both point to `https://github.com/a764119732/insurance-iiqe-study-app.git`.
- `git status --short --branch`: clean before this audit file and memory update; output was `## main...origin/main`.
- `git log -1 --oneline`: `130cb3d Prepare online IIQE study app for GitHub Pages`.
- Current branch: `main`.
- Question bank count verified by UTF-8 JSON parse:
  - Paper 1: 1391
  - Paper 3: 807
  - Total: 2198

## Confirmed Not Tracked By Git

Checked with `git ls-files` filtering forbidden paths and extensions.

- PDF files: not tracked
- `iiqe_offline_300.html`: not tracked
- `sharedFiles/`: not tracked
- `tmp/`: not tracked
- `__pycache__/`: not tracked
- `_vendor/`: not tracked

Also checked representative ignored files with `git check-ignore -v`:

- `iiqe_offline_300.html`
- `tmp/new_paper1_candidates.json`
- `tmp/http-server.log`
- `__pycache__/extract_questions.cpython-314.pyc`
- `_vendor/pypdf/__init__.py`

## Files Included In Initial Deployment Commit

The initial deployment commit contains the online static app and project Markdown records, including:

- `.gitignore`
- `index.html`
- `app.js`
- `style.css`
- `data/syllabus.js`
- `data/paper1_questions.json`
- `data/paper3_questions.json`
- `README.md`
- `GITHUB_PAGES_DEPLOYMENT.md`
- `ONLINE_DEPLOYMENT_AND_UX_AUDIT.md`
- `PROJECT_A_MEMORY.md`
- Existing Markdown audit, plan, handoff, and schema files.

## Files Excluded From Deployment Commit

- Any `.pdf`
- `iiqe_offline_300.html`
- `sharedFiles/`
- `tmp/`
- `__pycache__/`
- `_vendor/`
- Python scripts such as `extract_questions.py` and `audit_expand_400_plan.py`
- Logs, environment files, browser/test caches, and dependency directories

## Online Test Checklist

After GitHub Pages finishes publishing, verify:

1. Open `https://a764119732.github.io/insurance-iiqe-study-app/`.
2. Confirm `index.html`, `app.js`, `style.css`, and data files load without 404 errors.
3. Confirm the app displays Paper 1 and Paper 3 question counts.
4. Start a short practice session and verify answer selection works.
5. Check explanation display after answering a question.
6. Switch language/display modes if available.
7. Refresh the page and confirm local progress persistence behaves as expected.
8. Test on mobile viewport for layout and button usability.
9. Confirm no PDF, offline HTML, or `sharedFiles/` URL is publicly accessible from the repository tree.

## Notes

- No JSON, UI, PDF, offline HTML, `sharedFiles/`, `extract_questions.py`, or README content was modified during the deployment closeout check.
- This audit file was created after the initial GitHub push, so it is a local deployment record until explicitly committed and pushed in a later step.

## Final Deployment Verification

Updated: 2026-05-31

User confirmation:

- The deployment audit commit was pushed successfully.
- PowerShell showed: `130cb3d..17fcb03 main -> main`.
- A follow-up `git push` showed: `Everything up-to-date`.

Local Git checks:

- `git status --short --branch`: local branch is aligned with `origin/main`, but the working tree contains later local UX changes from the sticky-action-bar task:
  - `app.js`
  - `style.css`
  - `STICKY_ACTION_BAR_UX_AUDIT.md`
- `git log -1 --oneline`: `17fcb03 Add deployment audit and keep project memory local`.
- `git ls-files PROJECT_A_MEMORY.md`: empty, so `PROJECT_A_MEMORY.md` is no longer tracked by Git.
- `Test-Path PROJECT_A_MEMORY.md`: `True`, so the local memory file still exists.
- Tracked forbidden-file check: no PDF, `iiqe_offline_300.html`, or `sharedFiles/` is tracked.

Online smoke test:

- URL tested: `https://a764119732.github.io/insurance-iiqe-study-app/`
- Home page opened successfully in Chrome.
- Page title: `IIQE 刷题学习`.
- Console errors: none observed from the app page during the successful home/P1/P3 checks.
- Network / resource status:
  - Direct resource navigation to JSON files was blocked by the Chrome automation layer, so full DevTools-style Network status could not be read.
  - The app successfully rendered Paper 1 and Paper 3 content, which confirms the app path loaded `data/paper1_questions.json`, `data/paper3_questions.json`, and `data/syllabus.js` sufficiently for normal operation.
- Paper 1 practice:
  - Entered random Paper 1 practice successfully.
  - Answered one question successfully.
  - Plain-language explanation was visible by default.
  - Original PDF explanation was present and collapsed by default.
- Refresh / resume:
  - After refresh, the app returned to the home view with progress preserved.
  - Clicking the same Paper 1 random-practice scope caused Chrome automation to block on the native `confirm()` dialog, which is consistent with the expected "continue last practice / restart" prompt.
  - The native dialog blocked further automated DOM reads in that tab, so the prompt text could not be copied from automation.
- Paper 3 practice:
  - Switched to Paper 3 successfully.
  - Entered random Paper 3 practice successfully.
  - A Paper 3 question rendered with four options.

Notes:

- This verification did not modify GitHub Pages settings.
- This verification did not modify question-bank JSON, PDF, offline HTML, `sharedFiles/`, question text, options, `correct_answer`, `source_page`, `reference`, or `chapter/section`.
- The sticky-action-bar UX changes are still local-only at the time of this verification and are not part of the deployed `17fcb03` Pages version.
