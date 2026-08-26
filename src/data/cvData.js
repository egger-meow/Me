// Central portfolio content. Keep zh/en structurally identical.
export const SECTION_ORDER = ['systems', 'story', 'experience', 'education', 'skills', 'about'];

const links = { email: 'jjmow.cs15@nycu.edu.tw', linkedin: 'www.linkedin.com/in/jj-mow-8b903b295', github: 'https://github.com/egger-meow' };

const zhFeatured = [
  { id: 'paper-english', name: '紙屬英文 / Paper English', tag: 'Production', period: '2026 — 現在', description: '一套已正式上線的每週個人化英文教材系統，讓台灣國小高年級到國中生拿到符合程度、學校進度、興趣與學習回饋的可列印教材。', highlights: ['每週交付 Student PDF 與獨立的 Parent Answer PDF；把孩子的作答、難度與家長回饋帶進下一週。', '完整處理家長登入、孩子資料、訂閱與候補、教材排程、版本化生成契約、PDF 儲存與歷史紀錄。', '以 Supabase RLS 隔離家庭資料，並用確定性驗證、品質審查與重試流程守住交付品質。'], stack: ['TypeScript', 'React', 'Supabase', 'PostgreSQL', 'PDF Pipeline'], screenshot: '/imgs/projects/paper-english.png', screenshotLabel: '紙屬英文正式網站', device: 'browser', actions: [{ type: 'live', label: '查看產品', href: 'https://paperbond.jjmowlab.com' }] },
  { id: 'maybech', name: 'Maybech', tag: 'Alpha · Simulation First', period: '2025 — 現在', description: '一套由操作者掌控的本機交易工作台，協助監看市場、執行規則與管理部位；預設模擬，不以黑箱或獲利承諾包裝風險。', highlights: ['以 logical positions 分開追蹤每次進場與各自的停損、停利、保本及移動規則。', '採 fail-closed 啟動；實盤下單必須通過模式、環境、風控、私有串流與人工啟用等多重閘門。', 'Python daemon、FastAPI/WebSocket 與 Next.js 儀表板共用可稽核決策紀錄；成交確認才是狀態真相。'], stack: ['Python', 'FastAPI', 'WebSocket', 'Next.js', 'SQLite'], screenshot: '/imgs/projects/maybech.png', screenshotLabel: 'Maybech 工作台', device: 'browser', actions: [{ type: 'github', label: 'GitHub', href: 'https://github.com/egger-meow/maybech' }, { type: 'docs', label: '版本說明', href: 'https://github.com/egger-meow/maybech/releases' }] },
  { id: 'find-people-now', name: '敢不敢揪 / Find People Now', tag: 'Completed MVP', period: '2026', description: '一個幫助陽明交大與清大學生快速組成小型、限時活動群組的完整 MVP，從找人一路涵蓋確認、集合與活動完成。', highlights: ['Flutter 流程涵蓋校園註冊、活動需求、配對、pending confirmation、降級處理與避免重複配對。', '支援地點提案與投票、集合點更新、抵達確認、通知、回報、封鎖與帳號刪除。', '使用 Supabase Auth、PostgreSQL、Realtime、Edge Functions、FCM 與 RLS，明確分離前台 RPC 與背景配對權限。'], stack: ['Flutter', 'Dart', 'Supabase', 'Realtime', 'FCM'], screenshot: '/imgs/projects/find-people-now.png', screenshotLabel: '敢不敢揪活動協調畫面', device: 'mobile', actions: [{ type: 'github', label: 'GitHub', href: 'https://github.com/egger-meow/find-people-now' }, { type: 'docs', label: '產品文件', href: 'https://github.com/egger-meow/find-people-now/tree/main/docs' }] },
];

const enFeatured = [
  { id: 'paper-english', name: 'Paper English / 紙屬英文', tag: 'Production', period: '2026 — Present', description: 'A live weekly English-material system that gives Taiwanese upper-elementary and junior-high learners printable lessons adapted to their level, school progress, interests, and feedback.', highlights: ['Delivers a Student PDF and separate Parent Answer PDF each week, carrying completion, difficulty, errors, and parent feedback into the next package.', 'Covers parent sign-in, child profiles, subscriptions and waitlisting, scheduling, versioned generation contracts, PDF storage, and release history.', 'Uses Supabase RLS for family isolation, plus deterministic validation, quality review, and retry workflows to protect delivery quality.'], stack: ['TypeScript', 'React', 'Supabase', 'PostgreSQL', 'PDF Pipeline'], screenshot: '/imgs/projects/paper-english.png', screenshotLabel: 'Paper English production site', device: 'browser', actions: [{ type: 'live', label: 'View Product', href: 'https://paperbond.jjmowlab.com' }] },
  { id: 'maybech', name: 'Maybech', tag: 'Alpha · Simulation First', period: '2025 — Present', description: 'A local operator-controlled trading workspace for monitoring markets, applying explicit rules, and managing positions—simulation-first, with no black-box promise of returns.', highlights: ['Tracks each entry as an independent logical position with its own stop-loss, take-profit, break-even, and trailing rules.', 'Starts fail-closed; real orders require explicit mode, environment, risk, private-stream, preflight, and operator enablement gates.', 'A Python daemon, FastAPI/WebSocket control surface, and Next.js dashboard share durable decisions; confirmed fills are the source of truth.'], stack: ['Python', 'FastAPI', 'WebSocket', 'Next.js', 'SQLite'], screenshot: '/imgs/projects/maybech.png', screenshotLabel: 'Maybech workspace', device: 'browser', actions: [{ type: 'github', label: 'GitHub', href: 'https://github.com/egger-meow/maybech' }, { type: 'docs', label: 'Releases', href: 'https://github.com/egger-meow/maybech/releases' }] },
  { id: 'find-people-now', name: '敢不敢揪 / Find People Now', tag: 'Completed MVP', period: '2026', description: 'A completed MVP that helps NYCU and NTHU students form small, time-bounded activity groups and coordinate the flow from matching through arrival and completion.', highlights: ['Flutter flows cover campus onboarding, activity requests, matching, pending confirmations, downgrade handling, and repeat-match avoidance.', 'Supports location proposals and voting, meeting-point updates, arrival checks, notifications, reporting, blocking, and account deletion.', 'Uses Supabase Auth, PostgreSQL, Realtime, Edge Functions, FCM, and RLS, with client RPCs separated from trusted background matching.'], stack: ['Flutter', 'Dart', 'Supabase', 'Realtime', 'FCM'], screenshot: '/imgs/projects/find-people-now.png', screenshotLabel: 'Find People Now coordination flow', device: 'mobile', actions: [{ type: 'github', label: 'GitHub', href: 'https://github.com/egger-meow/find-people-now' }, { type: 'docs', label: 'Documentation', href: 'https://github.com/egger-meow/find-people-now/tree/main/docs' }] },
];

const zhExperience = [{ company: '智邦科技（Accton Technology）', position: '研發實習生', period: '2025.03 — 2025.10', achievements: ['開發 Log Parsing 系統與 Dashboard Backend，整合 Drain3、規則解析、Kafka 與 TimescaleDB 串流處理。', '主動推進 LLM-SQL 技術探索，研究 VANNA 與 RSL-SQL，改善 schema context 與欄位描述。', '使用 Git、code review 與自動化檢查，將研究原型推進為可整合的工程成果。'], images: ['/imgs/accton_page-0001.jpg', '/imgs/accton.jpg'] }, { company: '台灣積體電路製造（TSMC）', position: 'IT 實習生', period: '2024.07 — 2024.08', achievements: ['參與內部軟體系統開發，從既有流程與使用情境釐清需求並交付功能。', '使用 TypeScript、React、Java 與 Azure DevOps，在 Scrum 團隊中完成開發、驗證與協作。'], images: ['/imgs/tsmc.jpg'] }];
const enExperience = [{ company: 'Accton Technology', position: 'R&D Intern', period: 'Mar 2025 — Oct 2025', achievements: ['Built a log-parsing system and dashboard backend using Drain3, rule parsing, Kafka, and TimescaleDB streaming.', 'Initiated LLM-to-SQL exploration around VANNA and RSL-SQL, improving schema context and column descriptions.', 'Used Git, code review, and automated checks to move research prototypes toward integration-ready outcomes.'], images: ['/imgs/accton_page-0001.jpg', '/imgs/accton.jpg'] }, { company: 'Taiwan Semiconductor Manufacturing Company (TSMC)', position: 'IT Intern', period: 'Jul 2024 — Aug 2024', achievements: ['Contributed to internal software by clarifying existing workflows and user needs, then delivering functionality.', 'Worked with TypeScript, React, Java, and Azure DevOps in a Scrum team across implementation and verification.'], images: ['/imgs/tsmc.jpg'] }];

const selected = (en = false) => [
  {
    name: en ? 'Client B&B Website' : '客戶民宿網站',
    status: 'Client Project',
    description: en
      ? 'Won a real client through outreach; handled requirements discovery, visual/content design, full-stack implementation, and delivery. Built the reservation database, admin management portal, and LINE Bot integration, and assisted with local NAS deployment.'
      : '從陌生開發取得真實客戶，進行需求訪談、內容與視覺整理、全端設計實作與交付。建置訂房資料庫、管理者後台系統與 LINE Bot 串接通知，並協助部署於本地 NAS，把模糊需求轉化為穩定運作的完整成果。',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'LINE Bot', 'Database', 'NAS'],
    image: '/imgs/projects/bnb.png',
    actions: [{ type: 'live', label: en ? 'View Website' : '查看網站', href: 'https://8688bnb.com' }]
  },
  {
    name: 'DonationBar',
    status: 'In Progress',
    description: en
      ? 'A cross-platform realtime donation aggregation overlay designed to consolidate donation totals across multiple creator platforms. Uses Server-Sent Events (SSE) for realtime OBS synchronization and an admin interface, currently in active phased development.'
      : '面向全球創作者的跨平台即時贊助進度整合工具，目標匯整分散在各贊助管道的金額總額。透過 Server-Sent Events (SSE) 即時同步 OBS 疊層進度條與管理後台，目前正持續推進階段性交付。',
    stack: ['Node.js', 'SSE', 'OBS', 'REST APIs', 'Multi-Platform'],
    image: '/imgs/projects/donationbar.png',
    actions: [{ type: 'github', label: 'GitHub', href: 'https://github.com/egger-meow/donationBar-ecpay-obs' }]
  }
];

const zhStory = {
  title: '自傳與核心理念',
  navLabel: '自傳',
  quote: '想法本身並不稀有，真正拉開差距的是行動。—— 一次只把一件事情做到最好。',
  quoteAuthor: '侯均頲 Chun-Ting Hou',
  intro: '我不希望 AI 只是履歷上的關鍵字，而是當面對現實問題時，能將其拆解、設計流程、調用模型與工具，把模糊需求落實為真正可被依賴的成果。',
  chapters: [
    {
      badge: '學術與數理基石',
      title: '數理底蘊與雙主修跨域探索',
      icon: 'Award',
      summary: '從小培養扎實的數理邏輯，大學由管理科學系主動跨域雙主修資訊工程學系，打下嚴謹的演算法、資料結構與系統實作基礎。',
      paragraphs: [
        '國中會考以 5A9+（作文五級分）錄取新竹高中第一志願（達建中錄取標準），並在國中 AMC8、高中 AMC12 均取得 PR97 獲得 AIME 邀請資格。這段數理訓練讓我習慣以邏輯與結構思考問題。',
        '進入國立陽明交通大學後，我從管理科學系出發，主動申請並完成資訊工程學系雙主修。比起單純的天賦標籤，我更在乎的是將理解力轉化為實質產出的工程能力，並以優異成績錄取陽明交大數據科學與工程研究所碩士班。'
      ],
      highlights: [
        '5A9+ 錄取新竹高中（達建中標準）',
        'AMC8 / AMC12 PR97 (AIME 邀請)',
        '陽明交大管科系 雙主修資工系',
        '人工智慧概論 A+ (全班 2/113)'
      ]
    },
    {
      badge: '行動力與 AI 槓桿',
      title: '不等待環境改變，主動以行動與技術破局',
      icon: 'Flame',
      summary: '遇到問題時，我習慣直接動手拆解、建立自動化流程並快速驗證，讓 AI 成為大幅放大個人行動半徑的槓桿。',
      paragraphs: [
        '研究所爭取指導：錄取時面對熱門教授名額緊張，我不被動等待，而是運用 AI 全面分析各實驗室論文與研究方向，撰寫客製化策略郵件主動聯繫，成功爭取到心目中理想的教授，確立 NLP、資訊檢索、LLM 與 Agent 系統的深入研究機會。',
        '宜蘭服役陌生提案：服役期間為了解決新竹與宜蘭長途往返的通勤痛點，我寫程式爬蟲整理宜蘭 600+ 間民宿資料，自動化寄發 60+ 封客製合作提案，成功為民宿老闆建置全端網站、訂房資料庫、管理者後台、LINE Bot 串接並協助部署於本地 NAS，以技能換取住宿，徹底解決生活難題。',
        '交大黑客松即時活動 App：在宿舍想打球卻找不到球友時，我沒有等待，立刻以 Flutter + Supabase 開發「敢不敢揪」校園即時活動配對 MVP 投入交大黑客松，把日常痛點在最短時間內做成可驗證的產品。'
      ],
      highlights: [
        'AI 輔助精準分析爭取碩士指導教授',
        '程式自動化陌生開發 600+ 民宿並交付全端系統',
        '從生活痛點快速孵化「敢不敢揪」Flutter MVP'
      ]
    },
    {
      badge: '工程歷練與風險韌性',
      title: '嚴謹的工程規範與對風險的真實敬畏',
      icon: 'ShieldCheck',
      summary: '在頂尖企業實習中體會規模化協作與可靠度，在個人量化交易的逆境中學會以客觀數據代替直覺。',
      paragraphs: [
        '在台積電（TSMC）BSID 擔任實習生期間，我以 Full-stack Developer 參與全球請假系統開發，深入實踐 Docker、Kubernetes、CI/CD、Git 與 Scrum 流程；在智邦科技與日立永大產學合作中，實作串流解析與 AutoEncoder 電梯異常偵測，深刻體會軟體可靠度與架構規範的重要性。',
        '在加密貨幣市場中，我曾自行開發程式交易系統，也曾歷經嚴重的虧損與低潮。這段真實的市場洗禮讓我學會不再浪漫化失敗，而是將每一次錯誤視為昂貴且珍貴的數據，建立起對風險管理、嚴格停損與「可驗證方法」的敬畏心。'
      ],
      highlights: [
        '台積電 BSID 全球系統開發實務',
        '智邦科技與日立永大產學合作專題',
        '量化交易實戰培養的極致風險與數據意識'
      ]
    },
    {
      badge: '當前承諾與未來願景',
      title: '一次只把一件事做到最好，全力推廣紙屬英文',
      icon: 'Target',
      summary: '在 AI 時代能做的事情太多，我選擇克制並全神貫注：把「紙屬英文」打造成家長與孩子能深度依賴的教材系統。',
      paragraphs: [
        '因為能做的事情太多，更需要懂得聚焦。如果什麼都碰一點，最後就無法做到極致。我目前全力投入推廣「紙屬英文（Paper English）」，以最嚴謹的每週自動化產製與回饋機制，為台灣國小與國中學生量身打造真正適性、高質量的可列印個人化英文教材。',
        '我給自己的目標是成為「最會使用 AI 解決問題的人」——站在 AI 的肩膀上，但腳步踩得無比扎實。把別人眼中的限制，轉化為資料、API、Agent 與能切實運行的系統。'
      ],
      highlights: [
        '專注推廣「紙屬英文」每週個人化教材',
        '確定性驗證守護每週教材交付品質',
        '站穩 AI 時代，以工程能力創造真實價值'
      ]
    }
  ]
};

const enStory = {
  title: 'Personal Story & Journey',
  navLabel: 'Story',
  quote: 'Ideas are not scarce; action is what creates the gap. Focus on doing one thing exceptionally well at a time.',
  quoteAuthor: 'Chun-Ting Hou',
  intro: 'I do not treat AI as a mere resume buzzword. When confronted with real problems, I decompose them, design workflows, and orchestrate models and tools to turn ambiguous needs into dependable outcomes.',
  chapters: [
    {
      badge: 'Academic & Mathematical Foundation',
      title: 'Mathematical Rigor & Double Major Journey',
      icon: 'Award',
      summary: 'Built strong mathematical intuition from early on, entering NYCU in Management Science and completing a double major in Computer Science with rigorous systems and algorithmic depth.',
      paragraphs: [
        'Scored 5A9+ (essay score 5) on the Comprehensive Assessment Program, admitting to National Hsinchu High School (meeting Taipei First Girls/Jianguo High School admission benchmarks), with 97th percentile scores in AMC8 and AMC12 earning AIME invitations. This solid mathematical background formed my analytical thinking.',
        'At National Yang Ming Chiao Tung University (NYCU), I started in Management Science and proactively pursued and completed a Double Major in Computer Science. Valuing practical delivery over labels, I earned an A+ in Intro to AI (ranked 2/113) and gained admission to NYCU’s graduate Institute of Data Science and Engineering.'
      ],
      highlights: [
        '5A9+ Admission to Hsinchu High (Jianguo benchmark)',
        'AMC8 / AMC12 PR97 (AIME Invitation)',
        'NYCU Double Major: Mgmt Science & Computer Science',
        'Intro to AI A+ (Ranked 2/113)'
      ]
    },
    {
      badge: 'High Agency & AI Leverage',
      title: 'Creating Solutions Through Action & Technical Leverage',
      icon: 'Flame',
      summary: 'When facing constraints, I take direct action, build automated pipelines, and leverage AI to dramatically expand personal execution bandwidth.',
      paragraphs: [
        'Securing Graduate Advising: Facing competitive graduate lab availability, I used AI to analyze faculty papers and research directions, crafting tailored outreach strategies that successfully secured advising in NLP, Information Retrieval, LLMs, and Agent systems.',
        'Cold Outreach & Delivery in Yilan: During military service in Yilan, I built automated scrapers gathering 600+ local B&Bs and sent 60+ personalized collaboration proposals. This landed a full-stack project building a website, booking database, admin portal, LINE Bot, and local NAS deployment—exchanging technical value for accommodation.',
        'Fast MVP Incubation for Hackathon: When looking for basketball partners in the dorm, I immediately prototyped "Find People Now" using Flutter and Supabase for the NYCU Hackathon, turning an everyday pain point into a functioning MVP without delay.'
      ],
      highlights: [
        'AI-assisted precision outreach for graduate research advising',
        'Automated pipeline reaching 600+ B&Bs to deliver full-stack NAS system',
        'Rapid incubation of "Find People Now" Flutter MVP from real pain points'
      ]
    },
    {
      badge: 'Engineering Depth & Resilience',
      title: 'Engineering Rigor & Genuine Respect for Risk',
      icon: 'ShieldCheck',
      summary: 'Learned scalable industry practices through enterprise internships, while quantitative trading drawdowns instilled disciplined risk management and data verification.',
      paragraphs: [
        'As a full-stack engineering intern at TSMC BSID, I contributed to the global leave system across Docker, Kubernetes, CI/CD, and Scrum workflows. At Accton and Hitachi Yungtay, I implemented streaming log parsing and AutoEncoder anomaly detection, developing deep appreciation for system reliability.',
        'In cryptocurrency markets, I developed quantitative trading systems and experienced severe drawdowns. Rather than romanticizing failure, I treated these setbacks as costly, invaluable data—building deep respect for verifiable methods, strict risk controls, and emotion-free execution.'
      ],
      highlights: [
        'Enterprise system development at TSMC BSID',
        'Industry collaborations with Accton & Hitachi Yungtay',
        'Disciplined risk and verification mindset forged through algorithmic trading'
      ]
    },
    {
      badge: 'Current Focus & Commitment',
      title: 'Mastering One Thing at a Time: Dedication to Paper English',
      icon: 'Target',
      summary: 'Amid countless possibilities in the AI era, I choose deliberate focus: engineering Paper English into a trusted, dependable weekly learning system for families.',
      paragraphs: [
        'With AI expanding what is possible, focus becomes the ultimate differentiator. I am fully dedicated to scaling "Paper English" (紙屬英文), combining weekly automated generation contracts and deterministic QA to deliver tailored, printable learning packages for elementary and junior high students in Taiwan.',
        'My overarching goal is to be exceptionally capable at using AI to solve problems—standing firmly on AI’s shoulders to transform constraints into data, APIs, autonomous agents, and dependable software.'
      ],
      highlights: [
        'Dedicated to scaling Paper English weekly adaptive materials',
        'Deterministic validation protecting weekly lesson delivery',
        'Building enduring real-world value with grounded engineering'
      ]
    }
  ]
};

const skills = [{ label: 'Product Engineering', items: ['React', 'Next.js', 'Flutter', 'TypeScript', 'Tailwind CSS'] }, { label: 'Backend & Data', items: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Supabase', 'SQLite', 'Kafka'] }, { label: 'Systems', items: ['WebSocket', 'Realtime', 'Docker', 'REST APIs', 'Auth / RLS', 'PDF Pipelines'] }, { label: 'Quality & Delivery', items: ['Automated Tests', 'Lint / Typecheck / Build', 'Browser / E2E QA', 'Git', 'CI/CD'] }];

export const cvData = {
  zh: {
    name: '侯均頲',
    contact: { address: '新竹', ...links },
    hero: {
      kicker: 'PRODUCT + SYSTEMS BUILDER',
      tagline: '我把問題做成真正能用的產品與系統',
      subline: '陽明交大管科系雙主修資工系背景，曾在台積電與智邦科技參與軟體與 AI 系統開發，目前朝數據科學與工程研究所深造。從需求釐清、產品設計到可靠交付，我在意的是讓技術真的解決問題。',
      photo: '/imgs/hero/portrait.jpg',
      photoLabel: '個人照片',
      stats: [
        { value: '3', label: '項重點產品與系統' },
        { value: '2', label: '段產業軟體經驗' },
        { value: '1', label: '個完整客戶專案' },
        { value: 'NYCU', label: '管科與資工雙主修背景' }
      ],
      ctas: { github: 'GitHub', email: '聯絡我', pdf: '下載 PDF' }
    },
    sections: {
      systems: {
        title: '精選作品',
        navLabel: '精選作品',
        intro: '從面向家庭的正式產品，到安全優先的交易系統與校園活動配對 MVP；每個專案都從真實情境出發，並以可驗證、可維護的方式落地。',
        featured: zhFeatured,
        selectedTitle: '更多作品',
        selected: selected()
      },
      story: zhStory,
      experience: {
        title: '工作經歷',
        navLabel: '工作經歷',
        content: zhExperience
      },
      education: {
        title: '教育與研究',
        navLabel: '教育與研究',
        education: [
          {
            school: '國立陽明交通大學（NYCU）',
            degree: '資料科學與工程研究所 碩士班',
            period: '2026.09 — 2028.06（預計）',
            details: [
              '已錄取 115 學年度碩士班；已確立指導教授，研究方向聚焦自然語言處理（NLP）、資訊檢索（IR）、大型語言模型（LLM）與 Agent 系統。'
            ]
          },
          {
            school: '國立陽明交通大學（NYCU）',
            degree: '管理科學系 學士（雙主修 資訊工程學系）',
            period: '2020.09 — 2026.01',
            details: [
              'GPA 3.54；修習人工智慧、資料庫、網路、軟體工程與系統相關課程。',
              '人工智慧概論 A+、全班 2/113；透過專題與實習累積產品、後端與應用 AI 經驗。'
            ],
            transcript: 'https://drive.google.com/file/d/1GWsNsBEHQsyV--4gdBoJuB9koXrW8UZZ/view',
            diplomas: [
              { type: '中文畢業證書', image: '/imgs/nycu_Diplonma_ch.jpg' },
              { type: '英文畢業證書', image: '/imgs/nycu_Diplonma_en.jpg' }
            ]
          }
        ],
        researchIntro: '已確立研究所指導教授，未來研究方向聚焦自然語言處理（NLP）、資訊檢索（Information Retrieval）、大型語言模型（LLM）與智慧代理（Agent）系統。',
        researchTodo: '研究焦點：結合大型語言模型、資訊檢索與 Agent 架構，探索高可靠度與實用性的智慧系統。',
        academic: {
          name: '日立永大電梯產學合作專題',
          status: 'Academic Collaboration',
          description: '與日立永大合作進行電梯再平層異常偵測，負責資料探索、AutoEncoder 模型實作與實驗分析，將工程資料中的異常模式轉化為可驗證的研究問題。',
          link: 'https://github.com/egger-meow/CS-Undergraduate-Project/tree/main/docs'
        }
      },
      skills: {
        title: '技能',
        navLabel: '技能',
        groups: skills,
        deepening: '持續深化後端與系統設計，同時保留從需求、介面到上線驗證的完整產品視角。'
      },
      about: {
        title: '更多 / 關於我',
        navLabel: '更多 / 關於',
        intro: '我喜歡把模糊、跨領域的問題拆成可以交付與驗證的產品。AI 是提高探索與實作效率的工具，但架構判斷、風險取捨與品質責任仍由人承擔。',
        practicesTitle: '我的開發方式',
        practices: [
          { name: '先理解問題', description: '從使用者、限制與失敗情境開始，先定義值得解決的問題，再選擇技術。' },
          { name: '架構與人為判斷', description: '把系統拆成清楚邊界；必要時用 AI 協助研究與實作，但關鍵決策有明確理由與可追溯性。' },
          { name: '自動化品質閘門', description: '依專案使用測試、lint、typecheck、build、contract 與安全檢查，讓變更在整合前被驗證。' },
          { name: '真實環境驗證', description: '以 E2E 或瀏覽器檢查主要流程、響應式版面與錯誤狀態，再透過版本控制與產品回饋持續迭代。' }
        ],
        earlierTitle: 'Earlier Coursework',
        earlierSummary: '早期課程作品包含資料庫網站、QT 電商介面、桌布分享平台與 C++ / SDL2 Mini Metro 模擬；完整紀錄保留在 GitHub 與下載版履歷，不佔用主要閱讀動線。',
        earlierLink: 'https://github.com/egger-meow?tab=repositories',
        languages: '中文（母語）｜英文（TOEIC 870、IELTS 6.5）'
      }
    }
  },
  en: {
    name: 'Chun-Ting Hou',
    contact: { address: 'Hsinchu, Taiwan', ...links },
    hero: {
      kicker: 'PRODUCT + SYSTEMS BUILDER',
      tagline: 'I turn real problems into products and systems that work.',
      subline: 'NYCU graduate with a double major in Management Science and Computer Science, with software and applied-AI experience at TSMC and Accton, now heading toward graduate study in Data Science and Engineering. I work from problem framing and product design through reliable delivery.',
      photo: '/imgs/hero/portrait.jpg',
      photoLabel: 'Portrait',
      stats: [
        { value: '3', label: 'featured products & systems' },
        { value: '2', label: 'industry engineering roles' },
        { value: '1', label: 'end-to-end client delivery' },
        { value: 'NYCU', label: 'Mgmt Sci & CS double major' }
      ],
      ctas: { github: 'GitHub', email: 'Contact Me', pdf: 'Download PDF' }
    },
    sections: {
      systems: {
        title: 'Featured Work',
        navLabel: 'Featured Work',
        intro: 'From a production family product to safety-first trading infrastructure and a campus coordination MVP, each project starts with a real context and is built to be testable, maintainable, and useful.',
        featured: enFeatured,
        selectedTitle: 'More Work',
        selected: selected(true)
      },
      story: enStory,
      experience: {
        title: 'Experience',
        navLabel: 'Experience',
        content: enExperience
      },
      education: {
        title: 'Education & Research',
        navLabel: 'Education & Research',
        education: [
          {
            school: 'National Yang Ming Chiao Tung University (NYCU)',
            degree: 'M.S. path, Institute of Data Science and Engineering',
            period: 'Sep 2026 — Jun 2028 (expected)',
            details: [
              'Admitted for the 2026 academic year. Advising professor confirmed; research focus centers on Natural Language Processing (NLP), Information Retrieval (IR), Large Language Models (LLM), and Agent systems.'
            ]
          },
          {
            school: 'National Yang Ming Chiao Tung University (NYCU)',
            degree: 'B.S. in Management Science (Double Major in Computer Science)',
            period: 'Sep 2020 — Jan 2026',
            details: [
              'GPA 3.54; coursework across AI, databases, networking, software engineering, and systems.',
              'A+ and 2nd of 113 in Introduction to AI; built practical depth through projects and industry roles.'
            ],
            transcript: 'https://drive.google.com/file/d/1GWsNsBEHQsyV--4gdBoJuB9koXrW8UZZ/view',
            diplomas: [
              { type: 'Chinese Diploma', image: '/imgs/nycu_Diplonma_ch.jpg' },
              { type: 'English Diploma', image: '/imgs/nycu_Diplonma_en.jpg' }
            ]
          }
        ],
        researchIntro: 'Advising professor confirmed; graduate research focus centers on Natural Language Processing (NLP), Information Retrieval (IR), Large Language Models (LLM), and Agent systems.',
        researchTodo: 'Research Focus: Combining LLMs, Information Retrieval, and Agent architectures for reliable, practical intelligent systems.',
        academic: {
          name: 'Hitachi Yungtay Elevator Industry–Academia Collaboration',
          status: 'Academic Collaboration',
          description: 'Worked with Hitachi Yungtay on elevator re-leveling anomaly detection, covering data exploration, AutoEncoder implementation, and experiment analysis to turn engineering signals into a testable research problem.',
          link: 'https://github.com/egger-meow/CS-Undergraduate-Project/tree/main/docs'
        }
      },
      skills: {
        title: 'Skills',
        navLabel: 'Skills',
        groups: skills,
        deepening: 'I am deepening backend and systems design while retaining an end-to-end product view from requirements through interface and production verification.'
      },
      about: {
        title: 'More / About',
        navLabel: 'More / About',
        intro: 'I enjoy turning ambiguous, cross-domain problems into products that can be delivered and verified. AI can accelerate research and implementation, but architecture, risk trade-offs, and quality ownership remain human responsibilities.',
        practicesTitle: 'How I Build',
        practices: [
          { name: 'Understand the problem', description: 'Start with users, constraints, and failure cases; define the problem worth solving before selecting technology.' },
          { name: 'Architecture and judgment', description: 'Create clear boundaries and use AI where useful, while keeping important decisions reasoned and traceable.' },
          { name: 'Automated quality gates', description: 'Use project-appropriate tests, lint, typecheck, build, contract, and security checks before integration.' },
          { name: 'Validate in the real interface', description: 'Review core flows, responsive layouts, and failure states through E2E or browser verification, then iterate through source control and product feedback.' }
        ],
        earlierTitle: 'Earlier Coursework',
        earlierSummary: 'Earlier work includes a database website, QT commerce UI, wallpaper-sharing platform, and a C++/SDL2 Mini Metro simulation. The full record remains on GitHub and in the downloadable CV without competing with the main reading flow.',
        earlierLink: 'https://github.com/egger-meow?tab=repositories',
        languages: 'Chinese (native) · English (TOEIC 870, IELTS 6.5)'
      }
    }
  }
};
