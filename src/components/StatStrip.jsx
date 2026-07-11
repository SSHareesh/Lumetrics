import Reveal from "./Reveal";

export default function StatStrip({ stats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-2xl overflow-hidden border border-ink/10">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.06} className="h-full">
          <div className="h-full bg-surface px-6 py-8">
            <p className="font-mono text-3xl md:text-4xl text-teal tracking-tight">
              {s.value}
              <span className="text-lg align-top ml-0.5">{s.suffix}</span>
            </p>
            <p className="mt-2 text-xs uppercase tracking-wide text-ink-soft leading-snug">{s.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
