import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ciúin Therapy — Online therapy from accredited Irish therapists" },
      { name: "description", content: "Video therapy for individuals and couples anywhere in Ireland. No GP referral, from €80. Matched by a person, usually within 24 hours." },
      { property: "og:title", content: "Ciúin Therapy — Therapy from the room you already trust" },
      { property: "og:description", content: "Accredited Irish therapists over secure video. From €80, no GP referral needed." },
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
  ["Tell us about you", "Contact details, the kind of therapy you want, and what you would like to change."],
  ["We match you", "Our team reviews your form and chooses a suitable accredited therapist, usually within 24 hours."],
  ["Meet online", "Choose a time and join your first secure video session from home."],
];
const places = ["Dublin", "Cork", "Galway", "Limerick", "Waterford", "Anywhere with a signal"];
const moods = [["😞", "Heavy"], ["😕", "Struggling"], ["😐", "In between"], ["🙂", "Steadier"], ["😊", "Lighter"]] as const;

function Eyebrow({ n, children }: { n: string; children: string }) {
  return <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground"><span className="text-primary">{n}</span> · {children}</p>;
}
const btn = "inline-block rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition hover:opacity-90";
const btnGhost = "inline-block rounded-full border border-border bg-card px-7 py-3.5 font-medium transition hover:bg-muted";

function Index() {
  const [mood, setMood] = useState(2);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-primary py-2 text-center text-sm text-primary-foreground">
        In crisis? Call Samaritans anytime on <a className="underline" href="tel:116123">116 123</a> — free
      </div>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-2xl">ciúin<span className="text-primary">.</span></span>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services">Services</a><a href="#matching">Matching</a><a href="#where">Where we work</a>
        </nav>
        <a href="#start" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Find your therapist</a>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-calm" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-2 md:pt-20">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">Online therapy · Ireland</p>
            <h1 className="font-display text-5xl font-light leading-[1.05] md:text-6xl">
              Therapy from the room <em className="text-primary">you already trust.</em>
            </h1>
            <p className="mt-6 text-lg">Good care, from accredited Irish therapists.</p>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Video sessions for individuals and couples, anywhere in Ireland. No GP referral, no waiting room, and no need to explain yourself perfectly first.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#start" className={btn}>Find your therapist</a>
              <a href="#services" className={btnGhost}>See every price</a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground"><strong className="text-foreground">From €80</strong> · 50 minutes · Receipts accepted by VHI, Laya and Irish Life Health</p>
          </div>
          <img src="/images/hero-home-illustration.webp" alt="A quiet living room in morning light with a green armchair by a tall window" className="w-full rounded-[2rem] shadow-xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-6 border-t border-border px-6 py-8 text-sm text-muted-foreground md:grid-cols-3">
          <span><strong className="text-foreground">Therapists registered with</strong> IACP · PSI · CORU · IAHIP</span>
          <span><strong className="text-foreground">Receipts accepted by</strong> VHI · Laya · Irish Life Health</span>
          <span><strong className="text-foreground">Confidential by design</strong> — secure video, GDPR-compliant notes</span>
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

      <section id="matching" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <Eyebrow n="03">Matching</Eyebrow>
          <h2 className="font-display text-4xl font-light">A match, not a search.</h2>
          <p className="mt-4 text-muted-foreground">You do not scroll through profiles or compare therapists yourself. You tell us what is happening, and a person reads it.</p>
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

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 md:grid-cols-2">
        <figure className="md:order-first">
          <img src="/images/panel-first-session.webp" alt="Person sitting comfortably in an armchair at home with a laptop" className="w-full rounded-[2rem]" />
          <figcaption className="mt-3 text-sm text-muted-foreground">A 50-minute individual session, at a pace that feels manageable.</figcaption>
        </figure>
        <div>
          <Eyebrow n="04">Your first session</Eyebrow>
          <h2 className="font-display text-4xl font-light">It can begin gently.</h2>
          <p className="mt-6 text-muted-foreground">You do not need to prepare a speech or know exactly what to say. Find somewhere private, bring a cup of tea if that helps, and start where you are.</p>
          <p className="mt-4 text-muted-foreground">Your therapist will help guide the conversation and you can ask questions at any point. Together you can agree what you would like to do next — including nothing at all.</p>
          <a href="#services" className={`${btnGhost} mt-8`}>Read about the services</a>
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

      <section id="start" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2rem] bg-primary p-10 text-primary-foreground md:p-16">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] opacity-70">06 · Start here</p>
          <h2 className="font-display text-4xl font-light md:text-5xl">Start where you are</h2>
          <p className="mt-4 max-w-xl opacity-80">Tell us what you would like to change. We will match you with an accredited therapist, usually within 24 hours.</p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm opacity-90">
            <span><strong>From €80</strong> · 50 minutes</span><span><strong>About 2 minutes</strong> to start the form</span><span><strong>No GP referral</strong> needed</span>
          </div>
          <a href="#start" className="mt-10 inline-block rounded-full bg-background px-7 py-3.5 font-medium text-foreground">Find your therapist</a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:justify-between">
          <span>© 2026 Ciúin Therapy · Online therapy across Ireland</span>
          <span>In crisis? Call Samaritans free on 116 123, any time.</span>
        </div>
      </footer>
    </div>
  );
}
