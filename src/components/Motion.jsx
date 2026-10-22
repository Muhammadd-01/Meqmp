import { Children, isValidElement, useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

// Word-by-word reveal. Plain strings split into words; elements (e.g. a highlighted
// <span>) animate as a single unit so their styling stays intact.
export function SplitText({ children, as = 'h2', className, delay = 0, stagger = 0.06, inView = true, ...rest }) {
  const Tag = motion[as];
  const units = [];
  Children.toArray(children).forEach((child) => {
    if (typeof child === 'string') child.split(/(\s+)/).forEach((w) => w && units.push(w));
    else if (isValidElement(child)) units.push(child);
  });
  const trigger = inView
    ? { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-40px' } }
    : { initial: 'hidden', animate: 'show' };

  return (
    <Tag className={`split-text ${className || ''}`} {...rest} {...trigger} variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}>
      {units.map((u, i) =>
        typeof u === 'string' && /^\s+$/.test(u) ? (
          ' '
        ) : (
          <span className="split__mask" key={i}>
            <motion.span
              className="split__word"
              variants={{
                hidden: { y: '110%', opacity: 0, rotate: 4 },
                show: { y: '0%', opacity: 1, rotate: 0, transition: { duration: 0.9, ease } },
              }}
            >
              {u}
            </motion.span>
          </span>
        )
      )}
    </Tag>
  );
}

// Clip-path wipe for images, with a slow settle-in zoom.
export function ImageReveal({ src, srcSet, sizes, alt = '', className = '', from = 'left', children, eager = false }) {
  const start = { left: 'inset(0 100% 0 0)', right: 'inset(0 0 0 100%)', bottom: 'inset(100% 0 0 0)' }[from];
  return (
    <motion.div
      className={`img-reveal ${className}`}
      initial={{ clipPath: start }}
      whileInView={{ clipPath: 'inset(0 0 0 0)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.2, ease }}
    >
      <motion.img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.6, ease }}
      />
      {children}
    </motion.div>
  );
}

// 3D tilt that follows the pointer (mouse only; touch devices get a flat card).
export function Tilt({ children, className = '', max = 8, as = 'div', ...rest }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 220, damping: 18 });
  const sry = useSpring(ry, { stiffness: 220, damping: 18 });
  const Tag = motion[as];

  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * max * 2);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * max * 2);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <Tag
      ref={ref}
      className={`tilt ${className}`}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Element drifts toward the cursor while hovered.
export function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 260, damping: 16 });
  const y = useSpring(0, { stiffness: 260, damping: 16 });

  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span ref={ref} className={`magnetic ${className}`} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.span>
  );
}

// Moves its children along Y as the section scrolls through the viewport.
export function Parallax({ children, offset = 60, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
