import { Image } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

// Vertical-timeline treatment: line + dot per role.
const Experience = ({ section, isDark, index, onOpenImages, language }) => (
  <>
    <SectionHeading index={index} title={section.title} isDark={isDark} />
    <div
      className={`relative pl-6 space-y-8 before:absolute before:left-[5px] before:top-1.5 before:bottom-1.5 before:w-px ${
        isDark
          ? 'before:bg-gradient-to-b before:from-emerald-500/60 before:via-purple-500/40 before:to-transparent'
          : 'before:bg-gradient-to-b before:from-emerald-500/50 before:via-gray-300 before:to-transparent'
      }`}
    >
      {section.content.map((exp, idx) => (
        <div key={idx} className="relative">
          <span
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

export default Experience;
