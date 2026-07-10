import { motion, AnimatePresence } from 'framer-motion';
import { Download, Globe, Sun, Moon } from 'lucide-react';
import NavBar from './NavBar';

const iconMorph = {
  initial: { rotate: -90, opacity: 0, scale: 0.6 },
  animate: { rotate: 0, opacity: 1, scale: 1 },
  exit: { rotate: 90, opacity: 0, scale: 0.6 },
  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
};

const ControlBar = ({
  isDark,
  language,
  onToggleTheme,
  onToggleLanguage,
  onDownloadPDF,
  navItems,
  activeSection,
  onNavigate,
}) => (
  <div className={`fixed top-0 left-0 right-0 shadow-lg z-50 transition-all duration-500 ${isDark
    ? 'bg-gradient-to-r from-[#0e0c08]/95 via-[#1a1408]/90 to-[#241a0a]/90 backdrop-blur-md border-b border-amber-500/15'
    : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
    }`}>
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 className={`font-display text-lg font-bold transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-800'
        }`}>
        {language === 'zh' ? '侯均頲' : 'Chun-Ting Hou'}
        <span className={`hidden sm:inline font-mono text-xs font-normal ml-3 tracking-widest ${isDark ? 'text-emerald-300/70' : 'text-emerald-600/80'
          }`}>
          {language === 'zh' ? 'BUILDER · RESEARCHER' : 'BUILDER · RESEARCHER'}
        </span>
      </h1>
      <div className="flex gap-2 sm:gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={onToggleTheme}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl transition-colors duration-300 cursor-pointer ${isDark
            ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 hover:from-amber-400/30 hover:to-yellow-400/30 text-amber-200 border border-amber-500/20'
            : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border border-slate-300/20'
            }`}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={isDark ? 'sun' : 'moon'} {...iconMorph} className="flex items-center">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.span>
          </AnimatePresence>
          <span className="hidden sm:inline">
            {isDark
              ? (language === 'zh' ? '淺色' : 'Light')
              : (language === 'zh' ? '深色' : 'Dark')}
          </span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={onToggleLanguage}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl transition-colors duration-300 cursor-pointer ${isDark
            ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 hover:from-blue-400/30 hover:to-indigo-400/30 text-blue-200 border border-blue-500/20'
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border border-blue-300/20'
            }`}
        >
          <Globe size={18} />
          <span>{language === 'zh' ? 'English' : '中文'}</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={onDownloadPDF}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl transition-colors duration-300 cursor-pointer ${isDark
            ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/20 hover:from-emerald-400/30 hover:to-green-400/30 text-emerald-200 border border-emerald-500/20'
            : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border border-green-300/20'
            }`}
        >
          <Download size={18} />
          <span className="hidden sm:inline">{language === 'zh' ? '下載 PDF' : 'PDF'}</span>
        </motion.button>
      </div>
    </div>

    <NavBar
      isDark={isDark}
      items={navItems}
      activeSection={activeSection}
      onNavigate={onNavigate}
    />
  </div>
);

export default ControlBar;
