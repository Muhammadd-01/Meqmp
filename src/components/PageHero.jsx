import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { SplitText } from './Motion';
import { srcSet } from '../data/site';

const ease = [0.22, 1, 0.36, 1];

// Shared hero for inner pages: parallax photo, deep teal wash, breadcrumb and word-reveal title.
export default function PageHero({ eyebrow, title, highlight, text, image, crumbs = [], children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const parts = highlight && title.includes(highlight) ? title.split(highlight) : [title];

  return (
    <section className="page-hero" ref={ref}>
      {image && (
        <motion.div className="page-hero__bg" style={{ y }}>
          <motion.img
            src={image}
            srcSet={srcSet(image)}
            sizes="100vw"
            alt=""
            fetchpriority="high"
            initial={{ scale: 1.18 }}
            animate={{ scale: 1.04 }}
            transition={{ duration: 2.2, ease }}
          />
        </motion.div>
      )}
      <div className="page-hero__wash" />
      <div className="dot-grid" />
      <div className="glow glow--orange glow--drift" style={{ width: 340, height: 340, right: '8%', bottom: -180, opacity: 0.35 }} />
      <div className="page-hero__lines" aria-hidden="true">
        <span /><span /><span />
      </div>

      <motion.div className="container" style={{ opacity: fade }}>
        <div className="page-hero__inner">
          <motion.nav
            className="crumbs"
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link to="/">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label}>
                <ChevronRight size={14} />
                {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </span>
            ))}
          </motion.nav>

          {eyebrow && (
            <motion.span className="eyebrow" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }}>
              {eyebrow}
            </motion.span>
          )}

          <SplitText as="h1" inView={false} delay={0.15} stagger={0.05}>
            {parts.length > 1
              ? [parts[0], <span key="hl" className="text-gradient">{highlight}</span>, parts[1]]
              : title}
          </SplitText>

          {text && (
            <motion.p className="lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.45, ease }}>
              {text}
            </motion.p>
          )}

          {children && (
            <motion.div className="page-hero__actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6, ease }}>
              {children}
            </motion.div>
          )}
        </div>
      </motion.div>

      <div className="page-hero__scroll" aria-hidden="true"><span /></div>
    </section>
  );
}
