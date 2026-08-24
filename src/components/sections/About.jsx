import { ExternalLink, GitBranch, ScanEye, ShieldCheck, Waypoints } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const icons = [Waypoints, GitBranch, ShieldCheck, ScanEye];

const About = ({ section, isDark, index }) => (
  <>
    <SectionHeading index={index} title={section.title} isDark={isDark} />
    <p className={`max-w-3xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>{section.intro}</p>
    <h3 className={`font-mono text-xs tracking-[0.22em] uppercase mt-8 mb-4 ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>{section.practicesTitle}</h3>
    <div className="grid sm:grid-cols-2 gap-4">
      {section.practices.map((practice, idx) => { const Icon = icons[idx]; return (
        <article key={practice.name} className={`rounded-xl border p-5 ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className="flex items-center gap-3 mb-2"><Icon size={18} className={isDark ? 'text-amber-300' : 'text-amber-600'} /><h4 className={`font-display font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{practice.name}</h4></div>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>{practice.description}</p>
        </article>
      ); })}
    </div>
    <details className={`group mt-7 rounded-xl border p-5 ${isDark ? 'bg-slate-900/40 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
      <summary className={`cursor-pointer font-display font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{section.earlierTitle}</summary>
      <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>{section.earlierSummary}</p>
      <a href={section.earlierLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 mt-3 text-sm ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>GitHub <ExternalLink size={13} /></a>
    </details>
    <p className={`mt-5 text-sm font-mono ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>{section.languages}</p>
  </>
);

export default About;
