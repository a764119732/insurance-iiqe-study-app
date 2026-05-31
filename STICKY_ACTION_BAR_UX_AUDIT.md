# Sticky Action Bar UX Audit

Updated: 2026-05-31

## Goal

Fix the practice-page UX issue where users had to scroll to the bottom after reading an explanation before they could continue.

This task did not process Goal 2, did not rewrite explanations, and did not modify question-bank JSON.

## Files Changed

- `app.js`
- `style.css`

## Implementation

- Added an answered-state class on the main practice view: `has-sticky-actions`.
- Added a fixed `.quiz-sticky-actions` bar that appears after a question is answered.
- The fixed bar includes:
  - Back
  - Favorite / unfavorite
  - Previous question
  - Next question / continue practice
- Kept the existing in-page bottom buttons.
- Added `id="quizResult"` to the explanation block.
- Added `scrollToQuizResult()` so answering a question scrolls to the explanation start, not to the page bottom.
- Added bottom padding while the fixed action bar is visible so it does not cover question content.
- Kept the existing behavior where the plain-language explanation is visible by default and the original PDF explanation remains collapsed.
- Did not change practice session persistence logic.

## Checks Run

- `node --check app.js`: passed.
- Static resource presence check: passed for `index.html`, `app.js`, `style.css`, `data/syllabus.js`, `data/paper1_questions.json`, and `data/paper3_questions.json`.
- `index.html` reference check: passed for `./style.css`, `./data/syllabus.js`, and `./app.js`.
- Git tracked-forbidden-file check: no PDF, `iiqe_offline_300.html`, or `sharedFiles/` tracked.
- Question-bank hashes remained unchanged:
  - `data/paper1_questions.json`: `91B09B49D131D16F36AF312C33DE57A0EAD6BDD6365C875773E5F4D0353730B1`
  - `data/paper3_questions.json`: `51B52F01A26B064765C1A4FFA74E4F0784F4B298EF2A036166F11F20D23EE737`

## Browser Automation Result

Browser click testing could not be completed in this environment.

- The in-app Browser plugin is missing its declared required file: `scripts/browser-client.mjs`.
- Chrome automation connected, but local URLs were blocked:
  - `http://127.0.0.1:8765/`: `net::ERR_BLOCKED_BY_CLIENT`
  - `http://localhost:8765/`: `net::ERR_BLOCKED_BY_CLIENT`
  - `file://` local page: blocked by automation URL policy

Because of that, the behavior still needs one manual smoke test in a normal browser.

## Manual Smoke Test Checklist

1. Open the local app or GitHub Pages app.
2. Start any practice session.
3. Answer a question.
4. Confirm the page scrolls to the explanation start.
5. Confirm the fixed action bar is visible without scrolling to the bottom.
6. Click Next question / continue practice from the fixed bar.
7. Refresh the page and confirm the practice session can continue.
8. Confirm the plain-language explanation remains visible by default.
9. Confirm the original PDF explanation remains collapsed by default.

## Confirmed Not Modified

- `data/paper1_questions.json`
- `data/paper3_questions.json`
- PDF files
- `iiqe_offline_300.html`
- `sharedFiles/`
- `correct_answer`
- `source_page`
- question text
- options
- `reference`
- `chapter/section`
