import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

/**
 * Get display initials for the collapsed cards
 */
const getInitials = (name) => {
  if (name.startsWith("VP")) return "VP";
  if (name.includes("Director")) return "DIR";
  if (name.includes("Head")) return "HED";
  if (name.includes("Chief")) return "CMO";
  return name.split(" ").map((w) => w[0]).join("").substring(0, 3).toUpperCase();
};

export default function Testimonials({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full py-8">
      {/* ─────────────────────────────────────────────────────────────
          1. DESKTOP & TABLET VIEW (Expanding Accordion / Carousel)
          ───────────────────────────────────────────────────────────── */}
      <div className="hidden md:block relative w-full select-none">


        {/* Expanding Row Container */}
        <div className="flex gap-5 min-h-[420px] items-stretch justify-center w-full">
          {items.map((t, i) => {
            const isActive = i === activeIndex;
            const isDark = i % 2 === 0;

            return (
              <motion.div
                key={t.name}
                layout
                onHoverStart={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                tabIndex={0}
                className={`relative rounded-3xl border overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between p-8 ${
                  isActive
                    ? "flex-[60_0_0%] shadow-[0_20px_50px_-12px_rgba(16,28,44,0.12)]"
                    : "flex-[10_0_0%] items-center justify-start shadow-[0_8px_24px_-12px_rgba(16,28,44,0.05)] hover:bg-surface/80"
                } ${
                  isDark
                    ? "bg-ink border-ink/20 text-paper"
                    : "bg-surface border-ink/10 text-ink"
                }`}
                style={{
                  outline: "none",
                }}
              >
                {/* ─── EXPANDED CONTENT ─── */}
                <div
                  className="flex flex-col justify-between h-full w-full"
                  style={{
                    display: isActive ? "flex" : "none",
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.4s ease-in-out 0.15s",
                  }}
                >
                  <div>
                    <Quote
                      size={32}
                      className={isDark ? "text-teal mb-6" : "text-amber mb-6"}
                      strokeWidth={1.5}
                    />
                    <blockquote className="font-display text-lg md:text-xl xl:text-2xl leading-relaxed">
                      "{t.quote}"
                    </blockquote>
                  </div>
                  <figcaption className={`mt-8 pt-6 border-t ${isDark ? "border-paper/10" : "border-ink/10"} text-sm`}>
                    <span className="block font-medium text-base">{t.name}</span>
                    <span className={`block text-xs mt-0.5 ${isDark ? "text-paper/60" : "text-ink-soft"}`}>
                      {t.org}
                    </span>
                  </figcaption>
                </div>

                {/* ─── COLLAPSED CONTENT ─── */}
                <div
                  className="flex flex-col items-center justify-between h-full w-full py-4"
                  style={{
                    display: !isActive ? "flex" : "none",
                    opacity: !isActive ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  {/* Initials Circle Indicator */}
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-xs font-bold ${
                      isDark
                        ? "bg-paper/10 text-paper"
                        : "bg-ink/5 text-ink"
                    }`}
                  >
                    {getInitials(t.name)}
                  </div>

                  {/* Vertical Line */}
                  <div
                    className={`flex-grow my-6 w-px ${
                      isDark ? "bg-paper/10" : "bg-ink/10"
                    }`}
                  />

                  {/* Vertical Rotated Text */}
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.25em] whitespace-nowrap ${
                      isDark ? "text-paper/40" : "text-ink/40"
                    }`}
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {t.org.split(" ").slice(0, 2).join(" ")}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MOBILE VIEW (Swipeable Testimonial Slider)
          ───────────────────────────────────────────────────────────── */}
      <div className="block md:hidden relative w-full px-4 overflow-hidden">
        <div className="flex items-center justify-center gap-4 mb-4">
          {/* Simple Swipe Indicator or Counter */}
          <span className="font-mono text-xs text-ink-soft">
            {activeIndex + 1} / {items.length}
          </span>
        </div>

        {/* Mobile Animated Card Container */}
        <div className="relative min-h-[320px] w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className={`w-full rounded-3xl border p-8 flex flex-col justify-between min-h-[320px] shadow-md ${
                activeIndex % 2 === 0
                  ? "bg-ink border-ink/20 text-paper"
                  : "bg-surface border-ink/10 text-ink"
              }`}
            >
              <div>
                <Quote
                  size={26}
                  className={activeIndex % 2 === 0 ? "text-teal mb-4" : "text-amber mb-4"}
                  strokeWidth={1.5}
                />
                <blockquote className="font-display text-base leading-relaxed">
                  "{items[activeIndex].quote}"
                </blockquote>
              </div>
              <figcaption className={`mt-6 pt-4 border-t ${activeIndex % 2 === 0 ? "border-paper/10" : "border-ink/10"} text-xs`}>
                <span className="block font-medium text-sm">{items[activeIndex].name}</span>
                <span className={`block mt-0.5 ${activeIndex % 2 === 0 ? "text-paper/60" : "text-ink-soft"}`}>
                  {items[activeIndex].org}
                </span>
              </figcaption>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Dots Indicators (Universal) */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === activeIndex
                ? "w-6 bg-teal"
                : "w-2 bg-ink/20 hover:bg-ink/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
