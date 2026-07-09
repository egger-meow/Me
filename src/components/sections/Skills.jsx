import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const Skills = ({ section, isDark, index }) => (
  <>
    <SectionHeading index={index} title={section.title} isDark={isDark} />
    <div className="space-y-5">
      {section.groups.map((group) => (
        <div key={group.label} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
          <span
            className={`font-mono text-xs tracking-[0.15em] uppercase shrink-0 sm:w-36 ${
              isDark ? 'text-emerald-400' : 'text-emerald-600'
            }`}
          >
            {group.label}
          </span>
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ y: -2, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className={`text-sm px-3 py-1 rounded-lg border transition-colors duration-300 cursor-default ${
                  isDark
                    ? 'bg-slate-800/60 border-slate-600/60 text-slate-200 hover:border-emerald-500/50'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-400/60 shadow-sm'
                }`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div
      className={`mt-6 flex items-start gap-2.5 border-l-2 pl-4 py-1 ${
        isDark ? 'border-amber-500/60 text-amber-200/90' : 'border-amber-500 text-amber-700'
      }`}
    >
      <TrendingUp size={16} className="mt-0.5 shrink-0" />
      <p className="text-sm leading-relaxed">{section.deepening}</p>
    </div>
  </>
);

export default Skills;
