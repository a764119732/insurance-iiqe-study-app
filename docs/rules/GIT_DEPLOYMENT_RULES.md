# Git Deployment Rules

## 提交原则

- 每个稳定成果单独 commit / push。
- 不堆多个 batch 到同一个 commit。
- 规则更新与 evidence batch 分开提交。
- commit message 要准确描述本次范围。

## Commit 前检查

提交前必须运行或等价检查：

- `git status --short`
- `git diff --cached --name-only`
- `git ls-files PROJECT_A_MEMORY.md`
- forbidden tracked / staged 文件检查

必须确认 staged 文件只包含本次允许提交范围。

## 禁止提交 / 推送

默认不得提交或推送：

- `PROJECT_A_MEMORY.md`
- PDF
- 离线版
- `sharedFiles/`
- `tmp/`
- `__pycache__/`
- `_vendor/`
- `.env`
- 敏感凭证
- 用户明确要求不处理的文件

## Push 规则

- push 前确认 staged 文件无异常。
- push 只对当前明确提交执行。
- 如果 push 需要确认远程地址、登录凭证、仓库设置或 Pages 设置，停止并询问用户。
- push 后检查：
  - `git status --short --branch`
  - `git log -1 --oneline`
  - `git rev-list --left-right --count main...origin/main`

## 远程状态

- 不修改 GitHub Pages 设置。
- 不修改仓库可见性。
- 不修改 remote URL。
- 不写入或暴露凭证。
