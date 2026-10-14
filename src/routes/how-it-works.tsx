import { createFileRoute } from "@tanstack/react-router";
import { HowItWorksPage } from "@/components/marketing/pages/info-pages";
import { pageHead } from "@/lib/marketing";
export const Route = createFileRoute("/how-it-works")({
  head: () =>
    pageHead(
      "How Urbayne works",
      "Set up your campaign, coordinate team responsibilities and monitor recorded campaign activity.",
    ),
  component: HowItWorksPage,
});
