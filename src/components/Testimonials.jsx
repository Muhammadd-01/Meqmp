import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/site';

const initials = (name) =>
  name
    .split(' ')
    .filter((w) => !w.endsWith('.'))
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (d) => setI((v) => (v + d + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return undefined;
    const id = setTimeout(() => go(1), 6000);
    return () => clearTimeout(id);
  }, [paused, i]);

  return (
    <div className="testi" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Quote className="testi__icon" size={56} strokeWidth={1.4} />
      <div className="testi__stage">
        {testimonials.map((t, k) => (
          <figure key={t.name} className={k === i ? 'is-active' : ''} aria-hidden={k !== i}>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <span className="testi__avatar">{initials(t.name)}</span>
              <span>
                <strong>{t.name}</strong>
                <em>{t.org}</em>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="testi__controls">
        <button onClick={() => go(-1)} aria-label="Previous testimonial"><ChevronLeft size={20} /></button>
        <div className="testi__dots">
          {testimonials.map((_, k) => (
            <button key={k} className={k === i ? 'is-active' : ''} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next testimonial"><ChevronRight size={20} /></button>
      </div>
    </div>
  );
}
