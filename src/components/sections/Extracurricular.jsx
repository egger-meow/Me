import SectionHeading from '../shared/SectionHeading';

const Extracurricular = ({ section, isDark, index, onOpenImages }) => (
  <>
    <SectionHeading index={index} title={section.title} isDark={isDark} />
    <div className="space-y-6">
      {section.content.map((activity, idx) => (
        <div key={idx}>
          <div className="flex flex-wrap justify-between items-start gap-x-4">
            <div className="min-w-0">
              <h3 className={`font-display text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {activity.organization}
              </h3>
              <p className={isDark ? 'text-slate-300' : 'text-gray-700'}>{activity.role}</p>
              <p className={`text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                {activity.description}
              </p>
            </div>
            <span className={`font-mono text-sm shrink-0 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
              {activity.period}
            </span>
          </div>
          {activity.image && (
            <img
              src={activity.image}
              alt={activity.organization}
              loading="lazy"
              className="mt-3 max-w-md w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => onOpenImages({ url: activity.image, alt: activity.organization })}
            />
          )}
        </div>
      ))}
    </div>
  </>
);

export default Extracurricular;
