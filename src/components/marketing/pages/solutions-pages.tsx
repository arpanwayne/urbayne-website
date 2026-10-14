import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  CloudOff,
  FilePen,
  FileSearch,
  Home as HomeIcon,
  Map,
  MapPin,
  RefreshCw,
  Send,
  ShieldCheck,
  Sunrise,
  UserCog,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "../site-shell";
import { Checks } from "../home";
import { DashboardPreview, PhonePreview } from "../product-preview";
import team from "@/assets/team.jpg.asset.json";
import planning from "@/assets/planning.jpg.asset.json";
import people from "@/assets/people.jpg.asset.json";

/* ───────────────────────── Solutions index ───────────────────────── */

const chapters = [
  {
    n: "01",
    to: "/solutions/campaign-management",
    title: "Campaign management",
    who: "For campaign owners & managers",
    text: "Structure, content approvals and contacts in one campaign-scoped workspace.",
    image: planning,
  },
  {
    n: "02",
    to: "/solutions/field-operations",
    title: "Field operations",
    who: "For field managers & workers",
    text: "Area lists, household visits and outcome capture that keeps working offline.",
    image: people,
  },
  {
    n: "03",
    to: "/solutions/team-coordination",
    title: "Team coordination",
    who: "For coordinators & volunteer leads",
    text: "Clear roles, scoped access, events and volunteer shifts around real people.",
    image: team,
  },
] as const;

const roleFinder = [
  { role: "I run the campaign", pick: 0 },
  { role: "I manage people in the field", pick: 1 },
  { role: "I knock on doors", pick: 1 },
  { role: "I organise volunteers & events", pick: 2 },
  { role: "I coordinate a region", pick: 2 },
  { role: "I approve campaign content", pick: 0 },
];

export function SolutionsPage() {
  const [picked, setPicked] = useState<number | null>(null);
  const match = picked === null ? null : (chapters[roleFinder[picked]?.pick ?? 0] ?? null);
  return (
    <>
      <section className="sol-hero">
        <div className="container">
          <div className="eyebrow">Solutions</div>
          <h1>
            Different jobs.
            <br />
            <span>One connected campaign.</span>
          </h1>
          <p>
            Urbayne is shaped around the people who plan, coordinate and carry out campaign work.
            Start with the job that sounds most like yours.
          </p>
        </div>
        <div className="container sol-index">
          {chapters.map((c) => (
            <Link key={c.n} to={c.to} className="sol-index-item">
              <span>{c.n}</span>
              <strong>{c.title}</strong>
              <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-white">
        <div className="container sol-chapters">
          {chapters.map((c, i) => (
            <article className={`sol-chapter reveal ${i % 2 ? "flip" : ""}`} key={c.n}>
              <div className="sol-chapter-img">
                <img
                  src={c.image.url}
                  alt={`${c.title} at work`}
                  loading="lazy"
                  width={900}
                  height={600}
                />
                <span className="sol-chapter-num">{c.n}</span>
              </div>
              <div className="sol-chapter-copy">
                <div className="eyebrow">{c.who}</div>
                <h2 className="section-heading">{c.title}</h2>
                <p className="section-description">{c.text}</p>
                <Button variant="hero" asChild>
                  <Link to={c.to}>
                    Explore {c.title.toLowerCase()} <ArrowRight />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container sol-finder">
          <div>
            <div className="eyebrow">Not sure where to start?</div>
            <h2 className="section-heading">Tell us what you do.</h2>
            <p className="section-description">Pick the line that sounds most like your day.</p>
            <div className="sol-chips">
              {roleFinder.map((r, i) => (
                <button
                  key={r.role}
                  className={`sol-chip ${picked === i ? "on" : ""}`}
                  aria-pressed={picked === i}
                  onClick={() => setPicked(i)}
                >
                  {r.role}
                </button>
              ))}
            </div>
          </div>
          <div className={`sol-result ${match ? "ready" : ""}`} aria-live="polite">
            {match ? (
              <>
                <span className="sol-result-tag">Your best starting point</span>
                <h3>{match.title}</h3>
                <p>{match.text}</p>
                <Link to={match.to} className="text-link">
                  Open {match.title.toLowerCase()} <ArrowRight size={15} />
                </Link>
              </>
            ) : (
              <>
                <MapPin size={28} className="text-primary" />
                <h3>Your recommendation appears here.</h3>
                <p>Choose a role on the left to see which solution fits it best.</p>
              </>
            )}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

/* ───────────────────── Campaign management ───────────────────── */

const approvalStages = [
  { icon: FilePen, title: "Draft", text: "A member writes or edits campaign content." },
  { icon: FileSearch, title: "Review", text: "Content is submitted to the approval workflow." },
  {
    icon: ShieldCheck,
    title: "Owner approval",
    text: "The campaign owner approves — or sends it back.",
  },
  {
    icon: Send,
    title: "Ready to use",
    text: "Approved content can enter permitted outbound workflows.",
  },
];

export function CampaignManagementPage() {
  const [stage, setStage] = useState(0);
  return (
    <>
      <section className="cm-hero">
        <div className="container cm-hero-grid">
          <div className="cm-hero-copy">
            <div className="breadcrumb">
              <Link to="/solutions">Solutions</Link>
              <span>/</span>
              <span>Campaign management</span>
            </div>
            <div className="eyebrow">Campaign management</div>
            <h1>
              The whole campaign,
              <br />
              in one place.
            </h1>
            <p>
              Structure, content and contacts belong to the campaign — not to someone’s inbox. Give
              every piece of the plan a home and an owner.
            </p>
            <div className="cta-row">
              <Button variant="hero" size="lg" asChild>
                <Link to="/book-demo">
                  See it in a demo <ArrowRight />
                </Link>
              </Button>
              <Link to="/platform" className="text-link">
                Full platform tour <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div className="cm-hero-visual">
            <img
              src={planning.url}
              alt="Campaign leadership reviewing plans"
              width={1200}
              height={800}
            />
            <div className="cm-hero-card">
              <CheckCircle2 size={20} />
              <div>
                <strong>Content approved</strong>
                <span>Owner sign-off recorded · sample</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="centered">
            <div className="eyebrow justify-center">The approval flow</div>
            <h2 className="section-heading">Nothing goes out unreviewed.</h2>
            <p className="section-description mx-auto">
              Click through each stage. Any edit sends content back to draft.
            </p>
          </div>
          <ol className="cm-flow">
            {approvalStages.map((s, i) => (
              <li key={s.title}>
                <button
                  className={`cm-stage ${i <= stage ? "done" : ""} ${i === stage ? "on" : ""}`}
                  onClick={() => setStage(i)}
                  aria-current={i === stage ? "step" : undefined}
                >
                  <span className="cm-stage-icon">
                    <s.icon size={20} />
                  </span>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </button>
              </li>
            ))}
          </ol>
          <div className="cm-flow-note" aria-live="polite">
            Step {stage + 1} of {approvalStages.length}:{" "}
            <strong>{approvalStages[stage]?.title}</strong> — {approvalStages[stage]?.text}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cm-split">
          <div className="product-stage">
            <DashboardPreview mode="overview" />
            <div className="product-label">Illustrative interface · Sample data</div>
          </div>
          <div className="cm-pillars">
            {[
              [
                "Structure with intention",
                "Create the campaign, set regional settings and organise areas. Campaign data stays in its campaign.",
              ],
              [
                "Contacts with context",
                "Keep consent and source information with every contact record, so outreach starts from a clean base.",
              ],
              [
                "Planning linked to activity",
                "Follow dashboard activity, area lists and recorded visits to see how the plan is turning into work.",
              ],
            ].map(([t, d], i) => (
              <div className="cm-pillar reveal" key={t}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

/* ───────────────────────── Field operations ───────────────────────── */

const fieldDay = [
  {
    icon: Sunrise,
    time: "Morning",
    title: "Open the assigned list",
    text: "The worker sees only their own areas and households for the day.",
  },
  {
    icon: HomeIcon,
    time: "On the doorstep",
    title: "Record the outcome",
    text: "Supporter, undecided, needs help — one tap per household. Numbers stay masked.",
  },
  {
    icon: CloudOff,
    time: "No signal",
    title: "Keep working",
    text: "Visits are stored on the device while offline. Nothing is lost.",
  },
  {
    icon: RefreshCw,
    time: "Back online",
    title: "Sync automatically",
    text: "Visits upload once connected, with duplicate-safe submissions.",
  },
  {
    icon: Map,
    time: "Evening",
    title: "Managers see progress",
    text: "Outcomes appear by area in the campaign dashboard for review.",
  },
];

export function FieldOperationsPage() {
  return (
    <>
      <section className="fo-hero">
        <img
          className="fo-hero-img"
          src={people.url}
          alt="Field team members coordinating their work"
          width={1920}
          height={1280}
        />
        <div className="container fo-hero-copy">
          <div className="breadcrumb light">
            <Link to="/solutions">Solutions</Link>
            <span>/</span>
            <span>Field operations</span>
          </div>
          <div className="eyebrow">Field operations</div>
          <h1>
            Built for the street,
            <br />
            <span>not the office.</span>
          </h1>
          <p>
            A focused phone workspace for the people doing the visits, and a clear picture of
            progress for the people planning them.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/book-demo">
              See the worker app <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section section-white">
        <div className="container fo-day">
          <div className="fo-day-head">
            <div className="eyebrow">A day in the field</div>
            <h2 className="section-heading">From first door to final sync.</h2>
            <p className="section-description">
              How a field worker’s day flows through Urbayne — and what managers see at the end of
              it.
            </p>
            <div className="mobile-stage fo-phone">
              <PhonePreview />
              <span className="mobile-caption">Illustrative worker interface · Sample data</span>
            </div>
          </div>
          <ol className="fo-timeline">
            {fieldDay.map((d) => (
              <li className="reveal" key={d.title}>
                <span className="fo-dot">
                  <d.icon size={18} />
                </span>
                <div>
                  <span className="fo-time">{d.time}</span>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fo-stats">
        <div className="container fo-stats-grid">
          {[
            ["Offline-first", "Visits captured without a connection"],
            ["Area-scoped", "Workers only see their assignments"],
            ["Masked", "Household numbers hidden from workers"],
            ["Campaign-entered", "Never presented as official results"],
          ].map(([a, b]) => (
            <div key={a}>
              <strong>{a}</strong>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container feature-layout">
          <div className="product-stage">
            <DashboardPreview mode="field" />
            <div className="product-label">Illustrative field progress · Sample data</div>
          </div>
          <div>
            <div className="eyebrow">For field managers</div>
            <h2 className="section-heading">Turn areas into actionable lists.</h2>
            <p className="section-description">
              Organise area lists, assign workers and review the latest household answers by area —
              without chasing calls and spreadsheets.
            </p>
            <Checks
              items={[
                "Assign areas to the people covering them",
                "Review outcomes by area in the dashboard",
                "Dedicated reporting interface for station agents",
              ]}
            />
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

/* ───────────────────────── Team coordination ───────────────────────── */

const roles = ["Owner", "Manager", "Coordinator", "Worker"] as const;
const matrix: [string, boolean[]][] = [
  ["Campaign settings & approvals", [true, false, false, false]],
  ["Manage campaign resources", [true, true, false, false]],
  ["Coordinate permitted teams", [true, true, true, false]],
  ["Assign areas to workers", [true, true, true, false]],
  ["Plan events & volunteer shifts", [true, true, true, false]],
  ["Record household visits", [false, false, false, true]],
  ["See only own assigned areas", [false, false, false, true]],
];

export function TeamCoordinationPage() {
  return (
    <>
      <section className="tc-hero">
        <div className="container centered">
          <div className="breadcrumb justify-center">
            <Link to="/solutions">Solutions</Link>
            <span>/</span>
            <span>Team coordination</span>
          </div>
          <div className="eyebrow justify-center">Team coordination</div>
          <h1>
            Everyone knows
            <br />
            <span>their part.</span>
          </h1>
          <p className="mx-auto">
            Owners, managers, coordinators and field workers do different jobs. Urbayne connects
            them with clear roles — and keeps access matched to responsibility.
          </p>
        </div>
        <div className="container tc-org" aria-label="Campaign role structure">
          <div className="tc-org-row">
            <div className="tc-node lead">
              <ShieldCheck size={18} /> Campaign owner
            </div>
          </div>
          <div className="tc-org-row">
            <div className="tc-node">
              <UserCog size={18} /> Manager
            </div>
            <div className="tc-node">
              <UserCog size={18} /> Manager
            </div>
          </div>
          <div className="tc-org-row">
            {["North", "Central", "South"].map((r) => (
              <div className="tc-node soft" key={r}>
                <Users size={16} /> {r} coordinator
              </div>
            ))}
          </div>
          <div className="tc-org-row workers">
            {Array.from({ length: 8 }).map((_, i) => (
              <div className="tc-worker" key={i} aria-hidden="true">
                <MapPin size={14} />
              </div>
            ))}
            <span className="tc-worker-label">Field workers · assigned areas</span>
          </div>
          <span className="product-label">Illustrative structure</span>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-intro">
            <div>
              <div className="eyebrow">Who can do what</div>
              <h2 className="section-heading">Access matched to responsibility.</h2>
            </div>
            <p className="section-description">
              A simplified view of how campaign roles divide the work. Platform administration is
              separate from all of these.
            </p>
          </div>
          <div className="tc-matrix-wrap">
            <table className="tc-matrix">
              <thead>
                <tr>
                  <th scope="col">Responsibility</th>
                  {roles.map((r) => (
                    <th scope="col" key={r}>
                      {r}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.map(([label, cells]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    {cells.map((on, i) => (
                      <td key={roles[i]}>
                        {on ? (
                          <Check size={17} className="tc-yes" aria-label="Yes" />
                        ) : (
                          <X size={15} className="tc-no" aria-label="No" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container tc-cards">
          {[
            {
              title: "Put responsibility in the right hands",
              text: "Owners hold ownership and approvals. Managers and coordinators manage only what their role permits.",
            },
            {
              title: "Connect people to places",
              text: "Assign field work to the people carrying it out. Workers see their own areas, not the whole campaign.",
            },
            {
              title: "Organise around activities",
              text: "Plan events, volunteer shifts and assignments. Reminders depend on consent, provider setup and region.",
            },
          ].map((c, i) => (
            <article className="tc-card reveal" key={c.title}>
              <span className="tc-card-num">0{i + 1}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
          <article className="tc-card photo reveal">
            <img
              src={team.url}
              alt="A campaign team working together"
              loading="lazy"
              width={800}
              height={600}
            />
            <div>
              <h3>Meet the people building Urbayne</h3>
              <Link to="/team" className="text-link light">
                Our team <ArrowRight size={15} />
              </Link>
            </div>
          </article>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
