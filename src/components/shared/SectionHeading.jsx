// Consistent section header: mono index label + display-font title.
const SectionHeading = ({ index, title, isDark }) => (
  <div className="mb-6">
    <div className={`font-mono text-xs tracking-[0.25em] uppercase mb-1 ${
      isDark ? 'text-emerald-400' : 'text-emerald-600'
    }`}>
      {String(index).padStart(2, '0')}
    </div>
    <h2 className={`font-display text-2xl md:text-3xl font-bold transition-colors duration-300 ${
      isDark ? 'text-white' : 'text-gray-900'
    }`}>
      {title}
    </h2>
  </div>
);

export default SectionHeading;
