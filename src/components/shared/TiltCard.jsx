import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion';

// 3D-tilt card that follows the cursor, with a spotlight that tracks the
// pointer. All motion runs on springs over transform/opacity only, so it
// stays on the compositor thread. Falls back to a static div under
// prefers-reduced-motion.
const TiltCard = ({
  children,
  className = '',
  maxTilt = 5,
  spotlightColor = 'rgba(16, 185, 129, 0.10)',
  lift = -6,
  as = 'div',
  ...rest
}) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spot = useMotionValue(0);

  const sx = useSpring(px, { stiffness: 200, damping: 22 });
  const sy = useSpring(py, { stiffness: 200, damping: 22 });
  const spotOpacity = useSpring(spot, { stiffness: 180, damping: 26 });

  const rotateX = useTransform(sy, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(sx, [0, 1], [-maxTilt, maxTilt]);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, ${spotlightColor}, transparent 65%)`;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className} {...rest}>{children}</Tag>;
  }

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
    spot.set(0);
  };

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => spot.set(1)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: lift }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      style={{ rotateX, rotateY, transformPerspective: 900, willChange: 'transform' }}
      className={className}
      {...rest}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-[1]"
        style={{ background: spotlight, opacity: spotOpacity }}
      />
      {children}
    </MotionTag>
  );
};

export default TiltCard;
