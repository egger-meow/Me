import SectionHeading from '../shared/SectionHeading';

const Personality = ({ section, isDark, index }) => (
  <>
    <SectionHeading index={index} title={section.title} isDark={isDark} />
    <div className={`space-y-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
      <p>{section.content.intro}</p>
      <p>{section.content.passion}</p>
      <p>{section.content.exploration}</p>
      <ul className="list-disc list-inside ml-1 space-y-1.5 pt-1">
        {section.content.traits.map((trait, idx) => (
          <li key={idx}>{trait}</li>
        ))}
      </ul>
    </div>
  </>
);

export default Personality;
