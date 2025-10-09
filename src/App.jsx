import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cvData } from './data/cvData';
import { Download, Globe, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Sun, Moon, X, Image } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Galaxy from './components/Galaxy';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const ImageModal = ({ isOpen, onClose, imageUrls = [], altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 鎖背景捲動
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [isOpen]);

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);
  
  if (!isOpen || imageUrls.length === 0) return null;

  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[9999] p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden" 
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-4 z-10 flex items-center justify-between">
          {imageUrls.length > 1 && (
            <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              {currentIndex + 1} / {imageUrls.length}
            </div>
          )}
          <div className="flex-1"></div>
          <button
            onClick={onClose}
            className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            aria-label="Close"
          >
            <X size={20} className="text-gray-800" />
          </button>
        </div>
        
        {/* Image Container */}
        <div className="relative w-full h-full flex items-center justify-center p-12">
          <img
            src={imageUrls[currentIndex]}
            alt={`${altText} ${imageUrls.length > 1 ? `(${currentIndex + 1}/${imageUrls.length})` : ''}`}
            className="max-w-full max-h-[70vh] object-contain"
            onError={(e) => {
              console.error('Image failed to load:', imageUrls[currentIndex]);
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999"%3EImage not found%3C/text%3E%3C/svg%3E';
            }}
          />
        </div>
        
        {/* Navigation Buttons */}
        {imageUrls.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 transition-colors shadow-lg"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 transition-colors shadow-lg"
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};

function App() {
  const [language, setLanguage] = useState('zh');
  const [theme, setTheme] = useState('light');
  const [selectedImage, setSelectedImage] = useState(null);
  const resumeRef = useRef(null);
  const data = cvData[language];
  

  // Create refs for each section
  const sectionRefs = {
    education: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    extracurricular: useRef(null),
    languages: useRef(null),
    personality: useRef(null)
  };
  
  // Scroll animations for sections
  const [educationRef, educationVisible] = useScrollAnimation({ threshold: 0.2, delay: 100 });
  const [skillsRef, skillsVisible] = useScrollAnimation({ threshold: 0.2, delay: 200 });
  const [experienceRef, experienceVisible] = useScrollAnimation({ threshold: 0.2, delay: 300 });
  const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.2, delay: 400 });
  const [extracurricularRef, extracurricularVisible] = useScrollAnimation({ threshold: 0.2, delay: 500 });
  const [languagesRef, languagesVisible] = useScrollAnimation({ threshold: 0.2, delay: 600 });
  const [personalityRef, personalityVisible] = useScrollAnimation({ threshold: 0.2, delay: 700 });

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const downloadPDF = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff'
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${data.name}_CV.pdf`);
  };

  const isDark = theme === 'dark';

  // Scroll to section function
  const scrollToSection = (sectionKey) => {
    const element = sectionRefs[sectionKey]?.current;
    if (element) {
      const yOffset = -100; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Get navigation items based on current language
  const getNavItems = () => {
    return Object.keys(data.sections).map(sectionKey => ({
      key: sectionKey,
      title: data.sections[sectionKey].title,
      onClick: () => scrollToSection(sectionKey)
    }));
  };

  return (
    <div className={`min-h-screen transition-all duration-500 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900/30 to-emerald-900/20' 
        : 'bg-gradient-to-br from-gray-50 to-white'
    }`}>
      {/* Galaxy Background */}
      {isDark && (
        <div style={{ 
          width: '100%', 
          height: '100%', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          zIndex: 1,
          minHeight: '100vh'
        }}>
          <Galaxy 
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.2}
            glowIntensity={0.4}
            saturation={0.8}
            hueShift={240}
            transparent={true}
            twinkleIntensity={0.4}
            rotationSpeed={0.05}
            repulsionStrength={1.5}
            speed={0.8}
          />
        </div>
      )}
      {/* Control Bar */}
      <div className={`fixed top-0 left-0 right-0 shadow-lg z-50 transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-r from-slate-900/95 via-purple-900/80 to-emerald-900/80 backdrop-blur-md border-b border-purple-800/20' 
          : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className={`text-lg font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            {language === 'zh' ? '個人履歷' : 'Resume'}
          </h1>
          <div className="flex gap-3">
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 transform group relative overflow-hidden ${
                isDark 
                  ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 hover:from-amber-400/30 hover:to-yellow-400/30 text-amber-200 hover:text-amber-100 border border-amber-500/20' 
                  : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border border-slate-300/20'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                {isDark 
                  ? (language === 'zh' ? '淺色' : 'Light') 
                  : (language === 'zh' ? '深色' : 'Dark')
                }
              </span>
              {isDark && (
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 transform group relative overflow-hidden ${
                isDark
                  ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 hover:from-blue-400/30 hover:to-indigo-400/30 text-blue-200 hover:text-blue-100 border border-blue-500/20'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border border-blue-300/20'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Globe size={18} />
                {language === 'zh' ? 'English' : '中文'}
              </span>
              {isDark && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
            <button
              onClick={downloadPDF}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 transform group relative overflow-hidden ${
                isDark
                  ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/20 hover:from-emerald-400/30 hover:to-green-400/30 text-emerald-200 hover:text-emerald-100 border border-emerald-500/20'
                  : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border border-green-300/20'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={18} />
                {language === 'zh' ? '下載 PDF' : 'Download PDF'}
              </span>
              {isDark && (
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          </div>
        </div>
        
        {/* Navigation Bar */}
        <div className={`px-4 py-3 border-t transition-all duration-500 ${
          isDark 
            ? 'border-purple-800/30 bg-gradient-to-r from-slate-900 via-purple-900/20 to-emerald-900/20 backdrop-blur-sm' 
            : 'border-gray-100 bg-white/80 backdrop-blur-sm'
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center">
              <nav className="flex items-center space-x-1">
                {getNavItems().map((item, index) => (
                  <div key={item.key} className="flex items-center">
                    <button
                      onClick={item.onClick}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 transform group ${
                        isDark 
                          ? 'text-emerald-200 hover:text-emerald-100 hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-purple-500/10 rounded-lg' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 rounded-lg'
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <span className="relative z-10">{item.title}</span>
                      {isDark && (
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </button>
                    {index < getNavItems().length - 1 && (
                      <div className={`mx-2 h-4 w-px transition-all duration-300 ${
                        isDark 
                          ? 'bg-gradient-to-b from-transparent via-purple-400/40 to-transparent' 
                          : 'bg-gradient-to-b from-transparent via-gray-300/60 to-transparent'
                      }`}></div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="pt-32 pb-10 relative z-10">
        <div ref={resumeRef} className={`max-w-4xl mx-auto shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-br from-slate-800/95 via-purple-900/40 to-emerald-900/30 backdrop-blur-md border border-purple-800/30' 
            : 'bg-white/95 backdrop-blur-sm border border-gray-100/50'
        }`}>
          <div className="p-8 md:p-12">
            {/* Header */}
            <header className="mb-8">
              <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>{data.name}</h1>
              <div className={`flex flex-wrap gap-4 text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  {data.contact.address}
                </span>
                <a href={`mailto:${data.contact.email}`} className={`flex items-center gap-1 transition-colors ${
                  isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
                }`}>
                  <Mail size={16} />
                  {data.contact.email}
                </a>
                <span className="flex items-center gap-1">
                  <Phone size={16} />
                  {data.contact.phone}
                </span>
                <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 transition-colors ${
                  isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
                }`}>
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 transition-colors ${
                  isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
                }`}>
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </header>

            <hr className={`border-t-2 mb-8 transition-colors duration-300 ${
              isDark ? 'border-gray-600' : 'border-gray-300'
            }`} />

            {/* Education */}
            <section 
              ref={(el) => {
                sectionRefs.education.current = el;
                educationRef.current = el;
              }} 
              className={`mb-8 transition-all duration-1000 transform ${
                educationVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{data.sections.education.title}</h2>
              {data.sections.education.content.map((edu, index) => (
                <div key={index}>
                  <div className="mb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{edu.school}</h3>
                        <p className={`transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>{edu.degree}</p>
                      </div>
                      <span className={`transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>{edu.period}</span>
                    </div>
                  </div>
                  <ul className={`list-disc list-inside ml-4 space-y-1 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {edu.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                    {edu.transcript && (
                      <li>
                        <a href={edu.transcript} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 hover:underline transition-colors ${
                          isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {language === 'zh' ? '歷年成績單' : 'Transcript'}
                          <ExternalLink size={14} />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </section>

            <hr className={`border-t mb-8 transition-colors duration-300 ${
              isDark ? 'border-gray-600' : 'border-gray-200'
            }`} />

            {/* Skills */}
            <section 
              ref={(el) => {
                sectionRefs.skills.current = el;
                skillsRef.current = el;
              }} 
              className={`mb-8 transition-all duration-1000 transform ${
                skillsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{data.sections.skills.title}</h2>
              <div className="space-y-2">
                <p className={`transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <span className="font-semibold">{language === 'zh' ? '程式語言：' : 'Programming Languages: '}</span>
                  {data.sections.skills.content.languages}
                </p>
                <p className={`transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <span className="font-semibold">{language === 'zh' ? '工具與技術：' : 'Tools & Technologies: '}</span>
                  {data.sections.skills.content.tools}
                </p>
                <p className={`transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <span className="font-semibold">{language === 'zh' ? '技術專長：' : 'Technical Expertise: '}</span>
                  {data.sections.skills.content.expertise}
                </p>
              </div>
            </section>

            <hr className={`border-t mb-8 transition-colors duration-300 ${
              isDark ? 'border-gray-600' : 'border-gray-200'
            }`} />

            {/* Experience */}
            <section 
              ref={(el) => {
                sectionRefs.experience.current = el;
                experienceRef.current = el;
              }} 
              className={`mb-8 transition-all duration-1000 transform ${
                experienceVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{data.sections.experience.title}</h2>
              {data.sections.experience.content.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{exp.company}</h3>
                      <p className={`transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>{exp.position}</p>
                    </div>
                    <span className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{exp.period}</span>
                  </div>
                  <ul className={`list-disc list-inside ml-4 space-y-1 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                  {exp.images && exp.images.length > 0 && (
                    <div className="mt-3">
                      <button
                        onClick={() => setSelectedImage({ urls: exp.images, alt: exp.company })}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm transition-colors ${
                          isDark
                            ? 'bg-slate-700 hover:bg-slate-600 text-gray-200 border border-slate-600'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
                        }`}
                      >
                        <Image size={16} />
                        {language === 'zh' ? '查看相關證書' : 'View Certificates'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </section>

            <hr className={`border-t mb-8 transition-colors duration-300 ${
              isDark ? 'border-gray-600' : 'border-gray-200'
            }`} />

            {/* Projects */}
            <section 
              ref={(el) => {
                sectionRefs.projects.current = el;
                projectsRef.current = el;
              }} 
              className={`mb-8 transition-all duration-1000 transform ${
                projectsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{data.sections.projects.title}</h2>
              {data.sections.projects.content.map((project, index) => (
                <div key={index} className="mb-6">
                  <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.name}
                    {project.advisor && <span className={`text-sm ml-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>({project.advisor})</span>}
                  </h3>
                  {project.description && (
                    <ul className={`list-disc list-inside ml-4 space-y-1 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {project.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                      {project.link && (
                        <li>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 hover:underline transition-colors ${
                            isDark ? 'text-blue-400' : 'text-blue-600'
                          }`}>
                            {language === 'zh' ? '專題細節與程式碼' : 'Project Details & Code'}
                            <ExternalLink size={14} />
                          </a>
                        </li>
                      )}
                    </ul>
                  )}
                  {project.subProjects && (
                    <div className="mt-6">
                      <div className="grid gap-4 md:gap-6">
                        {project.subProjects.map((subProject, subIdx) => (
                          <div key={subIdx} className={`relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] transform ${
                            isDark 
                              ? 'bg-gradient-to-br from-slate-800/50 via-purple-900/20 to-emerald-900/10 border border-purple-800/20 hover:border-emerald-500/30' 
                              : 'bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 hover:border-gray-300 shadow-sm hover:shadow-md'
                          }`}>
                            <div className="p-6">
                              <div className="flex flex-col lg:flex-row gap-4">
                                <div className="flex-1">
                                  <h5 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                                    isDark ? 'text-emerald-200' : 'text-gray-900'
                                  }`}>
                                    {subProject.name}
                                  </h5>
                                  <p className={`leading-relaxed transition-colors duration-300 ${
                                    isDark ? 'text-gray-300' : 'text-gray-700'
                                  }`}>
                                    {subProject.description}
                                  </p>
                                  {subProject.github && (
                                    <div className="mt-3">
                                      <a 
                                        href={subProject.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 transform ${
                                          isDark 
                                            ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 border border-emerald-500/20' 
                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 border border-gray-200'
                                        }`}
                                      >
                                        <Github size={16} />
                                        {language === 'zh' ? '查看源碼' : 'View Code'}
                                      </a>
                                    </div>
                                  )}
                                </div>
                                {subProject.image && (
                                  <div className="lg:w-80 lg:flex-shrink-0">
                                    <div className="relative overflow-hidden rounded-lg group">
                                      <img
                                        src={subProject.image}
                                        alt={subProject.name}
                                        className="w-full h-48 lg:h-40 object-cover cursor-pointer transition-all duration-300 group-hover:scale-105"
                                        onClick={() => setSelectedImage({ url: subProject.image, alt: subProject.name })}
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                            {isDark && (
                              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-purple-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            )}
                          </div>
                        ))}
                      </div>
                      {project.note && (
                        <div className={`mt-6 p-4 rounded-xl transition-all duration-300 ${
                          isDark 
                            ? 'bg-gradient-to-r from-emerald-900/20 via-purple-900/10 to-emerald-900/20 border border-emerald-500/20' 
                            : 'bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50 border border-blue-200/50'
                        }`}>
                          <div className="flex items-start gap-3">
                            <div className={`mt-0.5 transition-colors duration-300 ${
                              isDark ? 'text-emerald-400' : 'text-blue-500'
                            }`}>
                              <Github size={18} />
                            </div>
                            <div className="flex-1">
                              <p className={`text-sm font-medium transition-colors duration-300 ${
                                isDark ? 'text-emerald-200' : 'text-gray-800'
                              }`}>
                                {project.note}
                              </p>
                              {project.github && (
                                <a 
                                  href={project.github} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className={`inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 transform ${
                                    isDark 
                                      ? 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 hover:text-emerald-100 border border-emerald-500/30' 
                                      : 'bg-blue-100 hover:bg-blue-200 text-blue-700 hover:text-blue-800 border border-blue-200'
                                  }`}
                                >
                                  <Github size={16} />
                                  {language === 'zh' ? '瀏覽完整 GitHub' : 'Browse Full GitHub'}
                                  <ExternalLink size={14} />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </section>

            <hr className={`border-t mb-8 transition-colors duration-300 ${
              isDark ? 'border-gray-600' : 'border-gray-200'
            }`} />

            {/* Extracurricular */}
            <section 
              ref={(el) => {
                sectionRefs.extracurricular.current = el;
                extracurricularRef.current = el;
              }} 
              className={`mb-8 transition-all duration-1000 transform ${
                extracurricularVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{data.sections.extracurricular.title}</h2>
              {data.sections.extracurricular.content.map((activity, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{activity.organization}</h3>
                      <p className={`transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>{activity.role}</p>
                      <p className={`transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>{activity.description}</p>
                    </div>
                    <span className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{activity.period}</span>
                  </div>
                  {activity.image && (
                    <div className="mt-3">
                      <img
                        src={activity.image}
                        alt={activity.organization}
                        className="max-w-md h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedImage({ url: activity.image, alt: activity.organization })}
                      />
                    </div>
                  )}
                </div>
              ))}
            </section>

            <hr className={`border-t mb-8 transition-colors duration-300 ${
              isDark ? 'border-gray-600' : 'border-gray-200'
            }`} />

            {/* Languages */}
            <section 
              ref={(el) => {
                sectionRefs.languages.current = el;
                languagesRef.current = el;
              }} 
              className={`mb-8 transition-all duration-1000 transform ${
                languagesVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{data.sections.languages.title}</h2>
              <p className={`transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>{data.sections.languages.content}</p>
            </section>

            <hr className={`border-t mb-8 transition-colors duration-300 ${
              isDark ? 'border-gray-600' : 'border-gray-200'
            }`} />

            {/* Personality */}
            <section 
              ref={(el) => {
                sectionRefs.personality.current = el;
                personalityRef.current = el;
              }} 
              className={`mb-8 transition-all duration-1000 transform ${
                personalityVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{data.sections.personality.title}</h2>
              <div className={`space-y-3 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p>{data.sections.personality.content.intro}</p>
                <p>{data.sections.personality.content.passion}</p>
                <p>{data.sections.personality.content.exploration}</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  {data.sections.personality.content.traits.map((trait, index) => (
                    <li key={index}>{trait}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrls={selectedImage?.urls || (selectedImage?.url ? [selectedImage.url] : [])}
        altText={selectedImage?.alt}
      />
    </div>
  );
}

export default App;
