import Reveal from "./Reveal";
import Button from "./Button";
import ScatterField from "./ScatterField";

export default function ContactCTA({
  eyebrow = "Start a conversation",
  title = "Bring us the protocol before it's final.",
  description = "The earliest design decisions are the hardest ones to undo. Talk to a senior biostatistician before your next milestone, not after.",
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper py-24 grain">
      <div className="absolute inset-0 text-teal-tint/40">
        <ScatterField className="absolute -right-24 top-1/2 -translate-y-1/2 w-[560px] h-[440px] hidden lg:block" opacity={0.5} />
      </div>
      <div className="container-page relative">
        <div className="max-w-xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-tint mb-4 flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-teal-tint" /> {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.1] tracking-tight">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-paper/65 text-[1.05rem] leading-relaxed">{description}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/contact" variant="inverse">Talk to a statistician</Button>
              <Button to="/services" variant="outline-light" icon={false}>Browse services</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
