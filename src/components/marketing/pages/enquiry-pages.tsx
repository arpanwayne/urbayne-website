import { Link } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  HelpCircle,
  Handshake,
  KeyRound,
  MessagesSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { enquirySchema, prepareEnquiry, type Enquiry } from "@/lib/enquiry";

const roleOptions = [
  "Campaign owner",
  "Campaign manager",
  "Regional coordinator",
  "Field operations",
  "Administrator",
  "Other",
];

function downloadEnquiry(data: Enquiry, kind: "contact" | "demo") {
  const url = URL.createObjectURL(
    new Blob([prepareEnquiry(data, kind)], { type: "text/plain;charset=utf-8" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = `urbayne-${kind}-request.txt`;
  a.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const notSentStatus =
  "Your request file is ready. It has not been sent to Urbayne — enquiry delivery isn’t configured yet. Keep it for your records.";

function FieldError({ id, msg }: { id: string; msg?: string | undefined }) {
  return msg ? (
    <span className="field-error" id={`${id}-error`}>
      {msg}
    </span>
  ) : null;
}

/* ─────────────────────────────── Contact ─────────────────────────────── */

const topics = [
  {
    id: "product",
    icon: MessagesSquare,
    title: "Product question",
    text: "How Urbayne works, what it covers, how it would fit your campaign.",
  },
  {
    id: "partner",
    icon: Handshake,
    title: "Partnership",
    text: "Working with us as an agency, reseller or regional partner.",
  },
  {
    id: "other",
    icon: HelpCircle,
    title: "Something else",
    text: "Press, feedback or anything that doesn’t fit the boxes.",
  },
] as const;

export function ContactPage() {
  const [topic, setTopic] = useState<string>("product");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function pick(id: string) {
    setTopic(id);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(
      () => formRef.current?.querySelector<HTMLInputElement>("#c-name")?.focus(),
      350,
    );
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");
    const v = new FormData(e.currentTarget);
    const topicLabel = topics.find((t) => t.id === topic)?.title ?? "General";
    const result = enquirySchema.safeParse({
      name: v.get("name"),
      email: v.get("email"),
      organisation: v.get("organisation"),
      role: v.get("role"),
      message: v.get("message"),
      consent: v.get("consent") === "on",
    });
    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((i) => (next[String(i.path[0])] = i.message));
      setErrors(next);
      e.currentTarget
        .querySelector<HTMLElement>(`[name="${result.error.issues[0]?.path[0]}"]`)
        ?.focus();
      return;
    }
    setErrors({});
    try {
      downloadEnquiry(
        { ...result.data, message: `Topic: ${topicLabel}\n${result.data.message}` },
        "contact",
      );
      setStatus(notSentStatus);
    } catch {
      setStatus("The file could not be prepared. Nothing has been sent. Please try again.");
    }
  }

  return (
    <>
      <section className="ct-hero">
        <div className="container">
          <div className="eyebrow">Contact</div>
          <h1>
            Let’s talk about
            <br />
            <span>your campaign.</span>
          </h1>
          <p>Pick what your message is about — we’ll set up the form for you.</p>
          <div className="ct-topics">
            {topics.map((t) => (
              <button
                key={t.id}
                className={`ct-topic ${topic === t.id ? "on" : ""}`}
                onClick={() => pick(t.id)}
                aria-pressed={topic === t.id}
              >
                <t.icon size={22} />
                <strong>{t.title}</strong>
                <span>{t.text}</span>
                <ArrowRight size={16} className="ct-topic-arrow" />
              </button>
            ))}
            <Link to="/sign-in" className="ct-topic">
              <KeyRound size={22} />
              <strong>I already have an account</strong>
              <span>Access or password help comes from your campaign administrator.</span>
              <ArrowRight size={16} className="ct-topic-arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container ct-grid">
          <form className="enquiry-form ct-form" onSubmit={submit} noValidate ref={formRef}>
            <div className="ct-form-head">
              <h2>Send us a message</h2>
              <span className="ct-topic-pill">
                Topic: {topics.find((t) => t.id === topic)?.title}
              </span>
            </div>
            <div className="form-notice">
              <strong>Enquiry delivery is not configured yet.</strong> This form checks your details
              and downloads a request file; it does not send it.
            </div>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="c-name">Full name *</label>
                <input
                  id="c-name"
                  name="name"
                  autoComplete="name"
                  maxLength={120}
                  aria-invalid={!!errors["name"]}
                  aria-describedby={errors["name"] ? "name-error" : undefined}
                />
                <FieldError id="name" msg={errors["name"]} />
              </div>
              <div className="form-field">
                <label htmlFor="c-email">Work email *</label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  aria-invalid={!!errors["email"]}
                  aria-describedby={errors["email"] ? "email-error" : undefined}
                />
                <FieldError id="email" msg={errors["email"]} />
              </div>
            </div>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="c-org">Organisation *</label>
                <input
                  id="c-org"
                  name="organisation"
                  autoComplete="organization"
                  maxLength={160}
                  aria-invalid={!!errors["organisation"]}
                  aria-describedby={errors["organisation"] ? "organisation-error" : undefined}
                />
                <FieldError id="organisation" msg={errors["organisation"]} />
              </div>
              <div className="form-field">
                <label htmlFor="c-role">Your role *</label>
                <select
                  id="c-role"
                  name="role"
                  defaultValue=""
                  aria-invalid={!!errors["role"]}
                  aria-describedby={errors["role"] ? "role-error" : undefined}
                >
                  <option value="" disabled>
                    Select your role
                  </option>
                  {roleOptions.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <FieldError id="role" msg={errors["role"]} />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="c-msg">Message *</label>
              <textarea
                id="c-msg"
                name="message"
                maxLength={2900}
                placeholder="Tell us what you’d like to know."
                aria-invalid={!!errors["message"]}
                aria-describedby={errors["message"] ? "message-error" : undefined}
              />
              <FieldError id="message" msg={errors["message"]} />
            </div>
            <label className="consent-line">
              <input name="consent" type="checkbox" aria-invalid={!!errors["consent"]} />
              <span>
                I’ve read the <Link to="/privacy">privacy information</Link> and understand this
                request is prepared locally, not sent.
              </span>
            </label>
            <FieldError id="consent" msg={errors["consent"]} />
            <Button variant="hero" type="submit" size="lg" className="w-full mt-4">
              <Download /> Download my message
            </Button>
            {status && (
              <div role="status" className="form-status">
                {status}
              </div>
            )}
          </form>
          <aside className="ct-aside">
            <h3>What happens next</h3>
            <ol className="ct-steps">
              <li>
                <span>1</span>Your message is prepared as a file you keep.
              </li>
              <li>
                <span>2</span>Once enquiry delivery is switched on, it will reach the Urbayne team
                directly.
              </li>
              <li>
                <span>3</span>We reply with answers or a time to talk.
              </li>
            </ol>
            <div className="ct-aside-card">
              <strong>Prefer to see it live?</strong>
              <p>A demo request lets you tell us exactly what to show.</p>
              <Link to="/book-demo" className="text-link">
                Book a demo <ArrowRight size={14} />
              </Link>
            </div>
            <div className="ct-aside-card muted">
              <strong>Quick answers</strong>
              <p>Roles, offline work, integrations and more.</p>
              <Link to="/faq" className="text-link">
                Browse the FAQ <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

/* ───────────────────────────── Book a demo ───────────────────────────── */

const interests = [
  "Campaign setup & areas",
  "Content approvals",
  "Contacts & consent",
  "Team roles & access",
  "Field worker app",
  "Offline visits",
  "Events & volunteer shifts",
  "Progress reporting",
];
const sizes = ["Under 25 people", "25–100 people", "100–500 people", "500+ people"];

export function DemoPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    organisation: "",
    role: "",
    size: "",
    region: "",
    notes: "",
  });
  const [picked, setPicked] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const steps = ["About you", "Your campaign", "What to show", "Review"];

  const set = (k: keyof typeof data) => (e: { target: { value: string } }) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  const message = [
    picked.length ? `Interested in: ${picked.join(", ")}.` : "",
    data.size ? `Team size: ${data.size}.` : "",
    data.region ? `Region: ${data.region}.` : "",
    data.notes,
  ]
    .filter(Boolean)
    .join(" ");

  function validate(s: number) {
    const e: Record<string, string> = {};
    if (s === 0) {
      const r = enquirySchema
        .pick({ name: true, email: true, organisation: true, role: true })
        .safeParse(data);
      if (!r.success) r.error.issues.forEach((i) => (e[String(i.path[0])] = i.message));
    }
    if (s === 1 && !data.size) e["size"] = "Please choose an approximate team size.";
    if (s === 2 && picked.length === 0 && data.notes.trim().length < 10)
      e["picked"] = "Pick at least one area, or describe what you’d like to see.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validate(step)) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function submit(ev: FormEvent) {
    ev.preventDefault();
    if (step < steps.length - 1) return next();
    const result = enquirySchema.safeParse({ ...data, message, consent });
    if (!result.success) {
      const e: Record<string, string> = {};
      result.error.issues.forEach((i) => (e[String(i.path[0])] = i.message));
      setErrors(e);
      return;
    }
    try {
      downloadEnquiry(result.data, "demo");
      setStatus(notSentStatus);
    } catch {
      setStatus("The file could not be prepared. Nothing has been sent. Please try again.");
    }
  }

  return (
    <section className="dm-wrap">
      <div className="container dm-grid">
        <div className="dm-intro">
          <div className="eyebrow">Book a demo</div>
          <h1>
            See Urbayne
            <br />
            <span>on your campaign.</span>
          </h1>
          <p>
            Four quick steps. Tell us who you are and what matters, and we’ll shape the walkthrough
            around it.
          </p>
          <ul className="dm-promise">
            {[
              "A walkthrough built around your workflows",
              "Field app and dashboard, side by side",
              "Honest answers on region & provider setup",
            ].map((t) => (
              <li key={t}>
                <Check size={16} /> {t}
              </li>
            ))}
          </ul>
        </div>

        <form className="dm-card" onSubmit={submit} noValidate>
          <ol className="dm-progress" aria-label="Progress">
            {steps.map((s, i) => (
              <li
                key={s}
                className={i < step ? "done" : i === step ? "on" : ""}
                aria-current={i === step ? "step" : undefined}
              >
                <span>{i < step ? <Check size={13} /> : i + 1}</span>
                {s}
              </li>
            ))}
          </ol>

          {step === 0 && (
            <div className="dm-step">
              <h2>About you</h2>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="d-name">Full name *</label>
                  <input
                    id="d-name"
                    value={data.name}
                    onChange={set("name")}
                    autoComplete="name"
                    maxLength={120}
                    aria-invalid={!!errors["name"]}
                  />
                  <FieldError id="name" msg={errors["name"]} />
                </div>
                <div className="form-field">
                  <label htmlFor="d-email">Work email *</label>
                  <input
                    id="d-email"
                    type="email"
                    value={data.email}
                    onChange={set("email")}
                    autoComplete="email"
                    maxLength={254}
                    aria-invalid={!!errors["email"]}
                  />
                  <FieldError id="email" msg={errors["email"]} />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="d-org">Organisation or campaign *</label>
                <input
                  id="d-org"
                  value={data.organisation}
                  onChange={set("organisation")}
                  autoComplete="organization"
                  maxLength={160}
                  aria-invalid={!!errors["organisation"]}
                />
                <FieldError id="organisation" msg={errors["organisation"]} />
              </div>
              <fieldset className="dm-roles">
                <legend>Your role *</legend>
                {roleOptions.map((r) => (
                  <button
                    type="button"
                    key={r}
                    className={`sol-chip ${data.role === r ? "on" : ""}`}
                    aria-pressed={data.role === r}
                    onClick={() => setData((d) => ({ ...d, role: r }))}
                  >
                    {r}
                  </button>
                ))}
              </fieldset>
              <FieldError id="role" msg={errors["role"]} />
            </div>
          )}

          {step === 1 && (
            <div className="dm-step">
              <h2>Your campaign</h2>
              <fieldset className="dm-sizes">
                <legend>Approximate team size *</legend>
                {sizes.map((s) => (
                  <label key={s} className={`dm-size ${data.size === s ? "on" : ""}`}>
                    <input
                      type="radio"
                      name="size"
                      value={s}
                      checked={data.size === s}
                      onChange={set("size")}
                    />
                    {s}
                  </label>
                ))}
              </fieldset>
              <FieldError id="size" msg={errors["size"]} />
              <div className="form-field mt-5">
                <label htmlFor="d-region">Region or city (optional)</label>
                <input
                  id="d-region"
                  value={data.region}
                  onChange={set("region")}
                  maxLength={120}
                  placeholder="Where does your campaign operate?"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="dm-step">
              <h2>What should we show you?</h2>
              <div className="dm-interests">
                {interests.map((i) => {
                  const on = picked.includes(i);
                  return (
                    <button
                      type="button"
                      key={i}
                      className={`dm-interest ${on ? "on" : ""}`}
                      aria-pressed={on}
                      onClick={() => setPicked((p) => (on ? p.filter((x) => x !== i) : [...p, i]))}
                    >
                      <span className="dm-check">{on && <Check size={12} />}</span>
                      {i}
                    </button>
                  );
                })}
              </div>
              <div className="form-field mt-5">
                <label htmlFor="d-notes">Anything specific? (optional)</label>
                <textarea
                  id="d-notes"
                  value={data.notes}
                  onChange={set("notes")}
                  maxLength={2000}
                  placeholder="Workflows you care about, timelines, questions…"
                />
              </div>
              <FieldError id="picked" msg={errors["picked"]} />
            </div>
          )}

          {step === 3 && (
            <div className="dm-step">
              <h2>Review your request</h2>
              <dl className="dm-review">
                <div>
                  <dt>Name</dt>
                  <dd>{data.name}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>{data.email}</dd>
                </div>
                <div>
                  <dt>Organisation</dt>
                  <dd>{data.organisation}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{data.role}</dd>
                </div>
                <div className="wide">
                  <dt>Request</dt>
                  <dd>{message}</dd>
                </div>
              </dl>
              <div className="form-notice">
                <strong>Enquiry delivery is not configured yet.</strong> Finishing downloads your
                request as a file; it is not sent to Urbayne.
              </div>
              <label className="consent-line">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  aria-invalid={!!errors["consent"]}
                />
                <span>
                  I’ve read the <Link to="/privacy">privacy information</Link> and understand this
                  request is prepared locally.
                </span>
              </label>
              <FieldError id="consent" msg={errors["consent"] ?? errors["message"]} />
              {status && (
                <div role="status" className="form-status">
                  {status}
                </div>
              )}
            </div>
          )}

          <div className="dm-actions">
            {step > 0 ? (
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setErrors({});
                  setStep((s) => s - 1);
                }}
              >
                <ArrowLeft /> Back
              </Button>
            ) : (
              <span />
            )}
            {step < steps.length - 1 ? (
              <Button type="button" variant="hero" onClick={next}>
                Continue <ArrowRight />
              </Button>
            ) : (
              <Button type="submit" variant="hero">
                <Download /> Download request
              </Button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
