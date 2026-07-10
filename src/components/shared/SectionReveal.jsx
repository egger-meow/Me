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
    offset: ['start 92%', 'start 40%'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 32, mass: 0.4 });

  // 0 → section entering from below; 1 → fully settled. Deliberately one-way:
  // sections only ever brighten as they arrive and then hold at full opacity
  // — no re-dimming on exit — so a fast nav-jump across many sections at
  // once doesn't read as a multi-section strobe/flash.
  const opacity = useTransform(progress, [0, 1], [0.55, 1]);
  const scale = useTransform(progress, [0, 1], [0.98, 1]);
  const y = useTransform(progress, [0, 1], [22, 0]);

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
