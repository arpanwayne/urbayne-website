import { createFileRoute } from "@tanstack/react-router";
import { PlatformPage } from "@/components/marketing/content-pages";
import { pageHead } from "@/lib/marketing";
export const Route = createFileRoute("/platform")({
  head: () =>
    pageHead(
      "Platform overview",
      "Explore Urbayne campaign management, team coordination, field workflows and role-based administration.",
    ),
  component: PlatformPage,
});
