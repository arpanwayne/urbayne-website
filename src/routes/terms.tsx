import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/marketing/content-pages";
import { pageHead } from "@/lib/marketing";
export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead(
      "Terms of Service — draft",
      "Urbayne terms information. Draft for legal review, not approved legal text.",
    ),
  component: () => <LegalPage kind="terms" />,
});
