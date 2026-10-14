import { describe, expect, it } from "vitest";
import { enquirySchema, prepareEnquiry } from "@/lib/enquiry";
import { productLinks, publicPaths } from "@/lib/marketing";
const enquiry = {
  name: "Alex Taylor",
  email: "alex@example.org",
  organisation: "Campaign Team",
  role: "Campaign manager",
  message: "We need to coordinate workers in assigned areas.",
  consent: true as const,
};
describe("Honest enquiry preparation", () => {
  it("rejects an invalid email", () =>
    expect(enquirySchema.safeParse({ ...enquiry, email: "invalid" }).success).toBe(false));
  it("requires privacy acknowledgement", () =>
    expect(enquirySchema.safeParse({ ...enquiry, consent: false }).success).toBe(false));
  it("never represents a local request as delivered", () =>
    expect(prepareEnquiry(enquiry, "demo")).toContain("NOT SENT — prepared locally"));
  it("preserves existing application entry points", () =>
    expect(productLinks).toEqual({
      admin: "https://urbayne.wayneesolutions.com/admin",
      worker: "https://urbayne.wayneesolutions.com/w",
      reporting: "https://urbayne.wayneesolutions.com/r",
    }));
  it("includes all 15 public destinations, including the team page", () =>
    expect(publicPaths.length).toBe(15));
});
