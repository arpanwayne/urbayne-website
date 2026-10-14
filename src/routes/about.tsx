import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/marketing/content-pages";
import { pageHead } from "@/lib/marketing";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Urbayne",
      "Discover the people-first perspective behind Urbayne, a Wayne E Solutions campaign technology project.",
    ),
  component: AboutPage,
});
