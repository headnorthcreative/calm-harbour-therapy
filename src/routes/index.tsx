import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, Eyebrow, btn, btnGhost } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Feel Better Therapy — Online therapy in Ireland" },
      { name: "description", content: "Connect with accredited Irish therapists for individuals and couples. Safe, secure video counselling from home. No GP referral needed." },
      { property: "og:title", content: "Feel Better Therapy — Online therapy from the comfort of your home" },
      { property: "og:description", content: "Accredited Irish therapists (IACP, PSI) over secure video. Individuals and couples, from €80." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  ["Tell us about you", "Complete our simple form to help us understand your needs and therapy preferences."],
  ["We match you", "Our team carefully reviews your information and matches you with the most suitable professional."],
  ["Begin online sessions", "Start your therapy journey with flexible online sessions that fit your unique schedule."],
];
const features = [
  ["Fully Accredited", "All therapists are registered with IACP, PSI, or relevant Irish governing bodies."],
  ["Secure & Private", "Bank-level encryption for your video calls and personal data. Your privacy is paramount."],
  ["Transparent Pricing", "Clear pricing per session. No subscriptions or hidden fees. Many offer student rates."],
  ["Flexible Scheduling", "Early mornings, evenings, and weekends available to suit your busy lifestyle."],
];
const why = ["Tailored matching based on your needs", "Support for anxiety, depression, & more", "No GP referral needed"];
const stories = [
  ["I was hesitant about online therapy, but my therapist made me feel so comfortable. Being able to do sessions from my living room has been a game changer for my anxiety.", "Sarah M.", "Dublin"],
  ["The matching process was incredibly easy. I found a counsellor who specializes in work-related stress, and the tools I've learned have helped immensely.", "Conor D.", "Cork"],
  ["Highly recommend for anyone with a busy schedule. The evening appointments are a lifesaver, and the video quality is excellent.", "Aoife K.", "Galway"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-calm" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-2 md:pt-16">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">Start your journey today</p>
            <h1 className="font-display text-5xl font-light leading-[1.05] md:text-6xl">
              Online therapy in Ireland, <em className="text-primary">from the comfort of your home.</em>
            </h1>
            <p className="mt-6 max-w-lg text-muted-foreground">
              Connect with accredited Irish therapists for individuals and couples. Safe, secure, and video-based counselling designed for your life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#start" className={btn}>Match with a therapist</a>
              <a href="#how-it-works" className={btnGhost}>How it works</a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground"><strong className="text-foreground">Trusted by 1,000+ people</strong> · From €80 · No GP referral needed</p>
          </div>
          <img src="/images/hero-home-illustration.webp" alt="A quiet living room in morning light with a green armchair by a tall window" className="w-full rounded-[2rem] shadow-xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-6 border-t border-border px-6 py-8 text-sm text-muted-foreground md:grid-cols-3">
          <span><strong className="text-foreground">Fully accredited therapists from</strong> IACP · PSI · CORU · IAHIP</span>
          <span><strong className="text-foreground">Receipts accepted by</strong> VHI · Laya · Irish Life Health</span>
          <span><strong className="text-foreground">100% confidential</strong> — secure video, GDPR-compliant notes</span>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <Eyebrow n="01">How it works</Eyebrow>
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
          <a href="#start" className={`${btn} mt-8`}>Start the two-minute form</a>
        </div>
        <img src="/images/panel-matching.webp" alt="A winding path connects an open book and envelope to a person approaching an open door" className="w-full rounded-[2rem]" />
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 py-20 md:grid-cols-4">
          {features.map(([t, d], i) => (
            <div key={t} className="rounded-3xl bg-card p-7">
              <span className="text-sm text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-medium">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src="/images/panel-first-session.webp" alt="Person sitting comfortably in an armchair at home with a laptop" className="w-full rounded-[2rem] md:order-first" />
        <div>
          <Eyebrow n="02">Why us</Eyebrow>
          <h2 className="font-display text-4xl font-light">Why choose Feel Better Therapy?</h2>
          <p className="mt-6 text-muted-foreground">We believe mental health support should be accessible, affordable, and high-quality. We bridge the gap between you and the best therapists in Ireland, removing the barriers of travel time and waiting lists.</p>
          <ul className="mt-6 space-y-3">
            {why.map((w) => <li key={w} className="flex gap-3"><span className="text-primary">✓</span>{w}</li>)}
          </ul>
          <Link to="/pricing" className={`${btnGhost} mt-8`}>See every price</Link>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow n="03">Stories</Eyebrow>
          <h2 className="font-display text-4xl font-light">Stories of change.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {stories.map(([q, n, c]) => (
              <figure key={n} className="flex flex-col justify-between rounded-3xl bg-card p-8">
                <blockquote className="font-display text-lg font-light leading-relaxed">“{q}”</blockquote>
                <figcaption className="mt-6 text-sm"><strong>{n}</strong> <span className="text-muted-foreground">· {c}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2rem] bg-primary p-10 text-primary-foreground md:p-16">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] opacity-70">04 · Start here</p>
          <h2 className="font-display text-4xl font-light md:text-5xl">Ready to start your journey?</h2>
          <p className="mt-4 max-w-xl opacity-80">Take the first step towards feeling better today. It takes less than 2 minutes to start the matching process.</p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm opacity-90">
            <span><strong>From €80</strong> · 50 minutes</span><span><strong>100%</strong> confidential and secure</span><span><strong>No GP referral</strong> needed</span>
          </div>
          <a href="#start" className="mt-10 inline-block rounded-full bg-background px-7 py-3.5 font-medium text-foreground">Get started now</a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
