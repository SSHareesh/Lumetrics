import { PlayCircle, BookOpen, ScrollText, FlaskConical } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ContactCTA from "../components/ContactCTA";

const caseStudies = [
  {
    title: "Cutting query resolution time in half for a Series C oncology sponsor",
    tag: "Data Management",
    detail: "A redesigned edit-check strategy dropped average query age from 19 days to 8 across a 340-patient study.",
  },
  {
    title: "Rescuing a submission's define.xml after a failed Pinnacle 21 run",
    tag: "Regulatory Submission",
    detail: "A four-week remediation engagement brought a specialty pharma's Module 5 package to clean conformance.",
  },
  {
    title: "Simulating a response-adaptive design for a rare disease Phase II",
    tag: "Biostatistics",
    detail: "Operating-characteristic simulations gave the sponsor confidence to proceed with an N of 34.",
  },
];

const notes = [
  { title: "What ICH E9(R1) actually changes about your estimand", tag: "Regulatory" },
  { title: "Reading a DSMB charter like a statistician, not a lawyer", tag: "Governance" },
  { title: "Why your SDTM mapping should start before the eCRF is final", tag: "Programming" },
];

const glossary = [
  { term: "SAP", def: "Statistical Analysis Plan — the pre-specified document defining how trial data will be analyzed." },
  { term: "SDTM", def: "Study Data Tabulation Model — the CDISC standard for organizing raw clinical trial data." },
  { term: "ADaM", def: "Analysis Data Model — CDISC-standard datasets built specifically to support statistical analysis." },
  { term: "TLF", def: "Tables, Listings, and Figures — the standard output package summarizing trial results." },
  { term: "DSMB", def: "Data Safety Monitoring Board — an independent group reviewing accumulating trial safety data." },
  { term: "eCTD", def: "Electronic Common Technical Document — the standard format for regulatory submissions." },
];

const webinars = [
  { title: "Designing for ICH E9(R1): a working session", length: "42 min" },
  { title: "Inside a database lock: what actually happens in the final week", length: "35 min" },
  { title: "Adaptive designs, explained without the jargon", length: "51 min" },
];

export default function Resources() {
  return (
    <>
      <section className="relative bg-ink text-paper pt-40 pb-24 grain">
        <div className="container-page">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-tint flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-teal-tint" /> Resources
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.08] tracking-tight">
              Notes from the desk, not the marketing team.
            </h1>
          </Reveal>
        </div>
      </section>

      <section id="case-studies" className="bg-paper py-28 scroll-mt-28">
        <div className="container-page">
          <SectionHeading eyebrow="Case studies" title="Real trials, real analysis problems" icon={FlaskConical} />
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-ink/10 p-7 flex flex-col">
                  <span className="font-mono text-xs uppercase tracking-wide text-teal">{c.tag}</span>
                  <h3 className="mt-3 font-display text-lg text-ink leading-snug">{c.title}</h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">{c.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="notes" className="bg-paper-dim/40 py-28 scroll-mt-28">
        <div className="container-page">
          <SectionHeading eyebrow="Regulatory notes" title="Short reads on statistical guidance" />
          <div className="mt-14 divide-y divide-ink/10 border-t border-b border-ink/10">
            {notes.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.06}>
                <a href="#" className="flex items-center justify-between gap-6 py-6 group">
                  <span className="flex items-center gap-4">
                    <ScrollText size={18} className="text-teal shrink-0" />
                    <span className="font-display text-lg text-ink group-hover:text-teal transition-colors">{n.title}</span>
                  </span>
                  <span className="font-mono text-xs text-ink-soft uppercase tracking-wide shrink-0">{n.tag}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="glossary" className="bg-paper py-28 scroll-mt-28">
        <div className="container-page">
          <SectionHeading eyebrow="Glossary" title="Plain-language definitions" icon={BookOpen} />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {glossary.map((g, i) => (
              <Reveal key={g.term} delay={(i % 3) * 0.06}>
                <div className="rounded-xl bg-teal-tint/60 p-5">
                  <p className="font-mono text-sm text-teal-deep">{g.term}</p>
                  <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{g.def}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="webinars" className="bg-paper-dim/40 py-28 scroll-mt-28">
        <div className="container-page">
          <SectionHeading eyebrow="Webinars" title="Recorded sessions with our team" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {webinars.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-surface border border-ink/10 p-6 flex flex-col items-start gap-4">
                  <PlayCircle size={28} className="text-teal" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-base text-ink leading-snug">{w.title}</h3>
                    <p className="mt-1 font-mono text-xs text-ink-soft">{w.length}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
