# GitHub Pages 部署说明

生成日期：2026-05-31

## 1. 当前部署准备状态

本项目是纯静态网页，不需要构建命令。

应部署的文件：

- `index.html`
- `app.js`
- `style.css`
- `data/syllabus.js`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

不要部署：

- 原始 PDF
- 离线版 `iiqe_offline_300.html`
- `sharedFiles`
- 任何内部资料来源、私人路径或未授权材料

当前资源路径使用相对路径：

- `./style.css`
- `./data/syllabus.js`
- `./app.js`
- `./data/paper1_questions.json`
- `./data/paper3_questions.json`

这些路径可同时适配：

- 本地服务器：`http://127.0.0.1:8000/`
- GitHub Pages：`https://用户名.github.io/仓库名/`

## 2. 创建 GitHub 仓库

1. 登录 GitHub。
2. 创建新仓库，例如 `insurance-iiqe-study-app`。
3. 仓库可设为 Private 或 Public；如果要给别人访问 GitHub Pages，通常需要公开仓库或使用支持私有 Pages 的账户/组织配置。
4. 不要把原始 PDF、离线版、`sharedFiles` 上传到仓库。

## 3. 推送项目

推荐让仓库根目录直接放本项目文件：

```text
index.html
app.js
style.css
data/
README.md
GITHUB_PAGES_DEPLOYMENT.md
```

如果仓库根目录是上级目录，而本项目放在 `insurance-iiqe-study-app/` 子目录中，Pages 仍可访问子目录页面，但默认访问地址会变成：

```text
https://用户名.github.io/仓库名/insurance-iiqe-study-app/
```

为了使用更简洁的 `https://用户名.github.io/仓库名/`，建议把本项目文件放在仓库根目录。

## 4. GitHub Pages 设置

1. 打开仓库页面。
2. 进入 Settings。
3. 打开 Pages。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`。
6. Folder 选择 `/root`。
7. 保存。
8. 等待 GitHub Pages 构建完成。

访问地址格式：

```text
https://用户名.github.io/仓库名/
```

示例：

```text
https://leo.github.io/insurance-iiqe-study-app/
```

## 5. 常见问题

### 404

可能原因：

- Pages 还没构建完成。
- 仓库没有启用 Pages。
- 分支或目录选错。
- `index.html` 不在 Pages 发布根目录。
- 地址少了仓库名。

检查：

- Settings -> Pages 是否显示部署成功。
- 访问地址是否为 `https://用户名.github.io/仓库名/`。
- 如果项目在子目录，是否访问了 `/仓库名/insurance-iiqe-study-app/`。

### JSON 加载失败

可能原因：

- `data/paper1_questions.json` 或 `data/paper3_questions.json` 未上传。
- `data` 目录大小写不一致。
- JSON 文件名大小写不一致。
- 浏览器缓存了旧版本。
- 直接双击本地 HTML 打开，浏览器限制本地 JSON 读取。

检查：

- 浏览器 Network 面板中 `paper1_questions.json` 和 `paper3_questions.json` 是否返回 200。
- 地址栏尝试直接打开：

```text
https://用户名.github.io/仓库名/data/paper1_questions.json
https://用户名.github.io/仓库名/data/paper3_questions.json
```

### data 目录缺失

表现：

- 页面显示题库读取失败。
- 首页学习地图无法加载题数。

处理：

- 确认仓库中有 `data/` 目录。
- 确认目录内包含 `syllabus.js`、`paper1_questions.json`、`paper3_questions.json`。

### 路径大小写问题

GitHub Pages 对路径大小写敏感。以下路径必须一致：

- `data/syllabus.js`
- `data/paper1_questions.json`
- `data/paper3_questions.json`

不要把目录改成 `Data`、`DATA` 或其他大小写。

### 缓存问题

如果部署后页面仍显示旧内容：

1. 强制刷新浏览器。
2. 打开无痕窗口测试。
3. 在 DevTools Network 勾选 Disable cache 后刷新。
4. 等几分钟再访问 Pages 地址。

### 仓库根目录问题

如果 `index.html` 在仓库子目录中，但 Pages 设置为 `main` / `/root`，访问仓库根地址时会 404 或看不到页面。

解决方式二选一：

- 把 `index.html`、`app.js`、`style.css`、`data/` 放到仓库根目录。
- 保持子目录结构，但访问子目录 URL。

## 6. 隐私和授权提醒

- 不要上传原始 PDF。
- 不要上传离线版。
- 不要上传 `sharedFiles`。
- 不要公开内部资料来源、私人路径、账号信息或未经授权的材料。
- 本项目不是官方题库，无授权不建议公开传播。
- 如果只是个人备考或小范围测试，建议先使用私有仓库或本地运行。

## 7. 本地测试命令

在项目目录运行：

```powershell
python -m http.server 8000
```

然后打开：

```text
http://127.0.0.1:8000/
```

如果本地能加载题库，GitHub Pages 仍失败，优先检查仓库文件是否完整、Pages 发布目录是否正确、文件大小写是否一致。
