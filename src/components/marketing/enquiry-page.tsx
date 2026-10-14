import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Download, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { enquirySchema, prepareEnquiry } from "@/lib/enquiry";
import planning from "@/assets/planning.jpg.asset.json";
import people from "@/assets/people.jpg.asset.json";
export function EnquiryPage({ kind }: { kind: "contact" | "demo" }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");
    const values = new FormData(e.currentTarget);
    const result = enquirySchema.safeParse({
      name: values.get("name"),
      email: values.get("email"),
      organisation: values.get("organisation"),
      role: values.get("role"),
      message: values.get("message"),
      consent: values.get("consent") === "on",
    });
    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        next[String(issue.path[0])] = issue.message;
      });
      setErrors(next);
      e.currentTarget
        .querySelector<HTMLElement>(`[name="${result.error.issues[0]?.path[0]}"]`)
        ?.focus();
      return;
    }
    setErrors({});
    setBusy(true);
    try {
      const url = URL.createObjectURL(
        new Blob([prepareEnquiry(result.data, kind)], { type: "text/plain;charset=utf-8" }),
      );
      const a = document.createElement("a");
      a.href = url;
      a.download = `urbayne-${kind}-request.txt`;
      a.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setStatus(
        "Your request file is ready. It has not been sent to Urbayne. Keep it for your records until a verified enquiry channel is available.",
      );
    } catch {
      setStatus("The file could not be prepared. Nothing has been sent. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  const field = (name: string, label: string, type = "text", placeholder = "") => (
    <div className="form-field">
      <label htmlFor={name}>
        {label} <span className="text-muted-foreground">*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={name === "name" ? "name" : name === "email" ? "email" : "organization"}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        maxLength={name === "email" ? 254 : 160}
      />
      {errors[name] && (
        <span className="field-error" id={`${name}-error`}>
          {errors[name]}
        </span>
      )}
    </div>
  );
  return (
    <section className="section">
      <div className="container form-layout">
        <div>
          <div className="eyebrow">
            {kind === "demo" ? "Let’s bring it into focus" : "Start a conversation"}
          </div>
          <h1>
            {kind === "demo" ? (
              <>
                Your campaign.
                <br />A clearer perspective.
              </>
            ) : (
              <>
                Good conversations.
                <br />
                Better connections.
              </>
            )}
          </h1>
          <p className="form-description">
            {kind === "demo"
              ? "Tell us about your campaign, your team and the workflows you want to explore. Prepare a demo request tailored to your priorities."
              : "Have a question about campaign operations, team coordination or the platform? Prepare an enquiry with the details that matter."}
          </p>
          <div className="feature-checks">
            {(kind === "demo"
              ? [
                  "Explore campaign and team workflows",
                  "Discuss mobile-facing field operations",
                  "Identify region and configuration requirements",
                ]
              : [
                  "Platform and workflow questions",
                  "Campaign access and deployment enquiries",
                  "Field operations and team requirements",
                ]
            ).map((s) => (
              <div key={s} className="flex gap-3 text-sm">
                <Check size={17} className="text-primary shrink-0" />
                {s}
              </div>
            ))}
          </div>
          <img
            src={(kind === "demo" ? planning : people).url}
            className="form-image"
            alt={
              kind === "demo"
                ? "A team reviewing a campaign plan together"
                : "Professionals discussing their operational needs"
            }
            width={1000}
            height={650}
            loading="lazy"
          />
          <p className="sign-in-note">
            No verified sales email, phone number or address was supplied in the project. Existing
            account support should be directed to your campaign administrator.
          </p>
          <Link to="/faq" className="text-link">
            Find a quick answer <ArrowRight size={15} />
          </Link>
        </div>
        <form className="enquiry-form" onSubmit={submit} noValidate>
          <h2 className="text-2xl font-semibold mb-3">
            {kind === "demo" ? "Prepare your demo request" : "Prepare your enquiry"}
          </h2>
          <div className="form-notice">
            <strong>Enquiry delivery is not configured.</strong>
            <br />
            This form validates your details and downloads a request file. It does not send an
            enquiry, reserve a demonstration or create an account.
          </div>
          <div className="form-grid">
            {field("name", "Full name", "text", "Your full name")}
            {field("email", "Work email", "email", "you@organisation.com")}
          </div>
          {field("organisation", "Organisation", "text", "Your organisation or campaign")}
          <div className="form-field">
            <label htmlFor="role">Your role *</label>
            <select
              id="role"
              name="role"
              defaultValue=""
              aria-invalid={Boolean(errors.role)}
              aria-describedby={errors.role ? "role-error" : undefined}
            >
              <option value="" disabled>
                Select your role
              </option>
              <option>Campaign owner</option>
              <option>Campaign manager</option>
              <option>Regional coordinator</option>
              <option>Field operations</option>
              <option>Administrator</option>
              <option>Other</option>
            </select>
            {errors.role && (
              <span className="field-error" id="role-error">
                {errors.role}
              </span>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="message">
              {kind === "demo" ? "What would you like to explore?" : "How can we help?"} *
            </label>
            <textarea
              id="message"
              name="message"
              maxLength={3000}
              placeholder="Tell us about your campaign and operational priorities."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <span className="field-error" id="message-error">
                {errors.message}
              </span>
            )}
          </div>
          <label className="consent-line">
            <input
              name="consent"
              type="checkbox"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "consent-error" : undefined}
            />
            <span>
              I have read the <Link to="/privacy">draft privacy information</Link> and understand
              that this enquiry is prepared locally, not delivered.
            </span>
          </label>
          {errors.consent && (
            <p className="field-error mb-4" id="consent-error">
              {errors.consent}
            </p>
          )}
          <Button variant="hero" type="submit" className="w-full" size="lg" disabled={busy}>
            <Download />
            {busy ? "Preparing request…" : "Download request"}
          </Button>
          {status && (
            <div role="status" className="form-status">
              {status}
            </div>
          )}
          <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
            Fields marked * are required. No enquiry is stored by this website.
          </p>
        </form>
      </div>
    </section>
  );
}
