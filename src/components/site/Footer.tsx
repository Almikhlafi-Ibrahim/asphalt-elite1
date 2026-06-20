import { MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logo.png.asset.json";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-asphalt text-asphalt-foreground">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo.url}
                alt={t.site.name}
                width={44}
                height={44}
                loading="lazy"
                className="h-11 w-11 rounded-md object-contain"
              />
              <span className="font-display text-lg font-extrabold">{t.site.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-asphalt-foreground/70">
              {t.footer.about}
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold">{t.footer.quickLinks}</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-asphalt-foreground/70 transition-colors hover:text-amber"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold">{t.footer.contact}</h3>
            <p className="mt-4 text-sm text-asphalt-foreground/70">{t.site.location}</p>
            <p className="mt-2 text-sm text-asphalt-foreground/70" dir="ltr">
              +{SITE.whatsappNumber}
            </p>
            <a
              href={whatsappLink(t.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" />
              {t.footer.whatsappCta}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-asphalt-foreground/15 pt-6 text-center text-sm text-asphalt-foreground/60">
          © {new Date().getFullYear()} {t.site.name} — {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
