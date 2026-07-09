import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { cvData, SECTION_ORDER } from './data/cvData';
import Galaxy from './components/Galaxy';
import ControlBar from './components/layout/ControlBar';
import ImageModal from './components/shared/ImageModal';
import SectionReveal from './components/shared/SectionReveal';
import Hero from './components/sections/Hero';
import SystemsShowcase from './components/sections/SystemsShowcase';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import ResearchDirection from './components/sections/ResearchDirection';
import Skills from './components/sections/Skills';
import AcademicProjects from './components/sections/AcademicProjects';
import HowIBuild from './components/sections/HowIBuild';
import Extracurricular from './components/sections/Extracurricular';
import Languages from './components/sections/Languages';
import Personality from './components/sections/Personality';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_COMPONENTS = {
  systems: SystemsShowcase,
  experience: Experience,
  education: Education,
  research: ResearchDirection,
  skills: Skills,
  academic: AcademicProjects,
  howIBuild: HowIBuild,
  extracurricular: Extracurricular,
  languages: Languages,
  personality: Personality,
};

function App() {
  const [language, setLanguage] = useState('zh');
  const [theme, setTheme] = useState('dark');
  const [selectedImage, setSelectedImage] = useState(null);
  const resumeRef = useRef(null);

  const data = cvData[language];
  const isDark = theme === 'dark';
  const activeSection = useActiveSection(SECTION_ORDER);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: `${data.name}_CV`,
  });

  const scrollToSection = (key) => {
    document.getElementById(`section-${key}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = SECTION_ORDER.map((key) => ({
    key,
    title: data.sections[key].navLabel,
  }));

  return (
    <div className={`h-screen overflow-y-scroll transition-all duration-500 relative overflow-x-hidden ${isDark
      ? 'bg-gradient-to-br from-slate-900 via-purple-900/30 to-emerald-900/20'
      : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
      {/* Galaxy background — dark mode only (perf) */}
      {isDark && (
        <div className="fixed inset-0 z-[1] min-h-screen">
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={0.5}
            glowIntensity={0.6}
            saturation={0.5}
            hueShift={240}
            transparent={true}
            twinkleIntensity={0.2}
            rotationSpeed={0.01}
            repulsionStrength={1.0}
            speed={0.4}
          />
        </div>
      )}

      <ControlBar
        isDark={isDark}
        language={language}
        onToggleTheme={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
        onToggleLanguage={() => setLanguage((prev) => (prev === 'zh' ? 'en' : 'zh'))}
        onDownloadPDF={handlePrint}
        navItems={navItems}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Resume content */}
      <div className="pt-32 pb-12 relative z-10 px-4">
        <div
          ref={resumeRef}
          className={`max-w-5xl mx-auto shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden ${isDark
            ? 'bg-gradient-to-br from-slate-800/95 via-purple-900/40 to-emerald-900/30 backdrop-blur-md border border-purple-800/30'
            : 'bg-white/95 backdrop-blur-sm border border-gray-100/50'
            }`}
        >
          <div className="p-6 sm:p-8 md:p-12">
            <Hero data={data} isDark={isDark} onDownloadPDF={handlePrint} />

            {SECTION_ORDER.map((key, idx) => {
              const SectionComponent = SECTION_COMPONENTS[key];
              return (
                <div key={key}>
                  <hr className={`border-t mb-8 transition-colors duration-300 ${isDark ? 'border-slate-600/60' : 'border-gray-200'
                    }`} />
                  <SectionReveal
                    id={`section-${key}`}
                    sectionKey={key}
                    className="mb-10 scroll-mt-36"
                  >
                    <SectionComponent
                      section={data.sections[key]}
                      isDark={isDark}
                      index={idx + 1}
                      language={language}
                      onOpenImages={setSelectedImage}
                    />
                  </SectionReveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <p className={`text-center font-mono text-[11px] tracking-widest mt-6 ${isDark ? 'text-slate-500' : 'text-gray-400'
          }`}>
          {language === 'zh' ? 'BUILT WITH REACT · VITE · FRAMER MOTION' : 'BUILT WITH REACT · VITE · FRAMER MOTION'}
        </p>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrls={selectedImage?.urls || (selectedImage?.url ? [selectedImage.url] : [])}
        altText={selectedImage?.alt}
        titles={selectedImage?.titles || []}
      />
    </div>
  );
}

export default App;
