import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Plus, Minus, Check, LineChart, Terminal, Database, Users, FileCheck2, PenLine } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import WorkflowSteps from "../components/WorkflowSteps";
import ContactCTA from "../components/ContactCTA";
import ScatterField from "../components/ScatterField";
import { services } from "../data/nav";
import { serviceDetails } from "../data/serviceDetails";

const iconMap = { LineChart, Terminal, Database, Users, FileCheck2, PenLine };

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <Reveal delay={index * 0.05}>
      <div className="border-b border-ink/10 py-5">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-6 text-left focus-ring"
        >
          <span className="font-display text-lg text-ink">{item.q}</span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink">
            {open ? <Minus size={14} /> : <Plus size={14} />}
          </span>
        </button>
        {open && (
          <p className="mt-3 text-ink-soft leading-relaxed max-w-2xl">{item.a}</p>
        )}
      </div>
    </Reveal>
  );
}

export default function ServicePage() {
  const { slug } = useParams();
  const meta = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];

  if (!meta || !detail) {
    return <Navigate to="/services" replace />;
  }

  const Icon = iconMap[meta.icon];
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative bg-ink text-paper pt-40 pb-24 grain overflow-hidden">
        <div className="absolute inset-0 text-teal/40">
          <ScatterField className="absolute right-[-15%] top-1/2 h-[560px] w-[720px] -translate-y-1/2 opacity-60" />
        </div>
        <div className="container-page relative">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-teal-tint">
                <Icon size={20} />
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-tint">{detail.eyebrow}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-4xl sm:text-5xl lg:text-[3.3rem] leading-[1.08] tracking-tight">
              {detail.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-lg text-paper/70 leading-relaxed">{detail.tagline}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Overview" title="What this service covers" />
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-lg text-ink-soft leading-relaxed">{detail.overview}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim/40 py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Key features" title="What's included" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {detail.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <div className="rounded-2xl bg-surface border border-ink/10 p-6 h-full">
                  <h3 className="font-display text-lg text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{f.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Benefits" title="Why sponsors choose this" />
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-4">
                {detail.benefits.map((b, i) => (
                  <Reveal key={b} delay={i * 0.06}>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-tint text-teal-deep">
                        <Check size={12} />
                      </span>
                      <span className="text-ink-soft leading-relaxed">{b}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper py-24 grain">
        <div className="container-page">
          <SectionHeading eyebrow="Workflow" title="How the engagement runs" light />
          <div className="mt-16">
            <WorkflowSteps steps={detail.workflow} dark />
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="FAQ" title="Common questions" />
            </div>
            <div className="lg:col-span-7">
              {detail.faqs.map((f, i) => (
                <FaqItem key={f.q} item={f} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim/40 py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Related" title="Other services sponsors pair this with" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {others.map((s) => {
              const OIcon = iconMap[s.icon];
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group rounded-2xl border border-ink/10 bg-surface p-6 hover:border-teal/40 transition-colors duration-300"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-tint text-indigo group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                    <OIcon size={16} />
                  </span>
                  <h3 className="mt-4 font-display text-base text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{s.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA
        title={`Ready to talk about ${detail.title.toLowerCase()}?`}
        description="Bring your protocol or your problem — most engagements start with a working conversation, not a proposal."
      />
    </>
  );
}
