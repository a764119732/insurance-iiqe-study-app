# Full Explanation Batch 12 Rewrite Plan

Updated: 2026-06-01

Field-level write plan:
- Modify only selected IDs simple_explanation.
- Do not modify original_explanation or any protected question/source field.
- Use five-section beginner-friendly structure.
- For negative/combo/all-of-above items, explicitly mention the special logic.

| ID | Field | Rewrite coverage | Skip? |
|---|---|---|---|
| `P1-393` | simple_explanation | answer A 委托人(自然人); basis: 以個人(自然人)身份出現的委託人或代理人出現精 神錯亂而不再能夠履行協議時，代理關係將即時 終止 (e) A 以個人(自然人)身份出現的委… | no |
| `P1-397` | simple_explanation | answer A 代理关系立即中止; basis: 當代理關係或協議內容不再為法律所容許時，代 理關係將即時終止 (f) A 當代理關係或協議內容不再為法律所容許時，代 理關係將即時終止 | no |
| `P1-399` | simple_explanation | answer A 即时终止; basis: 當代理關係或協議內容不再為法律所容許時，代 理關係將即時終止 (f) A 當代理關係或協議內容不再為法律所容許時，代 理關係將即時終止 | no |
| `P1-413` | simple_explanation | answer B 不适用于分担原则，因两份保险分别保障不同权益; basis: 銀行購買的保險保了其「承按人權益」，而「A」 購買的保險保了其「財產擁有人權益」。兩份保單 保了不相同的權益，所以不適用於分擔原則 銀行購… | no |
| `P1-520` | simple_explanation | answer D 必须实质上真实，但没有主动的责任披露每项事实; basis: 有問及時以誠實的態度如實作答，沒有問及時可保 持緘默，被形容為消極的披露責任，而所提供的資 訊只需是實質上真實的，他們沒有責任確保對方取 … | no |
| `P1-788` | simple_explanation | answer D 每张保单均保障受影响的权益; basis: 分擔的適用條件：每張保單都對有關損失提供彌償 保障；每張保單都承保了受影響的權益；每張保單 都承保了引致了該損失的那個危險；每張保單都承 … | no |
| `P1-947` | simple_explanation | answer A 长期责任业务; basis: 精算師的專業知識極具價值，尤其是在長期責任業 務方面；這類業務的索償過程，從產生到之後的發 展往往經歷一段長時間 (b) A 精算師的專業… | no |
| `P1-948` | simple_explanation | answer A 长期责任业务; basis: 精算師的專業知識極具價值，尤其是在長期責任業 務方面；這類業務的索償過程，從產生到之後的發 展往往經歷一段長時間 (b) A 精算師的專業… | no |
| `P1-966` | simple_explanation | answer A 人寿保险; basis: 長期業務包括︰ 人壽及年金、婚姻及出生、相連長期、永久健康、 聯合養老保險、資本贖回、退休計劃管理第I、II及III 類 長期業務包括︰ … | no |
| `P1-1015` | simple_explanation | answer C 同时处理长期业务和一般业务; basis: 綜合保險人是指同時可參與長期業務及保一般保險 業務的保險人 綜合保險人是指同時可參與長期業務及保一般保險 業務的保險人 | no |
| `P1-1023` | simple_explanation | answer A 香港保险业联会; basis: 香港保險業聯會的目標：推廣及提升在本港經營業 務的保險人及再保險人的共同利益 香港保險業聯會的目標：推廣及提升在本港經營業 務的保險人及再… | no |
| `P1-1028` | simple_explanation | answer B 香港保险业联会的成立目的是保障及提升保险人及再保 险人的利益; basis: 香港保險業聯會的目標：推廣及提升在本港經營業 務的保險人及再保險人的共同利益 香港保險業聯會的目標：推廣及提升在本港經營業 務的保險人及再… | no |
| `P1-1030` | simple_explanation | answer C 除了保险人之外，还代表再保险人的利益; basis: 香港保險業聯會的目標：推廣及提升在本港經營業 務的保險人及再保險人的共同利益 (a) C 香港保險業聯會的目標：推廣及提升在本港經營業 務… | no |
| `P1-1037` | simple_explanation | answer D 向无辜死伤的交通意外受害人提供补偿; basis: 如果與車輛道路意外有關的法定保險並不存在、無 效或有關保險人 正進行清盤時，香港汽車保險局便會謀求向無辜傷 亡的交通意外受害 人提供補償 … | no |
| `P1-1038` | simple_explanation | answer C 汽车保险保费的附加征费; basis: 香港汽車保險局的經費來自汽車保費的附加徵費 香港汽車保險局的經費來自汽車保費的附加徵費 | no |
| `P1-1040` | simple_explanation | answer C 汽车保险的保费征费; basis: 香港汽車保險局的經費來自汽車保費的附加徵費 (b) C 香港汽車保險局的經費來自汽車保費的附加徵費 | no |
| `P1-1041` | simple_explanation | answer C 维护车祸中第三者的利益; basis: 如果與車輛道路意外有關的法定保險並不存在、無 效或有關保險人 正進行清盤時，香港汽車保險局便會謀求向無辜傷 亡的交通意外受害 人提供補償 … | no |
| `P1-1042` | simple_explanation | answer C 为未偿清的汽车意外的赔偿作出补偿; basis: 如果與車輛道路意外有關的法定保險並不存在、無 效或有關保險人 正進行清盤時，香港汽車保險局便會謀求向無辜傷 亡的交通意外受害 人提供補償 … | no |
| `P1-1285` | simple_explanation | answer D 令保单持有人得到不偏不倚的建议; basis: 保險經紀被視為保險業的專家，並必須獨立於任何 一個保險人；而保單持有人就是保險經紀的客戶， 他期望從保險經紀那裏得到不偏不倚的意見，並將 … | no |
| `P1-1287` | simple_explanation | answer D B及C都是正确的; basis: 保險經紀必須獨立於任何一個保險人；保險經紀必 須受專業彌償保險承保，最少港幣300萬元，不必 高於7500萬 & (c) D 保險經紀必須… | no |
| `P1-1289` | simple_explanation | answer C 专业疏忽; basis: 如果保險經紀未能合理地照顧客戶的利益，便很可 能構成專業疏忽 (d) C 如果保險經紀未能合理地照顧客戶的利益，便很可 能構成專業疏忽 | no |
| `P3-323` | simple_explanation | answer B 豁免; basis: 豁免 是個自願放棄某項權利或取消某項規則的條件的行為 豁免 是個自願放棄某項權利或取消某項規則的條件的行為 | no |
| `P3-329` | simple_explanation | answer D 年龄在15至65岁之间; basis: 年齡限制 豁免一般只限於指明年歲範圍內開始的傷殘，比如1 5至65歲 年齡限制 豁免一般只限於指明年歲範圍內開始的傷殘，比如1 5至65歲 | no |
| `P3-331` | simple_explanation | answer D 年龄在15至65岁之间; basis: 年齡限制 豁免一般只限於指明年歲範圍內開始的傷殘，比如1 5至65歲 年齡限制 豁免一般只限於指明年歲範圍內開始的傷殘，比如1 5至65歲 | no |
| `P3-332` | simple_explanation | answer D 任何一类人寿保险计划; basis: 殘疾豁免保費附約可附加於幾乎所有類型的 壽險 殘疾豁免保費附約可附加於幾乎所有類型的 壽險 | no |
| `P3-341` | simple_explanation | answer C 遭受残疾后，直至保费被豁免为止; basis: 等候期 受保保單所有人一旦根據保單的定義完全傷殘達最低 期限(通常為三或六個月)，他將獲豁免支付續保保費 (a) C 等候期 受保保單所有… | no |
| `P3-345` | simple_explanation | answer C 3或6个月; basis: 等候期 受保保單所有人一旦根據保單的定義完全傷殘達最低 期限(通常為三或六個月)，他將獲豁免支付續保保費 (a) C 等候期 受保保單所有… | no |
| `P3-351` | simple_explanation | answer D 只有残疾收入附约才提供实质收入; basis: 殘疾豁免保費附約 保險人承諾在受保保單所有人完全傷殘時放棄其收取 續保保費的權利。保單依然有效 殘疾收入附約 在完全殘疾期間提供收入 殘疾… | no |
| `P3-353` | simple_explanation | answer B DI:受保人完全残疾时提供收入, WP: 受保人完全残疾时提供 豁免保费; basis: 殘疾收入附約 在完全殘疾期間提供收入 等候期： 與豁免保費附約的等候期的概念相似，但這個等候期 由一個月至六個月不等 殘疾收入附約 在完全… | no |
| `P3-357` | simple_explanation | answer D 事实是可附加于任何长期寿险保单; basis: 殘疾收入附約 在完全殘疾期間提供收入。同樣，殘疾收入附約可以 附加於幾乎所有類型的人壽保險 殘疾收入附約 在完全殘疾期間提供收入。同樣，殘… | no |
| `P3-362` | simple_explanation | answer B 一个月至六个月; basis: 等候期 與豁免保費附約的等候期的概念相似，但這個等候期 由一個月至六個月不等 (c) B 等候期 與豁免保費附約的等候期的概念相似，但這個… | no |
| `P3-379` | simple_explanation | answer C 1年; basis: 死亡必須由意外身體受傷而直接引起，並與所有其他 原因無關並於該受傷的一年之內發生 死亡必須由意外身體受傷而直接引起，並與所有其他 原因無關… | no |
| `P3-387` | simple_explanation | answer A 基本保额而已; basis: 一般來說，保單會規定：在同一次意外事故同時引致 喪失肢體和死亡的情況下，保單只須支付喪失肢體保 險利益或死亡保險利益，而非同時支付兩項利益… | no |
| `P3-390` | simple_explanation | answer A 在一段指定期间内; basis: 死亡必須由意外身體受傷而直接引起，並與所有其他 原因無關並於該受傷的一年之內發生 (a) A 死亡必須由意外身體受傷而直接引起，並與所有其… | no |
| `P3-399` | simple_explanation | answer D 一年; basis: 死亡必須由意外身體受傷而直接引起，並與所有其他 原因無關並於該受傷的一年之內發生 (a)(iii) D 死亡必須由意外身體受傷而直接引起，… | no |
| `P3-400` | simple_explanation | answer C 于有关定义中加入丧失肢体功能的情况; basis: 定義：喪失一肢可以描述為實際喪失肢體(由手腕／ 足踝關節或以上完全斷離)，或喪失該肢體的功能 (b) C 定義：喪失一肢可以描述為實際喪失… | no |
| `P3-412` | simple_explanation | answer B 保额的2倍; basis: 失去兩個肢體 - 意外附約賠償100% 死亡 - 人壽計劃賠償100% 故總共賠償200% (b) (iv) B 失去兩個肢體 - 意外附… | no |
| `P3-448` | simple_explanation | answer A 受保人需要接受长期护理; basis: 含義：因某些疾病而須接受長期護理的受保保單所有 人，可獲支付死亡保險金的規定部分 含義：因某些疾病而須接受長期護理的受保保單所有 人，可獲… | no |
| `P3-458` | simple_explanation | answer C 于被保险人接受上述利益期间，可以得到豁免; basis: 豁免保費 (Premium waiver)： 受保保單所有人在接受長期護理利益的期間，通常都 會獲得豁免保費 豁免保費 (Premium … | no |
| `P3-459` | simple_explanation | answer C 可获全数豁免; basis: 豁免保費 (Premium waiver)： 受保保單所有人在接受長期護理利益的期間，通常都 會獲得豁免保費 (f) C 豁免保費 (Pr… | no |
| `P3-469` | simple_explanation | answer C 24,000; basis: 自願醫保下的稅務扣減 每年扣減所涉的保費上限為每名受保人8,000港元， 但可申請扣減的指明親屬人數不設上限 (b) C 自願醫保下的稅務… | no |
| `P3-475` | simple_explanation | answer B 需经过认可，是一份个人偿付住院保险产品，给予消费者 自愿认购; basis: 參與均屬自願性質。自願醫保容許參與之保險公司推 出經食衞局認可的個人償款住院保險產品 （「認可產品」），以供消費者自願選購 消費者自願認購… | no |
| `P3-476` | simple_explanation | answer B 需经过认可，是一份个人偿付住院保险产品，给予消费者 自愿认购; basis: 參與均屬自願性質。自願醫保容許參與之保險公司推 出經食衞局認可的個人償款住院保險產品 （「認可產品」），以供消費者自願選購 消費者自願認購… | no |
| `P3-477` | simple_explanation | answer A 自愿医保为愿意及有能力使用私营医疗服务的消费者提供一个 额外的选择; basis: 透過令巿民更容易獲得個人住院保險，並提升個人住 院保險的質素和透明度，自願醫保為願意及有能力使 用私營醫療服務的消費者提供一個額外的選擇 … | no |
| `P3-571` | simple_explanation | answer C 最少30日(或 31日); basis: 寬限期一般為期至少30或31日 (a) C 寬限期一般為期至少30或31日 | no |
| `P3-576` | simple_explanation | answer B 于宽限期完结当日起该保单便会失效; basis: 如果在寬限期結束時受保生命還活着 但到期保費尚未繳清除非有其他保單 條款另作規定，如不能作廢條款英式 保單就會在保費到期日開始失效，而 美… | no |
| `P3-578` | simple_explanation | answer D 保费到期日; basis: 如果在寬限期結束時受保生命還活着 但到期保費尚未繳清除非有其他保單 條款另作規定，如不能作廢條款英式 保單就會在保費到期日開始失效，而 美… | no |
| `P3-579` | simple_explanation | answer B 于宽限期完结当日起该保单便会失效; basis: 如果在寬限期結束時受保生命還活着 但到期保費尚未繳清除非有其他保單 條款另作規定，如不能作廢條款英式 保單就會在保費到期日開始失效，而 美… | no |
| `P3-596` | simple_explanation | answer D 该公司已将其法定地位转为营利公司; basis: 世界各地的「相互公司」都陸續進行股份化 (de- mutualised)的轉變，並將其法定地位變成了 營利公司（或稱股份公司） (a) D… | no |
| `P3-625` | simple_explanation | answer B Policyowner Service; basis: 顧客服務又稱保 單 所有人服務 (Policyowner Service) (e) B 顧客服務又稱保 單 所有人服務 (Policyow… | no |
| `P3-631` | simple_explanation | answer D 以上答案皆正确; basis: 核保部的功能包括： (i) 風險評估：風險的選擇、評級以及按需 要附加限制條款等技術性問題 (ii) 體檢要求：安排並監督身體檢查及需要的… | no |
| `P3-636` | simple_explanation | answer A 投保人本身; basis: 投保手續的一般規則 (i) 必須提供所有 重要事實 (material facts) (ii) 通常，投保人須 親自填寫投保單 (iii)… | no |
| `P3-654` | simple_explanation | answer A 合约从未生效; basis: 附條件保費收據 按照這類保費收據，保險人同意保險於投保 時即開始生效。但是，必須在事後能確定投 保人在投保時乃屬按照標準條款具有可保性 才… | no |
| `P3-676` | simple_explanation | answer A 4个不同的假设(0, 3, 6, 9) 或 3个不同的假设(0, 3, 6); basis: 以四個假設年度淨回報率，即 0%、 3%、6%及9%作闡述 以三個假設年度淨回報率，即 0%、 3%及6% 作闡述 (a) A 以四個假設… | no |
| `P3-678` | simple_explanation | answer C (i) (iii) (iv); basis: 精算師會考慮匯集基金的業 績情況、經濟展望、及如何公平的對待同一 個匯集基金内不同類別的保單持有人及在不 同時間投保的保單持有人。而且，保… | no |
| `P3-679` | simple_explanation | answer D 风险相对较低; basis: 保單持有人的回報所面臨的風險比投資相連 保單為低 投資相連保單：由於保單持有人自行決定投 資基金的組合，而保單一般沒有回報保證的 (c) … | no |
| `P3-682` | simple_explanation | answer A 它是指相关的保险人随著提供了分红保单而在其 资产负债表上显示出来的资产的全部，…; basis: 所謂「匯集基金」是指相關的保險人隨着提 供了分紅保單而在其資產負債表上顯示出來 的資產的全部，而之後保險人須為這些保單 管理該等資產 扣除… | no |
| `P3-684` | simple_explanation | answer A 保险人一般会将红利平均派发，以减低短期大幅波动; basis: 紅利金額視乎匯集基金的業績情況而定的。 也值得注意，保險人一般保留釐定紅利金額 的權利 故A正確 實務上，紅利金額是基於各自 的獲委任精算… | no |
| `P3-685` | simple_explanation | answer A 保险人一般保留厘定红利金额的权利; basis: 紅利金額視乎匯集基金的業績情況而定的。 也值得注意，保險人一般保留釐定紅利金額 的權利 紅利金額視乎匯集基金的業績情況而定的。 也值得注意… | no |
| `P3-686` | simple_explanation | answer B 该份分红保单的汇集基金的业绩表现; basis: 紅利金額視乎匯集基金的業績情況而定的。 也值得注意，保險人一般保留釐定紅利金額 的權利 紅利金額視乎匯集基金的業績情況而定的。 也值得注意… | no |
| `P3-688` | simple_explanation | answer A 保险人一般会将红利平均派发，以减低短期大幅波动; basis: 險人一般會將紅利平均派發，以減低短期大 幅波動 險人一般會將紅利平均派發，以減低短期大 幅波動 | no |
| `P3-689` | simple_explanation | answer A 一般会将红利平均派发，以减低短期大幅波动; basis: 險人一般會將紅利平均派發，以減低短期大 幅波動 險人一般會將紅利平均派發，以減低短期大 幅波動 | no |
| `P3-693` | simple_explanation | answer B 期终额外红利; basis: 派發紅利的方式 (a) 派發現金紅利 (b) 派發復歸紅利 (c) 派發期終額外紅利 派發紅利的方式 (a) 派發現金紅利 (b) 派發復… | no |
| `P3-694` | simple_explanation | answer B 得知了汇集基金的实际业绩比其之前精算及财政假设更佳之后; basis: 一個謹慎的保險人只會在得知了實際的業績 情況比其之前所作的精算和財務假設更有利 後才宣佈保單紅利的 一個謹慎的保險人只會在得知了實際的業績… | no |
| `P3-695` | simple_explanation | answer D 复归红利; basis: 派發紅利的方式 (a) 派發現金紅利 (b) 派發復歸紅利 (c) 派發期終額外紅利 派發紅利的方式 (a) 派發現金紅利 (b) 派發復… | no |
| `P3-696` | simple_explanation | answer C 现金红利; basis: 派發現金紅利：許多保單持有人選擇把紅利 存放於其保險人那裏 (a) C 派發現金紅利：許多保單持有人選擇把紅利 存放於其保險人那裏 | no |
| `P3-699` | simple_explanation | answer C 保单持有人的回报所承受的风险较低; basis: 保證的緣故，保單持有人的回報所面臨的風 險比投資相連保單為低 保證的緣故，保單持有人的回報所面臨的風 險比投資相連保單為低 | no |
| `P3-702` | simple_explanation | answer C (iii) (iv); basis: 分紅保單的主要優點在於除了有保證現金價 值和保證死亡利益之外，保單持有人還可以 以收取紅利的方式受惠於匯集基金比該等保 證更佳的業績情況 … | no |
| `P3-708` | simple_explanation | answer B 按「实际派发的非保证红利／英式红利」除以销售时「利益说明所述数额」的 平均数计算; basis: 按照指引16的規定，銷售分紅（或有利潤） 保單或萬用壽險保單的保險人，應在公司網 站披露每個近期曾發出新保單的產品系列的 非保證／英式紅利… | no |
| `P3-716` | simple_explanation | answer B 因为人寿保险保单的风险核保只进行一次; basis: 由於人壽保險涉及保險人不能取消的長期合 約，因此，通常人壽保險對個別風險的核保 只能進行一次 。所以，第一次就對風險進行正確 的評核是非常… | no |
| `P3-728` | simple_explanation | answer A 与实质危险相比，道德危险较难确定; basis: 道德危險 這涉及一些較主觀的因素，環繞準被保險人 的基本誠信或正直意向 與實質危險相比，這些都更難以確定 實質危險主要考慮正直意向因素，道… | no |
| `P3-729` | simple_explanation | answer B 道德危险; basis: 道德危險 這涉及一些較主觀的因素，環繞準被保險人 的基本誠信或正直意向 與實質危險相比，這些都更難以確定 (a) B 道德危險 這涉及一些… | no |
| `P3-734` | simple_explanation | answer D 实质危险; basis: 確定風險程度：人壽保險核保人憑經驗可以 確定投保的風險程度，通常根據兩大主題： (i) 實質危險 (ii) 道德危險 (a) D 確定風險… | no |
| `P3-735` | simple_explanation | answer B 实质危险; basis: 實質危險 (1) 明顯超重 (2) 煙吸得多的人 (3) 濫用物質如酒精、毒品等 (4) 高危職業或消閒活動 (5) 家族有不良遺傳病歷或… | no |
| `P3-738` | simple_explanation | answer B 拒保风险; basis: 拒保風險 這類風險是某特定保險人發覺不可接受的 (b) B 拒保風險 這類風險是某特定保險人發覺不可接受的 | no |
| `P3-743` | simple_explanation | answer A 标准风险; basis: 標準風險 標準風險沒有異常特點，完全可以按照適用 於與投保人的年齡和性別相同的人所設應繳 的保費而接受投保 (b)(i) A 標準風險 標… | no |
| `P3-744` | simple_explanation | answer A 财务性核保; basis: 財務性核保 1 預期保單所有人履行繳付保費責任的能力 2 所顯示的風險程度 3 就同一受保生命已累積購買的保單計劃 4 保額是否超出與投保… | no |
| `P3-756` | simple_explanation | answer C 主诊医生报告; basis: 主診醫生報告 (i) 須進一步調查投保單中所披露的某些健康資 料 (ii) 要求的保險金額很高 (iii) 投保人年齡較高 (b) C 主… | no |
| `P3-758` | simple_explanation | answer D 以上都是原因; basis: 主診醫生報告 (i) 須進一步調查投保單中所披露的某些健康資 料 (ii) 要求的保險金額很高 (iii) 投保人年齡較高 (b) D 主… | no |
| `P3-765` | simple_explanation | answer B 300,000元; basis: 最常用的負債種類是遞減負債。假設一份保 額400,000元，年期20年的儲蓄壽險單於起保 時的負債是190,000元，如果死亡於保障的第 … | no |
| `P3-769` | simple_explanation | answer B 团体寿险; basis: 團體保單保險 這個過程涉及為每個僱員或其他團體成員進 行登記，因此，技術系統必須不僅提供總保 單，還要為每位受保人提供保險憑證，也許 還有… | no |
| `P3-771` | simple_explanation | answer C 销售代理人负责交付; basis: 個人保單保險 印製與交付是很簡單的，通常由保險代理人 或稱銷售代理人負責交付 (a) C 個人保單保險 印製與交付是很簡單的，通常由保險代… | no |
| `P3-773` | simple_explanation | answer B 保险凭证，也许还有成员登记卡; basis: 團體保單保險 這個過程涉及為每個僱員或其他團體成員進 行登記，因此，技術系統必須不僅提供總保 單，還要為每位受保人提供保險憑證，也許 還有… | no |
| `P1-1002` | simple_explanation | answer C 火险; basis: 經濟權益保險包括營業中斷、信貸及租金保險等； 火險屬於財產保險 經濟權益保險包括營業中斷、信貸及租金保險等； 火險屬於財產保險 | no |
| `P1-1003` | simple_explanation | answer D 以上所有各项皆不是; basis: 分出再保險：保險人向其他保險人／再保險人購買 保險； 分入再保險：保險人擔任再保險人的角色，承保一 些已被其他保險人／再保險人承保的風險 … | no |
| `P1-1009` | simple_explanation | answer B 专业再保险人只经营再保险业务; basis: 分出再保險：保險人向其他保險人／再保險人購買 保險； 分入再保險：保險人擔任再保險人的角色，承保一 些已被其他保險人／再保險人承保的風險；… | no |
| `P1-1010` | simple_explanation | answer C 专业再保险人只进行再保险业务; basis: 分出再保險：保險人向其他保險人／再保險人購買 保險； 分入再保險：保險人擔任再保險人的角色，承保一 些已被其他保險人／再保險人承保的風險；… | no |
| `P1-1013` | simple_explanation | answer D 以上各项皆是; basis: 經營「純」長期業務的保險人：54 經營「純」一般業務的保險人：91 經營「綜合」業務的保險人：19 「綜合」業務：同時從事長期及一般業務 … | no |
| `P1-1025` | simple_explanation | answer D 以上各项皆是; basis: 香港保險業聯會的目標：推廣及提升在本港經營業 務的保險人及再保險人的共同利益； 其存在的目的，一是向香港人推介保險，二是鼓勵 會員達到最高… | no |
| `P1-1026` | simple_explanation | answer D 只有B)及C); basis: 香港保險業聯會的目標：推廣及提升在本港經營業 務的保險人及再保險人的共同利益； 其存在的目的，一是向香港人推介保險，二是鼓勵 會員達到最高… | no |
| `P1-1027` | simple_explanation | answer D 上述(B)及(C); basis: 香港保險業聯會的目標：推廣及提升在本港經營業 務的保險人及再保險人的共同利益； 其存在的目的，一是向香港人推介保險，二是鼓勵 會員達到最高… | no |
| `P1-951` | simple_explanation | answer B 制订征收保费表; basis: 會計及投資部的職能包括：記錄的保存，款項收集 ，付款，投資 會計及投資部的職能包括：記錄的保存，款項收集 ，付款，投資 | no |
| `P1-989` | simple_explanation | answer D 来自现有客户的推荐; basis: 按保險業務分類包括：保險代理人而來，由保險經 紀而來，直接從公 眾而來 按保險業務分類包括：保險代理人而來，由保險經 紀而來，直接從公 眾… | no |
| `P1-995` | simple_explanation | answer D 个人保险; basis: 按學術類別（保險標的或保險的功能）分類包括： 人身保險，財產保險，責任保險，經濟權益保險 按學術類別（保險標的或保險的功能）分類包括： 人… | no |
| `P3-604` | simple_explanation | answer A 索偿处理; basis: (i) 更改保單 (ii) 通訊 (iii) 文件整理 (iv) 保單續保 (i) 更改保單 (ii) 通訊 (iii) 文件整理 (iv… | no |
| `P3-609` | simple_explanation | answer C 处理理赔; basis: 顧客服務又稱保單所有人服務 這包括許多功能 (i) 更改保單 (ii) 通訊 (iii) 文件整理 (iv) 保單續保 顧客服務又稱保單所… | no |
| `P3-627` | simple_explanation | answer C 理赔检讨; basis: 市場行銷 (i) 產品研究：及開發新產品。 (ii) 促銷宣傳：製作有關的材料並切實跟進有關 的物流後勤事務和其他細節 (iii) 廣告：… | no |
| `P3-628` | simple_explanation | answer B 「次标准生命」的定义; basis: 市場行銷 (i) 產品研究：及開發新產品。 (ii) 促銷宣傳：製作有關的材料並切實跟進有關 的物流後勤事務和其他細節 (iii) 廣告：… | no |
| `P3-629` | simple_explanation | answer C 安排验尸工作; basis: 核保部 (i) 風險評估：風險的選擇、評級以及按需要附 加限制條款等技術性問題 (ii) 體檢要求：安排並監督身體檢查及需要的相 關文件 … | no |
| `P3-641` | simple_explanation | answer C 有关代理人的佣金率; basis: 考慮的重點： (i) 應該清楚註明所需的生效日期 (ii) 證實投保人以及受保生命的身份非常重要 (iii) 下一個/前一個生日年齡 (i… | no |
