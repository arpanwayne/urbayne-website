import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/marketing/content-pages";
import { pageHead } from "@/lib/marketing";
export const Route = createFileRoute("/solutions/")({
  head: () =>
    pageHead(
      "Solutions for connected campaign teams",
      "Discover campaign management, field operations and team coordination workflows with Urbayne.",
    ),
  component: SolutionsPage,
});
