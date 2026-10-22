import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Stagger, StaggerItem } from './Reveal';

export default function ProcessSteps({ steps, dark = false }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  const few = steps.length <= 4;

  return (
    <div className="process-wrap" ref={ref}>
      {few && (
        <div className="process__line" aria-hidden="true">
          <motion.span style={{ scaleX: fill }} />
        </div>
      )}
      <Stagger as="ol" className={`process ${dark ? 'process--dark' : ''} process--${few ? 'few' : 'many'}`} gap={0.12}>
        {steps.map((s, i) => (
          <StaggerItem as="li" key={s.title} className="process__step">
            <div className="process__num">
              <span>{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
