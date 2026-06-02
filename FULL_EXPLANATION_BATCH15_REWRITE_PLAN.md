# Full Explanation Batch 15 Rewrite Plan

Updated: 2026-06-02

## Scope

Rewrite only simple_explanation for the 60 audited IDs below.

## Required Structure

1. 这题考什么
2. 为什么正确答案对
3. 其他选项为什么不适合
4. 记忆口诀
5. 遇到类似题怎么快速判断

## Rewrite IDs

- `P3-752`
- `P1-829`
- `P1-831`
- `P3-352`
- `P1-804`
- `P1-830`
- `P3-750`
- `P1-742`
- `P1-810`
- `P3-360`
- `P3-464`
- `P3-319`
- `P3-321`
- `P3-327`
- `P3-344`
- `P3-415`
- `P3-417`
- `P3-434`
- `P3-439`
- `P3-442`
- `P3-465`
- `P3-466`
- `P3-467`
- `P3-592`
- `P3-656`
- `P3-659`
- `P3-713`
- `P3-748`
- `P3-795`
- `P1-590`
- `P1-734`
- `P3-361`
- `P3-436`
- `P3-438`
- `P3-440`
- `P3-504`
- `P3-513`
- `P3-514`
- `P3-517`
- `P3-518`
- `P3-014`
- `P3-021`
- `P3-026`
- `P3-367`
- `P3-626`
- `P3-724`
- `P3-749`
- `P3-757`
- `P3-759`
- `P3-777`
- `P3-778`
- `P3-801`
- `P1-717`
- `P1-764`
- `P1-785`
- `P1-787`
- `P3-019`
- `P3-023`
- `P3-414`
- `P3-429`

## Per-question Rewrite Plan

| # | ID | Target | Must cover | Special handling |
|---:|---|---|---|---|
| 1 | `P3-752` | simple_explanation | D: 可能牵涉再保险; original: 敏感問題 只有確定體檢為非常有必要時才會要求健康 資料。另外，在處理這類資料的時候亦須非 常小心，以免違反有關保護個人私隱的任何 法定條文 主診醫生報告 這是最通常要求的醫療報告 特殊醫療問卷 保險人 | ordinary |
| 2 | `P1-829` | simple_explanation | B: 保险人$5,000,000；被保险人$3,000,000; original: 損失 $13,000,000 -> 保險公司 $10,000,000 客人 $3,000,000 分錢邏輯：保單限額 -> 先客 後保險公司 追討 $8,000,000 客人 $3,000,000 保 | ordinary |
| 3 | `P1-831` | simple_explanation | B: 保险人$3,000,000；被保险人$2,000,000; original: 損失 $10,000,000 -> 保險公司 $8,000,000 客人 $2,000,000 分錢邏輯：保單限額 -> 先客 後保險公司 追討 $5,000,000 客人 $2,000,000 保險 | ordinary |
| 4 | `P3-352` | simple_explanation | D: 只有A及C; original: 殘疾收入附約 在完全殘疾期間提供收入 等候期： 與豁免保費附約的等候期的概念相似，但這個等候期 由一個月至六個月不等 3.1.2 D 殘疾收入附約 在完全殘疾期間提供收入 等候期： 與豁免保費附約的等 | ordinary |
| 5 | `P1-804` | simple_explanation | D: 只有A和C; original: 保險人利用不同的保單條文進行分擔，如比率之數 條款／分擔條款，他把保險人的責任限於損失的某 個比率份額 3.5.5 (a)(b) D 保險人利用不同的保單條文進行分擔，如比率之數 條款／分擔條款，他把 | ordinary |
| 6 | `P1-830` | simple_explanation | A: 保险人$1,000；被保险人没有份儿; original: 損失$6,000 -> 保險公司 $5,000 客人 $1,000 分錢邏輯：免賠額 -> 先保險公司 後客 追討$1,000 保險公司 $1,000 客人 $0 3.6.4 A 損失$6,000 - | ordinary |
| 7 | `P3-750` | simple_explanation | B: 体检医生; original: 體檢醫生 指在保險人的要求下為投保人進行身體檢查 的醫生，費用由保險人支付 5.3.2b B 體檢醫生 指在保險人的要求下為投保人進行身體檢查 的醫生，費用由保險人支付 | ordinary |
| 8 | `P1-742` | simple_explanation | B: 损失超过5%则全数赔偿损失; original: 起賠額是當損失的金額不超過一個預先約定的銀碼時，保險人不會作出賠償，但損失超過該約定的金額時則全數賠償 | ordinary |
| 9 | `P1-810` | simple_explanation | D: 如果其他保单提供弥偿时保障会被取消; original: 比率之數條款／分擔條款，免分擔條款和部分分擔 條款皆為有關分擔的保單條款 3.5.5 D 比率之數條款／分擔條款，免分擔條款和部分分擔 條款皆為有關分擔的保單條款 | ordinary |
| 10 | `P3-360` | simple_explanation | A: 性别划分; original: 等候期：與豁免保費附約的等候期的概念相似，但這 個等候期由一個月至六個月不等 並非貸款或預繳：完全殘疾期間，基本保單依然完全 有效，故此，萬一死亡在完全殘疾期間內發生保單會 於任何已付或應付的收入保險 | negative wording |
| 11 | `P3-464` | simple_explanation | A: i, ii, iii; original: 基本計劃具有很多保障範圍的名目，一般有︰ (i) 住院費用 (ii) 私人護理 (iii) 外科醫生、麻醉師 及 手術室費用 (iv) 住院病人內科醫生費 (v) 住院病人專科醫生費 (vi) 門診病 | combination/all-items logic |
| 12 | `P3-319` | simple_explanation | B: 受保保单所有人于保障期限内遭受完全伤残，而计划于持续 完全伤残某一段时间 (称为等候期)才开始豁免保费; original: 就 豁免保費附約 而言，「完全傷殘」一詞可 指：受保生命因患病或身體受傷而無法執行其工作中 ，或基於其學校教育、培訓或經驗而適合他的任何其 他工作中任何必要行為及職責 。「完全傷殘」 的範圍也包括：於 | combination/all-items logic |
| 13 | `P3-321` | simple_explanation | D: 以上各项; original: 殘疾豁免保費附約 保險人根據此項附約承諾在受保保單所有人完全傷殘 時放棄其收取續保保費的權利。保單將 依然有效，因此，可產生現金價值的保單將會繼續產 生現金價值，分紅保單將會繼續產生紅利，猶如保單 所 | combination/all-items logic |
| 14 | `P3-327` | simple_explanation | B: 在完全伤残时，保险人放弃收取保费的权利; original: 殘疾豁免保費附約 保險人根據此項附約承諾在受保保單所有人完全傷殘 時放棄其收取續保保費的權利。保單將 依然有效，因此，可產生現金價值的保單將會繼續產 生現金價值，分紅保單將會繼續產生紅利，猶如保單 所 | combination/all-items logic |
| 15 | `P3-344` | simple_explanation | C: 在受保保单所有人完全残疾期间，保险人豁免有关保费; original: 殘疾豁免保費附約 保險人根據此項附約承諾在受保保單所有人完全傷殘 時放棄其收取續保保費的權利。保單將 依然有效，因此，可產生現金價值的保單將會繼續產 生現金價值，分紅保單將會繼續產生紅利，猶如保單 所 | combination/all-items logic |
| 16 | `P3-415` | simple_explanation | D: 上述及各种只较轻的伤残; original: 利益給付表:(i) 死亡 - 保額的 100%(ii) 喪失兩肢 - 指明的比率(iii) 完全失明 - 指明的比率(iv) 喪失 單 肢及 單 目失明 - 指明的比率(v) 喪失 單 肢或 單 目失 | combination/all-items logic |
| 17 | `P3-417` | simple_explanation | D: 以上各项皆是; original: 其他利益 ：可以包括下列一項或多項保障 (i) 嚴重燒傷 - 第三級或以上程度燒傷可獲支付 (指明金額) (ii) 每周津貼 - 在傷殘期間可獲給 支付(指明金額最長為52周) (iii) 住院津貼  | combination/all-items logic |
| 18 | `P3-434` | simple_explanation | C: 一种指明疾病或接受医疗程序; original: 受保保單所有人將獲給付死亡保險金的載明部分條件 是 (i) 他被診斷患上指明疾病； (ii) 他被診斷患上終末疾病並只有12個月或更短的壽命 ；或 (iii) 他有必要接受指明的醫療程序 3.3.1  | combination/all-items logic |
| 19 | `P3-439` | simple_explanation | D: 以上各项皆是; original: 含義：受保保單所有人將獲給付死亡保險金的載明部 分條件是 (i) 他被診斷患上指明疾病； (ii) 他被診斷患上終末疾病並只有12個月或更短的壽命 ； 或 (iii) 他有必要接受指明的醫療程序 指明 | combination/all-items logic |
| 20 | `P3-442` | simple_explanation | B: 伤风; original: 指明疾病 ：一切受保疾病均可分類為： (i) 癌症 (ii) 心臟相關疾病； (iii) 傷殘； (iv) 重要器官相關疾病； (v) 神經系統相關疾病； (vi) 免疫系統相關疾病 3.3.1(b) | negative wording |
| 21 | `P3-465` | simple_explanation | D: 以上各项; original: 基本計劃具有很多保障範圍的名目，一般有︰ (i) 住院費用 (ii) 私人護理 (iii) 外科醫生、麻醉師 及 手術室費用 (iv) 住院病人內科醫生費 (v) 住院病人專科醫生費 (vi) 門診病 | combination/all-items logic |
| 22 | `P3-466` | simple_explanation | D: 以上各项; original: 基本計劃具有很多保障範圍的名目，一般有︰ (i) 住院費用 (ii) 私人護理 (iii) 外科醫生、麻醉師 及 手術室費用 (iv) 住院病人內科醫生費 (v) 住院病人專科醫生費 (vi) 門診病 | combination/all-items logic |
| 23 | `P3-467` | simple_explanation | D: 以上各项; original: 基本計劃具有很多保障範圍的名目，一般有︰ (i) 住院費用 (ii) 私人護理 (iii) 外科醫生、麻醉師 及 手術室費用 (iv) 住院病人內科醫生費 (v) 住院病人專科醫生費 (vi) 門診病 | combination/all-items logic |
| 24 | `P3-592` | simple_explanation | B: 他们的股份已经完全清缴; original: 營利公司(或稱股份公司) (Proprietary companies或 Stock companies) 這是更普遍的公司結構，是由股東共同擁有 的股份有限責任(limited liability) | negative wording |
| 25 | `P3-656` | simple_explanation | A: 立约保费收据; original: 立約保費收據(i) 收據本身是一份合約(ii)保障由投保人簽署投保單並繳清有關保費之日開始生效(iii)保障並不以事後能否證明投保人可保或已經具有可保性為條件(iv) 保障期最長只限於指定的日數(v) | combination/all-items logic |
| 26 | `P3-659` | simple_explanation | C: 它们提供了保险人不可终止的具约束力保障; original: 立約保費收據 (Binding premium receipt) 也可能有其他名稱如 臨時保險協議 (Temporary Insurance Agreement (TIA))或 不附條件保費收據 (U | negative wording |
| 27 | `P3-713` | simple_explanation | B: 是属于一种可以给予低级职员处理的程序; original: 核保 (Underwriting)可以簡單地描述為：為了提供 保險或決定採用甚麼保險條款而進行的風險 評估。另一種描述是：它乃是要確定被建議 風險的可保性。由於人壽保險涉及保險人不 能取消的長期合約， | negative wording |
| 28 | `P3-748` | simple_explanation | A: i, ii; original: 要體檢業務 這類調查的來源可以是主診醫生(指通常或曾 經向投保人提供醫療護理的醫生或其他合資 格 的 醫務人員)，或體檢醫生(指在保險人的要求下 為投保人進行身體檢查的醫生，費用由保險 人支付) 5. | combination/all-items logic |
| 29 | `P3-795` | simple_explanation | B: 保险人仍需作出全额赔付; original: 因可疑的死亡不會被裁定為自殺，故A不正確 保險公司不會因一年內出現可疑的死亡而只 付50%賠償，故B不正確 通融賠付會出現於受保人於自殺免責期內自 殺，而不是用於一年內出現可疑的死亡，故D 不正確 5 | negative wording |
| 30 | `P1-590` | simple_explanation | C: 受屈的一方可展开刑事诉讼; original: 不追究、合理時間內自始推翻合約（可使無效）、 提出訴訟要求賠償（如果屬於欺詐性或疏忽性失實 陳述）均是違反最高誠信的處理方法／補救； 刑事訴訟是以香港特區的名義向任何被指控犯罪的 人士提出，違反最高誠 | negative wording |
| 31 | `P1-734` | simple_explanation | C: 它所指标的物的剩余部份; original: 在非水險（財產保險）中，比例分攤（Average） 是指不足額保險時，保險人只會按投保比例作出賠 償；在水險中，「海損」（Average）的意思截然 不同，它所指的是部分損失 3.4.7 C 在非水險 | negative wording |
| 32 | `P3-361` | simple_explanation | C: 或不能从事任何按照其以往所受教育、训练及经验在合理程度 上胜任的职业; original: 而言，「完全傷殘」一詞可指：受保生命因患病或身 體受傷而無法執行其工作中， 或基於其學校教育、培訓或經驗而適合他的任何其他 工作中任何必要行為及職責。「完全傷殘」的範圍也 包括：於附約有效期內，受保生 | negative wording |
| 33 | `P3-436` | simple_explanation | C: 受保生命正罹患末期疾病，预期寿命只有十二个月或以下; original: 危疾保險利益 (Critical Illness Benefit) 這類附約的基本特點如下： 含義：受保保單所有人將獲給付死亡保險金的載明部 分條件是 (i) 他被診斷患上指明疾病； (ii) 他被診 | negative wording |
| 34 | `P3-438` | simple_explanation | A: 利益给付金额并不在保险保障金额扣除; original: 含義：受保保單所有人將獲給付死亡保險金的載明部分條件是(i) 他被診斷患上指明疾病；(ii)他被診斷患上終末疾病並只有12個月或更短的壽命； 或(iii) 他有必要接受指明的醫療程序；指明疾病 ：一切 | negative wording |
| 35 | `P3-440` | simple_explanation | A: 受保保单所有人正在罹患终末疾病，预期寿命只有12个月或以下; original: 受保保單所有人將獲給付死亡保險金的載明部分條件 是 (i) 他被診斷患上指明疾病； (ii) 他被診斷患上終末疾病並只有12個月或更短的壽命 ； 或 (iii) 他有必要接受指明的醫療程序 3.3.1 | negative wording |
| 36 | `P3-504` | simple_explanation | D: 以上所有答案皆不正确; original: 生活指數調整利益 (Cost of Living Adjustment (COLA) Benefit) 這項附約或保單條款是為殘疾的受保保單所有人提供 定期增加的殘疾收入保險利益。就如名稱所示，增加  | negative wording |
| 37 | `P3-513` | simple_explanation | D: 以上皆不是; original: 生活指數調整利益 (Cost of Living Adjustment (COLA) Benefit) 這項附約或保單條款是為殘疾的受保保單所有人提供 定期增加的殘疾收入保險利益。就如名稱所示，增加  | negative wording |
| 38 | `P3-514` | simple_explanation | D: 以上各项皆不是; original: 生活指數調整利益 (Cost of Living Adjustment (COLA) Benefit) 這項附約或保單條款是為殘疾的受保保單所有人提供 定期增加的殘疾收入保險利益。就如名稱所示，增加  | negative wording |
| 39 | `P3-517` | simple_explanation | D: 以上各项皆不是; original: 生活指數調整利益 (Cost of Living Adjustment (COLA) Benefit) 這項附約或保單條款是為殘疾的受保保單所有人提供 定期增加的殘疾收入保險利益。就如名稱所示，增加  | negative wording |
| 40 | `P3-518` | simple_explanation | D: 以上皆不是; original: 生活指數調整利益 (Cost of Living Adjustment (COLA) Benefit) 這項附約或保單條款是為殘疾的受保保單所有人提供 定期增加的殘疾收入保險利益。就如名稱所示，增加  | negative wording |
| 41 | `P3-014` | simple_explanation | D: 以上答案皆正确; original: 壽險的需求 個人需求: (i) 受養人的生活開支； (ii) 善終 生命完結 開支； (iii) 教育經費； (iv) 退休收入； (v) 償還按揭資金； (vi) 應急資金（通常用來應付突發的開支  | combination/all-items logic |
| 42 | `P3-021` | simple_explanation | D: 以上各项皆是; original: 個人需求包括 : (i) 受養人的生活開支； (ii) 善終 生命完結 開支； (iii) 教育經費； (iv) 退休收入； (v) 償還按揭資金； (vi) 應急資金; (vii) 殘疾收入 1.1 | combination/all-items logic |
| 43 | `P3-026` | simple_explanation | C: 退休收入; original: 個人需求包括 : (i) 受養人的生活開支； (ii) 善終 生命完結 開支； (iii) 教育經費； (iv) 退休收入； (v) 償還按揭資金； (vi) 應急資金; (vii) 殘疾收入 個人需 | negative wording |
| 44 | `P3-367` | simple_explanation | D: 实际上不是弥偿; original: 這種保險利益經常被稱為雙倍賠償利益(Double Indemnity Benefit) 字面意思為「彌償」一詞技術上並不準確，因為人壽 保險 一般不適用彌償原則 3.2.1註 D 這種保險利益經常被稱 | negative wording |
| 45 | `P3-626` | simple_explanation | D: 以上各项皆是; original: 市場行銷 (i) 產品研究：及開發新產品。 (ii) 促銷宣傳：製作有關的材料並切實跟進有關 的物流後勤事務和其他細節 (iii) 廣告：與(ii)項關係密切，但亦具其特性例如 ：傳媒的參與及贊助活動 | combination/all-items logic |
| 46 | `P3-724` | simple_explanation | D: 以上各项皆是; original: 財務性核保 1 預期保單所有人履行繳付保費責任的能力 2 所顯示的風險程度(是否明智之舉以及市場有 否提供有關再保險等問題) 3 就同一受保生命已累積購買的保單計劃 4 保額是否超出與投保人的年齡和一 | combination/all-items logic |
| 47 | `P3-749` | simple_explanation | D: 上述各项; original: 敏感問題 只有確定體檢為非常有必要時才會要求健康 資料。另外，在處理這類資料的時候亦須非 常小心，以免違反有關保護個人私隱的任何 法定條文 主診醫生報告 這是最通常要求的醫療報告 特殊醫療問卷 保險人 | combination/all-items logic |
| 48 | `P3-757` | simple_explanation | D: 以上所有各项; original: 敏感問題 只有確定體檢為非常有必要時才會要求健康 資料。另外，在處理這類資料的時候亦須非 常小心，以免違反有關保護個人私隱的任何 法定條文 主診醫生報告 這是最通常要求的醫療報告 特殊醫療問卷 保險人 | combination/all-items logic |
| 49 | `P3-759` | simple_explanation | D: 以上各项皆是; original: 保密 健康資料屬個人私隱，獲得的資料必須按最 高機密原則處理。然而，當投保人真的被建 議進行身體檢查時，投保人有權知道要進行 甚麽檢查，需要有關資料的目的，及如果他 想知道的話 任何檢查的結果 5.3 | combination/all-items logic |
| 50 | `P3-777` | simple_explanation | C: 售后服务部; original: 售後服務(after-sales service) 的素質是一個很重要的因素。他們所屬的部 門現在可能稱為保單 所有人或稱客戶服務部，或 Policyowner Service (POS) 5.5 C | combination/all-items logic |
| 51 | `P3-778` | simple_explanation | A: POS (Policyowner Service) 保单所有人服务; original: 售後服務(after-sales service) 的素質是一個很重要的因素。他們所屬的部 門現在可能稱為保單 所有人或稱客戶服務部，或 Policyowner Service (POS) 售後服務( | combination/all-items logic |
| 52 | `P3-801` | simple_explanation | C: i, iii, iv; original: 可疑或令人驚訝 如果保單簽發後不久便死亡，或者死亡的原 因通常須持續一段比該保單已生效的時間還 要長的時間才會引致死亡，這些情況會軀使 保險人應就這些情況作進一步的調查，欺詐 肯定是其中的一種可能 5 | combination/all-items logic |
| 53 | `P1-717` | simple_explanation | D: 以上各项; original: 委付大多數出現在水險中，它是指在某些情況下向 保險人交出保險標的（損餘），作為索取全損的賠 償金額的條件；不過，在其他類別的財產保單（如 火險單）中，通常明確地列明不容許委付 3.4.6 D 委付大多 | combination/all-items logic |
| 54 | `P1-764` | simple_explanation | B: i及iii; original: 約定價值保單的應用範圍包括價值高並且不大可能 須顧及舊因素（例如藝術作品、珠寶等）或進行估 值時得考慮頗主觀的因素的物件。 保額是基於專家的估值而釐定的，並經被保險人和 保險人同意被視為保單生效的全時 | negative wording |
| 55 | `P1-785` | simple_explanation | B: 这份保单有分担条款; original: 分擔應用時，任何一位保險人對被保險人的損失應 負的最終部分被稱為該保險人的「比率之數」；比 率之數條款（分擔條款）把保險人的責任限於損失 的某個比率份額； 分擔建基於重複保險上，而其中一份保單決定賠償 | combination/all-items logic |
| 56 | `P1-787` | simple_explanation | C: 这份保单有分担条款; original: 分擔應用時，任何一位保險人對被保險人的損失應 負的最終部分被稱為該保險人的「比率之數」；比 率之數條款（分擔條款）把保險人的責任限於損失 的某個比率份額； 分擔建基於重複保險上，而其中一份保單決定賠償 | combination/all-items logic |
| 57 | `P3-019` | simple_explanation | D: 以上各项皆是; original: 個人需求包括 : (i) 受養人的生活開支； (ii) 善終 生命完結 開支； (iii) 教育經費； (iv) 退休收入； (v) 償還按揭資金； (vi) 應急資金; (vii) 殘疾收入 1.1 | combination/all-items logic |
| 58 | `P3-023` | simple_explanation | C: 为他人可能死亡而作出的投机活动; original: 個人需求包括 : (i) 受養人的生活開支； (ii) 善終 生命完結 開支； (iii) 教育經費； (iv) 退休收入； (v) 償還按揭資金； (vi) 應急資金; (vii) 殘疾收入 1.1 | negative wording |
| 59 | `P3-414` | simple_explanation | D: 丧失一肢及一目失明; original: 基本保障： 在正常情況下，若受保生命在意外事故中喪失任何兩 肢或雙目失明，則會支付一筆與 意外死亡保險金(death benefit)相等的款項 3.2.2(a) D 基本保障： 在正常情況下，若受保 | combination/all-items logic |
| 60 | `P3-429` | simple_explanation | C: 在极度悲伤的生命受威胁情况下可行使; original: 基本原因 ： 在極度精神緊張、悲哀和生命受威脅的情況下發放這 些保險利益，可以幫助當事人應付有關開支，並至少 為已經非常悲傷的當事人提供部分援助以解決新增的 財務困擾 3.3 (a) C 基本原因 ： | combination/all-items logic |
