import { useEffect, useRef } from 'react';
import { useInView, animate, useReducedMotion } from 'framer-motion';

// Counts a stat value up from 0 the first time it scrolls into view.
// Handles values like "3+" (numeric part + suffix); anything without a
// leading number ≤ 999 (e.g. a year like "2026") renders statically.
const CountUp = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();

  const match = /^(\d{1,3})(\D*)$/.exec(value);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    if (!inView || target === null || reduceMotion) return;
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix, reduceMotion]);

  if (target === null || reduceMotion) return <span>{value}</span>;
  return <span ref={ref}>{`0${suffix}`}</span>;
};

export default CountUp;
