import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Eye, HeartHandshake, Layers, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "../site-shell";
import team from "@/assets/team.jpg.asset.json";
import planning from "@/assets/planning.jpg.asset.json";
import people from "@/assets/people.jpg.asset.json";

/* ─────────────────────────────── About ─────────────────────────────── */

export function AboutPage() {
  return (
    <>
      <section className="ab-hero">
        <div className="container ab-hero-grid">
          <div>
            <div className="eyebrow">About Urbayne</div>
            <h1>
              Campaigns are built by people.
              <br />
              <span>We connect their work.</span>
            </h1>
            <p>
              Urbayne is a campaign technology platform from Wayne E Solutions — designed to bring
              planning, teams and field operations into one clear, connected system.
            </p>
          </div>
          <img
            className="ab-hero-mark"
            src="/brand/urbayne-mark-light.png"
            alt=""
            aria-hidden="true"
            width={256}
            height={326}
          />
        </div>
      </section>

      <section className="ab-collage">
        <div className="container ab-collage-grid">
          <img src={team.url} alt="A team collaborating around a table" width={1200} height={800} />
          <img
            src={planning.url}
            alt="Planning a campaign together"
            loading="lazy"
            width={800}
            height={600}
          />
          <img
            src={people.url}
            alt="Coordinating work across a team"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
      </section>

      <section className="section section-white">
        <div className="container ab-story">
          <div className="ab-story-side">
            <div className="eyebrow">Our story</div>
            <h2 className="section-heading">Why we built Urbayne.</h2>
          </div>
          <div className="ab-story-body">
            <p className="ab-lead">
              Campaign work is spread across many people, many places and constantly changing
              priorities. Too often it lives in group chats, spreadsheets and phone calls.
            </p>
            <p>
              We saw campaign teams spending more time chasing updates than doing the work. Owners
              couldn’t see what was happening on the ground; field workers didn’t have simple tools;
              coordinators were stuck in the middle relaying messages.
            </p>
            <p>
              Urbayne gives each of them a clear place: a campaign-scoped workspace for planning and
              approvals, role-based access for teams, and a focused mobile workspace for field
              visits — all feeding the same picture.
            </p>
          </div>
        </div>
      </section>

      <section className="ab-quote">
        <div className="container">
          <blockquote>
            “Clarity isn’t an extra feature.{" "}
            <span>It’s the foundation everything else stands on.</span>”
          </blockquote>
          <cite>— The Urbayne team</cite>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">What we believe</div>
          <h2 className="section-heading">Four principles behind the product.</h2>
          <ol className="ab-values">
            {[
              {
                icon: HeartHandshake,
                t: "People before complexity",
                d: "Focused workflows for the person doing the work — whether they manage settings or record a doorstep visit.",
              },
              {
                icon: Compass,
                t: "Responsibility by design",
                d: "Ownership, administration and field roles have different boundaries, and access reflects them.",
              },
              {
                icon: Eye,
                t: "Honest about what’s available",
                d: "We describe what the product does today. Optional providers and future plans are never sold as live.",
              },
              {
                icon: Layers,
                t: "Connected operations",
                d: "Structure, approved content, assignments and recorded activity belong in one coherent picture.",
              },
            ].map(({ icon: Icon, t, d }, i) => (
              <li key={t} className="reveal">
                <span className="ab-value-num">0{i + 1}</span>
                <Icon className="ab-value-icon" />
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-white">
        <div className="container ab-maker">
          <div>
            <div className="eyebrow">Made by Wayne E Solutions</div>
            <h2 className="section-heading">A product team, not a template.</h2>
            <p className="section-description">
              Wayne E Solutions is a software and digital agency working with organisations in India
              and Canada. Urbayne is one of the products our in-house team designs, builds and
              supports.
            </p>
            <div className="cta-row">
              <Button variant="hero" asChild>
                <Link to="/team">
                  Meet the team <ArrowRight />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
          <div className="ab-maker-facts">
            <div>
              <MapPin />
              <strong>Ludhiana, Punjab</strong>
              <span>Where the team is based</span>
            </div>
            <div>
              <Sparkles />
              <strong>India & Canada</strong>
              <span>Where we work with clients</span>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

/* ─────────────────────────────── Team ─────────────────────────────── */

type Member = { initials: string; name: string; role: string; group: "lead" | "design" | "build" };

export const TEAM: Member[] = [
  { initials: "PT", name: "Pankaj Thakur", role: "Founder & Director", group: "lead" },
  { initials: "PK", name: "Pavnoor Kaur", role: "Co-founder", group: "lead" },
  { initials: "PM", name: "Piyush Mehndiratta", role: "Marketing Head", group: "design" },
  { initials: "SM", name: "Surbhi Mehndiratta", role: "Graphic Designer", group: "design" },
  { initials: "BK", name: "Baljeet Kaur", role: "Graphic Designer", group: "design" },
  { initials: "SK", name: "Sant Kaur", role: "Senior Software Developer", group: "build" },
  { initials: "MK", name: "Mandeep Kaur", role: "Senior Web Developer", group: "build" },
  { initials: "AS", name: "Arpan Saini", role: "Software Developer", group: "build" },
];

const groups = [
  {
    id: "design",
    title: "Brand & growth",
    text: "Shaping how Urbayne looks, sounds and reaches campaign teams.",
  },
  {
    id: "build",
    title: "Engineering",
    text: "Designing, building and supporting the platform and its mobile workspaces.",
  },
] as const;

export function TeamPage() {
  const leads = TEAM.filter((m) => m.group === "lead");
  return (
    <>
      <section className="tm-hero">
        <div className="tm-glow" aria-hidden="true" />
        <div className="container">
          <div className="eyebrow">The people behind Urbayne</div>
          <h1>
            Meet the team
            <br />
            <span>behind Urbayne.</span>
          </h1>
          <p>
            Urbayne is built by Wayne E Solutions — a small, hands-on team in Ludhiana, Punjab,
            building the tools we’d want if we were running the campaign ourselves.
          </p>
          <div className="tm-hero-stack" aria-hidden="true">
            {TEAM.map((m) => (
              <span key={m.name}>{m.initials}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="eyebrow">Leadership</div>
          <div className="tm-leads">
            {leads.map((m) => (
              <article className="tm-lead reveal" key={m.name}>
                <div className="tm-avatar xl">{m.initials}</div>
                <div>
                  <h2>{m.name}</h2>
                  <p className="tm-role">{m.role}</p>
                  <p className="tm-bio">
                    {m.role === "Founder & Director"
                      ? "Leads Wayne E Solutions and sets product direction for Urbayne."
                      : "Co-founded Wayne E Solutions and helps shape how the team builds and delivers."}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {groups.map((g) => (
            <div className="tm-group" key={g.id}>
              <div className="tm-group-head">
                <h2>{g.title}</h2>
                <p>{g.text}</p>
              </div>
              <div className="tm-grid">
                {TEAM.filter((m) => m.group === g.id).map((m) => (
                  <article className="tm-card reveal" key={m.name}>
                    <div className={`tm-avatar ${g.id}`}>{m.initials}</div>
                    <h3>{m.name}</h3>
                    <p>{m.role}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tm-cta">
            <img
              src="/brand/urbayne-mark-light.png"
              alt=""
              aria-hidden="true"
              width={120}
              height={153}
            />
            <div>
              <h2>Want to talk to us directly?</h2>
              <p>We’re happy to walk you through Urbayne and how it fits your campaign.</p>
            </div>
            <div className="cta-row">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/book-demo">
                  Book a demo <ArrowRight />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
