import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, ShieldCheck, Clock3, Quote, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeMood } from "@/components/home-mood";
import { serviceDetails } from "@/lib/therapy-services";
import { SiteHeader, SiteFooter, Eyebrow, btnGhost } from "@/components/site-chrome";
import heroAsset from "@/assets/maura-hero.webp.asset.json";
import iacpLogo from "@/assets/iacp.webp.asset.json";
import psiLogo from "@/assets/psi.avif.asset.json";
import coruLogo from "@/assets/coru.avif.asset.json";
import iahipLogo from "@/assets/iahip.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Feel Better Therapy — Online therapy in Ireland" },
      { name: "description", content: "Connect with accredited Irish therapists for individuals and couples. Safe, secure video counselling from home. No GP referral needed." },
      { property: "og:title", content: "Feel Better Therapy — Online therapy from the comfort of your home" },
      { property: "og:description", content: "Accredited Irish therapists (IACP, PSI) over secure video. Individuals and couples, from €80." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:image", content: heroAsset.url },
    ],
  }),
  component: Index,
});

const services = [
  ["Individual therapy", "A private, one-to-one space to talk through what is happening and what you would like to change.", "€80", "50 min"],
  ["Couples therapy", "A joint session where both partners get room to listen, talk and work through difficulties together.", "€120", "60 min"],
  ["Extended session", "An 80-minute individual session for deeper exploration or other focused work, when that format is right for you.", "€110", "80 min"],
  ["Four-session bundle", "Four sessions at a lower rate, valid for six months, with priority scheduling.", "€300", "4 sessions"],
];
const steps = [
  ["Tell us about you", "Complete our simple form to help us understand your needs and therapy preferences."],
  ["We match you", "Our team carefully reviews your information and matches you with the most suitable professional."],
  ["Begin online sessions", "Start your therapy journey with flexible online sessions that fit your unique schedule."],
];
const features = [
  ["Fully Accredited", "All therapists are registered with IACP, PSI, or relevant Irish governing bodies."],
  ["Secure & Private", "Bank-level encryption for your video calls and personal data. Your privacy is paramount."],
  ["Transparent Pricing", "Clear pricing per session. No subscriptions or hidden fees."],
  ["Flexible Scheduling", "Early mornings, evenings, and weekends available to suit your busy lifestyle."],
];
const why = ["Tailored matching based on your needs", "Support for anxiety, depression, & more", "No GP referral needed"];
const stories = [
  ["I was hesitant about online therapy, but my therapist made me feel so comfortable. Being able to do sessions from my living room has been a game changer for my anxiety.", "Sarah M.", "Dublin"],
  ["The matching process was incredibly easy. I found a counsellor who specialises in work-related stress, and the tools I've learned have helped immensely.", "Conor D.", "Cork"],
  ["Highly recommend for anyone with a busy schedule. The evening appointments are a lifesaver, and the video quality is excellent.", "Aoife K.", "Galway"],
];
const places = ["Dublin", "Cork", "Galway", "Limerick", "Waterford", "Anywhere with a signal"];
const serviceTags = ["One-to-one", "Together", "Focused work", "A little continuity"];
const accreditationLogos = [
  { name: "IACP", asset: iacpLogo },
  { name: "The Psychological Society of Ireland", asset: psiLogo },
  { name: "CORU", asset: coruLogo },
  { name: "IAHIP", asset: iahipLogo },
];

function Index() {
  return (
    <div className="home-page min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-calm" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-8 pt-10 md:grid-cols-2 md:gap-12 md:pt-8">
          <div>
            <p className="mb-5 flex items-center gap-2 text-sm text-primary"><span className="h-px w-8 bg-primary/40" />A little space for you</p>
            <h1 className="font-display text-5xl font-light leading-[1.12] lg:text-6xl">
              Online therapy in Ireland, <em className="text-primary">from the comfort of your home.</em>
            </h1>
            <p className="mt-6 max-w-lg text-muted-foreground">
              Connect with accredited Irish therapists for individuals and couples. Safe, secure, and video-based counselling designed for your life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="h-auto rounded-full px-6 py-3.5"><Link to="/get-started">Match with a therapist <ArrowUpRight /></Link></Button>
              <Button asChild variant="ghost" className="h-auto rounded-full px-2 py-3.5 text-primary"><a href="#how-it-works">How it works <ArrowRight /></a></Button>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground"><strong className="font-medium text-foreground">Trusted by 1,000+ people</strong><br />From €80 · No GP referral needed</p>
          </div>
          <figure className="home-photo relative mx-auto w-full max-w-[420px] pb-6">
            <img src={heroAsset.url} alt="A smiling woman in a cream cardigan seated in an olive armchair with a laptop on her lap, a bookcase and bright window behind her" className="home-photo-image h-auto w-full rounded-t-[8rem] rounded-b-lg" />
            <figcaption className="home-photo-badge absolute bottom-0 left-3 right-3 flex items-center gap-3 rounded-lg border border-border/70 p-4 sm:left-6 sm:right-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-primary"><ShieldCheck className="size-5" strokeWidth={1.5} /></span>
              <span className="min-w-0 text-sm"><strong className="block font-medium">Matched within {serviceDetails.matchingHours} hours</strong><span className="mt-0.5 block text-xs text-muted-foreground">Real people. Personal matching. Secure video.</span></span>
            </figcaption>
          </figure>
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-6 border-t border-border px-6 py-7 text-sm text-muted-foreground md:grid-cols-3">
          <span className="block text-center">
            <strong className="block font-normal text-foreground">Fully registered &amp; accredited therapists from</strong>
            <span className="mt-2 block">IACP · PSI · CORU · IAHIP</span>
          </span>
          <span className="block text-center">
            <strong className="block font-normal text-foreground">Receipts accepted by</strong>
            <span className="mt-2 block">VHI · Laya · Irish Life Health</span>
          </span>
          <span className="block text-center">
            <strong className="block font-normal text-foreground">100% confidential</strong>
            <span className="mt-2 block">secure video, GDPR-compliant notes</span>
          </span>
        </div>
      </section>

      <div className="mx-auto max-w-6xl border-b border-border px-6 py-7" aria-label="Therapist accreditation bodies">
        <div className="mx-auto grid max-w-2xl grid-cols-4 items-center gap-5 sm:gap-12">
          {accreditationLogos.map(({ name, asset }) => <img key={name} src={asset.url} alt={name} className="mx-auto h-12 w-full object-contain opacity-65 grayscale sm:h-14" />)}
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
        <div>
          <Eyebrow n="01">The work, explained</Eyebrow>
          <h2 className="font-display text-4xl font-light">You arrive somewhere. We start from there.</h2>
          <p className="mt-6 text-muted-foreground">Feelings rarely move from heavy to light inside an hour. The first session is not about fixing anything — it is about being heard clearly, and agreeing together what would actually help.</p>
          <p className="mt-4 text-muted-foreground">So we begin with where you are, not with a label, a diagnosis or a technique. Those can come later, if they are useful at all.</p>
          <Button asChild className="mt-8 h-auto rounded-full px-7 py-3.5"><Link to="/get-started">Match with a therapist <ArrowUpRight /></Link></Button>
        </div>
        <HomeMood />
      </section>

      <section id="services" className="home-soft-band">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow n="02">Services</Eyebrow>
          <h2 className="font-display text-4xl font-light">What would help?</h2>
          <p className="mt-4 text-muted-foreground">Tell us what you want to change. You don't need to know the name of the work.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map(([t, d, p, len], i) => (
              <Link key={t} to="/get-started" className="home-service group flex flex-col rounded-lg border border-border bg-card p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-8">
                <div className="flex items-center justify-between gap-4"><span className="text-xs text-muted-foreground">0{i + 1} / {serviceTags[i]}</span><ArrowUpRight className="size-5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" /></div>
                <h3 className="mt-5 font-display text-2xl font-light group-hover:text-primary">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
                <div className="mt-auto pt-7"><p className="flex items-center justify-between gap-4 border-t border-border pt-5"><span className="font-display text-3xl text-primary">{p}</span> <span className="flex items-center gap-2 text-sm text-muted-foreground"><Clock3 className="size-3.5" />{len}</span></p></div>
              </Link>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-muted-foreground">Therapy is not a crisis or emergency service, a quick fix, or a replacement for medical care. If you need support now, Samaritans is on <a className="underline" href="tel:116123">116 123</a>, free, any time.</p>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <Eyebrow n="03">How it works</Eyebrow>
          <h2 className="font-display text-4xl font-light">Therapy made simple.</h2>
          <p className="mt-4 text-muted-foreground">Getting started with therapy shouldn't be stressful. We've streamlined the process to help you find support quickly.</p>
          <ol className="mt-8 space-y-6">
            {steps.map(([t, d], i) => (
              <li key={t} className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary font-display text-lg">{i + 1}</span>
                <div><h3 className="font-medium">{t}</h3><p className="text-muted-foreground">{d}</p></div>
              </li>
            ))}
          </ol>
          <Button asChild className="mt-8 h-auto rounded-full px-7 py-3.5"><Link to="/get-started">Match with a therapist <ArrowUpRight /></Link></Button>
        </div>
        <figure>
          <img src="/images/panel-matching.webp" alt="A winding path connects an open book and envelope to a person approaching an open door" className="w-full rounded-[2rem]" />
          <figcaption className="mt-3 text-sm text-muted-foreground">Share your details, our team reads them, and you meet your therapist. Nothing is chosen by an algorithm.</figcaption>
        </figure>
      </section>

      <section className="home-soft-band">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 py-20 md:grid-cols-4">
          {features.map(([t, d], i) => (
            <div key={t} className="border-t border-primary/25 py-6">
              <span className="text-sm text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-medium">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <figure className="md:order-first">
          <img src="/images/panel-first-session.webp" alt="Person sitting comfortably in an armchair at home with a laptop" className="w-full rounded-[2rem]" />
          <figcaption className="mt-3 text-sm text-muted-foreground">A 50-minute individual session, at a pace that feels manageable.</figcaption>
        </figure>
        <div>
          <Eyebrow n="04">Why us</Eyebrow>
          <h2 className="font-display text-4xl font-light">Why choose Feel Better Therapy?</h2>
          <p className="mt-6 text-muted-foreground">We believe mental health support should be accessible, affordable, and high-quality. We bridge the gap between you and the best therapists in Ireland, removing the barriers of travel time and waiting lists.</p>
          <ul className="mt-6 space-y-3">
            {why.map((w) => <li key={w} className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-primary" />{w}</li>)}
          </ul>
          <Link to="/pricing" className={`${btnGhost} mt-8`}>See every price</Link>
        </div>
      </section>

      <section id="where" className="home-soft-band">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <Eyebrow n="05">Where we work</Eyebrow>
            <h2 className="font-display text-4xl font-light">Everywhere in Ireland. One room you choose.</h2>
            <p className="mt-6 text-muted-foreground">Sessions run over secure video, so there is no travel, no waiting room, and no afternoon taken out of your day. All you need is somewhere private and a connection.</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {places.map((p) => <li key={p} className="rounded-full bg-card px-5 py-2">{p}</li>)}
            </ul>
            <Button asChild className="mt-8 h-auto rounded-full px-7 py-3.5"><Link to="/get-started">Match with a therapist <ArrowUpRight /></Link></Button>
          </div>
          <img src="/images/barriers-illustration.webp" alt="Two cups and a phone on a wooden table by a rain-streaked window" className="w-full rounded-[2rem]" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow n="06">Stories</Eyebrow>
        <h2 className="font-display text-4xl font-light">Stories of change.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {stories.map(([q, n, c]) => (
            <figure key={n} className="relative flex flex-col justify-between rounded-lg border border-border bg-card p-7">
              <Quote className="mb-5 size-8 text-primary/30" strokeWidth={1.2} aria-hidden="true" />
              <blockquote className="font-display text-lg font-light leading-relaxed">“{q}”</blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-5 text-sm"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary font-display text-primary" aria-hidden="true">{n?.charAt(0)}</span><span><strong className="block font-medium">{n}</strong><span className="block text-xs text-muted-foreground">{c}</span></span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="start" className="home-closing bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <p className="mb-5 flex items-center justify-center gap-2 text-sm opacity-80"><Clock3 className="size-4" />A first step, in just two minutes</p>
          <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">You don’t have to do it all alone.</h2>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed opacity-80">A little space to talk. Someone who listens. Start with a therapist who feels right for you.</p>
          <Button asChild variant="secondary" className="mt-8 h-auto rounded-full bg-background px-7 py-4 text-foreground hover:bg-secondary"><Link to="/get-started">Match with a therapist <ArrowUpRight /></Link></Button>
          <div className="mx-auto mt-9 grid max-w-2xl gap-5 text-sm opacity-85 sm:grid-cols-3">
            <span><strong className="block font-medium">From €80</strong><span className="mt-1 block text-xs">50-minute sessions</span></span><span><strong className="block font-medium">100% confidential</strong><span className="mt-1 block text-xs">Secure online sessions</span></span><span><strong className="block font-medium">No GP referral</strong><span className="mt-1 block text-xs">Come as you are</span></span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
