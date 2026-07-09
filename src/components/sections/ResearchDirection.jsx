import { motion } from 'framer-motion';
import { Brain, FileSearch, RefreshCcw, Bot } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const topicIcons = [Brain, FileSearch, RefreshCcw, Bot];

const ResearchDirection = ({ section, isDark, index }) => (
  <>
    <SectionHeading index={index} title={section.title} isDark={isDark} />
    <p className={`mb-6 max-w-2xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
      {section.intro}
    </p>
    <div className="grid sm:grid-cols-2 gap-4">
      {section.topics.map((topic, idx) => {
        const Icon = topicIcons[idx % topicIcons.length];
        return (
          <motion.div
            key={topic.name}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className={`rounded-xl border p-5 transition-colors duration-300 ${
              isDark
                ? 'bg-slate-800/50 border-purple-800/25 hover:border-purple-500/45 hover:shadow-glow-purple'
                : 'bg-white border-gray-200 hover:border-purple-400/50 shadow-sm hover:shadow-md'
            }`}
          >
            <div
              className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3 ${
                isDark ? 'bg-purple-500/15 text-purple-300' : 'bg-purple-50 text-purple-600'
              }`}
            >
              <Icon size={20} strokeWidth={1.75} />
            </div>
            <h3 className={`font-display font-semibold mb-1.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {topic.name}
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              {topic.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  </>
);

export default ResearchDirection;
