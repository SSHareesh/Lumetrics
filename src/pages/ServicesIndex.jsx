import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import ContactCTA from "../components/ContactCTA";
import { services } from "../data/nav";

export default function ServicesIndex() {
  return (
    <>
      <section className="relative bg-ink text-paper pt-40 pb-24 grain">
        <div className="container-page">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-tint flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-teal-tint" /> Services
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.08] tracking-tight">
              Six disciplines. One accountable team.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-paper/70 text-lg leading-relaxed">
              Engage one service or all six — every engagement is staffed by the same
              people from consultation through submission.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Full catalog"
            title="Find the service your study needs right now"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
