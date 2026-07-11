import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

/**
 * LoadingScreen
 * ─────────────
 * Renders a 100 vh invisible spacer at the start of the page.
 * Scrolling through that spacer drives the loading overlay off the screen:
 *   scroll 0  → overlay fully visible  (scale 1,   opacity 1, r 0)
 *   scroll 1  → overlay fully gone     (scale 0.7, opacity 0, r 40px)
 *
 * The actual hero section follows the spacer in the DOM, so when the
 * overlay fully exits the hero top is exactly at the viewport top.
 */
export default function LoadingScreen() {
  const spacerRef = useRef(null);
  const [isGone, setIsGone] = useState(false);

  /* Track scroll progress through the 100 vh spacer */
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  });

  /* Overlay transforms driven by scroll */
  const scale        = useTransform(scrollYProgress, [0, 0.88], [1, 0.68]);
  const opacity      = useTransform(scrollYProgress, [0, 0.88], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.88], [0, 40]);

  /* Hide the overlay completely once it is fully transparent to prevent it from blocking/lingering */
  useMotionValueEvent(opacity, "change", (latest) => {
    if (latest <= 0.01) {
      setIsGone(true);
    } else {
      setIsGone(false);
    }
  });

  /* Content inside the overlay fades earlier so it doesn't linger */
  const innerOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const innerY       = useTransform(scrollYProgress, [0, 0.45], [0, -30]);

  return (
    <>
      {/* ── 100 vh spacer ─────────────────────────────────────────
          This is what the user scrolls through to dismiss the overlay.
          It is invisible — the fixed overlay sits on top of it.
          ─────────────────────────────────────────────────────────── */}
      <div
        ref={spacerRef}
        style={{ height: "100vh", position: "relative", zIndex: 0 }}
        aria-hidden="true"
      />

      {/* ── Fixed overlay ─────────────────────────────────────────── */}
      {!isGone && (
        <motion.div
          aria-hidden="true"
          style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          backgroundColor: "#f5f3ee",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          scale,
          opacity,
          borderRadius,
          transformOrigin: "center center",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* Subtle background data lines */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              "repeating-linear-gradient(90deg, #101c2c 0px, #101c2c 1px, transparent 1px, transparent 80px), " +
              "repeating-linear-gradient(0deg, #101c2c 0px, #101c2c 1px, transparent 1px, transparent 80px)",
          }}
        />

        {/* Content wrapper — fades out faster than overlay itself */}
        <motion.div
          style={{ opacity: innerOpacity, y: innerY }}
          className="relative z-10 flex flex-col items-center gap-5"
        >
          {/* Logo mark */}
          <motion.div
            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-ink font-display text-2xl text-paper"
            initial={{ scale: 0.6, opacity: 0, rotate: -15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            L
            <span className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full bg-teal border-[2.5px] border-paper" />
          </motion.div>

          {/* Brand name */}
          <motion.p
            className="font-display text-[2rem] tracking-tight text-ink"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Lumetrics<span className="text-teal">.</span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink-soft"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            Biomedical Statistics CRO
          </motion.p>

          {/* Divider line */}
          <motion.div
            className="h-px w-12 bg-teal/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          />

          {/* Scroll hint */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.4 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/40">
              scroll to explore
            </span>
            {/* Animated scroll caret */}
            <motion.div
              className="flex flex-col items-center gap-1"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            >
              <div className="h-5 w-px bg-teal/50" />
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRight: "1.5px solid",
                  borderBottom: "1.5px solid",
                  borderColor: "var(--color-teal)",
                  transform: "rotate(45deg)",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Corner accent — top right */}
        <motion.div
          style={{
            position: "absolute",
            top: 32,
            right: 40,
            opacity: 0.25,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-mono text-[10px] uppercase tracking-widest text-ink-soft"
        >
          Est. 2013 · Cambridge, MA
        </motion.div>

        {/* Animated stat counters — subtle data flavour */}
        <motion.div
          style={{ position: "absolute", bottom: 40, left: "50%", x: "-50%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center gap-10"
        >
          {[
            { val: "118+", label: "trials" },
            { val: "27",   label: "submissions" },
            { val: "0",    label: "missed locks" },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-mono text-xl text-teal tracking-tight">{val}</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/40">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
      )}
    </>
  );
}
