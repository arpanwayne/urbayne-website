import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Users,
  Layers,
  MapPin,
  ShieldCheck,
  Smartphone,
  BarChart3,
  FileCheck,
  CalendarDays,
  Target,
  Check,
  LockKeyhole,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "./site-shell";
import {
  Checks,
  ProcessSteps,
  ProductShowcase,
  RoleSection,
  MobileSection,
  SolutionsCards,
} from "./home";
import { DashboardPreview } from "./product-preview";
import { faqs, productLinks } from "@/lib/marketing";
import team from "@/assets/team.jpg.asset.json";
import planning from "@/assets/planning.jpg.asset.json";
import people from "@/assets/people.jpg.asset.json";
export function PlatformPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-split">
          <div>
            <div className="eyebrow">The Urbayne platform</div>
            <h1>
              One workspace.
              <br />A clearer campaign.
            </h1>
            <p>
              Connect planning, people and field activity through a campaign-scoped platform built
              around everyday operations.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/book-demo">
                Explore it with us <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="product-stage">
            <DashboardPreview />
            <div className="product-label">Illustrative overview · Sample data</div>
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="container">
          <div className="eyebrow">From structure to action</div>
          <h2 className="section-heading">The tools behind a coordinated campaign.</h2>
          <div className="detail-grid">
            {[
              {
                icon: Layers,
                title: "Campaign management",
                text: "Set up campaign structure and regional settings. Organise contacts, areas and content in one campaign context.",
              },
              {
                icon: Users,
                title: "Members & team management",
                text: "Bring people into the campaign with role-specific responsibilities. Manage membership and permitted assignments.",
              },
              {
                icon: MapPin,
                title: "Field worker coordination",
                text: "Assign area lists to workers, organise households and capture canvassing outcomes through the dedicated worker interface.",
              },
              {
                icon: BarChart3,
                title: "Campaign progress tracking",
                text: "Review visits by area, recorded outcomes and available campaign activity. Reporting reflects campaign-entered information, not official results.",
              },
              {
                icon: ShieldCheck,
                title: "Role-based administration",
                text: "Account administration, campaign ownership and field responsibilities are distinct. Route checks and tenant isolation enforce boundaries.",
              },
              {
                icon: Target,
                title: "Central operational overview",
                text: "Move between content, contacts, calls, teams and area-based activity within the campaign dashboard.",
              },
              {
                icon: Smartphone,
                title: "Mobile-friendly workflows",
                text: "Worker and reporting interfaces offer focused phone layouts, offline capture and synchronisation after connectivity returns.",
              },
              {
                icon: FileCheck,
                title: "Campaign workflows & updates",
                text: "Draft and approve content, coordinate events and volunteer shifts, and review recorded field activity.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article className="detail-item reveal" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ProductShowcase />
      <RoleSection />
      <MobileSection />
      <section className="section section-white">
        <div className="container feature-layout">
          <div>
            <div className="eyebrow">Technology with clear context</div>
            <h2 className="section-heading">Capabilities, not unverified badges.</h2>
            <p className="section-description">
              The source includes provider adapters for voice and SMS. Their availability depends on
              configured accounts, region and required approvals. Demo campaigns use simulated
              channels.
            </p>
            <Checks
              items={[
                "Content approval and consent checks precede outbound activity",
                "No election authority integration is claimed",
                "No payment provider is represented as connected",
              ]}
            />
          </div>
          <div>
            <LockKeyhole className="text-primary mb-5" size={32} />
            <h3 className="text-2xl font-semibold mb-4">Access follows responsibility.</h3>
            <p className="section-description">
              The application combines campaign membership, role checks and tenant-level row
              policies. Platform staff support access is reason-based, read-only and logged. Legal
              and regional operational requirements still need appropriate review.
            </p>
            <Link to="/privacy" className="text-link">
              Read about data handling <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function SolutionsPage() {
  return (
    <>
      <section className="page-hero dark">
        <div className="container">
          <div className="eyebrow">Built around your work</div>
          <h1>
            Different responsibilities.
            <br />
            One connected campaign.
          </h1>
          <p>
            For the people making the plan, coordinating the team and carrying the work into the
            field. Find the workflow that brings your responsibilities into focus.
          </p>
        </div>
      </section>
      <section className="section section-white">
        <div className="container">
          <SolutionsCards />
        </div>
      </section>
      <section className="section">
        <div className="container feature-layout">
          <div className="reveal">
            <div className="eyebrow">Regional & distributed teams</div>
            <h2 className="section-heading">
              Keep everyone close.
              <br />
              Even across different areas.
            </h2>
            <p className="section-description">
              Use assigned areas, campaign membership and recorded activity to connect regional
              coordinators with field teams. Shared campaign context helps make distributed
              responsibilities easier to follow.
            </p>
            <Checks
              items={[
                "Structure work around campaign areas",
                "Give coordinators permitted team responsibilities",
                "Review outcomes from assigned field activity",
              ]}
            />
            <Link to="/solutions/team-coordination" className="text-link">
              Explore team coordination <ArrowRight size={16} />
            </Link>
          </div>
          <div className="photo-wrap reveal">
            <img
              className="editorial-photo"
              src={team.url}
              alt="A distributed team reviewing shared responsibilities"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
const solutionContent = {
  campaign: {
    eyebrow: "Campaign management",
    title: "Bring the whole campaign into view.",
    description:
      "A campaign is more than a collection of tasks. Connect its structure, content and people in a workspace that gives every responsibility a place.",
    image: planning,
    alt: "Campaign leadership reviewing plans and responsibilities",
    heading: "A clear foundation for the work ahead.",
    body: "Organise campaign settings, areas and contacts. Prepare content and follow owner-led approvals before using it in permitted outbound workflows.",
    checks: [
      "Campaign structure and regional settings",
      "Contact records with consent and source information",
      "Drafting and approval workflows",
    ],
    details: [
      [
        "Structure with intention",
        "Create the campaign context and organise regional settings and areas. Campaign data belongs to its campaign, not an unrestricted global workspace.",
      ],
      [
        "Keep content accountable",
        "Draft campaign content, submit it through the appropriate approval workflow and keep ownership of approvals clear. Edits return content to draft.",
      ],
      [
        "Connect planning with activity",
        "Follow available dashboard activity, area lists and recorded visits to understand how campaign work is developing.",
      ],
    ],
  },
  field: {
    eyebrow: "Field operations",
    title: "A stronger connection to the ground.",
    description:
      "Give field teams practical tools for their assigned areas. Bring household visits, recorded outcomes and campaign oversight into the same operational picture.",
    image: people,
    alt: "Field team members coordinating an operational plan",
    heading: "Designed for work beyond the office.",
    body: "Managers organise area lists and assign workers. Workers use a dedicated mobile-facing interface to record household outcomes within their permitted areas.",
    checks: [
      "Assigned area lists and household workflows",
      "Visit outcomes including supporter, undecided and needs help",
      "Offline capture with synchronisation when connected",
    ],
    details: [
      [
        "Turn areas into actionable lists",
        "Organise area lists and assign workers. The campaign dashboard supports review of progress and latest household answers by area.",
      ],
      [
        "Make field reporting practical",
        "Workers see masked household numbers and clear result options. Reports are campaign-entered activity rather than an official source of truth.",
      ],
      [
        "Keep work moving through low connectivity",
        "The dedicated worker experience stores visits locally when offline and synchronises them after the connection returns, with duplicate-safe submissions.",
      ],
    ],
  },
  team: {
    eyebrow: "Team coordination",
    title: "Give every person a clear part to play.",
    description:
      "Campaign owners, managers, coordinators and field workers have different jobs. Connect them through clear roles, assigned areas and shared campaign context.",
    image: team,
    alt: "Campaign team collaborating around a shared table",
    heading: "Clear roles. Better coordination.",
    body: "Build a campaign team with defined responsibilities. Organise assignments, events and volunteer shifts while respecting each member’s permitted access.",
    checks: [
      "Campaign roles and scoped membership",
      "Area assignments for field workers",
      "Events and volunteer shift organisation",
    ],
    details: [
      [
        "Put responsibility in the right hands",
        "Owners hold campaign ownership and approval responsibilities. Managers and coordinators manage only the resources permitted by their roles.",
      ],
      [
        "Connect people to areas",
        "Assign field work to the people carrying it out. Workers access their own areas rather than seeing every campaign resource.",
      ],
      [
        "Organise people around activities",
        "Plan events, volunteer shifts and assignments. Reminder delivery depends on consent, provider configuration and region-specific requirements.",
      ],
    ],
  },
};
export function SolutionPage({ kind }: { kind: keyof typeof solutionContent }) {
  const c = solutionContent[kind];
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/solutions">Solutions</Link>
            <span>/</span>
            <span>{c.eyebrow}</span>
          </div>
          <div className="page-hero-split">
            <div>
              <div className="eyebrow">{c.eyebrow}</div>
              <h1>{c.title}</h1>
              <p>{c.description}</p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/book-demo">
                  See it in a demo <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="photo-wrap">
              <img src={c.image.url} alt={c.alt} width={1200} height={800} fetchPriority="high" />
            </div>
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="container feature-layout">
          <div>
            <h2 className="section-heading">{c.heading}</h2>
            <p className="section-description">{c.body}</p>
            <Checks items={c.checks} />
          </div>
          <div className="product-stage">
            <DashboardPreview
              mode={kind === "team" ? "team" : kind === "field" ? "field" : "overview"}
            />
            <div className="product-label">Illustrative interface · Sample data</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="detail-grid">
            {c.details.map(([title, text], i) => (
              <article className="detail-item reveal" key={title}>
                <div className="eyebrow">
                  0{i + 1} / {c.eyebrow}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
            <article className="detail-item reveal">
              <ShieldCheck />
              <h3>Access with clear boundaries</h3>
              <p>
                Campaign membership and role checks govern access. These workflows do not grant
                unrestricted platform administration or access to other campaigns.
              </p>
              <Link to="/platform" className="text-link">
                Explore the complete platform <ArrowRight size={15} />
              </Link>
            </article>
          </div>
        </div>
      </section>
      {kind === "field" && <MobileSection />}
      <FinalCTA />
    </>
  );
}
export function HowItWorksPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-split">
          <div>
            <div className="eyebrow">How Urbayne works</div>
            <h1>
              From a shared plan.
              <br />
              To coordinated action.
            </h1>
            <p>
              Build the campaign context, connect the right people and review the work as it
              unfolds. A clear operational rhythm starts with clear responsibilities.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/book-demo">
                Walk through it with us <ArrowRight />
              </Link>
            </Button>
          </div>
          <img
            src={planning.url}
            alt="Coordinators mapping a campaign workflow together"
            width={1200}
            height={800}
          />
        </div>
      </section>
      <section className="section section-white">
        <div className="container">
          <h2 className="section-heading">Three steps. One connected workflow.</h2>
          <ProcessSteps />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-intro">
            <div>
              <div className="eyebrow">Before your team gets started</div>
              <h2 className="section-heading">Start with the right foundations.</h2>
            </div>
            <p className="section-description">
              A demonstration can help establish the campaign structure, responsibilities and
              region-specific configuration your team needs.
            </p>
          </div>
          <div className="detail-grid">
            {[
              [
                "1. Establish account access",
                "The main application uses administrator-provisioned accounts. Your campaign administrator provides access; sign-in on this website leads to the existing application.",
              ],
              [
                "2. Define campaign context",
                "Campaign owners configure campaign settings, areas and relevant regional requirements. Legal values and approvals must be reviewed for the intended use.",
              ],
              [
                "3. Assign responsibilities",
                "Bring members into the campaign with the appropriate role. Organise area lists, worker assignments and any event or volunteer responsibilities.",
              ],
              [
                "4. Review, then move forward",
                "Use the dashboard and relevant mobile interfaces to review recorded activity. Outbound voice or messaging requires appropriate provider setup, consent and approvals.",
              ],
            ].map(([title, text]) => (
              <article className="detail-item reveal" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">About Urbayne</div>
          <h1>
            Campaigns are built by people.
            <br />
            We connect their work.
          </h1>
          <p>
            Urbayne is a Wayne E Solutions campaign technology project, designed to bring planning,
            teams and field operations into a unified digital system.
          </p>
        </div>
      </section>
      <div className="container photo-wrap">
        <img
          src={team.url}
          alt="The human collaboration at the heart of organised campaign work"
          className="w-full h-[420px] object-cover max-md:h-[280px]"
          width={1600}
          height={800}
        />
      </div>
      <section className="section section-white mt-16">
        <div className="container feature-layout">
          <div>
            <div className="eyebrow">Our perspective</div>
            <h2 className="section-heading">
              Clarity is not an extra.
              <br />
              It’s the foundation.
            </h2>
          </div>
          <div>
            <p className="section-description">
              Campaign operations involve many people, changing priorities and work spread across
              different areas. Information should help people act, not create another layer of
              confusion.
            </p>
            <p className="section-description mt-5">
              Urbayne brings campaign context, responsible access and field activity together. The
              repository includes campaign management, content approvals, contact records, teams and
              dedicated worker-facing interfaces.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="detail-grid">
            {[
              [
                "People before complexity",
                "Focused workflows for the person doing the work, whether they manage campaign settings or record a household visit.",
              ],
              [
                "Responsibility by design",
                "Campaign ownership, platform administration and field roles have different boundaries. Access reflects those responsibilities.",
              ],
              [
                "Honest about what’s available",
                "Capabilities are described from the implementation. Optional providers, demo simulations and future plans are never presented as verified live integrations.",
              ],
              [
                "Designed for connected operations",
                "Campaign structure, approved content, team assignments and recorded activity belong in a coherent operational picture.",
              ],
            ].map(([title, text]) => (
              <article className="detail-item reveal" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function FAQPage() {
  const [expanded, setExpanded] = useState<number | null>(0);
  return (
    <>
      <section className="page-hero">
        <div className="container centered">
          <div className="eyebrow">A little more clarity</div>
          <h1 className="mx-auto">
            Your questions.
            <br />
            Straightforward answers.
          </h1>
          <p className="mx-auto">
            Understand the platform, how access works and what to expect from campaign and field
            workflows.
          </p>
        </div>
      </section>
      <section className="section section-white pt-6">
        <div className="container faq-list">
          {faqs.map(([question, answer], i) => (
            <div className="faq-item" key={question}>
              <h2>
                <Button
                  variant="ghost"
                  className="faq-trigger hover:bg-transparent"
                  aria-expanded={expanded === i}
                  aria-controls={`faq-${i}`}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  {question}
                  <ChevronDown className={expanded === i ? "rotate-180" : ""} />
                </Button>
              </h2>
              {expanded === i && (
                <div className="faq-answer" id={`faq-${i}`}>
                  {answer}
                </div>
              )}
            </div>
          ))}
          <div className="mt-12">
            <h3 className="text-xl font-semibold">Have a different question?</h3>
            <Link to="/contact" className="text-link">
              Prepare an enquiry <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
export function SignInPage() {
  return (
    <section className="section">
      <div className="container form-layout">
        <div>
          <div className="eyebrow">Your Urbayne workspace</div>
          <h1>
            Welcome back.
            <br />
            Let’s get to work.
          </h1>
          <p className="form-description">
            Choose your existing workspace. You’ll continue to the Urbayne application, where your
            account and assigned permissions determine access.
          </p>
          <img
            src={people.url}
            className="form-image"
            alt="Team members ready to begin their campaign work"
            width={1000}
            height={650}
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Continue to your workspace</h2>
          <div className="signin-options">
            {[
              {
                title: "Campaign & administration",
                text: "Campaign dashboard, team and content management",
                url: productLinks.admin,
              },
              {
                title: "Field worker workspace",
                text: "Assigned areas, household visits and outcomes",
                url: productLinks.worker,
              },
              {
                title: "Reporting workspace",
                text: "Permitted station and campaign reporting",
                url: productLinks.reporting,
              },
            ].map(({ title, text, url }) => (
              <a className="signin-option" href={url} key={url}>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowUpRight size={20} className="text-primary shrink-0" />
              </a>
            ))}
          </div>
          <p className="sign-in-note">
            The main application uses email and password sign-in. This website does not collect your
            credentials or change an existing login flow. If you need access or password help, speak
            to your campaign administrator. Availability of the externally hosted application has
            not been verified.
          </p>
          <Link to="/faq" className="text-link">
            Questions about access? <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
const privacySections = [
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
    "Voice, messaging, email and monitoring adapters exist in the repository. Which providers process production data, where that data is processed and the terms governing it must be confirmed for each deployed environment. No provider is asserted to be currently active.",
  ],
  [
    "Retention and requests",
    "The repository contains campaign and constituent-service retention and deletion workflows. Retention periods are configurable and require legal decisions. The final policy must specify applicable periods, how to request access or deletion, identity checks and a verified contact channel.",
  ],
  [
    "This public website",
    "The website uses editorial image assets served through Lovable’s asset infrastructure and fonts loaded from Google Fonts. Those requests can disclose network information to the serving provider. No analytics, advertising pixels or marketing-cookie tracking have been added by this implementation.",
  ],
  [
    "Before this policy can be approved",
    "Confirm the controller identity, contact information, lawful bases, rights, provider list, processing locations, retention schedules, cookie disclosures, breach procedures and any jurisdiction-specific requirements with legal counsel.",
  ],
];
const termsSections = [
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
export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  return (
    <>
      <section className="page-hero">
        <div className="container legal-content">
          <div className="eyebrow">Transparency & responsibility</div>
          <h1>{kind === "privacy" ? "Privacy Policy" : "Terms of Service"}</h1>
          <p>
            {kind === "privacy"
              ? "A clear starting point for how campaign information and website enquiries are handled."
              : "A starting framework for responsible use of the platform and public website."}
          </p>
        </div>
      </section>
      <section className="section section-white pt-10">
        <div className="container legal-content">
          <div className="legal-warning">
            <strong>Draft — pending legal review.</strong>
            <br />
            Approved legal text has not been supplied. These pages must be reviewed and completed by
            the responsible organisation before production launch.
          </div>
          {(kind === "privacy" ? privacySections : termsSections).map(([title, text], i) => (
            <section key={title}>
              <h2>
                {i + 1}. {title}
              </h2>
              <p>{text}</p>
            </section>
          ))}
          <Link to={kind === "privacy" ? "/terms" : "/privacy"} className="text-link">
            {kind === "privacy" ? "Read the draft terms" : "Read the draft privacy policy"}{" "}
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
