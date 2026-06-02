# Git Deployment Rules

## Project A Push Permission

The user pre-authorizes `git push` to this exact remote:

`https://github.com/a764119732/insurance-iiqe-study-app.git`

Do not stop merely to ask for remote confirmation if all conditions are true:

- remote is exactly `https://github.com/a764119732/insurance-iiqe-study-app.git`;
- staged files match the task allowed list;
- forbidden files are not staged;
- `PROJECT_A_MEMORY.md` is not staged;
- PDF, offline HTML, and `sharedFiles/` are not staged.

Stop and ask if:

- remote URL differs;
- branch is unexpected;
- staged files include unexpected files;
- Git asks for credentials the environment cannot provide;
- push fails;
- push would require force or history rewrite.

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
- task-specific validation

必须确认 staged 文件只包含本次允许提交范围。

提交前必须确认：

- `PROJECT_A_MEMORY.md` is not staged.
- PDF, offline HTML, and `sharedFiles/` are not staged.
- task-specific validation passed.

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
- 如果 remote 不是预授权 URL，或 push 需要仓库设置、Pages 设置、外部凭证操作、force 或历史改写，停止并询问用户。
- push 后检查：
  - `git status --short --branch`
  - `git log -1 --oneline`
  - `git rev-list --left-right --count main...origin/main`
- push 后更新 local-only `PROJECT_A_MEMORY.md`，记录真实状态。

## 远程状态

- 不修改 GitHub Pages 设置。
- 不修改仓库可见性。
- 不修改 remote URL。
- 不写入或暴露凭证。
