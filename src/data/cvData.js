export const cvData = {
  zh: {
    name: "侯均頲",
    contact: {
      address: "新竹市東區埔頂三路",
      email: "inpire.mg09@nycu.edu.tw",
      phone: "(+886) 977-427-519",
      linkedin: "www.linkedin.com/in/jj-mow-8b903b295",
      github: "https://github.com/egger-meow"
    },
    sections: {
      education: {
        title: "教育背景",
        content: [
          {
            school: "國立陽明交通大學（NYCU）",
            degree: "管理科學系、資訊工程學系 雙主修",
            period: "2020.09 - 2025",
            details: [
              "GPA: 總平均：3.53 (207學分) 系上排名約50%",
              "課程表現：人工智慧概論（A+）（排名2/135）、進階物件導向程式設計（A+）、機器學習導論（A）、資料庫系統導論（A）、前端網頁系統開發概論（A+）"
            ],
            transcript: "https://drive.google.com/file/d/1XDerdsdUbl4nnVDsqubJbxPvKZfzUoPh/view?usp=sharing"
          }
        ]
      },
      skills: {
        title: "專業技能",
        content: {
          languages: "精通 C++, Python；熟悉 JavaScript(TypeScript), Golang, Java",
          tools: "Git, PyTorch, Azure DevOps, React, MySQL",
          expertise: "AI模型、網頁前後端開發、資料庫管理"
        }
      },
      experience: {
        title: "工作經驗",
        content: [
          {
            company: "Accton Technology Corp.",
            position: "RD-軟體工程實習生",
            period: "2025.03 - 現在",
            achievements: [
              "主導測試機器 Log Parsing 框架設計，目前仍為生產環境 Dashboard Backend 的核心；另開發 Drain3+RuleParser，已完成並被團隊延伸開發",
              "Log Kafka + TimescaleDB 串聯框架（streaming)：設計並開發完整 pipeline，已成功通過環境測試，為日後大規模時序資料處理奠定基礎",
              "LLM-SQL 整合：採用輕量框架 VANNA 並結合先進的 RSL-SQL (於 BIRD 基準測試中展現優異效能) 演算法",
              "建立 LLM 背景資料維護框架（context、column description…），確保系統可持續、穩定維護",
              "經常負責協助 程式碼重構與最佳化，憑藉清晰的架構設計直覺與 AI 工具整合能力，顯著提升專案品質",
              "擔任團隊 Git 專家，協助版本控管流程設計與問題解決"
            ]
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
            image: "/Me/imgs/tsmc.jpg"
          },
          {
            company: "優式資本 UC Capital",
            position: "AI 量化新星計畫徵選",
            period: "2025.06",
            achievements: [
              "從 942 位申請者中脫穎而出，受邀參與徵選說明會與筆試測驗（共計 114 人入選，最終錄取約 10–20 人）",
              "參與數學與邏輯筆試測驗，展現運算思維與問題解決能力",
              "與 AWS 台灣區總經理、雲端架構師及優式資本創辦人互動交流，深入了解 AI 在量化金融領域的應用前景",
              "雖最終未能進入正式錄取名額，但仍在嚴格競爭過程中展現自身能力，並累積量化與金融科技交叉領域的寶貴經驗"
            ],
            image: "/Me/imgs/優勢資本.jpg"
          }
        ]
      },
      projects: {
        title: "專題與專案",
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
                description: "使用MySQL、JavaScript、JQuery、PHP及XAMPP，打造完整後端服務",
                github: "https://github.com/egger-meow/DBproject"
              },
              {
                name: "Wallpaper Sharing Platform",
                description: "使用Bootstrap、Node.js與MongoDB開發壁紙分享平台，實現照片上傳、瀏覽、標籤搜尋、點讚功能",
                image: "/Me/imgs/wallpaper.png",
                github: "https://github.com/egger-meow/Wallpaper_Project"
              },
              {
                name: "電商平台（E-commerce Platform）",
                description: "使用QT框架，以QMap作為資料儲存，實現商品搜尋、購物車管理、訂單處理及商品評價功能，並有效解決商品資料庫儲存問題（進階物件導向課程專題）",
                image: "/Me/imgs/QT.png",
                github: "https://github.com/egger-meow?tab=repositories"
              },
              {
                name: "Mini Metro遊戲開發",
                description: "使用C++及SDL2及物件導向程式設計(OOP)實作模擬經營地鐵遊戲，負責上下車演算法設計、乘客移動、物理加減速模擬及畫面輸出效果",
                image: "/Me/imgs/minimetro.png",
                github: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Ffile.notion.so%2Ff%2Ff%2F4d1d5705-9ce3-4350-82ed-c1b50f1cd96b%2Fff21d4f7-a327-439a-9fe7-b0df5e4fcd4b%2F109511100_%25E6%25A2%2581%25E6%25B5%25A9%25E5%2593%25B2_109511226_%25E6%25B9%25AF%25E7%259D%25BF%25E5%25BB%25B7_109700046_%25E4%25BE%25AF%25E5%259D%2587%25E9%25A0%25B2_Mini_Metro.docx%3Ftable%3Dblock%26id%3Da737f35f-d374-4a35-8061-c3bf0dfbbd81%26spaceId%3D4d1d5705-9ce3-4350-82ed-c1b50f1cd96b%26expirationTimestamp%3D1757721600000%26signature%3DX9S_i_E0ESQsOU1dNMjPJF5fqoaB0XT-cjy9DvOkhvA%26downloadName%3D109511100_%25E6%25A2%2581%25E6%25B5%25A9%25E5%2593%25B2_109511226_%25E6%25B9%25AF%25E7%259D%25BF%25E5%25BB%25B7_109700046_%25E4%25BE%25AF%25E5%259D%2587%25E9%25A0%25B2_Mini_Metro.docx&wdOrigin=BROWSELINK"
              }
            ],
            note: "另外許多因自身興趣或朋友需求而開發的專案都可以參閱我的 github 連結",
            github: "https://github.com/egger-meow?tab=repositories"
          }
        ]
      },
      extracurricular: {
        title: "課外經驗",
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
        content: "中文（母語）| 英文（精通）"
      },
      personality: {
        title: "個人特質",
        content: {
          intro: "我並不是典型的「愛讀書型」學生，更像是一個對感興趣的事物特別投入的人。雖然未經正式醫院診斷，但依自己與旁人的觀察，推測我可能有 ADHD，這使我在大多數事情上較難保持專注或長期投入（成績也多少反映了這一點）。",
          passion: "然而，當面對真正感興趣的主題時，我總能全力以赴：從小學時的數學測驗，到大學的 AI 專題與課程，再到 TSMC 暑期實習，我都用成果證明了熱情能轉化為技術與成就。",
          exploration: "我也非常積極探索自己的興趣。從修課選擇上，我從不因課程「涼」來決定是否修課（除非通識或本學期推甄準備），而是積極地全方位探索自己真正想學的內容，並對相中課程全力以赴。熱愛探索、積極學習，是我最真實的寫照。",
          traits: [
            "協作力強：擅長團隊合作（程式上）",
            "技術好奇心：熱衷學習新技術並快速應用",
            "抗壓性佳：能在高壓情境下保持穩定輸出",
            "興趣多元：吉他、加密貨幣、運動",
            "人格特質：MBTI: ISFP-A"
          ]
        }
      }
    }
  },
  en: {
    name: "Chun-Ting, Hou",
    contact: {
      address: "Puding 3rd Rd., East Dist., Hsinchu City",
      email: "inpire.mg09@nycu.edu.tw",
      phone: "(+886) 977-427-519",
      linkedin: "www.linkedin.com/in/jj-mow-8b903b295",
      github: "https://github.com/egger-meow"
    },
    sections: {
      education: {
        title: "Education",
        content: [
          {
            school: "National Yang Ming Chiao Tung University (NYCU)",
            degree: "Double Major in Management Science & Computer Science",
            period: "2020.09 - 2025",
            details: [
              "GPA: 3.53 (207 credits) Department ranking: ~50%",
              "Course Performance: Introduction to AI (A+, Rank 2/135), Advanced OOP (A+), Introduction to ML (A), Database Systems (A), Frontend Web Development (A+)"
            ],
            transcript: "https://drive.google.com/file/d/1XDerdsdUbl4nnVDsqubJbxPvKZfzUoPh/view?usp=sharing"
          }
        ]
      },
      skills: {
        title: "Professional Skills",
        content: {
          languages: "Proficient: C++, Python; Familiar: JavaScript(TypeScript), Golang, Java",
          tools: "Git, PyTorch, Azure DevOps, React, MySQL",
          expertise: "AI Models, Full-stack Web Development, Database Management"
        }
      },
      experience: {
        title: "Work Experience",
        content: [
          {
            company: "Accton Technology Corp.",
            position: "Intern",
            period: "2025.03 - Present",
achievements: [
              "Led test machine Log Parsing framework design, still serving as core for production Dashboard Backend; developed Drain3+RuleParser, completed and extended by team",
              "Log Kafka + TimescaleDB streaming framework: Designed and developed complete pipeline, successfully passed environment testing, laying foundation for future large-scale time-series data processing",
              "LLM-SQL Integration: Adopted lightweight VANNA framework combined with advanced RSL-SQL algorithm (excellent performance in BIRD benchmark)",
              "Established LLM background data maintenance framework (context, column description...), ensuring sustainable and stable system maintenance",
              "Frequently responsible for code refactoring and optimization, significantly improving project quality with clear architecture design intuition and AI tool integration capabilities",
              "Served as team Git expert, assisting with version control process design and problem solving"
            ]
          },
          {
            company: "Taiwan Semiconductor Manufacturing Company (TSMC)",
            position: "Software Engineering Intern",
            period: "2024.07 - 2024.08",
achievements: [
              "Served as full-stack developer in IT Department (BSID), participated in global employee leave management system development, optimizing user experience and system performance",
              "Fine-tuned system details and differentiated features for two regional employee needs, ensuring cross-regional user accuracy and consistent experience",
              "Technologies: TypeScript (React), Java, Azure DevOps, CI/CD",
              "Practiced Scrum agile development, participated in daily stand-ups and iterative delivery"
            ],
            image: "/Me/imgs/tsmc.jpg"
          },
          {
            company: "UC Capital",
            position: "AI Quantitative Rising Star Program Selection",
            period: "2025.06",
achievements: [
              "Selected from 942 applicants, invited to selection briefing and written test (114 selected, final acceptance ~10-20)",
              "Participated in mathematics and logic written test, demonstrating computational thinking and problem-solving abilities",
              "Interacted with AWS Taiwan General Manager, cloud architects, and UC Capital founder, gaining deep understanding of AI applications in quantitative finance",
              "Though not finally accepted, demonstrated capabilities in rigorous competition and gained valuable experience in quantitative and fintech cross-domain"
            ],
            image: "/Me/imgs/優勢資本.jpg"
          }
        ]
      },
      projects: {
        title: "Projects",
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
                description: "Built complete backend service using MySQL, JavaScript, jQuery, PHP, and XAMPP"
              },
              {
                name: "Wallpaper Sharing Platform",
                description: "Developed wallpaper sharing platform using Bootstrap, Node.js, and MongoDB, implementing photo upload, browsing, tag search, and like features",
                image: "/Me/imgs/wallpaper.png"
              },
              {
                name: "E-commerce Platform",
                description: "Used QT framework with QMap for data storage, implemented product search, cart management, order processing, and product reviews (Advanced OOP course project)",
                image: "/Me/imgs/QT.png"
              },
              {
                name: "Mini Metro Game Development",
                description: "Implemented subway management simulation game using C++ and SDL2 with OOP, responsible for boarding/alighting algorithms, passenger movement, physics acceleration/deceleration simulation, and visual output",
                image: "/Me/imgs/minimetro.png",
                link: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Ffile.notion.so%2Ff%2Ff%2F4d1d5705-9ce3-4350-82ed-c1b50f1cd96b%2Fff21d4f7-a327-439a-9fe7-b0df5e4fcd4b%2F109511100_%25E6%25A2%2581%25E6%25B5%25A9%25E5%2593%25B2_109511226_%25E6%25B9%25AF%25E7%259D%25BF%25E5%25BB%25B7_109700046_%25E4%25BE%25AF%25E5%259D%2587%25E9%25A0%25B2_Mini_Metro.docx%3Ftable%3Dblock%26id%3Da737f35f-d374-4a35-8061-c3bf0dfbbd81%26spaceId%3D4d1d5705-9ce3-4350-82ed-c1b50f1cd96b%26expirationTimestamp%3D1757721600000%26signature%3DX9S_i_E0ESQsOU1dNMjPJF5fqoaB0XT-cjy9DvOkhvA%26downloadName%3D109511100_%25E6%25A2%2581%25E6%25B5%25A9%25E5%2593%25B2_109511226_%25E6%25B9%25AF%25E7%259D%25BF%25E5%25BB%25B7_109700046_%25E4%25BE%25AF%25E5%259D%2587%25E9%25A0%25B2_Mini_Metro.docx&wdOrigin=BROWSELINK"
              }
            ],
            note: "Many other projects developed out of personal interest or friends' needs can be found on my GitHub",
            github: "https://github.com/egger-meow?tab=repositories"
          }
        ]
      },
      extracurricular: {
        title: "Extracurricular Activities",
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
        content: "Chinese (Native) | English (Proficient)"
      },
      personality: {
        title: "Personal Traits",
        content: {
          intro: "I'm not a typical 'bookworm' student, but rather someone who becomes deeply invested in things that interest me. Though not formally diagnosed, based on self and others' observations, I may have ADHD, making it difficult to focus or sustain long-term engagement in most things (grades somewhat reflect this).",
          passion: "However, when facing topics that truly interest me, I always give my all: from elementary school math tests to university AI projects and courses, to TSMC summer internship, I've proven that passion can transform into technical achievement.",
          exploration: "I actively explore my interests. In course selection, I never choose courses based on being 'easy' (except for general education or application preparation), but actively explore what I truly want to learn comprehensively, giving my all to chosen courses. Love for exploration and active learning is my truest portrayal.",
          traits: [
            "Strong Collaboration: Excel at teamwork (programming)",
            "Technical Curiosity: Passionate about learning new technologies and quick application",
            "Stress Resilience: Maintain stable output under high pressure",
            "Diverse Interests: Guitar, cryptocurrency, sports",
            "Personality: MBTI: ISFP-A"
          ]
        }
      }
    }
  }
};
