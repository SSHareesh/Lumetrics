import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-ring";

const variants = {
  primary: "bg-ink text-paper hover:bg-teal-deep",
  inverse: "bg-paper text-ink hover:bg-white",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink/5",
  "outline-light": "border border-paper/40 text-paper hover:border-paper hover:bg-paper/10",
  ghost: "text-ink hover:text-teal",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  icon = true,
  className = "",
  type = "button",
}) {
  const classes = cn(base, variants[variant], className);
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cn(classes, "group")} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cn(classes, "group")}>
      {content}
    </button>
  );
}
