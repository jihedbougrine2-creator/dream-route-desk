import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import santorini from "@/assets/dest-santorini.jpg";
import bali from "@/assets/dest-bali.jpg";
import amalfi from "@/assets/dest-amalfi.jpg";
import maldives from "@/assets/dest-maldives.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Marée" },
      { name: "description", content: "Curated coastal destinations: Santorini, Amalfi, Bali, Maldives and more." },
      { property: "og:title", content: "Destinations — Marée" },
      { property: "og:description", content: "Curated coastal destinations from the Mediterranean to the Indian Ocean." },
    ],
  }),
  component: DestinationsPage,
});

const destinations = [
  { name: "Santorini", country: "Greece", img: santorini, days: "7 days", price: "from $2,480", desc: "Whitewashed villages above the caldera, slow ferries between hidden coves." },
  { name: "Amalfi Coast", country: "Italy", img: amalfi, days: "9 days", price: "from $3,120", desc: "Lemon groves, cliff-top terraces and long lunches that drift into evening." },
  { name: "Bali", country: "Indonesia", img: bali, days: "10 days", price: "from $1,980", desc: "Overwater villas, jungle temples and reef snorkels you'll never forget." },
  { name: "Maldives", country: "Indian Ocean", img: maldives, days: "6 days", price: "from $4,250", desc: "Private atolls, glass-clear lagoons and sunsets the colour of peach silk." },
];

function DestinationsPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <p className="text-xs uppercase tracking-widest text-primary">The Marée collection</p>
        <h1 className="mt-3 text-5xl md:text-6xl max-w-3xl text-balance">Eighteen coastlines. One slower way to travel.</h1>
        <p className="mt-6 max-w-xl text-muted-foreground text-lg">
          Each journey below is a starting point — every stay, transfer and quiet beach is tailored once we've spoken.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-12">
        {destinations.map((d, i) => (
          <article
            key={d.name}
            className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src={d.img}
                alt={`${d.name}, ${d.country}`}
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-[420px] md:h-[520px] object-cover hover:scale-105 transition-smooth"
              />
            </div>
            <div className="md:px-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{d.country}</p>
              <h2 className="mt-2 text-4xl md:text-5xl">{d.name}</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-md">{d.desc}</p>
              <div className="mt-6 flex items-center gap-6 text-sm">
                <span className="text-foreground font-medium">{d.price}</span>
                <span className="text-muted-foreground">{d.days}</span>
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-smooth"
              >
                Design this trip <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
