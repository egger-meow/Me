import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

// Dark-mode-only ambient glow that trails the cursor across the whole page,
// sitting between the galaxy background and the content. Springs give it a
// slight lag so it feels alive rather than glued to the pointer.
const CursorGlow = () => {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [x, y, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[2] w-[520px] h-[520px] rounded-full mix-blend-screen"
      style={{
        left: sx,
        top: sy,
        x: '-50%',
        y: '-50%',
        background:
          'radial-gradient(circle, rgba(16,185,129,0.10) 0%, rgba(168,85,247,0.08) 40%, transparent 70%)',
      }}
    />
  );
};

export default CursorGlow;
