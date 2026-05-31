# 在线部署与体验优化审计报告

生成日期：2026-05-31

## 1. 本轮目标

把项目A准备成真正在线版，适配 GitHub Pages，并修复多用户、本地启动、练习进度、解析展示体验问题。

本轮允许修改：

- `app.js`
- `style.css`
- `index.html`
- `README.md`
- 新增部署文档、启动/审计类 Markdown

本轮禁止修改且已遵守：

- PDF
- 离线版
- `sharedFiles`
- `data/paper1_questions.json`
- `data/paper3_questions.json`
- 题干、选项、`correct_answer`、`source_page`、`reference`、`chapter/section`

## 2. 修改文件

| 文件 | 修改内容 |
| --- | --- |
| `index.html` | 将 CSS 和脚本入口改为显式相对路径：`./style.css`、`./data/syllabus.js`、`./app.js`。 |
| `app.js` | 将题库 JSON 加载路径改为 `./data/...`；localStorage 改用 `iiqeStudyApp:v1` 命名空间；新增普通练习 session 持久化；新增模拟考试 session 持久化；优化解析展示逻辑。 |
| `style.css` | 新增解析状态标签、原始解析折叠区和记忆口诀区样式。 |
| `README.md` | 更新在线版状态、本地启动、GitHub Pages、多用户本地数据、练习进度、解析展示和不要上传 PDF/离线版/`sharedFiles` 的说明。 |
| `PROJECT_A_MEMORY.md` | 记录本轮在线部署与体验优化状态。 |

## 3. 新增文件

| 文件 | 用途 |
| --- | --- |
| `GITHUB_PAGES_DEPLOYMENT.md` | GitHub Pages 创建仓库、推送、Pages 设置、访问地址、常见问题和公开传播风险说明。 |
| `ONLINE_DEPLOYMENT_AND_UX_AUDIT.md` | 本轮部署准备与 UX 修改审计。 |

## 4. GitHub Pages 准备状态

结论：代码层面已准备好部署到 GitHub Pages。

依据：

- `index.html` 使用相对路径加载静态资源。
- `app.js` 使用 `./data/paper1_questions.json` 和 `./data/paper3_questions.json` 加载题库。
- `data/syllabus.js` 仍由 `index.html` 相对路径加载。
- 本项目不依赖 `D:\` 本地路径或 `file://`。
- 本地 HTTP 检查显示以下资源均返回 200：
  - `/`
  - `/app.js`
  - `/style.css`
  - `/data/syllabus.js`
  - `/data/paper1_questions.json`
  - `/data/paper3_questions.json`

仍需用户手动完成：

- 创建或选择 GitHub 仓库。
- 决定仓库 Public / Private。
- 推送项目文件。
- 在 Settings -> Pages 中选择 `main` / `/root`。
- 确认不要上传原始 PDF、离线版、`sharedFiles` 或内部资料来源。

## 5. 多用户 localStorage 适配状态

结论：已适配。

实现：

- 新 localStorage 命名空间：`iiqeStudyApp:v1`。
- 实际保存 key：`iiqeStudyApp:v1:state`。
- 旧 key `iiqe-study-state-v1` 只作为一次性迁移来源读取，迁移后删除。
- 错题、收藏、进度、统计、模拟考试历史、导入导出均只保存在当前浏览器。
- 无后端，不会上传学习记录。
- 不支持跨设备自动同步；如需换设备，只能手动导出 / 导入记录 JSON。

## 6. 练习进度持久化状态

结论：已实现普通练习和模拟考试分开保存。

普通练习 session 保存：

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
- 筛选题库练习
- 单题练习

行为：

- 进入同一练习范围时，如存在未完成 session，会提示“继续上次练习/重新开始”。
- 答题后更新 session。
- 上一题 / 下一题后更新 session。
- 离开练习页或关闭页面前更新 session。
- 若 session 内题号在当前题库中不存在，会丢弃旧 session。

模拟考试 session 保存：

- 使用独立的 `sessions.exam`。
- 保存试卷、题号、当前位置、已答题、答案、开始时间、结束时间和更新时间。
- 重新进入同一试卷模拟考试时，如未完成，会提示继续或重新开始。
- 交卷后清除未完成模拟考试 session，并写入考试历史。

## 7. 解析展示优化状态

结论：已优化。

当前展示规则：

- 默认显示 `simple_explanation`，标题为“大白话解析”。
- `original_explanation` 默认折叠，标题为“原始 PDF 解析”。
- 如果 `simple_explanation` 包含以下模板/风险短语，且没有五段式标题，显示“解析待优化”：
  - `新增题待人工复核`
  - `这题考教材`
  - `与题干不一致`
  - `说法太绝对`
  - `其他选项不符合`
- 如果 `simple_explanation` 包含完整五段式标题，显示“已优化解析”：
  - `这题考什么：`
  - `为什么正确答案对：`
  - `其他选项为什么不适合：`
  - `记忆口诀：`
  - `遇到类似题怎么快速判断：`

## 8. 是否修改题库 JSON

未修改。

本轮没有写入：

- `data/paper1_questions.json`
- `data/paper3_questions.json`

只读校验结果：

- P1 题数：1391
- P3 题数：807
- 总题数：2198
- P1 ID 连续：True
- P3 ID 连续：True

## 9. 是否修改 UI

已修改 UI 文件：

- `index.html`
- `app.js`
- `style.css`

修改目的：

- 支持 GitHub Pages 相对路径。
- 支持多用户 localStorage 隔离。
- 支持练习 session 持久化。
- 优化解析展示体验。

## 10. 是否修改 PDF / 离线版 / sharedFiles

未修改。

本轮没有修改：

- PDF
- `iiqe_offline_300.html`
- `sharedFiles`

## 11. 检查结果

已运行：

```powershell
node --check app.js
```

结果：通过，无语法错误。

已运行只读 JSON 检查：

```text
P1 count=1391 id_continuous=True
P3 count=807 id_continuous=True
Total=2198
```

已运行本地 HTTP 静态资源检查：

```text
200 http://127.0.0.1:8002/
200 http://127.0.0.1:8002/app.js
200 http://127.0.0.1:8002/style.css
200 http://127.0.0.1:8002/data/syllabus.js
200 http://127.0.0.1:8002/data/paper1_questions.json
200 http://127.0.0.1:8002/data/paper3_questions.json
```

已启动可供本机试用的本地服务器：

```text
http://127.0.0.1:8000/
```

说明：Codex in-app Browser 尝试打开 `127.0.0.1:8000` 和 `localhost:8000` 时被浏览器侧拦截，返回 `net::ERR_BLOCKED_BY_CLIENT`。因此本轮浏览器可视化点击未完成；已用本地 HTTP 检查、语法检查和代码级检查替代。

## 12. 下一步具体操作

用户手动操作：

1. 创建 GitHub 仓库。
2. 确认仓库根目录是否直接放本项目文件。
3. 推送项目。
4. 在 GitHub Pages 选择 `main` / `/root`。
5. 打开 `https://用户名.github.io/仓库名/` 测试。
6. 不上传 PDF、离线版、`sharedFiles` 或内部资料来源。

后续 Codex 任务：

1. 不继续 Risky 第三批写入。
2. 不继续全题库解析重写。
3. 下一阶段应执行 Goal 2：全题库小白解析工程方案。
4. Goal 2 开始前仍需先只读检查 `PROJECT_A_MEMORY.md` 和本报告。
