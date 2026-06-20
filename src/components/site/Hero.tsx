import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import heroImage from "@/assets/hero-paving.jpg";

export function Hero() {
  const { t, lang } = useI18n();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <img
        src={heroImage}
        alt={t.about.imageAlt}
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 bg-asphalt/30" />

      <div className="container-page relative flex min-h-screen flex-col justify-center pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-amber" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            {t.hero.titleLine1}
            <br />
            <span className="text-amber">{t.hero.titleLine2}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
            {t.hero.desc}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappLink(t.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                <Phone className="size-5" />
                {t.hero.ctaWhatsapp}
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="#services">
                {t.hero.ctaServices}
                <Arrow className="size-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 backdrop-blur-sm sm:max-w-2xl lg:grid-cols-4">
          {t.hero.stats.map((s) => (
            <div key={s.label} className="bg-asphalt/40 px-5 py-6 text-center">
              <div className="font-display text-3xl font-extrabold text-amber">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-primary-foreground/80">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
