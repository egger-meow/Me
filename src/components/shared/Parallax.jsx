import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

// Subtle scroll-linked vertical drift (Apple-style depth cue). Wrap media
// blocks — the child glides a few pixels against the scroll direction while
// its section passes through the viewport.
const Parallax = ({ children, range = 14, className = '' }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div ref={ref} style={{ y, willChange: 'transform' }} className={className}>
      {children}
    </motion.div>
  );
};

export default Parallax;
