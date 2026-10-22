import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

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
