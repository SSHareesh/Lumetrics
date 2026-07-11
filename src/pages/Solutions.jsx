import { FlaskConical, HeartPulse, Brain, Dna, Activity, Pill } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ContactCTA from "../components/ContactCTA";

const byPhase = [
  { phase: "Phase I", detail: "Dose-escalation designs, PK/PD modeling, and safety monitoring for first-in-human studies." },
  { phase: "Phase II", detail: "Adaptive and Bayesian designs for proof-of-concept studies where sample size is precious." },
  { phase: "Phase III", detail: "Confirmatory trial design, interim analysis, and DSMB-ready reporting at pivotal scale." },
  { phase: "Phase IV", detail: "Post-marketing safety analysis, registry data, and real-world evidence support." },
];

const byIndication = [
  { icon: FlaskConical, name: "Oncology", detail: "Tumor response endpoints, survival analysis, and complex censoring." },
  { icon: Dna, name: "Rare Disease", detail: "Small-N designs, natural history comparisons, and external control arms." },
  { icon: HeartPulse, name: "Cardiometabolic", detail: "Composite endpoints and long-duration event-driven trials." },
  { icon: Brain, name: "CNS", detail: "Rating-scale analysis and handling of high placebo response." },
  { icon: Activity, name: "Immunology", detail: "Biomarker-stratified designs and longitudinal repeated measures." },
  { icon: Pill, name: "General Medicine", detail: "Standard confirmatory designs run efficiently, without over-engineering." },
];

export default function Solutions() {
  return (
    <>
      <section className="relative bg-ink text-paper pt-40 pb-24 grain">
        <div className="container-page">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-tint flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-teal-tint" /> Solutions
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.08] tracking-tight">
              Built around your phase and indication, not a one-size template.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-paper/70 text-lg leading-relaxed">
              A Phase I dose-escalation study and a Phase III cardiovascular outcomes
              trial need different statistical instincts. We staff accordingly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-28">
        <div className="container-page">
          <SectionHeading eyebrow="By trial phase" title="Support at every stage of development" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {byPhase.map((p, i) => (
              <Reveal key={p.phase} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-ink/10 p-7">
                  <p className="font-mono text-xs text-teal uppercase tracking-widest">{p.phase}</p>
                  <p className="mt-3 text-ink-soft leading-relaxed text-sm">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-dim/40 py-28">
        <div className="container-page">
          <SectionHeading eyebrow="By indication" title="Therapeutic areas we work in most" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {byIndication.map((item, i) => (
              <Reveal key={item.name} delay={(i % 3) * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl bg-surface border border-ink/10 p-6 h-full">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-tint text-teal">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-ink">{item.name}</h3>
                    <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow="Not sure where you fit"
        title="Tell us about the study, we'll tell you what it needs."
        description="Most first conversations are just a walk through the protocol — no commitment, just a second set of eyes."
      />
    </>
  );
}
