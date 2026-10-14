import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/marketing/pages/info-pages";
import { pageHead } from "@/lib/marketing";
export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead(
      "Privacy Policy — draft",
      "Urbayne privacy information. Draft for legal review, not approved legal text.",
    ),
  component: PrivacyPage,
});
