import { createFileRoute } from "@tanstack/react-router";
import { TeamPage } from "@/components/marketing/pages/company-pages";
import { pageHead } from "@/lib/marketing";
export const Route = createFileRoute("/team")({
  head: () =>
    pageHead(
      "Our Team",
      "Meet the Wayne E Solutions team designing, building and supporting the Urbayne campaign platform.",
    ),
  component: TeamPage,
});
