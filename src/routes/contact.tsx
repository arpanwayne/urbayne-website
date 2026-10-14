import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/marketing/pages/enquiry-pages";
import { pageHead } from "@/lib/marketing";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact Urbayne",
      "Prepare an enquiry about Urbayne campaign management and field operations. Enquiry delivery is not yet configured.",
    ),
  component: ContactPage,
});
