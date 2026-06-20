import img1 from "@/assets/photo_2026-06-20_20-18-31.jpg.asset.json";
import img2 from "@/assets/photo_2026-06-20_20-18-03.jpg.asset.json";
import img3 from "@/assets/photo_2026-06-20_20-18-39.jpg.asset.json";
import img4 from "@/assets/photo_2026-06-20_20-17-36.jpg.asset.json";
import img5 from "@/assets/photo_2026-06-20_20-17-49.jpg.asset.json";
import img6 from "@/assets/photo_2026-06-20_20-18-26.jpg.asset.json";
import img7 from "@/assets/photo_2026-06-20_20-16-17.jpg.asset.json";

const PROJECTS = [
  { src: img1.url, title: "رصف طرق سكنية", tag: "أسفلت", span: "lg:col-span-2 lg:row-span-2" },
  { src: img2.url, title: "ساحات وأرصفة", tag: "أسفلت", span: "" },
  { src: img3.url, title: "أعمال أسفلتية طرق رئيسية", tag: "أسفلت", span: "" },
  { src: img4.url, title: "مد شبكات المياه والصرف", tag: "شبكات", span: "lg:col-span-2" },
  { src: img5.url, title: "أعمال البناء والخرسانة", tag: "إنشاءات", span: "" },
  { src: img6.url, title: "أسطول المعدات والآليات", tag: "معدات", span: "" },
  { src: img7.url, title: "تأجير المعدات الثقيلة", tag: "معدات", span: "lg:col-span-2" },
];

export function Projects() {
  return (
    <section id="projects" className="bg-background py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber">
            مشاريعنا
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            نماذج من أعمالنا المنجزة والجارية
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            مجموعة من مشاريع رصف الأسفلت وشبكات البنية التحتية والأعمال الإنشائية
            التي نفّذناها بأعلى معايير الجودة.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p) => (
            <figure
              key={p.title}
              className={`group relative overflow-hidden rounded-xl shadow-[var(--shadow-card)] ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-asphalt/85 via-asphalt/10 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-block rounded-full bg-amber px-3 py-1 text-xs font-bold text-amber-foreground">
                  {p.tag}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-primary-foreground">
                  {p.title}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
