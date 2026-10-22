import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const HOLD = 1.3; // seconds the logo + loader stay on screen before the panels lift
const wipe = [0.76, 0, 0.24, 1];

// Brand-coloured curtain that plays on every in-app navigation (never on first load,
// so it doesn't delay the first paint): logo with a buffering loader, then a wipe up.
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
            transition={{ duration: 0.7, ease: wipe, delay: HOLD }}
          />
          <motion.div
            className="curtain__panel curtain__panel--deep"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: wipe, delay: HOLD + 0.12 }}
            onAnimationComplete={() => setRun(0)}
          />

          <motion.div
            className="curtain__loader"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: [0, 1, 1, 0], y: [14, 0, 0, -24] }}
            transition={{ duration: HOLD + 0.25, times: [0, 0.18, 0.82, 1], ease: 'easeInOut' }}
          >
            <div className="curtain__logo">
              <img src="/images/logo-white.png" alt="" />
              <span className="curtain__shine" />
            </div>

            <div className="curtain__tiles">
              {Array.from({ length: 5 }, (_, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -10, 0], opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
                />
              ))}
            </div>

            <div className="curtain__bar">
              <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: HOLD - 0.1, ease: [0.4, 0, 0.2, 1] }} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
