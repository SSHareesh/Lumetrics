import { cn } from "../utils/cn";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={cn(
              "font-mono text-xs uppercase tracking-[0.22em] mb-4 flex items-center gap-2",
              align === "center" && "justify-center",
              light ? "text-teal-tint" : "text-teal"
            )}
          >
            <span className={cn("inline-block h-px w-6", light ? "bg-teal-tint" : "bg-teal")} />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight",
            light ? "text-paper" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className={cn("mt-4 text-[1.05rem] leading-relaxed", light ? "text-paper/70" : "text-ink-soft")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
