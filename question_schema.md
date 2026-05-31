# 题库 JSON 结构

每个 JSON 文件是一个题目数组。当前 MVP 使用：

- `data/paper1_questions.json`
- `data/paper3_questions.json`

## Question

```json
{
  "id": "P1-001",
  "paper": "P1",
  "chapter": "1",
  "chapter_title": "风险及保险",
  "section": "1.1",
  "section_title": "风险的概念",
  "question_traditional": "繁体题干",
  "question_simplified": "简体题干",
  "options_traditional": {
    "A": "繁体选项",
    "B": "繁体选项",
    "C": "繁体选项",
    "D": "繁体选项"
  },
  "options_simplified": {
    "A": "简体选项",
    "B": "简体选项",
    "C": "简体选项",
    "D": "简体选项"
  },
  "correct_answer": "A",
  "original_explanation": "PDF 原始解析",
  "simple_explanation": "简体、大白话解析，说明正确项和错误项",
  "memory_tip": "一句记忆口诀或判断技巧",
  "source_file": "来源 PDF 文件名",
  "source_page": 4,
  "is_hot_question": false,
  "tags": ["风险", "可保"],
  "reference": "1.1"
}
```

## 字段说明

- `id`：题目唯一编号，建议格式为 `P1-001` / `P3-001`。
- `paper`：`P1` 或 `P3`。
- `chapter`：章节编号，来自 PDF 的参考章节首段。
- `chapter_title`：章节名称，供筛选和统计显示。
- `section`：小节编号，由 `reference` 自动推断。通常取前两段，例如 `1.1.1` -> `1.1`，`3.2.4` -> `3.2`。
- `section_title`：小节名称，来自当前项目的官方目录映射。
- `question_traditional` / `question_simplified`：繁体和简体题干。
- `options_traditional` / `options_simplified`：A/B/C/D 四个选项。
- `correct_answer`：正确答案，只接受 `A`、`B`、`C`、`D`。
- `original_explanation`：PDF 原始解释，便于校对。
- `simple_explanation`：面向零基础学生的大白话解析。
- `memory_tip`：用于快速判断的口诀。
- `source_file` / `source_page`：追溯到原 PDF。
- `is_hot_question`：PDF 题号旁有 `*` 或热门标记时为 `true`。
- `tags`：关键词标签，用于搜索和后续薄弱点分析。
- `reference`：PDF 中的参考小节，例如 `1.1.1`。

## 官方章节标题映射

卷一：

- 第1章：风险及保险
- 第2章：法律原则
- 第3章：保险原则
- 第4章：保险公司的主要功能
- 第5章：香港保险业的结构
- 第6章：保险业的规管架构
- 第7章：职业道德及其他有关问题

卷三：

- 第1章：人寿保险简介
- 第2章：人寿保险及年金的种类
- 第3章：保险利益附约及其他产品
- 第4章：阐释人寿保险单
- 第5章：人寿保险程序
