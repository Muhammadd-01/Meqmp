import { Sparkle } from 'lucide-react';

// Skewed, auto-scrolling keyword band used as a vibrant section divider.
export default function Ticker({ items, tone = 'orange', reverse = false }) {
  const list = [...items, ...items];
  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className={`ticker ticker--${tone} ${reverse ? 'ticker--reverse' : ''}`}>
      <div className="ticker__track">
        {list.map((t, i) => (
          <span key={i} className="ticker__item">
            {t}
            <Sparkle size={18} />
          </span>
        ))}
      </div>
      </div>
    </div>
  );
}
