import { Award, Flame, ShieldCheck, Target, Quote, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const iconMap = {
  Award,
  Flame,
  ShieldCheck,
  Target,
};

const Autobiography = ({ section, isDark, index }) => (
  <>
    <SectionHeading index={index} title={section.title} isDark={isDark} />

    {/* Core Quote Banner */}
    <div
      className={`relative overflow-hidden rounded-2xl border p-6 md:p-8 mb-8 transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-emerald-500/10 border-amber-500/30'
          : 'bg-gradient-to-r from-amber-50/80 via-purple-50/60 to-emerald-50/80 border-amber-200 shadow-sm'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`shrink-0 p-2.5 rounded-xl ${
            isDark ? 'bg-amber-400/15 text-amber-300' : 'bg-amber-100 text-amber-700'
          }`}
        >
          <Quote size={24} />
        </div>
        <div>
          <blockquote
            className={`font-display text-lg md:text-xl font-semibold leading-snug ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            “{section.quote}”
          </blockquote>
          <p className={`mt-2 font-mono text-xs tracking-wider ${isDark ? 'text-amber-300/80' : 'text-amber-800'}`}>
            — {section.quoteAuthor}
          </p>
        </div>
      </div>
    </div>

    {/* Intro text */}
    <p className={`max-w-3xl leading-relaxed mb-8 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
      {section.intro}
    </p>

    {/* Story Chapters */}
    <div className="grid gap-6">
      {section.chapters.map((chapter, idx) => {
        const IconComponent = iconMap[chapter.icon] || Award;
        return (
          <article
            key={idx}
            className={`rounded-2xl border p-6 md:p-7 transition-all duration-300 ${
              isDark
                ? 'bg-slate-800/40 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800/60'
                : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
            }`}
          >
            {/* Header / Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div
                  className={`p-2 rounded-lg ${
                    isDark ? 'bg-emerald-500/15 text-emerald-300' : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  <IconComponent size={20} />
                </div>
                <span
                  className={`font-mono text-xs uppercase tracking-wider font-medium ${
                    isDark ? 'text-emerald-300' : 'text-emerald-700'
                  }`}
                >
                  {chapter.badge}
                </span>
              </div>
            </div>

            <h3
              className={`font-display text-lg md:text-xl font-semibold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {chapter.title}
            </h3>

            {/* Summary highlight */}
            <div
              className={`p-4 rounded-xl mb-4 border ${
                isDark
                  ? 'bg-slate-900/60 border-slate-700/60 text-slate-200'
                  : 'bg-gray-50 border-gray-200/80 text-gray-800'
              }`}
            >
              <p className="text-sm font-medium leading-relaxed">{chapter.summary}</p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-3 mb-5">
              {chapter.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className={`text-sm md:text-[15px] leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-gray-600'
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Highlights bullet chips */}
            <div className={`pt-4 border-t border-dashed ${isDark ? 'border-slate-700/60' : 'border-gray-200'}`}>
              <div className="flex flex-wrap gap-2">
                {chapter.highlights.map((item, hIdx) => (
                  <span
                    key={hIdx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium ${
                      isDark
                        ? 'bg-purple-900/30 text-purple-200 border border-purple-800/40'
                        : 'bg-purple-50 text-purple-700 border border-purple-200'
                    }`}
                  >
                    <CheckCircle2 size={13} className={isDark ? 'text-purple-400' : 'text-purple-600'} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </>
);

export default Autobiography;
