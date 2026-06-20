import { MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-asphalt text-asphalt-foreground">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-[var(--gradient-deep)] font-display text-lg font-extrabold text-primary-foreground">
                نخ
              </span>
              <span className="font-display text-lg font-extrabold">{SITE.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-asphalt-foreground/70">
              شركة متخصصة في رصف الأسفلت وإنشاء الطرق وشبكات البنية التحتية
              والأعمال الإنشائية، بخبرة وريادة في الميدان.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold">روابط سريعة</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-asphalt-foreground/70 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold">تواصل معنا</h3>
            <p className="mt-4 text-sm text-asphalt-foreground/70">{SITE.location}</p>
            <p className="mt-2 text-sm text-asphalt-foreground/70" dir="ltr">
              +{SITE.whatsappNumber}
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" />
              راسلنا على واتساب
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-asphalt-foreground/15 pt-6 text-center text-sm text-asphalt-foreground/60">
          © {new Date().getFullYear()} {SITE.name} — جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
