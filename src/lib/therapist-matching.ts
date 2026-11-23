import { z } from "zod";
import options from "@/lib/matching-options.json";

export const therapyTypes = [{ value: "individual", text: "Individual" }, { value: "couple", text: "Couple" }];
export const ageRanges = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"];
export const phoneCountries = [
  { value: "+353", text: "Ireland" }, { value: "+44", text: "UK" }, { value: "+1", text: "USA/Canada" },
  { value: "+61", text: "Australia" }, { value: "+64", text: "New Zealand" }, { value: "+33", text: "France" },
  { value: "+49", text: "Germany" }, { value: "+39", text: "Italy" }, { value: "+34", text: "Spain" },
  { value: "+31", text: "Netherlands" }, { value: "+32", text: "Belgium" }, { value: "+43", text: "Austria" },
  { value: "+41", text: "Switzerland" }, { value: "+45", text: "Denmark" }, { value: "+46", text: "Sweden" }, { value: "+47", text: "Norway" },
];
export const supportReasons = [
  "I feel anxious, overwhelmed or stressed",
  "I've been feeling down or depressed",
  "My mood is interfering with my work/college performance",
  "I am struggling with relationships in my life",
  "Events/relationships from my past are causing me emotional pain",
  "I am grieving",
  "I have experienced trauma",
  "I want to explore issues around my sexuality",
  "I want to improve my self confidence or self esteem",
  "I would like to talk through a specific challenge",
  "Therapy has been recommended to me (friend, family doctor)",
  "I want to gain self awareness/self knowledge",
  "Other",
];
export const matchingOptions = options;

const choice = (values: readonly string[], message: string) => z.string().refine(value => values.includes(value), message);
export const matchingStepOneSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name.").max(100, "Use 100 characters or fewer."),
  lastName: z.string().trim().min(1, "Enter your last name.").max(100, "Use 100 characters or fewer."),
  email: z.string().trim().email("Enter a valid email address.").max(255),
  phoneCountryCode: choice(phoneCountries.map(option => option.value), "Select a phone country."),
  phone: z.string().trim().max(30, "Enter a shorter phone number.").refine(value => value === "" || /^[\d\s()+.-]{6,30}$/.test(value), "Enter a valid phone number."),
  therapyType: choice(therapyTypes.map(option => option.value), "Select a type of therapy."),
  age: choice(ageRanges, "Select your age range."),
});
export const matchingSchema = matchingStepOneSchema.extend({
  reasons: z.array(choice(supportReasons, "Select one of the listed options.")).min(1, "Select at least one option.").max(supportReasons.length),
  therapistPreferences: z.string().refine(value => value === "" || options.therapistPreferences.some(option => option.value === value), "Select a listed preference."),
  country: choice(options.country.map(option => option.value), "Select your country."),
  appointmentFlexibility: choice(options.appointmentFlexibility.map(option => option.value), "Select your appointment preference."),
  phoneCallback: z.boolean(),
}).strict();
export type MatchingValues = z.infer<typeof matchingSchema>;
export const initialMatchingValues: MatchingValues = {
  firstName: "", lastName: "", email: "", phoneCountryCode: "+353", phone: "", therapyType: "", age: "",
  reasons: [], therapistPreferences: "", country: "", appointmentFlexibility: "", phoneCallback: false,
};