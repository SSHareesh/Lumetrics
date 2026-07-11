import { Award, Users2, Building2, Microscope } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ContactCTA from "../components/ContactCTA";
import StatStrip from "../components/StatStrip";
import { stats } from "../data/home";

const timeline = [
  { year: "2013", event: "Founded in Cambridge by three biostatisticians from academic and CRO backgrounds." },
  { year: "2016", event: "First full-service oncology program, from protocol design through NDA submission." },
  { year: "2019", event: "Built an in-house CDISC programming team to keep SDTM/ADaM work under one roof." },
  { year: "2022", event: "Opened a data management group to close the loop from eCRF design to lock." },
  { year: "2025", event: "62 staff biostatisticians supporting sponsors across four continents." },
];

const values = [
  { icon: Users2, title: "Named accountability", detail: "One statistician owns your study. If something's wrong, you know exactly who to call." },
  { icon: Award, title: "Rigor over speed", detail: "We'll tell you when a timeline is unrealistic for the analysis you're asking for." },
  { icon: Microscope, title: "Evidence, plainly stated", detail: "Our reports say what the data shows, not what a sponsor might want to hear." },
  { icon: Building2, title: "Built to be audited", detail: "Every deliverable is documented as if an inspector will read it, because eventually one might." },
];

export default function About() {
  return (
    <>
      <section className="relative bg-ink text-paper pt-40 pb-24 grain overflow-hidden">
        <div className="container-page relative">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-tint flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-teal-tint" /> About Lumetrics
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight">
              Twelve years of one idea, applied consistently.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-paper/70 text-lg leading-relaxed">
              The statistician who designs your trial's analysis should be the one
              standing behind it — at the DSMB table, in an FDA meeting, and in the
              footnotes of the CSR.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-page">
          <StatStrip stats={stats} />
        </div>
      </section>

      <section className="bg-paper py-8 pb-28">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Timeline"
                title="How we got here"
                description="A short history, kept honest — no year skipped for the sake of the narrative."
              />
            </div>
            <div className="lg:col-span-8">
              <div className="relative pl-8 border-l border-ink/10">
                {timeline.map((t, i) => (
                  <Reveal key={t.year} delay={i * 0.08} className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[calc(2rem+4px)] top-1 h-2.5 w-2.5 rounded-full bg-teal" />
                    <p className="font-mono text-sm text-teal">{t.year}</p>
                    <p className="mt-1.5 text-ink-soft leading-relaxed max-w-xl">{t.event}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim/40 py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we operate"
            title="Values that show up in the deliverables, not just the deck."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex gap-5 rounded-2xl border border-ink/10 bg-surface p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-tint text-indigo">
                    <v.icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-ink tracking-tight">{v.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{v.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow="Meet the team"
        title="Want to know who'd be on your study?"
        description="We'll introduce you to the actual biostatistician and programmer who'd staff your program before you sign anything."
      />
    </>
  );
}
