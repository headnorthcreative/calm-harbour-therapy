import { createFileRoute } from "@tanstack/react-router";
import { Clock3, HeartHandshake, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { AccreditationStrip } from "@/components/page-details";
import { TherapistMatchingForm } from "@/components/therapist-matching-form";

export const Route = createFileRoute("/get-started")({
  head: () => ({ meta: [
    { title: "Match with a therapist — Feel Better Therapy Ireland" },
    { name: "description", content: "Tell Feel Better Therapy about your needs and preferences in two simple steps to find the right accredited online therapist for you." },
    { property: "og:title", content: "Find your therapist — Feel Better Therapy" },
    { property: "og:description", content: "A personal approach to online therapy in Ireland. Share your needs and preferences with our therapist matching team." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: GetStarted,
});

function GetStarted() {
  return <div className="home-page min-h-screen bg-background text-foreground">
    <SiteHeader />
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-calm" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-10 text-center md:pt-12">
          <p className="mb-5 text-sm text-primary">Feel Better Therapy · Your first step</p>
          <h1 className="mx-auto max-w-3xl font-display text-4xl font-light leading-[1.15] sm:text-5xl lg:text-6xl">Let’s find the right <em className="text-primary">therapist for you.</em></h1>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">Complete the form below and our team will match you with a qualified therapist within 24 hours.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-12 md:grid-cols-[0.75fr_1.25fr] md:gap-14 md:py-16">
        <aside className="hidden md:block">
          <img src="/images/panel-matching.webp" alt="A winding path leading towards an open door" className="h-auto w-full rounded-lg" />
          <h2 className="mt-7 font-display text-3xl font-light">A match, not a search.</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">Our team carefully reviews your information and matches you with the most suitable professional.</p>
          <div className="mt-7 space-y-5 border-t border-border pt-6">
            <p className="flex gap-3 text-sm"><HeartHandshake className="size-5 shrink-0 text-primary" aria-hidden="true" />Personal matching, by people who care.</p>
            <p className="flex gap-3 text-sm"><ShieldCheck className="size-5 shrink-0 text-primary" aria-hidden="true" />Accredited therapists. Secure online sessions.</p>
            <p className="flex gap-3 text-sm"><Clock3 className="size-5 shrink-0 text-primary" aria-hidden="true" />Appointments that fit your life.</p>
          </div>
        </aside>
        <TherapistMatchingForm />
      </section>
      <AccreditationStrip />
    </main>
    <SiteFooter />
  </div>;
}