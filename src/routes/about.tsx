import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Marée" },
      { name: "description", content: "We are a small studio of travel designers obsessed with coastlines and slow journeys." },
      { property: "og:title", content: "About — Marée" },
      { property: "og:description", content: "A small studio of travel designers obsessed with coastlines." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16">
        <p className="text-xs uppercase tracking-widest text-primary">Our studio</p>
        <h1 className="mt-3 text-5xl md:text-6xl text-balance">A quieter way to plan a trip.</h1>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          Marée began on a small balcony in Lisbon, looking out at the Atlantic. We were tired of itineraries that felt like checklists — and convinced that the best journeys are the ones you barely have to manage.
        </p>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Today we are a team of seven designers, planners and former hoteliers. We work with around 80 boutique partners across the Mediterranean, the Indian Ocean and South-East Asia — most of whom we've stayed with personally.
        </p>
      </section>

      <section className="bg-secondary/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-10">
          {[
            { n: "12", l: "Years designing trips" },
            { n: "1,200+", l: "Guests, gently spoiled" },
            { n: "4.95", l: "Average review (out of 5)" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-6xl text-primary">{s.n}</p>
              <p className="mt-2 text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-4xl md:text-5xl">How we work</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { n: "01", t: "Conversation", d: "A relaxed call about the kind of trip you want — and the kind you don't." },
            { n: "02", t: "A first sketch", d: "Within a few days we share a full itinerary, costs and quiet alternatives." },
            { n: "03", t: "On the coast", d: "We're a message away the whole time, from check-in to the final ferry." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-border/60 p-6 bg-card">
              <p className="text-xs text-primary font-medium">{s.n}</p>
              <h3 className="mt-2 text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
