import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Tag } from "lucide-react";
import santorini from "@/assets/dest-santorini.jpg";
import bali from "@/assets/dest-bali.jpg";
import amalfi from "@/assets/dest-amalfi.jpg";
import maldives from "@/assets/dest-maldives.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Travel Packages — Marée" },
      { name: "description", content: "Explore curated coastal travel packages: island escapes, romantic getaways, family voyages and more." },
      { property: "og:title", content: "Travel Packages — Marée" },
      { property: "og:description", content: "Curated coastal travel packages from the Mediterranean to the Indian Ocean." },
    ],
  }),
  component: DestinationsPage,
});

export type Package = {
  name: string;
  country: string;
  img: string;
  days: number;
  price: number;
  category: "Island" | "Romantic" | "Family" | "Adventure";
  desc: string;
};

export const packages: Package[] = [
  { name: "Santorini Caldera", country: "Greece", img: santorini, days: 7, price: 2480, category: "Romantic", desc: "Whitewashed villages above the caldera, slow ferries between hidden coves." },
  { name: "Amalfi Coast", country: "Italy", img: amalfi, days: 9, price: 3120, category: "Romantic", desc: "Lemon groves, cliff-top terraces and long lunches that drift into evening." },
  { name: "Bali Escape", country: "Indonesia", img: bali, days: 10, price: 1980, category: "Adventure", desc: "Overwater villas, jungle temples and reef snorkels you'll never forget." },
  { name: "Maldives Atolls", country: "Indian Ocean", img: maldives, days: 6, price: 4250, category: "Island", desc: "Private atolls, glass-clear lagoons and sunsets the colour of peach silk." },
  { name: "Greek Island Hop", country: "Greece", img: santorini, days: 12, price: 3480, category: "Family", desc: "Ferry-hop through Paros, Naxos and Milos with kid-friendly stays." },
  { name: "Bali Family Reef", country: "Indonesia", img: bali, days: 8, price: 2280, category: "Family", desc: "Gentle snorkels, rice-paddy walks and a villa with its own pool." },
];

function DestinationsPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <p className="text-xs uppercase tracking-widest text-primary">Travel packages</p>
        <h1 className="mt-3 text-5xl md:text-6xl max-w-3xl text-balance">Eighteen coastlines. One slower way to travel.</h1>
        <p className="mt-6 max-w-xl text-muted-foreground text-lg">
          Each package is a starting point — every stay, transfer and quiet beach is tailored once we've spoken.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((d) => (
          <article key={d.name} className="group rounded-3xl overflow-hidden bg-card shadow-card hover:shadow-glow transition-smooth flex flex-col">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={d.img}
                alt={`${d.name}, ${d.country}`}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-smooth"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{d.country}</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
                  <Tag className="h-3 w-3" /> {d.category}
                </span>
              </div>
              <h2 className="mt-2 text-2xl">{d.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{d.desc}</p>
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="font-medium text-primary">from ${d.price.toLocaleString()}</span>
                <span className="inline-flex items-center gap-1 text-muted-foreground"><Clock className="h-3.5 w-3.5" />{d.days} days</span>
              </div>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-smooth"
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
