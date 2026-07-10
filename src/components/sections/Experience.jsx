import { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { Image } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

// Vertical timeline whose line is scroll-scrubbed: it draws downward as the
// reader scrolls through the roles and un-draws when scrolling back — tied
// 1:1 to the scrollbar rather than a one-shot entrance.
const Experience = ({ section, isDark, index, onOpenImages, language }) => {
  const timelineRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 78%', 'end 55%'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  return (
    <>
      <SectionHeading index={index} title={section.title} isDark={isDark} />
      <div ref={timelineRef} className="relative pl-6 space-y-8">
        {/* Track (faint) + scrubbed draw line */}
        <div
          aria-hidden="true"
          className={`absolute left-[5px] top-1.5 bottom-1.5 w-px ${
            isDark ? 'bg-slate-600/40' : 'bg-gray-200'
          }`}
        />
        <motion.div
          aria-hidden="true"
          style={reduceMotion ? undefined : { scaleY: lineScale }}
          className={`absolute left-[5px] top-1.5 bottom-1.5 w-px origin-top ${
            isDark
              ? 'bg-gradient-to-b from-emerald-400 via-purple-400 to-emerald-400/40'
              : 'bg-gradient-to-b from-emerald-500 via-purple-400 to-emerald-500/40'
          }`}
        />

        {section.content.map((exp, idx) => (
          <div key={idx} className="relative">
            <motion.span
              initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 320, damping: 18, delay: 0.1 }}
              className={`absolute -left-6 top-1.5 w-[11px] h-[11px] rounded-full ring-4 ${
                isDark
                  ? 'bg-emerald-400 ring-emerald-400/15'
                  : 'bg-emerald-500 ring-emerald-500/15'
              }`}
              aria-hidden="true"
            />
            <div className="flex flex-wrap justify-between items-start gap-x-4 mb-2">
              <div className="min-w-0">
                <h3 className={`font-display text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {exp.company}
                </h3>
                <p className={isDark ? 'text-slate-300' : 'text-gray-700'}>{exp.position}</p>
              </div>
              <span className={`font-mono text-sm shrink-0 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                {exp.period}
              </span>
            </div>
            <ul className={`list-disc list-inside ml-1 space-y-1 text-sm md:text-base ${
              isDark ? 'text-slate-300' : 'text-gray-700'
            }`}>
              {exp.achievements.map((achievement, aIdx) => (
                <li key={aIdx} className="leading-relaxed">{achievement}</li>
              ))}
            </ul>
            {exp.images && exp.images.length > 0 && (
              <button
                onClick={() => onOpenImages({ urls: exp.images, alt: exp.company })}
                className={`mt-3 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border transition-colors cursor-pointer ${
                  isDark
                    ? 'bg-slate-700/70 hover:bg-slate-600/70 text-slate-200 border-slate-600'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300'
                }`}
              >
                <Image size={15} />
                {language === 'zh' ? '查看相關證書' : 'View Certificates'}
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
