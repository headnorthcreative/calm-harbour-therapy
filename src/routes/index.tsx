import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter, Eyebrow, btn, btnGhost } from "@/components/site-chrome";
import heroAsset from "@/assets/cosy-macbook-window.png.asset.json";

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

const services = [
  ["Individual therapy", "A private, one-to-one space to talk through what is happening and what you would like to change.", "€80", "50 min"],
  ["Couples therapy", "A joint session where both partners get room to listen, talk and work through difficulties together.", "€120", "60 min"],
  ["Extended session", "An 80-minute individual session for EMDR or other focused work, when that format is right for you.", "€110", "80 min"],
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
  ["Transparent Pricing", "Clear pricing per session. No subscriptions or hidden fees. Many offer student rates."],
  ["Flexible Scheduling", "Early mornings, evenings, and weekends available to suit your busy lifestyle."],
];
const why = ["Tailored matching based on your needs", "Support for anxiety, depression, & more", "No GP referral needed"];
const stories = [
  ["I was hesitant about online therapy, but my therapist made me feel so comfortable. Being able to do sessions from my living room has been a game changer for my anxiety.", "Sarah M.", "Dublin"],
  ["The matching process was incredibly easy. I found a counsellor who specializes in work-related stress, and the tools I've learned have helped immensely.", "Conor D.", "Cork"],
  ["Highly recommend for anyone with a busy schedule. The evening appointments are a lifesaver, and the video quality is excellent.", "Aoife K.", "Galway"],
];
const places = ["Dublin", "Cork", "Galway", "Limerick", "Waterford", "Anywhere with a signal"];
const moods = [["😞", "Heavy"], ["😕", "Struggling"], ["😐", "In between"], ["🙂", "Steadier"], ["😊", "Lighter"]] as const;

function Index() {
  const [mood, setMood] = useState(2);
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
          <img src={heroAsset.url} alt="A woman relaxing in a green armchair with her laptop beside a bright window and houseplants" className="h-auto w-full rounded-[2rem] shadow-xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-6 border-t border-border px-6 py-8 text-sm text-muted-foreground md:grid-cols-3">
          <span className="block text-center">
            <strong className="block font-normal text-foreground">Fully accredited therapists from</strong>
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

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <Eyebrow n="01">The work, explained</Eyebrow>
          <h2 className="font-display text-4xl font-light">You arrive somewhere. We start from there.</h2>
          <p className="mt-6 text-muted-foreground">Feelings rarely move from heavy to light inside an hour. The first session is not about fixing anything — it is about being heard clearly, and agreeing together what would actually help.</p>
          <p className="mt-4 text-muted-foreground">So we begin with where you are, not with a label, a diagnosis or a technique. Those can come later, if they are useful at all.</p>
          <a href="#start" className={`${btn} mt-8`}>Start with a conversation</a>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8">
          <p className="text-sm text-muted-foreground"><strong className="text-foreground">Where you are right now</strong> · a starting point</p>
          <p className="mt-6 font-display text-3xl">{moods[mood]?.[1]}</p>
          <input type="range" min={0} max={4} value={mood} onChange={(e) => setMood(Number(e.target.value))} aria-label="Where you are right now" className="mt-6 w-full accent-primary" />
          <div className="mt-4 flex justify-between text-2xl">
            {moods.map(([f, l], i) => (
              <button key={l} aria-label={l} onClick={() => setMood(i)} className={i === mood ? "scale-125 transition" : "opacity-50 transition"}>{f}</button>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Most people arrive somewhere on this line. You don't have to explain it well — that is what the first conversation is for. Nothing here is saved or sent to us.</p>
          <p className="mt-3 text-xs text-muted-foreground">Illustrative · Not a diagnosis</p>
        </div>
      </section>

      <section id="services" className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow n="02">Services</Eyebrow>
          <h2 className="font-display text-4xl font-light">What would help?</h2>
          <p className="mt-4 text-muted-foreground">Tell us what you want to change. You don't need to know the name of the work.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map(([t, d, p, len], i) => (
              <a key={t} href="#start" className="group rounded-3xl bg-card p-8 transition hover:-translate-y-1">
                <span className="text-sm text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-medium group-hover:text-primary">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
                <p className="mt-6"><span className="font-display text-3xl">{p}</span> <span className="text-sm text-muted-foreground">{len}</span></p>
              </a>
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
          <a href="#start" className={`${btn} mt-8`}>Start the two-minute form</a>
        </div>
        <figure>
          <img src="/images/panel-matching.webp" alt="A winding path connects an open book and envelope to a person approaching an open door" className="w-full rounded-[2rem]" />
          <figcaption className="mt-3 text-sm text-muted-foreground">Share your details, our team reads them, and you meet your therapist. Nothing is chosen by an algorithm.</figcaption>
        </figure>
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
        <figure className="md:order-first">
          <img src="/images/panel-first-session.webp" alt="Person sitting comfortably in an armchair at home with a laptop" className="w-full rounded-[2rem]" />
          <figcaption className="mt-3 text-sm text-muted-foreground">A 50-minute individual session, at a pace that feels manageable.</figcaption>
        </figure>
        <div>
          <Eyebrow n="04">Why us</Eyebrow>
          <h2 className="font-display text-4xl font-light">Why choose Feel Better Therapy?</h2>
          <p className="mt-6 text-muted-foreground">We believe mental health support should be accessible, affordable, and high-quality. We bridge the gap between you and the best therapists in Ireland, removing the barriers of travel time and waiting lists.</p>
          <ul className="mt-6 space-y-3">
            {why.map((w) => <li key={w} className="flex gap-3"><span className="text-primary">✓</span>{w}</li>)}
          </ul>
          <Link to="/pricing" className={`${btnGhost} mt-8`}>See every price</Link>
        </div>
      </section>

      <section id="where" className="bg-muted">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <Eyebrow n="05">Where we work</Eyebrow>
            <h2 className="font-display text-4xl font-light">Everywhere in Ireland. One room you choose.</h2>
            <p className="mt-6 text-muted-foreground">Sessions run over secure video, so there is no travel, no waiting room, and no afternoon taken out of your day. All you need is somewhere private and a connection.</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {places.map((p) => <li key={p} className="rounded-full bg-card px-5 py-2">{p}</li>)}
            </ul>
            <a href="#start" className={`${btn} mt-8`}>Add your details</a>
          </div>
          <img src="/images/barriers-illustration.webp" alt="Two cups and a phone on a wooden table by a rain-streaked window" className="w-full rounded-[2rem]" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow n="06">Stories</Eyebrow>
        <h2 className="font-display text-4xl font-light">Stories of change.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {stories.map(([q, n, c]) => (
            <figure key={n} className="flex flex-col justify-between rounded-3xl bg-card p-8 shadow-sm">
              <blockquote className="font-display text-lg font-light leading-relaxed">“{q}”</blockquote>
              <figcaption className="mt-6 text-sm"><strong>{n}</strong> <span className="text-muted-foreground">· {c}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="start" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[2rem] bg-primary p-10 text-primary-foreground md:p-16">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] opacity-70">07 · Start here</p>
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
