import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Mail, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { SiteHeader, SiteFooter, Eyebrow } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { AccreditationStrip, ClosingInvitation } from "@/components/page-details";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Feel Better Therapy | We are here to help" },
      { name: "description", content: "Questions about our services, insurance coverage or booking your first session? Get in touch — we typically respond within 24 hours." },
      { property: "og:title", content: "Contact Feel Better Therapy — We are here to help" },
      { property: "og:description", content: "Reach out with any question about online therapy in Ireland. We typically respond within 24 hours." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const topics = ["General Inquiry", "Booking a Session", "Billing & Insurance", "Other"];

const faqs = [
  ["Is online therapy secure?", "Yes. We use a HIPAA and GDPR compliant platform that ensures all video and audio communications are encrypted end-to-end."],
  ["How much does a session cost?", "Individual sessions are €80, or €300 for a bundle of 4 sessions. Couples sessions are €120, or €450 for a bundle of 4 sessions. All prices are transparent with no hidden fees."],
  ["Can I cancel my appointment?", "You can cancel or reschedule up to 24 hours before your appointment without penalty. Late cancellations may incur a fee."],
];

const fieldClass = "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
const labelClass = "mb-2 block text-sm font-medium";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? topics[0]);
    const message = String(data.get("message") ?? "");
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:contact@feelbettertherapy.ie?subject=${encodeURIComponent(`[${subject}] Message from ${name}`)}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="home-page min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-calm" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-10 md:pt-12">
          <p className="mb-5 flex items-center gap-2 text-sm text-primary"><span className="h-px w-8 bg-primary/40" />Feel Better Therapy · Contact</p>
          <h1 className="max-w-3xl font-display text-5xl font-light leading-[1.12] lg:text-6xl">We are here <em className="text-primary">to help.</em></h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Whether you have a question about our services, want to verify insurance coverage, or are ready to book your first session, we're here to listen. Fill out the form below and we'll be in touch.</p>
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-6 border-t border-border px-6 py-7 text-center text-sm text-muted-foreground md:grid-cols-3">
          <span><Clock3 className="mx-auto mb-2 size-4 text-primary" aria-hidden="true" /><strong className="block font-normal text-foreground">Quick replies</strong><span className="mt-2 block">We typically respond within 24 hours</span></span>
          <span><ShieldCheck className="mx-auto mb-2 size-4 text-primary" aria-hidden="true" /><strong className="block font-normal text-foreground">Private & confidential</strong><span className="mt-2 block">Your message stays between us</span></span>
          <span><Mail className="mx-auto mb-2 size-4 text-primary" aria-hidden="true" /><strong className="block font-normal text-foreground">Prefer email?</strong><span className="mt-2 block"><a className="underline underline-offset-4 hover:text-primary" href="mailto:contact@feelbettertherapy.ie">contact@feelbettertherapy.ie</a></span></span>
        </div>
      </section>
      <AccreditationStrip />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <Eyebrow n="01">Send a message</Eyebrow>
            <h2 className="font-display text-4xl font-light">Tell us what's on your mind.</h2>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>Full Name</label>
                  <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>Email Address</label>
                  <input id="contact-email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className={labelClass}>Subject</label>
                <select id="contact-subject" name="subject" className={fieldClass} defaultValue={topics[0]}>
                  {topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className={labelClass}>Message</label>
                <textarea id="contact-message" name="message" required rows={6} className={fieldClass} placeholder="How can we help?" />
              </div>
              <p className="text-sm text-muted-foreground">We typically respond within 24 hours.</p>
              <Button type="submit" className="h-auto rounded-full px-7 py-3.5">Send Message <Send className="size-4" aria-hidden="true" /></Button>
              {sent && <p role="status" className="text-sm text-primary">Your email app should now open with your message ready to send.</p>}
            </form>
          </div>

          <aside className="space-y-6">
            <div className="home-service rounded-lg border border-border bg-card p-7 md:p-8">
              <Mail className="size-8 text-primary" strokeWidth={1.4} aria-hidden="true" />
              <h2 className="mt-6 font-display text-3xl font-light">Contact details</h2>
              <p className="mt-4 text-muted-foreground">The quickest way to reach us is by email. We read every message personally.</p>
              <div className="mt-7 border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:contact@feelbettertherapy.ie" className="mt-1 inline-block font-medium text-primary underline-offset-4 hover:underline">contact@feelbettertherapy.ie</a>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-7 md:p-8">
              <ShieldCheck className="size-8 text-primary" strokeWidth={1.4} aria-hidden="true" />
              <h2 className="mt-6 font-display text-3xl font-light">In crisis?</h2>
              <p className="mt-4 text-muted-foreground">Therapy is not an emergency service. If you need support right now, Samaritans are here any time, day or night.</p>
              <a href="tel:116123" className="mt-5 inline-block font-display text-3xl text-primary underline-offset-4 hover:underline">116 123</a>
              <p className="mt-2 text-xs text-muted-foreground">Free to call · 24 hours a day</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-soft-band">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <Eyebrow n="02">Common questions</Eyebrow>
          <h2 className="font-display text-4xl font-light">Before you write.</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium">{question}<span className="shrink-0 text-xl text-primary transition group-open:rotate-45" aria-hidden="true">+</span></summary>
                <p className="mt-4 text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingInvitation title="Ready to feel better?" description="Take the first step towards a healthier mind today. Our therapists are ready to listen." />
      <SiteFooter />
    </div>
  );
}
