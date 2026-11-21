import { describe, expect, it } from "vitest";
import { serviceDetails } from "@/lib/therapy-services";

describe("Published therapy service details", () => {
  it("offers therapist matching within 24 hours", () => {
    expect(serviceDetails.matchingHours).toBe(24);
  });
  it("sets standard sessions at 50–60 minutes", () => {
    expect(serviceDetails.standardSessionMinutes).toEqual([50, 60]);
  });
  it("sets couples sessions at 60–90 minutes", () => {
    expect(serviceDetails.couplesSessionMinutes).toEqual([60, 90]);
  });
});