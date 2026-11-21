export const serviceDetails = {
  matchingHours: 24,
  standardSessionMinutes: [50, 60],
  couplesSessionMinutes: [60, 90],
} as const;

export const serviceSteps = [
  ["Complete the matching form", "Tell us about your needs, preferences, and what you're looking for in a therapist."],
  ["Get matched with a therapist", `Our team reviews your information and matches you with the most suitable therapist within ${serviceDetails.matchingHours} hours.`],
  ["Schedule your first session", "Book a convenient time for your first session and receive instructions for accessing your chosen therapy format."],
  ["Begin your therapy journey", "Start working with your therapist towards your goals with ongoing support and guidance."],
] as const;

export const serviceFaqs = [
  ["How do online therapy sessions work?", "Online therapy sessions work just like traditional in-person therapy, but via secure video call, phone, or messaging. You'll meet with your therapist at scheduled times and work through your concerns in a confidential, supportive environment."],
  ["Is online therapy as effective as in-person therapy?", "Yes, research shows that online therapy is just as effective as in-person therapy for most mental health concerns. Many people find it more convenient and comfortable to attend therapy from their own home."],
  ["What equipment do I need for video sessions?", "You'll need a device with a camera and microphone (smartphone, tablet, or computer), a stable internet connection, and a private space where you can talk freely."],
  ["Are the sessions confidential?", "Yes, all sessions are completely confidential. We use secure, encrypted platforms and follow strict data protection guidelines in compliance with Irish and EU laws."],
  ["How long are therapy sessions?", `Standard therapy sessions are typically ${serviceDetails.standardSessionMinutes.join("–")} minutes. Couples therapy sessions may be longer, usually ${serviceDetails.couplesSessionMinutes.join("–")} minutes.`],
] as const;