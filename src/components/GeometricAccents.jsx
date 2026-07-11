import { motion } from "framer-motion";

/* ─── Shape renderers ──────────────────────────────────────────── */

function Triangle({ size }) {
  const h = (size * Math.sqrt(3)) / 2;
  return (
    <svg
      width={size}
      height={Math.round(h)}
      viewBox={`0 0 ${size} ${Math.round(h)}`}
      fill="none"
      aria-hidden="true"
    >
      <polygon
        points={`${size / 2},0 ${size},${Math.round(h)} 0,${Math.round(h)}`}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.45"
      />
    </svg>
  );
}

function Hexagon({ size }) {
  const r = size / 2;
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 30);
    return `${r + r * Math.cos(angle)},${r + r * Math.sin(angle)}`;
  }).join(" ");
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
      <polygon points={points} stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.38" />
    </svg>
  );
}

function Plus({ size }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
      <line x1={size / 2} y1={0} x2={size / 2} y2={size} stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.4" />
      <line x1={0} y1={size / 2} x2={size} y2={size / 2} stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.4" />
    </svg>
  );
}

function DashedCircle({ size }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 1}
        stroke="currentColor"
        strokeWidth="1.1"
        strokeOpacity="0.32"
        strokeDasharray="3 2.5"
      />
    </svg>
  );
}

/* ─── Accent descriptors ─────────────────────────────────────── */
const accents = [
  { type: "triangle",  x: "7%",  y: "22%", size: 15, delay: 0.55, dur: 4.2,  rotate: 12 },
  { type: "hex",       x: "83%", y: "28%", size: 22, delay: 1.1,  dur: 5.5,  rotate: 0  },
  { type: "plus",      x: "13%", y: "68%", size: 14, delay: 0.85, dur: 3.8,  rotate: 0  },
  { type: "circle",   x: "74%", y: "62%", size: 20, delay: 1.4,  dur: 4.8,  rotate: 0  },
  { type: "triangle",  x: "55%", y: "10%", size: 11, delay: 0.7,  dur: 3.5,  rotate: -8 },
  { type: "hex",       x: "30%", y: "82%", size: 16, delay: 1.6,  dur: 5.0,  rotate: 30 },
  { type: "plus",      x: "88%", y: "72%", size: 12, delay: 0.4,  dur: 4.0,  rotate: 45 },
  /* small dot clusters — statistical flavour */
  { type: "dot", x: "64%", y: "13%", size: 4.5, delay: 0.3,  dur: 3.2, rotate: 0 },
  { type: "dot", x: "69%", y: "19%", size: 3,   delay: 0.5,  dur: 4.0, rotate: 0 },
  { type: "dot", x: "59%", y: "21%", size: 3.5, delay: 0.65, dur: 3.6, rotate: 0 },
  { type: "dot", x: "19%", y: "78%", size: 4,   delay: 1.0,  dur: 4.1, rotate: 0 },
  { type: "dot", x: "24%", y: "73%", size: 3,   delay: 1.2,  dur: 3.7, rotate: 0 },
];

export default function GeometricAccents() {
  return (
    <div className="absolute inset-0 text-teal/60" aria-hidden="true">
      {accents.map((a, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: a.x, top: a.y }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -9, -3, -12, 0],
            rotate: [a.rotate, a.rotate + 10, a.rotate - 6, a.rotate + 4, a.rotate],
          }}
          transition={{
            opacity: { duration: 0.9, delay: a.delay, ease: "easeOut" },
            scale:   { duration: 0.9, delay: a.delay, ease: [0.22, 1, 0.36, 1] },
            y:       { duration: a.dur, delay: a.delay, repeat: Infinity, ease: "easeInOut" },
            rotate:  { duration: a.dur * 1.6, delay: a.delay, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {a.type === "triangle" && <Triangle size={a.size} />}
          {a.type === "hex"      && <Hexagon  size={a.size} />}
          {a.type === "plus"     && <Plus     size={a.size} />}
          {a.type === "circle"   && <DashedCircle size={a.size} />}
          {a.type === "dot" && (
            <div
              className="rounded-full bg-teal/40"
              style={{ width: a.size, height: a.size }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
