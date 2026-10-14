import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  ClipboardList,
  KeyRound,
  LayoutDashboard,
  MapPinned,
  Search,
  Smartphone,
  UserPlus,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "../site-shell";
import { faqs, productLinks } from "@/lib/marketing";

/* ───────────────────────────── How it works ───────────────────────────── */

const journey = [
  {
    icon: KeyRound,
    phase: "Week 0",
    title: "Get access",
    text: "Your administrator provisions accounts in the main application. Everyone signs in with email and password.",
    detail: [
      "Administrator-provisioned accounts",
      "No public self-signup",
      "Role assigned per campaign",
    ],
  },
  {
    icon: ClipboardList,
    phase: "Week 1",
    title: "Set up the campaign",
    text: "The owner creates the campaign, regional settings and areas, and prepares content for approval.",
    detail: [
      "Campaign & regional settings",
      "Areas and contact records",
      "Content enters the approval flow",
    ],
  },
  {
    icon: UserPlus,
    phase: "Week 1–2",
    title: "Bring in the team",
    text: "Add members with the right roles. Assign areas to workers and plan events or volunteer shifts.",
    detail: [
      "Owner, manager, coordinator, worker",
      "Area lists assigned to workers",
      "Events & volunteer shifts",
    ],
  },
  {
    icon: Smartphone,
    phase: "Ongoing",
    title: "Work in the field",
    text: "Workers open their assigned lists on a phone, record outcomes and keep going offline.",
    detail: [
      "Household outcomes in one tap",
      "Offline capture, later sync",
      "Masked household numbers",
    ],
  },
  {
    icon: BarChart3,
    phase: "Every day",
    title: "Review and adjust",
    text: "Owners and managers review visits and activity by area, then adjust assignments and priorities.",
    detail: ["Outcomes by area", "Campaign-entered reporting", "Re-assign where it’s needed"],
  },
];

export function HowItWorksPage() {
  return (
    <>
      <section className="hiw-hero">
        <div className="container hiw-hero-grid">
          <div>
            <div className="eyebrow">How Urbayne works</div>
            <h1>
              From sign-in
              <br />
              to <span>street-level progress.</span>
            </h1>
          </div>
          <div>
            <p>
              Five phases take a campaign from first access to a daily operating rhythm. Here’s what
              happens in each, and who’s involved.
            </p>
            <div className="hiw-roles">
              <span>
                <LayoutDashboard size={15} /> Admins
              </span>
              <span>
                <Users size={15} /> Owners & managers
              </span>
              <span>
                <MapPinned size={15} /> Field teams
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container hiw-track">
          {journey.map((j, i) => (
            <article className={`hiw-step reveal ${i % 2 ? "right" : ""}`} key={j.title}>
              <div className="hiw-step-marker">
                <span>{i + 1}</span>
              </div>
              <div className="hiw-step-card">
                <div className="hiw-step-top">
                  <j.icon size={22} />
                  <span className="hiw-phase">{j.phase}</span>
                </div>
                <h2>{j.title}</h2>
                <p>{j.text}</p>
                <ul>
                  {j.detail.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hiw-band">
        <div className="container hiw-band-inner">
          <h2>Want us to map these phases onto your campaign?</h2>
          <div className="cta-row">
            <Button variant="hero" size="lg" asChild>
              <Link to="/book-demo">
                Plan it in a demo <ArrowRight />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/faq">Read the FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

/* ───────────────────────────────── FAQ ───────────────────────────────── */

const faqCategories = [
  { id: "all", label: "All questions" },
  { id: "general", label: "General" },
  { id: "access", label: "Access & roles" },
  { id: "field", label: "Field work" },
  { id: "integrations", label: "Integrations" },
  { id: "demo", label: "Demos" },
] as const;
const faqCategoryOf = [
  "general",
  "general",
  "field",
  "access",
  "integrations",
  "integrations",
  "access",
  "demo",
  "integrations",
];

export function FAQPage() {
  const [cat, setCat] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(faqs[0]?.[0] ?? null);
  const list = useMemo(
    () =>
      faqs
        .map(([q, a], i) => ({ q, a, c: faqCategoryOf[i] ?? "general" }))
        .filter((f) => cat === "all" || f.c === cat)
        .filter((f) => {
          const t = query.trim().toLowerCase();
          return !t || f.q.toLowerCase().includes(t) || f.a.toLowerCase().includes(t);
        }),
    [cat, query],
  );
  return (
    <>
      <section className="fq-hero">
        <div className="container centered">
          <div className="eyebrow justify-center">Help centre</div>
          <h1 className="mx-auto">How can we help?</h1>
          <label className="fq-search">
            <Search size={18} />
            <span className="sr-only">Search questions</span>
            <input
              type="search"
              placeholder="Search questions — e.g. offline, roles, SMS"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
      </section>
      <section className="section section-white pt-10">
        <div className="container fq-layout">
          <aside className="fq-side">
            <nav aria-label="FAQ categories">
              {faqCategories.map((c) => (
                <button
                  key={c.id}
                  className={`fq-cat ${cat === c.id ? "on" : ""}`}
                  aria-pressed={cat === c.id}
                  onClick={() => setCat(c.id)}
                >
                  {c.label}
                  <span>
                    {c.id === "all" ? faqs.length : faqCategoryOf.filter((x) => x === c.id).length}
                  </span>
                </button>
              ))}
            </nav>
            <div className="fq-side-card">
              <strong>Still stuck?</strong>
              <p>Send us your question and we’ll point you the right way.</p>
              <Link to="/contact" className="text-link">
                Contact us <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
          <div className="fq-list">
            {list.length === 0 && (
              <div className="fq-empty">
                No questions match “{query}”.{" "}
                <button
                  className="text-link"
                  onClick={() => {
                    setQuery("");
                    setCat("all");
                  }}
                >
                  Clear search
                </button>
              </div>
            )}
            {list.map((f) => {
              const isOpen = open === f.q;
              const id = `fq-${faqs.findIndex(([q]) => q === f.q)}`;
              return (
                <div className={`fq-item ${isOpen ? "open" : ""}`} key={f.q}>
                  <h2>
                    <button
                      aria-expanded={isOpen}
                      aria-controls={id}
                      onClick={() => setOpen(isOpen ? null : f.q)}
                    >
                      <span>{f.q}</span>
                      <ChevronDown size={18} />
                    </button>
                  </h2>
                  {isOpen && (
                    <div className="fq-answer" id={id}>
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

/* ───────────────────────────── Legal pages ───────────────────────────── */

const privacySections: [string, string][] = [
  [
    "About this draft",
    "This page describes the implemented approach and matters still requiring a formal policy. It is not an approved privacy policy, certification or assurance of compliance. The responsible legal entity, contact channel, jurisdiction and effective date must be confirmed before launch.",
  ],
  [
    "Information in campaign workflows",
    "The application is designed to hold account and campaign membership details, contact records, consent and source information, content, assigned areas and operational activity. The exact information collected depends on the campaign and the workflows used.",
  ],
  [
    "How access is organised",
    "Campaign membership, route-level role checks and tenant-level database policies control access in the main application. Worker workflows are scoped to assigned areas. Platform staff support access is separate, read-only, reason-based and logged. These technical controls do not constitute a security certification.",
  ],
  [
    "Field workflows and local storage",
    "Dedicated worker and reporting interfaces can retain unsynchronised activity on a device when offline and submit it when connectivity returns. The marketing website does not store enquiry fields after a page reload; downloaded enquiry files are held on your device.",
  ],
  [
    "Providers and data transfers",
    "Voice, messaging, email and monitoring adapters exist in the product. Which providers process production data, where that data is processed and the terms governing it must be confirmed for each deployed environment. No provider is asserted to be currently active.",
  ],
  [
    "Retention and requests",
    "The product contains campaign and constituent-service retention and deletion workflows. Retention periods are configurable and require legal decisions. The final policy must specify applicable periods, how to request access or deletion, identity checks and a verified contact channel.",
  ],
  [
    "This public website",
    "The website serves its own image and logo files and loads fonts from Google Fonts. Those requests can disclose network information to the serving provider. No analytics, advertising pixels or marketing-cookie tracking have been added.",
  ],
  [
    "Before this policy can be approved",
    "Confirm the controller identity, contact information, lawful bases, rights, provider list, processing locations, retention schedules, cookie disclosures, breach procedures and any jurisdiction-specific requirements with legal counsel.",
  ],
];
const termsSections: [string, string][] = [
  [
    "Draft status and scope",
    "These terms are a draft framework for legal review. They are not an executed service agreement. The contracting legal entity, contact channel, governing law, effective date and dispute process must be supplied and approved before commercial use.",
  ],
  [
    "The service",
    "Urbayne is a campaign technology platform with campaign-scoped workflows, administration screens and mobile-facing interfaces. Enabled features depend on the deployed application, account permissions, regional settings and provider configuration. Public website previews use illustrative sample data.",
  ],
  [
    "Accounts and responsibilities",
    "Authorised administrators provision main-application accounts. Users should protect credentials, work only within authorised campaign access and use information only for a permitted purpose. Account, suspension and termination terms need formal approval.",
  ],
  [
    "Campaign content and lawful use",
    "Campaign owners and authorised members are responsible for their content, contact data, sources, consent and applicable legal requirements. Built-in checks are not a substitute for legal advice or a guarantee of compliance in any jurisdiction.",
  ],
  [
    "Outbound channels and third parties",
    "Provider adapters do not establish that a provider is active. Outbound workflows require appropriate setup, approvals and consent. Commercial provider terms, service availability and cost responsibilities must be confirmed separately.",
  ],
  [
    "Campaign reporting",
    "Worker and agent reports are campaign-entered information, not official results. No direct election authority connection is claimed. Official information must remain separately identified with the appropriate source.",
  ],
  [
    "Commercial and legal terms to confirm",
    "Pricing, payment, taxes, cancellation, intellectual property rights, data ownership, service levels, warranties, liability, indemnities and termination must be defined in the approved agreement. This draft makes no uptime commitment or unsupported security guarantee.",
  ],
  [
    "Website enquiries",
    "The public website currently prepares downloadable enquiry files. No contact or demo submission endpoint is configured, so completing the form does not deliver an enquiry or create a contractual commitment.",
  ],
];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function DraftNotice() {
  return (
    <div className="legal-warning">
      <strong>Draft — pending legal review.</strong> Approved legal text has not been supplied. This
      page must be reviewed and completed by the responsible organisation before launch.
    </div>
  );
}

export function PrivacyPage() {
  return (
    <>
      <section className="lg-hero">
        <div className="container">
          <div className="eyebrow">Legal · Privacy</div>
          <h1>Privacy Policy</h1>
          <p>How campaign information and website enquiries are handled.</p>
        </div>
      </section>
      <section className="section section-white pt-12">
        <div className="container lg-layout">
          <aside className="lg-toc">
            <strong>On this page</strong>
            <ol>
              {privacySections.map(([t]) => (
                <li key={t}>
                  <a href={`#${slug(t)}`}>{t}</a>
                </li>
              ))}
            </ol>
            <Link to="/terms" className="text-link">
              Terms of service <ArrowRight size={14} />
            </Link>
          </aside>
          <div className="lg-body">
            <DraftNotice />
            {privacySections.map(([t, d], i) => (
              <section key={t} id={slug(t)}>
                <h2>
                  <span>{String(i + 1).padStart(2, "0")}</span> {t}
                </h2>
                <p>{d}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function TermsPage() {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));
  const all = open.size === termsSections.length;
  const toggle = (i: number) =>
    setOpen((prev) => {
      const n = new Set(prev);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  return (
    <>
      <section className="lg-hero terms">
        <div className="container centered">
          <div className="eyebrow justify-center">Legal · Terms</div>
          <h1 className="mx-auto">Terms of Service</h1>
          <p className="mx-auto">
            A starting framework for responsible use of the platform and this website.
          </p>
        </div>
      </section>
      <section className="section section-white pt-10">
        <div className="container tr-doc">
          <DraftNotice />
          <div className="tr-toolbar">
            <span>{termsSections.length} sections</span>
            <button
              className="text-link"
              onClick={() => setOpen(all ? new Set() : new Set(termsSections.map((_, i) => i)))}
            >
              {all ? "Collapse all" : "Expand all"}
            </button>
          </div>
          {termsSections.map(([t, d], i) => (
            <div className={`tr-item ${open.has(i) ? "open" : ""}`} key={t}>
              <button
                aria-expanded={open.has(i)}
                aria-controls={`tr-${i}`}
                onClick={() => toggle(i)}
              >
                <span className="tr-num">{i + 1}</span>
                <span className="tr-title">{t}</span>
                <ChevronDown size={18} />
              </button>
              {open.has(i) && (
                <p id={`tr-${i}`} className="tr-body">
                  {d}
                </p>
              )}
            </div>
          ))}
          <Link to="/privacy" className="text-link mt-8">
            Read the privacy policy <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}

/* ────────────────────────────── Sign in ────────────────────────────── */

export function SignInPage() {
  return (
    <section className="si-wrap">
      <div className="si-brand">
        <img src="/brand/urbayne-logo-light.png" alt="Urbayne" width={220} height={176} />
        <h1>
          Welcome back.
          <br />
          <span>Let’s get to work.</span>
        </h1>
        <p>
          Choose your workspace below. Your account and assigned role decide what you can see once
          you’re in.
        </p>
      </div>
      <div className="si-panel">
        <h2>Continue to your workspace</h2>
        <div className="si-options">
          {[
            {
              icon: LayoutDashboard,
              title: "Campaign & administration",
              text: "Dashboard, teams, content and contacts",
              url: productLinks.admin,
            },
            {
              icon: Smartphone,
              title: "Field worker",
              text: "Assigned areas, household visits and outcomes",
              url: productLinks.worker,
            },
            {
              icon: BarChart3,
              title: "Reporting",
              text: "Permitted station and campaign reporting",
              url: productLinks.reporting,
            },
          ].map(({ icon: Icon, title, text, url }) => (
            <a className="si-option" href={url} key={url}>
              <span className="si-option-icon">
                <Icon size={20} />
              </span>
              <span className="si-option-text">
                <strong>{title}</strong>
                <span>{text}</span>
              </span>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
        <p className="sign-in-note">
          Sign-in happens in the Urbayne application with your email and password. This website
          never collects your credentials. Need access or a password reset? Ask your campaign
          administrator.
        </p>
        <div className="si-links">
          <Link to="/faq" className="text-link">
            Access questions <ArrowRight size={14} />
          </Link>
          <Link to="/book-demo" className="text-link">
            New here? Book a demo <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── 404 ─────────────────────────────── */

export function NotFoundPage() {
  return (
    <section className="nf">
      <img src="/brand/urbayne-mark.png" alt="" aria-hidden="true" width={120} height={153} />
      <span className="nf-code">404</span>
      <h1>This page took a wrong turn.</h1>
      <p>The page you’re looking for doesn’t exist or has moved. These might help:</p>
      <div className="nf-links">
        <Link to="/">Home</Link>
        <Link to="/platform">Platform</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </section>
  );
}
