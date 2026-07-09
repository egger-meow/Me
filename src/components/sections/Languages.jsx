import { Image } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const Languages = ({ section, isDark, index, onOpenImages }) => (
  <>
    <SectionHeading index={index} title={section.title} isDark={isDark} />
    <p className={isDark ? 'text-slate-300' : 'text-gray-700'}>{section.content}</p>
    {section.ieltsTranscript && (
      <button
        onClick={() => onOpenImages({ url: section.ieltsTranscript, alt: 'IELTS Transcript' })}
        className={`mt-3 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border transition-colors cursor-pointer ${
          isDark
            ? 'bg-slate-700/70 hover:bg-slate-600/70 text-slate-200 border-slate-600'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300'
        }`}
      >
        <Image size={15} />
        {section.ieltsLabel}
      </button>
    )}
  </>
);

export default Languages;
