import { NavLink, SEOData, CoreAdvantage, CaseStudy, ServiceItem, ProcessStep, Testimonial, FormField, HighlightImage } from './types';

// --- Colors ---
export const PRIMARY_BG = '#0B1320'; // 全站主背景色
export const BRAND_RED = '#8B1C24'; // 品牌主色 (皇家酒紅)
export const ACCENT_GOLD = '#D4AF37'; // 高級點綴金
export const TEXT_LIGHT = '#F5F7FA'; // 主要文字白
export const TEXT_SECONDARY = '#AAB0B7'; // 次要文字灰
export const CARD_BG = '#0F172A'; // 卡片背景色
export const BORDER_COLOR = '#1C2333'; // 卡片邊框/分隔線

// --- Navigation ---
export const NAV_LINKS: NavLink[] = [
  { name: '首頁', path: '/' },
  { name: '服務項目', path: '/services' },
  { name: '成功案例', path: '/portfolio' },
  { name: '服務流程', path: '/process' },
  { name: '客戶評價', path: '/testimonials' },
  { name: '聯絡我們', path: '/contact' },
];

// --- SEO Data ---
export const SEO_DATA: Record<string, SEOData> = {
  home: {
    title: '樂年 | 企業年度盛會策劃專家 - 頂級尾牙春酒活動規劃首選',
    metaDescription: '樂年專精高端企業尾牙、春酒、年度慶功宴策劃。提供一站式專業解決方案，強化企業凝聚力與品牌形象。立即諮詢，打造您的專屬盛會與企業傳奇！'
  },
  services: {
    title: '樂年 | 頂級服務項目 - 企業尾牙春酒與年度慶典規劃專家',
    metaDescription: '樂年提供全方位企業活動策劃服務，從主題企劃、舞台設計、燈光音響、主持人選、餐飲規劃到現場控場，確保您的企業尾牙與春酒活動完美呈現，超乎期待。'
  },
  portfolio: {
    title: '樂年 | 卓越成功案例 - 精選企業尾牙春酒與慶功宴規劃實績',
    metaDescription: '瀏覽樂年豐富的企業活動成功案例，包含各行各業的尾牙、春酒與年度慶功宴，見證我們卓越的活動策劃與執行能力，為您的企業帶來高光時刻。'
  },
  process: {
    title: '樂年 | 精準服務流程 - 企業活動策劃的安心交付指南',
    metaDescription: '深入了解樂年企業活動策劃的六大標準流程，從需求訪談到活動結案，每一步都專業透明，確保您的尾牙春酒活動安心交付，完美呈現。'
  },
  testimonials: {
    title: '樂年 | 客戶推薦 - 頂級企業活動公司信任與口碑見證',
    metaDescription: '聽聽合作夥伴對樂年專業服務的真實評價，他們肯定我們在尾牙春酒策劃、現場控場與視覺營造上的卓越表現，選擇樂年，就是選擇成功。'
  },
  contact: {
    title: '樂年 | 聯絡我們 - 企業尾牙春酒活動專屬諮詢表單',
    metaDescription: '立即填寫樂年企業活動諮詢表單，讓我們為您的尾牙、春酒或慶功宴活動提供專屬企劃與報價，開啟專業合作，共創企業榮耀。'
  },
};

// --- Home Page Content ---
export const CORE_ADVANTAGES: CoreAdvantage[] = [
  {
    title: '一站式整合策劃，省心高效',
    description: '從概念發想、流程規劃到現場執行，樂年提供完整一站式服務，免除多方協調的繁瑣，讓您輕鬆擁有頂級企業盛會。',
    icon: '✨' // 改為SVG Icon
  },
  {
    title: '資深團隊操刀，經驗保證',
    description: '我們的資深策劃與執行團隊，擁有豐富的大型企業活動承辦經驗，精準掌握每個環節，確保活動流暢、高雅。',
    icon: '🏆' // 改為SVG Icon
  },
  {
    title: '量身定製主題，獨創專屬',
    description: '深入洞察企業文化與年度目標，為您量身打造獨具匠心的活動主題，讓您的尾牙春酒成為業界焦點，品牌形象煥然一新。',
    icon: '💡' // 改為SVG Icon
  },
  {
    title: '高端視覺饗宴，彰顯氣勢',
    description: '從主視覺設計、舞台搭建到燈光音響，樂年堅持頂級品味與國際標準，營造震撼且精緻的視覺聽覺饗宴，彰顯企業非凡氣勢。',
    icon: '🥂' // 改為SVG Icon
  },
  {
    title: '精準預算掌控，價值最大化',
    description: '在您的預算框架內，透過高效資源整合與精細成本控制，樂年致力於創造超乎預期的活動價值與效益，每一分投入都精打細算。',
    icon: '💰' // 改為SVG Icon
  },
  {
    title: '專業風險管理，全程無虞',
    description: '具備完善的應變機制與資深控場能力，從容應對各類突發狀況，確保活動流程順暢無阻，萬無一失，讓您全程安心。',
    icon: '🛡️' // 改為SVG Icon
  },
];

// --- Trusted By Section Content ---
export const CLIENT_LOGOS: string[] = [
  'AMAZON',
  'MERCEDES-BENZ',
  'TSMC',
  'GOOGLE',
  'FOXCONN',
  'ESLITE',
  'NIKE',
  'STARBUCKS',
  'CATHAY PACIFIC',
  'ASUS',
  'IKEA',
  'SONY',
  'MICROSOFT',
  'COCA-COLA',
];

export const SELLING_POINTS: string[] = [
  '100% 準時交付',
  '企業級活動執行規格',
  '專屬專案團隊服務',
];

// --- Highlights Gallery Content ---
export const HIGHLIGHTS_IMAGES: HighlightImage[] = [
  { src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1974&auto=format&fit=crop', alt: 'Concert with purple lights' },
  { src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop', alt: 'Crowd at a music festival' },
  { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1974&auto=format&fit=crop', alt: 'Elegant dinner party setup' },
  { src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop', alt: 'People at a concert with confetti' },
  { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop', alt: 'DJ performing for a crowd' },
  { src: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop', alt: 'Elegant gala dinner table setting' },
];


export const FEATURED_CASES: CaseStudy[] = [
  {
    id: 'tech-gala-2023',
    name: '騰達科技 | 榮耀啟程年度盛典',
    industry: '高科技製造',
    attendees: '800人',
    theme: '智匯未來：領航新篇章',
    outcome: '結合沉浸式光影互動與AI主題表演，成功展現企業前瞻性與創新精神，員工滿意度創新高。',
    imageUrl: 'https://picsum.photos/id/1018/1200/800',
    subtitle: '一場融合科技與藝術的未來派對',
    challenge: '騰達科技希望年度盛典不僅是傳統的表彰大會，更能彰顯其在高科技領域的領導地位，同時激發員工的創新熱情與歸屬感。挑戰在於如何將抽象的「AI」與「未來」概念，轉化為具體、可感知且充滿娛樂性的現場體驗。',
    solution: [
      '樂年團隊提出「智匯未來」核心主題，主視覺採用流動的數據光束與星際元素，打造強烈的科技未來感。',
      '入口處設置了AI互動迎賓牆，賓客可透過語音或手勢與之互動，生成個人專屬的未來頭像，創造了絕佳的開場話題。',
      '我們與頂尖新媒體藝術團隊合作，設計了沉浸式光影隧道，讓員工在步入會場的過程中，體驗一場穿越時空的視覺之旅。',
      '晚宴表演環節，邀請了知名聲光藝術表演團體，帶來結合無人機與雷射光雕的AI主題秀，將晚會氣氛推向高潮。',
    ],
    results: [
      '活動後滿意度調查，超過95%的員工表示體驗「遠超預期」。',
      '媒體曝光量較前一年增長200%，成功塑造了企業的創新雇主品牌形象。',
      '主管團隊表示，活動極大提升了團隊士氣與對公司未來發展的信心。',
    ],
    galleryImages: [
      'https://picsum.photos/id/11/800/600',
      'https://picsum.photos/id/12/800/600',
      'https://picsum.photos/id/13/800/600',
      'https://picsum.photos/id/14/800/600',
    ]
  },
  {
    id: 'finance-gala-2023',
    name: '鉅鼎金融 | 鎏金之夜春酒晚宴',
    industry: '金融服務',
    attendees: '500人',
    theme: '璀璨傳承：永續榮光',
    outcome: '以復古爵士風格打造奢華晚宴，精緻餐飲與優雅佈置深受高階主管好評，成功凝聚團隊向心力與尊榮感。',
    imageUrl: 'https://picsum.photos/id/1025/1200/800',
    subtitle: '重現黃金年代的奢華與榮耀',
    challenge: '鉅鼎金融希望春酒晚宴能彰顯其穩健、專業且高端的品牌形象，為高階主管與核心員工提供一場尊榮的社交饗宴，以感謝他們過去一年的貢獻，並鞏固團隊的向心力。',
    solution: [
      '我們以「鎏金之夜」為題，靈感源自《大亨小傳》的黃金年代，整體佈置採用黑、金、白三色為主調，搭配水晶燈飾、羽毛與絲絨元素，營造出低調奢華的氛圍。',
      '晚宴邀請了國內頂級爵士樂團現場演奏，從經典的Swing到柔情的Bossa Nova，為賓客帶來最純正的復古聽覺享受。',
      '餐飲方面，我們與五星級酒店主廚合作，設計了專屬的精緻套餐，並提供專業的侍酒師服務，確保每一位賓客都能享受到頂級的味蕾體驗。',
      '活動中設置了主題拍照區與雪茄吧，為賓客提供了優雅的社交與互動空間。',
    ],
    results: [
      '高階主管團隊對活動的精緻度與品味給予高度評價。',
      '活動不僅鞏固了團隊的尊榮感與歸屬感，更成為一次成功的內部公關活動。',
      '精緻的現場照片在員工社交媒體上廣泛傳播，有效提升了企業的雇主形象。',
    ],
    galleryImages: [
      'https://picsum.photos/id/21/800/600',
      'https://picsum.photos/id/22/800/600',
      'https://picsum.photos/id/23/800/600',
      'https://picsum.photos/id/24/800/600',
    ]
  },
  {
    id: 'green-energy-2023',
    name: '綠能創新集團 | 綠動地球尾牙',
    industry: '綠色能源',
    attendees: '1200人',
    theme: '永續共榮：綠色脈動',
    outcome: '導入環保永續理念，打造綠色佈置與互動裝置，傳遞企業社會責任，同時氣氛熱絡，展現活力與凝聚力。',
    imageUrl: 'https://picsum.photos/id/1043/1200/800',
    subtitle: '一場結合環保與活力的永續慶典',
    challenge: '作為綠色能源產業的領導者，綠能創新集團的尾牙活動必須徹底貫徹其「永續發展」的核心價值。挑戰在於如何在大型活動中，兼顧環保理念、熱鬧氛圍與員工的娛樂體驗。',
    solution: [
      '樂年提出「綠動地球」主題，活動所有佈置材料均採用可回收或可再生的環保材質，例如再生紙板裝置藝術、綠植牆等。',
      '我們與社企合作，提供在地、有機的自助餐點，並嚴格執行垃圾分類與廚餘回收，將活動的碳足跡降至最低。',
      '活動中設計了「綠能互動挑戰」遊戲，透過有趣的團隊競賽，向員工傳遞環保知識與公司的綠能成就，寓教於樂。',
      '晚會的高潮部分，是以動能發電的地板，邀請所有員工一起跳舞，將動能轉化為電能點亮舞台主視覺，象徵著「眾志成城，點亮未來」的企業精神。',
    ],
    results: [
      '成功舉辦了一場「零廢棄」的大型尾牙活動，在業界樹立了綠色企業活動的新標竿。',
      '獨特的環保互動環節，讓員工對企業的永續理念有了更深刻的認同感。',
      '活動被多家媒體報導，讚揚其在企業社会責任上的創新實踐。',
    ],
    galleryImages: [
      'https://picsum.photos/id/31/800/600',
      'https://picsum.photos/id/32/800/600',
      'https://picsum.photos/id/33/800/600',
      'https://picsum.photos/id/34/800/600',
    ]
  },
  {
    id: 'logistics-awards-2023',
    name: '寰宇物流 | 極速領航慶功宴',
    industry: '國際物流',
    attendees: '300人',
    theme: '航向卓越：逐夢未來',
    outcome: '以海運貨櫃元素結合科技感視覺，表彰年度優秀員工，激勵團隊士氣，達成高效且充滿榮耀的慶祝。',
    imageUrl: 'https://picsum.photos/id/1062/1200/800',
    subtitle: '一場表彰功勳、啟航未來的榮耀盛典',
    challenge: '寰宇物流希望舉辦一場與眾不同的慶功宴，不僅要表彰年度績優員工，更要傳達公司在現代物流領域的「速度」、「科技」與「全球連結」的專業形象，激勵全體員工邁向新的高峰。',
    solution: [
      '我們將活動場地打造成一個充滿現代感與工業風的「領航碼頭」。舞台設計巧妙地融入了貨櫃、航線圖與LED動態數據等元素。',
      '頒獎典禮的設計充滿儀式感，得獎者將走過象徵「榮耀航道」的星光大道，並從一個特製的貨櫃裝置中登場，接受全場的歡呼。',
      '活動中穿插了快節奏的雷射鼓舞與街舞表演，象徵著物流產業的速度與激情，讓整場活動充滿活力。',
      '我們還設計了一個大型的互動簽名牆，讓所有員工在世界地圖上簽下自己的名字，象徵著每個人都是公司全球佈局中不可或缺的一環。',
    ],
    results: [
      '極具創意的活動主題與執行，讓這場慶功宴成為員工心中最難忘的一次公司活動。',
      '成功地將頒獎典禮從一個傳統儀式，轉變為一場充滿動感與榮耀的團隊激勵大會。',
      '活動後，團隊凝聚力顯著提升，員工紛紛表示對公司的未來發展充滿期待。',
    ],
    galleryImages: [
      'https://picsum.photos/id/41/800/600',
      'https://picsum.photos/id/42/800/600',
      'https://picsum.photos/id/43/800/600',
      'https://picsum.photos/id/44/800/600',
    ]
  },
];

// --- Services Page Content ---
export const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: '高訂主題策劃',
    description: '深入剖析企業文化與年度願景，量身打造獨一無二的活動主題，從概念發想到環節設計，確保每場盛會都彰顯品牌精神，令人耳目一新。',
    icon: '🎨' // 改為SVG Icon
  },
  {
    title: '國際級舞台視覺',
    description: '由頂尖設計師團隊操刀，從主視覺、舞台搭建、互動裝置到場地氛圍營造，完美呈現品牌形象，打造震撼且精緻的視覺饗宴。',
    icon: '🎭' // 改為SVG Icon
  },
  {
    title: '頂級聲光體驗',
    description: '運用國際級燈光音響設備，搭配專業技術團隊，精準掌握活動節奏，創造層次豐富的現場氛圍，從激昂到溫馨，完美烘托每一刻。',
    icon: '💡' // 改為SVG Icon
  },
  {
    title: '星級主持與互動',
    description: '嚴選專業資深主持人，精心規劃獨特的互動環節、精彩表演與抽獎機制，提升現場熱度與參與感，讓賓客盡情投入，共創難忘回憶。',
    icon: '🎤' // 改為SVG Icon
  },
  {
    title: '精緻餐飲與動線',
    description: '考量賓客規模與場地配置，規劃流暢的動線與精緻的餐飲服務，從菜單建議到上菜時機，每個細節都力求完美，提供尊榮的宴會體驗。',
    icon: '🍽️' // 改為SVG Icon
  },
  {
    title: '全程專業控場',
    description: '資深執行團隊於活動現場全程精準控管，確保流程順暢、時間精準、狀況應變，以國際級專業能力，讓活動完美無瑕，超越您的期待。',
    icon: '🛠️' // 改為SVG Icon
  },
  {
    title: '高端攝影紀錄',
    description: '安排專業攝影與錄影團隊，捕捉活動中的每一個高光瞬間，從入場、表演到互動，為您的企業留下珍貴且具備宣傳價值的高質感年度回憶。',
    icon: '📸' // 改為SVG Icon
  },
];

// --- Process Page Content ---
export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: '需求策略訪談',
    description: '深入傾聽您的年度目標、企業文化、活動規模與預算，進行嚴謹訪談，共同勾勒活動願景，並提供戰略性初步建議。'
  },
  {
    stepNumber: 2,
    title: '獨家企劃提案',
    description: '依據訪談結果，專業策劃團隊將為您量身打造獨家企劃方案，包含創新活動主題、精緻流程、建議場地、創意橋段與詳盡報價。'
  },
  {
    stepNumber: 3,
    title: '視覺與環節精修',
    description: '與您確認企劃後，進行主視覺設計、舞台搭建示意、場地配置圖、燈光音響規劃，並精修活動流程，確保每個環節精準到位。'
  },
  {
    stepNumber: 4,
    title: '嚴謹執行彩排',
    description: '活動前，進行全面的現場彩排與細節確認，包含主持人走位、表演動線、設備測試與緊急應變演練，確保所有環節完美接軌。'
  },
  {
    stepNumber: 5,
    title: '盛會專業執行',
    description: '活動當天，資深執行團隊全程在場，以國際級專業能力與豐富經驗，精準控管每個環節，從容應對突發狀況，確保活動圓滿成功。'
  },
  {
    stepNumber: 6,
    title: '成果匯報與回顧',
    description: '活動後提供詳盡的結案報告與高質量影像紀錄，並與您進行活動回顧與效益評估，為未來的深度合作奠定堅實基礎。'
  },
];

// --- Testimonials Page Content ---
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: '樂年的團隊展現了令人驚嘆的專業與遠見！從前期主題的策略性發想，到活動當天的無懈無擊控場，都讓我們無比安心。尾牙活動的氣氛營造與流程設計，完美超越我們的所有預期，員工們至今仍對那晚津津樂道！',
    client: '林總經理',
    company: '旭日科技集團',
    avatarUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    quote: '與樂年合作，體驗了最高效率與最頂級的服務！他們不僅精準掌握我們的企業文化與需求，更在有限的預算內，創造出奢華且具深遠意義的春酒盛會。視覺呈現與燈光效果都達到國際級水準，為我們的品牌形象帶來巨大提升。',
    client: '陳執行長',
    company: '榮耀金融控股',
    avatarUrl: 'https://picsum.photos/100/100?random=11'
  },
  {
    quote: '「安心交付」是樂年對我們最珍貴的承諾！在整個策劃過程中，我們幾乎無需任何擔憂，所有細節都被照顧得鉅細靡遺。特別是現場的強大執行力，確保活動完美無瑕，這正是我們所期待的頂級專業度。',
    client: '張副董事長',
    company: '宏大建設開發',
    avatarUrl: 'https://picsum.photos/100/100?random=12'
  },
  {
    quote: '樂年為我們策劃的年度慶功宴，徹底打破了以往傳統的制式印象。他們的主持人選、互動橋段設計都極具創意與活力，讓所有同仁都深度參與，盡情慶祝，是一次充滿凝聚力的成功盛會！',
    client: '王人資長',
    company: '創世紀生技',
    avatarUrl: 'https://picsum.photos/100/100?random=13'
  },
  {
    quote: '我們對樂年的服務只有「卓越」可以形容！活動前的溝通專業細緻，活動中的應變能力更是快速而精準。他們不僅提供了頂尖的策劃，更在每一次交流中展現出真誠與熱情，是我們企業活動最值得信賴的策略夥伴。',
    client: '黃行政總監',
    company: '智慧移動科技',
    avatarUrl: 'https://picsum.photos/100/100?random=14'
  },
];

// --- Contact Page Content ---
export const CONTACT_FORM_FIELDS: FormField[] = [
  { label: '公司名稱', type: 'text', name: 'companyName', placeholder: '請輸入貴公司全稱', required: true },
  { label: '聯絡人姓名', type: 'text', name: 'contactPerson', placeholder: '請輸入您的姓名', required: true },
  { label: '聯絡電話', type: 'tel', name: 'phoneNumber', placeholder: '請輸入聯絡電話', required: true },
  { label: '企業電子郵件', type: 'email', name: 'email', placeholder: '請輸入您的企業電子郵件', required: true },
  { label: '預計活動日期', type: 'date', name: 'eventDate', required: true },
  { label: '預計參與人數', type: 'number', name: 'attendees', placeholder: '請輸入預計參與人數', required: true },
  {
    label: '預算區間',
    type: 'select',
    name: 'budget',
    options: ['請選擇預算區間', '10萬 - 30萬', '30萬 - 50萬', '50萬 - 100萬', '100萬以上'],
    required: true
  },
  { label: '詳細需求說明', type: 'textarea', name: 'description', placeholder: '請詳細說明您的活動需求，例如：活動類型(尾牙/春酒/慶功宴)、期望風格、特殊節目、場地偏好等。', required: true },
];

export const CONTACT_PAGE_TEXT = {
  title: '立即諮詢，啟動您的年度卓越盛會',
  description: '我們深知每一場企業活動都是品牌形象與團隊凝聚力的至關重要展現。樂年以專業、專注、專精之精神，為中大型企業及上市櫃公司量身打造獨一無二、無可比擬的尾牙、春酒與年度慶功宴。請您填寫下方表單，我們的資深策劃顧問將於最快時間內與您聯繫，提供最貼心、最精準的客製化企劃方案。讓樂年成為您年度盛會的最佳策略夥伴，共同譜寫企業的榮耀篇章！',
  button: '送出詢價'
};

// --- Footer Content ---
export const FOOTER_COPYRIGHT = '© 2024 樂年企業活動策劃. All Rights Reserved.';
export const FOOTER_CONTACT = {
  email: 'info@funyear.com',
  phone: '(02) 8765-4321', // 更新電話號碼
  address: '台北市信義區松仁路100號18樓' // 更新地址
};