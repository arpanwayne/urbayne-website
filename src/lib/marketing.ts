export const productOrigin = "https://urbayne.wayneesolutions.com";
export const productLinks = {
  admin: `${productOrigin}/admin`,
  worker: `${productOrigin}/w`,
  reporting: `${productOrigin}/r`,
};
export const publicPaths = [
  "/",
  "/platform",
  "/solutions",
  "/solutions/campaign-management",
  "/solutions/field-operations",
  "/solutions/team-coordination",
  "/how-it-works",
  "/about",
  "/team",
  "/contact",
  "/book-demo",
  "/privacy",
  "/terms",
  "/faq",
  "/sign-in",
] as const;
export function pageHead(title: string, description: string) {
  const fullTitle = `${title} | Urbayne`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
export const faqs: [string, string][] = [
  [
    "What is Urbayne?",
    "Urbayne brings campaign planning, content, contacts, teams and field activity into a campaign-scoped digital workspace. The platform has administration screens and dedicated mobile-facing workflows.",
  ],
  [
    "Who is the platform designed for?",
    "Campaign owners, managers, regional coordinators and field teams. Access depends on the account’s assigned role and campaign membership; not everyone sees the same tools.",
  ],
  [
    "Can field workers use Urbayne on a phone?",
    "Yes. The dedicated worker interface supports assigned area lists, household visits and canvassing outcomes. The worker and reporting interfaces are installable web experiences with offline reporting and synchronisation when connectivity returns.",
  ],
  [
    "How are team permissions managed?",
    "Owners and managers have campaign management responsibilities. Coordinators can work with permitted team and field resources. Workers are limited to their assigned areas. Platform administration is separate from campaign ownership.",
  ],
  [
    "Does Urbayne send messages or make calls?",
    "The repository includes voice and SMS provider adapters, approval gates and consent checks. Availability depends on region, configured provider accounts and required approvals. Demo campaigns use simulated channels; a demonstration is not proof of a live provider connection.",
  ],
  [
    "Does Urbayne connect to official election systems?",
    "No. Agent-entered reports are campaign-reported, not official results. Official figures are entered or imported separately with a source note. No election authority integration is claimed.",
  ],
  [
    "Can I create an account myself?",
    "The main application uses accounts provisioned by authorised administrators, with email and password sign-in. Contact your campaign administrator for access. This public website does not create accounts or change your existing authentication.",
  ],
  [
    "How can I request a demonstration?",
    "Use the demo request page to prepare your requirements. An enquiry delivery service has not yet been configured for this website, so you can download the request but it will not be sent to Urbayne automatically.",
  ],
  [
    "Are there active third-party integrations?",
    "Provider adapters exist in the source, but the public website cannot verify which providers are enabled for a production campaign. No provider is presented here as an active integration. Discuss region-specific availability during a demonstration.",
  ],
];
