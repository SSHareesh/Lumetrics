import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { services } from "../data/nav";

function LinkedInGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.4 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.36 7.5 7.25 6.6 7.25 5.5C7.25 4.4 6.36 3.5 5.25 3.5ZM20.5 20.5V13.9C20.5 10.7 18.94 9.24 16.8 9.24C15.09 9.24 14.24 10.17 13.81 10.83V8.5H10.44C10.49 9.5 10.44 20.5 10.44 20.5H13.81V13.9C13.81 13.55 13.84 13.2 13.94 12.95C14.22 12.25 14.86 11.53 15.94 11.53C17.35 11.53 18.13 12.45 18.13 13.94V20.5H20.5Z" />
    </svg>
  );
}

function XGlyph(props) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" {...props}>
      <path d="M18.24 3H21L14.4 10.53 22.17 21H16.1l-4.75-6.2-5.44 6.2H3.13l7.06-8.06L2.6 3h6.22l4.3 5.68L18.24 3Zm-1.06 16.17h1.53L7.9 4.74H6.26l10.92 14.43Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/80 grain">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper text-ink font-display text-sm">
                L
              </span>
              <span className="font-display text-lg text-paper tracking-tight">Lumetrics<span className="text-teal">.</span></span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed max-w-xs text-paper/60">
              A biomedical statistics CRO built around one idea: the statistician who
              designs the analysis should be the one who defends it.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 hover:border-teal hover:text-teal transition-colors">
                <LinkedInGlyph />
              </a>
              <a href="#" aria-label="X (formerly Twitter)" className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 hover:border-teal hover:text-teal transition-colors">
                <XGlyph />
              </a>
              <a href="mailto:hello@Lumetricsbiostat.example" aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/15 hover:border-teal hover:text-teal transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/40 mb-4">Quick links</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-paper transition-colors">About</Link></li>
              <li><Link to="/solutions" className="hover:text-paper transition-colors">Solutions</Link></li>
              <li><Link to="/resources" className="hover:text-paper transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-paper transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/40 mb-4">Services</p>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-paper transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/40 mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-teal" />
                <span>401 Laurel Street, Suite 220<br />Cambridge, MA 02141</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-teal" />
                <span>+1 (617) 555-0148</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-teal" />
                <span>hello@Lumetricsbiostat.example</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-paper/40">
          <p>© {new Date().getFullYear()} Lumetrics Biostatistics, Inc. All rights reserved.</p>
          <p className="font-mono">n = trials analyzed with care, not just volume.</p>
        </div>
      </div>
    </footer>
  );
}
