import { motion } from 'framer-motion';

// Animated take on the logo's globe: an orange meridian arc wrapping a grid of tiles.
const rows = [
  [0, 0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1],
  [0, 0, 0, 1, 1, 1],
];

export default function MeridianMark({ className = '' }) {
  return (
    <svg className={`meridian-mark ${className}`} viewBox="0 0 400 400" aria-hidden="true">
      <defs>
        <linearGradient id="arc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff9d7" />
          <stop offset="1" stopColor="#d9cb84" />
        </linearGradient>
      </defs>
      <motion.circle
        cx="200" cy="200" r="178" fill="none" stroke="rgba(155,179,185,0.18)" strokeWidth="1"
        strokeDasharray="4 8"
        animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        style={{ originX: '200px', originY: '200px' }}
      />
      <motion.path
        d="M 200 22 A 178 178 0 0 1 200 378"
        fill="none" stroke="url(#arc)" strokeWidth="5" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
      {rows.map((row, r) =>
        row.map((on, c) =>
          on ? (
            <motion.rect
              key={`${r}-${c}`}
              x={92 + c * 42 + (c > 2 ? (c - 2) * 4 : 0)}
              y={88 + r * 38}
              width={34 - Math.max(0, c - 3) * 6}
              height={30}
              rx="4"
              fill={c > 3 ? '#fff9d7' : '#f2e6a2'}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0, 1, 0.55, 1], scale: 1 }}
              transition={{
                opacity: { duration: 4, repeat: Infinity, repeatType: 'mirror', delay: 0.6 + (r + c) * 0.12 },
                scale: { duration: 0.6, delay: 0.4 + (r + c) * 0.06 },
              }}
              style={{ originX: 'center', originY: 'center', transformBox: 'fill-box' }}
            />
          ) : null
        )
      )}
    </svg>
  );
}
