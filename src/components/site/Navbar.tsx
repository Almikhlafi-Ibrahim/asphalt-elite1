import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="container-page flex h-18 items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-3">
          <span
            className={cn(
              "grid h-11 w-11 place-items-center rounded-md bg-[var(--gradient-deep)] font-display text-lg font-extrabold text-primary-foreground",
            )}
          >
            نخ
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-display text-lg font-extrabold",
                scrolled ? "text-foreground" : "text-primary-foreground",
              )}
            >
              {SITE.name}
            </span>
            <span
              className={cn(
                "text-[11px] tracking-wide",
                scrolled ? "text-muted-foreground" : "text-primary-foreground/75",
              )}
            >
              {SITE.tagline}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-amber",
                  scrolled ? "text-foreground" : "text-primary-foreground/90",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="whatsapp" size="lg">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <Phone className="size-4" />
              تواصل معنا
            </a>
          </Button>
        </div>

        <button
          className={cn(
            "lg:hidden",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-b border-border shadow-lg">
          <ul className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="whatsapp" size="lg" className="w-full">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <Phone className="size-4" />
                  تواصل معنا عبر واتساب
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
