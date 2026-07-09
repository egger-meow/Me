import { Sparkles, GitCommit, ShieldCheck, ScanEye } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import TiltCard from '../shared/TiltCard';

const practiceIcons = [Sparkles, GitCommit, ShieldCheck, ScanEye];

const HowIBuild = ({ section, isDark, index }) => (
  <>
    <SectionHeading index={index} title={section.title} isDark={isDark} />
    <p className={`mb-6 max-w-2xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
      {section.intro}
    </p>
    <div className="grid sm:grid-cols-2 gap-4">
      {section.practices.map((practice, idx) => {
        const Icon = practiceIcons[idx % practiceIcons.length];
        return (
          <TiltCard
            key={practice.name}
            maxTilt={6}
            lift={-4}
            spotlightColor={isDark ? 'rgba(245, 158, 11, 0.10)' : 'rgba(245, 158, 11, 0.07)'}
            className={`relative overflow-hidden rounded-xl border p-5 transition-colors duration-300 ${
              isDark
                ? 'bg-slate-800/50 border-purple-800/25 hover:border-amber-500/45 hover:shadow-glow-amber'
                : 'bg-white border-gray-200 hover:border-amber-400/60 shadow-sm hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${
                  isDark ? 'bg-amber-500/15 text-amber-300' : 'bg-amber-50 text-amber-600'
                }`}
              >
                <Icon size={18} strokeWidth={1.75} />
              </div>
              <h3 className={`font-display font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {practice.name}
              </h3>
            </div>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              {practice.description}
            </p>
          </TiltCard>
        );
      })}
    </div>
  </>
);

export default HowIBuild;
