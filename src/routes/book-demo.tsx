import { createFileRoute } from "@tanstack/react-router";
import { EnquiryPage } from "@/components/marketing/enquiry-page";
import { pageHead } from "@/lib/marketing";
export const Route = createFileRoute("/book-demo")({
  head: () =>
    pageHead(
      "Book a demo",
      "Prepare a tailored Urbayne demo request covering campaign, team and field workflows. Delivery configuration is pending.",
    ),
  component: () => <EnquiryPage kind="demo" />,
});
