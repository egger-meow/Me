import { useState, useRef, useLayoutEffect } from 'react';
import { useScroll, useSpring, useVelocity, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { useReactToPrint } from 'react-to-print';
import { cvData, SECTION_ORDER } from './data/cvData';
import Galaxy from './components/Galaxy';
import ControlBar from './components/layout/ControlBar';
import ImageModal from './components/shared/ImageModal';
import SectionReveal from './components/shared/SectionReveal';
import CursorGlow from './components/shared/CursorGlow';
import ScrollProgress from './components/shared/ScrollProgress';
import Hero from './components/sections/Hero';
import SystemsShowcase from './components/sections/SystemsShowcase';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_COMPONENTS = {
  systems: SystemsShowcase,
  experience: Experience,
  education: Education,
  skills: Skills,
  about: About,
};

function App() {
  const [language, setLanguage] = useState('zh');
  const [theme, setTheme] = useState('dark');
  const [selectedImage, setSelectedImage] = useState(null);
  const resumeRef = useRef(null);

  const data = cvData[language];
  const isDark = theme === 'dark';
  const activeSection = useActiveSection(SECTION_ORDER);
  const reduceMotion = useReducedMotion();

  // Keep html's real background in sync with the active theme. A hard
  // scroll jump (esp. dragging the scrollbar thumb) forces the browser to
  // rasterize newly-revealed tiles on the spot; until painted, a tile falls
  // back to this color — so it must always match the current theme, not a
  // hardcoded default, or a theme switch would flash the *other* theme's
  // color on the next fast scroll.
  useLayoutEffect(() => {
    const backgroundColor = isDark ? '#0b0a08' : '#f9fafb';

    document.documentElement.style.backgroundColor = backgroundColor;
    document.body.style.backgroundColor = backgroundColor;
    document.getElementById('root')?.style.setProperty('background-color', backgroundColor);
  }, [isDark]);

  // Bridge framer-motion's scroll values into plain refs the Galaxy's rAF
  // loop reads each frame — page scroll scrubs the starfield's travel/hue,
  // scroll velocity adds a hyperspace burst. No React re-renders involved.
  const scrollProgressRef = useRef(0);
  const scrollVelocityRef = useRef(0);
  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 26, mass: 0.6, restDelta: 0.0005 });
  const scrollVelocity = useVelocity(scrollY);
  useMotionValueEvent(smoothProgress, 'change', (v) => {
    scrollProgressRef.current = reduceMotion ? 0 : v;
  });
  useMotionValueEvent(scrollVelocity, 'change', (v) => {
    scrollVelocityRef.current = reduceMotion ? 0 : v;
  });

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
    <div className={`min-h-screen transition-colors duration-500 relative overflow-x-clip ${isDark
      ? 'bg-gradient-to-br from-[#0b0a08] via-[#161009] to-[#1f1508]'
      : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
      {/* Galaxy background — dark mode only (perf) */}
      {isDark && (
        <div className="fixed inset-0 z-[1] min-h-screen">
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={0.9}
            glowIntensity={0.8}
            saturation={0.7}
            hueShift={45}
            transparent={true}
            twinkleIntensity={0.35}
            rotationSpeed={0.015}
            repulsionStrength={2.2}
            speed={0.55}
            scrollProgressRef={scrollProgressRef}
            scrollVelocityRef={scrollVelocityRef}
            scrollTravel={0.5}
            scrollHueTravel={35}
          />
        </div>
      )}

      {/* Ambient aurora blobs — dark mode only */}
      {isDark && (
        <div aria-hidden="true" className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-amber-400/10 blur-[120px] animate-aurora" />
          <div className="absolute bottom-[-180px] right-[-120px] w-[520px] h-[520px] rounded-full bg-purple-500/10 blur-[130px] animate-aurora [animation-delay:-8s]" />
        </div>
      )}

      {isDark && <CursorGlow />}
      <ScrollProgress />

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
          className={`max-w-5xl mx-auto shadow-2xl transition-colors duration-500 rounded-2xl ${isDark
            ? 'bg-gradient-to-br from-slate-900/95 via-[#1c1610]/85 to-amber-950/40 backdrop-blur-md border border-amber-500/15'
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
          BUILT WITH REACT · VITE · FRAMER MOTION
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
