import { Quote } from "lucide-react";
import Reveal from "./Reveal";

export default function Testimonials({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.1} className="h-full">
          <figure className="h-full flex flex-col justify-between rounded-3xl border border-ink/10 bg-surface p-7">
            <Quote size={26} className="text-amber/70" strokeWidth={1.5} />
            <blockquote className="mt-5 font-display text-[1.05rem] leading-snug text-ink">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-ink/10 text-sm">
              <span className="block font-medium text-ink">{t.name}</span>
              <span className="block text-ink-soft mt-0.5">{t.org}</span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
