import { UserCheck, ShieldCheck, GitBranch, Clock4 } from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const iconMap = { UserCheck, ShieldCheck, GitBranch, Clock4 };

export default function StrengthCard({ item, index, dark = false }) {
  const Icon = iconMap[item.icon];
  return (
    <Reveal delay={(index % 4) * 0.07} className="h-full">
      <div
        className={cn(
          "h-full rounded-2xl border p-6 transition-all duration-300",
          dark
            ? "border-paper/10 bg-paper/[0.03] hover:bg-paper/[0.06] hover:border-paper/20 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]"
            : "border-paper-dim bg-surface/60 hover:bg-surface hover:shadow-[0_20px_40px_-20px_rgba(16,28,44,0.25)]"
        )}
      >
        <span className={cn(
          "relative flex h-11 w-11 items-center justify-center rounded-full border",
          dark ? "border-teal/40 text-teal-tint" : "border-teal/30 text-teal"
        )}>
          <Icon size={18} />
          <span className={cn(
            "absolute inset-0 rounded-full border scale-125 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            dark ? "border-teal/30" : "border-teal/20"
          )} />
        </span>
        <h3 className={cn(
          "mt-5 font-display text-lg tracking-tight",
          dark ? "text-paper" : "text-ink"
        )}>
          {item.title}
        </h3>
        <p className={cn(
          "mt-2 text-sm leading-relaxed",
          dark ? "text-paper/70" : "text-ink-soft"
        )}>
          {item.detail}
        </p>
      </div>
    </Reveal>
  );
}
