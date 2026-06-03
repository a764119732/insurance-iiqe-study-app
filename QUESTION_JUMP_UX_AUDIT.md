# Question Jump UX Audit

## 1. 本轮目标

- 在练习页显示当前题号：`第 X / N 题`。
- 增加题号输入框和“跳转”按钮。
- 输入 `1` 跳到本轮第 1 题，输入 `N` 跳到最后一题。
- 非法输入不跳转，并在页面内提示，不使用 `alert`。
- 跳转只改变练习页当前位置，不清空答案、错题、收藏或统计。
- 已答题跳转回来保留答案和解析；未答题跳转回来仍可作答。
- sticky action bar 不遮挡跳转控件，移动端可用。

## 2. 实际改动

- `app.js`
  - 新增临时内存变量 `quizJumpMessage`，只用于当前页面错误提示，不写入 localStorage。
  - 在 `renderQuiz()` 中显示 `第 X / N 题`，并渲染题号跳转控件。
  - 新增 `renderQuestionJumpControl()`。
  - 新增 `jumpToQuestion(event)`：
    - 阻止表单默认提交。
    - 只接受纯数字。
    - 只允许 `1 <= 输入 <= quizQueue.length`。
    - 合法时只更新 `quizIndex = target - 1`，再调用既有 `persistPracticeSession()`。
    - 非法时不改 `quizIndex`，只显示页面内错误提示。
  - 新增 `focusQuestionJumpInput()`，非法输入后回到输入框并选中文本。
  - 在新建、继续、空练习、上一题、下一题、作答时清空旧跳转提示。
- `style.css`
  - 新增 `.question-jump`、`.question-jump-row`、`.question-jump-message` 等样式。
  - 移动端将跳转控件改为单列布局。

## 3. 明确未修改

- 未修改 `data/paper1_questions.json`。
- 未修改 `data/paper3_questions.json`。
- 未修改 PDF、离线版、`sharedFiles/`。
- 未修改 `README.md`。
- 未修改 `extract_questions.py`。
- 未修改 `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`。
- 未 commit。
- 未 push。

## 4. 行为审计

- 跳转只写入：
  - `quizIndex`
  - 练习 session 的 `currentIndex`，通过既有 `persistPracticeSession()` 同步
- 跳转不写入：
  - `state.answers`
  - `state.sessions.practice.answers`
  - `state.sessions.practice.answeredIds`
  - `state.mistakes`
  - `wrongCount`
  - `state.favorites`
  - `state.examHistory`
  - 题库 JSON
- 已答题状态仍由 `getPracticeAnswer(q.id)` 读取 session-local answers。
- 未答题题目仍渲染可点击选项。
- 非法输入错误提示写在 `#questionJumpMessage`，带 `aria-live="polite"`。

## 5. 检查结果

- `node --check app.js`：通过。
- JSON parse / counts / ID continuity：
  - P1 parse/count/id ok: 1391。
  - P3 parse/count/id ok: 807。
- JSON diff：`data/paper1_questions.json`、`data/paper3_questions.json` 无 diff。
- 编码污染扫描：`app.js`、`style.css`、`QUESTION_JUMP_UX_AUDIT.md`、`PROJECT_A_MEMORY.md` 未命中常见乱码标记。
- `project-a-safety-check` 相关项：
  - 本轮未写 JSON。
  - JSON parse、题数、ID 连续性已复查通过。
  - protected question fields 本轮未触碰。
- Browser smoke test：
  - 本地服务器：`http://127.0.0.1:4173`。
  - 进入随机练习后显示 `第 1 / 1391 题`、输入框和“跳转”按钮。
  - 输入 `3` 后跳到 `第 3 / 1391 题`。
  - 输入 `0` 后仍停留在第 3 题，并显示 `请输入 1 到 1391 之间的题号。`。
  - 在第 3 题作答后显示答案和解析，且 sticky action bar 可见。
  - 跳回第 1 题后未答题选项仍可点击。
  - 再跳回第 3 题后答案和解析仍保留，选项保持禁用。
  - 当前 Browser 未暴露视口切换能力，移动端未完成实际点击验证；本轮只完成 CSS 响应式规则审查。
- Git 状态：
  - 本轮新增 `QUESTION_JUMP_UX_AUDIT.md`。
  - 本轮修改 `app.js`、`style.css`、`PROJECT_A_MEMORY.md`。
  - 初始即存在未跟踪文件：`EVIDENCE_AUDIT_BATCH2_MANUAL_CHECK.md`、`EVIDENCE_AUDIT_BATCH2_REWRITE_PLAN.md`、`FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`。
  - 最终状态另有未跟踪文件：`tmp_evidence_batch2_rewrite.js`。

## 6. 风险与限制

- 当前工作区初始已有未跟踪文件，其中 `FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md` 属于本轮禁止修改文件；本轮未触碰，但“禁止文件未被跟踪”无法在不删除或处理既有文件的情况下变为完全干净。
- 最终状态出现 `tmp_evidence_batch2_rewrite.js` 未跟踪文件；本轮未读取、修改、删除该文件。
- Browser smoke test 会写入本地浏览器 localStorage 的练习 session 和一题作答记录；本轮未清空 localStorage。
- 移动端尚未在真实移动视口中点击验证；原因是当前 Browser runtime 未提供视口切换能力。
