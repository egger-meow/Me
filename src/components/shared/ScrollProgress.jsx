import { motion, useScroll, useSpring } from 'framer-motion';

// Thin gradient progress bar pinned above the control bar — HUD-style
// feedback for how far through the CV the reader is.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
