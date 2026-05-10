import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote, Star, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Marée" },
      { name: "description", content: "Real stories from travellers who let Marée design their coastal escape." },
      { property: "og:title", content: "Testimonials — Marée" },
      { property: "og:description", content: "Reviews from Marée guests across the Mediterranean and beyond." },
    ],
  }),
  component: TestimonialsPage,
});

const reviews = [
  {
    name: "Helena & Mateo",
    trip: "Maldives, 2025",
    rating: 5,
    quote:
      "A private dhoni at sunrise, a tiny island lunch, no rush, ever. Marée planned the kind of trip you only dream about.",
  },
  {
    name: "Priya Sharma",
    trip: "Amalfi Coast, 2024",
    rating: 5,
    quote:
      "Every hotel felt hand-picked for us. The lemon-grove lunch in Ravello is something I'll remember for years.",
  },
  {
    name: "Tom & Iris",
    trip: "Santorini, 2024",
    rating: 5,
    quote:
      "We told them 'quiet, with a view of the caldera' — and they delivered exactly that. Zero stress, all magic.",
  },
  {
    name: "Sofia Andrade",
    trip: "Bali, 2025",
    rating: 5,
    quote:
      "The balance between jungle and ocean was perfect. Our guide felt like a friend by day three.",
  },
  {
    name: "James O'Connor",
    trip: "Algarve, 2023",
    rating: 5,
    quote:
      "Marée found a tiny seaside town none of my friends had heard of. Best holiday of the decade.",
  },
  {
    name: "Yuki Tanaka",
    trip: "Greek Islands, 2025",
    rating: 5,
    quote:
      "Thoughtful, warm and unbelievably organised. Even the ferry transfers felt elegant.",
  },
];

function TestimonialsPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <p className="text-xs uppercase tracking-widest text-primary">Guest stories</p>
        <h1 className="mt-3 text-5xl md:text-6xl max-w-3xl text-balance">
          Travellers who came back changed.
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground text-lg">
          A few words from the people we've designed quiet, sea-side journeys for.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <article
            key={r.name}
            className="rounded-3xl bg-card shadow-card p-7 border border-border/60 flex flex-col"
          >
            <Quote className="h-7 w-7 text-primary/70" />
            <p className="mt-4 text-foreground/90 leading-relaxed flex-1">"{r.quote}"</p>
            <div className="mt-6 flex items-center gap-1">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <div className="mt-3">
              <p className="text-sm font-medium">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.trip}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl bg-gradient-ocean text-primary-foreground px-8 md:px-16 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-glow">
          <div>
            <h2 className="text-3xl md:text-4xl">Ready to write your own?</h2>
            <p className="mt-3 text-primary-foreground/85 max-w-md">
              Tell us about your dream coast — we'll come back with a tailored sketch.
            </p>
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
