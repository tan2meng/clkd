import { Stage, Article } from './types';
import { MapPin, FileText, Hammer, Utensils, Users, TrendingUp, Truck, BookOpen } from 'lucide-react';

export const STAGES: Stage[] = [
  {
    id: '1',
    title: '准备与定位',
    icon: BookOpen,
    description: '谋定而后动，明确品类与客群',
    tasks: [
      { id: '1-1', title: '确定创业初心与心理预期', completed: false },
      { id: '1-2', title: '准备启动资金 (预留6-10个月缓冲期)', completed: false },
      { id: '1-3', title: '选择品类 (红海中找蓝海)', completed: false },
      { id: '1-4', title: '明确目标客群 (做谁的生意)', completed: false },
      { id: '1-5', title: '分析竞争对手 (谁会替代你)', completed: false }
    ],
    guideContent: `
      <h3 class="font-bold text-lg mb-2">避坑指南：</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>不要带薪创业：</strong> 餐饮需要全心投入，兼职开店成功率极低。</li>
        <li><strong>资金储备：</strong> 餐饮是“四高一低”（房租、人工、原材料、税费高，利润低）行业。除了开店成本，必须预留至少6个月的运营资金。</li>
        <li><strong>品类选择：</strong> 不要盲目追逐网红品类。选择大众化、刚需、高频的品类（如快餐、简餐）更容易存活。</li>
        <li><strong>差异化：</strong> 即使做普通的品类（如面条），也要找到差异化竞争点（如“西贝”将普通莜面做成品牌）。</li>
      </ul>
    `
  },
  {
    id: '2',
    title: '选址攻略',
    icon: MapPin,
    description: '一步差三市，选址就是选客流',
    tasks: [
      { id: '2-1', title: '商圈调研 (商业区/办公区/社区)', completed: false },
      { id: '2-2', title: '计算人流量 (掐表数人流)', completed: false },
      { id: '2-3', title: '评估租金占比 (建议<15%)', completed: false },
      { id: '2-4', title: '检查工程条件 (排烟/水电/展示面)', completed: false },
      { id: '2-5', title: '签订租赁合同 (注意免租期)', completed: false }
    ],
    guideContent: `
      <h3 class="font-bold text-lg mb-2">选址核心法则：</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>不仅看地段，更要看匹配：</strong> 快餐选人流大的办公区/交通枢纽；正餐可选聚客力强的商场。</li>
        <li><strong>数据不说谎：</strong> 不要凭直觉。使用“掐表数人流”法，分早中晚三个时段统计有效人流。</li>
        <li><strong>聚客点：</strong> 找到商圈内的“聚客点”和“动线”，店铺要开在人流必经之路上，避免死角。</li>
        <li><strong>租金红线：</strong> 房租占比建议控制在营业额的10%-15%，超过20%极易亏损。</li>
        <li><strong>隐形坑：</strong> 签约前务必核实排烟管道、电压负荷、是否可办理营业执照等工程条件。</li>
      </ul>
    `
  },
  {
    id: '3',
    title: '装修设计',
    icon: Hammer,
    description: '不仅仅是好看，核心是效率',
    tasks: [
      { id: '3-1', title: '规划后厨动线 (生熟分开/出餐快)', completed: false },
      { id: '3-2', title: '设计前厅动线 (不交叉/服务快)', completed: false },
      { id: '3-3', title: '门头设计 (3秒内看懂卖什么)', completed: false },
      { id: '3-4', title: '灯光设计 (暖色调增食欲)', completed: false },
      { id: '3-5', title: '软装与家具采购', completed: false }
    ],
    guideContent: `
      <h3 class="font-bold text-lg mb-2">装修避坑指南：</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>门头即广告：</strong> 门头必须包含“品牌名+品类名”。例如“阿牛·水饺”，不要只写“阿牛”。</li>
        <li><strong>动线设计：</strong> 动线设计是效率革命。避免顾客动线与服务动线交叉。服务员少走一步，效率就高一分。</li>
        <li><strong>灯光魔法：</strong> 餐厅灯光重点照在桌面上，让菜品看起来更有食欲（显色性要好）。</li>
        <li><strong>轻装修重装饰：</strong> 硬装越简单越好，通过软装、灯光、海报来营造氛围，便于后期低成本迭代。</li>
      </ul>
    `
  },
  {
    id: '4',
    title: '菜单与产品',
    icon: Utensils,
    description: '菜单是餐厅的盈利模型',
    tasks: [
      { id: '4-1', title: '确定SKU数量 (做减法)', completed: false },
      { id: '4-2', title: '设计菜单结构 (引流/利润/形象菜)', completed: false },
      { id: '4-3', title: '产品定价 (锚定效应)', completed: false },
      { id: '4-4', title: '制作标准作业程序 (SOP)', completed: false },
      { id: '4-5', title: '内测菜品口味', completed: false }
    ],
    guideContent: `
      <h3 class="font-bold text-lg mb-2">菜单设计法则：</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>少即是多：</strong> 不要试图讨好所有人。产品越少，备料越少，损耗越低，品质越稳。参考“喜家德”只卖几种水饺。</li>
        <li><strong>菜单结构：</strong> 菜单应包含：<br/>- <strong>引流产品：</strong> 低价高频，吸引进店。<br/>- <strong>利润产品：</strong> 独特高毛利，赚钱主力。<br/>- <strong>形象产品：</strong> 树立品牌调性。</li>
        <li><strong>视觉引导：</strong> 利润高的菜品放在菜单的“黄金视点”区域，配大图。</li>
      </ul>
    `
  },
  {
    id: '5',
    title: '人员与团队',
    icon: Users,
    description: '人是餐厅永恒的主语',
    tasks: [
      { id: '5-1', title: '制定薪酬与激励制度', completed: false },
      { id: '5-2', title: '员工招聘 (价值观匹配)', completed: false },
      { id: '5-3', title: '全员培训 (服务/操作SOP)', completed: false },
      { id: '5-4', title: '办理健康证', completed: false },
      { id: '5-5', title: '合理排班 (利用兼职)', completed: false }
    ],
    guideContent: `
      <h3 class="font-bold text-lg mb-2">人力管理心得：</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>人效为王：</strong> 用更少的人做更多的事。通过优化动线和简化流程来提升人效，而不是单纯压榨员工。</li>
        <li><strong>灵活用工：</strong> 餐饮有明显的高峰期和低谷期。合理使用“小时工”应对高峰期，降低固定人力成本。</li>
        <li><strong>激励机制：</strong> 钱给到位，心才不委屈。设置合理的绩效考核（如翻台提成、办卡提成），让员工为自己干。</li>
      </ul>
    `
  },
  {
    id: '6',
    title: '营销推广',
    icon: TrendingUp,
    description: '让顾客知道你，爱上你',
    tasks: [
      { id: '6-1', title: '大众点评店铺入驻与装修', completed: false },
      { id: '6-2', title: '设计开业活动 (优惠券/霸王餐)', completed: false },
      { id: '6-3', title: '搭建私域流量 (微信群/企微)', completed: false },
      { id: '6-4', title: '外卖平台上线准备', completed: false }
    ],
    guideContent: `
      <h3 class="font-bold text-lg mb-2">营销实战技巧：</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>大众点评：</strong> 必须重视！这是线上的门面。做好“店铺装修”，鼓励真实好评。</li>
        <li><strong>开业活动：</strong> 不要直接打折，打折伤品牌。建议“充值送”、“买一送一券（下次用）”，目的是锁客和复购。</li>
        <li><strong>顾客体验：</strong> 最好的营销是服务。关注“峰终定律”：给顾客留下印象最深的高峰体验和结束时的美好回忆（如送小礼物）。</li>
      </ul>
    `
  },
  {
    id: '7',
    title: '供应链与成本',
    icon: Truck,
    description: '成本控制是利润的来源',
    tasks: [
      { id: '7-1', title: '筛选供应商 (多方比价)', completed: false },
      { id: '7-2', title: '建立验收标准 (拒绝烂菜)', completed: false },
      { id: '7-3', title: '每日盘点制度', completed: false },
      { id: '7-4', title: '厨房浪费管理 (边角料利用)', completed: false }
    ],
    guideContent: `
      <h3 class="font-bold text-lg mb-2">成本管控要点：</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>采购黑洞：</strong> 采购是贪腐重灾区。老板应亲自谈价，或实行“采价分离”。</li>
        <li><strong>先进先出：</strong> 严格执行库存管理“先进先出”原则，避免食材过期浪费。</li>
        <li><strong>验收标准：</strong> 必须建立严格的收货标准（重量、新鲜度、规格），不要讲人情。</li>
      </ul>
    `
  }
];

// Pinned Articles
const PINNED_ARTICLES: Article[] = [
  {
    id: 'k1',
    category: '选址',
    title: '选址的三大影响因素',
    summary: '商圈类型、商圈经营情况、在商圈所处位置是影响人流量的核心。',
    content: `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">选址是餐饮的生死线。所谓三大影响因素，指的是宏观的<strong>商圈属性</strong>、中观的<strong>竞争环境</strong>以及微观的<strong>具体点位</strong>。这三个维度像漏斗一样层层筛选，最终决定了你店铺的自然进店流量。</p>
      
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>商圈类型（决定客群）：</strong>
          <ul class="list-[circle] pl-5 mt-1 text-secondary/70">
            <li><em>商业区（Shopping Mall）：</em>流动客为主，周末爆满周一死寂。适合品牌感强、高客单价的正餐。</li>
            <li><em>办公区（写字楼）：</em>刚需午餐，周一至周五中午生意好。追求出餐快（&lt;10分钟）和性价比。</li>
            <li><em>社区（住宅区）：</em>家庭客，生意稳定，晚市和周末好。适合家常菜、火锅、早餐。</li>
          </ul>
        </li>
        <li><strong>经营情况（决定存活）：</strong>观察邻居。如果你想开奶茶店，看看旁边蜜雪冰城排不排队。如果大牌都活得好，说明这里市场大。</li>
        <li><strong>具体位置（决定进店率）：</strong>
          <ul class="list-[circle] pl-5 mt-1 text-secondary/70">
            <li><em>金角：</em>路口转角，双面展示，曝光率最高。</li>
            <li><em>银边：</em>主通道两侧，人流必经。</li>
            <li><em>草肚皮：</em>死胡同、深处、被遮挡处，租金低但必死无疑。</li>
          </ul>
        </li>
      </ul>

      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>小李想开一家“现炒快餐”，选址在某高档商场4楼的角落（草肚皮）。<br/><strong>结果：</strong>商场租金高，但快餐主要做刚需，逛商场的人更愿意吃大餐。加上位置偏僻，不仅没白领来吃（太远），也没逛街客来吃（看不上）。半年倒闭。<br/><strong>教训：</strong>快餐首选写字楼底商或人流密集的一楼街边（银边）。</p>
    `,
    isPinned: true
  },
  {
    id: 'k2',
    category: '运营',
    title: 'PPFC方程分析法',
    summary: '如何科学地拆解和提升营业额？',
    content: `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">许多老板觉得生意不好只能“干着急”。PPFC方程是将营业额科学拆解的公式：<strong>营业额 = 人口(People) × 渗透率(Penetration) × 频次(Frequency) × 客单价(Check)</strong>。通过这个公式，你可以精准定位问题出在哪一个环节。</p>

      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>P (商圈人口)：</strong>这是天花板。选址定生死，后期很难改。如果P太小，只能通过外卖扩大半径。</li>
        <li><strong>P (渗透率/进店率)：</strong>如果门口人很多，进店很少。
          <br/><span class="text-secondary/70">👉 动作：优化门头，挂红灯笼，放音乐，安排员工在门口热情招呼，制造排队假象。</span></li>
        <li><strong>F (复购频次)：</strong>如果客人来一次就不来了。
          <br/><span class="text-secondary/70">👉 动作：检查产品口味是否稳定，服务是否怠慢。建立会员群，周三会员日发券唤醒。</span></li>
        <li><strong>C (客单价)：</strong>如果人很多，但营业额上不去。
          <br/><span class="text-secondary/70">👉 动作：设计套餐（关联销售），服务员话术引导（“要不要加个蛋？”），调整菜单价格带。</span></li>
      </ul>

      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>一家面馆日均流水2000元，老板想提升到3000元。<br/><strong>分析：</strong>每天路过10000人，进店只有100人（渗透率1%）。<br/><strong>对策：</strong>他在门口支起透明玻璃房煮面，香气四溢，并挂上“加面免费”的大招牌。进店人数涨到160人，虽然客单价略降，但总营业额突破3200元。</p>
    `,
    isPinned: true
  },
  {
    id: 'k3',
    category: '产品',
    title: '菜单工程与黄金比例',
    summary: '菜单设计如何引导顾客点餐？',
    content: `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">菜单不是简单的价目表，而是餐厅唯一的“无声推销员”。好的菜单设计利用心理学，能引导顾客点高毛利的产品，从而不知不觉提升客单价和利润率。</p>

      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>黄金视点：</strong>人的视线通常落在单页菜单的<strong>右上角</strong>或双页菜单的<strong>右上区域</strong>。
          <br/><span class="text-secondary/70">👉 动作：把你最想卖的“明星产品”（高毛利+高颜值）放这里，配最大的图。</span></li>
        <li><strong>价格锚点：</strong>顾客不知道什么是便宜，只知道“对比”。
          <br/><span class="text-secondary/70">👉 动作：设置一个98元的“至尊牛排”，旁边放一个68元的“招牌牛排”。大部分人会觉得68元很划算，从而下单。</span></li>
        <li><strong>去除货币符号：</strong>研究表明，看到“¥”符号会唤起花钱的痛苦。
          <br/><span class="text-secondary/70">👉 动作：直接写“28”，不要写“¥28.00”。</span></li>
      </ul>

      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>某火锅店原本毛利只有50%，调整菜单后毛利升至60%。<br/><strong>操作：</strong>他们把低毛利的冻丸子缩小图片放在角落；把高毛利的自制虾滑（明星产品）放在第一页正中间，用了半版篇幅介绍“纯手工敲打100次”，并组合成双拼。顾客点单率从10%提升到60%。</p>
    `,
    isPinned: true
  }
];

// Content Map for auto-generated articles
const contentMap: Record<string, string> = {
    '1-1': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">创业是一场长跑，"初心"是你遇到困难时不放弃的理由，而"心理预期"是你对风险的承受底线。很多人死在"期望过高"上，以为开店就是数钱，结果前三个月没生意就心态崩了。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>灵魂三问：</strong>写在纸上：我为什么做餐饮？（为了赚钱/情怀/生存？）如果亏光了这笔钱，由于影响生活？我能接受每天工作14小时，全年无休吗？</li>
        <li><strong>预期管理：</strong>按"最坏情况"做打算。假设前6个月一分钱不赚，每天还要赔房租和人工，你能坚持多久？</li>
        <li><strong>家庭沟通：</strong>必须获得家人的支持，否则后续的亏损和忙碌会成为家庭矛盾的导火索。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>程序员小张觉得上班累，想开咖啡馆"享受生活"。投入40万装修。结果开业后发现，每天要洗几百个杯子，扫厕所，还要对刁钻的客人赔笑脸。第2个月因为受不了身体劳累和亏损焦虑，低价转让，亏损25万离场。</p>
    `,
    '1-2': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">启动资金不仅仅是开店的那一笔钱，更包括"活下去"的钱。餐饮行业现金流断裂是倒闭的第一大原因。预留缓冲期是为了在养店期（通常3-6个月）有粮草。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>资金拆分表：</strong>
           <br/>- 硬投入：转让费 + 押一付三 + 装修 + 设备（占总资金60%）
           <br/>- 软投入：首批食材 + 办证 + 营销推广（占20%）
           <br/>- 备用金：预留至少6个月的（员工工资 + 房租）。这是保命钱！（占20%）</li>
        <li><strong>止损线：</strong>设定一个绝对亏损额度（如亏完30万必须关店），到了红线坚决止损，不要卖房卖车去填无底洞。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>老王凑了50万开火锅店，装修豪气花了45万，只留5万进货。结果开业第一个月生意冷清，每个月还要发3万工资交2万房租。第2个月就没钱买菜了，只能借网贷，最终因资金链断裂倒闭。</p>
    `,
    '1-3': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">选择品类就是选择赛道。"红海中找蓝海"的意思是，在需求量大的大众品类里，找到一个差异化的切入点。不要做没人吃的小众品类（教育市场成本太高），也不要和巨头硬碰硬。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>标准化原则：</strong>初次创业，尽量避开严重依赖厨师手艺的品类（如正宗川菜热炒）。选择去厨师化、容易SOP的品类（如火锅、串串、焖锅、炸物、粉面）。</li>
        <li><strong>微创新：</strong>
           <br/>- 呈现方式：如把大份酸菜鱼改成"单人份酸菜鱼"。
           <br/>- 食材升级：如把普通水饺升级为"现杀活虾水饺"。</li>
        <li><strong>高频刚需：</strong>优先选一日三餐都能吃的，复购率高。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>太二酸菜鱼。酸菜鱼本是红海，但太二通过"只做一种鱼"、"规定四人座"、"比鱼好吃的酸菜"等差异化定位，把一道家常菜做成了现象级品牌。</p>
    `,
    '1-4': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">很多老板的错误是"我想做所有人的生意"。这是不可能的。必须精准画像：你的核心顾客是谁？他们多少岁？为什么来吃？（为了快？为了聚餐？为了便宜？）</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>画像描述：</strong>
           <br/>- 比如：写字楼白领女性，25-35岁，注重卫生和卡路里，客单价30-40元。
           <br/>- 比如：社区大爷大妈，50-70岁，注重便宜实惠，口味偏软烂，客单价15元。</li>
        <li><strong>场景匹配：</strong>如果是白领午餐，桌椅要密，出餐要快，必须有手机点餐。如果是商务宴请，必须有包间，隔音要好，服务要从容。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>某沙拉店开在大学城。老板认为大学生时尚，爱吃沙拉。结果大学生虽然喜欢时尚，但更在乎"吃饱"和"便宜"（沙拉均价40且吃不饱）。最终沙拉店倒闭，换成了重油重辣的麻辣香锅，生意火爆。</p>
    `,
    '1-5': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">竞争对手不一定是卖同样东西的，而是"替代方案"。卖凉皮的对手可能是隔壁的肉夹馍，因为顾客的肚子只有一个。分析对手是为了找到他的弱点，把它变成你的机会。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>卧底调研：</strong>去方圆1公里内生意最好的3家店和最差的3家店吃。</li>
        <li><strong>记录清单：</strong>
           <br/>- 他们的招牌菜是什么？价格多少？
           <br/>- 出餐速度几分钟？
           <br/>- 服务员怎么打招呼？
           <br/>- 差评主要集中在哪里？（这是你的机会！）</li>
        <li><strong>差异化进攻：</strong>如果对手慢，你就做快；如果对手脏，你就做明档亮灶；如果对手贵，你就做极致性价比。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>巴奴毛肚火锅。面对海底捞极致的"服务"，巴奴没有硬拼服务，而是打出"产品主义"的旗号，强调"服务不是巴奴的特色，毛肚和菌汤才是"，成功在火锅红海中杀出重围，收割了一批更在乎味道的顾客。</p>
    `,
    
    '2-1': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">商圈调研是选址的第一步，目的是确认"这里有没有我的客户"。不同的商圈生态完全不同，如同热带雨林和沙漠的区别。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>分时段蹲点：</strong>必须覆盖全时段。
           <br/>- 工作日午餐（看刚需白领量）
           <br/>- 工作日晚餐（看加班/聚餐量）
           <br/>- 周末全天（看家庭/逛街客量）</li>
        <li><strong>看外卖单量：</strong>打开外卖APP，看附近商家月售。如果普遍月售9999+，说明外卖需求极大；如果普遍几百单，说明外卖不好做。</li>
        <li><strong>看垃圾桶：</strong>去附近的写字楼或小区翻翻垃圾桶（虽然恶心但有效），看看大家平时都吃什么外卖盒子。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>有人想在老旧小区楼下开高档日料。调研发现，小区住户多为退休老人，平时自己买菜做饭，极少在外消费高价餐饮。虽然人多，但不是"有效客户"。最终放弃。</p>
    `,
    '2-2': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">人流量 ≠ 客流量。路过的人不一定会进店。我们需要计算的是"目标客群的有效流量"。数据是最不会骗人的。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>工具准备：</strong>计数器（或手机APP）、记录本。</li>
        <li><strong>掐表法：</strong>在预定店铺门口，分别在早（8:00-9:00）、中（11:30-13:00）、晚（17:30-19:30）三个时段，连续记录15分钟路过人数，然后乘以4估算小时流量。</li>
        <li><strong>计算捕获率：</strong>观察旁边类似店铺。路过100人，有几个人进去？通常快餐捕获率在3%-5%左右。用这个比例反推你的预估营业额。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>某店址门口每天路过5万人，看起来位置极佳。但仔细调研发现，这些人都是从地铁站匆匆赶去上班的，中间隔着栏杆过不来，或者根本没时间停下来吃早餐。这种流量叫"垃圾流量"。</p>
    `,
    '2-3': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">房租是餐饮三座大山之一（房租、人工、食材）。房租占比直接决定了你的盈利难度。行业公认的警戒线是营业额的15%-20%。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>倒推法：</strong>假设房租是2万/月。按15%占比算，你月营业额必须做到 20000 ÷ 0.15 = 13.3万元。
           <br/>- 日营业额需：4400元。
           <br/>- 若客单价20元，每天需卖：220碗面。
           <br/>- 问自己：这个位置每天能进220人吗？如果很难，果断放弃。</li>
        <li><strong>不要迷信好位置：</strong>如果位置极好但租金极高（占比超30%），那你是在给房东打工。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>某网红街铺租金5万/月。老板觉得人多肯定能赚。结果每月卖20万（生意很好了），房租占25%，人工占25%，食材占40%，水电税费10%。算下来净利润是0。白忙活一年。</p>
    `,
    '2-4': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">"先天不足"的铺子，后期花多少钱都改不了。工程条件包括：排烟、电力、上下水、隔油池、消防等。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>排烟：</strong>最关键！居民楼下通常严禁做产生油烟的重餐饮。必须确认是否有专用烟道，或者是否允许安装净化器直排。否则一投诉就关门。</li>
        <li><strong>电力：</strong>餐饮设备全是电老虎（烤箱、空调、电磁炉）。一般小店需要30KW-50KW。如果电容不够，增容费极贵（几万到十几万）。</li>
        <li><strong>上下水：</strong>进水管径够不够？下水是否有隔油池？（环保局必查）。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>某老板租了一个便宜铺子做烧烤。装修好开业第一天，因为没有专用烟道，油烟飘到楼上居民家。居民报警，环保局上门查封。整改不了（硬伤），只能关店，亏损几十万装修费。</p>
    `,
    '2-5': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">租赁合同是保护你的最后一道屏障。很多房东口头承诺很好，但签合同时全是坑。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>免租期：</strong>一定要争取装修免租期，一般15-45天。这期间不算房租。</li>
        <li><strong>递增条款：</strong>明确第二年、第三年涨不涨房租，涨多少（通常5%-8%）。不要签"随行就市"，那是坑。</li>
        <li><strong>转租权：</strong>必须在合同里写明"允许转租"。万一你生意不好想撤退，如果不能转租，押金和转让费就全泡汤了；如果能转租，还能回血。</li>
        <li><strong>拆迁赔偿：</strong>明确若遇拆迁，装修赔偿归谁。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>小张租铺子没看清合同写着"禁止转租"。经营一年想回老家，找到了下家愿意出10万转让费接手。结果房东拿出合同说不行，要么继续租，要么直接走人（没转让费）。小张白白损失10万。</p>
    `,

    '3-1': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">后厨动线就是"厨房里的高速公路"。设计原则是：生进熟出，动线最短，不走回头路。好的动线能减少厨师30%的无效步数，直接提升出餐速度。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>流程布局：</strong>
           <br/>收货区 ➝ 冰箱（储存） ➝ 粗加工（洗/削） ➝ 切配台（切） ➝ 灶台（炒/煮） ➝ 出餐台 ➝ 传菜口。这条线必须是顺的。</li>
        <li><strong>黄金三角：</strong>水池、冰箱、案板三者距离不要超过1.2米，转身就能拿到，不用来回跑。</li>
        <li><strong>立体空间：</strong>墙上装层架放调料和盘子，利用垂直空间，释放台面。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>某店厨房设计不合理，冰箱在最里面，灶台在最外面。厨师每拿一次菜都要穿过整个厨房，一来一回浪费10秒。高峰期一晚上跑几百趟，出餐慢了半小时，被客人骂死。</p>
    `,
    '3-2': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">前厅动线涉及三类人：顾客、服务员、外卖员。原则是：互不干扰，高效流通。避免"人撞人"。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>回字形动线：</strong>最经典的布局，形成环路，不走回头路。</li>
        <li><strong>功能区前置：</strong>外卖取餐区要靠近门口，不要让外卖员穿过整个大厅去取餐（影响堂食体验）。</li>
        <li><strong>自助区：</strong>自助茶水/调料台放在动线节点上，但不要挡路。</li>
        <li><strong>收银台：</strong>快餐店收银在门口（先付后吃）；正餐店收银在动线末端（吃完再付）。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>一家米粉店，收银台设在最里面。顾客点餐要挤进去，取餐又要挤出来，外卖员也往里冲，门口经常堵死。后来把收银和出餐改到门口，效率提升一倍。</p>
    `,
    '3-3': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">门头是餐厅最贵的广告位。顾客决定进店只需要3秒。门头的作用是告诉路人：我是谁？我卖什么？我有什么特色？</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>公式：</strong>品牌名（大字） + 品类名（更大字） + 利益点（口号）。
           <br/>例如：老张家（品牌） · 手工水饺（品类） · 现包现煮更健康（利益点）。</li>
        <li><strong>避坑：</strong>不要用繁体字、生僻字、艺术字。不要只写"老张家"，鬼知道你是卖衣服的还是卖鞋的。</li>
        <li><strong>亮：</strong>晚上灯光一定要比隔壁亮。人在本能上具有趋光性。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>一家店名叫"那年花开"，装修文艺。路人以为是花店或咖啡馆，不敢进。其实它是卖烤鱼的。后来改名叫"那年花开·炭火烤鱼"，并在门头挂了大大的烤鱼图片，进店率立马翻倍。</p>
    `,
    '3-4': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">灯光是最好的美颜滤镜。合适的灯光能让30元的菜看起来像50元，能调节顾客的用餐速度。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>色温：</strong>餐饮建议用<strong>3000K-3500K暖黄光</strong>。暖光让肉类看起来更鲜红，食欲感强。千万别用办公室那种6000K惨白光，像食堂或医院。</li>
        <li><strong>显色性(Ra)：</strong>买灯泡要看Ra值，必须>90。Ra越高，颜色还原越真实。</li>
        <li><strong>明暗对比：</strong>桌面要亮（聚焦食物），过道和天花板要暗（营造私密感）。这种"天暗地亮"的氛围最高级。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>西贝莜面村的灯光设计就是典型。不管环境多暗，每张桌子上方必有一束强光直射桌面，把菜照得金光闪闪，拍照特别好看，这就是"自带滤镜"。</p>
    `,
    '3-5': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">软装决定氛围，桌椅决定翻台率。不要为了好看而买不实用的家具。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>快餐店：</strong>椅子要硬，甚至没有靠背。桌子要小。目的是让客人吃完赶紧走，提高翻台率。</li>
        <li><strong>正餐/咖啡：</strong>椅子要软，有扶手。让客人舒服地多坐一会，多点两杯喝的。</li>
        <li><strong>拼桌灵活：</strong>尽量买2人方桌。来4个人拼起来，来2个人拆开。不要买大圆桌（除非你有大包间），否则一个人占一桌你亏死。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>麦当劳的椅子设计非常讲究人体工学，坐久了屁股会微痛，潜台词是"吃完快走"。而星巴克的沙发很软，潜台词是"坐下来聊聊"。</p>
    `,

    '4-1': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">SKU（库存量单位）就是你菜单上的菜品数量。新手最爱犯的错是"贪多"。菜品越多，备货越难，损耗越大，后厨越乱，出餐越慢。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>做减法：</strong>小店（60平以内）SKU控制在20-30个最好。</li>
        <li><strong>一材多用：</strong>一种食材尽量能做成3道菜。比如牛肉，可以做牛肉面、凉拌牛肉、牛肉炒饭。这样即使某道菜没卖好，牛肉也能在其他菜里消耗掉，减少浪费。</li>
        <li><strong>聚焦爆款：</strong>把精力集中在1-3个招牌菜上，做到极致好吃。其他都是陪衬。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>喜家德水饺，菜单上只有5-6种馅的水饺，几道凉菜。正是因为品种少，才能保证每一种都是现包的，品质极高，且出餐效率极高。</p>
    `,
    '4-2': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">菜单结构决定了你的利润结构。好的菜单由三个角色组成：引流款、利润款、形象款。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>引流款（10%）：</strong>价格低，大家都知道价格的产品（如可乐、酸辣土豆丝）。作用是让人觉得"这家店不贵"，吸引进店。</li>
        <li><strong>利润款（70%）：</strong>有特色，外面不好比价，毛利高（65%以上）。这是你真正赚钱的菜。</li>
        <li><strong>形象款（20%）：</strong>很贵，食材很好（如鲍鱼、和牛）。点的人少，但能提升店铺档次。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>外婆家的"3元麻婆豆腐"就是经典的引流款。虽然这道菜亏本，但每个人来了必点，觉得超值。然后再点其他的利润菜（如茶香鸡），最后外婆家赚得盆满钵满。</p>
    `,
    '4-3': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">定价是心理博弈。定价定天下，直接决定了你的客群和利润。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>尾数法则：</strong>19元和20元只差1块钱，但在顾客心里是"10几块"和"20块"的区别。多用8、9结尾。</li>
        <li><strong>阶梯定价：</strong>同一种产品设置高、中、低配。
           <br/>- 小份 18元（引流）
           <br/>- 中份 25元（主推）
           <br/>- 大份 32元（锚点）
           <br/>大部分人会选择中份（折中效应）。</li>
        <li><strong>成本倒推：</strong>售价 = 食材成本 ÷ 预期食材成本率（一般30%-35%）。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>星巴克的咖啡杯型设置。中杯(Tall)、大杯(Grande)、超大杯(Venti)。店员永远问你"中杯吗？"其实指的是Grande。通过这种命名和价差引导，让你觉得买大杯最划算。</p>
    `,
    '4-4': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">SOP（标准作业程序）是去厨师化的核心。没有SOP，今天咸明天淡，顾客就流失了。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>量化一切：</strong>不要写"少许"、"适量"。要写"盐 3克"、"油 15毫升"、"炸 3分20秒"。</li>
        <li><strong>配方卡：</strong>把每道菜的做法拍成图，贴在厨房墙上。新员工照着做就能达到80分。</li>
        <li><strong>料包化：</strong>核心酱汁提前调制成大桶，或者找工厂代工。厨师只需要炒熟食材+淋一勺酱。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>肯德基的炸鸡。由于严格规定了油温、裹粉次数、炸制时间，你在全世界吃到的肯德基味道都是一样的。这就是SOP的力量。</p>
    `,
    '4-5': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">盲目自信是老板的大忌。你觉得好吃不重要，顾客觉得好吃才重要。内测就是为了在正式开业前"排雷"。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>盲测：</strong>把你的产品和竞品买回来，去掉包装，编号，找一群朋友盲吃投票。如果你的得分不是最高，继续改。</li>
        <li><strong>压力测试：</strong>邀请亲朋好友来免费吃，模拟满座的高峰期。看看厨房会不会崩，上菜会不会乱。</li>
        <li><strong>收集真话：</strong>不要听"挺好吃的"，要问"如果这道菜卖30元，你愿意掏钱吗？"</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>某老板自创了一道"榴莲红烧肉"，觉得自己很有创意。内测时朋友们碍于面子都说"有特色"。结果开业后根本没人点，偶尔点了也吃不完。如果内测时能得到真实反馈，就不会浪费备料了。</p>
    `,

    '5-1': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">薪酬制度决定了员工是"为你干"还是"为自己干"。死工资养懒人。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>底薪+提成：</strong>
           <br/>- 服务员：底薪 + 办卡提成 + 菜品推销提成 + 好评奖励。
           <br/>- 厨师：底薪 + 出菜量提成 + 毛利管控奖（省下来的就是赚的）。</li>
        <li><strong>超额分红：</strong>设定一个盈亏平衡点（如月销10万）。超过10万的部分，拿出10%分给全员。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>海底捞的"计件工资"。服务员端一盘菜几毛钱，洗一个碗几分钱。多劳多得。所以海底捞的服务员都会抢着干活，甚至跑着干活，根本不需要店长盯着。</p>
    `,
    '5-2': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">餐饮是苦力活也是情绪活。技能可以教，但性格和价值观很难改。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>看性格：</strong>前厅一定要招爱笑的、喜欢说话的。内向的人做服务员很痛苦。</li>
        <li><strong>看手脚：</strong>试工3天。看他眼里有没有活（地上有垃圾会不会捡），动作麻不麻利。</li>
        <li><strong>不要迷信经验：</strong>有时一张白纸比老油条好带。老油条坏毛病多，很难管理。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>胖东来招聘不看学历，看"利他心"。面试时会故意弄倒一把扫帚，看应聘者会不会扶起来。这种细节往往能看出一个人的服务意识。</p>
    `,
    '5-3': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">没有培训就上岗，等于赶鸭子上架，是在得罪顾客。培训的成本很贵，但不培训的代价更贵。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>情景演练：</strong>怎么迎宾？怎么倒水？客人说菜咸了怎么回答？不仅要背话术，还要两个人一组模拟演练。</li>
        <li><strong>通关考核：</strong>每项技能（如铺台布、点单）都要考核，合格了才能上岗。</li>
        <li><strong>每日例会：</strong>每天开工前10分钟，强调昨天的问题，表扬昨天做得好的人。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>很多店服务员遇到顾客投诉菜里有头发，第一反应是"不可能，我们厨房戴帽子的"，这就引发了争吵。经过培训的服务员会先说："对不起，是我们的错，马上给您换一份"，先平息情绪再解决问题。</p>
    `,
    '5-4': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">健康证是餐饮从业的法律红线，也是食品安全的底线。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>全员必须：</strong>包括老板自己、兼职、洗碗阿姨，只要进厨房或接触食物，必须有证。</li>
        <li><strong>提前办理：</strong>去当地疾控中心或指定医院。一般需要体检，几天后拿证。不要等开业了才去办。</li>
        <li><strong>公示：</strong>把健康证复印件贴在店里显眼位置，让顾客放心，也能应付食药监检查。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>某店被举报，食药监突击检查，发现一名兼职大学生没有健康证。直接罚款5000元，并责令停业整顿。因小失大。</p>
    `,
    '5-5': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">餐饮的忙闲不均非常明显（中午忙死，下午闲死）。合理排班能省下一大笔人力成本。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>AB班制：</strong>A班上早晚高峰，中间休息；B班上中班。</li>
        <li><strong>钟点工：</strong>最忙的那2个小时（11:30-13:30），聘请附近的退休阿姨或大学生兼职，专门负责收台、洗碗、传菜。技术含量低，成本低。</li>
        <li><strong>闲时做准备：</strong>下午闲的时候，不要让员工玩手机。安排做备料、叠纸巾、大扫除。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>萨莉亚意式餐厅是控制人效的典范。他们大量使用兼职，且把工作切分得非常细。高峰期兼职只负责上菜，全职负责关键服务。人效做到了极致。</p>
    `,

    '6-1': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">现在的年轻人吃饭先看大众点评。大众点评就是线上的"门头"。不做点评，等于在这个时代"隐身"。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>视觉包装：</strong>花钱请专业摄影师拍菜品图。不要用手机随便拍。图片要修得垂涎欲滴。</li>
        <li><strong>基础评价：</strong>开业初期，发动亲戚朋友写真实的体验评价（凑够20条以上），把分先做出来。</li>
        <li><strong>V榜套餐：</strong>设置一个超值的双人套餐，专门用来在点评上引流。</li>
        <li><strong>回复评论：</strong>每一条评论都要回复。差评更是要诚恳道歉，并给出解决方案，这能体现你的态度。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>某火锅店，因为一个差评说"服务员脸臭"，店长回复说"你也没给小费啊"。结果被截图发到网上，引发公关危机，评分直接掉到3.5，生意一落千丈。</p>
    `,
    '6-2': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">开业活动不是为了赔钱赚吆喝，而是为了"锁客"。直接打5折是最傻的，因为吸引来的都是贪便宜的羊毛党，恢复原价人就跑了。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>充值免单：</strong>"充值当餐金额的3倍，当餐免单"。这样既收回了现金流，又锁定了顾客未来至少来吃3次。</li>
        <li><strong>返券：</strong>"吃100送50（5张10元券，下次可用）"。逼着顾客回头消费。</li>
        <li><strong>制造排队：</strong>即使没那么多人，也要把排队营造出来（比如出餐慢一点，或者让员工朋友来排队）。羊群效应会吸引路人。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>某奶茶店开业，没有直接打折。而是推出"买一送一券"（送的那杯只能下次来领）。结果顾客为了领那杯免费的，不得不来第二次，来了往往又会带朋友买第三杯。复购率极高。</p>
    `,
    '6-3': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">公域流量（点评、抖音）越来越贵，私域流量（微信群）是你自己的资产，免费且可反复触达。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>加粉钩子：</strong>桌贴/收银台放二维码："扫码进群，送冰粉一份/立减3元"。</li>
        <li><strong>群运营：</strong>
           <br/>- 不要只发广告。
           <br/>- 上午10:30发今日特价菜/红包。
           <br/>- 下雨天发提醒。
           <br/>- 偶尔发点生活趣事，把群友当朋友。</li>
        <li><strong>朋友圈：</strong>把老板微信包装成一个"热爱美食的吃货"，每天发诱人的食材采购视频、后厨制作视频。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>一家社区烤鸭店，加了3000个邻居的微信。每天下午4点在朋友圈发刚刚出炉的烤鸭视频，滋滋冒油。很多邻居本来没想吃，看了视频馋了，直接微信下单预留。完全不愁卖。</p>
    `,
    '6-4': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">外卖是现代餐饮的标配。但外卖逻辑和堂食完全不同。外卖是"电商逻辑"，比的是流量、转化率、复购。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>定价逻辑：</strong>平台扣点一般在18%-23%。所以外卖定价通常比堂食高，或者分量少一点，通过"满减"把价格做平。</li>
        <li><strong>包装体验：</strong>包装要防漏。一定要放"好评卡"（甚至送个小皮筋、薄荷糖）。外卖顾客看不到环境和服务，包装就是全部体验。</li>
        <li><strong>出餐速度：</strong>外卖必须优先做。骑手等不起，超时会扣钱且降权。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>粥铺做外卖。为了防止粥洒出来，他们定制了双层密封盖，并用保鲜膜再缠一圈。虽然成本高了几毛钱，但顾客收到时滴水不漏，好评如潮，评分4.9，单量一直是商圈第一。</p>
    `,

    '7-1': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">供应商选不好，要么成本高死，要么品质差死。供应链是餐饮的生命线。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>货比三家：</strong>不要只盯着一家买。同一种青椒，找3家供应商报价，选性价比最高的。</li>
        <li><strong>2+1策略：</strong>核心食材（如肉类）保持2家主力供应商+1家备选。防止一家断货或坐地起价。</li>
        <li><strong>亲自跑市场：</strong>老板每个月必须亲自去一级批发市场跑一趟，了解真实的行情价格，防止被供应商或采购员蒙骗。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>某连锁店发现最近牛肉成本飙升。老板亲自去市场调研，发现牛肉其实降价了，是采购员和供应商勾结吃回扣。于是开除采购员，直接和屠宰场合作，成本瞬间下降20%。</p>
    `,
    '7-2': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">"如果不检查，就等于没标准"。收货环节是漏洞最大的地方。烂菜、注水肉、缺斤短两都是在这里发生的。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>电子秤：</strong>必须有一个精准的电子秤。每一袋东西都要过称。</li>
        <li><strong>标准书：</strong>制定具体的收货标准。
           <br/>- 土豆：直径>5cm，无发芽，无虫眼。
           <br/>- 猪肉：颜色鲜红，按压有弹性，无异味。</li>
        <li><strong>拒收底气：</strong>不符合标准坚决退货。你硬气一次，供应商下次就不敢糊弄你。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>某店长以前收货只看数量不看质量。供应商就专把下面烂的菜塞给他。后来老板规定必须"倒筐检查"（把菜倒出来看底部）。第一天就退了50斤烂菜。供应商从此老实了。</p>
    `,
    '7-3': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">钱和货必须对得上。不做盘点，你永远不知道后厨偷吃掉了多少，浪费掉了多少。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>日盘点：</strong>每天打烊前，盘点高值易耗品（肉类、海鲜、酒水）。
           <br/>公式：期初库存 + 今日进货 - 今日销售（理论） = 期末库存。
           <br/>如果实际库存 < 理论库存，说明有猫腻。</li>
        <li><strong>月盘点：</strong>月底全员大盘点，清算所有物资（包括打包盒、纸巾）。算出真实的毛利率。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>酒吧老板发现啤酒成本对不上。通过坚持日盘点，发现是员工每晚偷偷拿两瓶啤酒喝，或者送给熟人。查出漏洞后，毛利恢复正常。</p>
    `,
    '7-4': `
      <h4 class="font-bold text-primary mb-2 text-lg">1. 简述</h4>
      <p class="mb-4">餐饮利润薄如刀锋，很多利润都在垃圾桶里。减少浪费就是直接增加净利润。</p>
      <h4 class="font-bold text-primary mb-2 text-lg">2. 实操</h4>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>边角料开发：</strong>
           <br/>- 鱼骨头：炸酥鱼骨。
           <br/>- 西蓝花梗：切丁炒饭，很脆甜。
           <br/>- 芹菜叶：裹面糊炸，做配菜。</li>
        <li><strong>切配标准：</strong>规定切肉要把所有肉剔干净。规定洗菜水流不能太大。</li>
        <li><strong>员工餐利用：</strong>实在卖不掉但没坏的边角料，做成员工餐，既改善伙食又减少浪费。</li>
      </ul>
      <h4 class="font-bold text-primary mb-2 text-lg">3. 案例</h4>
      <p><strong>案例：</strong>烤鸭店，鸭架子如果客人不要，以前直接扔。后来开发成"椒盐鸭架"卖10元一份，或者做成鸭架汤。光这一项，一年多赚5万块纯利。</p>
    `
};

const generateTaskArticles = (): Article[] => {
  const articles: Article[] = [];
  STAGES.forEach(stage => {
    stage.tasks.forEach(task => {
      articles.push({
        id: `auto-${task.id}`,
        category: stage.title,
        title: task.title,
        summary: `关于“${task.title}”的实战操作指南与核心要点。`,
        content: contentMap[task.id] || `<p>该条目暂无详细内容，建议参考通用餐饮管理标准。</p>`,
        isPinned: false
      });
    });
  });

  return articles;
};

export const KNOWLEDGE_BASE: Article[] = [
  ...PINNED_ARTICLES,
  ...generateTaskArticles()
];