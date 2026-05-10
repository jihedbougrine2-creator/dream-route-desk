import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import hero from "@/assets/hero-coast.jpg";
import santorini from "@/assets/dest-santorini.jpg";
import bali from "@/assets/dest-bali.jpg";
import amalfi from "@/assets/dest-amalfi.jpg";
import maldives from "@/assets/dest-maldives.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marée — Coastal Travel, Curated" },
      { name: "description", content: "Hand-crafted coastal journeys to Santorini, Amalfi, Bali, the Maldives and beyond." },
    ],
  }),
  component: Index,
});

const featured = [
  { name: "Santorini", country: "Greece", img: santorini, price: "from $2,480", days: "7 days" },
  { name: "Amalfi Coast", country: "Italy", img: amalfi, price: "from $3,120", days: "9 days" },
  { name: "Bali", country: "Indonesia", img: bali, price: "from $1,980", days: "10 days" },
  { name: "Maldives", country: "Indian Ocean", img: maldives, price: "from $4,250", days: "6 days" },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={hero}
            alt="Aerial view of a tropical coast with turquoise water and palm trees"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-40 md:pt-40 md:pb-56 text-background">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" /> Spring 2026 collection
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl md:text-7xl leading-[1.05] text-balance">
            Soft mornings,<br/>endless coastlines.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-background/85">
            Marée crafts unhurried journeys to the sea — boutique stays, private boats and quiet beaches you'll remember for years.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium shadow-glow hover:translate-y-[-1px] transition-smooth"
            >
              Explore destinations <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-background/40 px-6 py-3 text-sm font-medium hover:bg-background/10 transition-smooth"
            >
              Talk to a designer
            </Link>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-secondary/50 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {[
            { icon: Compass, t: "Hand-built itineraries", d: "Designed around your pace" },
            { icon: ShieldCheck, t: "24/7 on-trip support", d: "A real human, always" },
            { icon: Leaf, t: "Sea-friendly partners", d: "Low-impact stays only" },
            { icon: Sparkles, t: "1,200+ happy guests", d: "4.95 average rating" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-start gap-3">
              <Icon className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">{t}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured destinations */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">Featured</p>
            <h2 className="mt-2 text-4xl md:text-5xl">Coasts to fall for</h2>
          </div>
          <Link to="/destinations" className="hidden md:inline-flex items-center gap-1 text-sm font-medium hover:text-primary transition-smooth">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((d) => (
            <article key={d.name} className="group rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-glow transition-smooth">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={d.img}
                  alt={`${d.name}, ${d.country}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl">{d.name}</h3>
                  <span className="text-xs text-muted-foreground">{d.days}</span>
                </div>
                <p className="text-sm text-muted-foreground">{d.country}</p>
                <p className="mt-3 text-sm font-medium text-primary">{d.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-gradient-sky border-y border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="font-display text-3xl md:text-4xl leading-snug text-balance">
            "Marée planned the kind of trip you only dream about — a private dhoni at sunrise, a tiny island lunch, no rush, ever."
          </p>
          <p className="mt-6 text-sm text-muted-foreground">Helena & Mateo, Maldives 2025</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-gradient-ocean text-primary-foreground px-8 md:px-16 py-16 md:py-20 shadow-glow flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl">Your next coast,<br/>quietly designed.</h2>
            <p className="mt-4 text-primary-foreground/85">Tell us where you've been dreaming. We reply within a day with a tailored sketch — no obligation.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium hover:translate-y-[-1px] transition-smooth"
          >
            Start planning <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
