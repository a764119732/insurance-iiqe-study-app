# Session Restart And WrongCount Audit

Updated: 2026-05-31

## Goal

Fix the practice-session restart bug where choosing "restart" returned to the first question but still showed the previous answer state.

Also add a compatible cumulative wrong-answer counter named `wrongCount`.

This task did not process Goal 2, did not rewrite explanations, and did not modify question-bank JSON.

## Files Changed

- `app.js`

## Session Restart Fix

Before this change, practice rendering used the global `state.answers[id]` as the source of truth for whether the current question had already been answered. That made global study history leak into a newly restarted practice session.

The fix separates current-session answer state from global study statistics:

- New practice sessions now start with:
  - `currentIndex` set from the requested start index, normally `0`
  - `answers: {}`
  - `answeredIds: []`
- Continued practice sessions hydrate `session.answers` from older `answeredIds` plus existing global answers for backward compatibility.
- Practice rendering now reads `getPracticeAnswer(id)` instead of directly reading `state.answers[id]`.
- `chooseAnswer()` still writes to global `state.answers` for overall study statistics, but also writes the same answer into `state.sessions.practice.answers` for the current session.
- `persistPracticeSession()` now persists session-local answers and derives `answeredIds` from those session-local answers.

Result:

- Continue keeps the old session position and answered state.
- Restart creates a fresh session for that practice scope.
- Restart does not delete global answer history, favorites, mastered state, or mistakes.

## WrongCount

`state.mistakes[id]` now maintains both:

- `count`
- `wrongCount`

Compatibility behavior:

- Existing localStorage records with only `count` are normalized to also include `wrongCount`.
- Existing UI reads go through `getWrongCount(id)`, which supports both old and new data.
- Every wrong answer increments `wrongCount`.
- Correct answers do not reduce `wrongCount`.
- Restarting a practice session does not clear `wrongCount`.

UI:

- Existing question-list and mistake-list locations now display `错了 X 次` using `getWrongCount(id)`.
- The manual "加入错题本" button adds a question to the mistake list without incrementing `wrongCount`, so cumulative wrong count reflects actual wrong answers.

## Preserved Behavior

- Sticky action bar remains in place.
- Practice-session persistence remains under `iiqeStudyApp:v1`.
- Plain-language explanation remains visible by default.
- Original PDF explanation remains collapsed by default.
- Global study statistics remain based on global `state.answers`.
- Favorites are not cleared by restart.
- Mistake book entries and wrong counts are not cleared by restart.

## Checks Run

- `node --check app.js`: passed.
- Static resource presence check: passed for:
  - `index.html`
  - `app.js`
  - `style.css`
  - `data/syllabus.js`
  - `data/paper1_questions.json`
  - `data/paper3_questions.json`
- Question-bank hashes remained unchanged:
  - `data/paper1_questions.json`: `91B09B49D131D16F36AF312C33DE57A0EAD6BDD6365C875773E5F4D0353730B1`
  - `data/paper3_questions.json`: `51B52F01A26B064765C1A4FFA74E4F0784F4B298EF2A036166F11F20D23EE737`

## Browser Test Status

Automated browser testing was not completed in this local environment during this task.

Known tooling limitations from the previous deployment checks still apply:

- The in-app Browser plugin was missing its declared required `scripts/browser-client.mjs`.
- Chrome automation previously blocked local `127.0.0.1` / `localhost` URLs with `net::ERR_BLOCKED_BY_CLIENT`.
- `file://` local pages were blocked by automation policy.

Manual smoke test still needed:

1. Start a practice session.
2. Answer at least one question.
3. Refresh.
4. Enter the same practice scope.
5. Choose cancel / restart.
6. Confirm the first question is answerable and does not show the previous selection or result.
7. Answer incorrectly and confirm the mistake count increases.
8. Restart again and confirm `wrongCount` is not cleared.

## Confirmed Not Modified

- `data/paper1_questions.json`
- `data/paper3_questions.json`
- PDF files
- `iiqe_offline_300.html`
- `sharedFiles/`
- Question text
- Options
- `correct_answer`
- `source_page`
- `reference`
- `chapter/section`

## Follow-Up UX Patch

Updated: 2026-05-31

Additional changes:

- Replaced the native browser `confirm()` used for same-scope unfinished practice with a custom modal.
- Modal copy: `检测到这个范围有未完成练习，是否继续？`
- Modal buttons:
  - `继续上次练习`
  - `重新开始`
- `继续上次练习` restores the existing practice session.
- `重新开始` creates a fresh current practice session with:
  - `currentIndex: 0`
  - `answers: {}`
  - `answeredIds: []`
- Restart still does not clear global mistakes, favorites, global answer statistics, or `wrongCount`.
- The current answer-result area now displays `本题累计错了 X 次` when `wrongCount > 0`.
- Existing mistake-list `错了 X 次` display remains unchanged.

Files changed in this follow-up:

- `app.js`
- `style.css`
- `SESSION_RESTART_AND_WRONGCOUNT_AUDIT.md`

Checks to rerun after this follow-up:

- `node --check app.js`
- Question-bank hash check
- Git tracked forbidden-file check for PDF / offline HTML / `sharedFiles/`

Manual smoke test still recommended:

1. Enter a practice scope with an unfinished session.
2. Confirm the custom modal appears instead of native `确定/取消`.
3. Click `继续上次练习` and confirm old progress is restored.
4. Re-enter the same scope and click `重新开始`.
5. Confirm the first question has no previous answer state and can be answered again.
6. Answer incorrectly and confirm the result area shows cumulative wrong count.
