import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ScatterField from "../components/ScatterField";
import ServicesHorizontalScroll from "../components/ServicesHorizontalScroll";
import StrengthCard from "../components/StrengthCard";
// import WorkflowSteps from "../components/WorkflowSteps";
import Testimonials from "../components/Testimonials";
import StatStrip from "../components/StatStrip";
import ContactCTA from "../components/ContactCTA";
import { stats, strengths, workflow, testimonials } from "../data/home";

export default function Home() {
  return (
    <>
      {/* HERO — fixed background, moving foreground */}
      <section
        className="relative flex min-h-screen items-center overflow-hidden bg-fixed bg-cover bg-center text-paper"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 90% 60% at 20% 0%, #16273a 0%, #101c2c 55%), radial-gradient(ellipse 60% 50% at 90% 100%, #0c3f37 0%, transparent 60%)",
        }}
      >
        <div className="absolute inset-0 text-teal/50">
          <ScatterField className="absolute right-[-10%] top-1/2 h-[640px] w-[820px] -translate-y-1/2 opacity-70" />
        </div>
        <div className="absolute inset-0 grain" />

        <div className="container-page relative pt-32 pb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-teal-tint flex items-center gap-2"
          >
            <span className="inline-block h-px w-8 bg-teal-tint" />
            Biomedical Statistics CRO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-3xl font-display text-[2.6rem] leading-[1.06] tracking-tight sm:text-6xl lg:text-[4.6rem]"
          >
            Statistics that hold up<br className="hidden sm:block" />
            under regulatory review.
          </motion.h1>

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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24"
          >
            <StatStrip stats={stats.map((s) => ({ ...s }))} />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/40"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="relative bg-paper py-28">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Who we are"
                title="A CRO built by statisticians, still run by statisticians."
                description="Lumetrics was founded in 2013 by three biostatisticians who kept seeing the same problem elsewhere: the person who designed a trial's analysis was rarely the person defending it in front of a review team. We built the company around fixing that."
              />
              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <span className="rounded-full border border-ink/15 px-4 py-2 text-xs font-mono uppercase tracking-wide text-white bg-ink">Est. 2013</span>
                  <span className="rounded-full border border-ink/15 px-4 py-2 text-xs font-mono uppercase tracking-wide text-white bg-ink">Cambridge, MA</span>
                  <span className="rounded-full border border-ink/15 px-4 py-2 text-xs font-mono uppercase tracking-wide text-white bg-ink">62 staff biostatisticians</span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border-2 border-teal border-ink bg-indigo-tint p-8 h-full">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-indigo mb-4">Mission</p>
                  <p className="font-display text-xl leading-snug text-ink">
                    Give every sponsor the statistical rigor of an in-house biometrics
                    department, without the overhead of building one.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="rounded-3xl border-2 border-indigo bg-teal-tint p-8 h-full">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal-deep mb-4">Vision</p>
                  <p className="font-display text-xl leading-snug text-ink">
                    A future where no trial's conclusions are questioned because of how,
                    rather than what, the data showed.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.26} className="sm:col-span-2">
                <div className="rounded-3xl border border-ink/10 p-8">
                  <p className="text-ink-soft leading-relaxed">
                    Today we support Phase I through Phase IV programs across oncology,
                    rare disease, cardiometabolic, immunology, and CNS indications — for
                    biotechs running their first IND and specialty pharma companies
                    managing a full submission portfolio. What hasn't changed since 2013
                    is the model: a named statistician, accountable end to end.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesHorizontalScroll />

      {/* WHY CHOOSE US */}
      <section className="relative bg-ink text-paper py-28 grain">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Lumetrics"
            title="What sponsors notice after the first study."
            description="Not a list of certifications — the operational habits that actually change how a trial goes."
            light
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((item, i) => (
              <StrengthCard key={item.title} item={item} index={i} dark />
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW
      <section className="relative bg-ink text-paper py-28 grain">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we work"
            title="A five-stage process, the same for every study."
            description="No two protocols are alike, but the sequence that gets you from question to submission rarely changes."
            light
          />
          <div className="mt-16">
            <WorkflowSteps steps={workflow} dark />
          </div>
        </div>
      </section> */}

      {/* TESTIMONIALS */}
      <section className="relative bg-paper py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="From sponsors"
            title="What it's like to work with a named statistician."
            align="left"
          />
          <div className="mt-14">
            <Testimonials items={testimonials} />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
