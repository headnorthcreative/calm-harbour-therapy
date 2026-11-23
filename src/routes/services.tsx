import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, HeartHandshake, Home, CalendarDays, ShieldCheck, Video } from "lucide-react";
import { SiteHeader, SiteFooter, Eyebrow } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { ClosingInvitation, MatchLink } from "@/components/page-details";
import { serviceFaqs, serviceSteps } from "@/lib/therapy-services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Feel Better Therapy | Online & couples therapy" },
      { name: "description", content: "Explore secure online video therapy and couples counselling with qualified Irish therapists, available worldwide. Get matched within 24 hours." },
      { property: "og:title", content: "Therapy services — Feel Better Therapy" },
      { property: "og:description", content: "Flexible online therapy and couples counselling, from your own space. Qualified Irish therapists, secure video and personal matching." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const services = [
  {
    title: "Online Video Sessions",
    description: "Face-to-face therapy via secure video calls. Connect with your therapist from anywhere in the world.",
    icon: Video,
    features: ["Secure, encrypted video platform", "Same experience as in-person therapy", "Flexible scheduling", "No travel required"],
  },
  {
    title: "Couples Therapy",
    description: "Relationship counselling for couples. Strengthen your connection and resolve conflicts together via secure video sessions.",
    icon: HeartHandshake,
    features: ["Joint video sessions", "Improve communication", "Resolve conflicts", "Strengthen your bond"],
  },
];

function Services() {
  return (
    <div className="home-page min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-calm" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-10 md:pt-12">
          <p className="mb-5 flex items-center gap-2 text-sm text-primary"><span className="h-px w-8 bg-primary/40" />Feel Better Therapy · Services</p>
          <h1 className="max-w-3xl font-display text-5xl font-light leading-[1.12] lg:text-6xl">Flexible therapy services <em className="text-primary">for your lifestyle.</em></h1>
          <p className="mt-6 max-w-xl text-muted-foreground">Professional online therapy and couples counselling delivered via secure video. All services provided by qualified Irish therapists available worldwide.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <MatchLink />
            <Button asChild variant="outline" className="h-auto rounded-full px-7 py-3.5 text-base"><Link to="/pricing">See session prices</Link></Button>
          </div>
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-6 border-t border-border px-6 py-7 text-center text-sm text-muted-foreground md:grid-cols-3">
          <span><ShieldCheck className="mx-auto mb-2 size-4 text-primary" aria-hidden="true" /><strong className="block font-normal text-foreground">Secure & confidential</strong><span className="mt-2 block">Encrypted video, private sessions</span></span>
          <span><Video className="mx-auto mb-2 size-4 text-primary" aria-hidden="true" /><strong className="block font-normal text-foreground">Qualified Irish therapists</strong><span className="mt-2 block">Personal, professional care</span></span>
          <span><CalendarDays className="mx-auto mb-2 size-4 text-primary" aria-hidden="true" /><strong className="block font-normal text-foreground">Flexible scheduling</strong><span className="mt-2 block">Sessions that fit your life</span></span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <Eyebrow n="01">Our services</Eyebrow>
        <h2 className="font-display text-4xl font-light">A space for you. Or for you both.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="home-service flex flex-col rounded-lg border border-border bg-card p-7 md:p-8">
              <div className="flex items-center justify-between"><service.icon className="size-8 text-primary" strokeWidth={1.4} aria-hidden="true" /><span className="text-sm text-muted-foreground">0{index + 1}</span></div>
              <h3 className="mt-6 font-display text-3xl font-light">{service.title}</h3>
              <p className="mt-4 text-muted-foreground">{service.description}</p>
              <ul className="mb-8 mt-7 space-y-3">{service.features.map((feature) => <li key={feature} className="flex items-start gap-3"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />{feature}</li>)}</ul>
              <div className="mt-auto border-t border-border pt-6"><MatchLink /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-soft-band">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
          <div>
            <Eyebrow n="02">How it works</Eyebrow>
            <h2 className="font-display text-4xl font-light">How our services work.</h2>
            <ol className="mt-8 space-y-7">{serviceSteps.map(([title, description], index) => <li key={title} className="flex gap-5"><span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-lg text-primary">{index + 1}</span><div><h3 className="font-medium">{title}</h3><p className="mt-1 text-muted-foreground">{description}</p></div></li>)}</ol>
          </div>
          <figure>
            <img src="/images/panel-matching.webp" alt="An illustrated path from an open book and envelope to a welcoming doorway" className="h-auto w-full rounded-[2rem]" loading="lazy" />
            <figcaption className="mt-3 text-sm text-muted-foreground">Your needs, a personal match, and a first conversation.</figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <Eyebrow n="03">Your session</Eyebrow>
        <h2 className="font-display text-4xl font-light">What a therapy session looks like.</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Experience the comfort and convenience of online therapy from your own space.</p>
        <div className="mt-10 grid items-center gap-12 md:grid-cols-2">
          <figure>
            <img src="/images/panel-first-session.webp" alt="Illustration of a person at home, sitting comfortably in an armchair with a laptop for online therapy" className="h-auto w-full rounded-[2rem]" loading="lazy" />
            <figcaption className="mt-3 text-sm text-muted-foreground">Your own space. A secure call. Time to be heard.</figcaption>
          </figure>
          <div className="space-y-8">
            {[
              { title: "Comfortable Space", description: "Receive therapy from the comfort of your own home or preferred location", icon: Home },
              { title: "Professional Care", description: "Connect with qualified therapists via secure, encrypted video calls", icon: ShieldCheck },
              { title: "Flexible Scheduling", description: "Schedule sessions that fit your lifestyle without travel time", icon: CalendarDays },
            ].map((item) => <div key={item.title} className="flex gap-5"><item.icon className="mt-1 size-6 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" /><div><h3 className="text-lg font-medium">{item.title}</h3><p className="mt-2 text-muted-foreground">{item.description}</p></div></div>)}
            <Button asChild variant="outline" className="h-auto rounded-full px-7 py-3.5 text-base"><Link to="/pricing">See every price<ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="home-soft-band">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <Eyebrow n="04">Questions</Eyebrow>
          <h2 className="font-display text-4xl font-light">Frequently asked questions.</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">{serviceFaqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium">{question}<span className="shrink-0 text-xl text-primary transition group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-4 text-muted-foreground">{answer}</p></details>)}</div>
        </div>
      </section>

      <ClosingInvitation title="Ready to start therapy?" description="Choose the service that works for you and get matched with the right therapist today." />
      <SiteFooter />
    </div>
  );
}