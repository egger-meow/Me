import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

// Magnetic hover wrapper: the child is pulled toward the cursor, clamped so
// it never leaves its hit box. Reserve for at most 1-2 focal elements per
// screen — more becomes noisy.
const Magnetic = ({ children, strength = 0.3, className = '' }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.5 });

  if (reduceMotion) return <div className={className}>{children}</div>;

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, willChange: 'transform' }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
