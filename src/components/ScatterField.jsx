import { motion } from "framer-motion";

// Deterministic pseudo-random scatter of points clustering around a
// regression line — a small nod to the subject matter (a fitted model)
// rather than a decorative abstract shape.
function makePoints(seed, count, width, height) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const pts = [];
  for (let i = 0; i < count; i++) {
    const x = 40 + rand() * (width - 80);
    const t = x / width;
    const trend = height - 60 - t * (height - 160);
    const noise = (rand() - 0.5) * 140;
    const y = Math.max(30, Math.min(height - 30, trend + noise));
    pts.push({ x, y, r: 2.4 + rand() * 3.2, d: rand() * 1.2 });
  }
  return pts;
}

export default function ScatterField({ className = "", opacity = 1 }) {
  const width = 760;
  const height = 520;
  const points = makePoints(7, 46, width, height);

  const x1 = 60, y1 = height - 90;
  const x2 = width - 60, y2 = 90;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      style={{ opacity }}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <line x1={40} y1={height - 40} x2={width - 20} y2={height - 40} stroke="currentColor" strokeOpacity="0.14" strokeWidth="1" />
      <line x1={40} y1={20} x2={40} y2={height - 40} stroke="currentColor" strokeOpacity="0.14" strokeWidth="1" />

      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={p.r}
          fill="currentColor"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.55, 0.4] }}
          transition={{ duration: 1.6, delay: p.d, ease: "easeOut" }}
        />
      ))}

      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeOpacity="0.85"
        strokeDasharray="4 5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.9 }}
        transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
