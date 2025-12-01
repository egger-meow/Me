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
              "GPA: 總平均：3.53 (207學分)",
              "課程表現：人工智慧概論（A+）（排名2/113）、進階物件導向程式設計（A+）、機器學習導論（A）、資料庫系統導論（A）、前端網頁系統開發概論（A+）"
            ],
            transcript: "https://drive.google.com/file/d/1GWsNsBEHQsyV--4gdBoJuB9koXrW8UZZ/view"
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
            ],
            images: ["/Me/imgs/accton_page-0001.jpg","/Me/imgs/accton.jpg"]
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
          },
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
        content: "中文（母語）| 英文（精通  多益 870, 雅思 6.5）",
        ieltsTranscript: "/Me/imgs/雅思成績單_page-0001.jpg"
      },
      personality: {
        title: "個人特質",
        content: {
          intro: "我對人工智慧與資料科學領域充滿熱忱，尤其在機器學習模型的理論與實務應用上有濃厚興趣。透過產學合作專案與實習經驗，我深刻體會到將學術研究轉化為實際解決方案的價值與挑戰。",
          passion: "當面對真正感興趣的研究主題時，我總能全力以赴並展現高度自律：從大學 AI 課程獲得全班第二名的成績，到日立永大產學合作中獨立開發異常檢測模型，再到 Accton 實習主導 LLM-SQL 整合專案，我持續用成果證明熱情能轉化為紮實的技術能力與研究成果。我期望透過碩士階段的深入研究，進一步探索 AI/ML 領域的前沿問題。",
          exploration: "我積極主動地拓展知識邊界。在修課選擇上，我從不以輕鬆為導向，而是積極選修具挑戰性的課程以全方位提升自我。我善於閱讀論文並將新技術快速應用於實際專案，例如在 Accton 實習中主動研究並導入 RSL-SQL 演算法。自主學習、追求卓越，是我最真實的寫照。",
          traits: [
            "研究潛力：具備獨立思考與問題解決能力，善於將理論應用於實務",
            "技術好奇心：熱衷學習新技術、閱讀論文並快速應用於專案",
            "協作力強：擅長跨領域團隊合作與技術溝通",
            "抗壓性佳：能在高壓情境下保持穩定輸出與高品質成果",
            "興趣多元：吉他、閱讀、運動"
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
              "Course Performance: Introduction to AI (A+, Rank 2/113), Advanced OOP (A+), Introduction to ML (A), Database Systems (A), Frontend Web Development (A+)"
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
            ],
            images: ["/Me/imgs/accton.jpg"]
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
            images: ["/Me/imgs/tsmc.jpg"]
          },
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
        content: "Chinese (Native) | English (Proficient | TOEIC 870, IELTS 6.5)",
        ieltsTranscript: "/Me/imgs/雅思成績單_page-0001.jpg"
      },
      personality: {
        title: "Personal Traits",
        content: {
          intro: "I am deeply passionate about AI and data science, with strong interest in both theoretical foundations and practical applications of machine learning. Through industry-academia collaboration projects and internship experiences, I have gained profound appreciation for the value and challenges of translating academic research into real-world solutions.",
          passion: "When facing research topics that truly interest me, I consistently demonstrate dedication and self-discipline: from achieving 2nd place out of 113 students in Introduction to AI, to independently developing anomaly detection models in the Hitachi Yungtay project, to leading the LLM-SQL integration initiative at Accton, I continuously prove that passion translates into solid technical capabilities and research outcomes. I aspire to deepen my exploration of cutting-edge AI/ML problems through graduate studies.",
          exploration: "I proactively expand my knowledge boundaries. In course selection, I never choose based on ease, but actively pursue challenging courses for comprehensive self-improvement. I excel at reading research papers and rapidly applying new techniques to real projects—for instance, independently researching and implementing the RSL-SQL algorithm during my Accton internship. Self-directed learning and pursuit of excellence define who I am.",
          traits: [
            "Research Potential: Strong independent thinking and problem-solving skills, adept at bridging theory and practice",
            "Technical Curiosity: Passionate about learning new technologies, reading papers, and rapid application",
            "Strong Collaboration: Excel at cross-functional teamwork and technical communication",
            "Stress Resilience: Maintain stable, high-quality output under pressure",
            "Diverse Interests: Guitar, reading, sports"
          ]
        }
      }
    }
  }
};
