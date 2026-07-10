import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import PhotoSlot from '../shared/PhotoSlot';
import Magnetic from '../shared/Magnetic';
import CountUp from '../shared/CountUp';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = ({ data, isDark, onDownloadPDF }) => {
  const reduceMotion = useReducedMotion();
  const { hero, contact, name } = data;

  // Apple-style hero recede: as the reader scrolls into the page, the hero
  // gently scales down and dims behind the incoming content.
  const { scrollY } = useScroll();
  const recedeScale = useTransform(scrollY, [0, 560], [1, 0.95]);
  const recedeOpacity = useTransform(scrollY, [0, 560], [1, 0.4]);

  return (
    <motion.header
      variants={container}
      initial={reduceMotion ? false : 'hidden'}
      animate="show"
      style={reduceMotion ? undefined : { scale: recedeScale, opacity: recedeOpacity, transformOrigin: 'top center' }}
      className="mb-10"
    >
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-12">
        {/* Text column */}
        <div className="flex-1 min-w-0">
          <motion.p
            variants={item}
            className={`font-mono text-[11px] sm:text-xs tracking-[0.3em] mb-3 ${
              isDark ? 'text-emerald-400' : 'text-emerald-600'
            }`}
          >
            {hero.kicker}
          </motion.p>

          <motion.h1
            variants={item}
            className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 ${
              isDark
                ? 'text-gradient-hero bg-gradient-to-r from-white via-emerald-200 to-purple-300'
                : 'text-gray-900'
            }`}
          >
            {name}
          </motion.h1>

          <motion.p
            variants={item}
            className={`font-display text-xl sm:text-2xl font-medium mb-3 ${
              isDark ? 'text-emerald-200' : 'text-gray-800'
            }`}
          >
            {hero.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className={`text-sm sm:text-base leading-relaxed max-w-xl mb-6 ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}
          >
            {hero.subline}
          </motion.p>

          {/* Contact row */}
          <motion.div
            variants={item}
            className={`flex flex-wrap gap-x-4 gap-y-2 text-sm mb-6 ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={15} />
              {contact.address}
            </span>
            <a
              href={`mailto:${contact.email}`}
              className={`flex items-center gap-1.5 transition-colors ${
                isDark ? 'hover:text-emerald-300' : 'hover:text-emerald-700'
              }`}
            >
              <Mail size={15} />
              {contact.email}
            </a>
            <span className="flex items-center gap-1.5">
              <Phone size={15} />
              {contact.phone}
            </span>
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 transition-colors ${
                isDark ? 'hover:text-emerald-300' : 'hover:text-emerald-700'
              }`}
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Magnetic>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-colors cursor-pointer ${
                  isDark
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-glow-emerald'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                <Github size={16} />
                {hero.ctas.github}
              </motion.a>
            </Magnetic>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${contact.email}`}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm border transition-colors cursor-pointer ${
                isDark
                  ? 'border-purple-500/40 text-purple-200 hover:bg-purple-500/10'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Mail size={16} />
              {hero.ctas.email}
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onDownloadPDF}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm border transition-colors cursor-pointer ${
                isDark
                  ? 'border-amber-500/40 text-amber-200 hover:bg-amber-500/10'
                  : 'border-amber-500/50 text-amber-700 hover:bg-amber-50'
              }`}
            >
              <Download size={16} />
              {hero.ctas.pdf}
            </motion.button>
          </motion.div>
        </div>

        {/* Portrait column */}
        <motion.div variants={item} className="flex justify-center md:justify-end shrink-0">
          <div className="relative">
            <div
              className={`absolute -inset-1.5 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-200 to-purple-500 blur-md ${
                isDark ? 'opacity-60 animate-pulse-ring' : 'opacity-25'
              }`}
              aria-hidden="true"
            />
            <PhotoSlot
              src={hero.photo}
              alt={name}
              isDark={isDark}
              label={hero.photoLabel}
              rounded="rounded-full"
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Stat chips */}
      <motion.div
        variants={item}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10"
      >
        {hero.stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`rounded-xl px-4 py-3 border transition-colors duration-300 ${
              isDark
                ? 'bg-slate-800/60 border-purple-800/30 hover:border-emerald-500/40'
                : 'bg-white border-gray-200 hover:border-emerald-400/60 shadow-sm'
            }`}
          >
            <div className={`font-display text-2xl font-bold tabular-nums ${
              isDark ? 'text-emerald-300' : 'text-emerald-600'
            }`}>
              <CountUp value={stat.value} />
            </div>
            <div className={`text-xs mt-0.5 leading-snug ${
              isDark ? 'text-slate-400' : 'text-gray-500'
            }`}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.header>
  );
};

export default Hero;
