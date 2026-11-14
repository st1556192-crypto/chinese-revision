export const REVISION_DATA = {
  topics: [
    { id: "study", t: "學習", s: "学习" },
    { id: "character", t: "品格", s: "品格" },
    { id: "nature", t: "自然", s: "自然" },
    { id: "campus", t: "校園", s: "校园" },
    { id: "life", t: "生活", s: "生活" }
  ],
  vocab: [
    { id: "v01", topic: "study", t: "溫習", s: "复习", pinyin: "wan1 zaap6", en: "to revise; to review", exT: "考試前，我每天都溫習筆記。", exS: "考试前，我每天都复习笔记。", exEn: "Before exams, I revise my notes every day." },
    { id: "v02", topic: "study", t: "理解", s: "理解", pinyin: "lei5 gaai2", en: "to understand", exT: "我終於理解這句話的意思。", exS: "我终于理解这句话的意思。", exEn: "I finally understand what this sentence means." },
    { id: "v03", topic: "study", t: "表達", s: "表达", pinyin: "biu2 daat6", en: "to express", exT: "他用例子表達自己的看法。", exS: "他用例子表达自己的看法。", exEn: "He used an example to express his own view." },
    { id: "v04", topic: "study", t: "成績", s: "成绩", pinyin: "sing4 zik1", en: "grades; results", exT: "這次小測的成績比上次好。", exS: "这次小测的成绩比上次好。", exEn: "This quiz score is better than the last one." },
    { id: "v05", topic: "study", t: "習慣", s: "习惯", pinyin: "zaap6 gwaan3", en: "habit", exT: "每天睡前讀書是好習慣。", exS: "每天睡前读书是好习惯。", exEn: "Reading before bed every day is a good habit." },
    { id: "v06", topic: "study", t: "經驗", s: "经验", pinyin: "ging1 jim6", en: "experience", exT: "做實驗讓我得到新的經驗。", exS: "做实验让我得到新的经验。", exEn: "Doing the experiment gave me new experience." },
    { id: "v07", topic: "character", t: "堅持", s: "坚持", pinyin: "gin1 ci4", en: "to persist; to keep going", exT: "遇到難題也要堅持想下去。", exS: "遇到难题也要坚持想下去。", exEn: "Keep thinking even when the problem is hard." },
    { id: "v08", topic: "character", t: "誠實", s: "诚实", pinyin: "sing4 sat6", en: "honest", exT: "誠實地面對錯誤，才改得了。", exS: "诚实地面对错误，才改得了。", exEn: "You can fix a mistake only after facing it honestly." },
    { id: "v09", topic: "character", t: "責任", s: "责任", pinyin: "zaak3 jam6", en: "responsibility", exT: "照顧這一盆植物是我的責任。", exS: "照顾这一盆植物是我的责任。", exEn: "Looking after this plant is my responsibility." },
    { id: "v10", topic: "character", t: "尊重", s: "尊重", pinyin: "zyun1 zung6", en: "to respect", exT: "討論時要尊重不同的意見。", exS: "讨论时要尊重不同的意见。", exEn: "Respect different opinions in a discussion." },
    { id: "v11", topic: "character", t: "勇敢", s: "勇敢", pinyin: "jung5 gam2", en: "brave", exT: "她勇敢地承認自己還不懂。", exS: "她勇敢地承认自己还不懂。", exEn: "She bravely admitted that she still did not understand." },
    { id: "v12", topic: "character", t: "珍惜", s: "珍惜", pinyin: "zan1 sik1", en: "to cherish", exT: "我們應該珍惜和同學一起學習的時間。", exS: "我们应该珍惜和同学一起学习的时间。", exEn: "We should cherish the time we spend studying with classmates." },
    { id: "v13", topic: "nature", t: "環境", s: "环境", pinyin: "waan4 ging2", en: "environment", exT: "乾淨的環境讓人更專心。", exS: "干净的环境让人更专心。", exEn: "A clean environment makes it easier to focus." },
    { id: "v14", topic: "nature", t: "觀察", s: "观察", pinyin: "gun1 caat3", en: "to observe", exT: "請先觀察，再寫下你的發現。", exS: "请先观察，再写下你的发现。", exEn: "Observe first, then write down what you notice." },
    { id: "v15", topic: "nature", t: "保護", s: "保护", pinyin: "bou2 wu6", en: "to protect", exT: "保護校園，就從不亂丟垃圾開始。", exS: "保护校园，就从不乱丢垃圾开始。", exEn: "Protecting the campus starts with not littering." },
    { id: "v16", topic: "nature", t: "節約", s: "节约", pinyin: "zit3 joek3", en: "to save; to use sparingly", exT: "離開教室時記得節約用電。", exS: "离开教室时记得节约用电。", exEn: "Remember to save electricity when you leave the classroom." },
    { id: "v17", topic: "nature", t: "變化", s: "变化", pinyin: "bin3 faa3", en: "change", exT: "記錄植物每天的變化。", exS: "记录植物每天的变化。", exEn: "Record how the plant changes each day." },
    { id: "v18", topic: "nature", t: "季節", s: "季节", pinyin: "gwai3 zit3", en: "season", exT: "這個季節的雨比較多。", exS: "这个季节的雨比较多。", exEn: "It rains more in this season." },
    { id: "v19", topic: "campus", t: "合作", s: "合作", pinyin: "hap6 zok3", en: "to cooperate", exT: "我們合作完成了科學報告。", exS: "我们合作完成了科学报告。", exEn: "We finished the science report by working together." },
    { id: "v20", topic: "campus", t: "實驗", s: "实验", pinyin: "sat6 jim6", en: "experiment", exT: "這次實驗要先寫假設。", exS: "这次实验要先写假设。", exEn: "This experiment starts with writing a hypothesis." },
    { id: "v21", topic: "campus", t: "報告", s: "报告", pinyin: "bou3 gou3", en: "report", exT: "報告要寫清楚步驟和結果。", exS: "报告要写清楚步骤和结果。", exEn: "A report should state the steps and the result clearly." },
    { id: "v22", topic: "campus", t: "討論", s: "讨论", pinyin: "tou2 leon6", en: "to discuss", exT: "小組先討論，再決定做法。", exS: "小组先讨论，再决定做法。", exEn: "The group discusses first, then decides what to do." },
    { id: "v23", topic: "campus", t: "同學", s: "同学", pinyin: "tung4 hok6", en: "classmate", exT: "同學借筆記給我。", exS: "同学借笔记给我。", exEn: "A classmate lent me their notes." },
    { id: "v24", topic: "campus", t: "圖書館", s: "图书馆", pinyin: "tou4 syu1 gun2", en: "library", exT: "我在圖書館溫習了一小時。", exS: "我在图书馆复习了一小时。", exEn: "I revised for an hour in the library." },
    { id: "v25", topic: "life", t: "挑戰", s: "挑战", pinyin: "tiu1 zin3", en: "challenge", exT: "這道題對我是一個挑戰。", exS: "这道题对我是一个挑战。", exEn: "This question is a challenge for me." },
    { id: "v26", topic: "life", t: "機會", s: "机会", pinyin: "gei1 wui6", en: "opportunity; chance", exT: "請抓住提問的機會。", exS: "请抓住提问的机会。", exEn: "Take the chance to ask a question." },
    { id: "v27", topic: "life", t: "溝通", s: "沟通", pinyin: "gau1 tung1", en: "to communicate", exT: "說清楚一點，溝通就更容易。", exS: "说清楚一点，沟通就更容易。", exEn: "Say it a little more clearly, and communication gets easier." },
    { id: "v28", topic: "life", t: "解決", s: "解决", pinyin: "gaai2 kyut3", en: "to solve", exT: "我們終於解決了這個問題。", exS: "我们终于解决了这个问题。", exEn: "We finally solved this problem." },
    { id: "v29", topic: "life", t: "影響", s: "影响", pinyin: "jing2 hoeng2", en: "to affect; influence", exT: "睡眠不足會影響記憶。", exS: "睡眠不足会影响记忆。", exEn: "Too little sleep affects memory." },
    { id: "v30", topic: "life", t: "未來", s: "未来", pinyin: "mei6 loi4", en: "the future", exT: "我對未來的中文課更有信心。", exS: "我对未来的中文课更有信心。", exEn: "I feel more confident about Chinese class from now on." }
  ],
  idiomGroups: {
    "m11": "默書1.1",
    "m12": "默書1.2",
    "m13": "默書1.3",
    "read": "不用默書"
  },
  idioms: [
    {
      "id": "i001",
      "group": "m11",
      "t": "狐假虎威",
      "pinyin": "wu4 gaa2 fu2 wai1",
      "en": "to bully others by flaunting another's power",
      "glossT": "比喻倚仗別人的權勢來嚇唬或欺壓人。"
    },
    {
      "id": "i002",
      "group": "m11",
      "t": "咎由自取",
      "pinyin": "gau3 jau4 zi6 ceoi2",
      "en": "to bring trouble upon oneself",
      "glossT": "指罪過、災禍或懲罰是由自己招來的。"
    },
    {
      "id": "i003",
      "group": "m11",
      "t": "炙手可熱",
      "pinyin": "zek3 sau2 ho2 jit6",
      "en": "extremely influential or popular",
      "glossT": "比喻權勢大，氣焰盛；或比喻名聲很盛，廣受歡迎。"
    },
    {
      "id": "i004",
      "group": "m11",
      "t": "迎刃而解",
      "pinyin": "jing4 jan6 ji4 gaai2",
      "en": "to be solved smoothly once the key point is grasped",
      "glossT": "比喻主要問題解決了，其他有關的問題就很容易解決。"
    },
    {
      "id": "i005",
      "group": "m11",
      "t": "迎頭趕上",
      "pinyin": "jing4 tau4 gon2 soeng5",
      "en": "to catch up by aiming for the front",
      "glossT": "指向着最前面的追趕上去。"
    },
    {
      "id": "i006",
      "group": "m11",
      "t": "夜以繼日",
      "pinyin": "je6 ji5 gai3 jat6",
      "en": "to work day and night",
      "glossT": "指日夜不停地從事某項活動，形容做事十分勤奮、忙碌。"
    },
    {
      "id": "i007",
      "group": "m11",
      "t": "夜長夢多",
      "pinyin": "je6 coeng4 mung6 do1",
      "en": "the longer the delay, the more complications",
      "glossT": "比喻時間拖久了，事情就可能發生不利的變化。"
    },
    {
      "id": "i008",
      "group": "m11",
      "t": "刻不容緩",
      "pinyin": "hak1 bat1 jung4 wun6",
      "en": "allowing not a moment's delay",
      "glossT": "形容事情或形勢緊迫，片刻也不能耽擱。"
    },
    {
      "id": "i009",
      "group": "m11",
      "t": "刻舟求劍",
      "pinyin": "hak1 zau1 kau4 gim3",
      "en": "to cling rigidly to a method that no longer fits",
      "glossT": "比喻做事刻板固執，不知變通。"
    },
    {
      "id": "i010",
      "group": "m11",
      "t": "並駕齊驅",
      "pinyin": "bing6 gaa3 cai4 keoi1",
      "en": "to advance side by side; to be evenly matched",
      "glossT": "比喻齊頭並進，不分先後；或比喻彼此地位、水平或程度等，不分高下。"
    },
    {
      "id": "i011",
      "group": "m11",
      "t": "沽名釣譽",
      "pinyin": "gu1 ming4 diu3 jyu6",
      "en": "to angle for fame and reputation",
      "glossT": "指使用某種手段謀取好的名譽。"
    },
    {
      "id": "i012",
      "group": "m11",
      "t": "沾沾自喜",
      "pinyin": "zim1 zim1 zi6 hei2",
      "en": "to be pleased with oneself",
      "glossT": "形容自以為很好而得意的樣子。"
    },
    {
      "id": "i013",
      "group": "m11",
      "t": "波濤洶湧",
      "pinyin": "bo1 tou4 hung1 jung2",
      "en": "waves surging violently; turbulent",
      "glossT": "形容波浪又大又急，奔騰起伏；或形容起伏不定的樣子。"
    },
    {
      "id": "i014",
      "group": "m11",
      "t": "波瀾壯闊",
      "pinyin": "bo1 laan4 zong3 fut3",
      "en": "vast and powerful in scale",
      "glossT": "形容波濤洶湧，水面遼闊；或比喻聲勢雄壯或規模宏大。"
    },
    {
      "id": "i015",
      "group": "m11",
      "t": "空中樓閣",
      "pinyin": "hung1 zung1 lau4 gok3",
      "en": "a castle in the air; an unrealistic plan",
      "glossT": "比喻虛幻的事物或脫離實際的理論、計劃等。"
    },
    {
      "id": "i016",
      "group": "m11",
      "t": "空穴來風",
      "pinyin": "hung1 jyut6 loi4 fung1",
      "en": "rumours that arise from some opening; groundless talk",
      "glossT": "比喻消息和謠言的傳播不是完全沒有原因或傳言乘隙而入；或比喻傳言沒有根據。"
    },
    {
      "id": "i017",
      "group": "m11",
      "t": "空空如也",
      "pinyin": "hung1 hung1 jyu4 jaa5",
      "en": "completely empty",
      "glossT": "形容一無所有。"
    },
    {
      "id": "i018",
      "group": "m11",
      "t": "空前絕後",
      "pinyin": "hung1 cin4 zyut6 hau6",
      "en": "unprecedented and never to be matched",
      "glossT": "形容不可超越的成就或極不平常的盛況。"
    },
    {
      "id": "i019",
      "group": "m11",
      "t": "孤芳自賞",
      "pinyin": "gu1 fong1 zi6 soeng2",
      "en": "to admire one's own supposed purity",
      "glossT": "比喻自命清高，自我欣賞。"
    },
    {
      "id": "i020",
      "group": "m11",
      "t": "孤苦伶仃",
      "pinyin": "gu1 fu2 ling4 ding1",
      "en": "lonely, helpless, and without support",
      "glossT": "形容孤單困苦，無依無靠。"
    },
    {
      "id": "i021",
      "group": "m11",
      "t": "孤陋寡聞",
      "pinyin": "gu1 lau6 gwaa2 man4",
      "en": "ignorant and ill-informed",
      "glossT": "形容學識淺薄，見聞不廣。"
    },
    {
      "id": "i022",
      "group": "m11",
      "t": "孤掌難鳴",
      "pinyin": "gu1 zoeng2 naan4 ming4",
      "en": "one cannot succeed alone",
      "glossT": "比喻力量單薄，難以成事。"
    },
    {
      "id": "i023",
      "group": "m11",
      "t": "姍姍來遲",
      "pinyin": "saan1 saan1 loi4 ci4",
      "en": "to arrive late in a leisurely way",
      "glossT": "形容慢騰騰地來晚了。"
    },
    {
      "id": "i024",
      "group": "m11",
      "t": "始作俑者",
      "pinyin": "ci2 zok3 jung2 ze2",
      "en": "the originator of a bad practice",
      "glossT": "比喻首先做某件壞事的人或惡劣風氣的創始人。"
    },
    {
      "id": "i025",
      "group": "m11",
      "t": "始料不及",
      "pinyin": "ci2 liu6 bat1 kap6",
      "en": "beyond what was initially expected",
      "glossT": "指事情發展的結果是開始不曾預料到的。"
    },
    {
      "id": "i026",
      "group": "m12",
      "t": "始終如一",
      "pinyin": "ci2 zung1 jyu4 jat1",
      "en": "consistent from beginning to end",
      "glossT": "指從開始到結束都一樣。"
    },
    {
      "id": "i027",
      "group": "m12",
      "t": "附庸風雅",
      "pinyin": "fu6 jung4 fung1 ngaa5",
      "en": "to pose as cultured for show",
      "glossT": "指為裝點門面而有意結交文化界人士或參與文化方面的活動。"
    },
    {
      "id": "i028",
      "group": "m12",
      "t": "春風化雨",
      "pinyin": "ceon1 fung1 faa3 jyu5",
      "en": "nurturing education",
      "glossT": "比喻良好的培養教育。"
    },
    {
      "id": "i029",
      "group": "m12",
      "t": "拭目以待",
      "pinyin": "sik1 muk6 ji5 doi6",
      "en": "to wait expectantly",
      "glossT": "形容急切地期待或等待某件事情的出現。"
    },
    {
      "id": "i030",
      "group": "m12",
      "t": "持之以恆",
      "pinyin": "ci4 zi1 ji5 hang4",
      "en": "to persevere constantly",
      "glossT": "指藉着恆心，長久地堅持下去。"
    },
    {
      "id": "i031",
      "group": "m12",
      "t": "苦口良藥",
      "pinyin": "fu2 hau2 loeng4 joek6",
      "en": "bitter medicine that cures; frank advice that helps",
      "glossT": "形容味苦難吃的才是治病的好藥；或比喻聽起來不舒服，但對人很有好處的勸告或批評。"
    },
    {
      "id": "i032",
      "group": "m12",
      "t": "苦口婆心",
      "pinyin": "fu2 hau2 po4 sam1",
      "en": "to advise earnestly out of goodwill",
      "glossT": "形容出於善意而耐心懇切地規勸。"
    },
    {
      "id": "i033",
      "group": "m12",
      "t": "苦不堪言",
      "pinyin": "fu2 bat1 ham1 jin4",
      "en": "suffering beyond words",
      "glossT": "形容極其痛苦或困苦，已經到了不能用言語來表達的地步。"
    },
    {
      "id": "i034",
      "group": "m12",
      "t": "苦中作樂",
      "pinyin": "fu2 zung1 zok3 lok6",
      "en": "to find joy amid hardship",
      "glossT": "指在困苦之中仍能勉強尋找歡樂。"
    },
    {
      "id": "i035",
      "group": "m12",
      "t": "苦盡甘來",
      "pinyin": "fu2 zeon6 gam1 loi4",
      "en": "after suffering comes sweetness",
      "glossT": "指艱難困苦的日子已過去，美好幸福的日子到來了。"
    },
    {
      "id": "i036",
      "group": "m12",
      "t": "若有所失",
      "pinyin": "joek6 jau5 so2 sat1",
      "en": "to feel as if something is missing",
      "glossT": "形容心情惆悵，心神不定的樣子。"
    },
    {
      "id": "i037",
      "group": "m12",
      "t": "若即若離",
      "pinyin": "joek6 zik1 joek6 lei4",
      "en": "neither close nor distant; hard to pin down",
      "glossT": "形容對人保持一定距離，態度不明確，不親近也不疏遠，令人捉摸不定。"
    },
    {
      "id": "i038",
      "group": "m12",
      "t": "若無其事",
      "pinyin": "joek6 mou4 kei4 si6",
      "en": "as if nothing had happened",
      "glossT": "形容態度沉着鎮靜，不慌不忙或毫不在意的樣子。"
    },
    {
      "id": "i039",
      "group": "m12",
      "t": "赴湯蹈火",
      "pinyin": "fu6 tong1 dou6 fo2",
      "en": "to go through fire and water",
      "glossT": "比喻不避艱險，奮不顧身。"
    },
    {
      "id": "i040",
      "group": "m12",
      "t": "茅塞頓開",
      "pinyin": "maau4 sak1 deon6 hoi1",
      "en": "to suddenly see the light",
      "glossT": "形容心思忽然開竅，立刻明白了某個道理。"
    },
    {
      "id": "i041",
      "group": "m12",
      "t": "拾金不昧",
      "pinyin": "sap6 gam1 bat1 mui6",
      "en": "to return found money instead of keeping it",
      "glossT": "指拾到別人丟失的財物而不藏起來據為己有。"
    },
    {
      "id": "i042",
      "group": "m12",
      "t": "指日可待",
      "pinyin": "zi2 jat6 ho2 doi6",
      "en": "can be expected soon",
      "glossT": "形容事情或願望等不用多久就可以實現。"
    },
    {
      "id": "i043",
      "group": "m12",
      "t": "指桑罵槐",
      "pinyin": "zi2 song1 maa6 waai4",
      "en": "to scold one person while aiming at another",
      "glossT": "比喻表面上罵這個人，實際上罵那個人。"
    },
    {
      "id": "i044",
      "group": "m12",
      "t": "指鹿為馬",
      "pinyin": "zi2 luk6 wai4 maa5",
      "en": "to call a deer a horse; to confuse right and wrong",
      "glossT": "比喻故意顛倒黑白，混淆是非。"
    },
    {
      "id": "i045",
      "group": "m12",
      "t": "指點迷津",
      "pinyin": "zi2 dim2 mai4 zeon1",
      "en": "to point the way out of confusion",
      "glossT": "指針對別人迷惑的地方，提供解決的方向、辦法或途徑。"
    },
    {
      "id": "i046",
      "group": "m12",
      "t": "按兵不動",
      "pinyin": "on3 bing1 bat1 dung6",
      "en": "to hold back and take no action for now",
      "glossT": "指控制住軍隊暫不行動；受任務後不肯行動；或形容暫不採取行動。"
    },
    {
      "id": "i047",
      "group": "m12",
      "t": "按部就班",
      "pinyin": "on3 bou6 zau6 baan1",
      "en": "to follow the proper order",
      "glossT": "指按照一定的條理、次序做事。"
    },
    {
      "id": "i048",
      "group": "m12",
      "t": "按圖索驥",
      "pinyin": "on3 tou4 saak3 kei3",
      "en": "to search by a clue; to follow a method rigidly",
      "glossT": "比喻按照線索去尋找；或比喻機械地按老辦法做事，不知變通。"
    },
    {
      "id": "i049",
      "group": "m12",
      "t": "故步自封",
      "pinyin": "gu3 bou6 zi6 fung1",
      "en": "to stay stuck in old ways",
      "glossT": "比喻安於現狀，不求進取。"
    },
    {
      "id": "i050",
      "group": "m12",
      "t": "胡作非為",
      "pinyin": "wu4 zok3 fei1 wai4",
      "en": "to act recklessly and do wrong",
      "glossT": "指毫無顧忌地任意做壞事。"
    },
    {
      "id": "i051",
      "group": "m13",
      "t": "胡思亂想",
      "pinyin": "wu4 si1 lyun6 soeng2",
      "en": "to let the mind wander unrealistically",
      "glossT": "指不切實際、毫無根據地瞎想；或指漫無邊際地東想西想。"
    },
    {
      "id": "i052",
      "group": "m13",
      "t": "胡說八道",
      "pinyin": "wu4 syut3 baat3 dou6",
      "en": "to talk nonsense",
      "glossT": "指沒有根據或沒有道理地亂說。"
    },
    {
      "id": "i053",
      "group": "m13",
      "t": "相形見絀",
      "pinyin": "soeng1 jing4 gin3 zyut3",
      "en": "to look inferior by comparison",
      "glossT": "指和另一方相比較，顯出不足。"
    },
    {
      "id": "i054",
      "group": "m13",
      "t": "相依為命",
      "pinyin": "soeng1 ji1 wai4 ming6",
      "en": "to depend on each other for survival",
      "glossT": "指互相依靠着共同生活，也指依靠某人或某物生活。"
    },
    {
      "id": "i055",
      "group": "m13",
      "t": "相映成趣",
      "pinyin": "soeng1 jing2 sing4 ceoi3",
      "en": "to set each other off charmingly",
      "glossT": "指相互映襯而顯得更有情趣，很有意思。"
    },
    {
      "id": "i056",
      "group": "m13",
      "t": "相得益彰",
      "pinyin": "soeng1 dak1 jik1 zoeng1",
      "en": "to bring out the best in each other",
      "glossT": "指兩者互相配合協助，雙方的優點和作用更能顯示出來。"
    },
    {
      "id": "i057",
      "group": "m13",
      "t": "相提並論",
      "pinyin": "soeng1 tai4 bing6 leon6",
      "en": "to mention in the same breath",
      "glossT": "指把不同的人或不同的事放在一起談論或同等看待。"
    },
    {
      "id": "i058",
      "group": "m13",
      "t": "相輔相成",
      "pinyin": "soeng1 fu6 soeng1 sing4",
      "en": "to complement each other",
      "glossT": "指兩事物互相配合，互相輔助、補充，互相促成，缺一不可。"
    },
    {
      "id": "i059",
      "group": "m13",
      "t": "相親相愛",
      "pinyin": "soeng1 can1 soeng1 oi3",
      "en": "to love and care for each other deeply",
      "glossT": "形容互相十分親近愛護，感情深厚。"
    },
    {
      "id": "i060",
      "group": "m13",
      "t": "柳暗花明",
      "pinyin": "lau5 am3 faa1 ming4",
      "en": "a bright new turn after a difficult stretch",
      "glossT": "形容綠柳成蔭，繁花明艷的美麗景象；或比喻經過一番曲折以後，出現新的局面。"
    },
    {
      "id": "i061",
      "group": "m13",
      "t": "威風凜凜",
      "pinyin": "wai1 fung1 lam5 lam5",
      "en": "awe-inspiring in manner",
      "glossT": "形容聲勢或氣概使人敬畏。"
    },
    {
      "id": "i062",
      "group": "m13",
      "t": "厚此薄彼",
      "pinyin": "hau5 ci2 bok6 bei2",
      "en": "to favour one side over the other",
      "glossT": "形容對人或事物的不公平態度，給雙方的待遇不同，有所偏袒。"
    },
    {
      "id": "i063",
      "group": "m13",
      "t": "耐人尋味",
      "pinyin": "noi6 jan4 cam4 mei6",
      "en": "thought-provoking; worth pondering",
      "glossT": "指意味深長，值得人仔細體會琢磨。"
    },
    {
      "id": "i064",
      "group": "m13",
      "t": "面不改色",
      "pinyin": "min6 bat1 goi2 sik1",
      "en": "to remain calm without changing colour",
      "glossT": "形容從容鎮靜的樣子。"
    },
    {
      "id": "i065",
      "group": "m13",
      "t": "面目全非",
      "pinyin": "min6 muk6 cyun4 fei1",
      "en": "changed beyond recognition",
      "glossT": "形容人或事物的外貌完全改變。"
    },
    {
      "id": "i066",
      "group": "m13",
      "t": "面面相覷",
      "pinyin": "min6 min6 soeng1 ceoi3",
      "en": "to look at one another in silence",
      "glossT": "形容人們因驚訝、恐懼或無可奈何而互相看着，都不說話。"
    },
    {
      "id": "i067",
      "group": "m13",
      "t": "面紅耳赤",
      "pinyin": "min6 hung4 ji5 cek3",
      "en": "flushed red with effort, shame, or anger",
      "glossT": "形容因過於用力、羞愧、焦急、激動、發怒等而臉色漲紅的樣子。"
    },
    {
      "id": "i068",
      "group": "m13",
      "t": "面無人色",
      "pinyin": "min6 mou4 jan4 sik1",
      "en": "deathly pale from fear or weakness",
      "glossT": "形容恐懼到極點；或形容身體非常虛弱。"
    },
    {
      "id": "i069",
      "group": "m13",
      "t": "南柯一夢",
      "pinyin": "naam4 o1 jat1 mung6",
      "en": "an empty dream; a fleeting illusion",
      "glossT": "形容一場大夢；或比喻一場空歡喜。"
    },
    {
      "id": "i070",
      "group": "m13",
      "t": "南轅北轍",
      "pinyin": "naam4 jyun4 bak1 cit3",
      "en": "to act against one's own goal",
      "glossT": "比喻行動和目的相反。"
    },
    {
      "id": "i071",
      "group": "m13",
      "t": "背信棄義",
      "pinyin": "bui3 seon3 hei3 ji6",
      "en": "to break faith and discard honour",
      "glossT": "指不守信用，不講道義。"
    },
    {
      "id": "i072",
      "group": "m13",
      "t": "背道而馳",
      "pinyin": "bui3 dou6 ji4 ci4",
      "en": "to run in the opposite direction",
      "glossT": "比喻彼此方向不同，目的完全相反；或比喻背離正確的目標，朝相反方向走。"
    },
    {
      "id": "i073",
      "group": "m13",
      "t": "哄堂大笑",
      "pinyin": "hung3 tong4 daai6 siu3",
      "en": "the whole room bursts into laughter",
      "glossT": "形容屋子裏的所有人同時大笑。"
    },
    {
      "id": "i074",
      "group": "m13",
      "t": "星羅棋佈",
      "pinyin": "sing1 lo4 kei4 bou3",
      "en": "scattered everywhere in great numbers",
      "glossT": "形容數量眾多，散佈很廣。"
    },
    {
      "id": "i075",
      "group": "m13",
      "t": "咬牙切齒",
      "pinyin": "ngaau5 ngaa4 cit3 ci2",
      "en": "to grind one's teeth in hatred",
      "glossT": "形容極端痛恨和仇恨的神情。"
    },
    {
      "id": "i076",
      "group": "read",
      "t": "看風使舵",
      "pinyin": "hon3 fung1 sai2 to4",
      "en": "to trim one's sails to the wind",
      "glossT": "比喻看事情的勢頭或看別人的眼色行事。"
    },
    {
      "id": "i077",
      "group": "read",
      "t": "垂涎三尺",
      "pinyin": "seoi4 jim4 saam1 cek3",
      "en": "to drool with greed or envy",
      "glossT": "形容非常嘴饞的樣子；或形容見了別人的東西想要據為己有的貪婪的樣子。"
    },
    {
      "id": "i078",
      "group": "read",
      "t": "垂頭喪氣",
      "pinyin": "seoi4 tau4 song3 hei3",
      "en": "crestfallen; dejected",
      "glossT": "形容因失敗或挫折而情緒低落。"
    },
    {
      "id": "i079",
      "group": "read",
      "t": "重蹈覆轍",
      "pinyin": "cung4 dou6 fuk1 cit3",
      "en": "to repeat a past mistake",
      "glossT": "比喻不吸取教訓，重犯以前的錯誤。"
    },
    {
      "id": "i080",
      "group": "read",
      "t": "促膝談心",
      "pinyin": "cuk1 sat1 taam4 sam1",
      "en": "to talk intimately side by side",
      "glossT": "指坐得很近，親切地談着心裏話。"
    },
    {
      "id": "i081",
      "group": "read",
      "t": "信口雌黃",
      "pinyin": "seon3 hau2 ci1 wong4",
      "en": "to speak irresponsibly without regard for facts",
      "glossT": "比喻不顧事實，隨口亂說。"
    },
    {
      "id": "i082",
      "group": "read",
      "t": "迫不及待",
      "pinyin": "bik1 bat1 gap6 doi6",
      "en": "too impatient to wait",
      "glossT": "急迫得來不及再等待。形容心情十分迫切。"
    },
    {
      "id": "i083",
      "group": "read",
      "t": "迫不得已",
      "pinyin": "bik1 bat1 dak1 ji5",
      "en": "to have no choice but to do something",
      "glossT": "指迫於無奈而不得不這樣做。"
    },
    {
      "id": "i084",
      "group": "read",
      "t": "迫在眉睫",
      "pinyin": "bik1 zoi6 mei4 zit6",
      "en": "extremely urgent; imminent",
      "glossT": "形容事情已到眼前，情況十分緊迫。"
    },
    {
      "id": "i085",
      "group": "read",
      "t": "待人接物",
      "pinyin": "doi6 jan4 zip3 mat6",
      "en": "the way one deals with people",
      "glossT": "形容跟別人交往相處。"
    },
    {
      "id": "i086",
      "group": "read",
      "t": "後生可畏",
      "pinyin": "hau6 sang1 ho2 wai3",
      "en": "the young are to be regarded with respect",
      "glossT": "指年輕人很容易超過前輩，是值得敬畏的。"
    },
    {
      "id": "i087",
      "group": "read",
      "t": "後來居上",
      "pinyin": "hau6 loi4 geoi1 soeng5",
      "en": "the latecomer surpasses the earlier one",
      "glossT": "比喻後起的人或事物超過了先前的人或事物。"
    },
    {
      "id": "i088",
      "group": "read",
      "t": "後起之秀",
      "pinyin": "hau6 hei2 zi1 sau3",
      "en": "an outstanding newcomer",
      "glossT": "指後來出現的或新成長起來的優秀人物。"
    },
    {
      "id": "i089",
      "group": "read",
      "t": "後悔無及",
      "pinyin": "hau6 fui3 mou4 kap6",
      "en": "too late for regret",
      "glossT": "指事後感到懊悔，但已來不及了。"
    },
    {
      "id": "i090",
      "group": "read",
      "t": "後患無窮",
      "pinyin": "hau6 waan6 mou4 kung4",
      "en": "endless future troubles",
      "glossT": "指今後的禍患是沒有窮盡的。"
    },
    {
      "id": "i091",
      "group": "read",
      "t": "後繼無人",
      "pinyin": "hau6 gai3 mou4 jan4",
      "en": "no successor to carry on",
      "glossT": "沒有後人繼承前人的事業。"
    },
    {
      "id": "i092",
      "group": "read",
      "t": "後顧之憂",
      "pinyin": "hau6 gu3 zi1 jau1",
      "en": "worries from behind or about the future",
      "glossT": "指來自後方、家裡或未來的憂慮。"
    },
    {
      "id": "i093",
      "group": "read",
      "t": "卻之不恭",
      "pinyin": "koek3 zi1 bat1 gung1",
      "en": "it would be rude to refuse",
      "glossT": "指拒絕接受別人的贈予或邀請等，就顯得不恭敬。"
    },
    {
      "id": "i094",
      "group": "read",
      "t": "風吹草動",
      "pinyin": "fung1 ceoi1 cou2 dung6",
      "en": "a slight disturbance or change",
      "glossT": "比喻輕微的變故或動蕩。"
    },
    {
      "id": "i095",
      "group": "read",
      "t": "風花雪月",
      "pinyin": "fung1 faa1 syut3 jyut6",
      "en": "flowery empty writing; romantic affairs",
      "glossT": "比喻辭藻華麗、內容空泛的詩文；或比喻男女愛情方面的事。"
    },
    {
      "id": "i096",
      "group": "read",
      "t": "風和日麗",
      "pinyin": "fung1 wo4 jat6 lai6",
      "en": "fine and sunny weather",
      "glossT": "形容天氣晴朗暖和。"
    },
    {
      "id": "i097",
      "group": "read",
      "t": "風馳電掣",
      "pinyin": "fung1 ci4 din6 zit3",
      "en": "swift as wind and lightning",
      "glossT": "形容非常迅速，一閃而過。"
    },
    {
      "id": "i098",
      "group": "read",
      "t": "風塵僕僕",
      "pinyin": "fung1 can4 buk6 buk6",
      "en": "travel-worn and weary",
      "glossT": "形容旅途奔波，忙碌勞累。"
    },
    {
      "id": "i099",
      "group": "read",
      "t": "風聲鶴唳",
      "pinyin": "fung1 sing1 hok6 leoi6",
      "en": "panic at every slight sound",
      "glossT": "形容疑慮恐懼或自相驚擾。"
    },
    {
      "id": "i100",
      "group": "read",
      "t": "負荊請罪",
      "pinyin": "fu6 ging1 cing2 zeoi6",
      "en": "to apologise humbly and ask for punishment",
      "glossT": "表示主動向某人認錯，賠禮道歉，願受責備。"
    }
  ],
  grammar: [
    {
      id: "g01", t: "不但……而且……", s: "不但……而且……", en: "not only … but also …",
      explainT: "連接同一方向的兩件事，後一句比前一句更進一層。",
      explainS: "连接同一方向的两件事，后一句比前一句更进一层。",
      trapT: "不要寫成「不但……但是……」。",
      trapS: "不要写成「不但……但是……」。",
      examples: [
        { t: "這道題不但難，而且很花時間。", s: "这道题不但难，而且很花时间。" },
        { t: "她不但會設計實驗，而且會解釋結果。", s: "她不但会设计实验，而且会解释结果。" }
      ],
      promptT: "他不但完成了報告，______ 主動幫助組員。",
      promptS: "他不但完成了报告，______ 主动帮助组员。",
      options: [
        { t: "而且", s: "而且", ok: true },
        { t: "但是", s: "但是", ok: false },
        { t: "否則", s: "否则", ok: false }
      ],
      whyT: "「不但」要配「而且」，表示更進一步。",
      whyS: "「不但」要配「而且」，表示更进一步。"
    },
    {
      id: "g02", t: "雖然……但是……", s: "虽然……但是……", en: "although … , … still …",
      explainT: "前一句承認一件事實，後一句轉出不同的結果。中文裡「雖然」和「但是」可以同時出現。",
      explainS: "前一句承认一件事实，后一句转出不同的结果。中文里「虽然」和「但是」可以同时出现。",
      trapT: "這和英文 although 不能再加 but 不同。中文可以兩個都用。",
      trapS: "这和英文 although 不能再加 but 不同。中文可以两个都用。",
      examples: [
        { t: "雖然今天下雨，但是比賽照常舉行。", s: "虽然今天下雨，但是比赛照常举行。" },
        { t: "雖然這題很難，但是他仍然做完了。", s: "虽然这题很难，但是他仍然做完了。" }
      ],
      promptT: "哪一句使用「雖然……但是……」是正確的？",
      promptS: "哪一句使用「虽然……但是……」是正确的？",
      options: [
        { t: "雖然這題很難，但是他仍然做完了。", s: "虽然这题很难，但是他仍然做完了。", ok: true },
        { t: "雖然這題很難，但是他所以做完了。", s: "虽然这题很难，但是他所以做完了。", ok: false },
        { t: "雖然這題很難，他因為仍然做完了。", s: "虽然这题很难，他因为仍然做完了。", ok: false }
      ],
      whyT: "轉折用「但是」就可以。不要再混進「所以」或「因為」。",
      whyS: "转折用「但是」就可以。不要再混进「所以」或「因为」。"
    },
    {
      id: "g03", t: "因為……所以……", s: "因为……所以……", en: "because … , therefore …",
      explainT: "前一句說原因，後一句說結果。",
      explainS: "前一句说原因，后一句说结果。",
      trapT: "「因為」不配「但是」。",
      trapS: "「因为」不配「但是」。",
      examples: [
        { t: "因為他每天溫習，所以成績進步了。", s: "因为他每天复习，所以成绩进步了。" },
        { t: "因為睡得太晚，所以早上起不來。", s: "因为睡得太晚，所以早上起不来。" }
      ],
      promptT: "哪一句的因果關係是正確的？",
      promptS: "哪一句的因果关系是正确的？",
      options: [
        { t: "因為睡得太晚，所以早上起不來。", s: "因为睡得太晚，所以早上起不来。", ok: true },
        { t: "因為睡得太晚，但是早上起不來。", s: "因为睡得太晚，但是早上起不来。", ok: false },
        { t: "所以睡得太晚，因為早上起不來。", s: "所以睡得太晚，因为早上起不来。", ok: false }
      ],
      whyT: "原因放在「因為」後面，結果放在「所以」後面。",
      whyS: "原因放在「因为」后面，结果放在「所以」后面。"
    },
    {
      id: "g04", t: "把字句", s: "把字句", en: "the 把 construction",
      explainT: "用來說明誰怎樣處置某樣東西。格式：誰 + 把 + 東西 + 動詞 + 結果。動詞後面通常要有「完」「開」「好」這類成分。",
      explainS: "用来说明谁怎样处置某样东西。格式：谁 + 把 + 东西 + 动词 + 结果。动词后面通常要有「完」「开」「好」这类成分。",
      trapT: "不要只寫一個光桿動詞，例如「我把窗戶開」。",
      trapS: "不要只写一个光杆动词，例如「我把窗户开」。",
      examples: [
        { t: "我把窗戶打開了。", s: "我把窗户打开了。" },
        { t: "她把實驗結果寫進報告裡。", s: "她把实验结果写进报告里。" }
      ],
      promptT: "哪一句的「把」字句是對的？",
      promptS: "哪一句的「把」字句是对的？",
      options: [
        { t: "我把窗戶打開了。", s: "我把窗户打开了。", ok: true },
        { t: "我把窗戶開。", s: "我把窗户开。", ok: false },
        { t: "我把打開了窗戶。", s: "我把打开了窗户。", ok: false }
      ],
      whyT: "「把」後面先說被處置的東西，動詞後面要帶結果，例如「打開了」。",
      whyS: "「把」后面先说被处置的东西，动词后面要带结果，例如「打开了」。"
    },
    {
      id: "g05", t: "被字句", s: "被字句", en: "the passive 被 construction",
      explainT: "強調事物被誰怎樣了。格式：事物 + 被 + 誰 + 動詞 + 結果。",
      explainS: "强调事物被谁怎样了。格式：事物 + 被 + 谁 + 动词 + 结果。",
      trapT: "不要把施事和受事說反，也不要和「把」疊在同一個動作上。",
      trapS: "不要把施事和受事说反，也不要和「把」叠在同一个动作上。",
      examples: [
        { t: "蛋糕被弟弟吃完了。", s: "蛋糕被弟弟吃完了。" },
        { t: "筆記被風吹走了。", s: "笔记被风吹走了。" }
      ],
      promptT: "哪一句的「被」字句是對的？",
      promptS: "哪一句的「被」字句是对的？",
      options: [
        { t: "筆記被風吹走了。", s: "笔记被风吹走了。", ok: true },
        { t: "風被筆記吹走了。", s: "风被笔记吹走了。", ok: false },
        { t: "筆記把風被吹走了。", s: "笔记把风被吹走了。", ok: false }
      ],
      whyT: "被吹走的是筆記，風才是施事。",
      whyS: "被吹走的是笔记，风才是施事。"
    },
    {
      id: "g06", t: "越來越……", s: "越来越……", en: "more and more …",
      explainT: "「越來越」後面接形容詞，表示程度隨時間加深。",
      explainS: "「越来越」后面接形容词，表示程度随时间加深。",
      trapT: "不要在前面再加「很」，也不要把兩種相反的意思放在一起。",
      trapS: "不要在前面再加「很」，也不要把两种相反的意思放在一起。",
      examples: [
        { t: "天氣越來越冷。", s: "天气越来越冷。" },
        { t: "他的筆記越來越整齊。", s: "他的笔记越来越整齐。" }
      ],
      promptT: "哪一句使用「越來越」是正確的？",
      promptS: "哪一句使用「越来越」是正确的？",
      options: [
        { t: "他的字越來越整齊。", s: "他的字越来越整齐。", ok: true },
        { t: "他的字很越來越整齊。", s: "他的字很越来越整齐。", ok: false },
        { t: "他的字越來越整齊得很亂。", s: "他的字越来越整齐得很乱。", ok: false }
      ],
      whyT: "「越來越」直接接形容詞「整齊」，前面不用「很」。",
      whyS: "「越来越」直接接形容词「整齐」，前面不用「很」。"
    }
  ],
  fixes: [
    {
      id: "f01",
      faultT: "他不但聰明，但是也很努力。",
      faultS: "他不但聪明，但是也很努力。",
      whyT: "「不但」要配「而且」，不能配「但是」。",
      whyS: "「不但」要配「而且」，不能配「但是」。",
      options: [
        { t: "他不但聰明，而且也很努力。", s: "他不但聪明，而且也很努力。", ok: true },
        { t: "他不但聰明，但是也很努力。", s: "他不但聪明，但是也很努力。", ok: false },
        { t: "他因為聰明，而且也很努力。", s: "他因为聪明，而且也很努力。", ok: false }
      ]
    },
    {
      id: "f02",
      faultT: "因為天氣不好，但是學校取消了旅行。",
      faultS: "因为天气不好，但是学校取消了旅行。",
      whyT: "「因為」要配「所以」，不能配「但是」。",
      whyS: "「因为」要配「所以」，不能配「但是」。",
      options: [
        { t: "因為天氣不好，所以學校取消了旅行。", s: "因为天气不好，所以学校取消了旅行。", ok: true },
        { t: "雖然天氣不好，所以學校取消了旅行。", s: "虽然天气不好，所以学校取消了旅行。", ok: false },
        { t: "因為天氣不好，但是學校取消了旅行。", s: "因为天气不好，但是学校取消了旅行。", ok: false }
      ]
    },
    {
      id: "f03",
      faultT: "我把功課做。",
      faultS: "我把功课做。",
      whyT: "「把」字句的動詞後面要有結果，不能只有一個光桿動詞。",
      whyS: "「把」字句的动词后面要有结果，不能只有一个光杆动词。",
      options: [
        { t: "我把功課做完了。", s: "我把功课做完了。", ok: true },
        { t: "我把做完了功課。", s: "我把做完了功课。", ok: false },
        { t: "我被功課做完了。", s: "我被功课做完了。", ok: false }
      ]
    },
    {
      id: "f04",
      faultT: "通過這次實驗，使我們明白了堅持的重要。",
      faultS: "通过这次实验，使我们明白了坚持的重要。",
      whyT: "「通過……使……」讓句子缺少主語。刪去「使」，主語就是「我們」。",
      whyS: "「通过……使……」让句子缺少主语。删去「使」，主语就是「我们」。",
      options: [
        { t: "通過這次實驗，我們明白了堅持的重要。", s: "通过这次实验，我们明白了坚持的重要。", ok: true },
        { t: "通過這次實驗，使我們明白了堅持的重要。", s: "通过这次实验，使我们明白了坚持的重要。", ok: false },
        { t: "通過這次實驗，使明白了我們堅持的重要。", s: "通过这次实验，使明白了我们坚持的重要。", ok: false }
      ]
    },
    {
      id: "f05",
      faultT: "小華的成績比我比較好。",
      faultS: "小华的成绩比我比较好。",
      whyT: "「比」和「比較」意思重複，保留一個即可。",
      whyS: "「比」和「比较」意思重复，保留一个即可。",
      options: [
        { t: "小華的成績比我好。", s: "小华的成绩比我好。", ok: true },
        { t: "小華的成績比我比較好。", s: "小华的成绩比我比较好。", ok: false },
        { t: "小華的成績我比比較好。", s: "小华的成绩我比比较好。", ok: false }
      ]
    },
    {
      id: "f06",
      faultT: "他大概也許明天會來。",
      faultS: "他大概也许明天会来。",
      whyT: "「大概」和「也許」都表示不肯定，同時使用造成重複。",
      whyS: "「大概」和「也许」都表示不肯定，同时使用造成重复。",
      options: [
        { t: "他大概明天會來。", s: "他大概明天会来。", ok: true },
        { t: "他大概也許明天會來。", s: "他大概也许明天会来。", ok: false },
        { t: "他大概也許明天一定會來。", s: "他大概也许明天一定会来。", ok: false }
      ]
    },
    {
      id: "f07",
      faultT: "小明把水杯被打破了。",
      faultS: "小明把水杯被打破了。",
      whyT: "同一個動作不要又用「把」、又用「被」。",
      whyS: "同一个动作不要又用「把」、又用「被」。",
      options: [
        { t: "小明把水杯打破了。", s: "小明把水杯打破了。", ok: true },
        { t: "小明把水杯被打破了。", s: "小明把水杯被打破了。", ok: false },
        { t: "小明被水杯把打破了。", s: "小明被水杯把打破了。", ok: false }
      ]
    },
    {
      id: "f08",
      faultT: "是否認真溫習，是考得好的關鍵。",
      faultS: "是否认真复习，是考得好的关键。",
      whyT: "「是否」包含正反兩面，後面卻只說了一面的結果，兩面不相配。",
      whyS: "「是否」包含正反两面，后面却只说了一面的结果，两面不相配。",
      options: [
        { t: "認真溫習，是考得好的關鍵。", s: "认真复习，是考得好的关键。", ok: true },
        { t: "是否認真溫習，是考得好的關鍵。", s: "是否认真复习，是考得好的关键。", ok: false },
        { t: "是否認真溫習，是考得不好的關鍵。", s: "是否认真复习，是考得不好的关键。", ok: false }
      ]
    }
  ],
  readings: [
    {
      id: "r01",
      t: "天台菜園裡的堅持",
      s: "天台菜园里的坚持",
      bodyT: [
        "上學期，中二班在天台種了一小片菜。起初大家都覺得很新鮮，每天爭着澆水。兩個星期後，新鮮感過去了，菜葉開始發黃，有人說：「反正又不是考試，不管了。」",
        "班長阿玲沒有放棄。她把同學分成三組，一組澆水，一組除蟲，一組記錄天氣和菜的變化。她說：「我們做科學報告，也是在學習負責。」",
        "期末時，菜田綠了。同學們把菜煮成湯，一起喝。阿玲在報告裡寫道：「堅持看起來很慢，但其實每天都在發生改變。」"
      ],
      bodyS: [
        "上学期，中二班在天台种了一小片菜。起初大家都觉得很新鲜，每天争着浇水。两个星期后，新鲜感过去了，菜叶开始发黄，有人说：「反正又不是考试，不管了。」",
        "班长阿玲没有放弃。她把同学分成三组，一组浇水，一组除虫，一组记录天气和菜的变化。她说：「我们做科学报告，也是在学习负责。」",
        "期末时，菜田绿了。同学们把菜煮成汤，一起喝。阿玲在报告里写道：「坚持看起来很慢，但其实每天都在发生改变。」"
      ],
      questions: [
        {
          t: "同學後來不想理會菜田，主要是因為甚麼？",
          s: "同学后来不想理会菜田，主要是因为什么？",
          options: [
            { t: "老師不許他們澆水", s: "老师不许他们浇水" },
            { t: "新鮮感過去了", s: "新鲜感过去了" },
            { t: "天台沒有水", s: "天台没有水" },
            { t: "菜已經全部死了", s: "菜已经全部死了" }
          ],
          answer: 1,
          whyT: "文中說新鮮感過去了，有人覺得不是考試就不管。",
          whyS: "文中说新鲜感过去了，有人觉得不是考试就不管。"
        },
        {
          t: "阿玲把同學分組，是為了甚麼？",
          s: "阿玲把同学分组，是为了什么？",
          options: [
            { t: "讓每個人都有責任", s: "让每个人都有责任" },
            { t: "懲罰不認真的人", s: "惩罚不认真的人" },
            { t: "取消科學報告", s: "取消科学报告" },
            { t: "把菜田搬回家", s: "把菜田搬回家" }
          ],
          answer: 0,
          whyT: "她安排澆水、除蟲和記錄，並說這也是在學習負責。",
          whyS: "她安排浇水、除虫和记录，并说这也是在学习负责。"
        },
        {
          t: "最適合做這篇文章標題的是哪一項？",
          s: "最适合做这篇文章标题的是哪一项？",
          options: [
            { t: "一次失敗的實驗", s: "一次失败的实验" },
            { t: "天台菜園裡的堅持", s: "天台菜园里的坚持" },
            { t: "如何煮菜湯", s: "如何煮菜汤" },
            { t: "中二班的旅行", s: "中二班的旅行" }
          ],
          answer: 1,
          whyT: "文章的轉折是阿玲沒有放棄，最後寫的也是堅持帶來改變。",
          whyS: "文章的转折是阿玲没有放弃，最后写的也是坚持带来改变。"
        }
      ]
    },
    {
      id: "r02",
      t: "不懂，就先承認不懂",
      s: "不懂，就先承认不懂",
      bodyT: [
        "圖書館的窗邊很安靜。子健面前攤着一篇古文，他讀了三遍，還是不明白「掩耳盜鈴」在說甚麼。他把書合上，想去打球。",
        "同桌可兒問他：「你是不懂，還是不想懂？」子健老實說不懂。可兒沒有直接告訴他答案，只說：「有人偷鈴，卻捂住自己的耳朵，以為別人也就聽不見。你覺得他騙到了誰？」",
        "子健笑了：「他只騙到自己。」可兒點頭：「溫習也一樣。把不懂的地方蓋住，不會變成懂。」",
        "那天放學前，子健把成語抄在筆記上，又寫了一句自己的話：不懂，就先承認不懂。"
      ],
      bodyS: [
        "图书馆的窗边很安静。子健面前摊着一篇古文，他读了三遍，还是不明白「掩耳盗铃」在说什么。他把书合上，想去打球。",
        "同桌可儿问他：「你是不懂，还是不想懂？」子健老实说不懂。可儿没有直接告诉他答案，只说：「有人偷铃，却捂住自己的耳朵，以为别人也就听不见。你觉得他骗到了谁？」",
        "子健笑了：「他只骗到自己。」可儿点头：「复习也一样。把不懂的地方盖住，不会变成懂。」",
        "那天放学前，子健把成语抄在笔记上，又写了一句自己的话：不懂，就先承认不懂。"
      ],
      questions: [
        {
          t: "子健起初想離開，是因為甚麼？",
          s: "子健起初想离开，是因为什么？",
          options: [
            { t: "他已經完全明白課文", s: "他已经完全明白课文" },
            { t: "古文難懂，他想放棄", s: "古文难懂，他想放弃" },
            { t: "可兒叫他去打球", s: "可儿叫他去打球" },
            { t: "圖書館關門了", s: "图书馆关门了" }
          ],
          answer: 1,
          whyT: "他讀了三遍仍不明白，於是合上書想去打球。",
          whyS: "他读了三遍仍不明白，于是合上书想去打球。"
        },
        {
          t: "「掩耳盜鈴」在文中用來說明甚麼？",
          s: "「掩耳盗铃」在文中用来说明什么？",
          options: [
            { t: "偷東西一定會成功", s: "偷东西一定会成功" },
            { t: "逃避不懂的地方，只是騙自己", s: "逃避不懂的地方，只是骗自己" },
            { t: "鈴聲太大，要捂住耳朵", s: "铃声太大，要捂住耳朵" },
            { t: "打球比溫習重要", s: "打球比复习重要" }
          ],
          answer: 1,
          whyT: "可兒用這個成語說明：把不懂的地方蓋住，不會變成懂。",
          whyS: "可儿用这个成语说明：把不懂的地方盖住，不会变成懂。"
        },
        {
          t: "子健最後的改變是甚麼？",
          s: "子健最后的改变是什么？",
          options: [
            { t: "把書扔掉", s: "把书扔掉" },
            { t: "承認不懂，並把所學記下來", s: "承认不懂，并把所学记下来" },
            { t: "請可兒替他做筆記", s: "请可儿替他做笔记" },
            { t: "再也不去圖書館", s: "再也不去图书馆" }
          ],
          answer: 1,
          whyT: "放學前他把成語抄在筆記上，並寫下「不懂，就先承認不懂」。",
          whyS: "放学前他把成语抄在笔记上，并写下「不懂，就先承认不懂」。"
        }
      ]
    }
  ],
  culture: [
    {
      id: "c01",
      t: "岳飛",
      pinyin: "",
      tipT: "南宋",
      glossT: "南宋 · 岳飛、滿江紅",
      detailT: "岳飛是南宋時期著名的愛國戰將，他的《滿江紅》一詞表現了其精忠報國之志，為後人廣為傳誦。",
      askT: "《滿江紅》的作者是誰？",
      options: [
        { t: "岳飛", ok: true },
        { t: "陸游", ok: false },
        { t: "文天祥", ok: false },
      ],
      whyT: "重點：岳飛 / 滿江紅。岳飛是南宋時期著名的愛國戰將，他的《滿江紅》一詞表現了其精忠報國之志，為後人廣為傳誦。"
    },
    {
      id: "c02",
      t: "陸游",
      pinyin: "",
      tipT: "南宋",
      glossT: "南宋 · 陸游、示兒",
      detailT: "陸游，號放翁，愛國詩人、詞人。其詩作《示兒》「死去元知萬事空，但悲不見九州同，王師北定中原日，家祭勿忘告乃翁」為千古絕唱。",
      askT: "陸游《示兒》主要表達甚麼情懷？",
      options: [
        { t: "詠歎邊塞風光", ok: false },
        { t: "愛國、盼望收復中原", ok: true },
        { t: "歸隱田園", ok: false },
      ],
      whyT: "重點：陸游 / 示兒。陸游，號放翁，愛國詩人、詞人。其詩作《示兒》「死去元知萬事空，但悲不見九州同，王師北定中原日，家祭勿忘告乃翁」為千古絕唱。"
    },
    {
      id: "c03",
      t: "文天祥",
      pinyin: "",
      tipT: "南宋",
      glossT: "南宋 · 文天祥、宋末三傑",
      detailT: "文天祥，南宋末年著名政治家、文學家、愛國詩人，與陸秀夫、張世傑並稱為「宋末三傑」。文天祥《過零丁洋》中的詩句「人生自古誰無死，留取丹心照汗青」，表達了詩人以死報國的決心。",
      askT: "文天祥與陸秀夫、張世傑並稱為甚麼？",
      options: [
        { t: "唐宋八大家", ok: false },
        { t: "宋末三傑", ok: true },
        { t: "元曲四大家", ok: false },
      ],
      whyT: "重點：文天祥 / 宋末三傑。文天祥，南宋末年著名政治家、文學家、愛國詩人，與陸秀夫、張世傑並稱為「宋末三傑」。文天祥《過零丁洋》中的詩句「人生自古誰無死，留取丹心照汗青」，表達了詩人以死報國的決心。"
    },
    {
      id: "c04",
      t: "元曲",
      pinyin: "",
      tipT: "元代",
      glossT: "元代文學常識：元曲",
      detailT: "元曲是元雜劇及散曲的總稱，是元代文學的代表。",
      askT: "元曲是甚麼的總稱？",
      options: [
        { t: "唐詩與宋詞", ok: false },
        { t: "明清傳奇", ok: false },
        { t: "元雜劇及散曲", ok: true },
      ],
      whyT: "重點：元曲。元曲是元雜劇及散曲的總稱，是元代文學的代表。"
    },
    {
      id: "c05",
      t: "元曲四大家",
      pinyin: "",
      tipT: "元代",
      glossT: "元代 · 關漢卿、馬致遠、鄭光祖、白樸",
      detailT: "元曲四大家為關漢卿、馬致遠、鄭光祖、白樸。",
      askT: "元曲四大家之首是誰？",
      options: [
        { t: "馬致遠", ok: false },
        { t: "王實甫", ok: false },
        { t: "關漢卿", ok: true },
      ],
      whyT: "重點：關漢卿（四大家）。元曲四大家為關漢卿、馬致遠、鄭光祖、白樸。"
    },
    {
      id: "c06",
      t: "竇娥冤",
      pinyin: "",
      tipT: "元代",
      glossT: "元代 · 關漢卿、竇娥冤",
      detailT: "關漢卿是元曲四大家之首，著有代表作《竇娥冤》、《救風塵》、《望江亭》、《拜月亭》。",
      askT: "關漢卿的代表作是哪一部？",
      options: [
        { t: "《竇娥冤》", ok: true },
        { t: "《西廂記》", ok: false },
        { t: "《琵琶記》", ok: false },
      ],
      whyT: "重點：關漢卿 / 竇娥冤。關漢卿是元曲四大家之首，著有代表作《竇娥冤》、《救風塵》、《望江亭》、《拜月亭》。"
    },
    {
      id: "c07",
      t: "西廂記",
      pinyin: "",
      tipT: "元代",
      glossT: "元代文學常識：西廂記",
      detailT: "元代著名雜劇家王實甫創作的《西廂記》，講述的是貧寒書生張生與出身名門望族的崔鶯鶯之間的愛情故事，表達了作者批判封建社會制度的進步思想，以及「有情人終成眷屬」的美好祝願。",
      askT: "《西廂記》的作者是誰？",
      options: [
        { t: "高明", ok: false },
        { t: "王實甫", ok: true },
        { t: "關漢卿", ok: false },
      ],
      whyT: "重點：西廂記。元代著名雜劇家王實甫創作的《西廂記》，講述的是貧寒書生張生與出身名門望族的崔鶯鶯之間的愛情故事，表達了作者批判封建社會制度的進步思想，以及「有情人終成眷屬」的美好祝願。"
    },
    {
      id: "c08",
      t: "琵琶記",
      pinyin: "",
      tipT: "元末",
      glossT: "元末文學常識：琵琶記",
      detailT: "《琵琶記》是元末戲曲作家高明所作，敘寫了東漢書生蔡伯喈與趙五娘悲歡離合的愛情故事，是元末南戲中影響較大、成就較高的作品。",
      askT: "《琵琶記》是誰的作品？",
      options: [
        { t: "孔尚任", ok: false },
        { t: "高明", ok: true },
        { t: "湯顯祖", ok: false },
      ],
      whyT: "重點：琵琶記。《琵琶記》是元末戲曲作家高明所作，敘寫了東漢書生蔡伯喈與趙五娘悲歡離合的愛情故事，是元末南戲中影響較大、成就較高的作品。"
    },
    {
      id: "c09",
      t: "四大名著",
      pinyin: "",
      tipT: "明清",
      glossT: "明清文學常識：四大名著",
      detailT: "中國古典小說四大名著，為《三國演義》、《水滸傳》、《西遊記》和《紅樓夢》。",
      askT: "中國古典小說四大名著不包括哪一部？",
      options: [
        { t: "《水滸傳》", ok: false },
        { t: "《紅樓夢》", ok: false },
        { t: "《金瓶梅》", ok: true },
      ],
      whyT: "重點：四大名著。中國古典小說四大名著，為《三國演義》、《水滸傳》、《西遊記》和《紅樓夢》。"
    },
    {
      id: "c10",
      t: "三國演義",
      pinyin: "",
      tipT: "元末明初",
      glossT: "元末明初 · 三國演義、羅貫中",
      detailT: "《三國演義》，作者羅貫中，書中以東漢末年到西晉初年之間的三國歷史為背景，塑造了劉備、曹操、孫權、諸葛亮、關羽等人們喜聞樂道的英雄人物。",
      askT: "《三國演義》的作者是誰？",
      options: [
        { t: "施耐庵", ok: false },
        { t: "吳承恩", ok: false },
        { t: "羅貫中", ok: true },
      ],
      whyT: "重點：三國演義 / 羅貫中。《三國演義》，作者羅貫中，書中以東漢末年到西晉初年之間的三國歷史為背景，塑造了劉備、曹操、孫權、諸葛亮、關羽等人們喜聞樂道的英雄人物。"
    },
    {
      id: "c11",
      t: "水滸傳",
      pinyin: "",
      tipT: "元末明初",
      glossT: "元末明初 · 水滸傳、施耐庵",
      detailT: "《水滸傳》，作者施耐庵，這是一部撰寫農民起義的現實主義巨著，塑造了魯智深、李逵、武松等 108 個家喻戶曉的梁山好漢形象。",
      askT: "《水滸傳》的作者是誰？",
      options: [
        { t: "施耐庵", ok: true },
        { t: "羅貫中", ok: false },
        { t: "曹雪芹", ok: false },
      ],
      whyT: "重點：水滸傳 / 施耐庵。《水滸傳》，作者施耐庵，這是一部撰寫農民起義的現實主義巨著，塑造了魯智深、李逵、武松等 108 個家喻戶曉的梁山好漢形象。"
    },
    {
      id: "c12",
      t: "西遊記",
      pinyin: "",
      tipT: "明代",
      glossT: "明代 · 西遊記、吳承恩",
      detailT: "《西遊記》，作者吳承恩，書中寫了唐僧、孫悟空、豬八戒、沙僧師徒四人不畏艱險、歷盡磨難、經歷九九八十一難取得真經的故事。",
      askT: "《西遊記》的作者是誰？",
      options: [
        { t: "蒲松齡", ok: false },
        { t: "吳承恩", ok: true },
        { t: "吳敬梓", ok: false },
      ],
      whyT: "重點：西遊記 / 吳承恩。《西遊記》，作者吳承恩，書中寫了唐僧、孫悟空、豬八戒、沙僧師徒四人不畏艱險、歷盡磨難、經歷九九八十一難取得真經的故事。"
    },
    {
      id: "c13",
      t: "紅樓夢",
      pinyin: "",
      tipT: "清代",
      glossT: "清代 · 紅樓夢、曹雪芹",
      detailT: "《紅樓夢》，作者曹雪芹，書中以賈、王、史、薛四大家族的興衰為背景，描繪了封建家族的衰落過程，是中國文學史上史詩性巨著。",
      askT: "《紅樓夢》的作者是誰？",
      options: [
        { t: "蘭陵笑笑生", ok: false },
        { t: "曹雪芹", ok: true },
        { t: "吳承恩", ok: false },
      ],
      whyT: "重點：紅樓夢 / 曹雪芹。《紅樓夢》，作者曹雪芹，書中以賈、王、史、薛四大家族的興衰為背景，描繪了封建家族的衰落過程，是中國文學史上史詩性巨著。"
    },
    {
      id: "c14",
      t: "封神演義",
      pinyin: "",
      tipT: "明代",
      glossT: "明代文學常識：封神演義",
      detailT: "《封神演義》（又稱《封神榜》），是一部著名的神魔小說，以武王伐紂為歷史背景，作品奇幻色彩濃厚，塑造了許多鮮明的角色，如姜子牙、哪吒、楊戩等。",
      askT: "《封神演義》又稱甚麼？",
      options: [
        { t: "《封神記》", ok: false },
        { t: "《封神傳》", ok: false },
        { t: "《封神榜》", ok: true },
      ],
      whyT: "重點：封神演義。《封神演義》（又稱《封神榜》），是一部著名的神魔小說，以武王伐紂為歷史背景，作品奇幻色彩濃厚，塑造了許多鮮明的角色，如姜子牙、哪吒、楊戩等。"
    },
    {
      id: "c15",
      t: "金瓶梅",
      pinyin: "",
      tipT: "明代",
      glossT: "明代文學常識：金瓶梅",
      detailT: "明代蘭陵笑笑生所創作的《金瓶梅》是一部長篇白話小說，故事以宋代為背景，實際上反映了明中葉時期的社會狀況。",
      askT: "《金瓶梅》的作者署名是？",
      options: [
        { t: "曹雪芹", ok: false },
        { t: "吳敬梓", ok: false },
        { t: "蘭陵笑笑生", ok: true },
      ],
      whyT: "重點：金瓶梅。明代蘭陵笑笑生所創作的《金瓶梅》是一部長篇白話小說，故事以宋代為背景，實際上反映了明中葉時期的社會狀況。"
    },
    {
      id: "c16",
      t: "牡丹亭",
      pinyin: "",
      tipT: "明代",
      glossT: "明代 · 牡丹亭、湯顯祖",
      detailT: "《牡丹亭》（又名《杜麗娘慕色還魂記》），是明代戲曲家湯顯祖的代表作，講述了書生柳夢梅與杜麗娘的生死之戀的愛情故事。",
      askT: "《牡丹亭》的作者是誰？",
      options: [
        { t: "湯顯祖", ok: true },
        { t: "洪昇", ok: false },
        { t: "孔尚任", ok: false },
      ],
      whyT: "重點：牡丹亭 / 湯顯祖。《牡丹亭》（又名《杜麗娘慕色還魂記》），是明代戲曲家湯顯祖的代表作，講述了書生柳夢梅與杜麗娘的生死之戀的愛情故事。"
    },
    {
      id: "c17",
      t: "馮夢龍",
      pinyin: "",
      tipT: "明代",
      glossT: "明代 · 馮夢龍、凌濛初",
      detailT: "「三言」指明代馮夢龍編纂的《喻世明言》、《警世通言》和《醒世恆言》；「二拍」指凌濛初所編纂的《初刻拍案驚奇》和《二刻拍案驚奇》。",
      askT: "「三言」的編纂者是誰？",
      options: [
        { t: "蒲松齡", ok: false },
        { t: "馮夢龍", ok: true },
        { t: "凌濛初", ok: false },
      ],
      whyT: "重點：馮夢龍 / 凌濛初。「三言」指明代馮夢龍編纂的《喻世明言》、《警世通言》和《醒世恆言》；「二拍」指凌濛初所編纂的《初刻拍案驚奇》和《二刻拍案驚奇》。"
    },
    {
      id: "c18",
      t: "洪昇",
      pinyin: "",
      tipT: "清代",
      glossT: "清代 · 洪昇、長生殿",
      detailT: "清代戲曲家洪昇創作的《長生殿》，以「安史之亂」前後為背景，敘寫唐玄宗和楊貴妃之間的愛情故事。",
      askT: "《長生殿》的作者是誰？",
      options: [
        { t: "湯顯祖", ok: false },
        { t: "洪昇", ok: true },
        { t: "孔尚任", ok: false },
      ],
      whyT: "重點：洪昇 / 長生殿。清代戲曲家洪昇創作的《長生殿》，以「安史之亂」前後為背景，敘寫唐玄宗和楊貴妃之間的愛情故事。"
    },
    {
      id: "c19",
      t: "桃花扇",
      pinyin: "",
      tipT: "清代",
      glossT: "清代 · 桃花扇、孔尚任",
      detailT: "《桃花扇》是清代戲曲家孔尚任創作的傳奇劇本，與湯顯祖的《牡丹亭》、洪昇的《長生殿》等合稱「四大古典戲曲」。",
      askT: "《桃花扇》的作者是誰？",
      options: [
        { t: "洪昇", ok: false },
        { t: "高明", ok: false },
        { t: "孔尚任", ok: true },
      ],
      whyT: "重點：桃花扇 / 孔尚任。《桃花扇》是清代戲曲家孔尚任創作的傳奇劇本，與湯顯祖的《牡丹亭》、洪昇的《長生殿》等合稱「四大古典戲曲」。"
    },
    {
      id: "c20",
      t: "聊齋誌異",
      pinyin: "",
      tipT: "清代",
      glossT: "清代 · 聊齋誌異、蒲松齡",
      detailT: "《聊齋誌異》，清代蒲松齡著，文言短篇志怪小說，近 500 篇，構思奇妙，揭示了人性和社會面相。",
      askT: "《聊齋誌異》的作者是誰？",
      options: [
        { t: "紀曉嵐", ok: false },
        { t: "吳敬梓", ok: false },
        { t: "蒲松齡", ok: true },
      ],
      whyT: "重點：聊齋誌異 / 蒲松齡。《聊齋誌異》，清代蒲松齡著，文言短篇志怪小說，近 500 篇，構思奇妙，揭示了人性和社會面相。"
    },
    {
      id: "c21",
      t: "儒林外史",
      pinyin: "",
      tipT: "清代",
      glossT: "清代 · 儒林外史、吳敬梓",
      detailT: "《儒林外史》，清代吳敬梓著，中國古典諷刺小說的豐碑。此書借一群生動鮮活的儒生，諷刺和批判封建禮教的弊病和科舉制度。",
      askT: "《儒林外史》主要諷刺甚麼？",
      options: [
        { t: "封建禮教與科舉制度", ok: true },
        { t: "邊塞戰爭", ok: false },
        { t: "宮廷戀愛", ok: false },
      ],
      whyT: "重點：儒林外史 / 吳敬梓。《儒林外史》，清代吳敬梓著，中國古典諷刺小說的豐碑。此書借一群生動鮮活的儒生，諷刺和批判封建禮教的弊病和科舉制度。"
    },
    {
      id: "c22",
      t: "閱微草堂筆記",
      pinyin: "",
      tipT: "清代",
      glossT: "清代 · 閱微草堂筆記、紀曉嵐",
      detailT: "《閱微草堂筆記》是清代紀曉嵐以筆記形式編寫而成的文言短篇志怪小說。",
      askT: "《閱微草堂筆記》的作者是誰？",
      options: [
        { t: "劉鶚", ok: false },
        { t: "紀曉嵐", ok: true },
        { t: "蒲松齡", ok: false },
      ],
      whyT: "重點：閱微草堂筆記 / 紀曉嵐。《閱微草堂筆記》是清代紀曉嵐以筆記形式編寫而成的文言短篇志怪小說。"
    },
    {
      id: "c23",
      t: "桐城派",
      pinyin: "",
      tipT: "清代",
      glossT: "清代文學常識：桐城派",
      detailT: "桐城派是清代文壇最大的散文流派，提倡「義法」，以方苞、劉大櫆、姚鼐為代表人物。",
      askT: "清代文壇最大的散文流派是？",
      options: [
        { t: "竟陵派", ok: false },
        { t: "桐城派", ok: true },
        { t: "公安派", ok: false },
      ],
      whyT: "重點：桐城派。桐城派是清代文壇最大的散文流派，提倡「義法」，以方苞、劉大櫆、姚鼐為代表人物。"
    },
    {
      id: "c24",
      t: "晚清四大譴責小說",
      pinyin: "",
      tipT: "晚清",
      glossT: "晚清文學常識：晚清四大譴責小說",
      detailT: "晚清四大譴責小說為李寶嘉的《官場現形記》、吳趼人的《二十年目睹之怪現狀》、劉鶚的《老殘遊記》和曾樸的《孽海花》。",
      askT: "以下哪部屬於晚清四大譴責小說？",
      options: [
        { t: "《儒林外史》", ok: false },
        { t: "《金瓶梅》", ok: false },
        { t: "《官場現形記》", ok: true },
      ],
      whyT: "重點：晚清四大譴責小說。晚清四大譴責小說為李寶嘉的《官場現形記》、吳趼人的《二十年目睹之怪現狀》、劉鶚的《老殘遊記》和曾樸的《孽海花》。"
    },
    {
      id: "c25",
      t: "梁啟超",
      pinyin: "",
      tipT: "近代",
      glossT: "近代 · 梁啟超、飲冰室合集",
      detailT: "梁啟超，近代思想家、文學家，廣東新會人，維新變法的領袖之一，亦是「詩界革命」、「小說界革命」的倡導者之一，有著作集《飲冰室合集》。",
      askT: "梁啟超的著作集名為？",
      options: [
        { t: "《人間詞話》", ok: false },
        { t: "《嘗試集》", ok: false },
        { t: "《飲冰室合集》", ok: true },
      ],
      whyT: "重點：梁啟超 / 飲冰室合集。梁啟超，近代思想家、文學家，廣東新會人，維新變法的領袖之一，亦是「詩界革命」、「小說界革命」的倡導者之一，有著作集《飲冰室合集》。"
    },
    {
      id: "c26",
      t: "王國維",
      pinyin: "",
      tipT: "近代",
      glossT: "近代 · 王國維、人間詞話",
      detailT: "王國維是中國近代著名學者，其著作有《人間詞》、《人間詞話》等。",
      askT: "王國維的著名詞學著作是？",
      options: [
        { t: "《人間詞話》", ok: true },
        { t: "《飲冰室合集》", ok: false },
        { t: "《新青年》", ok: false },
      ],
      whyT: "重點：王國維 / 人間詞話。王國維是中國近代著名學者，其著作有《人間詞》、《人間詞話》等。"
    },
    {
      id: "c27",
      t: "文學研究會",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 文學研究會、小說月報",
      detailT: "文學研究會是新文學運動中成立最早，影響和貢獻最大的文學社團之一，以整理及創作中國文學、研究及介紹世界文學為宗旨，主辦《小說月報》、《詩》等刊物，主要成員包括周作人、鄭振鐸、沈雁冰、郭紹虞等。",
      askT: "文學研究會主辦的刊物包括？",
      options: [
        { t: "《新月》月刊", ok: false },
        { t: "《小說月報》", ok: true },
        { t: "《創造》季刊", ok: false },
      ],
      whyT: "重點：文學研究會 / 小說月報。文學研究會是新文學運動中成立最早，影響和貢獻最大的文學社團之一，以整理及創作中國文學、研究及介紹世界文學為宗旨，主辦《小說月報》、《詩》等刊物，主要成員包括周作人、鄭振鐸、沈雁冰、郭紹虞等。"
    },
    {
      id: "c28",
      t: "五四新文化運動",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 五四新文化運動、新青年",
      detailT: "中國現代文學始於五四新文化運動時期，胡適、陳獨秀、周作人、魯迅等為奠基者，而《新青年》是當時宣揚思想啟蒙、文學革命的陣地。",
      askT: "宣揚思想啟蒙、文學革命的重要陣地是？",
      options: [
        { t: "《創造》月刊", ok: false },
        { t: "《新青年》", ok: true },
        { t: "《小說月報》", ok: false },
      ],
      whyT: "重點：五四新文化運動 / 新青年。中國現代文學始於五四新文化運動時期，胡適、陳獨秀、周作人、魯迅等為奠基者，而《新青年》是當時宣揚思想啟蒙、文學革命的陣地。"
    },
    {
      id: "c29",
      t: "魯迅",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 魯迅、周樹人",
      detailT: "魯迅，原名周樹人，現代著名思想家、文學家，中國新文學的奠基者，代表作有《阿Q正傳》、《吶喊》、《彷徨》等。",
      askT: "魯迅的原名是？",
      options: [
        { t: "周作人", ok: false },
        { t: "沈雁冰", ok: false },
        { t: "周樹人", ok: true },
      ],
      whyT: "重點：魯迅 / 周樹人。魯迅，原名周樹人，現代著名思想家、文學家，中國新文學的奠基者，代表作有《阿Q正傳》、《吶喊》、《彷徨》等。"
    },
    {
      id: "c30",
      t: "創造社",
      pinyin: "",
      tipT: "現代",
      glossT: "現代文學常識：創造社",
      detailT: "創造社是「五四」運動初期成立的中國現代文學社團。由留學日本的郭沫若、成仿吾、郁達夫、張資平、田漢、鄭伯奇等人在日本東京建立，創辦了《創造》季刊、《創造》周報、《創造日》、《洪水》、《創造》月刊等刊物。",
      askT: "創造社主要由哪批人建立？",
      options: [
        { t: "胡適、徐志摩、聞一多等", ok: false },
        { t: "周作人、鄭振鐸、沈雁冰等", ok: false },
        { t: "郭沫若、成仿吾、郁達夫等", ok: true },
      ],
      whyT: "重點：創造社。創造社是「五四」運動初期成立的中國現代文學社團。由留學日本的郭沫若、成仿吾、郁達夫、張資平、田漢、鄭伯奇等人在日本東京建立，創辦了《創造》季刊、《創造》周報、《創造日》、《洪水》、《創造》月刊等刊物。"
    },
    {
      id: "c31",
      t: "郭沫若",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 郭沫若、女神",
      detailT: "郭沫若，中國新詩的開拓者、傑出的詩人、戲劇家，代表作《女神》是中國現代文學史上第一部白話詩集，其中有名篇《鳳凰涅槃》。",
      askT: "中國現代文學史上第一部白話詩集是？",
      options: [
        { t: "《女神》", ok: true },
        { t: "《嘗試集》", ok: false },
        { t: "《死水》", ok: false },
      ],
      whyT: "重點：郭沫若 / 女神。郭沫若，中國新詩的開拓者、傑出的詩人、戲劇家，代表作《女神》是中國現代文學史上第一部白話詩集，其中有名篇《鳳凰涅槃》。"
    },
    {
      id: "c32",
      t: "郁達夫",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 郁達夫、沉淪",
      detailT: "郁達夫是新文學團體「創造社」的發起人之一，是為抗日救國而殉難的愛國主義作家，在文學創作的同時，積極參加各種反帝抗日組織。其代表作有《沉淪》、《故都的秋》等。",
      askT: "郁達夫的代表作是？",
      options: [
        { t: "《邊城》", ok: false },
        { t: "《沉淪》", ok: true },
        { t: "《子夜》", ok: false },
      ],
      whyT: "重點：郁達夫 / 沉淪。郁達夫是新文學團體「創造社」的發起人之一，是為抗日救國而殉難的愛國主義作家，在文學創作的同時，積極參加各種反帝抗日組織。其代表作有《沉淪》、《故都的秋》等。"
    },
    {
      id: "c33",
      t: "新月社",
      pinyin: "",
      tipT: "現代",
      glossT: "現代文學常識：新月社",
      detailT: "新月社於 1923 年在北京成立，是「五四」運動以來最大的，以探索新詩理論與新詩創作為主的文學社團，主要成員有胡適、徐志摩、聞一多、梁實秋等，創辦了《新月》月刊。",
      askT: "新月社創辦的刊物是？",
      options: [
        { t: "《創造》季刊", ok: false },
        { t: "《新月》月刊", ok: true },
        { t: "《小說月報》", ok: false },
      ],
      whyT: "重點：新月社。新月社於 1923 年在北京成立，是「五四」運動以來最大的，以探索新詩理論與新詩創作為主的文學社團，主要成員有胡適、徐志摩、聞一多、梁實秋等，創辦了《新月》月刊。"
    },
    {
      id: "c34",
      t: "徐志摩",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 徐志摩、再別康橋",
      detailT: "徐志摩，現代詩人、散文家，深受西方唯美主義的影響，一生追求「愛」、「美」與「自由」，有名篇《再別康橋》、《偶然》等。",
      askT: "徐志摩的名篇是？",
      options: [
        { t: "《雨巷》", ok: false },
        { t: "《死水》", ok: false },
        { t: "《再別康橋》", ok: true },
      ],
      whyT: "重點：徐志摩 / 再別康橋。徐志摩，現代詩人、散文家，深受西方唯美主義的影響，一生追求「愛」、「美」與「自由」，有名篇《再別康橋》、《偶然》等。"
    },
    {
      id: "c35",
      t: "胡適",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 胡適、嘗試集",
      detailT: "胡適，史稱中國「第一白話詩人」。他的《嘗試集》乃中國現代文學史上開新文學風氣之先的詩集。",
      askT: "胡適開新文學風氣之先的詩集是？",
      options: [
        { t: "《女神》", ok: false },
        { t: "《紅燭》", ok: false },
        { t: "《嘗試集》", ok: true },
      ],
      whyT: "重點：胡適 / 嘗試集。胡適，史稱中國「第一白話詩人」。他的《嘗試集》乃中國現代文學史上開新文學風氣之先的詩集。"
    },
    {
      id: "c36",
      t: "茅盾",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 茅盾、子夜",
      detailT: "茅盾，字雁冰，五四新文化運動先驅之一，中國現代現實主義小說巨匠，代表作有長篇小說《子夜》和短篇小說集《林家鋪子》。",
      askT: "茅盾的長篇小說代表作是？",
      options: [
        { t: "《子夜》", ok: true },
        { t: "《圍城》", ok: false },
        { t: "《家》", ok: false },
      ],
      whyT: "重點：茅盾 / 子夜。茅盾，字雁冰，五四新文化運動先驅之一，中國現代現實主義小說巨匠，代表作有長篇小說《子夜》和短篇小說集《林家鋪子》。"
    },
    {
      id: "c37",
      t: "聞一多",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 聞一多、三美",
      detailT: "聞一多，現代愛國詩人，他提出了「三美」原則，即建築美、繪畫美、音樂美，詩集《死水》、《紅燭》為其代表作。",
      askT: "聞一多提出的「三美」原則是？",
      options: [
        { t: "真美、善美、和美", ok: false },
        { t: "建築美、繪畫美、音樂美", ok: true },
        { t: "形美、意美、音美", ok: false },
      ],
      whyT: "重點：聞一多 / 三美。聞一多，現代愛國詩人，他提出了「三美」原則，即建築美、繪畫美、音樂美，詩集《死水》、《紅燭》為其代表作。"
    },
    {
      id: "c38",
      t: "田漢",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 田漢、名優之死",
      detailT: "田漢，中國現代戲劇的奠基者之一，戲曲作家，話劇代表作有《名優之死》等。",
      askT: "田漢的話劇代表作是？",
      options: [
        { t: "《茶館》", ok: false },
        { t: "《名優之死》", ok: true },
        { t: "《雷雨》", ok: false },
      ],
      whyT: "重點：田漢 / 名優之死。田漢，中國現代戲劇的奠基者之一，戲曲作家，話劇代表作有《名優之死》等。"
    },
    {
      id: "c39",
      t: "冰心",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 冰心、寄小讀者",
      detailT: "冰心，現代女作家，以清俊、柔美的「冰心體」文風著稱，有散文集《寄小讀者》等。",
      askT: "冰心的散文集代表作是？",
      options: [
        { t: "《背影》", ok: false },
        { t: "《荷塘月色》", ok: false },
        { t: "《寄小讀者》", ok: true },
      ],
      whyT: "重點：冰心 / 寄小讀者。冰心，現代女作家，以清俊、柔美的「冰心體」文風著稱，有散文集《寄小讀者》等。"
    },
    {
      id: "c40",
      t: "朱自清",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 朱自清、背影",
      detailT: "朱自清，現代散文家，其散文樸素縝密、富有真情實感，代表作有《背影》、《荷塘月色》等。",
      askT: "朱自清的散文代表作是？",
      options: [
        { t: "《寄小讀者》", ok: false },
        { t: "《雨巷》", ok: false },
        { t: "《背影》", ok: true },
      ],
      whyT: "重點：朱自清 / 背影。朱自清，現代散文家，其散文樸素縝密、富有真情實感，代表作有《背影》、《荷塘月色》等。"
    },
    {
      id: "c41",
      t: "巴金",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 巴金、激流三部曲",
      detailT: "巴金，現代作家，翻譯家，被稱為「文壇巨匠」，代表作有《激流三部曲》：《家》、《春》、《秋》。",
      askT: "巴金《激流三部曲》包括？",
      options: [
        { t: "《家》《春》《秋》", ok: true },
        { t: "《吶喊》《彷徨》《朝花夕拾》", ok: false },
        { t: "《雷雨》《日出》《北京人》", ok: false },
      ],
      whyT: "重點：巴金 / 激流三部曲。巴金，現代作家，翻譯家，被稱為「文壇巨匠」，代表作有《激流三部曲》：《家》、《春》、《秋》。"
    },
    {
      id: "c42",
      t: "老舍",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 老舍、駱駝祥子",
      detailT: "老舍，滿族作家，以小說、話劇著名，被稱為「人民藝術家」，代表作有長篇小說《駱駝祥子》、話劇《茶館》等。",
      askT: "老舍的長篇小說代表作是？",
      options: [
        { t: "《子夜》", ok: false },
        { t: "《駱駝祥子》", ok: true },
        { t: "《圍城》", ok: false },
      ],
      whyT: "重點：老舍 / 駱駝祥子。老舍，滿族作家，以小說、話劇著名，被稱為「人民藝術家」，代表作有長篇小說《駱駝祥子》、話劇《茶館》等。"
    },
    {
      id: "c43",
      t: "曹禺",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 曹禺、雷雨",
      detailT: "曹禺，現代劇作家，被稱為「中國的莎士比亞」，代表作有《雷雨》、《日出》、《北京人》。",
      askT: "被稱為「中國的莎士比亞」的劇作家是？",
      options: [
        { t: "老舍", ok: false },
        { t: "曹禺", ok: true },
        { t: "田漢", ok: false },
      ],
      whyT: "重點：曹禺 / 雷雨。曹禺，現代劇作家，被稱為「中國的莎士比亞」，代表作有《雷雨》、《日出》、《北京人》。"
    },
    {
      id: "c44",
      t: "戴望舒",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 戴望舒、雨巷",
      detailT: "戴望舒，現代詩人、翻譯家，中國現代象徵派詩歌的代表，代表作有《雨巷》。",
      askT: "戴望舒的象徵派代表作是？",
      options: [
        { t: "《再別康橋》", ok: false },
        { t: "《死水》", ok: false },
        { t: "《雨巷》", ok: true },
      ],
      whyT: "重點：戴望舒 / 雨巷。戴望舒，現代詩人、翻譯家，中國現代象徵派詩歌的代表，代表作有《雨巷》。"
    },
    {
      id: "c45",
      t: "錢鍾書",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 錢鍾書、圍城",
      detailT: "錢鍾書，現代作家、翻譯家，其諷刺小說《圍城》被稱為現代中國最偉大的小說之一。",
      askT: "錢鍾書的諷刺小說代表作是？",
      options: [
        { t: "《邊城》", ok: false },
        { t: "《子夜》", ok: false },
        { t: "《圍城》", ok: true },
      ],
      whyT: "重點：錢鍾書 / 圍城。錢鍾書，現代作家、翻譯家，其諷刺小說《圍城》被稱為現代中國最偉大的小說之一。"
    },
    {
      id: "c46",
      t: "沈從文",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 沈從文、邊城",
      detailT: "沈從文，現代作家，20 世紀 30 年代京派小說的代表人物，代表作有《邊城》、《長河》。",
      askT: "沈從文是哪個流派小說的代表人物？",
      options: [
        { t: "京派小說", ok: true },
        { t: "海派小說", ok: false },
        { t: "象徵派", ok: false },
      ],
      whyT: "重點：沈從文 / 邊城。沈從文，現代作家，20 世紀 30 年代京派小說的代表人物，代表作有《邊城》、《長河》。"
    },
    {
      id: "c47",
      t: "丁玲",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 丁玲、莎菲女士的日記",
      detailT: "丁玲，20 世紀文壇的著名女作家，社會活動家，代表作有《莎菲女士的日記》、《太陽照在桑乾河上》等。",
      askT: "丁玲的代表作是？",
      options: [
        { t: "《京華煙雲》", ok: false },
        { t: "《莎菲女士的日記》", ok: true },
        { t: "《金鎖記》", ok: false },
      ],
      whyT: "重點：丁玲 / 莎菲女士的日記。丁玲，20 世紀文壇的著名女作家，社會活動家，代表作有《莎菲女士的日記》、《太陽照在桑乾河上》等。"
    },
    {
      id: "c48",
      t: "張愛玲",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 張愛玲、金鎖記",
      detailT: "張愛玲，現代文學女作家，海派小說代表，代表作有《金鎖記》、《傾城之戀》等。",
      askT: "張愛玲是哪個流派的代表？",
      options: [
        { t: "創造社", ok: false },
        { t: "海派小說", ok: true },
        { t: "京派小說", ok: false },
      ],
      whyT: "重點：張愛玲 / 金鎖記。張愛玲，現代文學女作家，海派小說代表，代表作有《金鎖記》、《傾城之戀》等。"
    },
    {
      id: "c49",
      t: "林語堂",
      pinyin: "",
      tipT: "現代",
      glossT: "現代 · 林語堂、京華煙雲",
      detailT: "林語堂，現代作家、翻譯家，他「兩腳踏中西文化」，著有長篇小說《京華煙雲》，英文作品集《吾國與吾民》等。",
      askT: "林語堂的長篇小說代表作是？",
      options: [
        { t: "《圍城》", ok: false },
        { t: "《邊城》", ok: false },
        { t: "《京華煙雲》", ok: true },
      ],
      whyT: "重點：林語堂 / 京華煙雲。林語堂，現代作家、翻譯家，他「兩腳踏中西文化」，著有長篇小說《京華煙雲》，英文作品集《吾國與吾民》等。"
    },
  ],
  poems: [
    {
      id: "p01",
      t: "岳陽樓記（一）",
      authorT: "范仲淹",
      dynastyT: "宋",
      pinyin: "ngok6 joeng4 lau4 gei3",
      linesT: ["先天下之憂而憂，", "後天下之樂而樂"],
      glossT: "先為天下人擔憂，後為天下人享樂。",
      noteT: "出自范仲淹《岳陽樓記》，寫士大夫的責任與胸懷。",
      askT: "「先天下之憂而憂，後天下之樂而樂」出自誰的作品？",
      options: [
        { t: "范仲淹《岳陽樓記》", ok: true },
        { t: "歐陽修《醉翁亭記》", ok: false },
        { t: "王安石《遊褒禪山記》", ok: false }
      ],
      whyT: "這是范仲淹《岳陽樓記》中最著名的句子。"
    },
    {
      id: "p02",
      t: "岳陽樓記（二）",
      authorT: "范仲淹",
      dynastyT: "宋",
      pinyin: "ngok6 joeng4 lau4 gei3",
      linesT: ["不以物喜，", "不以己悲"],
      glossT: "不因外物好壞而喜悅，也不因自己得失而悲傷。",
      noteT: "出自范仲淹《岳陽樓記》，寫豁達的心境。",
      askT: "「不以物喜，不以己悲」強調甚麼態度？",
      options: [
        { t: "不因外物與一己得失而動搖", ok: true },
        { t: "只求個人享樂", ok: false },
        { t: "逃避現實", ok: false }
      ],
      whyT: "這兩句說明心境不應被外物和個人遭遇左右。"
    },
    {
      id: "p03",
      t: "岳陽樓記（三）",
      authorT: "范仲淹",
      dynastyT: "宋",
      pinyin: "ngok6 joeng4 lau4 gei3",
      linesT: ["居廟堂之高則憂其民；", "處江湖之遠則憂其君"],
      glossT: "在朝廷做官就為百姓憂慮；退居江湖也為君主憂慮。",
      noteT: "出自范仲淹《岳陽樓記》，寫不論進退都心繫天下。",
      askT: "「居廟堂之高則憂其民」中的「廟堂」指甚麼？",
      options: [
        { t: "朝廷", ok: true },
        { t: "寺廟", ok: false },
        { t: "市集", ok: false }
      ],
      whyT: "「廟堂」借指朝廷、朝堂。"
    },
    {
      id: "p04",
      t: "賣柑者言",
      authorT: "劉基",
      dynastyT: "明",
      pinyin: "maai6 gam1 ze2 jin4",
      linesT: ["金玉其外，", "敗絮其中"],
      glossT: "外表像金玉般華美，內裏卻是破敗的棉絮。",
      noteT: "出自劉基《賣柑者言》，比喻徒有其表。",
      askT: "「金玉其外，敗絮其中」比喻甚麼？",
      options: [
        { t: "外表好看，內裏虛有其表", ok: true },
        { t: "內外皆美", ok: false },
        { t: "貧窮卻高尚", ok: false }
      ],
      whyT: "金玉對敗絮，點出表裏不一。"
    },
    {
      id: "p05",
      t: "宣州謝朓樓餞別校書叔雲",
      authorT: "李白",
      dynastyT: "唐",
      pinyin: "syun1 zau1 ze6 tiu1 lau4",
      linesT: ["抽刀斷水水更流，", "舉杯消愁愁更愁"],
      glossT: "抽刀想斬斷流水，水卻流得更急；想喝酒消愁，愁反而更深。",
      noteT: "出自李白《宣州謝朓樓餞別校書叔雲》，寫愁緒難解。",
      askT: "「抽刀斷水水更流，舉杯消愁愁更愁」的作者是誰？",
      options: [
        { t: "李白", ok: true },
        { t: "杜甫", ok: false },
        { t: "白居易", ok: false }
      ],
      whyT: "這是李白在宣州謝朓樓所作名句。"
    },
    {
      id: "p06",
      t: "十一月四日風雨大作",
      authorT: "陸游",
      dynastyT: "宋",
      pinyin: "sap6 jat1 jyut6 sei3 jat6",
      linesT: ["夜闌臥聽風吹雨，", "鐵馬冰河入夢來"],
      glossT: "夜深躺着聽風雨，夢裏卻出現戰場上的鐵馬與冰河。",
      noteT: "出自陸游《十一月四日風雨大作》，寫報國之志。",
      askT: "「鐵馬冰河入夢來」表現詩人甚麼心情？",
      options: [
        { t: "收復中原、為國效力的志向", ok: true },
        { t: "只想安穩睡好", ok: false },
        { t: "埋怨天氣太冷", ok: false }
      ],
      whyT: "鐵馬冰河是戰場意象，反映陸游的愛國情懷。"
    },
    {
      id: "p07",
      t: "遊山西村",
      authorT: "陸游",
      dynastyT: "宋",
      pinyin: "jau4 saan1 sai1 cyun1",
      linesT: ["山重水複疑無路，", "柳暗花明又一村"],
      glossT: "山水重重以為無路可走，忽然柳綠花明，又見一座村落。",
      noteT: "出自陸游《遊山西村》，常比喻困境後出現轉機。",
      askT: "「山重水複疑無路，柳暗花明又一村」常比喻甚麼？",
      options: [
        { t: "陷入困境後又見新希望", ok: true },
        { t: "永遠迷失方向", ok: false },
        { t: "只寫春天風景", ok: false }
      ],
      whyT: "前句山窮水盡，後句豁然開朗，形成轉折。"
    },
    {
      id: "p08",
      t: "白雪歌送武判官歸京",
      authorT: "岑參",
      dynastyT: "唐",
      pinyin: "baak6 syut3 go1",
      linesT: ["忽如一夜春風來，", "千樹萬樹梨花開"],
      glossT: "彷彿一夜春風吹來，樹上像開滿千千萬萬朵梨花。",
      noteT: "出自岑參《白雪歌送武判官歸京》，以梨花比喻雪景。",
      askT: "「千樹萬樹梨花開」實際寫的是甚麼？",
      options: [
        { t: "白雪覆蓋枝頭", ok: true },
        { t: "真正的梨花盛開", ok: false },
        { t: "春雨落地", ok: false }
      ],
      whyT: "詩人把雪比作梨花，寫邊塞雪景。"
    },
    {
      id: "p09",
      t: "論詩",
      authorT: "趙翼",
      dynastyT: "清",
      pinyin: "leon6 si1",
      linesT: ["江山代有才人出，", "各領風騷數百年"],
      glossT: "每個時代都有傑出人才出現，各自引領文壇風氣數百年。",
      noteT: "出自趙翼《論詩》，強調文學應與時俱進。",
      askT: "「江山代有才人出，各領風騷數百年」的作者是誰？",
      options: [
        { t: "趙翼", ok: true },
        { t: "袁枚", ok: false },
        { t: "龔自珍", ok: false }
      ],
      whyT: "這是清代趙翼《論詩》中的名句。"
    },
    {
      id: "p10",
      t: "赤壁",
      authorT: "杜牧",
      dynastyT: "唐",
      pinyin: "cek3 bik1",
      linesT: ["東風不與周郎便，", "銅雀春深鎖二喬"],
      glossT: "若東風不幫助周瑜，二喬恐怕會被鎖進銅雀台。",
      noteT: "出自杜牧《赤壁》，以假設語氣議論赤壁之戰。",
      askT: "「東風不與周郎便」中的「周郎」指誰？",
      options: [
        { t: "周瑜", ok: true },
        { t: "周文王", ok: false },
        { t: "周公", ok: false }
      ],
      whyT: "周郎即三國名將周瑜。"
    },
    {
      id: "p11",
      t: "秋詞",
      authorT: "劉禹錫",
      dynastyT: "唐",
      pinyin: "cau1 ci4",
      linesT: ["自古逢秋悲寂寥，", "我言秋日勝春朝"],
      glossT: "自古以來人們逢秋便感悲傷，我卻說秋天勝過春天的清晨。",
      noteT: "出自劉禹錫《秋詞》，一反悲秋傳統，寫出昂揚精神。",
      askT: "「我言秋日勝春朝」表達作者甚麼態度？",
      options: [
        { t: "喜愛秋天、積極樂觀", ok: true },
        { t: "比別人更怕秋天", ok: false },
        { t: "只喜歡春天", ok: false }
      ],
      whyT: "作者明確說秋日勝過春朝，打破悲秋套路。"
    },
    {
      id: "p12",
      t: "登飛來峰",
      authorT: "王安石",
      dynastyT: "宋",
      pinyin: "dang1 fei1 loi4 fung1",
      linesT: ["不畏浮雲遮望眼，", "只緣身在最高層"],
      glossT: "不怕浮雲遮住視線，只因為自己站在最高處。",
      noteT: "出自王安石《登飛來峰》，比喻站得高、看得遠，不被蒙蔽。",
      askT: "「不畏浮雲遮望眼，只緣身在最高層」說明甚麼道理？",
      options: [
        { t: "站得高才能看得遠、不被迷惑", ok: true },
        { t: "雲層太厚不必爬山", ok: false },
        { t: "只欣賞近景", ok: false }
      ],
      whyT: "因為身在最高層，所以不怕浮雲遮眼。"
    },
    {
      id: "p13",
      t: "從軍行",
      authorT: "楊炯",
      dynastyT: "唐",
      pinyin: "cung4 gwan1 hang4",
      linesT: ["寧為百夫長，", "勝作一書生"],
      glossT: "寧願做個小軍官，也勝過只做一個書生。",
      noteT: "出自楊炯《從軍行》，寫投筆從戎、建功立業的志向。",
      askT: "「寧為百夫長，勝作一書生」表達甚麼志向？",
      options: [
        { t: "從軍報國、建功立業", ok: true },
        { t: "專心讀書考試", ok: false },
        { t: "隱居山林", ok: false }
      ],
      whyT: "以百夫長對書生，顯示尚武報國之心。"
    },
    {
      id: "p14",
      t: "行路難",
      authorT: "李白",
      dynastyT: "唐",
      pinyin: "hang4 lou6 naan4",
      linesT: ["長風破浪會有時，", "直掛雲帆濟滄海"],
      glossT: "總有一天能乘長風破萬里浪，掛起雲帆渡過大海。",
      noteT: "出自李白《行路難》，寫對前途仍抱持希望。",
      askT: "「長風破浪會有時，直掛雲帆濟滄海」表達甚麼感情？",
      options: [
        { t: "對未來充滿信心與希望", ok: true },
        { t: "徹底放棄理想", ok: false },
        { t: "害怕遠行", ok: false }
      ],
      whyT: "長風破浪、雲帆濟海都是積極進取的意象。"
    },
    {
      id: "p15",
      t: "惠崇春江晚景",
      authorT: "蘇軾",
      dynastyT: "宋",
      pinyin: "wai6 sung4 ceon1 gong1",
      linesT: ["竹外桃花三兩枝，", "春江水暖鴨先知"],
      glossT: "竹林外桃花開了三兩枝，江水回暖，鴨子最先感覺到。",
      noteT: "出自蘇軾《惠崇春江晚景》，寫早春景象。",
      askT: "「春江水暖鴨先知」寫出甚麼觀察？",
      options: [
        { t: "動物能先感覺到春天來臨", ok: true },
        { t: "鴨子怕冷不下水", ok: false },
        { t: "江水已經結冰", ok: false }
      ],
      whyT: "以鴨戲春江，側面寫出水溫回暖、春天到來。"
    }
  ]
};
