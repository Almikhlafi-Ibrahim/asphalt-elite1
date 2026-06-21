import { useI18n } from "@/lib/i18n";
// import img1 from "@/assets/photo_2026-06-20_20-18-31.jpg.asset.json";
// import img2 from "@/assets/photo_2026-06-20_20-18-03.jpg.asset.json";
// import img3 from "@/assets/photo_2026-06-20_20-18-39.jpg.asset.json";
// import img4 from "@/assets/photo_2026-06-20_20-17-36.jpg.asset.json";
// import img5 from "@/assets/photo_2026-06-20_20-17-49.jpg.asset.json";
// import img6 from "@/assets/photo_2026-06-20_20-18-26.jpg.asset.json";
// import img7 from "@/assets/photo_2026-06-20_20-16-17.jpg.asset.json";


import img1 from "@/assets/photo_2026-06-20_20-18-31.jpg";
import img2 from "@/assets/photo_2026-06-20_20-18-03.jpg";
import img3 from "@/assets/photo_2026-06-20_20-18-39.jpg";
import img4 from "@/assets/photo_2026-06-20_20-17-36.jpg";
import img5 from "@/assets/photo_2026-06-20_20-17-49.jpg";
import img6 from "@/assets/photo_2026-06-20_20-18-26.jpg";
import img7 from "@/assets/photo_2026-06-20_20-16-17.jpg";
// const LAYOUT = [
//   { src: img1.url, span: "lg:col-span-2 lg:row-span-2" },
//   { src: img2.url, span: "" },
//   { src: img3.url, span: "" },
//   { src: img4.url, span: "lg:col-span-2" },
//   { src: img5.url, span: "" },
//   { src: img6.url, span: "" },
//   { src: img7.url, span: "lg:col-span-2" },
// ];
const LAYOUT = [
  { src: img1, span: "lg:col-span-2 lg:row-span-2" },
  { src: img2, span: "" },
  { src: img3, span: "" },
  { src: img4, span: "lg:col-span-2" },
  { src: img5, span: "" },
  { src: img6, span: "" },
  { src: img7, span: "lg:col-span-2" },
];
export function Projects() {
  const { t } = useI18n();
  return (
    <section id="projects" className="bg-background py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber">
            {t.projects.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.projects.desc}
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.projects.items.map((p, i) => (
            <figure
              key={p.title}
              className={`group relative overflow-hidden rounded-xl shadow-[var(--shadow-card)] ${LAYOUT[i].span}`}
            >
              <img
                src={LAYOUT[i].src}
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
