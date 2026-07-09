import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const AcademicProjects = ({ section, isDark, index, onOpenImages, language }) => (
  <>
    <SectionHeading index={index} title={section.title} isDark={isDark} />
    {section.content.map((project, pIdx) => (
      <div key={pIdx} className="mb-8 last:mb-0">
        <h3 className={`font-display text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {project.name}
          {project.advisor && (
            <span className={`text-sm font-normal ml-2 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
              ({project.advisor})
            </span>
          )}
        </h3>

        {project.description && (
          <ul className={`list-disc list-inside ml-1 space-y-1 text-sm md:text-base ${
            isDark ? 'text-slate-300' : 'text-gray-700'
          }`}>
            {project.description.map((desc, dIdx) => (
              <li key={dIdx} className="leading-relaxed">{desc}</li>
            ))}
            {project.link && (
              <li>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 hover:underline transition-colors ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {language === 'zh' ? '專題細節與程式碼' : 'Project Details & Code'}
                  <ExternalLink size={14} />
                </a>
              </li>
            )}
          </ul>
        )}

        {project.subProjects && (
          <div className="mt-5">
            <div className="grid gap-4">
              {project.subProjects.map((subProject, sIdx) => (
                <motion.div
                  key={sIdx}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className={`relative overflow-hidden rounded-xl border transition-colors duration-300 ${
                    isDark
                      ? 'bg-gradient-to-br from-slate-800/50 via-purple-900/15 to-emerald-900/10 border-purple-800/20 hover:border-emerald-500/35'
                      : 'bg-gradient-to-br from-white to-gray-50/50 border-gray-200/60 hover:border-gray-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="p-5 md:p-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                      <div className="flex-1 min-w-0">
                        <h5 className={`font-display text-base md:text-lg font-semibold mb-2 ${
                          isDark ? 'text-emerald-200' : 'text-gray-900'
                        }`}>
                          {subProject.name}
                        </h5>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                          {subProject.description}
                        </p>
                        {subProject.github && (
                          <a
                            href={subProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                              isDark
                                ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/20'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200'
                            }`}
                          >
                            <Github size={15} />
                            {language === 'zh' ? '查看源碼' : 'View Code'}
                          </a>
                        )}
                      </div>
                      {subProject.image && (
                        <div className="lg:w-72 lg:shrink-0">
                          <div className="relative overflow-hidden rounded-lg group">
                            <img
                              src={subProject.image}
                              alt={subProject.name}
                              loading="lazy"
                              className="w-full h-44 lg:h-36 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                              onClick={() => onOpenImages({ url: subProject.image, alt: subProject.name })}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {project.note && (
              <div className={`mt-5 p-4 rounded-xl border ${
                isDark
                  ? 'bg-gradient-to-r from-emerald-900/20 via-purple-900/10 to-emerald-900/20 border-emerald-500/20'
                  : 'bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50 border-blue-200/50'
              }`}>
                <div className="flex items-start gap-3">
                  <Github size={18} className={`mt-0.5 shrink-0 ${isDark ? 'text-emerald-400' : 'text-blue-500'}`} />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${isDark ? 'text-emerald-200' : 'text-gray-800'}`}>
                      {project.note}
                    </p>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                          isDark
                            ? 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border-emerald-500/30'
                            : 'bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-200'
                        }`}
                      >
                        <Github size={15} />
                        {language === 'zh' ? '瀏覽完整 GitHub' : 'Browse Full GitHub'}
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    ))}
  </>
);

export default AcademicProjects;
