
import { NavLink, SEOData, CoreAdvantage, CaseStudy, ServiceItem, ProcessStep, Testimonial, FormField } from './types';

// --- Colors ---
export const PRIMARY_RED = '#7A0F1C';
export const PRIMARY_RED_DARK = '#8C1D18';
export const SECONDARY_BLUE = '#0F1E2E';
export const ACCENT_GOLD = '#D4AF37';
export const DARK_BG = '#1a1a1a';
export const LIGHT_WARM = '#f7e7d9';

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
    title: '樂年 | 企業年度盛會策劃專家 - 尾牙春酒活動策劃首選',
    metaDescription: '樂年專精企業尾牙、春酒、年度慶功宴策劃。提供高端、專業、一站式活動解決方案，強化企業凝聚力與品牌形象。立即諮詢，打造您的專屬盛會！'
  },
  services: {
    title: '樂年 | 專業服務項目 - 尾牙活動策劃與春酒企劃專家',
    metaDescription: '樂年提供全方位企業活動策劃服務，從主題企劃、舞台設計、燈光音響、主持互動到現場控場，確保您的企業尾牙與春酒活動完美呈現。'
  },
  portfolio: {
    title: '樂年 | 成功案例 - 精選企業尾牙春酒與慶功宴企劃',
    metaDescription: '瀏覽樂年豐富的企業活動成功案例，包含各行各業的尾牙、春酒與年度慶功宴，展現我們卓越的活動策劃與執行能力。'
  },
  process: {
    title: '樂年 | 服務流程 - 企業活動策劃的安心交付指南',
    metaDescription: '了解樂年企業活動策劃的六大標準流程，從需求訪談到活動結案，每一步都專業透明，確保您的尾牙春酒活動安心交付。'
  },
  testimonials: {
    title: '樂年 | 客戶評價 - 企業活動公司推薦與信任見證',
    metaDescription: '聽聽合作夥伴對樂年專業服務的真實評價，他們肯定我們在尾牙春酒策劃、現場控場與視覺營造上的卓越表現。'
  },
  contact: {
    title: '樂年 | 聯絡我們 - 企業尾牙春酒活動詢價表單',
    metaDescription: '立即填寫樂年企業活動詢價表單，讓我們為您的尾牙、春酒或慶功宴活動提供專屬企劃與報價，開啟專業合作。'
  },
};

// --- Home Page Content ---
export const CORE_ADVANTAGES: CoreAdvantage[] = [
  {
    title: '一站式策劃，省心省力',
    description: '從概念發想、流程規劃到現場執行，樂年提供完整一站式服務，讓您無需多方奔波，輕鬆擁有完美盛會。',
    icon: '✨'
  },
  {
    title: '專業團隊，經驗豐富',
    description: '我們的資深策劃團隊擁有豐富的企業活動承辦經驗，精準掌握每個細節，為您的活動保駕護航。',
    icon: '🏆'
  },
  {
    title: '創新主題，獨一無二',
    description: '洞悉最新趨勢，結合企業文化，量身打造獨具匠心的活動主題，讓您的尾牙春酒令人耳目一新。',
    icon: '💡'
  },
  {
    title: '高端質感，儀式感滿分',
    description: '從視覺設計、燈光音響到氛圍營造，堅持高端品味，讓每一刻都充滿儀式感，彰顯企業氣勢。',
    icon: '🥂'
  },
  {
    title: '精準預算，高效達成',
    description: '在有限預算內創造最大價值，樂年透過高效資源整合與成本控制，確保活動品質與效益並存。',
    icon: '💰'
  },
  {
    title: '危機應變，萬無一失',
    description: '具備完善的應變機制與專業控場能力，從容應對突發狀況，確保活動流暢進行，萬無一失。',
    icon: '🛡️'
  },
];

export const FEATURED_CASES: CaseStudy[] = [
  {
    name: '騰達科技年度盛典',
    industry: '高科技製造',
    attendees: '800人',
    theme: 'AI時代：超越未來',
    outcome: '結合沉浸式光影互動與AI主題表演，員工滿意度創新高，成功展現企業前瞻性。',
    imageUrl: 'https://picsum.photos/600/400?random=1'
  },
  {
    name: '鉅鼎金融春酒晚宴',
    industry: '金融服務',
    attendees: '500人',
    theme: '鎏金歲月：璀璨之夜',
    outcome: '以復古爵士風格打造奢華晚宴，精緻餐飲與優雅佈置深受高階主管好評，成功凝聚團隊向心力。',
    imageUrl: 'https://picsum.photos/600/400?random=2'
  },
  {
    name: '綠能創新集團尾牙',
    industry: '綠色能源',
    attendees: '1200人',
    theme: '永續共榮：地球之聲',
    outcome: '導入環保永續理念，打造綠色佈置與互動裝置，傳遞企業社會責任，同時氣氛熱絡。',
    imageUrl: 'https://picsum.photos/600/400?random=3'
  },
  {
    name: '寰宇物流慶功宴',
    industry: '國際物流',
    attendees: '300人',
    theme: '速度與激情：榮耀航線',
    outcome: '以海運貨櫃元素結合科技感視覺，表彰年度優秀員工，激勵團隊士氣，達成高效慶祝。',
    imageUrl: 'https://picsum.photos/600/400?random=4'
  },
];

// --- Services Page Content ---
export const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: '活動主題企劃',
    description: '深入了解您的企業文化、年度目標及預期，量身打造具備高度創意與吸引力的活動主題，從視覺概念到環節設計，確保活動獨具一格，令人難忘。',
    icon: '🎨'
  },
  {
    title: '舞台與視覺設計',
    description: '由專業設計師團隊操刀，從主視覺、舞台搭建、背板設計到現場動線規劃，完美呈現品牌形象，營造震撼且精緻的視覺饗宴。',
    icon: '🎭'
  },
  {
    title: '燈光音響與氣氛營造',
    description: '運用頂級燈光音響設備，搭配專業技術團隊，精準掌握活動節奏，創造出層次豐富的現場氛圍，從激昂到溫馨，完美烘托每一刻。',
    icon: '💡'
  },
  {
    title: '主持與互動橋段設計',
    description: '嚴選專業主持人，並精心規劃獨特的互動遊戲、表演環節及抽獎機制，提升現場熱度與參與感，讓賓客盡情投入，樂在其中。',
    icon: '🎤'
  },
  {
    title: '餐飲與宴會動線規劃',
    description: '考量賓客規模與場地配置，規劃流暢的動線與精緻的餐飲服務，從菜單建議到上菜時機，每個細節都力求完美，提供尊榮的宴會體驗。',
    icon: '🍽️'
  },
  {
    title: '現場執行控場',
    description: '資深執行團隊於活動現場全程控管，確保流程順暢、時間精準、狀況應變，以專業應對能力，讓活動完美無瑕。',
    icon: '🛠️'
  },
  {
    title: '攝影與活動紀錄',
    description: '安排專業攝影與錄影團隊，捕捉活動中的每一個精彩瞬間，從入場、表演到互動，為您的企業留下珍貴且高質量的年度回憶。',
    icon: '📸'
  },
];

// --- Process Page Content ---
export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: '需求訪談與初步評估',
    description: '傾聽您的年度目標、企業文化、活動規模與預算考量，進行深入訪談，共同勾勒活動願景，並提供初步建議。'
  },
  {
    stepNumber: 2,
    title: '客製化企劃提案',
    description: '根據訪談結果，專業策劃團隊將為您量身打造獨家企劃方案，包含活動主題、流程、建議場地、創意橋段與初步報價。'
  },
  {
    stepNumber: 3,
    title: '視覺與流程細節設計',
    description: '與您確認企劃後，進行主視覺設計、舞台圖、場地配置圖、燈光音響規劃，並精修活動流程，確保每個環節精準到位。'
  },
  {
    stepNumber: 4,
    title: '執行彩排與確認',
    description: '活動前，進行全面的現場彩排與細節確認，包含主持人走位、表演動線、設備測試，確保所有環節完美接軌。'
  },
  {
    stepNumber: 5,
    title: '正式活動執行與控場',
    description: '活動當天，資深執行團隊全程在場，以專業能力與豐富經驗，精準控管每個環節，從容應對突發狀況，確保活動圓滿成功。'
  },
  {
    stepNumber: 6,
    title: '活動結案與回顧',
    description: '活動後提供詳盡的結案報告與精選影像紀錄，並與您進行活動回顧與效益評估，為未來的合作奠定基礎。'
  },
];

// --- Testimonials Page Content ---
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: '樂年的團隊非常專業且經驗豐富！從前期的主題發想、細節溝通到活動當天的完美控場，都讓我們非常放心。尾牙活動的氣氛營造與流程設計都超乎預期，員工們至今仍津津樂道！',
    client: '林經理',
    company: '旭日科技',
    avatarUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    quote: '這是我們合作過最有效率的活動公司！樂年不僅能精準掌握我們的需求，更在有限的預算內創造出高端且有質感的春酒盛會。視覺呈現與燈光效果都非常棒，讓我們的品牌形象大大加分。',
    client: '陳主任',
    company: '榮耀集團',
    avatarUrl: 'https://picsum.photos/100/100?random=11'
  },
  {
    quote: '「安心交付」是樂年最棒的服務承諾！在整個策劃過程中，我們幾乎不需要費心，所有細節都被照顧得無微不至。特別是現場的執行力，讓活動完美無瑕，展現了真正的專業度。',
    client: '張副總',
    company: '宏大建設',
    avatarUrl: 'https://picsum.photos/100/100?random=12'
  },
  {
    quote: '樂年為我們策劃的年度慶功宴，徹底打破了以往的制式印象。他們的主持人選與互動橋段設計都極具創意，讓所有同仁都玩得非常開心，是一次充滿活力的成功慶祝！',
    client: '王人資長',
    company: '創世紀生技',
    avatarUrl: 'https://picsum.photos/100/100?random=13'
  },
  {
    quote: '我們對樂年的服務只有滿意可以形容！活動前的溝通細緻周到，活動中的應變能力極強。他們不僅提供了卓越的策劃，更在每一次交流中展現出真誠與熱情，是非常值得信賴的合作夥伴。',
    client: '黃行政主管',
    company: '智慧移動',
    avatarUrl: 'https://picsum.photos/100/100?random=14'
  },
];

// --- Contact Page Content ---
export const CONTACT_FORM_FIELDS: FormField[] = [
  { label: '公司名稱', type: 'text', name: 'companyName', placeholder: '請輸入貴公司名稱', required: true },
  { label: '聯絡人', type: 'text', name: 'contactPerson', placeholder: '請輸入您的姓名', required: true },
  { label: '聯絡電話', type: 'tel', name: 'phoneNumber', placeholder: '請輸入聯絡電話', required: true },
  { label: '電子郵件', type: 'email', name: 'email', placeholder: '請輸入電子郵件', required: true },
  { label: '活動日期', type: 'date', name: 'eventDate', required: true },
  { label: '預計人數', type: 'number', name: 'attendees', placeholder: '請輸入預計參與人數', required: true },
  {
    label: '預算區間',
    type: 'select',
    name: 'budget',
    options: ['請選擇', '5萬 - 10萬', '10萬 - 30萬', '30萬 - 50萬', '50萬以上'],
    required: true
  },
  { label: '需求說明', type: 'textarea', name: 'description', placeholder: '請詳細說明您的活動需求，例如：活動類型(尾牙/春酒/慶功宴)、期望風格、特殊需求等。', required: true },
];

export const CONTACT_PAGE_TEXT = {
  title: '立即諮詢，開啟您的年度盛會',
  description: '我們理解每一場企業活動都是品牌形象與團隊凝聚力的重要展現。樂年以專業、專注與專精的精神，為中大型企業、上市櫃公司量身打造獨一無二的尾牙、春酒、年度慶功宴。填寫以下表單，我們的專業策劃顧問將在最短時間內與您聯繫，提供最貼心的諮詢與最精準的企劃方案。讓樂年成為您年度盛會的最佳夥伴，共同譜寫企業的榮耀篇章！',
  button: '送出詢價'
};

// --- Footer Content ---
export const FOOTER_COPYRIGHT = '© 2024 樂年企業活動策劃. All rights reserved.';
export const FOOTER_CONTACT = {
  email: 'info@funyear.com',
  phone: '(02) 1234-5678',
  address: '台北市信義區忠孝東路Ｘ段Ｘ號'
};
