import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, LockKeyhole, ShieldCheck, Wifi } from "lucide-react";
import { SiteHeader, SiteFooter, Eyebrow } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import founderAsset from "@/assets/maura-davis-founder.jpeg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Feel Better Therapy | Mental health support in Ireland" },
      { name: "description", content: "Discover the story, mission and values behind Feel Better Therapy. Compassionate, accredited online therapy for individuals and couples across Ireland." },
      { property: "og:title", content: "About Feel Better Therapy — A space to feel heard" },
      { property: "og:description", content: "Making quality mental health support accessible across Ireland through compassion, clinical expertise and secure online care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { title: "Accessibility", description: "Professional care from anywhere. We remove the geographic and logistical barriers to getting help.", icon: Wifi },
  { title: "Professionalism", description: "Every therapist is fully accredited by IACP or PSI, ensuring the highest standard of clinical care.", icon: ShieldCheck },
  { title: "Compassion", description: "A human-first approach. We treat every individual with kindness, empathy, and respect.", icon: HeartHandshake },
  { title: "Privacy", description: "Your space is sacred. We utilize state-of-the-art encryption to keep your sessions completely confidential.", icon: LockKeyhole },
];

const methods = [
  { title: "CBT (Cognitive Behavioral Therapy)", description: "Focuses on challenging and changing unhelpful cognitive distortions and behaviors." },
  { title: "ACT (Acceptance & Commitment Therapy)", description: "Uses acceptance and mindfulness strategies to increase psychological flexibility." },
  { title: "Humanistic Therapy", description: "Emphasizes individual potential and the importance of growth and self-actualization." },
  { title: "Couples Counseling", description: "Specialized support for navigating relationship dynamics and communication." },
];

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-calm" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-20">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">Feel Better Therapy · About us</p>
            <h1 className="max-w-3xl font-display text-5xl font-light leading-[1.05] md:text-6xl">Mental health support, <em className="text-primary">made accessible.</em></h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Online therapy for individuals and couples across Ireland. Compassionate care from the comfort of your home.</p>
            <Button asChild className="mt-8 h-auto rounded-full px-7 py-3.5 text-base"><a href="https://feelbettertherapy.ie/get-started">Match with a therapist<ArrowRight aria-hidden="true" /></a></Button>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Eyebrow n="01">Our mission</Eyebrow>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="max-w-lg font-display text-4xl font-light leading-tight">Everyone deserves a space <em className="text-primary">to feel heard.</em></h2>
            <p className="max-w-xl leading-relaxed text-muted-foreground">We believe that mental healthcare shouldn't be a privilege. Our mission is to break down barriers through technology and compassion, ensuring professional support is always within reach for everyone in Ireland.</p>
          </div>
        </section>

        <section className="bg-muted">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
            <figure className="mx-auto w-full max-w-64 md:max-w-80">
              <img src={founderAsset.url} alt="Maura Davis, founder, psychologist and psychotherapist at Feel Better Therapy" className="h-auto w-full rounded-[2rem]" loading="lazy" />
              <figcaption className="mt-4 text-sm"><strong className="font-medium">Maura Davis</strong><span className="mt-1 block text-muted-foreground">Founder, Psychologist &amp; Psychotherapist</span></figcaption>
            </figure>
            <div>
              <Eyebrow n="02">Our story</Eyebrow>
              <h2 className="font-display text-4xl font-light">Support, wherever you are.</h2>
              <blockquote className="mt-7 border-l-2 border-primary pl-6 font-display text-2xl font-light leading-relaxed">“A simple goal: to make quality mental health support accessible to everyone in Ireland, regardless of your location. We're with you every step of the way.”</blockquote>
              <p className="mt-7 leading-relaxed text-muted-foreground">Founded to bridge the gap between long waiting lists and immediate care, Feel Better Therapy was born out of a desire to make mental health support accessible to everyone in Ireland.</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">We saw too many people struggling to find the right therapist or unable to travel to appointments. By combining clinical expertise with modern convenience, we created a sanctuary that exists wherever you are.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <Eyebrow n="03">Our core values</Eyebrow>
          <h2 className="font-display text-4xl font-light">Care with you at the centre.</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">The principles that guide every session, every feature, and every interaction.</p>
          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => <article key={value.title} className="border-t border-border pt-6"><value.icon className="size-7 text-primary" strokeWidth={1.4} aria-hidden="true" /><h3 className="mt-5 text-xl font-medium">{value.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{value.description}</p></article>)}
          </div>
        </section>

        <section className="bg-secondary">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <Eyebrow n="04">Clinical excellence</Eyebrow>
            <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
              <div>
                <h2 className="font-display text-4xl font-light">Expert care.<br /><em className="text-primary">Proven methods.</em></h2>
                <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">Our team brings diverse expertise to help you navigate life's challenges using evidence-based modalities.</p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary"><span className="flex items-center gap-2"><ShieldCheck className="size-4" aria-hidden="true" />IACP Accredited</span><span className="flex items-center gap-2"><ShieldCheck className="size-4" aria-hidden="true" />PSI Members</span></div>
                <Button asChild variant="outline" className="mt-8 h-auto rounded-full px-7 py-3.5 text-base"><Link to="/services">Explore our services<ArrowRight aria-hidden="true" /></Link></Button>
              </div>
              <div className="divide-y divide-border border-y border-border">{methods.map((method, index) => <article key={method.title} className="flex gap-5 py-6"><span className="pt-1 text-sm text-primary">0{index + 1}</span><div><h3 className="text-lg font-medium">{method.title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{method.description}</p></div></article>)}</div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] opacity-70">05 · Start here</p>
            <h2 className="font-display text-4xl font-light md:text-5xl">Ready to feel better?</h2>
            <p className="mt-4 max-w-xl opacity-80">Take the first step towards a healthier mind today. Our therapists are ready to listen.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="secondary" className="h-auto rounded-full px-7 py-3.5 text-base"><a href="https://feelbettertherapy.ie/get-started">Match with a therapist<ArrowRight aria-hidden="true" /></a></Button>
              <Button asChild variant="secondary" className="h-auto rounded-full px-7 py-3.5 text-base"><a href="https://feelbettertherapy.ie/faq">View FAQ</a></Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}