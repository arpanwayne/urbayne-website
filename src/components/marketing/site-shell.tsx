import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUp, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const suffix = tone === "light" ? "-light" : "";
  return (
    <Link to="/" className="logo" aria-label="Urbayne home">
      <img
        className="logo-mark"
        src={`/brand/urbayne-mark${suffix}.png`}
        alt=""
        width={30}
        height={38}
      />
      <img
        className="logo-word"
        src={`/brand/urbayne-wordmark${suffix}.png`}
        alt="Urbayne"
        width={122}
        height={14}
      />
    </Link>
  );
}
/** Pages whose first section is a dark, full-bleed hero that sits under a transparent header. */
export const overlayHeaderPaths = [
  "/",
  "/solutions",
  "/solutions/field-operations",
  "/about",
  "/team",
] as const;
export function FinalCTA() {
  return (
    <section className="final-cta">
      <img
        className="cta-decoration-mark"
        src="/brand/urbayne-mark-light.png"
        alt=""
        aria-hidden="true"
        width={256}
        height={326}
      />
      <div className="container cta-inner">
        <div>
          <div className="eyebrow">A clearer way forward</div>
          <h2>
            Ready to Bring Your
            <br />
            Campaign Together?
          </h2>
          <p>
            Discover a more organised way to manage your campaign operations and coordinate your
            team.
          </p>
        </div>
        <div className="cta-row">
          <Button variant="hero" size="lg" asChild>
            <Link to="/book-demo">
              Book a Demo <ArrowRight />
            </Link>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
const companyLinks = [
  { to: "/about", label: "About Urbayne" },
  { to: "/team", label: "Our team" },
  { to: "/contact", label: "Contact" },
] as const;
const resourceLinks = [
  { to: "/faq", label: "Frequently asked questions" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/privacy", label: "Privacy policy" },
  { to: "/terms", label: "Terms of service" },
] as const;
const solutionLinks = [
  { to: "/solutions/campaign-management", label: "Campaign management" },
  { to: "/solutions/field-operations", label: "Field operations" },
  { to: "/solutions/team-coordination", label: "Team coordination" },
] as const;
export function SiteShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const overlay = (overlayHeaderPaths as readonly string[]).includes(
    pathname.replace(/\/$/, "") || "/",
  );
  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<"solutions" | "company" | "resources" | null>(null);
  const [backTop, setBackTop] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setOpen(false);
    setDropdown(null);
    window.scrollTo({ top: 0 });
  }, [pathname]);
  useEffect(() => {
    const onScroll = () => setBackTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setDropdown(null);
      }
    };
    const outside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdown(null);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("click", outside);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", close);
      document.removeEventListener("click", outside);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    const timer = window.setTimeout(
      () => document.querySelectorAll(".reveal").forEach((el) => observer.observe(el)),
      80,
    );
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, [pathname]);
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-card focus:p-4"
      >
        Skip to content
      </a>
      <header className={`site-header ${overlay ? "" : "solid"}`}>
        <div className="container nav-inner">
          <Logo tone={overlay ? "light" : "dark"} />
          <nav className="desktop-nav" aria-label="Main navigation" ref={dropdownRef}>
            <Link to="/platform" className={`nav-link ${isActive("/platform") ? "active" : ""}`}>
              Platform
            </Link>
            <NavMenu
              id="solutions"
              label="Solutions"
              active={isActive("/solutions")}
              open={dropdown === "solutions"}
              onToggle={() => setDropdown(dropdown === "solutions" ? null : "solutions")}
              links={[{ to: "/solutions", label: "All solutions" }, ...solutionLinks]}
            />
            <Link
              to="/how-it-works"
              className={`nav-link ${isActive("/how-it-works") ? "active" : ""}`}
            >
              How It Works
            </Link>
            <NavMenu
              id="company"
              label="Company"
              active={isActive("/about") || isActive("/team")}
              open={dropdown === "company"}
              onToggle={() => setDropdown(dropdown === "company" ? null : "company")}
              links={companyLinks}
            />
            <NavMenu
              id="resources"
              label="Resources"
              active={isActive("/faq") || isActive("/privacy") || isActive("/terms")}
              open={dropdown === "resources"}
              onToggle={() => setDropdown(dropdown === "resources" ? null : "resources")}
              links={resourceLinks}
            />
            <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
              Contact
            </Link>
          </nav>
          <div className="nav-actions">
            <Link to="/sign-in">Sign In</Link>
            <Button variant="hero" asChild>
              <Link to="/book-demo">
                Book a Demo <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <div className="mobile-drawer" id="mobile-nav" ref={menuRef}>
            <nav aria-label="Mobile navigation" className="grid">
              <Link to="/platform">Platform</Link>
              <Link to="/solutions">Solutions</Link>
              {solutionLinks.map((l) => (
                <Link key={l.to} to={l.to} className="pl-4 text-sm text-hero-muted">
                  {l.label}
                </Link>
              ))}
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/about">About</Link>
              <Link to="/team">Our Team</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/sign-in">Sign In</Link>
              <Button variant="hero" asChild className="mt-5">
                <Link to="/book-demo">
                  Book a Demo <ArrowRight />
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main id="main-content">{children}</main>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Link to="/" aria-label="Urbayne home" className="footer-logo">
                <img src="/brand/urbayne-logo.png" alt="Urbayne" width={150} height={120} />
              </Link>
              <p>
                Campaigns are built by people.
                <br />
                We bring their work together.
              </p>
              <Link to="/book-demo" className="text-link">
                Book a demo <ArrowRight size={14} />
              </Link>
            </div>
            <div className="footer-column">
              <h4>Platform</h4>
              <Link to="/platform">Platform overview</Link>
              <Link to="/how-it-works">How it works</Link>
              <Link to="/book-demo">Book a demo</Link>
              <Link to="/sign-in">Sign in</Link>
            </div>
            <div className="footer-column">
              <h4>Solutions</h4>
              <Link to="/solutions">All solutions</Link>
              {solutionLinks.map((l) => (
                <Link key={l.to} to={l.to}>
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <Link to="/about">About Urbayne</Link>
              <Link to="/team">Our team</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <Link to="/privacy">Privacy policy</Link>
              <Link to="/terms">Terms of service</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getUTCFullYear()} Urbayne · A product of{" "}
              <a href="https://wayneesolutions.com" target="_blank" rel="noreferrer">
                Wayne E Solutions
              </a>
            </span>
            <div className="footer-legal">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/sign-in">Sign in</Link>
            </div>
          </div>
        </div>
      </footer>
      {backTop && (
        <Button
          variant="outline"
          size="icon"
          className="back-top"
          aria-label="Back to top"
          title="Back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            })
          }
        >
          <ArrowUp />
        </Button>
      )}
    </>
  );
}

function NavMenu({
  id,
  label,
  links,
  open,
  active,
  onToggle,
}: {
  id: string;
  label: string;
  links: readonly { to: string; label: string }[];
  open: boolean;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="nav-dropdown">
      <Button
        variant="ghost"
        className={`nav-link h-auto px-0 hover:bg-transparent ${active ? "active" : ""}`}
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`menu-${id}`}
      >
        {label} <ChevronDown size={12} className={open ? "rotate-180 transition" : "transition"} />
      </Button>
      {open && (
        <div className="dropdown-content" id={`menu-${id}`}>
          {links.map((l) => (
            <Link key={l.to} to={l.to as "/"}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
