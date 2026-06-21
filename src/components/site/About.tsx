import { ShieldCheck, Target, Award, Layers } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import aboutImage from "@/assets/photo_2026-06-20_20-18-03.jpg";

const ICONS = [ShieldCheck, Target, Award, Layers];

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="bg-background py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
              <img
                src={aboutImage}
                alt={t.about.imageAlt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-[var(--gradient-deep)] px-7 py-5 text-primary-foreground shadow-[var(--shadow-card)] sm:block">
              <div className="font-display text-3xl font-extrabold text-amber">{t.about.badgeValue}</div>
              <div className="text-sm text-primary-foreground/85">{t.about.badgeLabel}</div>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-amber">
              {t.about.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {t.about.p1}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t.about.p2}
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {t.about.values.map((v, i) => {
                const Icon = ICONS[i];
                return (
                  <div key={v.title} className="flex gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground">
                        {v.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
