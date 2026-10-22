import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Icon from './Icon';
import { pillars } from '../data/services';

const ease = [0.22, 1, 0.36, 1];
const sized = (url, w) => url.replace(/w=\d+/, `w=${w}`);

// Hero visual: a circular "globe" window that cross-fades through the five service
// photos (with a slow Ken Burns zoom), wrapped by the logo's orange meridian arc,
// with photo thumbnails orbiting around it.
export default function HeroShowcase() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const p = pillars[i];

  useEffect(() => {
    if (paused) return undefined;
    const id = setTimeout(() => setI((v) => (v + 1) % pillars.length), 4200);
    return () => clearTimeout(id);
  }, [i, paused]);

  return (
    <div className="showcase" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Orbit ring + logo arc */}
      <svg className="showcase__rings" viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <linearGradient id="showcase-arc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffb347" />
            <stop offset="1" stopColor="#f78d00" />
          </linearGradient>
        </defs>
        <circle className="showcase__orbit-line" cx="200" cy="200" r="192" />
        <motion.path
          d="M 200 18 A 182 182 0 0 1 200 382"
          fill="none"
          stroke="url(#showcase-arc)"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease, delay: 0.3 }}
        />
      </svg>

      {/* Logo tiles peeking from the left edge */}
      <div className="showcase__tiles" aria-hidden="true">
        {Array.from({ length: 12 }, (_, k) => (
          <motion.span
            key={k}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: [0.4, 1, 0.4], scale: 1 }}
            transition={{ opacity: { duration: 3, repeat: Infinity, delay: k * 0.15 }, scale: { duration: 0.5, delay: 0.6 + k * 0.05 } }}
          />
        ))}
      </div>

      {/* Main photo window */}
      <motion.div
        className="showcase__frame"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease }}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={p.slug}
            src={sized(p.image, 900)}
            srcSet={`${sized(p.image, 600)} 600w, ${sized(p.image, 900)} 900w`}
            sizes="(max-width: 960px) 80vw, 460px"
            alt={`${p.title} — Meridian`}
            fetchpriority={i === 0 ? 'high' : undefined}
            initial={{ opacity: 0, scale: 1.18 }}
            animate={{ opacity: 1, scale: 1.04 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.9 }, scale: { duration: 5, ease: 'linear' } }}
          />
        </AnimatePresence>
        <div className="showcase__shade" />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={p.slug}
            className="showcase__label"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease }}
          >
            <span className="showcase__label-icon"><Icon name={p.icon} size={18} /></span>
            <Link to={p.to}>
              {p.title} <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Orbiting thumbnails */}
      <div className="showcase__orbit" aria-hidden="true">
        {pillars.slice(0, 3).map((t, k) => (
          <button
            key={t.slug}
            type="button"
            tabIndex={-1}
            className={`showcase__thumb ${pillars[i].slug === t.slug ? 'is-active' : ''}`}
            style={{ '--a': `${k * 120}deg` }}
            onClick={() => setI(k)}
          >
            <img src={sized(t.image, 160)} alt="" loading="lazy" />
          </button>
        ))}
      </div>

      {/* Progress dots */}
      <div className="showcase__dots" role="tablist" aria-label="Service highlights">
        {pillars.map((t, k) => (
          <button
            key={t.slug}
            role="tab"
            aria-selected={k === i}
            aria-label={t.title}
            className={k === i ? 'is-active' : ''}
            onClick={() => setI(k)}
          >
            {k === i && !paused && <span key={i} className="showcase__dot-fill" />}
          </button>
        ))}
      </div>
    </div>
  );
}
