import { motion, useReducedMotion } from 'framer-motion';

// Scroll-reveal wrapper for every CV section. Renders a <section> that fades
// and rises into view once, using the shared expo-out easing so all sections
// share the same motion rhythm.
const SectionReveal = ({ children, className = '', delay = 0, id, sectionKey }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      data-section-key={sectionKey}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default SectionReveal;
