import type { Dish, Step } from "@/types"

export const dishes: Dish[] = [
  // ===== 家常小炒 =====
  { id: "1", name: "番茄炒蛋", emoji: "🍅", image: "/dishes/tomato-egg.jpg", difficulty: "简单", time: "15分钟", calories: "280千卡", price: "¥12", category: "家常小炒" },
  { id: "2", name: "酸辣土豆丝", emoji: "🥔", image: "/dishes/hot-sour-potato.jpg", difficulty: "简单", time: "15分钟", calories: "200千卡", price: "¥10", category: "家常小炒" },
  { id: "3", name: "青椒肉丝", emoji: "🫑", image: "/dishes/pepper-pork.jpg", difficulty: "简单", time: "15分钟", calories: "260千卡", price: "¥15", category: "家常小炒" },
  { id: "4", name: "蒜蓉西兰花", emoji: "🥦", image: "/dishes/garlic-broccoli.jpg", difficulty: "简单", time: "10分钟", calories: "150千卡", price: "¥10", category: "家常小炒" },
  { id: "5", name: "韭菜炒蛋", emoji: "🥬", image: "/dishes/chive-egg.jpg", difficulty: "简单", time: "10分钟", calories: "250千卡", price: "¥10", category: "家常小炒" },
  { id: "6", name: "芹菜香干", emoji: "🥬", image: "/dishes/celery-tofu.jpg", difficulty: "简单", time: "15分钟", calories: "220千卡", price: "¥12", category: "家常小炒" },

  // ===== 硬菜大餐 =====
  { id: "7", name: "红烧排骨", emoji: "🍖", image: "/dishes/braised-ribs.jpg", difficulty: "中等", time: "45分钟", calories: "520千卡", price: "¥45", category: "硬菜大餐" },
  { id: "8", name: "糖醋里脊", emoji: "🐷", image: "/dishes/sweet-sour-pork.jpg", difficulty: "中等", time: "35分钟", calories: "460千卡", price: "¥35", category: "硬菜大餐" },
  { id: "9", name: "红烧肉", emoji: "🥩", image: "/dishes/braised-pork-belly.jpg", difficulty: "中等", time: "60分钟", calories: "600千卡", price: "¥38", category: "硬菜大餐" },
  { id: "10", name: "啤酒鸭", emoji: "🦆", image: "/dishes/beer-duck.jpg", difficulty: "中等", time: "50分钟", calories: "550千卡", price: "¥42", category: "硬菜大餐" },
  { id: "11", name: "清蒸鲈鱼", emoji: "🐠", image: "/dishes/steamed-bass.jpg", difficulty: "中等", time: "25分钟", calories: "320千卡", price: "¥40", category: "硬菜大餐" },
  { id: "12", name: "东坡肉", emoji: "🥘", image: "/dishes/dongpo-pork.jpg", difficulty: "困难", time: "90分钟", calories: "650千卡", price: "¥48", category: "硬菜大餐" },

  // ===== 川湘辣味 =====
  { id: "13", name: "麻婆豆腐", emoji: "🧈", image: "/dishes/mapo-tofu.jpg", difficulty: "中等", time: "25分钟", calories: "350千卡", price: "¥18", category: "川湘辣味" },
  { id: "14", name: "宫保鸡丁", emoji: "🍗", image: "/dishes/kungpao-chicken.jpg", difficulty: "中等", time: "30分钟", calories: "380千卡", price: "¥28", category: "川湘辣味" },
  { id: "15", name: "水煮鱼", emoji: "🐟", image: "/dishes/boiled-fish.jpg", difficulty: "困难", time: "50分钟", calories: "480千卡", price: "¥55", category: "川湘辣味" },
  { id: "16", name: "回锅肉", emoji: "🥩", image: "/dishes/twice-cooked-pork.jpg", difficulty: "中等", time: "30分钟", calories: "450千卡", price: "¥28", category: "川湘辣味" },
  { id: "17", name: "小炒肉", emoji: "🌶️", image: "/dishes/chili-pork.jpg", difficulty: "简单", time: "20分钟", calories: "380千卡", price: "¥25", category: "川湘辣味" },
  { id: "18", name: "鱼香肉丝", emoji: "🥕", image: "/dishes/yuxiang-pork.jpg", difficulty: "中等", time: "25分钟", calories: "350千卡", price: "¥22", category: "川湘辣味" },
  { id: "19", name: "口水鸡", emoji: "🍗", image: "/dishes/mouthwatering-chicken.jpg", difficulty: "中等", time: "40分钟", calories: "420千卡", price: "¥32", category: "川湘辣味" },

  // ===== 下饭神器 =====
  { id: "20", name: "肉末茄子", emoji: "🍆", image: "/dishes/eggplant-mince.jpg", difficulty: "简单", time: "20分钟", calories: "300千卡", price: "¥15", category: "下饭神器" },
  { id: "21", name: "干煸四季豆", emoji: "🫘", image: "/dishes/dry-fried-beans.jpg", difficulty: "简单", time: "15分钟", calories: "220千卡", price: "¥12", category: "下饭神器" },
  { id: "22", name: "红烧豆腐", emoji: "🧈", image: "/dishes/braised-tofu.jpg", difficulty: "简单", time: "15分钟", calories: "260千卡", price: "¥10", category: "下饭神器" },
  { id: "23", name: "虎皮青椒", emoji: "🫑", image: "/dishes/tiger-skin-pepper.jpg", difficulty: "简单", time: "15分钟", calories: "180千卡", price: "¥8", category: "下饭神器" },
  { id: "24", name: "可乐鸡翅", emoji: "🍗", image: "/dishes/cola-wings.jpg", difficulty: "简单", time: "30分钟", calories: "420千卡", price: "¥25", category: "下饭神器" },
  { id: "25", name: "蚝油牛肉", emoji: "🥩", image: "/dishes/oyster-beef.jpg", difficulty: "中等", time: "20分钟", calories: "350千卡", price: "¥28", category: "下饭神器" },

  // ===== 清爽素菜 =====
  { id: "26", name: "清炒时蔬", emoji: "🥬", image: "/dishes/stir-fried-greens.jpg", difficulty: "简单", time: "10分钟", calories: "120千卡", price: "¥10", category: "清爽素菜" },
  { id: "27", name: "地三鲜", emoji: "🍆", image: "/dishes/three-treasures.jpg", difficulty: "中等", time: "25分钟", calories: "280千卡", price: "¥18", category: "清爽素菜" },
  { id: "28", name: "手撕包菜", emoji: "🥬", image: "/dishes/hand-torn-cabbage.jpg", difficulty: "简单", time: "10分钟", calories: "150千卡", price: "¥10", category: "清爽素菜" },
  { id: "29", name: "白灼菜心", emoji: "🥬", image: "/dishes/blanched-choy-sum.jpg", difficulty: "简单", time: "5分钟", calories: "80千卡", price: "¥8", category: "清爽素菜" },
  { id: "30", name: "素炒豆芽", emoji: "🌱", image: "/dishes/stir-fried-sprouts.jpg", difficulty: "简单", time: "8分钟", calories: "100千卡", price: "¥6", category: "清爽素菜" },
  { id: "31", name: "蚝油生菜", emoji: "🥬", image: "/dishes/oyster-lettuce.jpg", difficulty: "简单", time: "5分钟", calories: "90千卡", price: "¥8", category: "清爽素菜" },
  { id: "32", name: "凉拌木耳", emoji: "🍄", image: "/dishes/wood-ear-salad.jpg", difficulty: "简单", time: "10分钟", calories: "120千卡", price: "¥10", category: "清爽素菜" },

  // ===== 广式风味 =====
  { id: "33", name: "叉烧肉", emoji: "🥩", image: "/dishes/char-siu.jpg", difficulty: "中等", time: "60分钟", calories: "480千卡", price: "¥38", category: "广式风味" },
  { id: "34", name: "白切鸡", emoji: "🍗", image: "/dishes/white-cut-chicken.jpg", difficulty: "中等", time: "45分钟", calories: "400千卡", price: "¥35", category: "广式风味" },
  { id: "35", name: "豉汁蒸排骨", emoji: "🍖", image: "/dishes/black-bean-ribs.jpg", difficulty: "中等", time: "30分钟", calories: "380千卡", price: "¥30", category: "广式风味" },
  { id: "36", name: "蒜蓉粉丝蒸虾", emoji: "🦐", image: "/dishes/garlic-shrimp.jpg", difficulty: "简单", time: "20分钟", calories: "280千卡", price: "¥35", category: "广式风味" },
  { id: "37", name: "菠萝咕咾肉", emoji: "🍍", image: "/dishes/pineapple-sweet-sour-pork.jpg", difficulty: "中等", time: "30分钟", calories: "420千卡", price: "¥28", category: "广式风味" },
  { id: "38", name: "咸鱼茄子煲", emoji: "🍆", image: "/dishes/salted-fish-eggplant.jpg", difficulty: "中等", time: "25分钟", calories: "300千卡", price: "¥25", category: "广式风味" },

  // ===== 汤煲炖品 =====
  { id: "39", name: "番茄牛腩煲", emoji: "🍅", image: "/dishes/tomato-brisket.jpg", difficulty: "中等", time: "90分钟", calories: "520千卡", price: "¥42", category: "汤煲炖品" },
  { id: "40", name: "酸菜鱼", emoji: "🐟", image: "/dishes/pickled-fish.jpg", difficulty: "中等", time: "35分钟", calories: "380千卡", price: "¥38", category: "汤煲炖品" },
  { id: "41", name: "排骨莲藕汤", emoji: "🍖", image: "/dishes/rib-lotus-soup.jpg", difficulty: "简单", time: "60分钟", calories: "350千卡", price: "¥28", category: "汤煲炖品" },
  { id: "42", name: "香菇鸡汤", emoji: "🍄", image: "/dishes/chicken-mushroom-soup.jpg", difficulty: "简单", time: "60分钟", calories: "300千卡", price: "¥22", category: "汤煲炖品" },
  { id: "43", name: "冬瓜丸子汤", emoji: "🍈", image: "/dishes/winter-melon-meatball-soup.jpg", difficulty: "简单", time: "25分钟", calories: "220千卡", price: "¥18", category: "汤煲炖品" },
  { id: "44", name: "萝卜炖牛腩", emoji: "🥩", image: "/dishes/radish-brisket.jpg", difficulty: "中等", time: "90分钟", calories: "500千卡", price: "¥40", category: "汤煲炖品" },

  // ===== 凉拌卤味 =====
  { id: "45", name: "凉拌黄瓜", emoji: "🥒", image: "/dishes/cucumber-salad.jpg", difficulty: "简单", time: "5分钟", calories: "80千卡", price: "¥8", category: "凉拌卤味" },
  { id: "46", name: "蒜泥白肉", emoji: "🥩", image: "/dishes/garlic-white-pork.jpg", difficulty: "简单", time: "25分钟", calories: "420千卡", price: "¥28", category: "凉拌卤味" },
  { id: "47", name: "卤牛肉", emoji: "🥩", image: "/dishes/braised-beef.jpg", difficulty: "中等", time: "60分钟", calories: "450千卡", price: "¥38", category: "凉拌卤味" },
  { id: "48", name: "皮蛋豆腐", emoji: "🥚", image: "/dishes/century-egg-tofu.jpg", difficulty: "简单", time: "5分钟", calories: "200千卡", price: "¥12", category: "凉拌卤味" },
  { id: "49", name: "泡椒凤爪", emoji: "🐔", image: "/dishes/pickled-chicken-feet.jpg", difficulty: "中等", time: "30分钟", calories: "280千卡", price: "¥22", category: "凉拌卤味" },
  { id: "50", name: "老醋花生", emoji: "🥜", image: "/dishes/vinegar-peanuts.jpg", difficulty: "简单", time: "10分钟", calories: "350千卡", price: "¥10", category: "凉拌卤味" },
]

export const steps: Record<string, Step[]> = {
  // ===== 家常小炒 =====
  "1": [
    { id: "1-1", dishId: "1", stepNumber: 1, content: "番茄切块，鸡蛋打散加少许盐搅匀" },
    { id: "1-2", dishId: "1", stepNumber: 2, content: "热锅凉油，倒入蛋液炒至凝固盛出" },
    { id: "1-3", dishId: "1", stepNumber: 3, content: "锅中再加油，放入番茄块翻炒出汁" },
    { id: "1-4", dishId: "1", stepNumber: 4, content: "倒回鸡蛋，加盐、糖调味，翻炒均匀出锅" },
  ],
  "2": [
    { id: "2-1", dishId: "2", stepNumber: 1, content: "土豆去皮切细丝，冷水浸泡洗去淀粉，沥干" },
    { id: "2-2", dishId: "2", stepNumber: 2, content: "干辣椒剪段，蒜切末" },
    { id: "2-3", dishId: "2", stepNumber: 3, content: "热锅凉油，下花椒、干辣椒、蒜末爆香" },
    { id: "2-4", dishId: "2", stepNumber: 4, content: "倒入土豆丝大火快炒，加醋、盐、少许糖" },
    { id: "2-5", dishId: "2", stepNumber: 5, content: "翻炒至断生即出锅，保持爽脆" },
  ],
  "3": [
    { id: "3-1", dishId: "3", stepNumber: 1, content: "猪里脊切丝，加料酒、生抽、淀粉腌制 10 分钟" },
    { id: "3-2", dishId: "3", stepNumber: 2, content: "青椒去籽切丝，姜蒜切末" },
    { id: "3-3", dishId: "3", stepNumber: 3, content: "热锅凉油下肉丝滑炒至变色盛出" },
    { id: "3-4", dishId: "3", stepNumber: 4, content: "锅中余油下姜蒜爆香，放青椒丝翻炒至断生" },
    { id: "3-5", dishId: "3", stepNumber: 5, content: "倒回肉丝，加盐、生抽翻炒均匀出锅" },
  ],
  "4": [
    { id: "4-1", dishId: "4", stepNumber: 1, content: "西兰花掰小朵，淡盐水浸泡 10 分钟后沥干" },
    { id: "4-2", dishId: "4", stepNumber: 2, content: "蒜切末，锅中水烧开加少许盐和油，西兰花焯水 1 分钟捞出" },
    { id: "4-3", dishId: "4", stepNumber: 3, content: "热锅凉油，小火下蒜末炒出香味" },
    { id: "4-4", dishId: "4", stepNumber: 4, content: "倒入西兰花大火翻炒，加盐、蚝油翻匀出锅" },
  ],
  "5": [
    { id: "5-1", dishId: "5", stepNumber: 1, content: "韭菜洗净切段，鸡蛋打散加少许盐" },
    { id: "5-2", dishId: "5", stepNumber: 2, content: "热锅多油，倒入蛋液炒至凝固盛出" },
    { id: "5-3", dishId: "5", stepNumber: 3, content: "锅中补少许油，倒入韭菜大火快炒 30 秒" },
    { id: "5-4", dishId: "5", stepNumber: 4, content: "倒回鸡蛋，加盐翻匀即可出锅" },
  ],
  "6": [
    { id: "6-1", dishId: "6", stepNumber: 1, content: "芹菜斜刀切段，香干切薄片" },
    { id: "6-2", dishId: "6", stepNumber: 2, content: "蒜切末，干辣椒剪段" },
    { id: "6-3", dishId: "6", stepNumber: 3, content: "热锅凉油，下蒜末、干辣椒爆香" },
    { id: "6-4", dishId: "6", stepNumber: 4, content: "先下香干煸炒至微黄，再下芹菜大火翻炒" },
    { id: "6-5", dishId: "6", stepNumber: 5, content: "加盐、生抽调味，翻炒至芹菜断生出锅" },
  ],

  // ===== 硬菜大餐 =====
  "7": [
    { id: "7-1", dishId: "7", stepNumber: 1, content: "排骨冷水下锅，加料酒姜片焯水去血沫，捞出洗净" },
    { id: "7-2", dishId: "7", stepNumber: 2, content: "锅中放油加冰糖，小火炒出糖色" },
    { id: "7-3", dishId: "7", stepNumber: 3, content: "下排骨翻炒上色，加生抽、老抽、料酒、八角、桂皮" },
    { id: "7-4", dishId: "7", stepNumber: 4, content: "加开水没过排骨，大火烧开转小火炖 30 分钟" },
    { id: "7-5", dishId: "7", stepNumber: 5, content: "大火收汁至浓稠，撒葱花出锅" },
  ],
  "8": [
    { id: "8-1", dishId: "8", stepNumber: 1, content: "猪里脊切条，加料酒、盐、蛋清腌制 15 分钟" },
    { id: "8-2", dishId: "8", stepNumber: 2, content: "面粉和淀粉 1:1 混合，里脊裹浆，六成油温炸至金黄捞出" },
    { id: "8-3", dishId: "8", stepNumber: 3, content: "调糖醋汁：番茄酱、白糖、白醋、清水混合" },
    { id: "8-4", dishId: "8", stepNumber: 4, content: "锅中少许油倒入糖醋汁煮至浓稠，倒入炸好的里脊快速翻匀" },
    { id: "8-5", dishId: "8", stepNumber: 5, content: "撒白芝麻出锅装盘" },
  ],
  "9": [
    { id: "9-1", dishId: "9", stepNumber: 1, content: "五花肉切 3cm 方块，冷水下锅焯水捞出" },
    { id: "9-2", dishId: "9", stepNumber: 2, content: "锅中少许油，下冰糖小火炒至枣红色糖色" },
    { id: "9-3", dishId: "9", stepNumber: 3, content: "下五花肉翻炒上色，加生抽、老抽、料酒、八角、桂皮、香叶、姜片" },
    { id: "9-4", dishId: "9", stepNumber: 4, content: "加开水没过肉，大火烧开转小火炖 45 分钟" },
    { id: "9-5", dishId: "9", stepNumber: 5, content: "大火收汁至汤汁浓稠挂在肉上，出锅" },
  ],
  "10": [
    { id: "10-1", dishId: "10", stepNumber: 1, content: "鸭肉斩块，冷水下锅加料酒姜片焯水捞出" },
    { id: "10-2", dishId: "10", stepNumber: 2, content: "锅中放油，下姜片、蒜瓣、八角、桂皮、干辣椒炒香" },
    { id: "10-3", dishId: "10", stepNumber: 3, content: "下鸭肉煸炒至表面微黄，加生抽、老抽翻炒上色" },
    { id: "10-4", dishId: "10", stepNumber: 4, content: "倒入一罐啤酒，大火烧开转小火炖 35 分钟" },
    { id: "10-5", dishId: "10", stepNumber: 5, content: "大火收汁，加盐调味，撒葱花出锅" },
  ],
  "11": [
    { id: "11-1", dishId: "11", stepNumber: 1, content: "鲈鱼处理干净，两面各划三刀，抹少许盐和料酒腌制 10 分钟" },
    { id: "11-2", dishId: "11", stepNumber: 2, content: "盘中铺姜片和葱段，放上鲈鱼，鱼身上再放姜丝" },
    { id: "11-3", dishId: "11", stepNumber: 3, content: "蒸锅水开后放入，大火蒸 8-10 分钟" },
    { id: "11-4", dishId: "11", stepNumber: 4, content: "倒掉盘中蒸出的汁水，捡掉姜丝，铺上新鲜葱丝和红椒丝" },
    { id: "11-5", dishId: "11", stepNumber: 5, content: "淋蒸鱼豉油，烧热油浇在葱丝上激出香味" },
  ],
  "12": [
    { id: "12-1", dishId: "12", stepNumber: 1, content: "五花肉整块冷水下锅焯水，捞出切成 4cm 方块" },
    { id: "12-2", dishId: "12", stepNumber: 2, content: "砂锅底铺葱段和姜片，将肉块皮朝下码入锅中" },
    { id: "12-3", dishId: "12", stepNumber: 3, content: "加生抽、老抽、冰糖、料酒，加水没过肉面" },
    { id: "12-4", dishId: "12", stepNumber: 4, content: "大火烧开转微火炖 60 分钟，将肉翻面皮朝上" },
    { id: "12-5", dishId: "12", stepNumber: 5, content: "继续炖 30 分钟至酥烂，大火收汁即可" },
  ],

  // ===== 川湘辣味 =====
  "13": [
    { id: "13-1", dishId: "13", stepNumber: 1, content: "嫩豆腐切 2cm 小块，开水加盐焯烫 2 分钟捞出" },
    { id: "13-2", dishId: "13", stepNumber: 2, content: "锅中放油，下牛肉末炒至酥香，加豆瓣酱炒出红油" },
    { id: "13-3", dishId: "13", stepNumber: 3, content: "加姜蒜末、豆豉炒香，倒入适量清水" },
    { id: "13-4", dishId: "13", stepNumber: 4, content: "放入豆腐小火煮 5 分钟入味，分次淋入水淀粉勾芡" },
    { id: "13-5", dishId: "13", stepNumber: 5, content: "出锅撒花椒粉和葱花" },
  ],
  "14": [
    { id: "14-1", dishId: "14", stepNumber: 1, content: "鸡胸肉切丁，加料酒、生抽、淀粉腌制 15 分钟" },
    { id: "14-2", dishId: "14", stepNumber: 2, content: "调碗汁：生抽、醋、糖、淀粉、水混合备用" },
    { id: "14-3", dishId: "14", stepNumber: 3, content: "热锅凉油下鸡丁滑炒至变色盛出" },
    { id: "14-4", dishId: "14", stepNumber: 4, content: "锅中下干辣椒、花椒、姜蒜爆香，加豆瓣酱炒出红油" },
    { id: "14-5", dishId: "14", stepNumber: 5, content: "倒回鸡丁和花生米，淋入碗汁大火翻炒均匀" },
  ],
  "15": [
    { id: "15-1", dishId: "15", stepNumber: 1, content: "草鱼片成薄片，加料酒、盐、蛋清、淀粉上浆" },
    { id: "15-2", dishId: "15", stepNumber: 2, content: "锅中放油下干辣椒、花椒、豆瓣酱炒出红油" },
    { id: "15-3", dishId: "15", stepNumber: 3, content: "加水烧开，先下豆芽、青菜焯烫铺碗底" },
    { id: "15-4", dishId: "15", stepNumber: 4, content: "转小火逐片下入鱼片，煮至变白连汤倒入碗中" },
    { id: "15-5", dishId: "15", stepNumber: 5, content: "鱼片上撒干辣椒段、花椒、蒜末，浇热油激香" },
  ],
  "16": [
    { id: "16-1", dishId: "16", stepNumber: 1, content: "五花肉整块冷水下锅，加姜片料酒煮至筷子能扎透，捞出切薄片" },
    { id: "16-2", dishId: "16", stepNumber: 2, content: "蒜苗斜刀切段，蒜白和蒜叶分开" },
    { id: "16-3", dishId: "16", stepNumber: 3, content: "锅中少油，下五花肉片中火煸炒至卷曲出油" },
    { id: "16-4", dishId: "16", stepNumber: 4, content: "下豆瓣酱炒出红油，加姜片、豆豉、甜面酱炒香" },
    { id: "16-5", dishId: "16", stepNumber: 5, content: "先下蒜白翻炒，再下蒜叶，加少许糖翻匀出锅" },
  ],
  "17": [
    { id: "17-1", dishId: "17", stepNumber: 1, content: "五花肉或前腿肉切薄片，青红椒斜刀切圈，蒜拍碎" },
    { id: "17-2", dishId: "17", stepNumber: 2, content: "锅中少油，下肉片中火煸出油至微焦" },
    { id: "17-3", dishId: "17", stepNumber: 3, content: "下蒜、豆豉、豆瓣酱炒出香味" },
    { id: "17-4", dishId: "17", stepNumber: 4, content: "下青红椒大火翻炒至断生，加生抽、盐调味出锅" },
  ],
  "18": [
    { id: "18-1", dishId: "18", stepNumber: 1, content: "猪里脊切丝，加料酒、盐、淀粉腌制 10 分钟" },
    { id: "18-2", dishId: "18", stepNumber: 2, content: "木耳泡发切丝，胡萝卜、青椒切丝，葱姜蒜切末" },
    { id: "18-3", dishId: "18", stepNumber: 3, content: "调鱼香汁：生抽、醋、糖、淀粉、水按 2:2:2:1:3 混合" },
    { id: "18-4", dishId: "18", stepNumber: 4, content: "热锅凉油下肉丝滑炒至变色盛出" },
    { id: "18-5", dishId: "18", stepNumber: 5, content: "锅中下豆瓣酱炒出红油，加葱姜蒜爆香，下配菜翻炒，倒回肉丝，淋鱼香汁大火翻匀" },
  ],
  "19": [
    { id: "19-1", dishId: "19", stepNumber: 1, content: "鸡腿冷水下锅，加姜片、料酒、花椒煮 15 分钟，关火焖 10 分钟" },
    { id: "19-2", dishId: "19", stepNumber: 2, content: "捞出浸入冰水，完全冷却后斩块装盘" },
    { id: "19-3", dishId: "19", stepNumber: 3, content: "碗中加辣椒油、花椒油、生抽、醋、糖、蒜末、芝麻酱调成酱汁" },
    { id: "19-4", dishId: "19", stepNumber: 4, content: "酱汁浇在鸡块上，撒花生碎和葱花" },
  ],

  // ===== 下饭神器 =====
  "20": [
    { id: "20-1", dishId: "20", stepNumber: 1, content: "茄子切条，撒盐腌制 10 分钟杀出水分，挤干" },
    { id: "20-2", dishId: "20", stepNumber: 2, content: "肉末加料酒、生抽拌匀，姜蒜切末" },
    { id: "20-3", dishId: "20", stepNumber: 3, content: "锅中稍多油，下茄子条煎至表面金黄盛出" },
    { id: "20-4", dishId: "20", stepNumber: 4, content: "锅中余油下肉末炒散，加姜蒜末、豆瓣酱炒香" },
    { id: "20-5", dishId: "20", stepNumber: 5, content: "倒回茄子，加生抽、少许糖和水焖 2 分钟，收汁撒葱花" },
  ],
  "21": [
    { id: "21-1", dishId: "21", stepNumber: 1, content: "四季豆去筋掰段，沥干水分" },
    { id: "21-2", dishId: "21", stepNumber: 2, content: "锅中稍多油，下四季豆中火煸至表皮起皱，盛出" },
    { id: "21-3", dishId: "21", stepNumber: 3, content: "锅中留底油，下干辣椒段、花椒、蒜末爆香" },
    { id: "21-4", dishId: "21", stepNumber: 4, content: "倒回四季豆，加盐、生抽翻炒均匀出锅" },
  ],
  "22": [
    { id: "22-1", dishId: "22", stepNumber: 1, content: "老豆腐切 2cm 厚片，用厨房纸吸干表面水分" },
    { id: "22-2", dishId: "22", stepNumber: 2, content: "锅中放油，豆腐煎至两面金黄盛出" },
    { id: "22-3", dishId: "22", stepNumber: 3, content: "锅中留底油，下葱姜蒜爆香，加生抽、老抽、糖和半碗水" },
    { id: "22-4", dishId: "22", stepNumber: 4, content: "放入豆腐小火焖 5 分钟入味，淋水淀粉勾芡，撒葱花出锅" },
  ],
  "23": [
    { id: "23-1", dishId: "23", stepNumber: 1, content: "青椒去蒂去籽，用刀拍扁" },
    { id: "23-2", dishId: "23", stepNumber: 2, content: "调碗汁：生抽、醋、糖、盐、淀粉、水混合" },
    { id: "23-3", dishId: "23", stepNumber: 3, content: "锅中不放油，下青椒干煸至两面起虎皮斑，盛出" },
    { id: "23-4", dishId: "23", stepNumber: 4, content: "锅中放油，下蒜末爆香，倒回青椒，淋碗汁翻匀出锅" },
  ],
  "24": [
    { id: "24-1", dishId: "24", stepNumber: 1, content: "鸡翅洗净，两面各划两刀，冷水下锅焯水捞出" },
    { id: "24-2", dishId: "24", stepNumber: 2, content: "锅中放油，鸡翅煎至两面金黄" },
    { id: "24-3", dishId: "24", stepNumber: 3, content: "倒入一罐可乐，加生抽、老抽、姜片、料酒" },
    { id: "24-4", dishId: "24", stepNumber: 4, content: "大火烧开转中火煮 15 分钟，大火收汁至浓稠" },
  ],
  "25": [
    { id: "25-1", dishId: "25", stepNumber: 1, content: "牛肉逆纹切薄片，加料酒、生抽、淀粉、少许油腌制 15 分钟" },
    { id: "25-2", dishId: "25", stepNumber: 2, content: "洋葱切块，青红椒切菱形片，姜切片" },
    { id: "25-3", dishId: "25", stepNumber: 3, content: "热锅凉油，下牛肉片滑炒至变色盛出" },
    { id: "25-4", dishId: "25", stepNumber: 4, content: "锅中下姜片、洋葱炒香，倒回牛肉，加蚝油、生抽大火翻匀" },
  ],

  // ===== 清爽素菜 =====
  "26": [
    { id: "26-1", dishId: "26", stepNumber: 1, content: "时蔬洗净，蒜切末备用" },
    { id: "26-2", dishId: "26", stepNumber: 2, content: "热锅凉油，下蒜末爆香" },
    { id: "26-3", dishId: "26", stepNumber: 3, content: "放入时蔬大火快炒，加盐调味" },
    { id: "26-4", dishId: "26", stepNumber: 4, content: "断生即出锅，保持脆嫩口感" },
  ],
  "27": [
    { id: "27-1", dishId: "27", stepNumber: 1, content: "土豆、茄子去皮切滚刀块，青椒掰块" },
    { id: "27-2", dishId: "27", stepNumber: 2, content: "锅中稍多油，分别将土豆、茄子炸至表面金黄捞出" },
    { id: "27-3", dishId: "27", stepNumber: 3, content: "调碗汁：生抽、老抽、糖、盐、淀粉、水混合" },
    { id: "27-4", dishId: "27", stepNumber: 4, content: "锅中留底油，下蒜末爆香，倒入所有食材和碗汁大火翻匀" },
  ],
  "28": [
    { id: "28-1", dishId: "28", stepNumber: 1, content: "包菜手撕成小片，去掉硬梗，沥干水分" },
    { id: "28-2", dishId: "28", stepNumber: 2, content: "干辣椒剪段，蒜切片" },
    { id: "28-3", dishId: "28", stepNumber: 3, content: "热锅多油，下干辣椒和蒜片爆香，加少许花椒" },
    { id: "28-4", dishId: "28", stepNumber: 4, content: "大火倒入包菜快速翻炒至塌秧，加盐、生抽、醋翻匀出锅" },
  ],
  "29": [
    { id: "29-1", dishId: "29", stepNumber: 1, content: "菜心洗净，切去老根" },
    { id: "29-2", dishId: "29", stepNumber: 2, content: "锅中水烧开，加少许盐和几滴油" },
    { id: "29-3", dishId: "29", stepNumber: 3, content: "菜心放入焯烫 1-2 分钟至颜色翠绿，捞出沥干装盘" },
    { id: "29-4", dishId: "29", stepNumber: 4, content: "淋蒸鱼豉油或蚝油，放上蒜末，浇热油激香" },
  ],
  "30": [
    { id: "30-1", dishId: "30", stepNumber: 1, content: "豆芽洗净沥干，韭菜切段（可选），蒜切末" },
    { id: "30-2", dishId: "30", stepNumber: 2, content: "热锅凉油，下蒜末爆香" },
    { id: "30-3", dishId: "30", stepNumber: 3, content: "倒入豆芽大火快炒，加盐、少许醋" },
    { id: "30-4", dishId: "30", stepNumber: 4, content: "翻炒至豆芽断生即出锅，保持爽脆" },
  ],
  "31": [
    { id: "31-1", dishId: "31", stepNumber: 1, content: "生菜掰开洗净，沥干水分，蒜切末" },
    { id: "31-2", dishId: "31", stepNumber: 2, content: "锅中水烧开，加少许盐和油，生菜焯烫 10 秒捞出装盘" },
    { id: "31-3", dishId: "31", stepNumber: 3, content: "小碗中蚝油、生抽、糖、水调成酱汁" },
    { id: "31-4", dishId: "31", stepNumber: 4, content: "锅中少许油炒香蒜末，倒入酱汁煮开，浇在生菜上" },
  ],
  "32": [
    { id: "32-1", dishId: "32", stepNumber: 1, content: "干木耳温水泡发，去蒂洗净撕小朵，开水焯烫 2 分钟捞出过凉" },
    { id: "32-2", dishId: "32", stepNumber: 2, content: "蒜捣成泥，加生抽、醋、香油、辣椒油、糖、盐调成料汁" },
    { id: "32-3", dishId: "32", stepNumber: 3, content: "料汁浇在木耳上，撒香菜末和芝麻，拌匀即可" },
  ],

  // ===== 广式风味 =====
  "33": [
    { id: "33-1", dishId: "33", stepNumber: 1, content: "猪梅花肉切长条，用叉烧酱、生抽、老抽、蚝油、糖、料酒腌制过夜" },
    { id: "33-2", dishId: "33", stepNumber: 2, content: "烤箱预热 200°C，肉条放烤架上，下层烤盘垫锡纸接油" },
    { id: "33-3", dishId: "33", stepNumber: 3, content: "烤 20 分钟后取出刷一层腌料汁，翻面再烤 20 分钟" },
    { id: "33-4", dishId: "33", stepNumber: 4, content: "取出刷蜂蜜水，再烤 5 分钟至上色，取出切片装盘" },
  ],
  "34": [
    { id: "34-1", dishId: "34", stepNumber: 1, content: "整鸡处理干净，大锅水烧开加姜片、葱结、料酒" },
    { id: "34-2", dishId: "34", stepNumber: 2, content: "手提鸡头将鸡浸入沸水 10 秒，提起沥水，重复三次" },
    { id: "34-3", dishId: "34", stepNumber: 3, content: "将鸡完全浸入水中，水微沸煮 15 分钟，关火焖 20 分钟" },
    { id: "34-4", dishId: "34", stepNumber: 4, content: "捞出浸入冰水完全冷却，斩块装盘" },
    { id: "34-5", dishId: "34", stepNumber: 5, content: "姜蓉、葱末加盐，浇热油制成蘸料" },
  ],
  "35": [
    { id: "35-1", dishId: "35", stepNumber: 1, content: "排骨斩小段，用清水浸泡 20 分钟去血水，沥干" },
    { id: "35-2", dishId: "35", stepNumber: 2, content: "豆豉切碎，加蒜末、姜末、生抽、蚝油、料酒、糖、淀粉拌匀" },
    { id: "35-3", dishId: "35", stepNumber: 3, content: "排骨放入腌料中拌均匀，腌制 30 分钟" },
    { id: "35-4", dishId: "35", stepNumber: 4, content: "装盘放入蒸锅，水开后大火蒸 18 分钟，出锅撒葱花" },
  ],
  "36": [
    { id: "36-1", dishId: "36", stepNumber: 1, content: "大虾开背去虾线，粉丝温水泡软剪段" },
    { id: "36-2", dishId: "36", stepNumber: 2, content: "蒜切末，一半用油炸至金黄，与生蒜末混合" },
    { id: "36-3", dishId: "36", stepNumber: 3, content: "盘中铺粉丝，放上虾，铺上金银蒜，淋少许蒸鱼豉油" },
    { id: "36-4", dishId: "36", stepNumber: 4, content: "蒸锅水开后放入，大火蒸 6-8 分钟，出锅撒葱花，浇热油" },
  ],
  "37": [
    { id: "37-1", dishId: "37", stepNumber: 1, content: "猪里脊切块，加料酒、盐腌制，裹上蛋液和淀粉" },
    { id: "37-2", dishId: "37", stepNumber: 2, content: "六成油温炸至金黄捞出，升高油温复炸至酥脆" },
    { id: "37-3", dishId: "37", stepNumber: 3, content: "菠萝、青红椒切块备用" },
    { id: "37-4", dishId: "37", stepNumber: 4, content: "锅中少许油，加番茄酱、白醋、糖、水煮成糖醋汁" },
    { id: "37-5", dishId: "37", stepNumber: 5, content: "倒入所有食材快速翻匀，让每块肉裹上酱汁出锅" },
  ],
  "38": [
    { id: "38-1", dishId: "38", stepNumber: 1, content: "茄子切条，咸鱼切小粒，肉末加料酒拌匀" },
    { id: "38-2", dishId: "38", stepNumber: 2, content: "锅中多油，下茄子炸软捞出" },
    { id: "38-3", dishId: "38", stepNumber: 3, content: "砂锅中放油，下咸鱼粒和姜蒜末炒香，加肉末炒散" },
    { id: "38-4", dishId: "38", stepNumber: 4, content: "放入茄子，加生抽、蚝油、糖和少许水，小火煲 5 分钟，撒葱花" },
  ],

  // ===== 汤煲炖品 =====
  "39": [
    { id: "39-1", dishId: "39", stepNumber: 1, content: "牛腩切 3cm 块，冷水下锅焯水去血沫，捞出洗净" },
    { id: "39-2", dishId: "39", stepNumber: 2, content: "番茄切块，一半用油炒出番茄酱底" },
    { id: "39-3", dishId: "39", stepNumber: 3, content: "砂锅放油下姜片、葱段、八角炒香，加牛腩翻炒" },
    { id: "39-4", dishId: "39", stepNumber: 4, content: "加生抽、老抽、糖，倒入番茄酱和足量开水" },
    { id: "39-5", dishId: "39", stepNumber: 5, content: "大火烧开转小火炖 60 分钟，加剩余番茄块再炖 15 分钟，加盐出锅" },
  ],
  "40": [
    { id: "40-1", dishId: "40", stepNumber: 1, content: "草鱼片成薄片，加料酒、盐、蛋清、淀粉上浆腌制" },
    { id: "40-2", dishId: "40", stepNumber: 2, content: "酸菜切丝，锅中放油下酸菜炒干水分盛出" },
    { id: "40-3", dishId: "40", stepNumber: 3, content: "锅中放油下姜蒜、干辣椒、花椒爆香，加酸菜翻炒" },
    { id: "40-4", dishId: "40", stepNumber: 4, content: "加足量水烧开，先下鱼骨煮 3 分钟，再逐片下鱼片煮至变白" },
    { id: "40-5", dishId: "40", stepNumber: 5, content: "加盐、白胡椒粉调味，撒葱花，浇热油激香" },
  ],
  "41": [
    { id: "41-1", dishId: "41", stepNumber: 1, content: "排骨斩段焯水捞出，莲藕去皮切滚刀块" },
    { id: "41-2", dishId: "41", stepNumber: 2, content: "砂锅中放入排骨、莲藕、姜片、葱结" },
    { id: "41-3", dishId: "41", stepNumber: 3, content: "加足量开水，大火烧开撇去浮沫，转小火炖 45 分钟" },
    { id: "41-4", dishId: "41", stepNumber: 4, content: "加盐调味，继续炖 5 分钟，撒葱花即可" },
  ],
  "42": [
    { id: "42-1", dishId: "42", stepNumber: 1, content: "鸡块冷水下锅焯水捞出，干香菇温水泡发" },
    { id: "42-2", dishId: "42", stepNumber: 2, content: "砂锅中放入鸡块、香菇、姜片、红枣（可选）" },
    { id: "42-3", dishId: "42", stepNumber: 3, content: "加足量开水，大火烧开转小火炖 45 分钟" },
    { id: "42-4", dishId: "42", stepNumber: 4, content: "加盐调味，撒枸杞和葱花" },
  ],
  "43": [
    { id: "43-1", dishId: "43", stepNumber: 1, content: "肉末加姜末、葱末、盐、料酒、淀粉顺时针搅打上劲" },
    { id: "43-2", dishId: "43", stepNumber: 2, content: "冬瓜去皮去瓤切厚片" },
    { id: "43-3", dishId: "43", stepNumber: 3, content: "锅中加水烧开，放入冬瓜片煮 5 分钟" },
    { id: "43-4", dishId: "43", stepNumber: 4, content: "转小火，用虎口挤出肉丸落入锅中，煮至浮起" },
    { id: "43-5", dishId: "43", stepNumber: 5, content: "加盐、白胡椒粉调味，撒香菜出锅" },
  ],
  "44": [
    { id: "44-1", dishId: "44", stepNumber: 1, content: "牛腩切块焯水捞出，白萝卜去皮切滚刀块" },
    { id: "44-2", dishId: "44", stepNumber: 2, content: "锅中放油下姜片、八角、桂皮炒香，加牛腩翻炒" },
    { id: "44-3", dishId: "44", stepNumber: 3, content: "加生抽、老抽、料酒、冰糖，倒入开水没过牛腩" },
    { id: "44-4", dishId: "44", stepNumber: 4, content: "大火烧开转小火炖 60 分钟，加入萝卜继续炖 25 分钟" },
    { id: "44-5", dishId: "44", stepNumber: 5, content: "加盐调味，大火收至汤汁略浓，撒葱花出锅" },
  ],

  // ===== 凉拌卤味 =====
  "45": [
    { id: "45-1", dishId: "45", stepNumber: 1, content: "黄瓜洗净拍碎切段" },
    { id: "45-2", dishId: "45", stepNumber: 2, content: "蒜捣成泥，加盐、醋、生抽、香油、辣椒油调成料汁" },
    { id: "45-3", dishId: "45", stepNumber: 3, content: "将料汁浇在黄瓜上拌匀即可" },
  ],
  "46": [
    { id: "46-1", dishId: "46", stepNumber: 1, content: "五花肉整块冷水下锅，加姜片、料酒、花椒煮 20 分钟至熟透" },
    { id: "46-2", dishId: "46", stepNumber: 2, content: "捞出放凉切薄片，黄瓜切丝垫底，肉片码在上面" },
    { id: "46-3", dishId: "46", stepNumber: 3, content: "蒜捣成泥，加生抽、醋、糖、辣椒油、花椒油调成酱汁" },
    { id: "46-4", dishId: "46", stepNumber: 4, content: "酱汁浇在肉片上，撒葱花和白芝麻" },
  ],
  "47": [
    { id: "47-1", dishId: "47", stepNumber: 1, content: "牛腱子肉冷水浸泡 30 分钟去血水，冷水下锅焯水捞出" },
    { id: "47-2", dishId: "47", stepNumber: 2, content: "锅中加水，放八角、桂皮、香叶、花椒、干辣椒、姜片、生抽、老抽、冰糖、盐" },
    { id: "47-3", dishId: "47", stepNumber: 3, content: "放入牛腱子，大火烧开转小火卤 50 分钟" },
    { id: "47-4", dishId: "47", stepNumber: 4, content: "关火后在卤汁中浸泡 2 小时以上入味，捞出切片装盘" },
  ],
  "48": [
    { id: "48-1", dishId: "48", stepNumber: 1, content: "内酯豆腐倒扣入盘中，用刀划成方块" },
    { id: "48-2", dishId: "48", stepNumber: 2, content: "皮蛋剥壳切小丁，撒在豆腐上" },
    { id: "48-3", dishId: "48", stepNumber: 3, content: "小碗中加生抽、醋、香油、糖、蒜末调成酱汁" },
    { id: "48-4", dishId: "48", stepNumber: 4, content: "酱汁浇在皮蛋豆腐上，撒葱花和香菜" },
  ],
  "49": [
    { id: "49-1", dishId: "49", stepNumber: 1, content: "鸡爪剪去指甲，冷水下锅加姜片料酒焯水，捞出对半切开" },
    { id: "49-2", dishId: "49", stepNumber: 2, content: "鸡爪冷水下锅煮 15 分钟至熟，捞出过冰水" },
    { id: "49-3", dishId: "49", stepNumber: 3, content: "泡椒带汁倒入碗中，加白醋、凉白开、盐、糖、花椒、蒜片调成泡汁" },
    { id: "49-4", dishId: "49", stepNumber: 4, content: "鸡爪放入泡汁中，冷藏腌制 4 小时以上即可食用" },
  ],
  "50": [
    { id: "50-1", dishId: "50", stepNumber: 1, content: "花生米冷油下锅，小火慢炸至微微变色，捞出放凉" },
    { id: "50-2", dishId: "50", stepNumber: 2, content: "洋葱切小丁，青红椒切小丁" },
    { id: "50-3", dishId: "50", stepNumber: 3, content: "碗中加陈醋、生抽、糖、盐调成老醋汁" },
    { id: "50-4", dishId: "50", stepNumber: 4, content: "花生米、洋葱、青红椒混合，浇上老醋汁拌匀即可" },
  ],
}

export function getSteps(dishId: string): Step[] {
  return steps[dishId] ?? []
}
