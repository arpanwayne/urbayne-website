# Urbayne public website delivery

## Source review and preservation
The connected checkout is a TanStack Start/React/Tailwind frontend template, not the supplied GitHub monorepo. The public `Wayneesolutions/urbayne` main source was inspected read-only under `/tmp`; no files, APIs, credentials, roles, database schemas, or running services in that repository were changed.

The supplied repository is a pnpm/Turbo monorepo with Express API, React/Vite dashboard, mobile worker interfaces, shared packages and Terraform infrastructure. README, auth, security and deployment documentation, frontend screens and API modules informed this site. It contains campaign structure, content approvals, contacts/consent, team roles, area assignment, canvassing, events/volunteer shifts and reporting. Future road routing and planned modules are not promoted. Provider code is not evidence of active live integrations. Separate `services/auth-tenancy` is excluded from the main workspace and must not be connected to its database.

The application exposes `/admin`, `/w` and `/r`; website sign-in points to these at the product origin. Source docs show main-application email/password authentication, not OTP. No authentication flow was changed. The supplied site's root returned `Cannot GET /` during inspection; signed-in production dashboard/API behaviour remains unverified.

## Website implementation
14 requested public pages, nested solution routes, shared navigation/footer, FAQ, phone and dashboard illustrations, real editorial photographs, validated contact/demo forms, reduced-motion support and mobile layouts. All product visual data is fictional sample data and explicitly labelled. Photos are sourced from Unsplash, downloaded and served via project asset pointers; no external image hotlinks are used. Fonts load from Google Fonts.

## Enquiries: required configuration
No verified marketing endpoint or contact address exists in the source. Forms currently validate and download a text request; they never send or claim delivery. To enable submissions: supply an approved contact destination or form service; implement a server-validated submission with spam/rate protection; store credentials as server secrets; define privacy/retention terms; display sent success only after confirmed delivery. Do not reuse protected application APIs or fabricate a sales email. Do not deploy as a lead-collecting site before this is resolved.

## Legal and SEO launch requirements
Privacy and terms are clearly marked drafts. Confirm legal entity, contact channel, controller, providers, retention, commercial terms and applicable law with counsel. No certification, performance statistics, customer logos or official election integration is invented.

Every content page has unique title, description and Open Graph text. Canonicals, XML sitemap and robots Sitemap directive await the final **marketing** public origin; do not set the existing product origin if the marketing pages will live elsewhere. Relative CDN assets do not supply social-image URLs; hosting can provide sharing screenshots. Existing robots allow blocks are preserved.

## Deployment steps
1. Keep the existing Express/API deployment and `/admin`, `/w`, `/r`, `/v/*`, `/help/*`, `/api/*` routing unchanged. No Terraform apply or database migration is required for this website.
2. Use this separate TanStack project on Lovable hosting. Publishing is a user action; no automatic publish has been performed. Confirm the marketing domain before attaching it in domain settings.
3. If the public site must use the existing application domain, configure the edge/reverse proxy to send only the 14 marketing destinations to the marketing host, retaining all existing application/mobile/API routes at their existing upstream. Do not use a catch-all marketing proxy over application paths. Obtain the current host/ALB/CDN configuration before editing it; the repository's Terraform is documented as not yet applied.
4. After choosing the marketing domain, add canonical URLs and the router-derived sitemap following the platform sitemap recipe. Add its absolute URL to the existing robots file.
5. Configure and test real enquiry delivery; approve legal text; check external workspace availability; then publish using the Lovable Publish control. The harness checks builds automatically. For independent CI in a clone: `bun install --frozen-lockfile`, `bun run test`, `bun run lint`, `bun run build` with the supported Worker runtime.
6. Verify all marketing routes on the public host plus application login, worker and API routes on their unchanged origin. Do not deploy Express, database clients or Node-only modules into the marketing Worker.

## Outstanding externally blocked launch items
- Verified enquiry delivery service/destination.
- Approved legal text and verified company contact details.
- Confirmed marketing public domain for canonical/sitemap.
- External application authentication and signed-in dashboard/API verification.
- Exact current production reverse-proxy configuration if sharing the product domain.
