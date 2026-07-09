import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

// Apple-product-page-style section choreography: instead of a one-shot
// entrance, each section's opacity/scale/rise are a continuous function of
// its scroll position — it settles in as it enters and gently recedes as it
// exits, reversibly in both scroll directions. Springs smooth the raw scroll
// value; everything stays on transform/opacity.
const SectionReveal = ({ children, className = '', id, sectionKey }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 95%', 'end 5%'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  // 0 → section just entering from below; 1 → section just leaving above
  const opacity = useTransform(progress, [0, 0.15, 0.82, 1], [0.3, 1, 1, 0.5]);
  const scale = useTransform(progress, [0, 0.15, 0.85, 1], [0.965, 1, 1, 0.98]);
  const y = useTransform(progress, [0, 0.15], [36, 0]);

  if (reduceMotion) {
    return (
      <section id={id} data-section-key={sectionKey} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      data-section-key={sectionKey}
      style={{ opacity, scale, y, willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default SectionReveal;
