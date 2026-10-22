import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

// Shared hero for inner pages: photo, deep teal wash, breadcrumb and animated title.
export default function PageHero({ eyebrow, title, highlight, text, image, crumbs = [], children }) {
  const parts = highlight && title.includes(highlight) ? title.split(highlight) : [title];
  return (
    <section className="page-hero">
      {image && (
        <motion.div
          className="page-hero__bg"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease }}
        />
      )}
      <div className="page-hero__wash" />
      <div className="dot-grid" />
      <div className="glow glow--orange" style={{ width: 340, height: 340, right: '8%', bottom: -180, opacity: 0.35 }} />

      <div className="container page-hero__inner">
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
          <motion.span className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }}>
            {eyebrow}
          </motion.span>
        )}

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease }}>
          {parts.length > 1 ? (
            <>
              {parts[0]}
              <span className="text-gradient">{highlight}</span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </motion.h1>

        {text && (
          <motion.p className="lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.28, ease }}>
            {text}
          </motion.p>
        )}

        {children && (
          <motion.div className="page-hero__actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease }}>
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
