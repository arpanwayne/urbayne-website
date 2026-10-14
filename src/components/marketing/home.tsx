import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowDown,
  Check,
  ShieldCheck,
  Layers,
  Users,
  MapPin,
  BarChart3,
  CircleCheck,
  Smartphone,
  LockKeyhole,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DashboardPreview,
  FloatingUpdate,
  PhonePreview,
  type PreviewMode,
} from "./product-preview";
import { FinalCTA } from "./site-shell";
import { team, planning, people } from "@/assets/photos";
export function Checks({ items }: { items: string[] }) {
  return (
    <ul className="feature-checks">
      {items.map((item) => (
        <li key={item}>
          <Check />
          {item}
        </li>
      ))}
    </ul>
  );
}
export function ProcessSteps() {
  return (
    <div className="steps">
      {[
        [
          "01",
          "Set Up Your Campaign",
          "Create the campaign structure, define areas, and prepare content for the appropriate approval workflow.",
        ],
        [
          "02",
          "Coordinate Your Team",
          "Assign campaign roles, organise area lists and connect people with the work they’re responsible for.",
        ],
        [
          "03",
          "Monitor Progress",
          "Review recorded visits, campaign activity and available reports in the relevant campaign workspace.",
        ],
      ].map(([number, title, text]) => (
        <div className="step reveal" key={number}>
          <div className="step-number">{number}</div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
export function RoleSection() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-intro reveal">
          <div>
            <div className="eyebrow">Built around responsibilities</div>
            <h2 className="section-heading">
              The right workspace.
              <br />
              For every role.
            </h2>
          </div>
          <p className="section-description">
            Different responsibilities. Clear boundaries. A shared direction — without giving
            everyone the same access.
          </p>
        </div>
        <div className="roles-grid">
          {[
            {
              icon: ShieldCheck,
              title: "Platform administrators",
              text: "Superadmins provision and manage accounts. Platform staff support access is separate, read-only, reason-based and logged — not unrestricted campaign ownership.",
            },
            {
              icon: Users,
              title: "Campaign owners & managers",
              text: "Owners manage campaign settings and approvals. Managers coordinate campaign resources, while coordinators work within their permitted team and area responsibilities.",
            },
            {
              icon: MapPin,
              title: "Field teams & workers",
              text: "Workers see their assigned areas and household workflows. Reporting agents work within assigned stations. Practical access, scoped to the job at hand.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article className="role reveal" key={title}>
              <div className="role-icon">
                <Icon size={21} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function MobileSection() {
  return (
    <section className="section mobile-section">
      <div className="container feature-layout reverse">
        <div className="feature-media mobile-stage reveal">
          <PhonePreview />
          <span className="mobile-caption">Illustrative worker interface · Sample data</span>
        </div>
        <div className="reveal">
          <div className="eyebrow">Made for the moments that matter</div>
          <h2 className="section-heading">
            Your campaign doesn’t
            <br />
            stay behind a desk.
            <br />
            <span>Neither should your tools.</span>
          </h2>
          <p className="section-description">
            Give field workers a focused mobile workspace for assigned areas, household visits and
            recorded outcomes.
          </p>
          <Checks
            items={[
              "Dedicated worker and reporting interfaces",
              "Offline visit capture that syncs when connected",
              "Role-scoped access to assigned areas",
            ]}
          />
          <Link to="/solutions/field-operations" className="text-link">
            Explore field operations <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function SolutionsCards() {
  return (
    <div className="solutions-grid">
      {[
        {
          title: "Campaign leadership",
          text: "See the moving parts clearly. Align campaign structure, approved content and operational activity.",
          to: "/solutions/campaign-management",
          image: planning,
        },
        {
          title: "Field operations",
          text: "Turn campaign plans into practical area lists, recorded visits and coordinated field activity.",
          to: "/solutions/field-operations",
          image: people,
        },
        {
          title: "Team coordination",
          text: "Bring distributed teams together with clear roles, assigned areas and shared responsibilities.",
          to: "/solutions/team-coordination",
          image: team,
        },
      ].map(({ title, text, to, image }) => (
        <article className="solution-card reveal" key={title}>
          <div className="photo-wrap">
            <img
              src={image.url}
              alt={`${title}: professionals collaborating on campaign plans`}
              loading="lazy"
              width={800}
              height={500}
            />
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
          <Link
            to={
              to as
                | "/solutions/campaign-management"
                | "/solutions/field-operations"
                | "/solutions/team-coordination"
            }
            className="text-link"
          >
            Explore the solution <ArrowRight size={15} />
          </Link>
        </article>
      ))}
    </div>
  );
}
export function ProductShowcase() {
  const [mode, setMode] = useState<PreviewMode>("overview");
  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase-top reveal">
          <div>
            <div className="eyebrow">One connected perspective</div>
            <h2 className="section-heading">
              Less searching.
              <br />
              More understanding.
            </h2>
            <p className="section-description text-hero-muted">
              A clearer view of your campaign, your people and the work in motion.
            </p>
          </div>
          <div className="showcase-tabs" role="tablist" aria-label="Product preview">
            <Button
              id="preview-overview"
              role="tab"
              aria-selected={mode === "overview"}
              aria-controls="preview-panel"
              variant={mode === "overview" ? "hero" : "glass"}
              onClick={() => setMode("overview")}
            >
              Campaign overview
            </Button>
            <Button
              id="preview-team"
              role="tab"
              aria-selected={mode === "team"}
              aria-controls="preview-panel"
              variant={mode === "team" ? "hero" : "glass"}
              onClick={() => setMode("team")}
            >
              Team management
            </Button>
            <Button
              id="preview-field"
              role="tab"
              aria-selected={mode === "field"}
              aria-controls="preview-panel"
              variant={mode === "field" ? "hero" : "glass"}
              onClick={() => setMode("field")}
            >
              Field progress
            </Button>
          </div>
        </div>
        <div
          className="showcase-stage reveal"
          id="preview-panel"
          role="tabpanel"
          aria-labelledby={`preview-${mode}`}
        >
          <DashboardPreview mode={mode} />
          <div className="product-label">
            Illustrative interface based on implemented workflows. Sample data — not a live
            campaign.
          </div>
        </div>
      </div>
    </section>
  );
}
export function Home() {
  return (
    <>
      <section className="hero">
        <img
          className="hero-photo"
          src={team.url}
          alt="A diverse team of campaign coordinators collaborating around a table"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="container hero-layout">
          <div className="hero-copy entrance">
            <div className="eyebrow">
              <span className="status-dot" /> Campaign operations. Beautifully connected.
            </div>
            <h1>
              Bring Every
              <br />
              Campaign <span>Into Focus.</span>
            </h1>
            <p>
              Plan smarter, coordinate your teams, and bring campaign operations together in one
              connected platform.
            </p>
            <div className="cta-row">
              <Button variant="hero" size="lg" asChild>
                <Link to="/platform">
                  Explore the Platform <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/book-demo">
                  Book a Demo <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="hero-note">
              <ShieldCheck size={14} /> Clear roles. Connected teams. Organised operations.
            </div>
          </div>
          <div className="hero-product entrance delay">
            <DashboardPreview />
            <FloatingUpdate />
            <div className="product-label">Product preview · Illustrative data</div>
          </div>
          <div className="hero-bottom">
            <span>
              <ArrowDown size={12} /> A clearer view starts here
            </span>
            <span>
              Built for the people behind every campaign <span className="text-lavender">↗</span>
            </span>
          </div>
        </div>
      </section>
      <section className="capability-band">
        <div className="container capability-inner">
          <p>
            One platform.
            <br />
            Every moving part.
          </p>
          {[
            { icon: Layers, text: "Campaign Management" },
            { icon: Users, text: "Team Coordination" },
            { icon: MapPin, text: "Field Operations" },
            { icon: BarChart3, text: "Progress Tracking" },
          ].map(({ icon: Icon, text }) => (
            <div className="capability-item" key={text}>
              <Icon />
              {text}
            </div>
          ))}
        </div>
      </section>
      <section className="section section-white">
        <div className="container">
          <div className="section-intro reveal">
            <div>
              <div className="eyebrow">Clarity is your advantage</div>
              <h2 className="section-heading">
                Great campaigns need more
                <br />
                than a great plan.
              </h2>
            </div>
            <div>
              <p className="section-description">
                They need people, information and action moving together. Urbayne connects the
                everyday work that makes a campaign happen.
              </p>
              <Link to="/platform" className="text-link">
                Meet your campaign workspace <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="feature-layout">
            <div className="feature-media reveal">
              <div className="photo-wrap">
                <img
                  className="editorial-photo"
                  src={planning.url}
                  alt="Campaign managers reviewing a plan together at a working table"
                  width={1400}
                  height={950}
                  loading="lazy"
                />
              </div>
              <div className="media-note">
                <Layers size={26} />
                <div>
                  <strong>From separate tasks to shared direction.</strong>
                  <p>Campaign structure, content and teams — connected.</p>
                </div>
              </div>
            </div>
            <div className="reveal">
              <div className="eyebrow">01 / Campaign management</div>
              <h2 className="section-heading">
                A place for the plan.
                <br />
                And everyone behind it.
              </h2>
              <p className="section-description">
                Bring campaign settings, content approvals and contact management into a
                campaign-scoped workspace. Keep the work organised, and the next step clear.
              </p>
              <Checks
                items={[
                  "Campaign structure and regional settings",
                  "Content drafting and owner-led approvals",
                  "Contacts, consent records and area organisation",
                ]}
              />
              <Link to="/solutions/campaign-management" className="text-link">
                Discover campaign management <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container feature-layout reverse">
          <div className="feature-media product-stage reveal">
            <DashboardPreview mode="team" />
            <div className="product-label">Illustrative team workspace · Sample data</div>
          </div>
          <div className="reveal">
            <div className="eyebrow">02 / People & coordination</div>
            <h2 className="section-heading">
              Many people.
              <br />
              <span>One shared direction.</span>
            </h2>
            <p className="section-description">
              Give your campaign’s people a clear place in the team. Connect roles, area assignments
              and operational responsibilities without losing sight of who does what.
            </p>
            <Checks
              items={[
                "Campaign membership and role-based access",
                "Area lists and assigned field workers",
                "Events, volunteer shifts and responsibilities",
              ]}
            />
            <Link to="/solutions/team-coordination" className="text-link">
              Bring your team together <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="container feature-layout">
          <div className="feature-media reveal">
            <div className="photo-wrap">
              <img
                className="editorial-photo"
                src={people.url}
                alt="Professionals coordinating their work and communicating as a team"
                width={1200}
                height={800}
                loading="lazy"
              />
            </div>
            <div className="media-note">
              <CircleCheck size={27} />
              <div>
                <strong>Activity you can follow.</strong>
                <p>Recorded visits. Assigned areas. Clearer progress.</p>
              </div>
            </div>
          </div>
          <div className="reveal">
            <div className="eyebrow">03 / Field activity & progress</div>
            <h2 className="section-heading">
              Stay close to the work.
              <br />
              Even when it’s far away.
            </h2>
            <p className="section-description">
              Connect field visits with campaign oversight. Review outcomes by area, follow recorded
              activity and keep distributed operations in perspective.
            </p>
            <Checks
              items={[
                "Household visit outcomes and area progress",
                "Worker-facing canvassing workflows",
                "Campaign-reported activity and reporting",
              ]}
            />
            <Link to="/solutions/field-operations" className="text-link">
              See field operations in focus <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="centered reveal">
            <div className="eyebrow">A simpler rhythm</div>
            <h2 className="section-heading">From the first plan to the next move.</h2>
            <p className="section-description">
              Three connected steps. A more organised way to work.
            </p>
          </div>
          <ProcessSteps />
          <div className="centered mt-8">
            <Link to="/how-it-works" className="text-link">
              See how Urbayne works <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <ProductShowcase />
      <RoleSection />
      <MobileSection />
      <section className="section section-white">
        <div className="container">
          <div className="section-intro reveal">
            <div>
              <div className="eyebrow">Different teams. Shared challenges.</div>
              <h2 className="section-heading">Built for your kind of work.</h2>
            </div>
            <Link to="/solutions" className="text-link">
              Explore all solutions <ArrowRight size={16} />
            </Link>
          </div>
          <SolutionsCards />
        </div>
      </section>
      <section className="section">
        <div className="container trust-strip">
          <div className="reveal">
            <LockKeyhole className="trust-icon" />
            <h3>Clear boundaries. Considered access.</h3>
            <p>
              Campaign-scoped membership, role checks and tenant-level data isolation underpin the
              application. Access is designed around responsibility — not a one-size-fits-all
              workspace.
            </p>
            <Link to="/privacy" className="text-link">
              Our approach to data handling <ArrowRight size={15} />
            </Link>
          </div>
          <div className="reveal">
            <Workflow className="trust-icon" />
            <h3>Connected by design. Honest by default.</h3>
            <p>
              Voice and SMS capabilities depend on provider configuration, region and required
              approvals. We don’t present unconfigured adapters as active integrations, or campaign
              reports as official results.
            </p>
            <Link to="/faq" className="text-link">
              Explore platform questions <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
