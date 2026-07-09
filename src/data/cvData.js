// Central CV content. zh and en must stay structurally identical —
// sections are rendered by key lookup, so any key added to one language
// must be added to the other with the same shape.

export const SECTION_ORDER = [
  'systems',
  'experience',
  'education',
  'research',
  'skills',
  'academic',
  'howIBuild',
  'extracurricular',
  'languages',
  'personality',
];

export const cvData = {
  zh: {
    name: "侯均頲",
    contact: {
      address: "新竹市東區埔頂三路",
      email: "jjmow.cs15@nycu.edu.tw",
      phone: "(+886) 977-427-519",
      linkedin: "www.linkedin.com/in/jj-mow-8b903b295",
      github: "https://github.com/egger-meow"
    },
    hero: {
      kicker: "SOFTWARE ENGINEER · SYSTEMS BUILDER",
      tagline: "我打造真實運行的系統",
      subline: "從風險導向的交易基礎設施、真實客戶產品，到應用 AI 系統 —— 下一章：NYCU 數據科學與工程研究所，深入 NLP 與資訊檢索研究。",
      photo: "/Me/imgs/hero/portrait.jpg",
      photoLabel: "個人照片",
      stats: [
        { value: "2026", label: "NYCU 數據所碩士入學" },
        { value: "3+", label: "端到端上線系統" },
        { value: "2", label: "業界實習 TSMC · Accton" },
        { value: "1", label: "真實客戶產品交付" }
      ],
      ctas: {
        github: "GitHub",
        email: "聯絡我",
        pdf: "下載 PDF"
      }
    },
    sections: {
      systems: {
        title: "系統與產品",
        navLabel: "系統",
        intro: "不只是課堂作業 —— 這些是真實運行、有真實使用者或真實資金風險考量的系統。",
        featured: [
          {
            id: "maybech",
            name: "Maybech",
            tag: "風險導向交易基礎設施",
            period: "2025 — 至今",
            description: "本地優先（local-first）的 OKX 永續合約交易與監控工作站：Python daemon 執行核心、FastAPI/WebSocket 控制介面、Next.js 即時儀表板。",
            highlights: [
              "四段式執行模式：simulation → demo → live-safe → live-armed，實盤執行需明確武裝啟動與安全防護",
              "風險優先設計：下單前 preflight 檢查、邏輯倉位追蹤、reduce-only 平倉保護，成交確認後才更新交易狀態",
              "動態倉位規則、BTC 市場狀態（regime）追蹤、帳戶快照、通知系統與訊號持久化"
            ],
            stack: ["Python", "FastAPI", "WebSocket", "Next.js", "OKX API"],
            screenshot: "/Me/imgs/projects/maybech.png",
            screenshotLabel: "儀表板截圖",
            github: "https://github.com/egger-meow/maybech"
          },
          {
            id: "bnb-website",
            name: "民宿品牌官網",
            tag: "真實客戶產品",
            period: "2026",
            description: "透過主動開發客源接下的真實民宿委託案：以 Next.js 打造訂房導向的品牌官網，從業主痛點出發設計照片展示、房型資訊與訂房動線。",
            highlights: [
              "從陌生開發、需求訪談、設計到上線的完整交付流程 —— 不只寫程式，更找到並定義了這個案子",
              "以業主易於維護、易於更新為核心的網站架構思維",
              "訂房轉換導向的 UI/UX：房型展示、照片敘事、行動呼籲動線"
            ],
            stack: ["Next.js", "TypeScript", "React", "TailwindCSS"],
            screenshot: "/Me/imgs/projects/bnb.png",
            screenshotLabel: "網站截圖",
            github: "https://github.com/egger-meow/eight-six-eight-eight"
          },
          {
            id: "donationbar",
            name: "DonationBar — 綠界金流 × OBS",
            tag: "金流整合 × 即時系統",
            period: "2026",
            description: "台灣實況主的捐款解決方案：綠界 ECPay 金流整合、Server-Sent Events 即時進度條 OBS overlay、與管理後台。",
            highlights: [
              "信用卡 / ATM / 超商付款整合，付款完成零延遲更新進度條",
              "SSE 即時推播架構 —— 進度條無需重新整理即時反應",
              "透明背景動畫 overlay、可自訂樣式、目標金額追蹤與捐款紀錄後台"
            ],
            stack: ["Node.js", "ECPay API", "SSE", "OBS Overlay"],
            screenshot: "/Me/imgs/projects/donationbar.png",
            screenshotLabel: "Overlay 截圖",
            github: "https://github.com/egger-meow/donationBar-ecpay-obs"
          }
        ],
        explorationsTitle: "更多探索",
        explorations: [
          {
            name: "Intelligent Course System",
            description: "Flask + Docker 容器化課程管理平台：Slack API 自動化工作區與頻道管理、HedgeDoc 整合、學生申請審核流程。",
            stack: ["Flask", "Docker", "Slack API"],
            github: "https://github.com/egger-meow/intelligent-course-system"
          },
          {
            name: "JJ-Meet",
            description: "旅遊導向交友 App：Node/Express 後端、PostgreSQL + PostGIS 地理配對、Socket.io 即時聊天、React Native (Expo) 前端。",
            stack: ["React Native", "PostGIS", "Socket.io", "Redis"],
            github: "https://github.com/egger-meow/jj-meet"
          }
        ]
      },
      experience: {
        title: "工作經驗",
        navLabel: "經歷",
        content: [
          {
            company: "義務役 (Mandatory Military Service)",
            position: "步槍兵 @ 206旅 (新訓) & 戰車裝填兵 @ 蘭陽指揮部 (下部隊)",
            period: "2026.03 - 2026.06",
            achievements: [
              "已服役完畢 (Completed)"
            ]
          },
          {
            company: "Accton Technology Corp.",
            position: "RD-軟體工程實習生",
            period: "2025.03 - 2025.10",
            achievements: [
              "主導測試機器 Log Parsing 框架設計，目前仍為生產環境 Dashboard Backend 的核心；另開發 Drain3+RuleParser，已完成並被團隊延伸開發",
              "Log Kafka + TimescaleDB 串聯框架（streaming)：設計並開發完整 pipeline，已成功通過環境測試，為日後大規模時序資料處理奠定基礎",
              "LLM-SQL 整合：採用輕量框架 VANNA 並結合先進的 RSL-SQL (於 BIRD 基準測試中展現優異效能) 演算法",
              "建立 LLM 背景資料維護框架（context、column description…），確保系統可持續、穩定維護",
              "經常負責協助 程式碼重構與最佳化，憑藉清晰的架構設計直覺與 AI 工具整合能力，顯著提升專案品質",
              "擔任團隊 Git 專家，協助版本控管流程設計與問題解決"
            ],
            images: ["/Me/imgs/accton_page-0001.jpg", "/Me/imgs/accton.jpg"]
          },
          {
            company: "台灣積體電路製造股份有限公司 (TSMC)",
            position: "IT-軟體工程實習生",
            period: "2024.07 - 2024.08",
            achievements: [
              "於資訊技術部門（BSID）擔任全端開發人員，參與全球員工請假管理系統之功能開發，優化使用者體驗與系統效能",
              "針對兩個地區的員工需求進行系統細節微調與功能差異化設計，確保跨地區使用者的正確性與一致體驗",
              "使用技術：TypeScript (React)、Java、Azure DevOps、CI/CD",
              "實踐 Scrum 敏捷開發流程，參與每日站立會議與迭代交付"
            ],
            images: ["/Me/imgs/tsmc.jpg"]
          }
        ]
      },
      education: {
        title: "教育背景",
        navLabel: "學歷",
        content: [
          {
            school: "國立陽明交通大學（NYCU）碩士",
            degree: "數據科學與工程研究所 碩士班新生 (已報到)",
            period: "2026.09 - 2028.06 (預定)",
            details: [
              "錄取 115 學年度 數據科學與工程研究所 碩士班"
            ],
            images: ["/Me/imgs/數據所報到證明.jpg"]
          },
          {
            school: "國立陽明交通大學（NYCU）學士",
            degree: "管理科學系、資訊工程學系 雙主修",
            period: "2020.09 - 2026.01",
            details: [
              "GPA: 總平均：3.54 (210學分)",
              "課程表現：人工智慧概論（A+）（排名2/113）、進階物件導向程式設計（A+）、機器學習導論（A）、資料庫系統導論（A）、前端網頁系統開發概論（A+）",
              "雙主修背景：管理與產品思維 × 資訊工程 —— 技術與商業視角的交會點"
            ],
            transcript: "https://drive.google.com/file/d/1GWsNsBEHQsyV--4gdBoJuB9koXrW8UZZ/view",
            diplomas: [
              {
                type: "中文畢業證書",
                image: "/Me/imgs/nycu_Diplonma_ch.jpg"
              },
              {
                type: "英文畢業證書",
                image: "/Me/imgs/nycu_Diplonma_en.jpg"
              }
            ]
          }
        ]
      },
      research: {
        title: "研究方向",
        navLabel: "研究",
        intro: "2026 年秋季起於 NYCU 數據科學與工程研究所展開 —— 延續在 Accton 建立 LLM 知識維護框架的實務經驗，走向更深的研究。",
        topics: [
          {
            name: "自然語言處理 (NLP)",
            description: "語言理解與生成的模型方法與應用"
          },
          {
            name: "資訊檢索與抽取 (IR / IE)",
            description: "從大規模資料中精準找到並結構化關鍵資訊"
          },
          {
            name: "RAG 與 LLM 知識維護",
            description: "讓 LLM 的知識可持續更新、可驗證 —— 從實習中的 context 維護框架延伸至研究問題"
          },
          {
            name: "MCP 與 Agent 系統",
            description: "工具使用、代理協作、與可落地的應用 AI 系統"
          }
        ]
      },
      skills: {
        title: "專業技能",
        navLabel: "技能",
        groups: [
          {
            label: "程式語言",
            items: ["Python", "C++", "TypeScript / JavaScript", "Golang", "Java"]
          },
          {
            label: "AI / 資料",
            items: ["PyTorch", "LLM 整合 (RAG · LLM-SQL)", "Kafka", "TimescaleDB", "MySQL / PostgreSQL"]
          },
          {
            label: "後端 / 系統",
            items: ["FastAPI", "WebSocket", "Node.js / Express", "Redis", "Docker", "Azure DevOps"]
          },
          {
            label: "前端 / 產品",
            items: ["React", "Next.js", "React Native", "TailwindCSS"]
          }
        ],
        deepening: "目前正深化：系統設計 · 後端架構 · 佇列與儲存 · 可觀測性"
      },
      academic: {
        title: "學術與課程專題",
        navLabel: "專題",
        epigraph: "來自沒有 AI 輔助的老年代 —— 純手工、一行一行刻出來的",
        content: [
          {
            name: "日立永大電梯產學合作專案",
            advisor: "指導教授：范倫達",
            description: [
              "與日立永大電梯密切合作之異常檢測(再平層) 專案",
              "開發以AutoEncoder為基礎的神經網路模型之變型",
              "利用電梯多維震動訊號與電流感測器資料進行異常狀態自動化檢測，提升檢測效率與準確性"
            ],
            link: "https://github.com/egger-meow/CS-Undergraduate-Project/tree/main/docs"
          },
          {
            name: "課程 Side Projects",
            subProjects: [
              {
                name: "虛擬食物訂購服務後端系統",
                description: "使用MySQL、JavaScript、JQuery、PHP及XAMPP，打造完整後端服務 (資料庫系統課程專題)",
                github: "https://github.com/egger-meow/DBproject"
              },
              {
                name: "Wallpaper Sharing Platform",
                description: "使用Bootstrap、Node.js與MongoDB開發壁紙分享平台，實現照片上傳、瀏覽、標籤搜尋、點讚功能 (前端網頁系統開發概論課程專題)",
                image: "/Me/imgs/wallpaper.png",
                github: "https://github.com/egger-meow/Wallpaper_Project"
              },
              {
                name: "電商平台（E-commerce Platform）",
                description: "使用QT框架，以QMap作為資料儲存，實現商品搜尋、購物車管理、訂單處理及商品評價功能，並有效解決商品資料庫儲存問題（進階物件導向課程專題）",
                image: "/Me/imgs/QT.png",
                github: "https://github.com/egger-meow/SHOPEE_QT"
              },
              {
                name: "Mini Metro遊戲開發",
                description: "使用C++及SDL2及物件導向程式設計(OOP)實作模擬經營地鐵遊戲，負責上下車演算法設計、乘客移動、物理加減速模擬及畫面輸出效果 (物件導向課程專題)",
                image: "/Me/imgs/minimetro.png",
                github: "https://docs.google.com/document/d/1Rya2Sh9H7-ad1qCRE5G3tJQL3_yUr4lzfzfxyyvYU2c/edit?usp=sharing"
              }
            ],
            note: "另外許多因自身興趣，朋友需求，或課程而開發的專案都可以參閱我的 github 連結",
            github: "https://github.com/egger-meow?tab=repositories"
          }
        ]
      },
      howIBuild: {
        title: "我如何開發",
        navLabel: "工作流",
        intro: "現代 AI 協作工程實踐 —— 人主導架構決策，AI 加速實作與驗證。",
        practices: [
          {
            name: "AI 協作開發",
            description: "Claude Code + MCP 工具鏈與 codebase memory，架構由人決策、實作由 AI 加速"
          },
          {
            name: "紀律化迭代",
            description: "toImprove.md 追蹤改進優先序，完成一個邏輯區塊即 commit"
          },
          {
            name: "品質閘門",
            description: "lint / typecheck / build / contract 檢查全數通過才算完成"
          },
          {
            name: "截圖級 QA",
            description: "以實際畫面驗證 UI 行為與使用者流程，而非只看程式碼"
          }
        ]
      },
      extracurricular: {
        title: "課外經驗",
        navLabel: "課外",
        content: [
          {
            organization: "NYCU Google Developer Student Clubs",
            role: "成員",
            period: "2023.09 - 2024.05",
            description: "深入學習並研討機器學習模型如GAN、Transformer，定期進行團隊報告",
            image: "/Me/imgs/GoogleDevelopmentClub.jpg"
          },
          {
            organization: "風城吉他社",
            role: "教學組",
            period: "2022.09 - 2023.05",
            description: "負責制定教學計畫及指導社員進行演出"
          }
        ]
      },
      languages: {
        title: "語言能力",
        navLabel: "語言",
        content: "中文（母語）| 英文（精通  多益 870, 雅思 6.5）",
        ieltsTranscript: "/Me/imgs/雅思成績單_page-0001.jpg",
        ieltsLabel: "查看雅思成績單"
      },
      personality: {
        title: "個人特質",
        navLabel: "特質",
        content: {
          intro: "我對人工智慧與資料科學領域充滿熱忱，尤其在機器學習模型的理論與實務應用上有濃厚興趣。透過產學合作專案與實習經驗，我深刻體會到將學術研究轉化為實際解決方案的價值與挑戰。",
          passion: "當面對真正感興趣的研究主題時，我總能全力以赴並展現高度自律：從大學 AI 課程獲得全班第二名的成績，到日立永大產學合作中獨立開發異常檢測模型，再到 Accton 實習主導 LLM-SQL 整合專案，我持續用成果證明熱情能轉化為紮實的技術能力與研究成果。我期望透過碩士階段的深入研究，進一步探索 AI/ML 領域的前沿問題。",
          exploration: "我積極主動地拓展知識邊界，也不只解被指派的題目：民宿官網案是我主動找到的真實客戶需求，Maybech 是我對市場結構、風險與執行紀律的長期研究實作。我善於閱讀論文並將新技術快速應用於實際專案，例如在 Accton 實習中主動研究並導入 RSL-SQL 演算法。自主學習、追求卓越，是我最真實的寫照。",
          traits: [
            "研究潛力：具備獨立思考與問題解決能力，善於將理論應用於實務",
            "產品思維：從業主與使用者痛點出發，主動找題目、定義方向、完整交付",
            "技術好奇心：熱衷學習新技術、閱讀論文並快速應用於專案",
            "協作力強：擅長跨領域團隊合作與技術溝通",
            "抗壓性佳：能在高壓情境下保持穩定輸出與高品質成果",
            "生活節奏：吉他、籃球、健身，與交易市場中磨出的紀律"
          ]
        }
      }
    }
  },
  en: {
    name: "Chun-Ting, Hou",
    contact: {
      address: "Puding 3rd Rd., East Dist., Hsinchu City",
      email: "jjmow.cs15@nycu.edu.tw",
      phone: "(+886) 977-427-519",
      linkedin: "www.linkedin.com/in/jj-mow-8b903b295",
      github: "https://github.com/egger-meow"
    },
    hero: {
      kicker: "SOFTWARE ENGINEER · SYSTEMS BUILDER",
      tagline: "I build systems that actually run",
      subline: "From risk-aware trading infrastructure and real client products to applied AI systems — next chapter: NLP & information retrieval research at NYCU's Institute of Data Science and Engineering.",
      photo: "/Me/imgs/hero/portrait.jpg",
      photoLabel: "Portrait",
      stats: [
        { value: "2026", label: "Incoming NYCU IDSE M.S." },
        { value: "3+", label: "End-to-end systems shipped" },
        { value: "2", label: "Internships TSMC · Accton" },
        { value: "1", label: "Real client product delivered" }
      ],
      ctas: {
        github: "GitHub",
        email: "Contact Me",
        pdf: "Download PDF"
      }
    },
    sections: {
      systems: {
        title: "Systems & Products",
        navLabel: "Systems",
        intro: "Not classroom exercises — these are systems that actually run, with real users or real capital-risk considerations.",
        featured: [
          {
            id: "maybech",
            name: "Maybech",
            tag: "Risk-Aware Trading Infrastructure",
            period: "2025 — Present",
            description: "A local-first OKX perpetuals trading and monitoring workspace: Python daemon runtime, FastAPI/WebSocket control surface, and a Next.js real-time dashboard.",
            highlights: [
              "Four runtime modes: simulation → demo → live-safe → live-armed; live execution requires explicit arming safeguards",
              "Risk-first design: order preflight checks, logical position tracking, reduce-only exit protection — trade state updates only after authenticated fills",
              "Dynamic position rules, BTC regime tracking, account snapshots, notifications, and persisted signals"
            ],
            stack: ["Python", "FastAPI", "WebSocket", "Next.js", "OKX API"],
            screenshot: "/Me/imgs/projects/maybech.png",
            screenshotLabel: "Dashboard screenshot",
            github: "https://github.com/egger-meow/maybech"
          },
          {
            id: "bnb-website",
            name: "Boutique B&B Website",
            tag: "Real Client Product",
            period: "2026",
            description: "A real B&B client engagement landed through proactive outreach: a booking-oriented brand website built with Next.js, designed from the owner's pain points — photo storytelling, room details, and booking flow.",
            highlights: [
              "Full delivery cycle from cold outreach and requirements interviews to design and launch — I found and defined this engagement, not just coded it",
              "Owner-friendly site architecture: easy to maintain, easy to update",
              "Booking-conversion-oriented UI/UX: room showcases, photo narrative, call-to-action flow"
            ],
            stack: ["Next.js", "TypeScript", "React", "TailwindCSS"],
            screenshot: "/Me/imgs/projects/bnb.png",
            screenshotLabel: "Website screenshot",
            github: "https://github.com/egger-meow/eight-six-eight-eight"
          },
          {
            id: "donationbar",
            name: "DonationBar — ECPay × OBS",
            tag: "Payments × Real-Time Systems",
            period: "2026",
            description: "A donation solution for Taiwanese streamers: ECPay payment integration, a Server-Sent Events real-time progress bar OBS overlay, and an admin dashboard.",
            highlights: [
              "Credit card / ATM / convenience-store payment integration with zero-delay progress updates on completion",
              "SSE push architecture — the progress bar reacts instantly without refreshing",
              "Transparent animated overlay, customizable styling, goal tracking, and donation records admin"
            ],
            stack: ["Node.js", "ECPay API", "SSE", "OBS Overlay"],
            screenshot: "/Me/imgs/projects/donationbar.png",
            screenshotLabel: "Overlay screenshot",
            github: "https://github.com/egger-meow/donationBar-ecpay-obs"
          }
        ],
        explorationsTitle: "More Explorations",
        explorations: [
          {
            name: "Intelligent Course System",
            description: "Containerized course management platform with Flask + Docker: automated Slack workspace/channel administration, HedgeDoc integration, and a student application workflow.",
            stack: ["Flask", "Docker", "Slack API"],
            github: "https://github.com/egger-meow/intelligent-course-system"
          },
          {
            name: "JJ-Meet",
            description: "Travel-oriented dating app: Node/Express backend, PostgreSQL + PostGIS geo-matching, Socket.io real-time chat, React Native (Expo) frontend.",
            stack: ["React Native", "PostGIS", "Socket.io", "Redis"],
            github: "https://github.com/egger-meow/jj-meet"
          }
        ]
      },
      experience: {
        title: "Work Experience",
        navLabel: "Experience",
        content: [
          {
            company: "Mandatory Military Service (Taiwan)",
            position: "Rifleman @ 206th Brigade (Basic Training) & Tank Loader @ Lanyang Command",
            period: "2026.03 - 2026.06",
            achievements: [
              "Completed Mandatory Military Service"
            ]
          },
          {
            company: "Accton Technology Corp.",
            position: "R&D Software Engineering Intern",
            period: "2025.03 - 2025.10",
            achievements: [
              "Led test machine Log Parsing framework design, still serving as core for production Dashboard Backend; developed Drain3+RuleParser, completed and extended by team",
              "Log Kafka + TimescaleDB streaming framework: Designed and developed complete pipeline, successfully passed environment testing, laying foundation for future large-scale time-series data processing",
              "LLM-SQL Integration: Adopted lightweight VANNA framework combined with advanced RSL-SQL algorithm (excellent performance in BIRD benchmark)",
              "Established LLM background data maintenance framework (context, column description...), ensuring sustainable and stable system maintenance",
              "Frequently responsible for code refactoring and optimization, significantly improving project quality with clear architecture design intuition and AI tool integration capabilities",
              "Served as team Git expert, assisting with version control process design and problem solving"
            ],
            images: ["/Me/imgs/accton_page-0001.jpg", "/Me/imgs/accton.jpg"]
          },
          {
            company: "Taiwan Semiconductor Manufacturing Company (TSMC)",
            position: "IT Software Engineering Intern",
            period: "2024.07 - 2024.08",
            achievements: [
              "Served as full-stack developer in IT Department (BSID), participated in global employee leave management system development, optimizing user experience and system performance",
              "Fine-tuned system details and differentiated features for two regional employee needs, ensuring cross-regional user accuracy and consistent experience",
              "Technologies: TypeScript (React), Java, Azure DevOps, CI/CD",
              "Practiced Scrum agile development, participated in daily stand-ups and iterative delivery"
            ],
            images: ["/Me/imgs/tsmc.jpg"]
          }
        ]
      },
      education: {
        title: "Education",
        navLabel: "Education",
        content: [
          {
            school: "National Yang Ming Chiao Tung University (NYCU), Master",
            degree: "Institute of Data Science and Engineering (IDSE), incoming Master's Student",
            period: "2026.09 - 2028.06 (Expected)",
            details: [
              "Admitted to Master's Program in Data Science and Engineering"
            ],
            images: ["/Me/imgs/數據所報到證明.jpg"]
          },
          {
            school: "National Yang Ming Chiao Tung University (NYCU), Bachelor",
            degree: "Double Major in Management Science & Computer Science",
            period: "2020.09 - 2026.01",
            details: [
              "GPA: 3.54 (210 credits)",
              "Course Performance: Introduction to AI (A+, Rank 2/113), Advanced OOP (A+), Introduction to ML (A), Database Systems (A), Frontend Web Development (A+)",
              "Double-major foundation: management & product thinking × computer science — where the technical and business perspectives meet"
            ],
            transcript: "https://drive.google.com/file/d/1XDerdsdUbl4nnVDsqubJbxPvKZfzUoPh/view?usp=sharing",
            diplomas: [
              {
                type: "Chinese Diploma",
                image: "/Me/imgs/nycu_Diplonma_ch.jpg"
              },
              {
                type: "English Diploma",
                image: "/Me/imgs/nycu_Diplonma_en.jpg"
              }
            ]
          }
        ]
      },
      research: {
        title: "Research Direction",
        navLabel: "Research",
        intro: "Starting Fall 2026 at NYCU's Institute of Data Science and Engineering — extending hands-on experience building LLM knowledge-maintenance frameworks at Accton into deeper research.",
        topics: [
          {
            name: "Natural Language Processing (NLP)",
            description: "Model methods and applications for language understanding and generation"
          },
          {
            name: "Information Retrieval & Extraction (IR / IE)",
            description: "Finding and structuring key information precisely from large-scale data"
          },
          {
            name: "RAG & LLM Knowledge Maintenance",
            description: "Keeping LLM knowledge continuously updatable and verifiable — extending the context-maintenance frameworks I built in industry into research questions"
          },
          {
            name: "MCP & Agent Systems",
            description: "Tool use, agent collaboration, and applied AI systems that ship"
          }
        ]
      },
      skills: {
        title: "Professional Skills",
        navLabel: "Skills",
        groups: [
          {
            label: "Languages",
            items: ["Python", "C++", "TypeScript / JavaScript", "Golang", "Java"]
          },
          {
            label: "AI / Data",
            items: ["PyTorch", "LLM Integration (RAG · LLM-SQL)", "Kafka", "TimescaleDB", "MySQL / PostgreSQL"]
          },
          {
            label: "Backend / Systems",
            items: ["FastAPI", "WebSocket", "Node.js / Express", "Redis", "Docker", "Azure DevOps"]
          },
          {
            label: "Frontend / Product",
            items: ["React", "Next.js", "React Native", "TailwindCSS"]
          }
        ],
        deepening: "Currently deepening: system design · backend architecture · queues & storage · observability"
      },
      academic: {
        title: "Academic & Course Projects",
        navLabel: "Projects",
        epigraph: "From the old era before AI assistance — hand-crafted, line by line",
        content: [
          {
            name: "Hitachi Yungtay Elevator Industry-Academia Cooperation Project",
            advisor: "Advisor: Prof. Lun-Da Fan",
            description: [
              "Anomaly detection (re-leveling) project in close cooperation with Hitachi Yungtay Elevator",
              "Developed neural network model variants based on AutoEncoder",
              "Automated anomaly detection using elevator multi-dimensional vibration signals and current sensor data, improving detection efficiency and accuracy"
            ],
            link: "https://github.com/egger-meow/CS-Undergraduate-Project/tree/main/docs"
          },
          {
            name: "Course Side Projects",
            subProjects: [
              {
                name: "Virtual Food Ordering Service Backend System",
                description: "Built complete backend service using MySQL, JavaScript, jQuery, PHP, and XAMPP (Database System course project)",
                github: "https://github.com/egger-meow/DBproject.git"
              },
              {
                name: "Wallpaper Sharing Platform",
                description: "Developed wallpaper sharing platform using Bootstrap, Node.js, and MongoDB, implementing photo upload, browsing, tag search, and like features (Front-end Web System Development course project)",
                image: "/Me/imgs/wallpaper.png",
                github: "https://github.com/egger-meow/Wallpaper_Project.git"
              },
              {
                name: "E-commerce Platform",
                description: "Used QT framework with QMap for data storage, implemented product search, cart management, order processing, and product reviews (Advanced OOP course project)",
                image: "/Me/imgs/QT.png",
                github: "https://github.com/egger-meow/SHOPEE_QT.git"
              },
              {
                name: "Mini Metro Game Development",
                description: "Implemented subway management simulation game using C++ and SDL2 with OOP, responsible for boarding/alighting algorithms, passenger movement, physics acceleration/deceleration simulation, and visual output (OOP course project)",
                image: "/Me/imgs/minimetro.png",
                github: "https://docs.google.com/document/d/1Rya2Sh9H7-ad1qCRE5G3tJQL3_yUr4lzfzfxyyvYU2c/edit?usp=sharing"
              }
            ],
            note: "Many other projects developed out of personal interest or friends' needs can be found on my GitHub",
            github: "https://github.com/egger-meow?tab=repositories"
          }
        ]
      },
      howIBuild: {
        title: "How I Build",
        navLabel: "Workflow",
        intro: "Modern AI-assisted engineering practice — humans own the architecture decisions, AI accelerates implementation and verification.",
        practices: [
          {
            name: "AI-Assisted Development",
            description: "Claude Code + MCP toolchain with codebase memory — architecture decided by humans, implementation accelerated by AI"
          },
          {
            name: "Disciplined Iteration",
            description: "toImprove.md tracks improvement priorities; commit after every coherent chunk of work"
          },
          {
            name: "Quality Gates",
            description: "lint / typecheck / build / contract checks must all pass before anything counts as done"
          },
          {
            name: "Screenshot-Level QA",
            description: "Verify UI behavior and user flows against real rendered screens, not just the code"
          }
        ]
      },
      extracurricular: {
        title: "Extracurricular Activities",
        navLabel: "Activities",
        content: [
          {
            organization: "NYCU Google Developer Student Clubs",
            role: "Member",
            period: "2023.09 - 2024.05",
            description: "In-depth study and discussion of ML models like GAN, Transformer, regular team presentations",
            image: "/Me/imgs/GoogleDevelopmentClub.jpg"
          },
          {
            organization: "Wind City Guitar Club",
            role: "Teaching Team",
            period: "2022.09 - 2023.05",
            description: "Responsible for developing teaching plans and guiding members for performances"
          }
        ]
      },
      languages: {
        title: "Languages",
        navLabel: "Languages",
        content: "Chinese (Native) | English (Proficient | TOEIC 870, IELTS 6.5)",
        ieltsTranscript: "/Me/imgs/雅思成績單_page-0001.jpg",
        ieltsLabel: "View IELTS Transcript"
      },
      personality: {
        title: "Personal Traits",
        navLabel: "Traits",
        content: {
          intro: "I am deeply passionate about AI and data science, with strong interest in both theoretical foundations and practical applications of machine learning. Through industry-academia collaboration projects and internship experiences, I have gained profound appreciation for the value and challenges of translating academic research into real-world solutions.",
          passion: "When facing research topics that truly interest me, I consistently demonstrate dedication and self-discipline: from achieving 2nd place out of 113 students in Introduction to AI, to independently developing anomaly detection models in the Hitachi Yungtay project, to leading the LLM-SQL integration initiative at Accton, I continuously prove that passion translates into solid technical capabilities and research outcomes. I aspire to deepen my exploration of cutting-edge AI/ML problems through graduate studies.",
          exploration: "I proactively expand my knowledge boundaries — and I don't only solve assigned problems: the B&B website engagement was a real client need I found myself, and Maybech is my long-term study of market structure, risk, and execution discipline turned into working software. I excel at reading research papers and rapidly applying new techniques to real projects—for instance, independently researching and implementing the RSL-SQL algorithm during my Accton internship. Self-directed learning and pursuit of excellence define who I am.",
          traits: [
            "Research Potential: Strong independent thinking and problem-solving skills, adept at bridging theory and practice",
            "Product Mindset: Start from owner and user pain points — find the problem, define the direction, deliver end to end",
            "Technical Curiosity: Passionate about learning new technologies, reading papers, and rapid application",
            "Strong Collaboration: Excel at cross-functional teamwork and technical communication",
            "Stress Resilience: Maintain stable, high-quality output under pressure",
            "Life Rhythm: Guitar, basketball, fitness — and the discipline forged in trading markets"
          ]
        }
      }
    }
  }
};
