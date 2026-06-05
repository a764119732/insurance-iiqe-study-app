# Highlight And Last Question UX Audit

## 1. 本轮目标

- 增加题干 highlight 标注功能。
- 增加继续上次题目跳转功能。
- 使用浏览器本地 `localStorage` 保存，不接外部 API，不改题库 JSON。

## 2. 修改文件清单

- `app.js`
- `style.css`
- `README.md`
- `HIGHLIGHT_LAST_QUESTION_UX_AUDIT.md`

## 3. localStorage Keys

- `iiqeStudyApp:questionHighlights:v1`
- `iiqeStudyApp:lastQuestion:v1`

## 4. Highlight 实现方式

- 用户在当前题干 `.question-title` 内选中文字后，点击“高亮选中文字”。
- 代码用 `window.getSelection()` 读取选区，并校验选区属于当前题干容器。
- 每题按题号保存一个字符串数组，例如 `{ "P1-553": ["选中的文字"] }`。
- 题干渲染时调用 `renderQuestionTextWithHighlights()`，按保存的字符串在静态题干文本中匹配并包裹 `<mark class="question-highlight">`。
- 普通题干文本和高亮文本都经过 `escapeHtml()` 后输出，避免把用户选中文字直接作为 HTML 注入。
- “清除本题高亮”只删除当前题号的 highlight 记录。

## 5. 最后做题记录实现方式

- `renderQuiz()` 成功取得当前题后，调用 `rememberCurrentQuestion(q)`。
- 记录内容为 `{ questionId, paper, updatedAt }`。
- “继续上次题目”按钮读取 `iiqeStudyApp:lastQuestion:v1`，用 `byId` 校验题号仍存在。
- 有效记录复用现有 `enterQuestionIdPractice()`，因此不绕过现有未完成练习切换提示。
- 无记录时显示“暂无上次做题记录”；记录失效时清除无效记录并提示。

## 6. 用户隔离说明

- 当前项目没有登录/账号系统。
- highlight 和最后做题记录按浏览器本地 profile 隔离。
- 数据不上传、不共享、不跨设备同步。

## 7. 手动测试清单

- 打开首页正常。
- 搜索 `P1-553` 并进入题目。
- 选中题干一段文字，点击“高亮选中文字”，文字变高亮。
- 刷新页面后，`P1-553` 高亮仍存在。
- 点击“清除本题高亮”后，高亮消失。
- 切到 dark 模式，高亮仍可读。
- 进入一道题后离开，再点击“继续上次题目”，能回到最后记录题目。
- 清空 `iiqeStudyApp:lastQuestion:v1` 后，按钮提示暂无记录。
- 答题、显示解析、原始 PDF 折叠不受影响。
- 题号跳转 `P1-553`、`P3-001`、非法 `P1-9999` 仍正常。

## 8. 已运行检查

- `git status -sb`: main 与 origin/main 对齐；存在既有未跟踪 `.claude/settings.local.json`、`FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`，本轮未修改。
- `git rev-list --left-right --count main...origin/main`: `0 0`。
- `git diff -- data/paper1_questions.json data/paper3_questions.json app.js style.css index.html README extract_questions.py`: 初始检查无输出。
- JSON parse: P1 = 1391, P3 = 807, total = 2198, ID 连续，无重复。
- `node --check app.js`: pass。
- `git diff -- data/paper1_questions.json data/paper3_questions.json`: 无输出。
- `git diff --check`: pass。
- 本地静态服务 HTTP 检查：`http://127.0.0.1:8011/` 返回 `200`。

## 9. 未运行检查

- in-app Browser 交互测试未完成：浏览器访问 `http://127.0.0.1:8010/` 和 `http://localhost:8010/` 均被环境拦截，报 `ERR_BLOCKED_BY_CLIENT`。
- 因上述拦截，未能自动执行刷新后高亮持久化、dark 模式视觉、按钮点击和答题交互 smoke test。

## 10. 已确认未修改 JSON/题库字段

- 未修改 `data/paper1_questions.json`。
- 未修改 `data/paper3_questions.json`。
- 未修改 `original_explanation`、`simple_explanation`、`memory_tip`、`question`、`options`、`correct_answer`、`source_page`、`reference`、`chapter`、`section`、`id`。

## 11. 已知限制

- 高亮按“选中文字字符串”匹配题干静态文本。
- 如果同一句文字在同一题干中重复出现，会高亮全部匹配项。
- 如果题干文本后续被题库维护改写，旧 highlight 字符串可能无法再匹配。
- 不支持跨设备、跨浏览器 profile 或账号同步。

## 12. Mobile Safari Highlight Fix

### 原因判断

- 旧实现只在点击“高亮选中文字”按钮时读取 `window.getSelection()`。
- iOS Safari 在触屏点击按钮时可能先让按钮获得焦点，导致原本的题干选区被清空。
- 因此手机端 Safari 可能读不到题干选中文字，表现为点击按钮后没有高亮。

### 修复方案

- 新增最近一次有效题干选区缓存 `cachedQuestionSelection`。
- 在题干容器 `.question-title[data-question-id]` 上通过 `mouseup`、`touchend`、`keyup` 捕获选区。
- 在 `document` 上通过 `selectionchange`、`keyup` 补充捕获选区。
- 缓存只接受属于当前题干容器的 selection，不接受选项、解析或其他区域文字。
- 点击高亮按钮时优先使用当前 selection；如果 Safari 已清空 selection，则回退使用缓存。
- 高亮按钮增加 `pointerdown` / `touchstart` 处理并 `preventDefault()`，尽量避免按钮抢焦点清空选区。
- 切换题目、跳题、答题、开始/继续练习时清空缓存，避免上一题选区被用于当前题。

### 样式补充

- `.question-title` 增加 `-webkit-user-select: text` 和 `user-select: text`。
- `.highlight-actions` 增加 `touch-action: manipulation`。

### 本轮测试要求

- Desktop Chrome: `P1-553` 选中题干文字后高亮正常。
- Desktop Chrome: 清除本题高亮正常。
- iOS Safari 需要用户手动验证：长按选择题干文字，点击高亮按钮，高亮应出现并在刷新后保留。
- Dark 模式下高亮仍需可读。
- 答题、解析、题号跳转、继续上次题目不应受影响。

### 本轮已运行检查

- `node --check app.js`: pass。
- `git diff -- data/paper1_questions.json data/paper3_questions.json`: 无输出。
- JSON parse: P1 = 1391, P3 = 807, total = 2198, ID 连续。
- `git diff --check`: pass。
- 编码哨兵检查: 未命中问号占位、替换符或 mojibake 标记。
- diff 范围：只涉及 `app.js`、`style.css`、`HIGHLIGHT_LAST_QUESTION_UX_AUDIT.md`。
- Specificity Repair / Batch 文件：未修改。

### 本轮未运行检查

- iOS Safari 无法在当前自动化环境中运行，需要用户手动在 iPhone Safari 验证。
- 本地浏览器自动交互测试未完成；此前 in-app Browser 访问 localhost 被 `ERR_BLOCKED_BY_CLIENT` 拦截，本轮本地短时 server 方式也未形成稳定可访问的自动化浏览器测试环境。

## 13. Expand Question Highlighting Scope

### 本轮目标

- 将“高亮选中文字 / 清除本题高亮”操作区从题干下方移动到题目内容上方。
- 将高亮范围从题干扩大到当前题目可见学习文本：题干、选项、答题后显示的大白话解析、原始 PDF 解析折叠区文本。
- 不修改题库 JSON，不继续 Specificity Repair，不接外部 API。

### 按钮位置

- 高亮操作区现在渲染在题号搜索和题号跳转控件之后、`.question-highlight-root` 之前。
- 因此按钮位于题目内容上方，不在题干和选项中间重复插入。
- 切题或重新渲染时仍由 `renderQuiz()` 输出一组 `highlight-actions`，没有新增重复按钮。

### 高亮范围

- 新增当前题目可高亮根：`.question-highlight-root[data-question-id]`。
- root 内包含：
  - `.question-title[data-highlight-scope="question"]`
  - 每个选项按钮 `[data-highlight-scope="option"]`
  - 大白话解析 `<pre data-highlight-scope="explanation">`
  - 原始 PDF 解析 `<pre data-highlight-scope="original">`
- root 不包含全局 header、主题按钮、刷新按钮、题号搜索输入框、题号跳转输入框、跳到上次做题按钮或高亮按钮本身。

### localStorage key 和数据结构

- 继续使用既有 key：`iiqeStudyApp:questionHighlights:v1`。
- 新保存的数据使用 scoped entry 数组：

```json
{
  "P1-553": [
    { "text": "选中文字", "scope": "question", "createdAt": 1710000000000 },
    { "text": "选中文字", "scope": "option", "createdAt": 1710000000000 },
    { "text": "选中文字", "scope": "explanation", "createdAt": 1710000000000 },
    { "text": "选中文字", "scope": "original", "createdAt": 1710000000000 }
  ]
}
```

### 旧数据兼容策略

- 旧字符串数组仍可读取，例如 `{ "P1-553": ["旧题干高亮"] }`。
- 旧字符串会按 `{ text, scope: "question" }` 处理，因此既有题干高亮不会丢失。
- 用户新增高亮时，同一题的旧字符串会随保存流程平滑升级为 scoped entry 对象。

### iOS Safari 兼容方式

- 保留最近一次 selection 缓存 `cachedQuestionSelection`。
- 继续监听 `selectionchange`、`touchend`、`mouseup`、`keyup`。
- 高亮按钮在 `pointerdown` / `touchstart` 阶段 `preventDefault()`，避免 Safari 触摸按钮时清空 selection。
- 点击保存时优先使用当前 root 内 selection，fallback 到缓存 selection。
- 切题、跳题、答题等重渲染入口继续清空 selection cache，不影响已保存的 localStorage 高亮。

### 安全与匹配

- 普通文本与用户选中文字都经 `escapeHtml()` 后进入 HTML。
- 高亮用 `text + scope` 匹配，不序列化 DOM Range。
- 同一 scope 内同一文字重复出现时，会高亮该 scope 的所有匹配项。
- 不同 scope 的相同文字互不影响，减少选项、题干、解析之间的误高亮。

### 本轮已运行检查

- `git status -sb`: main 与 origin/main 对齐；仅存在既有未跟踪 `.claude/settings.local.json`、`FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md`。
- `git log --oneline -8`: 确认当前位于 Batch 7D 后的最新提交链。
- `git rev-list --left-right --count main...origin/main`: `0 0`。
- `git diff -- data/paper1_questions.json data/paper3_questions.json app.js style.css index.html README extract_questions.py`: 初始检查无输出。
- JSON parse: P1 = 1391, P3 = 807, total = 2198, ID 连续。
- `node --check app.js`: pass。
- `git diff -- data/paper1_questions.json data/paper3_questions.json`: 无输出。
- `git diff --check`: pass。
- `git diff --name-only`: 当前仅 `app.js`、`style.css`、`HIGHLIGHT_LAST_QUESTION_UX_AUDIT.md`。
- 本地静态服务 HTTP 检查：`http://127.0.0.1:8012/` 返回 `200`，入口 HTML 包含 `#app`。

### 浏览器测试状态

- Desktop Chrome / in-app Browser 自动交互测试未运行。
- 原因：当前 Node REPL 环境没有 `playwright` 包，且本轮没有下载依赖；此前 audit 已记录 in-app Browser 访问 localhost 曾被 `ERR_BLOCKED_BY_CLIENT` 拦截。
- iOS Safari 无法在当前自动化环境中运行，需要用户手动验证长按选择题干、选项、答题后解析文字后的高亮保存行为。

### 已确认未修改 JSON/题库字段

- 未修改 `data/paper1_questions.json`。
- 未修改 `data/paper3_questions.json`。
- 未修改 `original_explanation`、`simple_explanation`、`memory_tip`、`question`、`options`、`correct_answer`、`source_page`、`reference`、`chapter`、`section`、`id`。
- 未修改 `extract_questions.py`、PDF、`iiqe_offline_300.html`、`sharedFiles`、`PROJECT_A_MEMORY.md`、任何 Specificity Repair / Batch 文件。

### 已知限制

- 高亮仍基于静态文本匹配，不保存精确 DOM Range。
- 跨多个 scope 的选区不会保存；用户需要在题干、单个选项、解析或原始解析单一区域内选择文字。
- 如果未来题库维护改写文本，旧高亮字符串可能无法匹配新文本。
