import { Link } from "@tanstack/react-router";
import { Waves } from "lucide-react";

export function SiteHeader() {
  const linkClass =
    "text-sm font-medium text-foreground/70 hover:text-foreground transition-smooth";
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-ocean text-primary-foreground shadow-soft">
            <Waves className="h-4 w-4" />
          </span>
          <span className="font-display text-xl tracking-tight">Marée</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" activeOptions={{ exact: true }} className={linkClass} activeProps={{ className: "text-foreground" }}>Home</Link>
          <Link to="/destinations" className={linkClass} activeProps={{ className: "text-foreground" }}>Destinations</Link>
          <Link to="/about" className={linkClass} activeProps={{ className: "text-foreground" }}>About</Link>
          <Link to="/contact" className={linkClass} activeProps={{ className: "text-foreground" }}>Contact</Link>
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-smooth"
        >
          Plan a trip
        </Link>
      </div>
    </header>
  );
}
