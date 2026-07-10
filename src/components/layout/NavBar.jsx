import { motion } from 'framer-motion';

// Section navigation with an animated active indicator that slides between
// items (shared layoutId).
const NavBar = ({ isDark, items, activeSection, onNavigate }) => (
  <div className={`px-4 py-2 border-t transition-all duration-500 ${isDark
    ? 'border-amber-500/15 bg-gradient-to-r from-[#0e0c08] via-[#191307]/60 to-[#241a0a]/60 backdrop-blur-sm'
    : 'border-gray-100 bg-white/80 backdrop-blur-sm'
    }`}>
    <div className="max-w-6xl mx-auto">
      <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar md:justify-center">
        {items.map((item) => {
          const isActive = item.key === activeSection;
          return (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`relative shrink-0 px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg cursor-pointer ${isActive
                ? (isDark ? 'text-emerald-200' : 'text-gray-900')
                : (isDark ? 'text-slate-300 hover:text-emerald-200' : 'text-gray-500 hover:text-gray-900')
                }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className={`absolute inset-0 rounded-lg ${isDark
                    ? 'bg-gradient-to-r from-emerald-500/15 to-purple-500/15 border border-emerald-500/20'
                    : 'bg-gray-100 border border-gray-200'
                    }`}
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </button>
          );
        })}
      </nav>
    </div>
  </div>
);

export default NavBar;
