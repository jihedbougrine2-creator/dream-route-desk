import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Leaf, ShieldCheck, Sparkles, Search, Quote, Star, Code2, Github } from "lucide-react";
import { useMemo, useState } from "react";
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

type Category = "All" | "Island" | "Romantic" | "Family" | "Adventure";
type PriceBand = "all" | "under2500" | "2500to3500" | "over3500";

const featured: { name: string; country: string; img: string; price: number; days: number; category: Exclude<Category, "All"> }[] = [
  { name: "Santorini", country: "Greece", img: santorini, price: 2480, days: 7, category: "Romantic" },
  { name: "Amalfi Coast", country: "Italy", img: amalfi, price: 3120, days: 9, category: "Romantic" },
  { name: "Bali", country: "Indonesia", img: bali, price: 1980, days: 10, category: "Adventure" },
  { name: "Maldives", country: "Indian Ocean", img: maldives, price: 4250, days: 6, category: "Island" },
];

const categories: Category[] = ["All", "Island", "Romantic", "Family", "Adventure"];

const homeReviews = [
  { name: "Helena & Mateo", trip: "Maldives, 2025", quote: "A private dhoni at sunrise, a tiny island lunch, no rush, ever." },
  { name: "Priya Sharma", trip: "Amalfi Coast, 2024", quote: "Every hotel felt hand-picked for us. The lemon-grove lunch is unforgettable." },
  { name: "Tom & Iris", trip: "Santorini, 2024", quote: "We said 'quiet, with a view of the caldera' — they delivered exactly that." },
];

function Index() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [price, setPrice] = useState<PriceBand>("all");

  const filtered = useMemo(() => {
    return featured.filter((d) => {
      if (category !== "All" && d.category !== category) return false;
      if (price === "under2500" && d.price >= 2500) return false;
      if (price === "2500to3500" && (d.price < 2500 || d.price > 3500)) return false;
      if (price === "over3500" && d.price <= 3500) return false;
      const q = query.trim().toLowerCase();
      if (q && !`${d.name} ${d.country}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, category, price]);

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

      {/* Search & filters */}
      <section className="mx-auto max-w-5xl px-6 -mt-16 md:-mt-20 relative z-10">
        <div className="rounded-3xl bg-card shadow-glow border border-border/60 p-5 md:p-6 grid gap-4 md:grid-cols-[1.6fr_1fr_1fr]">
          <label className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations…"
              className="w-full rounded-xl bg-background border border-border pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-smooth"
            />
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c === "All" ? "All categories" : c}</option>
            ))}
          </select>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value as PriceBand)}
            className="rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary"
          >
            <option value="all">Any price</option>
            <option value="under2500">Under $2,500</option>
            <option value="2500to3500">$2,500 – $3,500</option>
            <option value="over3500">Over $3,500</option>
          </select>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-secondary/50 border-y border-border/60 mt-20">
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
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border p-16 text-center text-muted-foreground">
            No destinations match those filters yet — try widening your search.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((d) => (
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
                    <span className="text-xs text-muted-foreground">{d.days} days</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{d.country} · {d.category}</p>
                  <p className="mt-3 text-sm font-medium text-primary">from ${d.price.toLocaleString()}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-sky border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary">Loved by guests</p>
              <h2 className="mt-2 text-4xl md:text-5xl">Stories from the shore</h2>
            </div>
            <Link to="/testimonials" className="hidden md:inline-flex items-center gap-1 text-sm font-medium hover:text-primary transition-smooth">
              All reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {homeReviews.map((r) => (
              <article key={r.name} className="rounded-3xl bg-card p-7 shadow-card border border-border/60 flex flex-col">
                <Quote className="h-7 w-7 text-primary/70" />
                <p className="mt-4 text-foreground/90 leading-relaxed flex-1">"{r.quote}"</p>
                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.trip}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* My Tech Projects */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-border/60 bg-card p-10 md:p-14 shadow-card grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary inline-flex items-center gap-2">
              <Code2 className="h-3.5 w-3.5" /> Beyond travel
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl">My Tech Projects</h2>
            <p className="mt-5 text-muted-foreground max-w-xl leading-relaxed">
              When I'm not designing coastal journeys, I build web applications and explore algorithmic problem solving.
              Browse my open-source work, experiments and ongoing projects on GitHub.
            </p>
            <a
              href="https://github.com/jihedbougrine2-creator"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:translate-y-[-1px] transition-smooth"
            >
              <Github className="h-4 w-4" /> View my GitHub
            </a>
          </div>
          <div className="relative aspect-square rounded-2xl bg-gradient-ocean shadow-glow flex items-center justify-center text-primary-foreground">
            <Github className="h-24 w-24 opacity-90" />
          </div>
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
