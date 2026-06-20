import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import asphaltImg from "@/assets/photo_2026-06-20_20-18-31.jpg.asset.json";
import networksImg from "@/assets/photo_2026-06-20_20-17-36.jpg.asset.json";
import concreteImg from "@/assets/photo_2026-06-20_20-17-49.jpg.asset.json";

const IMAGES = [asphaltImg.url, networksImg.url, concreteImg.url];

export function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="bg-secondary/60 py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.services.desc}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={IMAGES[i]}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-asphalt/70 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-extrabold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappLink(t.whatsappMessage)} target="_blank" rel="noopener noreferrer">
              {t.services.cta}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
