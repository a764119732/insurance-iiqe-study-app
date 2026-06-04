# Project A Next Action

## 🔴 暂停 Specificity Repair Batch 3：规则更新中

用户抽查发现 Batch 1/2 返修后仍有质量问题：
1. 繁体字/繁简混用
2. "原始解析/教材第X章/1.1.2a"等教材引用式表达
3. 第 3 段空泛（"和正确答案不同"）
4. 仍出现第 5 段

**Rules updated 2026-06-04 with 5 new quality criteria. Batch 3 must pass all before commit.**

## Specificity Repair Batch 3

```text
/project-a-specificity-repair-auto

Specificity Repair Batch 3
写入目标：120 题
授权自动提交推送: yes
```

**Batch 3 硬性要求**：
- simplified_chinese_check: 0 繁体字
- no_source_reference_check: 0 教材引用
- four_section_only_check: 0 第5段
- concrete_wrong_option_reason_check: 100%
- no_generic_comparison_check: 0 空泛句
- 组合题必须先解释 i/ii/iii/iv 每个小项为什么对或错，再解释 A/B/C/D 组合为什么对或错。

## 累计进度

| 类型 | 数量 |
|------|:---:|
| Evidence Audit 1-7 | 794 |
| Specificity Repair 1-2 | 240 |
| 剩余质量问题 | ~1546 |
