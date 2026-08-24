import { motion } from 'framer-motion';
import { Github, ExternalLink, Monitor, BookOpen } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import PhotoSlot from '../shared/PhotoSlot';
import TiltCard from '../shared/TiltCard';
import Parallax from '../shared/Parallax';

const StackChip = ({ label, isDark }) => (
  <span
    className={`font-mono text-[11px] px-2 py-0.5 rounded border ${
      isDark
        ? 'border-slate-600/60 bg-slate-800/60 text-slate-300'
        : 'border-gray-200 bg-gray-50 text-gray-600'
    }`}
  >
    {label}
  </span>
);

const actionIcon = { github: Github, docs: BookOpen, live: Monitor };
const ProjectActions = ({ actions, isDark }) => (
  <div className="flex flex-wrap gap-2">
    {actions.map((action, index) => {
      const Icon = actionIcon[action.type] || ExternalLink;
      const primary = index === 0 && action.type === 'live';
      return (
        <motion.a key={action.href} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href={action.href} target="_blank" rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${primary
            ? (isDark ? 'bg-emerald-500 text-slate-950 border-emerald-300 hover:bg-emerald-400' : 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800')
            : (isDark ? 'bg-slate-800/70 text-slate-200 border-slate-600 hover:border-emerald-500/50' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400')}`}>
          <Icon size={15} />{action.label}<ExternalLink size={12} />
        </motion.a>
      );
    })}
  </div>
);

// Device-aware frame treatment: browser window for web apps, mobile phone frame for mobile apps.
const ScreenshotFrame = ({ system, isDark, onOpenImages }) => {
  const isMobile = system.device === 'mobile';

  if (isMobile) {
    return (
      <div className="flex justify-center w-full">
        <div
          onClick={() =>
            onOpenImages?.({
              urls: [system.screenshot],
              alt: system.name,
              titles: [system.screenshotLabel],
            })
          }
          className={`group/frame relative w-full max-w-[240px] sm:max-w-[260px] rounded-[2.2rem] p-2.5 border-2 shadow-2xl transition-all duration-300 cursor-zoom-in ${
            isDark
              ? 'bg-slate-950 border-slate-700/80 hover:border-emerald-500/50 hover:shadow-glow-emerald'
              : 'bg-gray-900 border-gray-800 hover:border-emerald-500/50 hover:shadow-xl'
          }`}
        >
          {/* Dynamic Island / Speaker Pill */}
          <div className="flex justify-center mb-2">
            <div className="w-16 h-3.5 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
              <div className="w-2.5 h-1 rounded-full bg-slate-950" />
            </div>
          </div>
          {/* Screen content */}
          <div className="rounded-[1.4rem] overflow-hidden bg-slate-900 border border-slate-800/80">
            <PhotoSlot
              src={system.screenshot}
              alt={`${system.name} screenshot`}
              isDark={isDark}
              label={system.screenshotLabel}
              rounded="rounded-none"
              className="w-full h-auto max-h-[380px] object-cover object-top transition-transform duration-500 group-hover/frame:scale-105"
            />
          </div>
          {/* Home indicator bar */}
          <div className="w-16 h-1 bg-slate-700/60 rounded-full mx-auto mt-2" />
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() =>
        onOpenImages?.({
          urls: [system.screenshot],
          alt: system.name,
          titles: [system.screenshotLabel],
        })
      }
      className={`group/frame rounded-xl overflow-hidden border transition-all duration-300 cursor-zoom-in ${
        isDark
          ? 'border-slate-600/50 bg-slate-900/60 hover:border-emerald-500/40 hover:shadow-glow-emerald'
          : 'border-gray-200 bg-white hover:border-emerald-400/50 hover:shadow-md'
      }`}
    >
      <div
        className={`flex items-center gap-1.5 px-3 py-2 border-b ${
          isDark ? 'border-slate-700/60 bg-slate-900/80' : 'border-gray-100 bg-gray-50/80'
        }`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        <span
          className={`font-mono text-[10px] ml-2 truncate ${
            isDark ? 'text-slate-500' : 'text-gray-400'
          }`}
        >
          {system.id}
        </span>
      </div>
      <div className="overflow-hidden">
        <PhotoSlot
          src={system.screenshot}
          alt={`${system.name} screenshot`}
          isDark={isDark}
          label={system.screenshotLabel}
          rounded="rounded-none"
          className="w-full aspect-video object-cover object-top transition-transform duration-500 group-hover/frame:scale-105"
        />
      </div>
    </div>
  );
};

const SystemsShowcase = ({ section, isDark, index, onOpenImages }) => (
  <>
    <SectionHeading index={index} title={section.title} isDark={isDark} />
    <p className={`mb-8 max-w-2xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
      {section.intro}
    </p>

    {/* Featured systems */}
    <div className="space-y-8">
      {section.featured.map((system, idx) => (
        <TiltCard
          key={system.id}
          as="article"
          maxTilt={4}
          spotlightColor={isDark ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.07)'}
          className={`relative overflow-hidden rounded-2xl border transition-colors duration-300 ${
            isDark
              ? 'bg-gradient-to-br from-slate-800/60 via-purple-900/20 to-emerald-900/10 border-purple-800/25 hover:border-emerald-500/40 hover:shadow-glow-emerald'
              : 'bg-gradient-to-br from-white to-gray-50/60 border-gray-200/70 hover:border-emerald-400/50 hover:shadow-card-hover'
          }`}
        >
          <div className="p-6 md:p-8">
            <div className={`grid gap-6 lg:grid-cols-5 lg:items-center`}>
              {/* Screenshot */}
              <div className={`lg:col-span-2 ${idx % 2 === 1 ? 'lg:order-last' : ''} flex justify-center`}>
                <Parallax range={10} className="w-full max-w-md">
                  <ScreenshotFrame system={system} isDark={isDark} onOpenImages={onOpenImages} />
                </Parallax>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    className={`font-mono text-[11px] tracking-wider uppercase px-2.5 py-1 rounded-full border ${
                      isDark
                        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                        : 'border-emerald-500/40 bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {system.tag}
                  </span>
                  <span className={`font-mono text-xs ${isDark ? 'text-slate-400' : 'text-gray-400'}`}>
                    {system.period}
                  </span>
                </div>

                <h3
                  className={`font-display text-xl md:text-2xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {system.name}
                </h3>

                <p className={`leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                  {system.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {system.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <span
                        className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                          isDark ? 'bg-emerald-400' : 'bg-emerald-500'
                        }`}
                      />
                      <span className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {system.stack.map((tech) => (
                    <StackChip key={tech} label={tech} isDark={isDark} />
                  ))}
                </div>

                <ProjectActions actions={system.actions} isDark={isDark} />
              </div>
            </div>
          </div>
        </TiltCard>
      ))}
    </div>

    {/* Explorations strip */}
    <h4
      className={`font-mono text-xs tracking-[0.25em] uppercase mt-10 mb-4 ${
        isDark ? 'text-purple-300' : 'text-purple-600'
      }`}
    >
      {section.selectedTitle}
    </h4>
    <div className="grid sm:grid-cols-2 gap-4">
      {section.selected.map((project) => (
        <TiltCard
          key={project.name}
          maxTilt={6}
          lift={-4}
          spotlightColor={isDark ? 'rgba(168, 85, 247, 0.12)' : 'rgba(168, 85, 247, 0.07)'}
          className={`relative overflow-hidden block rounded-xl border p-5 transition-colors duration-300 cursor-pointer ${
            isDark
              ? 'bg-slate-800/50 border-purple-800/25 hover:border-purple-500/40 hover:shadow-glow-purple'
              : 'bg-white border-gray-200 hover:border-purple-400/50 shadow-sm hover:shadow-md'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <h5 className={`font-display font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {project.name}
            </h5>
            <span className={`font-mono text-[10px] uppercase tracking-wider ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>{project.status}</span>
          </div>
          <p className={`text-sm leading-relaxed mb-3 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <StackChip key={tech} label={tech} isDark={isDark} />
            ))}
          </div>
          <div className="mt-4"><ProjectActions actions={project.actions} isDark={isDark} /></div>
        </TiltCard>
      ))}
    </div>
  </>
);

export default SystemsShowcase;
