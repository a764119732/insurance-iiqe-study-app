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
