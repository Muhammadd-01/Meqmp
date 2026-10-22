import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';

// Brand-coloured wipe that plays on every in-app navigation (never on first load,
// so it doesn't delay the first paint).
export function PageCurtain() {
  const { pathname } = useLocation();
  const first = useRef(true);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setRun((n) => n + 1);
  }, [pathname]);

  return (
    <AnimatePresence>
      {run > 0 && (
        <motion.div key={run} className="curtain" aria-hidden="true">
          <motion.div
            className="curtain__panel curtain__panel--orange"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
          />
          <motion.div
            className="curtain__panel curtain__panel--deep"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.18 }}
            onAnimationComplete={() => setRun(0)}
          >
            <motion.img
              src="/images/logo-white.png"
              alt=""
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Dot + trailing ring cursor for fine pointers. Grows over interactive elements.
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 380, damping: 30, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 380, damping: 30, mass: 0.6 });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    document.documentElement.classList.add('has-cursor');
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHover(!!e.target.closest('a, button, [role="tab"], input, textarea, select, label, .tilt'));
    };
    const press = () => setDown(true);
    const release = () => setDown(false);
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', release);
    return () => {
      document.documentElement.classList.remove('has-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} aria-hidden="true" />
      <motion.div
        className={`cursor-ring ${hover ? 'is-hover' : ''} ${down ? 'is-down' : ''}`}
        style={{ x: rx, y: ry }}
        aria-hidden="true"
      />
    </>
  );
}
