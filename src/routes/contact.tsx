import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Marée" },
      { name: "description", content: "Tell us about the coast you've been dreaming of. We reply within a day." },
      { property: "og:title", content: "Contact — Marée" },
      { property: "og:description", content: "Start designing your next coastal journey with Marée." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-20 grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-xs uppercase tracking-widest text-primary">Plan with us</p>
          <h1 className="mt-3 text-5xl md:text-6xl text-balance">Tell us about your coast.</h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            A few sentences are plenty — dates, destinations, the feeling you're after. We'll write back with a thoughtful first sketch.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> hello@maree.travel</div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> +1 (555) 014-2280</div>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> 12 Harbour Lane, Lisbon</div>
          </div>
          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Follow our journeys</p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border/60 text-foreground/70 hover:text-primary hover:border-primary transition-smooth"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl bg-card shadow-card p-8 md:p-10 border border-border/60"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="mx-auto h-12 w-12 rounded-full bg-gradient-ocean text-primary-foreground flex items-center justify-center"><Send className="h-5 w-5" /></div>
              <h3 className="mt-5 text-2xl">Thank you.</h3>
              <p className="mt-2 text-muted-foreground text-sm">We'll be in touch within one working day.</p>
            </div>
          ) : (
            <div className="grid gap-5">
              <Field label="Your name"><input required className="input" placeholder="Lena Hart" /></Field>
              <Field label="Email"><input required type="email" className="input" placeholder="lena@example.com" /></Field>
              <Field label="Where to?"><input className="input" placeholder="Greek islands, Maldives…" /></Field>
              <Field label="Tell us more">
                <textarea rows={5} className="input resize-none" placeholder="A relaxed two-week trip in late September…" />
              </Field>
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-smooth">
                Send enquiry <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 4px oklch(0.62 0.13 220 / 0.15); }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
