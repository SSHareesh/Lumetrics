import Reveal from "./Reveal";
import { cn } from "../utils/cn";

export default function WorkflowSteps({ steps, dark = false }) {
  return (
    <div className="relative">
      <div
        className={cn(
          "hidden lg:block absolute top-[26px] left-[6%] right-[6%] h-px",
          dark ? "bg-paper/15" : "bg-ink/10"
        )}
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-6">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08}>
            <div className="relative">
              <div
                className={cn(
                  "relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full font-mono text-sm border",
                  dark
                    ? "bg-ink border-paper/25 text-teal-tint"
                    : "bg-paper border-ink/15 text-teal"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className={cn(
                  "mt-4 font-display text-lg tracking-tight",
                  dark ? "text-paper" : "text-ink"
                )}
              >
                {step.title}
              </h3>
              <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-paper/60" : "text-ink-soft")}>
                {step.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
