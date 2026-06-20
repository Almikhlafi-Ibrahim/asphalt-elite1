import { ShieldCheck, Target, Award, Layers } from "lucide-react";
import { SITE } from "@/lib/site";
import aboutImage from "@/assets/photo_2026-06-20_20-18-03.jpg.asset.json";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "المتانة",
    desc: "نستخدم أجود المواد وأحدث المعدات لضمان طرق وبنية تحتية تدوم طويلاً.",
  },
  {
    icon: Target,
    title: "الدقة",
    desc: "تنفيذ هندسي دقيق وفق أعلى المعايير في كل مرحلة من مراحل المشروع.",
  },
  {
    icon: Award,
    title: "التميّز",
    desc: "خبرة ميدانية وفريق محترف يقدّم نتائج تتجاوز توقعات عملائنا.",
  },
  {
    icon: Layers,
    title: "التكامل",
    desc: "حلول متكاملة من الأسفلت إلى الشبكات والخرسانة تحت مظلة واحدة.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
              <img
                src={aboutImage.url}
                alt="أعمال رصف الأسفلت لشركة نخبة الأسفلت"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-[var(--gradient-deep)] px-7 py-5 text-primary-foreground shadow-[var(--shadow-card)] sm:block">
              <div className="font-display text-3xl font-extrabold text-amber">+15</div>
              <div className="text-sm text-primary-foreground/85">عاماً في الميدان</div>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-amber">
              من نحن
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              شريكك الموثوق في بناء البنية التحتية
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              تأسست {SITE.name} لتكون في طليعة شركات المقاولات المتخصصة في رصف
              الأسفلت وإنشاء الطرق وشبكات البنية التحتية. نلتزم بالمتانة والدقة
              والتميّز في كل مشروع نضع بصمتنا فيه، مدعومين بأسطول حديث من المعدات
              وكوادر فنية وهندسية ذات خبرة عالية.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              نؤمن بأن جودة الطرق والبنية التحتية أساس لتنمية المجتمعات، لذلك
              نحرص على تسليم مشاريعنا بأعلى المعايير وفي المواعيد المحددة.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {VALUES.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                    <v.icon className="size-6" />
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
