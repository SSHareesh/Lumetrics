import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LineChart, Terminal, Database, Users, FileCheck2, PenLine } from "lucide-react";
import { services } from "../data/nav";
import ServiceIllustration from "./ServiceIllustration";
import Button from "./Button";

const iconMap = { LineChart, Terminal, Database, Users, FileCheck2, PenLine };
const tones = ["teal", "indigo", "amber"];

/* ─── Design tokens (matching site palette) ─── */
const tintBg = {
  teal:   "bg-teal-tint",
  indigo: "bg-indigo-tint",
  amber:  "bg-amber-tint",
};
const accentText = {
  teal:   "text-teal",
  indigo: "text-indigo",
  amber:  "text-amber",
};
const accentBorder = {
  teal:   "border-teal/20",
  indigo: "border-indigo/20",
  amber:  "border-amber/30",
};

/* ─── Intro card ─── */
function IntroCard() {
  return (
    <div className="flex h-full w-[86vw] sm:w-[480px] shrink-0 flex-col justify-between rounded-3xl border border-ink/10 bg-ink text-paper p-9 sm:p-11">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-tint flex items-center gap-2">
          <span className="inline-block h-px w-6 bg-teal-tint" /> What we do
        </p>
        <h3 className="mt-6 font-display text-[2.6rem] sm:text-5xl leading-[1.06] tracking-tight">
          Six&nbsp;disciplines.<br />One&nbsp;team.
        </h3>
        <p className="mt-6 text-paper/65 leading-relaxed max-w-xs text-[0.95rem]">
          Each service runs independently or as one accountable engagement — staffed by
          the same statisticians from consultation through submission.
        </p>
      </div>
      <div className="mt-10 space-y-3">
        <div className="h-px w-full bg-paper/10" />
        <p className="text-paper/40 font-mono text-[0.7rem] uppercase tracking-[0.18em]">
          Scroll to explore →
        </p>
        <div className="mt-6">
          <Button to="/services" variant="inverse" icon={false} className="hover:bg-yellow hover:text-white">
            View all services
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─── Per-service editorial panel ─── */
/*
  Each service gets a "panel" of 2 independent containers:
    • Image card  — illustration fills the card
    • Info card   — title, short, bullet highlights, CTA link

  Layout pattern alternates across 3 variants for visual rhythm:
    0 → tall image card (row 1) + narrower info card below  [column layout]
    1 → info card on top + image card below (taller)         [column layout]
    2 → both side by side in a single row container          [row layout]
  The overall panel is always a fixed height so the track stays uniform.
*/

const highlights = {
  "biostatistics":              ["SAP authorship", "Sample size & power", "Adaptive design simulation"],
  "statistical-programming":    ["SDTM / ADaM datasets", "Double-programming QC", "SAS & R capable"],
  "clinical-data-management":   ["eCRF & edit-check design", "Real-time query aging", "Database lock prep"],
  "statistical-consulting":     ["FDA meeting prep", "Estimand strategy", "Independent SAP review"],
  "regulatory-submission-support": ["ISS / ISE construction", "eCTD Module 5 packaging", "IR fast turnaround"],
  "medical-writing":            ["Protocol authoring", "ICH E3 CSRs", "Manuscript & abstract support"],
};

const serviceImages = {
  "biostatistics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  "statistical-programming": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
  "clinical-data-management": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
  "statistical-consulting": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
  "regulatory-submission-support": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
  "medical-writing": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
};

function ImageCard({ service, tone, className = "" }) {
  return (
    <motion.div
      className={`overflow-hidden rounded-3xl ${tintBg[tone]} ${accentBorder[tone]} border transition-colors duration-300 ${className}`}
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{
        boxShadow: "0 2px 12px 0 rgba(16,28,44,0.07)",
      }}
      whileInView={undefined}
    >
      <img
        src={serviceImages[service.slug]}
        alt={service.title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
}

function InfoCard({ service, index, tone, className = "" }) {
  const bullets = highlights[service.slug] || [];
  const isOdd = index % 2 === 0;

  return (
    <motion.div
      className={`flex flex-col justify-between rounded-3xl border p-5 sm:p-6 ${className} ${
        isOdd
          ? "bg-paper-dim border-ink/10 text-ink shadow-[0_2px_12px_0_rgba(16,28,44,0.05)]"
          : "bg-ink border-white/10 text-paper shadow-[0_8px_30px_-12px_rgba(0,0,0,0.3)]"
      }`}
      initial={{ scale: 1 }}
      whileHover={{ y: -5, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
    >
      {/* Header row */}
      <div className="min-h-0 overflow-hidden">
        <div className="flex justify-end">
          <span
            className={`font-mono text-[0.65rem] ${
              isOdd ? "text-ink-soft/40" : "text-paper/40"
            }`}
          >
            0{index + 1}
          </span>
        </div>

        <h3 className={`mt-3 font-display text-[1.1rem] sm:text-[1.2rem] leading-snug tracking-tight ${
          isOdd ? "text-ink" : "text-paper"
        }`}>
          {service.title}
        </h3>
        <p className={`mt-1.5 text-[0.82rem] leading-relaxed line-clamp-3 ${
          isOdd ? "text-ink-soft" : "text-paper/70"
        }`}>
          {service.short}
        </p>

        {/* Bullet highlights */}
        {bullets.length > 0 && (
          <ul className="mt-3 space-y-1">
            {bullets.map((b) => (
              <li
                key={b}
                className={`flex items-center gap-2 text-[0.76rem] ${
                  isOdd ? "text-ink-soft" : "text-paper/75"
                }`}
              >
                <span
                  className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                    isOdd ? accentText[tone] + " bg-current" : "bg-paper"
                  }`}
                />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer CTA */}
      <Button
        to={`/services/${service.slug}`}
        variant={isOdd ? "primary" : "inverse"}
        className="mt-4 self-start"
      >
        Learn more
      </Button>
    </motion.div>
  );
}

/*
  Two-size card system — descriptions get more room, images stay compact.
  Every info card is the same size. Every image card is the same size.
  Alternating layout (image-top / info-top) for visual rhythm.

  Desktop fixed sizes (panel height = 460px, gap = 20px):
    Panel width  : 300px   (lg:w-[300px])
    Info card    : 300px × 272px  (lg:h-[272px]) ← taller for content
    Image card   : 300px × 168px  (lg:h-[168px]) ← compact illustration
    Total        : 272 + 20 + 168 = 460px ✓
*/

const PANEL_W_DESKTOP  = "lg:w-[300px]";
const INFO_CARD_H      = "lg:h-[272px]";
const IMAGE_CARD_H     = "lg:h-[168px]";
const PANEL_W_MOBILE   = "w-[82vw] sm:w-[74vw]";

function ServicePanel({ service, index }) {
  const tone     = tones[index % tones.length];
  const imageTop = index % 2 === 0; // alternate image-top vs info-top

  return (
    <div className={`h-full flex flex-col gap-5 shrink-0 ${PANEL_W_MOBILE} ${PANEL_W_DESKTOP}`}>
      {imageTop ? (
        <>
          {/* image on top (shorter), info below (taller) */}
          <ImageCard service={service} tone={tone}
            className={`shrink-0 ${IMAGE_CARD_H} flex-[0_0_38%] lg:flex-none`} />
          <InfoCard  service={service} index={index} tone={tone}
            className={`shrink-0 ${INFO_CARD_H} flex-[0_0_62%] lg:flex-none`} />
        </>
      ) : (
        <>
          {/* info on top (taller), image below (shorter) */}
          <InfoCard  service={service} index={index} tone={tone}
            className={`shrink-0 ${INFO_CARD_H} flex-[0_0_62%] lg:flex-none`} />
          <ImageCard service={service} tone={tone}
            className={`shrink-0 ${IMAGE_CARD_H} flex-[0_0_38%] lg:flex-none`} />
        </>
      )}
    </div>
  );
}

/* ─── Main export ─── */
export default function ServicesHorizontalScroll() {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    function measure() {
      if (trackRef.current) {
        const trackWidth    = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setDistance(Math.max(trackWidth - viewportWidth, 0));
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <>
      {/* ── Desktop / tablet-landscape: pinned scroll-driven horizontal track ── */}
      <section
        ref={sectionRef}
        className="relative hidden lg:block"
        style={{ height: `calc(100vh + ${distance}px)` }}
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-paper-dim/40">
          <div className="container-page mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-teal" /> Scroll to explore
            </p>
          </div>
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-stretch gap-6 pl-6 md:pl-12 pr-[10vw]"
          >
            {/* Intro card — stays oversized by design */}
            <div className="h-[460px] shrink-0">
              <IntroCard />
            </div>

            {/* Service panels — all uniform */}
            {services.map((s, i) => (
              <div key={s.slug} className="h-[460px] shrink-0">
                <ServicePanel service={s} index={i} />
              </div>
            ))}

            {/* End spacer for padding right */}
            {/* <div className="w-12 md:w-24 lg:w-[10vw] shrink-0 pointer-events-none" /> */}
          </motion.div>
        </div>
      </section>

      {/* ── Mobile / small tablet: native horizontal swipe, no scroll-jacking ── */}
      <section className="relative bg-paper-dim/40 py-20 lg:hidden">
        <div className="container-page mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal flex items-center gap-2">
            <span className="inline-block h-px w-6 bg-teal" /> What we do
          </p>
          <h2 className="mt-4 font-display text-3xl leading-[1.1] tracking-tight text-ink">
            Services
          </h2>
        </div>
        <div className="flex gap-5 overflow-x-auto px-6 pb-5 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Intro card */}
          <div className="snap-start h-[480px] shrink-0">
            <IntroCard />
          </div>

          {/* Service panels — two-size system on mobile too */}
          {services.map((s, i) => {
            const tone     = tones[i % tones.length];
            const imageTop = i % 2 === 0;
            return (
              <div key={s.slug} className="snap-start h-[480px] shrink-0 w-[82vw] sm:w-[74vw]">
                <div className="h-full flex flex-col gap-4">
                  {imageTop ? (
                    <>
                      {/* image shorter (38%), info taller (62%) */}
                      <ImageCard service={s} tone={tone} className="flex-[0_0_36%]" />
                      <InfoCard  service={s} index={i} tone={tone} className="flex-[0_0_64%]" />
                    </>
                  ) : (
                    <>
                      {/* info taller (62%), image shorter (38%) */}
                      <InfoCard  service={s} index={i} tone={tone} className="flex-[0_0_64%]" />
                      <ImageCard service={s} tone={tone} className="flex-[0_0_36%]" />
                    </>
                  )}
                </div>
              </div>
            );
          })}

          {/* End spacer for padding right on mobile */}
          <div className="w-6 shrink-0 snap-end pointer-events-none" />
        </div>
      </section>
    </>
  );
}
