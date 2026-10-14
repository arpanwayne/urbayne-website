import { createFileRoute } from "@tanstack/react-router";
import { TeamCoordinationPage } from "@/components/marketing/pages/solutions-pages";
import { pageHead } from "@/lib/marketing";
export const Route = createFileRoute("/solutions/team-coordination")({
  head: () =>
    pageHead(
      "Team coordination",
      "Discover focused team coordination workflows with Urbayne and bring campaign responsibilities into focus.",
    ),
  component: TeamCoordinationPage,
});
