import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function SiteFooter() {
  const socials = [
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <h4 className="font-display text-lg mb-2">Marée</h4>
          <p className="text-muted-foreground max-w-xs">
            Slow travel along the world's most beautiful coastlines, curated for every season.
          </p>
        </div>
        <div>
          <h5 className="font-medium mb-3">Contact</h5>
          <p className="text-muted-foreground">hello@maree.travel</p>
          <p className="text-muted-foreground">+1 (555) 014-2280</p>
        </div>
        <div>
          <h5 className="font-medium mb-3">Studio</h5>
          <p className="text-muted-foreground">12 Harbour Lane</p>
          <p className="text-muted-foreground">Lisbon, Portugal</p>
        </div>
        <div>
          <h5 className="font-medium mb-3">Follow</h5>
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background border border-border/60 text-foreground/70 hover:text-primary hover:border-primary transition-smooth"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Marée Travel Co. All rights reserved.
      </div>
    </footer>
  );
}
