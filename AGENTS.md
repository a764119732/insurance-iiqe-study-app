# AGENTS.md — Project A: insurance-iiqe-study-app

## Project identity

项目A是香港保险 IIQE 卷一/卷三刷题学习网页：

- Project path:
  - `<project-root>`
- Online site:
  - `https://a764119732.github.io/insurance-iiqe-study-app/`
- Current public deployment:
  - GitHub Pages
  - Branch: `main`
  - Folder: `/root`
- Current question bank:
  - P1 = 1391
  - P3 = 807
  - Total = 2198
- Main data files:
  - `data/paper1_questions.json`
  - `data/paper3_questions.json`
  - `data/syllabus.js`
- Main frontend files:
  - `index.html`
  - `app.js`
  - `style.css`
- Local-only memory file:
  - `PROJECT_A_MEMORY.md`
  - This file must remain local-only unless the user explicitly authorizes committing it.

## Non-negotiable safety boundaries

Do not modify, delete, move, rename, stage, commit, push, or upload these unless the user explicitly authorizes the exact action:

- Original PDFs
- `iiqe_offline_300.html`
- `sharedFiles/`
- `tmp/`
- `__pycache__/`
- `_vendor/`
- credentials, tokens, `.env`, logs
- local-only scripts
- `PROJECT_A_MEMORY.md` unless explicitly authorized

Do not upload PDFs, offline files, or `sharedFiles/` to GitHub.

Do not publish original PDF content or internal source material in README, deployment docs, GitHub Pages, audit reports intended for the public repository, or other public files.

## Protected question fields

Treat `data/paper1_questions.json` and `data/paper3_questions.json` as protected files.

Do not modify these fields unless the user explicitly authorizes exact IDs and exact fields:

- `id`
- `paper`
- `question`
- `question_traditional`
- `question_simplified`
- `options`
- `correct_answer`
- `source_page`
- `reference`
- `chapter`
- `chapter_title`
- `section`
- `section_title`

For explanation work:

- Risky / beginner-friendly rewrite tasks may only modify `simple_explanation` for explicitly listed question IDs unless the user gives a different scoped authorization.
- Do not modify `original_explanation` unless explicitly authorized.
- Do not bulk rewrite the full question bank.
- Prefer batches of 20–30 questions.
- Always use:
  - MANUAL_AUDIT
  - REWRITE_PLAN
  - REWRITE_AUDIT
  - SPOTCHECK
  - update `PROJECT_A_MEMORY.md`

## Current project stage

Completed and sealed:

1. New PDF integration
   - Online version only.
   - Offline version is no longer maintained.
2. Pollution cleanup
   - All 226 pollution hits were cleaned.
   - Final pollution scan was 0.
3. GitHub Pages deployment
   - Site is online.
   - Public URL:
     - `https://a764119732.github.io/insurance-iiqe-study-app/`
4. Online UX fixes
   - Multi-user browser-local data with namespace `iiqeStudyApp:v1`
   - Practice session persistence
   - Mock exam session separated from practice session
   - Sticky action bar
   - Custom continue/restart modal
   - wrongCount tracking
   - Big explanation display default:
     - `simple_explanation` shown by default as “大白话解析”
     - `original_explanation` collapsed by default as “原始 PDF 解析”

Do not redo sealed stages unless the user explicitly asks.

## LocalStorage rules

All user progress is browser-local.

Use the namespace:

- `iiqeStudyApp:v1`

Rules:

- Do not use the user's name, email, local path, machine name, or private identifiers in localStorage keys.
- Each visitor's progress, wrong questions, favorites, sessions, and settings must stay local to that visitor's browser.
- No backend exists.
- No automatic cross-device sync exists.
- Do not clear localStorage unless explicitly asked or a reset action is clearly scoped.
- Practice sessions and mock exam sessions must remain separated.
- Restarting a practice session must not clear:
  - global wrong-question records
  - favorites
  - cumulative statistics
  - `wrongCount`

wrongCount behavior:

- Wrong answer: `wrongCount + 1`
- Correct answer: do not decrease `wrongCount`
- Restart session: do not clear `wrongCount`
- If old data uses `mistakes[id].count`, preserve compatibility.

## UX rules

Do not break these existing behaviors:

- GitHub Pages online loading
- P1/P3 switching
- chapter / section practice
- random practice
- wrong question review
- favorites
- import/export
- practice session restore
- mock exam session restore
- sticky action bar
- custom continue/restart modal
- big explanation display
- original PDF explanation collapsed by default
- wrongCount display in wrong-question list and answer result area

When modifying `app.js`:

- Run `node --check app.js`.
- Verify no JSON hash changed if JSON was not intended to change.
- If browser testing is needed, prefer Codex in Chrome.
- Use Computer Use only if explicitly authorized or if Chrome/shell cannot complete the task.

## Project A GitHub Pages rules

Before committing:

- Run `git status --short`.
- Inspect staged files:
  - `git diff --cached --name-only`
- Confirm forbidden files are not staged or tracked:
  - `*.pdf`
  - `iiqe_offline_300.html`
  - `sharedFiles/`
  - `tmp/`
  - `__pycache__/`
  - `_vendor/`
  - `.env`
  - credentials
  - `PROJECT_A_MEMORY.md` unless explicitly authorized

Confirm `PROJECT_A_MEMORY.md` remains local-only when intended:

- `git ls-files PROJECT_A_MEMORY.md` should be empty.
- `Test-Path PROJECT_A_MEMORY.md` should be `True`.

After pushing:

- Run `git status --short --branch`.
- Run `git log -1 --oneline`.
- If requested, test:
  - `https://a764119732.github.io/insurance-iiqe-study-app/`
- Use Codex in Chrome for online smoke tests when needed.

Never modify GitHub Pages settings, repository visibility, account settings, tokens, credentials, or remote configuration without explicit user confirmation.

## Browser / Computer Use rules for Project A

Tool priority:

1. Use shell, Git, Node checks, and file inspection first.
2. Use Codex in Chrome for online/local page testing.
3. Do not use Computer Use by default.

Codex in Chrome may be used for:

- Opening the GitHub Pages site
- Checking Console / Network errors
- Confirming JSON / JS / CSS loads
- Testing P1/P3 practice
- Testing refresh/continue session behavior
- Testing sticky action bar
- Testing wrongCount display
- Testing explanation display
- Checking GitHub repository or Pages deployment status without changing settings

Computer Use may only be used when:

- the user explicitly allows it, or
- the task cannot reasonably be completed with shell, Git, file reads, Node, or Codex in Chrome.

Do not use Computer Use to:

- change GitHub settings
- change repository visibility
- configure Pages
- upload files
- publish deployments
- enter credentials
- clear browser data
- operate unrelated apps or sites

## Explanation rewrite workflow

For any beginner-friendly explanation work:

1. MANUAL_AUDIT
   - Read current question, options, correct answer, original explanation, existing simple explanation.
   - Identify risk type.
   - Decide if automatic rewrite is allowed.
   - Exclude Do Not Auto / legal boundary / answer conflict / option conflict cases.

2. REWRITE_PLAN
   - List exact question IDs.
   - List exact field to modify.
   - Usually only `simple_explanation`.
   - State protected fields that must remain unchanged.

3. REWRITE_AUDIT
   - Write only approved fields.
   - Use explicit UTF-8.
   - Run JSON parse.
   - Confirm P1/P3 counts.
   - Confirm ID continuity.
   - Confirm protected fields unchanged.
   - Confirm five-paragraph structure.
   - Confirm no encoding damage.

4. SPOTCHECK
   - Read rewritten items.
   - Check whether the explanation matches:
     - question
     - options
     - correct answer
     - original explanation
     - negative/combination/all-of-the-above logic
   - Record keep / needs repair / manual review.

5. MEMORY UPDATE
   - Update local `PROJECT_A_MEMORY.md`.
   - Do not commit `PROJECT_A_MEMORY.md`.

Do not jump directly from audit to JSON writing.

## Do Not Auto policy

Do not automatically rewrite or alter Do Not Auto questions.

Do Not Auto includes but is not limited to:

- legal boundary questions
- insurable interest boundary questions
- answer / option / original explanation conflict
- unclear PDF extraction
- unclear subject identity
- questions listed in `RISKY_DO_NOT_AUTO_REGISTRY.md`
- previously excluded questions such as:
  - `P3-036`
  - `P3-060`
  - `P3-061`
  - `P3-062`
  - `P1-357`
  - `P3-301`
  - `P3-302`
  - `P3-303`
  - `P3-304`
  - `P3-305`
  - `P3-543`
  - `P1-1192`
  - `P3-553`
  - `P3-555`

If a Do Not Auto question appears in a candidate batch, exclude it and report why.

## Testing rules

For frontend changes:

- Run:
  - `node --check app.js`
- Check static files if relevant.
- If JSON should not change, compare hashes or confirm no file modification.
- If online deployment is affected, wait for GitHub Pages to deploy and test the public URL.
- If automatic browser testing fails, explain why and provide manual smoke test steps.

For JSON changes:

- JSON parse must pass.
- P1 count and P3 count must be checked.
- ID continuity must be checked.
- Protected fields must be compared against snapshots.
- Encoding must be checked.

Encoding checks:

- `????`
- `�`
- `锟`
- obvious Chinese text loss

## PROJECT_A_MEMORY.md rules

`PROJECT_A_MEMORY.md` is local-only.

Update it after:

- significant UX changes
- deployment changes
- GitHub Pages changes
- Risky batch audit / rewrite / spotcheck
- full explanation strategy changes
- context over 70%
- user says context is nearly full
- user plans to open a new conversation

Do not commit it unless explicitly authorized.

If context exceeds 80%, stop doing write tasks and update only `PROJECT_A_MEMORY.md`.

The memory update must include:

- current project status
- recently completed task
- files modified
- files not modified
- validation results
- remaining risks
- next safest task
- recovery instruction for a new Codex conversation

## Low quota rules

If user says Codex quota is low:

- Do not run large JSON write tasks.
- Do not start large code rewrites.
- Prefer read-only audits, plans, queues, handoff files.
- Save every completed Markdown file immediately.
- Update `PROJECT_A_MEMORY.md` frequently.
- If interrupted, memory must say:
  - completed work
  - incomplete work
  - next starting point
  - forbidden actions

## Output format

At the end of every task, include:

1. Short summary
2. Changed files
3. Protected files not changed
4. Commands/checks run
5. Checks not run
6. Remaining risks
7. Manual confirmations needed

Then include:

【给 ChatGPT 的汇报】

1. 本轮目标
2. 实际执行内容
3. 创建的文件
4. 修改的文件
5. 明确未修改的关键文件
6. 检查/测试命令与结果
7. 未运行的检查/测试
8. 发现的问题或风险
9. 需人工确认的事项
10. 建议下一步 Codex 指令草稿

Rules:

- Do not include long internal reasoning.
- Do not claim files changed unless actually written.
- Do not claim checks passed unless actually run.
- If only inspection was performed, state: “只读检查，未修改文件。”
- Suggested next instruction must be safe, scoped, and specific.
