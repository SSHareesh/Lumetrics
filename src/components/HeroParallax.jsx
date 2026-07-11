import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "./Button";
import ScatterField from "./ScatterField";
import StatStrip from "./StatStrip";
import MorphingBlob from "./MorphingBlob";
import FloatingParticles from "./FloatingParticles";
import GeometricAccents from "./GeometricAccents";
import { stats } from "../data/home";

/* ─────────────────────────────────────────────────────────────────────
 * HeroParallax
 *
 * Parallax system — two separate axes so they never conflict:
 *
 *   SCROLL (Y only): Framer Motion useScroll tracks the hero section.
 *     Positive y = element moves DOWN in the section = lags behind page
 *     scroll = appears FARTHER AWAY. Background layers get big values;
 *     content layers get tiny values.
 *
 *   MOUSE (X + Y): useMotionValue + useSpring produces a silky cursor
 *     effect. Each layer has a different multiplier for depth.
 *
 * These two transforms sit on NESTED divs so they compose without
 * overwriting each other.
 * ───────────────────────────────────────────────────────────────────── */
export default function HeroParallax() {
  const heroRef = useRef(null);

  /* ── Scroll-based parallax ─────────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* Background layers — dramatic lag = appears distant */
  const blobY      = useTransform(scrollYProgress, [0, 1], ["0%", "52%"]);
  const particleY  = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scatterY   = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  /* Content layers — subtle lag = slight depth */
  const headingY   = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const descY      = useTransform(scrollYProgress, [0, 1], ["0%",  "7%"]);
  const buttonsY   = useTransform(scrollYProgress, [0, 1], ["0%",  "5%"]);

  /* Fade-outs on exit */
  const bgOpacity      = useTransform(scrollYProgress, [0.55, 0.9], [1, 0.2]);
  const contentOpacity = useTransform(scrollYProgress, [0.55, 0.85], [1, 0]);

  /* Heading subtle scale on scroll */
  const headingScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.96]);

  /* ── Mouse-based parallax ──────────────────────────────── */
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  /* Spring-damped smooth mouse tracking */
  const mouseX = useSpring(rawMouseX, { stiffness: 50, damping: 18, mass: 0.8 });
  const mouseY = useSpring(rawMouseY, { stiffness: 50, damping: 18, mass: 0.8 });

  /* Each layer moves at a different rate — deeper = less mouse response */
  const blob1X = useTransform(mouseX, [-0.5, 0.5], [-22, 22]);
  const blob1Y = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);

  const part2X = useTransform(mouseX, [-0.5, 0.5], [16, -16]);
  const part2Y = useTransform(mouseY, [-0.5, 0.5], [9, -9]);

  const scat3X = useTransform(mouseX, [-0.5, 0.5], [28, -28]);
  const scat3Y = useTransform(mouseY, [-0.5, 0.5], [14, -14]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      rawMouseX.set((e.clientX - rect.left - rect.width  / 2) / rect.width);
      rawMouseY.set((e.clientY - rect.top  - rect.height / 2) / rect.height);
    };
    const handleMouseLeave = () => {
      rawMouseX.set(0);
      rawMouseY.set(0);
    };

    hero.addEventListener("mousemove",  handleMouseMove,  { passive: true });
    hero.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      hero.removeEventListener("mousemove",  handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [rawMouseX, rawMouseY]);

  /* ── Render ─────────────────────────────────────────────── */
  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden text-paper"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 90% 60% at 20% 0%, #16273a 0%, #101c2c 55%), " +
          "radial-gradient(ellipse 60% 50% at 90% 100%, #0c3f37 0%, transparent 60%)",
      }}
    >
      {/* ══════════════════════════════════════════════════════════
          LAYER 1 — Morphing blobs  (mouse outer, scroll inner)
          ═════════════════════════════════════════════════════════ */}
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          style={{ y: blobY, opacity: bgOpacity }}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.6, ease: "easeOut" }}
        >
          <MorphingBlob
            className="absolute -left-44 -top-48 h-[700px] w-[700px] bg-teal-deep/25 blur-[90px]"
            animIndex={1}
            delay="0s"
          />
          <MorphingBlob
            className="absolute -right-60 -bottom-24 h-[600px] w-[600px] bg-indigo/20 blur-[80px]"
            animIndex={2}
            delay="4s"
          />
          <MorphingBlob
            className="absolute left-[40%] top-[25%] h-[380px] w-[380px] -translate-x-1/2 bg-teal/[0.09] blur-[110px]"
            animIndex={3}
            delay="8s"
          />
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════
          LAYER 2 — Floating particles
          ═════════════════════════════════════════════════════════ */}
      <motion.div
        style={{ x: part2X, y: part2Y }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          style={{ y: particleY, opacity: bgOpacity }}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
        >
          <FloatingParticles count={38} />
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════
          LAYER 3 — ScatterField + geometric accents
          ═════════════════════════════════════════════════════════ */}
      <motion.div
        style={{ x: scat3X, y: scat3Y }}
        className="absolute inset-0 pointer-events-none text-teal/50"
        aria-hidden="true"
      >
        <motion.div
          style={{ y: scatterY }}
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.15 }}
        >
          <ScatterField
            className="absolute right-[-10%] top-1/2 h-[640px] w-[820px] -translate-y-1/2 opacity-70"
          />
          <GeometricAccents />
        </motion.div>
      </motion.div>

      {/* Grain */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* ══════════════════════════════════════════════════════════
          CONTENT  (Layers 4 – 6  +  StatStrip)
          ═════════════════════════════════════════════════════════ */}
      <div className="container-page relative pt-32 pb-24">

        {/* Eyebrow — entrance only */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-teal-tint flex items-center gap-2"
        >
          <span className="inline-block h-px w-8 bg-teal-tint" />
          Biomedical Statistics CRO
        </motion.p>

        {/* ── LAYER 4: Heading ───────────────────────────────────── */}
        <motion.div
          style={{ y: headingY, scale: headingScale, opacity: contentOpacity }}
          className="origin-top-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-3xl font-display text-[2.6rem] leading-[1.06] tracking-tight sm:text-6xl lg:text-[4.6rem]"
          >
            Statistics that hold up<br className="hidden sm:block" />
            under regulatory review.
          </motion.h1>
        </motion.div>

        {/* ── LAYER 5: Description ───────────────────────────────── */}
        <motion.div style={{ y: descY, opacity: contentOpacity }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70"
          >
            Lumetrics pairs sponsors with named biostatisticians — not account teams — for
            trial design, CDISC programming, data management, and submission-ready
            reporting. The same statistician who writes your SAP defends it at review.
          </motion.p>
        </motion.div>

        {/* ── LAYER 6: CTA Buttons ───────────────────────────────── */}
        <motion.div style={{ y: buttonsY, opacity: contentOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.44 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button to="/contact" variant="inverse">Talk to a statistician</Button>
            <Button to="/services" variant="outline-light" icon={false}>
              Explore services
            </Button>
          </motion.div>
        </motion.div>

        {/* StatStrip — no extra parallax */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24"
        >
          <StatStrip stats={stats.map((s) => ({ ...s }))} />
        </motion.div>
      </div>

      {/* Scroll caret */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity: contentOpacity }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
