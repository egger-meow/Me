import { ExternalLink, Image, FlaskConical } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const Education = ({ section, isDark, index, onOpenImages, language }) => (
  <>
    <SectionHeading index={index} title={section.title} isDark={isDark} />
    {section.education.map((edu, idx) => (
      <div key={idx} className="mb-8 last:mb-0">
        <div className="flex flex-wrap justify-between items-start gap-x-4 mb-2">
          <div className="min-w-0">
            <h3 className={`font-display text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {edu.school}
            </h3>
            <p className={isDark ? 'text-slate-300' : 'text-gray-700'}>{edu.degree}</p>
          </div>
          <span className={`font-mono text-sm shrink-0 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
            {edu.period}
          </span>
        </div>
        <ul className={`list-disc list-inside ml-1 space-y-1 text-sm md:text-base ${
          isDark ? 'text-slate-300' : 'text-gray-700'
        }`}>
          {edu.details.map((detail, dIdx) => (
            <li key={dIdx} className="leading-relaxed">{detail}</li>
          ))}
          {edu.transcript && (
            <li>
              <a
                href={edu.transcript}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 hover:underline transition-colors ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                {language === 'zh' ? '歷年成績單' : 'Transcript'}
                <ExternalLink size={14} />
              </a>
            </li>
          )}
        </ul>
        <div className="flex flex-wrap gap-2 mt-3">
          {edu.images && edu.images.length > 0 && (
            <button
              onClick={() => onOpenImages({ urls: edu.images, alt: edu.school })}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-700/70 hover:bg-slate-600/70 text-slate-200 border-slate-600'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300'
              }`}
            >
              <Image size={15} />
              {language === 'zh' ? '查看證書' : 'View Certificates'}
            </button>
          )}
          {edu.diplomas && edu.diplomas.length > 0 && (
            <button
              onClick={() =>
                onOpenImages({
                  urls: edu.diplomas.map((d) => d.image),
                  alt: `${edu.school} ${language === 'zh' ? '畢業證書' : 'Diplomas'}`,
                  titles: edu.diplomas.map((d) => d.type),
                })
              }
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-700/70 hover:bg-slate-600/70 text-slate-200 border-slate-600'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300'
              }`}
            >
              <Image size={15} />
              {language === 'zh' ? '查看畢業證書' : 'View Diplomas'}
            </button>
          )}
        </div>
      </div>
    ))}
    <div className={`mt-8 grid md:grid-cols-2 gap-4`}>
      <div className={`rounded-xl border p-5 ${isDark ? 'bg-purple-950/20 border-purple-800/40' : 'bg-purple-50/50 border-purple-200'}`}>
        <div className="flex items-center gap-2 mb-2"><FlaskConical size={18} className={isDark ? 'text-purple-300' : 'text-purple-600'} /><h3 className={`font-display font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{language === 'zh' ? '研究方向' : 'Research Direction'}</h3></div>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>{section.researchIntro}</p>
        <p className={`mt-3 text-xs font-mono leading-relaxed ${isDark ? 'text-amber-300/90' : 'text-amber-700'}`}>{section.researchTodo}</p>
      </div>
      <div className={`rounded-xl border p-5 ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200 shadow-sm'}`}>
        <span className={`font-mono text-[10px] uppercase tracking-wider ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>{section.academic.status}</span>
        <h3 className={`font-display font-semibold mt-2 mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{section.academic.name}</h3>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>{section.academic.description}</p>
        <a href={section.academic.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 mt-3 text-sm ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>{language === 'zh' ? '查看專題資料' : 'View Project Material'}<ExternalLink size={13} /></a>
      </div>
    </div>
  </>
);

export default Education;
