import { motion } from 'framer-motion';

// Consistent section header: mono index label + display-font title with a
// gradient underline that draws in as the section enters view.
const SectionHeading = ({ index, title, isDark }) => (
  <div className="mb-6">
    <div className={`font-mono text-xs tracking-[0.25em] uppercase mb-1 ${
      isDark ? 'text-emerald-400' : 'text-emerald-600'
    }`}>
      {String(index).padStart(2, '0')}
    </div>
    <h2 className={`font-display text-2xl md:text-3xl font-bold transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-gray-900'
    }`}>
      {title}
    </h2>
    <motion.div
      aria-hidden="true"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="mt-2 h-[3px] w-24 origin-left rounded-full bg-gradient-to-r from-emerald-400 via-purple-400 to-transparent"
    />
  </div>
);

export default SectionHeading;
