import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  FileCheck,
  Layers,
  LockKeyhole,
  MapPin,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "../site-shell";
import { Checks } from "../home";
import { DashboardPreview, PhonePreview, type PreviewMode } from "../product-preview";

type Module = {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  points: string[];
  preview: PreviewMode | "phone";
  link: { to: string; label: string };
};

const modules: Module[] = [
  {
    id: "campaigns",
    icon: Layers,
    title: "Campaign workspace",
    summary:
      "Every campaign gets its own scoped workspace — settings, regions, areas, contacts and content live together instead of in scattered sheets.",
    points: [
      "Campaign structure and regional settings",
      "Contacts with consent and source records",
      "Area organisation for field planning",
    ],
    preview: "overview",
    link: { to: "/solutions/campaign-management", label: "Campaign management" },
  },
  {
    id: "content",
    icon: FileCheck,
    title: "Content & approvals",
    summary:
      "Draft campaign content, send it for review and keep approvals with the campaign owner. Any edit returns content to draft, so nothing slips through unreviewed.",
    points: [
      "Draft → review → approved workflow",
      "Owner-led approval responsibility",
      "Approval gates before outbound use",
    ],
    preview: "overview",
    link: { to: "/solutions/campaign-management", label: "See the approval flow" },
  },
  {
    id: "teams",
    icon: Users,
    title: "Teams & roles",
    summary:
      "Owners, managers, coordinators and workers each get the tools their role needs — and nothing more. Membership is per campaign.",
    points: [
      "Role-based campaign membership",
      "Coordinators scoped to permitted teams",
      "Events and volunteer shift planning",
    ],
    preview: "team",
    link: { to: "/solutions/team-coordination", label: "Team coordination" },
  },
  {
    id: "field",
    icon: Smartphone,
    title: "Field worker app",
    summary:
      "A focused phone interface for workers: their assigned areas, household lists and quick outcome capture — even when the signal drops.",
    points: [
      "Assigned area and household lists",
      "Offline capture with later sync",
      "Duplicate-safe submissions",
    ],
    preview: "phone",
    link: { to: "/solutions/field-operations", label: "Field operations" },
  },
  {
    id: "progress",
    icon: BarChart3,
    title: "Progress & reporting",
    summary:
      "Follow visits by area, recorded outcomes and campaign activity from the dashboard. Reports are campaign-entered — never presented as official results.",
    points: [
      "Visit outcomes by area",
      "Dedicated reporting interface",
      "Official figures kept separately sourced",
    ],
    preview: "field",
    link: { to: "/how-it-works", label: "How the workflow fits together" },
  },
];

const bento: { icon: LucideIcon; title: string; text: string; size: "lg" | "md" | "sm" }[] = [
  {
    icon: ShieldCheck,
    title: "Access that follows responsibility",
    text: "Route-level role checks and tenant-level data isolation. Platform support access is separate, read-only, reason-based and logged.",
    size: "lg",
  },
  {
    icon: Target,
    title: "One operational overview",
    text: "Content, contacts, teams and area activity from a single campaign dashboard.",
    size: "md",
  },
  {
    icon: MapPin,
    title: "Area-first planning",
    text: "Work is organised around the places your teams cover.",
    size: "sm",
  },
  {
    icon: CalendarDays,
    title: "Events & shifts",
    text: "Plan events and volunteer shifts around real people.",
    size: "sm",
  },
  {
    icon: Smartphone,
    title: "Installable web apps",
    text: "Worker and reporting tools install on a phone home screen.",
    size: "sm",
  },
  {
    icon: FileCheck,
    title: "Duplicate-safe sync",
    text: "Offline visits upload once, even on flaky connections.",
    size: "sm",
  },
  {
    icon: LockKeyhole,
    title: "Consent before contact",
    text: "Voice and SMS adapters sit behind approval and consent checks. Availability depends on region and provider setup.",
    size: "md",
  },
];

export function PlatformPage() {
  const [active, setActive] = useState("campaigns");
  const current = (modules.find((m) => m.id === active) ?? modules[0]) as Module;
  return (
    <>
      <section className="pf-hero">
        <div className="container pf-hero-copy">
          <div className="eyebrow justify-center">The Urbayne platform</div>
          <h1>
            Five connected modules.
            <br />
            <span>One clear campaign.</span>
          </h1>
          <p>
            Planning, content, people, field work and reporting — built to work together inside a
            campaign-scoped workspace.
          </p>
          <div className="cta-row justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/book-demo">
                Book a walkthrough <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#modules">Explore the modules</a>
            </Button>
          </div>
        </div>
        <div className="container pf-hero-stage">
          <DashboardPreview />
          <div className="product-label">Illustrative overview · Sample data</div>
        </div>
      </section>

      <section className="section section-white" id="modules">
        <div className="container">
          <div className="section-intro">
            <div>
              <div className="eyebrow">Module explorer</div>
              <h2 className="section-heading">Pick a module. See where it fits.</h2>
            </div>
            <p className="section-description">
              Each part of Urbayne handles one job well, and hands off cleanly to the next.
            </p>
          </div>
          <div className="pf-explorer">
            <div className="pf-tabs" role="tablist" aria-label="Platform modules">
              {modules.map((m, i) => (
                <button
                  key={m.id}
                  role="tab"
                  id={`tab-${m.id}`}
                  aria-selected={active === m.id}
                  aria-controls="pf-panel"
                  className={`pf-tab ${active === m.id ? "on" : ""}`}
                  onClick={() => setActive(m.id)}
                >
                  <span className="pf-tab-num">0{i + 1}</span>
                  <m.icon size={18} />
                  <span>{m.title}</span>
                </button>
              ))}
            </div>
            <div
              className="pf-panel"
              role="tabpanel"
              id="pf-panel"
              aria-labelledby={`tab-${current.id}`}
            >
              <div className="pf-panel-copy">
                <current.icon className="pf-panel-icon" />
                <h3>{current.title}</h3>
                <p>{current.summary}</p>
                <Checks items={current.points} />
                <Link to={current.link.to as "/"} className="text-link">
                  {current.link.label} <ArrowRight size={15} />
                </Link>
              </div>
              <div className="pf-panel-visual">
                {current.preview === "phone" ? (
                  <div className="mobile-stage pf-phone">
                    <PhonePreview />
                  </div>
                ) : (
                  <DashboardPreview mode={current.preview} />
                )}
                <div className="product-label">Illustrative · Sample data</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="centered">
            <div className="eyebrow justify-center">Built in, not bolted on</div>
            <h2 className="section-heading">The foundations under every module.</h2>
          </div>
          <div className="pf-bento">
            {bento.map(({ icon: Icon, title, text, size }) => (
              <article className={`pf-cell pf-${size} reveal`} key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pf-honest">
        <div className="container pf-honest-inner">
          <div>
            <div className="eyebrow">Straight talk</div>
            <h2>What we will and won’t claim.</h2>
          </div>
          <ul>
            <li>
              <strong>We will</strong> show you exactly which workflows exist in the product today.
            </li>
            <li>
              <strong>We won’t</strong> present provider adapters as live integrations until they
              are configured for your region.
            </li>
            <li>
              <strong>We won’t</strong> call campaign-entered reports official results, or claim any
              election-authority connection.
            </li>
          </ul>
          <Link to="/faq" className="text-link">
            Read the platform FAQ <ArrowRight size={15} />
          </Link>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
