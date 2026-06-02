# Project A Safety Rules

## Project-level Highest Permission for Project A

The user grants project-level highest permission inside this repository only:

`D:\Users\Leo\Desktop\codex\Insurance\insurance-iiqe-study-app`

This permission applies only to Project A files inside this Git repository.

Allowed without asking again, if the task itself clearly requires it:

1. Read any file inside this project repository.
2. Create or edit Markdown project documents.
3. Create temporary scripts for validation or controlled writing.
4. Modify `data/paper1_questions.json` and `data/paper3_questions.json` only when the user task explicitly authorizes JSON writing or explanation rewriting.
5. Run local validation commands.
6. Run `git add` / `git commit` for files explicitly allowed by the task.
7. Run `git push` to this exact remote only: `https://github.com/a764119732/insurance-iiqe-study-app.git`.
8. Use elevated/local execution for project files when normal sandbox writes fail, provided the operation is still within the user-authorized task scope.

Still forbidden unless separately confirmed:

1. Modify files outside this repository.
2. Delete directories or batch-delete files.
3. Use dangerous recursive delete commands.
4. Rewrite Git history, force push, rebase pushed commits, hard reset, or clean untracked files.
5. Push to any remote other than `https://github.com/a764119732/insurance-iiqe-study-app.git`.
6. Submit or upload PDF, offline HTML, `sharedFiles/`, `tmp/`, `__pycache__/`, `_vendor/`, sensitive credentials, browser secrets, or `PROJECT_A_MEMORY.md`.
7. Modify protected question fields unless the user explicitly authorizes that exact field.
8. Continue after validation failure.
9. Hide or ignore failed checks.

## 默认只读

- 默认只读检查，不主动修改、删除、覆盖、移动、重命名文件。
- 写入必须有明确授权，并限定文件、题号、字段和目标。
- 大任务按 audit / plan / scoped modification / verification / report 执行。

## JSON 写入限制

- 写 `data/paper1_questions.json` 或 `data/paper3_questions.json` 时，必须限定明确题号和字段。
- 解释类任务默认只能改计划内题目的 `simple_explanation`。
- 不得批量重写全库。
- 写入前应有 manual check 和 rewrite plan；写入后必须生成 audit 和 spotcheck。

## Protected Fields

以下字段默认不得修改：

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
- `original_explanation`

Protected question fields also include question text, options, `correct_answer`, source page, reference, and chapter / section fields.

## 失败即停

出现以下情况必须停止并汇报：

- JSON parse 失败。
- P1/P3 题数错误。
- ID 不连续。
- protected fields 有变化。
- 变更题号不等于计划题号。
- 变更字段不等于计划字段。
- Do Not Auto 命中。
- 证据不足、答案冲突、选项冲突、OCR 污染或法律边界不清。
- 编码出现常见乱码标记、典型 mojibake 或明显中文丢失。
- staged 文件异常。
- 任何验证失败后，不进入下一批，不 commit，不 push。
- 必须报告具体失败项和当前文件状态。

## 编码与凭证

- 写入中文文本时使用 UTF-8。
- 写 JSON 或 Markdown 后检查编码污染。
- 不打印、保存、提交或写入任何敏感凭证。
- 不把凭证写入命令、日志、报告、Markdown、项目文件或远程 URL。

## 删除限制

- 禁止批量删除文件或目录。
- 禁止使用递归删除命令。
- 删除任何明确文件前，必须先说明影响并获得用户确认。
