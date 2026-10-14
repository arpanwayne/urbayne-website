import { z } from "zod";
export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  organisation: z.string().trim().min(2, "Please enter your organisation.").max(160),
  role: z.string().min(1, "Please select your role."),
  message: z
    .string()
    .trim()
    .min(10, "Please include at least 10 characters about your needs.")
    .max(3000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please acknowledge the privacy information." }),
  }),
});
export type Enquiry = z.infer<typeof enquirySchema>;
export function prepareEnquiry(data: Enquiry, kind: "contact" | "demo") {
  return `URBAYNE — ${kind === "demo" ? "DEMO REQUEST" : "CONTACT ENQUIRY"}\n\nNOT SENT — prepared locally for your records.\n\nName: ${data.name}\nEmail: ${data.email}\nOrganisation: ${data.organisation}\nRole: ${data.role}\n\nRequirements:\n${data.message}\n\nA delivery endpoint must be configured before this request can be sent through the website.`;
}
