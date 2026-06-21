import { useEffect, useState } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, toggle } = useI18n();

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
          <img
            src={logo}
            alt={t.site.name}
            width={44}
            height={44}
            className="h-11 w-11 rounded-md object-contain"
          />
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-display text-lg font-extrabold",
                scrolled ? "text-foreground" : "text-primary-foreground",
              )}
            >
              {t.site.name}
            </span>
            <span
              className={cn(
                "text-[11px] tracking-wide",
                scrolled ? "text-muted-foreground" : "text-primary-foreground/75",
              )}
            >
              {t.site.tagline}
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
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggle}
            aria-label="Switch language"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm font-bold transition-colors",
              scrolled
                ? "border-border text-foreground hover:bg-secondary"
                : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
            )}
          >
            <Globe className="size-4" />
            {t.langToggle}
          </button>
          <Button asChild variant="whatsapp" size="lg">
            <a href={whatsappLink(t.whatsappMessage)} target="_blank" rel="noopener noreferrer">
              <Phone className="size-4" />
              {t.nav.contactCta}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggle}
            aria-label="Switch language"
            className={cn(
              "inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-sm font-bold",
              scrolled
                ? "border-border text-foreground"
                : "border-primary-foreground/30 text-primary-foreground",
            )}
          >
            <Globe className="size-4" />
            {t.langToggle}
          </button>
          <button
            className={cn(scrolled ? "text-foreground" : "text-primary-foreground")}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="size-7" /> : <Menu className="size-7" />}
          </button>
        </div>
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
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="whatsapp" size="lg" className="w-full">
                <a href={whatsappLink(t.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                  <Phone className="size-4" />
                  {t.nav.contactCta}
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
