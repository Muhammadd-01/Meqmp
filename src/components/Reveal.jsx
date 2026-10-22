import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, y = 28, x = 0, as = 'div', className, ...rest }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease, delay }}
      {...rest}
    >
      {children}
    </M>
  );
}

export function Stagger({ children, className, gap = 0.08, as = 'div', ...rest }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
      {...rest}
    >
      {children}
    </M>
  );
}

export const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function StaggerItem({ children, className, as = 'div', ...rest }) {
  const M = motion[as];
  return (
    <M className={className} variants={item} {...rest}>
      {children}
    </M>
  );
}
