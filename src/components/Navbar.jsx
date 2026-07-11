import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, LineChart, Terminal, Database, Users, FileCheck2, PenLine } from "lucide-react";
import { primaryNav, services, resourceLinks } from "../data/nav";
import { cn } from "../utils/cn";
import Button from "./Button";

const iconMap = { LineChart, Terminal, Database, Users, FileCheck2, PenLine };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 border",
            scrolled
              ? "bg-paper/75 backdrop-blur-xl border-ink/10 shadow-[0_8px_30px_-12px_rgba(16,28,44,0.25)]"
              : "bg-paper/30 backdrop-blur-md border-paper/40"
          )}
        >
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper font-display text-sm">
              L
              <span className="absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-full bg-teal border-2 border-paper" />
            </span>
            <span className="font-display text-lg tracking-tight text-ink">
              Lumetrics<span className="text-teal">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {primaryNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
              >
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus-ring",
                      isActive ? "text-yellow" : "text-ink/75 hover:text-ink"
                    )
                  }
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-300",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </NavLink>

                <AnimatePresence>
                  {item.hasDropdown && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className={cn(
                        "absolute top-full pt-3 left-1/2 -translate-x-1/2",
                        item.label === "Services" ? "w-[560px]" : "w-[380px]"
                      )}
                    >
                      <div className="rounded-2xl border border-ink/10 bg-surface/95 backdrop-blur-xl shadow-[0_24px_60px_-20px_rgba(16,28,44,0.35)] p-3">
                        {item.label === "Services" ? (
                          <div className="grid grid-cols-2 gap-1">
                            {services.map((s) => {
                              const Icon = iconMap[s.icon];
                              return (
                                <Link
                                  key={s.slug}
                                  to={`/services/${s.slug}`}
                                  className="flex items-start gap-3 rounded-xl p-3 hover:bg-teal-tint transition-colors duration-200 group"
                                >
                                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-tint text-indigo group-hover:bg-teal group-hover:text-white transition-colors duration-200">
                                    <Icon size={16} />
                                  </span>
                                  <span>
                                    <span className="block text-sm font-medium text-ink">{s.title}</span>
                                    <span className="block text-xs text-ink-soft mt-0.5 leading-snug">{s.short}</span>
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="flex flex-col gap-1">
                            {resourceLinks.map((r) => (
                              <Link
                                key={r.label}
                                to={r.to}
                                className="rounded-xl p-3 hover:bg-teal-tint transition-colors duration-200"
                              >
                                <span className="block text-sm font-medium text-ink">{r.label}</span>
                                <span className="block text-xs text-ink-soft mt-0.5">{r.desc}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact" variant="primary">
              Talk to a statistician
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-ink focus-ring rounded-full"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <div className="container-page pt-3 pb-6">
              <div className="rounded-3xl border border-ink/10 bg-paper/95 backdrop-blur-xl shadow-xl p-5">
                <nav className="flex flex-col divide-y divide-ink/10">
                  {primaryNav.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="py-3 text-base font-medium text-ink"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-2 pt-4 border-t border-ink/10">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mb-3">Services</p>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="text-sm text-ink-soft py-1.5"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <Button to="/contact" variant="primary" className="w-full justify-center">
                    Talk to a statistician
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
