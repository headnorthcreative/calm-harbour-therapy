import { describe, expect, it } from "vitest";
import { matchingSchema, matchingStepOneSchema, initialMatchingValues, supportReasons } from "@/lib/therapist-matching";

const valid = {
  ...initialMatchingValues, firstName: "Test", lastName: "Person", email: "test@example.com",
  therapyType: "individual", age: "25-34", reasons: ["I am grieving"], country: "ireland", appointmentFlexibility: "flexible",
};
describe("Two-step therapist matching validation", () => {
  it("requires first name, last name, email, therapy type and age before step two", () => {
    for (const field of ["firstName", "lastName", "email", "therapyType", "age"]) {
      expect(matchingStepOneSchema.safeParse({ ...valid, [field]: "" }).success).toBe(false);
    }
    expect(matchingStepOneSchema.safeParse(valid).success).toBe(true);
  });
  it("keeps phone number optional as in the original form", () => {
    expect(matchingSchema.safeParse({ ...valid, phone: "" }).success).toBe(true);
  });
  it("requires at least one support reason, country and appointment availability", () => {
    expect(matchingSchema.safeParse({ ...valid, reasons: [] }).success).toBe(false);
    expect(matchingSchema.safeParse({ ...valid, country: "" }).success).toBe(false);
    expect(matchingSchema.safeParse({ ...valid, appointmentFlexibility: "" }).success).toBe(false);
    expect(matchingSchema.safeParse(valid).success).toBe(true);
  });
  it("accepts multiple support reasons and an optional therapist preference", () => {
    expect(matchingSchema.safeParse({ ...valid, reasons: supportReasons.slice(0, 3), therapistPreferences: "female" }).success).toBe(true);
    expect(matchingSchema.safeParse({ ...valid, therapistPreferences: "" }).success).toBe(true);
  });
  it("rejects unlisted choices, invalid emails, oversized names and unexpected fields", () => {
    expect(matchingSchema.safeParse({ ...valid, country: "not-a-country" }).success).toBe(false);
    expect(matchingSchema.safeParse({ ...valid, reasons: ["unlisted"] }).success).toBe(false);
    expect(matchingSchema.safeParse({ ...valid, email: "invalid" }).success).toBe(false);
    expect(matchingSchema.safeParse({ ...valid, firstName: "x".repeat(101) }).success).toBe(false);
    expect(matchingSchema.safeParse({ ...valid, owner: true }).success).toBe(false);
  });
});