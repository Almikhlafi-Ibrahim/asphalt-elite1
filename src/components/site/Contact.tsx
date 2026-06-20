import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, whatsappLink } from "@/lib/site";

const INFO = [
  {
    icon: MessageCircle,
    title: "واتساب",
    value: `+${SITE.whatsappNumber}`,
    href: whatsappLink(),
  },
  {
    icon: Phone,
    title: "اتصال مباشر",
    value: `+${SITE.whatsappNumber}`,
    href: `tel:+${SITE.whatsappNumber}`,
  },
  { icon: MapPin, title: "الموقع", value: SITE.location },
  { icon: Clock, title: "أوقات العمل", value: "السبت - الخميس: 8 ص - 6 م" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0" style={{ background: "var(--gradient-deep)" }} />
      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-primary-foreground">
            <span className="text-sm font-bold uppercase tracking-widest text-amber">
              تواصل معنا
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              جاهزون لتنفيذ مشروعك القادم
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              تواصل معنا مباشرة عبر واتساب للحصول على استشارة مجانية وعرض سعر
              لمشروعك في رصف الأسفلت أو شبكات البنية التحتية أو الأعمال الإنشائية.
            </p>

            <div className="mt-9">
              <Button asChild variant="whatsapp" size="xl">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  ابدأ المحادثة عبر واتساب
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {INFO.map((item) => {
              const content = (
                <div className="flex h-full flex-col gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 backdrop-blur-sm transition-colors hover:bg-primary-foreground/15">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-amber text-amber-foreground">
                    <item.icon className="size-6" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">
                      {item.title}
                    </div>
                    <div className="mt-1 font-display font-bold text-primary-foreground" dir="ltr">
                      {item.value}
                    </div>
                  </div>
                </div>
              );
              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
