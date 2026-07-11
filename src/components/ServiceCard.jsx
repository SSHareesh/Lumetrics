import { Link } from "react-router-dom";
import { ArrowRight, LineChart, Terminal, Database, Users, FileCheck2, PenLine } from "lucide-react";
import Reveal from "./Reveal";

const iconMap = { LineChart, Terminal, Database, Users, FileCheck2, PenLine };

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon];
  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <Link
        to={`/services/${service.slug}`}
        className="group relative flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-surface p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_28px_60px_-24px_rgba(16,28,44,0.35)]"
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-tint text-indigo transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
              <Icon size={20} />
            </span>
            <span className="font-mono text-xs text-ink-soft/50">0{index + 1}</span>
          </div>
          <h3 className="mt-6 font-display text-xl text-ink tracking-tight">{service.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{service.short}</p>
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-teal">
          Learn more
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </Reveal>
  );
}
