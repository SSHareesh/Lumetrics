import { motion } from "framer-motion";

/**
 * Generates a deterministic set of particle descriptors from a seed.
 * Uses the same LCG pseudo-random approach as ScatterField so particles
 * are stable across renders without needing useState / useRef.
 */
function makeParticles(seed, count) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  return Array.from({ length: count }, () => ({
    x: rand() * 100,          // % position
    y: rand() * 100,
    size: 1.4 + rand() * 3.6,
    duration: 4 + rand() * 7,
    delay: rand() * 4.5,
    opacityBase: 0.12 + rand() * 0.42,
    isSquare: rand() > 0.72,  // ~28% squares, rest circles
    moveX: (rand() - 0.5) * 22,
    moveY: -(6 + rand() * 20),
  }));
}

export default function FloatingParticles({ count = 38 }) {
  const particles = makeParticles(42, count);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className={
            p.isSquare
              ? "absolute bg-teal/40 rotate-45"
              : "absolute rounded-full bg-teal/30"
          }
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            x: [0, p.moveX, p.moveX * 0.5, p.moveX * 1.2, 0],
            y: [0, p.moveY, p.moveY * 1.4, p.moveY * 0.7, 0],
            opacity: [
              p.opacityBase * 0.4,
              p.opacityBase,
              p.opacityBase * 0.65,
              p.opacityBase * 0.9,
              p.opacityBase * 0.4,
            ],
            scale: [1, 1.25, 0.85, 1.1, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
