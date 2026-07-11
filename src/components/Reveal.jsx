import { motion } from "framer-motion";

/**
 * Reveal — scroll-triggered entrance animation.
 *
 * variant options
 * ───────────────
 * "fade"   (default) — opacity + Y slide, existing behaviour
 * "clip"   — clip-path mask reveal (content rises out of a hidden slot)
 * "slide"  — horizontal slide + fade (good for asymmetric layouts)
 * "scale"  — subtle scale-up + fade (great for cards)
 */
const variants = {
  fade: {
    initial: (y) => ({ opacity: 0, y }),
    visible:       { opacity: 1, y: 0 },
  },
  clip: {
    initial: { clipPath: "inset(0 0 100% 0)", opacity: 1, y: 0 },
    visible: { clipPath: "inset(0 0 0% 0)",   opacity: 1, y: 0 },
  },
  slide: {
    initial: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0   },
  },
  scale: {
    initial: { opacity: 0, scale: 0.93, y: 16 },
    visible: { opacity: 1, scale: 1,    y: 0  },
  },
};

export default function Reveal({
  children,
  delay   = 0,
  y       = 22,
  className = "",
  as      = "div",
  once    = true,
  variant = "fade",
}) {
  const MotionTag = motion[as] || motion.div;
  const v = variants[variant] ?? variants.fade;

  return (
    <MotionTag
      className={className}
      initial={typeof v.initial === "function" ? v.initial(y) : v.initial}
      whileInView={v.visible}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: variant === "clip" ? 0.75 : 0.68,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
