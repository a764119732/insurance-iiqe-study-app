# 项目A记忆文件

更新时间：2026-05-30

## 1. 项目路径

`D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app`

## 2. 当前题库状态

- 在线版 P1=1391，P3=807，总计 2198。
- P1 / P3 ID 连续。
- `data/paper1_questions.json` 与 `data/paper3_questions.json` JSON parse 通过。
- 离线版不再维护。
- UI 文件不要改：`app.js`、`index.html`、`style.css`。

## 3. 已完成阶段：污染清理

污染清理阶段已完成并封存。

- 全库污染关键词复扫为 0。
- `????` 未命中。
- `�` 计数 0。
- 污染清理阶段只修改 `original_explanation` / `simple_explanation`。
- 未修改题干、选项、`correct_answer`、`source_page`、`reference`、`chapter/section`。
- 污染清零只代表页眉、表头、内部培训标记、颜色背景提示等污染残留已清理完成；不代表答案、题干、选项和解析质量已经全部正确。

## 4. 已生成的关键报告

- `POLLUTION_CLEANUP_FINAL_REVIEW.md`
- `POLLUTION_CLEANUP_FINAL_BATCH_AUDIT.md`
- `POLLUTION_CLEANUP_BATCH1_AUDIT.md`
- `HIGH_POLLUTION_CLEANUP_AUDIT.md`
- `POLLUTION_CLEANUP_BATCH2_AUDIT.md`
- `POLLUTION_CLEANUP_BATCH3_AUDIT.md`
- `POLLUTION_CLEANUP_BATCH4_AUDIT.md`
- `POLLUTION_CLEANUP_BATCH5_AUDIT.md`
- `POLLUTION_CLEANUP_BATCH6_AUDIT.md`
- `POLLUTION_CLEANUP_BATCH7_AUDIT.md`
- `NEW_QUESTION_QUALITY_AUDIT.md`
- `RISKY_EXPLANATION_AUDIT_PLAN.md`
- `RISKY_BATCH1_MANUAL_AUDIT.md`
- `RISKY_BATCH1_REWRITE_PLAN.md`
- `RISKY_BATCH1_REWRITE_AUDIT.md`
- `RISKY_BATCH1_REWRITE_SPOTCHECK.md`
- `RISKY_BATCH2_MANUAL_AUDIT.md`
- `RISKY_BATCH2_REWRITE_PLAN.md`
- `RISKY_BATCH2_REWRITE_AUDIT.md`
- `RISKY_BATCH2_REWRITE_SPOTCHECK.md`
- `RISKY_BATCH3_MANUAL_AUDIT.md`
- `RISKY_BATCH3_REWRITE_PLAN.md`
- `RISKY_BATCH3_WRITE_PROMPT.md`
- `RISKY_REMAINING_GLOBAL_MAP.md`
- `RISKY_BATCH4_CANDIDATE_PLAN.md`
- `RISKY_STAGE_ROADMAP.md`

## 5. Risky 第一批状态

已生成：

- `RISKY_EXPLANATION_AUDIT_PLAN.md`
- `RISKY_BATCH1_MANUAL_AUDIT.md`
- `RISKY_BATCH1_REWRITE_PLAN.md`
- `RISKY_BATCH1_REWRITE_AUDIT.md`
- `RISKY_BATCH1_REWRITE_SPOTCHECK.md`

第一批 20 题已重写 `simple_explanation`，并抽查通过。

- 20/20 建议保留。
- 0 题需要人工复核。
- 0 题需要返修。
- 第一批重写只修改指定题目的 `simple_explanation`。
- 未修改 `original_explanation`、题干、选项、`correct_answer`、`source_page`、`reference`、`chapter/section`、UI、PDF、离线版、脚本或 README。

第一批已处理题：

- `P1-316`
- `P1-318`
- `P1-319`
- `P1-321`
- `P1-323`
- `P1-333`
- `P1-337`
- `P1-338`
- `P1-339`
- `P1-340`
- `P1-341`
- `P1-342`
- `P1-343`
- `P1-348`
- `P1-352`
- `P1-356`
- `P1-361`
- `P1-364`
- `P1-365`
- `P1-370`

## 6. Risky 第二批状态

已生成：

- `RISKY_BATCH2_MANUAL_AUDIT.md`
- `RISKY_BATCH2_REWRITE_PLAN.md`
- `RISKY_BATCH2_REWRITE_AUDIT.md`
- `RISKY_BATCH2_REWRITE_SPOTCHECK.md`

第二批 30 题已完成 `simple_explanation` 重写。

- 跳过 0 题。
- 只修改 `simple_explanation`。
- 保护字段快照比对通过。
- 未发现编码问题。
- `????` 未命中。
- `�` 计数 0。
- `锟` 未命中。
- 写入后 JSON parse 通过。
- P1=1391，P3=807，总计 2198。
- ID 连续。
- 30 题五段式标题齐全。
- 30 题污染词未命中。
- 未发现答案冲突。
- 第二批 30 题重写质量抽查通过：30/30 建议保留，0 题需要人工复核，0 题需要返修。
- 重点题 `P1-1197`、`P1-1198`、`P3-540` 已抽查，当前解释保守贴合题干、选项、答案和原始解析；若后续做 PDF 精核，可优先抽样，但不阻塞进入下一阶段。

第二批已重写题：

- `P1-461`
- `P1-496`
- `P1-498`
- `P1-510`
- `P1-519`
- `P1-527`
- `P1-575`
- `P1-578`
- `P1-620`
- `P1-625`
- `P1-650`
- `P1-676`
- `P1-823`
- `P1-1057`
- `P1-1126`
- `P1-1163`
- `P1-1184`
- `P1-1197`
- `P1-1198`
- `P1-1239`
- `P3-348`
- `P3-376`
- `P3-380`
- `P3-428`
- `P3-463`
- `P3-473`
- `P3-540`
- `P3-563`
- `P3-617`
- `P3-726`

## 7. 第二批注意事项

- `P1-1197`、`P1-1198`、`P3-540` 边界较细。
- 下一步不要直接进入 Risky 第三批。
- 第二批 30 题重写质量已只读抽查并生成 `RISKY_BATCH2_REWRITE_SPOTCHECK.md`。
- 抽查未修改 JSON。
- 下一步可以进入 Risky 第三批只读人工审计。

## 7A. Risky 第三批状态

已生成：

- `RISKY_BATCH3_MANUAL_AUDIT.md`

第三批只读人工审计已完成，审计 30 题：

- `P1-1200`
- `P1-1203`
- `P1-1205`
- `P3-541`
- `P3-543`
- `P3-599`
- `P3-714`
- `P3-418`
- `P3-751`
- `P3-790`
- `P1-460`
- `P1-490`
- `P1-530`
- `P1-552`
- `P1-576`
- `P1-709`
- `P1-732`
- `P1-733`
- `P1-778`
- `P1-1160`
- `P1-1192`
- `P3-347`
- `P3-498`
- `P3-553`
- `P3-555`
- `P3-561`
- `P3-677`
- `P3-789`
- `P1-423`
- `P1-444`

第三批结论：

- 26 题可后续自动重写 `simple_explanation`。
- 4 题必须人工确认 / 禁止自动处理：`P3-543`、`P1-1192`、`P3-553`、`P3-555`。
- 未发现 JSON `correct_answer` 与当前 `original_explanation` 中列出的答案字母存在直接冲突。
- 发现依据风险：`P3-553`、`P3-555` 选项 C 的“保单持有人必须生存”与原始解析“受保生命在世”不完全一致；`P1-1192` 原始解析未完整覆盖非会员排除项；`P3-543` 涉及无可保权益与不可异议条款边界。
- 下一步可以生成 Risky 第三批字段级重写计划，但范围只限 26 题可自动重写候选，不处理 4 题人工确认题。

第三批规划文件已生成：

- `RISKY_BATCH3_REWRITE_PLAN.md`
- `RISKY_BATCH3_WRITE_PROMPT.md`

第三批写入边界：

- 只允许后续写入 26 题的 `simple_explanation`。
- 必须排除 `P3-543`、`P1-1192`、`P3-553`、`P3-555`。
- 写入前必须做保护字段快照。
- 写入后必须检查 JSON parse、题数、ID 连续、五段式、模板残留、污染词、编码和保护字段。
- 写入后生成 `RISKY_BATCH3_REWRITE_AUDIT.md`，再做 `RISKY_BATCH3_REWRITE_SPOTCHECK.md`。

## 7B. Risky 全局规划状态

本轮新增全局规划文件：

- `RISKY_REMAINING_GLOBAL_MAP.md`
- `RISKY_BATCH4_CANDIDATE_PLAN.md`
- `RISKY_STAGE_ROADMAP.md`

剩余风险池操作层统计：

- Auto Rewrite Candidate：P1=880，P3=406，总计 1286。
- Manual Review Required：P1=167，P3=72，总计 239。
- Do Not Auto：P1=18，P3=177，总计 195。

第四批候选 30 题已规划：

- P1 20 题：`P1-462`、`P1-463`、`P1-468`、`P1-472`、`P1-487`、`P1-502`、`P1-508`、`P1-537`、`P1-539`、`P1-541`、`P1-555`、`P1-557`、`P1-593`、`P1-601`、`P1-640`、`P1-663`、`P1-687`、`P1-699`、`P1-713`、`P1-722`
- P3 10 题：`P3-354`、`P3-356`、`P3-377`、`P3-385`、`P3-391`、`P3-409`、`P3-416`、`P3-426`、`P3-443`、`P3-444`

下一步最稳任务：

- 周额度刷新后，先读取 `RISKY_BATCH3_WRITE_PROMPT.md`。
- 执行第三批 26 题 `simple_explanation` 写入。
- 生成 `RISKY_BATCH3_REWRITE_AUDIT.md`。
- 再生成 `RISKY_BATCH3_REWRITE_SPOTCHECK.md` 做抽查。
- 抽查通过后，才进入第四批人工审计。

本轮未修改：

- `data/paper1_questions.json`
- `data/paper3_questions.json`
- `app.js`
- `index.html`
- `style.css`
- `extract_questions.py`
- `README.md`
- PDF
- 离线版
- `sharedFiles`

## 8. 必须继续排除 / 人工确认题

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

## 9. 后续安全边界

- 不要改 PDF。
- 不要改离线版 / `sharedFiles`。
- 不要改 `app.js` / `index.html` / `style.css`。
- 不要改 `extract_questions.py`。
- 不要改 README。
- 不要改 `correct_answer`。
- 不要改 `source_page`。
- 不要改题干。
- 不要改选项。
- 不要改 `reference` / `chapter` / `section`。
- Risky 阶段写入时只能改指定题的 `simple_explanation`。
- 写入必须使用 UTF-8。
- 写入后必须检查 JSON parse、题数、ID 连续、保护字段、污染词、`????`、`�`、`锟`。

## 10. 新 Codex 对话恢复指令

可复制到新 Codex 对话：

```text
继续项目A。

请先读取：
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\PROJECT_A_MEMORY.md

只读恢复上下文，不要修改任何文件。

当前状态：
- 在线版 P1=1391，P3=807，总计 2198。
- P1 / P3 ID 连续，JSON parse 通过。
- 离线版不再维护，不要修改离线版或 sharedFiles。
- 不要修改 app.js、index.html、style.css、PDF、extract_questions.py 或 README。
- 污染清理阶段已封存，全库污染关键词复扫为 0。
- `????` 未命中，`�` 计数 0。
- 污染清理阶段只改 original_explanation / simple_explanation，未改题干、选项、correct_answer、source_page、reference、chapter/section。
- Risky 第一批 20 题已重写 simple_explanation，并抽查通过：20/20 建议保留，0 题人工复核，0 题返修。
- Risky 第二批 30 题已重写 simple_explanation，并生成 RISKY_BATCH2_REWRITE_AUDIT.md。
- 第二批跳过 0 题，只修改 simple_explanation，保护字段快照比对通过。
- 第二批写入后未发现编码问题：`????` 未命中，`�` 计数 0，`锟` 未命中。
- 第二批边界较细题：P1-1197、P1-1198、P3-540。

当前状态：
Risky 第二批 30 题重写质量已只读抽查通过，并生成 RISKY_BATCH2_REWRITE_SPOTCHECK.md。
Risky 第三批 30 题只读人工审计已完成，并生成 RISKY_BATCH3_MANUAL_AUDIT.md。
Risky 第三批 26 题字段级重写计划和写入提示已生成。
Risky 剩余全局地图、第四批候选计划和阶段路线图已生成。

本轮目标：
读取 RISKY_BATCH3_WRITE_PROMPT.md，执行第三批 26 题 simple_explanation 写入，并生成 RISKY_BATCH3_REWRITE_AUDIT.md。

请读取：
- RISKY_BATCH2_MANUAL_AUDIT.md
- RISKY_BATCH2_REWRITE_PLAN.md
- RISKY_BATCH2_REWRITE_AUDIT.md
- data/paper1_questions.json
- data/paper3_questions.json

抽查范围：
P1-461, P1-496, P1-498, P1-510, P1-519, P1-527, P1-575, P1-578, P1-620, P1-625, P1-650, P1-676, P1-823, P1-1057, P1-1126, P1-1163, P1-1184, P1-1197, P1-1198, P1-1239,
P3-348, P3-376, P3-380, P3-428, P3-463, P3-473, P3-540, P3-563, P3-617, P3-726

检查每题：
1. 是否五段式完整
2. 是否贴合题干
3. 是否贴合选项
4. 是否贴合 correct_answer
5. 是否没有把“以上各项/组合题/否定题”的逻辑讲反
6. 是否还有空泛句子
7. 是否建议保留
8. 是否需要人工复核
9. 是否需要返修 simple_explanation

重要限制：
- 不要修改 RISKY_BATCH2_REWRITE_SPOTCHECK.md，除非用户明确要求复审。
- 不要修改 JSON。
- 不要修改 UI、PDF、离线版、sharedFiles、extract_questions.py 或 README。
- 不要进入 Risky 第三批。
```

## 13. 在线版部署与 UX 优化记录

更新时间：2026-05-31

本轮目标：

- 把项目A准备成真正在线版，适配 GitHub Pages。
- 修复多用户、本地启动、练习进度、解析展示体验问题。
- 不执行 Risky 第三批写入。
- 不启动全题库小白解析工程。
- 不修改题库 JSON。

### 13.1 本轮修改了哪些文件

- `app.js`
- `style.css`
- `index.html`
- `README.md`
- `PROJECT_A_MEMORY.md`

### 13.2 本轮新增了哪些文件

- `GITHUB_PAGES_DEPLOYMENT.md`
- `ONLINE_DEPLOYMENT_AND_UX_AUDIT.md`

### 13.3 GitHub Pages 部署准备状态

代码层面已准备好部署到 GitHub Pages：

- `index.html` 使用 `./style.css`、`./data/syllabus.js`、`./app.js`。
- `app.js` 使用 `./data/paper1_questions.json`、`./data/paper3_questions.json`。
- 未发现部署入口文件依赖 `D:\` 本地路径或 `file://`。
- 本地 HTTP 静态资源检查通过：`/`、`/app.js`、`/style.css`、`/data/syllabus.js`、`/data/paper1_questions.json`、`/data/paper3_questions.json` 均返回 200。
- 已新增 `GITHUB_PAGES_DEPLOYMENT.md`，说明创建仓库、推送项目、Pages 设置 `main` / `/root`、访问地址和常见问题。

仍需用户手动完成：

- 创建或选择 GitHub 仓库。
- 推送项目文件。
- 在 GitHub Pages 设置 `main` / `/root`。
- 确认不上传 PDF、离线版、`sharedFiles` 或内部资料来源。

### 13.4 多用户 localStorage 适配状态

已适配：

- 新 localStorage 命名空间：`iiqeStudyApp:v1`。
- 实际保存 key：`iiqeStudyApp:v1:state`。
- 旧 key `iiqe-study-state-v1` 只作为一次性迁移来源，迁移后删除。
- 错题、收藏、进度、统计、模拟考试历史、导入导出都只保存在各自浏览器。
- 无后端，不支持跨设备自动同步。

### 13.5 练习进度持久化状态

已实现：

- 普通练习 session 保存到 `state.sessions.practice`。
- 模拟考试 session 保存到 `state.sessions.exam`。

普通练习 session 保存字段：

- `paper`
- `mode`
- `scopeKey`
- `questionIds`
- `currentIndex`
- `answeredIds`
- `updatedAt`

覆盖范围：

- 整卷练习
- 章节练习
- 小节练习
- 随机练习
- 错题练习
- 收藏练习
- 筛选练习
- 单题练习

行为：

- 进入同一练习范围时，如存在未完成 session，会提示“继续上次练习/重新开始”。
- 答题、上一题、下一题、离开练习页、关闭页面前会更新 localStorage。
- 如果 session 内题号在当前题库中不存在，会丢弃旧 session。
- 模拟考试和普通练习分开保存。

### 13.6 解析展示优化状态

已优化：

- 默认显示 `simple_explanation`，标题为“大白话解析”。
- `original_explanation` 默认折叠，标题为“原始 PDF 解析”。
- 若 `simple_explanation` 含 `新增题待人工复核`、`这题考教材`、`与题干不一致`、`说法太绝对`、`其他选项不符合`，且没有五段式标题，则显示“解析待优化”。
- 若包含五段式标题，则显示“已优化解析”。

### 13.7 是否修改题库 JSON

未修改：

- `data/paper1_questions.json`
- `data/paper3_questions.json`

只读检查结果：

- P1 count=1391，ID 连续=True。
- P3 count=807，ID 连续=True。
- Total=2198。

### 13.8 是否修改 UI

已修改 UI 相关文件：

- `index.html`
- `app.js`
- `style.css`

修改目的：

- GitHub Pages 相对路径适配。
- 多用户本地数据隔离。
- 练习进度持久化。
- 解析展示优化。

### 13.9 是否修改 PDF / 离线版 / sharedFiles

未修改：

- PDF
- 离线版 `iiqe_offline_300.html`
- `sharedFiles`

### 13.10 本轮检查结果

已运行：

- `node --check app.js`：通过，无语法错误。
- P1/P3 JSON 只读解析和 ID 连续检查：通过。
- 本地 HTTP 静态资源检查：通过。

本地服务器：

- 当前已启动可供本机试用的本地服务器：`http://127.0.0.1:8000/`。

限制说明：

- Codex in-app Browser 尝试打开 `127.0.0.1:8000` 和 `localhost:8000` 时被浏览器侧拦截，返回 `net::ERR_BLOCKED_BY_CLIENT`，因此本轮未完成浏览器可视化点击验证。

### 13.11 下一步

当前任务完成后不要继续：

- 不要继续 Risky 第三批写入。
- 不要继续全题库解析重写。
- 不要修改 `data/paper1_questions.json` 或 `data/paper3_questions.json`。

下一步应执行：

- Goal 2：全题库小白解析工程方案。

Goal 2 开始前仍需先只读恢复上下文，不得直接写题库。

### 13.12 新 Codex 对话恢复指令

可复制到新 Codex 对话：

```text
继续项目A，进入 Goal 2：全题库小白解析工程方案。

请先读取：
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\PROJECT_A_MEMORY.md
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\ONLINE_DEPLOYMENT_AND_UX_AUDIT.md
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\GITHUB_PAGES_DEPLOYMENT.md

先只读恢复上下文，不要立即修改题库 JSON。

当前状态：
- 在线版 P1=1391，P3=807，总计 2198。
- GitHub Pages 代码层面已准备好，但仍需用户手动创建/配置 GitHub 仓库和 Pages。
- 多用户 localStorage 已适配，命名空间为 iiqeStudyApp:v1。
- 普通练习和模拟考试 session 已分开持久化。
- 解析展示已优化：默认显示大白话解析，原始 PDF 解析默认折叠。
- 本轮未修改题库 JSON、PDF、离线版或 sharedFiles。

请不要继续 Risky 第三批写入。
请不要直接开始批量重写题库。
先生成 Goal 2 的安全工程方案：范围、字段边界、分批策略、校验脚本、抽查规则、回滚/中断恢复方案。
```

## 11. 本轮只读交接任务阶段记录

更新时间：2026-05-30

本轮目标：只读恢复项目A上下文，生成低风险长期只读交接/计划文件；不执行任何题库写入任务。

已完成：

- 已读取 `PROJECT_A_MEMORY.md`、Risky 规划/抽查报告、污染清理总复盘、新增题质量审计摘要，以及 `data/paper1_questions.json` / `data/paper3_questions.json` 的只读统计。
- 已新增 `PROJECT_A_FINAL_HANDOFF.md`。
- 已新增 `NEXT_WEEK_CODEX_QUEUE.md`。

阶段性校验：

- 只读复算 `RISKY_REMAINING_GLOBAL_MAP.md` 的 Do Not Auto 口径：排除前三批和已知禁自动题后，`original_explanation` 去空白少于 20 字的题为 P1=18、P3=177、合计 195，与全局地图一致。
- 本轮到目前为止未修改题库 JSON、UI、PDF、离线版、`sharedFiles`、`extract_questions.py` 或 README。

本轮待继续：

- 生成 `RISKY_DO_NOT_AUTO_REGISTRY.md`。
- 生成 `RISKY_WORKFLOW_TEMPLATE.md`。
- 生成 `PROJECT_A_HANDOFF_FOR_LOW_QUOTA.md`。
- 最终再次更新本记忆文件。

继续安全边界：

- 本轮仍不得修改 `data/paper1_questions.json`、`data/paper3_questions.json`、`app.js`、`index.html`、`style.css`、`extract_questions.py`、README、PDF、离线版或 `sharedFiles`。
- 本轮不得修改题干、选项、`correct_answer`、`source_page`、`reference`、`chapter/section`。
- 只允许新增 Markdown 审计/计划文件，并更新本记忆文件。

## 12. 本轮只读交接任务最终记录

更新时间：2026-05-30

本轮目标：

- 只读恢复项目A上下文。
- 不执行任何题库写入任务。
- 新增低风险交接/计划类 Markdown。
- 更新本记忆文件。

本轮新增文件：

- `PROJECT_A_FINAL_HANDOFF.md`
- `NEXT_WEEK_CODEX_QUEUE.md`
- `RISKY_DO_NOT_AUTO_REGISTRY.md`
- `RISKY_WORKFLOW_TEMPLATE.md`
- `PROJECT_A_HANDOFF_FOR_LOW_QUOTA.md`

本轮修改文件：

- `PROJECT_A_MEMORY.md`

本轮明确未修改：

- `data/paper1_questions.json`
- `data/paper3_questions.json`
- `app.js`
- `index.html`
- `style.css`
- `extract_questions.py`
- `README.md`
- PDF
- 离线版
- `sharedFiles`
- 题干
- 选项
- `correct_answer`
- `source_page`
- `reference`
- `chapter/section`

本轮只读校验 / 读取结论：

- 已读取 `PROJECT_A_MEMORY.md`、`RISKY_EXPLANATION_AUDIT_PLAN.md`、`RISKY_BATCH1_REWRITE_SPOTCHECK.md`、`RISKY_BATCH2_REWRITE_SPOTCHECK.md`、`RISKY_BATCH3_MANUAL_AUDIT.md`、`RISKY_BATCH3_REWRITE_PLAN.md`、`RISKY_BATCH3_WRITE_PROMPT.md`、`RISKY_REMAINING_GLOBAL_MAP.md`、`RISKY_BATCH4_CANDIDATE_PLAN.md`、`RISKY_STAGE_ROADMAP.md`、`POLLUTION_CLEANUP_FINAL_REVIEW.md`、`NEW_QUESTION_QUALITY_AUDIT.md` 摘要，以及 `data/paper1_questions.json` / `data/paper3_questions.json`。
- 只读复算全局 Do Not Auto 口径：P1=18、P3=177、合计 195，与 `RISKY_REMAINING_GLOBAL_MAP.md` 一致。
- `RISKY_DO_NOT_AUTO_REGISTRY.md` 登记项合计 209：既有报告明确禁自动 / 人工确认 14 题，加全局地图 Do Not Auto 195 题。

当前项目状态：

- 在线版 P1=1391，P3=807，总计 2198。
- 污染清理阶段已封存。
- Risky 第一批 20 题已重写 `simple_explanation` 并抽查通过。
- Risky 第二批 30 题已重写 `simple_explanation` 并抽查通过。
- Risky 第三批 30 题人工审计已完成。
- Risky 第三批 26 题字段级重写计划和写入提示已生成，但尚未写入 JSON。
- 第三批 4 题必须人工确认 / 禁止自动处理：`P3-543`、`P1-1192`、`P3-553`、`P3-555`。
- 第四批 30 题只有候选计划，尚未人工审计，不得直接写入。

下一步最稳任务：

1. 周额度刷新后读取 `RISKY_BATCH3_WRITE_PROMPT.md`。
2. 执行 Risky 第三批 26 题 `simple_explanation` 写入。
3. 生成 `RISKY_BATCH3_REWRITE_AUDIT.md`。
4. 再只读抽查生成 `RISKY_BATCH3_REWRITE_SPOTCHECK.md`。
5. 更新 `PROJECT_A_MEMORY.md`。

必须继续遵守的安全边界：

- 第三批写入只能修改指定 26 题的 `simple_explanation`。
- 必须排除 `P3-543`、`P1-1192`、`P3-553`、`P3-555`。
- 不改 `original_explanation`。
- 不改题干、选项、`correct_answer`、来源字段、章节字段。
- 不改 UI、PDF、离线版、`sharedFiles`、`extract_questions.py` 或 README。
- Do Not Auto 登记表内题不得进入自动写入批次。

新 Codex 对话恢复指令：

```text
继续项目A。

请先读取：
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\PROJECT_A_MEMORY.md
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\PROJECT_A_FINAL_HANDOFF.md
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\NEXT_WEEK_CODEX_QUEUE.md
D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app\RISKY_WORKFLOW_TEMPLATE.md

先只读恢复上下文，不要修改任何文件。

当前状态：
- 在线版 P1=1391，P3=807，总计 2198。
- 污染清理阶段已封存。
- Risky 第一批 20 题已重写 simple_explanation 并抽查通过。
- Risky 第二批 30 题已重写 simple_explanation 并抽查通过。
- Risky 第三批人工审计、重写计划和写入提示已完成。
- 第三批尚未写入 JSON。
- 第三批允许后续写入 26 题 simple_explanation。
- 必须排除 P3-543、P1-1192、P3-553、P3-555。
- 第四批只有候选计划，不得直接写入。
- Do Not Auto 登记表已生成，登记项合计 209。

如果本轮额度充足，下一步执行：
读取 RISKY_BATCH3_WRITE_PROMPT.md，只修改第三批 26 题的 simple_explanation，并生成 RISKY_BATCH3_REWRITE_AUDIT.md。

硬性限制：
- 不改题干、选项、correct_answer、source_page、reference、chapter/section、original_explanation。
- 不改 UI、PDF、离线版、sharedFiles、extract_questions.py 或 README。
- 写入前做保护字段快照。
- 写入后检查 JSON parse、题数、ID 连续、五段式、模板残留、污染词、编码和保护字段。
```
