# Project A Next Action - Current

## Current Next Action After Validation Batch 1

Specificity Repair Validation Batch 1 已完成并验证通过。

已完成：
- 计划提交：acacf11 Add specificity repair validation batch 1 plan
- JSON/审计提交：abf6573 Validate specificity repair quality batch 1
- 写入 50 题：P1=32，P3=18
- 组合/全项题：14
- 反向/例外题：9
- Spotcheck：22 题，全部 keep，repair_needed=0
- v3 五项检查全部通过，generic_explanation_count=0，combination_question_failure_count=0

下一步建议：先人工验收 Specificity Repair Validation Batch 1 的 10 道题，重点检查四段标题是否精确、是否无第 5 段、是否无重复"记忆口诀"标题、第 3 段是否只解释非正确选项、是否无内部审计备注。

若肉眼验收通过，再执行 Specificity Repair Batch 3。Batch 3 目标先设 100-120 题，不要立刻扩大到 200。

安全边界：不提交 PROJECT_A_MEMORY.md、.claude/settings.local.json、FULL_EXPLANATION_BATCH1_USER_ACCEPTANCE_CHECK.md；下一批仍必须先 plan 再写 JSON。

---

# Project A Next Action

## 🔴 暂停 Specificity Repair Batch 3：规则更新中

用户抽查发现 Batch 1/2 返修后仍有质量问题：
1. 繁体字/繁简混用
2. "原始解析/教材第X章/1.1.2a"等教材引用式表达
3. 第 3 段空泛（"和正确答案不同"）
4. 仍出现第 5 段
5. 第 3 段标题写成破折号或不完整标题
6. 第 4 段正文重复"记忆口诀"标题
7. 第 3 段包含正确答案解释，例如正确答案 A 仍写 "A 对"
8. 用户可见解析出现内部审计备注，例如"新增题待复核"、"先确认答案"、"教材依据待确认"

**Rules updated 2026-06-04 with stricter four-section formatting criteria. Batch 3 must pass all before commit.**

## Specificity Repair Batch 3

```text
/project-a-specificity-repair-auto

Specificity Repair Batch 3
写入目标：100-120 题
授权自动提交推送: yes
```

**Batch 3 硬性要求**：
- simplified_chinese_check: 0 繁体字
- no_source_reference_check: 0 教材引用
- four_section_only_check: 0 第5段
- concrete_wrong_option_reason_check: 100%
- no_generic_comparison_check: 0 空泛句
- exact_four_headings_check: 100%
- no_duplicate_heading_check: 0 重复标题
- no_fifth_section_check: 0 第5段
- section3_exact_title_check: 100%
- section4_no_repeated_memory_title_check: 0 重复"记忆口诀"
- section3_excludes_correct_answer_check: 100%
- no_internal_audit_note_check: 0 内部备注
- section4_single_memory_heading_check: 100%
- 任一新增格式检查失败时，format_failure_count > 0 且 generic_explanation_count > 0；停止，不得 commit。
- 组合题必须先解释 i/ii/iii/iv 每个小项为什么对或错，再解释 A/B/C/D 组合为什么对或错。

## 累计进度

| 类型 | 数量 |
|------|:---:|
| Evidence Audit 1-7 | 794 |
| Specificity Repair 1-2 | 240 |
| 剩余质量问题 | ~1546 |
