import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ar" | "en";

type Dict = typeof translations.ar;

export const translations = {
  ar: {
    dir: "rtl",
    site: {
      name: "نخبة الأسفلت",
      tagline: "ريادة في رصف الطرق والبنية التحتية",
      location: "الرياض، المملكة العربية السعودية",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      contact: "تواصل معنا",
      contactCta: "تواصل معنا",
    },
    langToggle: "EN",
    hero: {
      badge: "مقاولات الطرق والبنية التحتية",
      titleLine1: "نبني طرقاً تدوم،",
      titleLine2: "بإتقان ومتانة وريادة",
      desc: "شركة متخصصة في رصف الأسفلت عالي الجودة، وإنشاء الطرق، وشبكات المياه والصرف والكهرباء، والأعمال الإنشائية والخرسانية — بخبرة ميدانية وأسطول معدات متكامل.",
      ctaWhatsapp: "تواصل معنا عبر واتساب",
      ctaServices: "تعرّف على خدماتنا",
      stats: [
        { value: "+15", label: "عاماً من الخبرة" },
        { value: "+450", label: "مشروع منجز" },
        { value: "+200", label: "آلية ومعدة" },
        { value: "100%", label: "التزام بالجودة" },
      ],
    },
    about: {
      eyebrow: "من نحن",
      title: "شريكك الموثوق في بناء البنية التحتية",
      p1: "تأسست نخبة الأسفلت لتكون في طليعة شركات المقاولات المتخصصة في رصف الأسفلت وإنشاء الطرق وشبكات البنية التحتية. نلتزم بالمتانة والدقة والتميّز في كل مشروع نضع بصمتنا فيه، مدعومين بأسطول حديث من المعدات وكوادر فنية وهندسية ذات خبرة عالية.",
      p2: "نؤمن بأن جودة الطرق والبنية التحتية أساس لتنمية المجتمعات، لذلك نحرص على تسليم مشاريعنا بأعلى المعايير وفي المواعيد المحددة.",
      badgeValue: "+15",
      badgeLabel: "عاماً في الميدان",
      imageAlt: "أعمال رصف الأسفلت لشركة نخبة الأسفلت",
      values: [
        { title: "المتانة", desc: "نستخدم أجود المواد وأحدث المعدات لضمان طرق وبنية تحتية تدوم طويلاً." },
        { title: "الدقة", desc: "تنفيذ هندسي دقيق وفق أعلى المعايير في كل مرحلة من مراحل المشروع." },
        { title: "التميّز", desc: "خبرة ميدانية وفريق محترف يقدّم نتائج تتجاوز توقعات عملائنا." },
        { title: "التكامل", desc: "حلول متكاملة من الأسفلت إلى الشبكات والخرسانة تحت مظلة واحدة." },
      ],
    },
    services: {
      eyebrow: "خدماتنا",
      title: "حلول متكاملة للطرق والبنية التحتية",
      desc: "نقدّم ثلاثة محاور رئيسية من الخدمات لتغطية مشروعك من الأساس حتى التسليم.",
      cta: "اطلب عرض سعر الآن",
      items: [
        {
          title: "رصف الأسفلت والطرق",
          desc: "أعمال أسفلتية متكاملة من قشط ورش سائل وفرد ورص طبقات الأسفلت لتنفيذ طرق متينة بمواصفات عالية.",
          features: ["قشط ورش طبقات التأسيس", "فرد ورص الأسفلت", "تنفيذ الطرق والساحات", "صيانة وإصلاح الطرق"],
        },
        {
          title: "شبكات البنية التحتية",
          desc: "تنفيذ كافة أعمال شبكات المياه والصرف الصحي وتصريف السيول وأعمال الكهرباء بكفاءة واحترافية.",
          features: ["شبكات المياه والصرف الصحي", "تصريف السيول", "أعمال الكهرباء", "أعمال الحفر والردم"],
        },
        {
          title: "الإنشاءات والخرسانة",
          desc: "أعمال البناء والخرسانة المسلحة من الأساسات والأعمدة إلى الهياكل الإنشائية بدقة هندسية عالية.",
          features: ["الأساسات والقواعد", "الخرسانة المسلحة", "أعمال البناء", "العزل والتشطيبات"],
        },
      ],
    },
    projects: {
      eyebrow: "مشاريعنا",
      title: "نماذج من أعمالنا المنجزة والجارية",
      desc: "مجموعة من مشاريع رصف الأسفلت وشبكات البنية التحتية والأعمال الإنشائية التي نفّذناها بأعلى معايير الجودة.",
      items: [
        { title: "رصف طرق سكنية", tag: "أسفلت" },
        { title: "ساحات وأرصفة", tag: "أسفلت" },
        { title: "أعمال أسفلتية طرق رئيسية", tag: "أسفلت" },
        { title: "مد شبكات المياه والصرف", tag: "شبكات" },
        { title: "أعمال البناء والخرسانة", tag: "إنشاءات" },
        { title: "أسطول المعدات والآليات", tag: "معدات" },
        { title: "تأجير المعدات الثقيلة", tag: "معدات" },
      ],
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "جاهزون لتنفيذ مشروعك القادم",
      desc: "تواصل معنا مباشرة عبر واتساب للحصول على استشارة مجانية وعرض سعر لمشروعك في رصف الأسفلت أو شبكات البنية التحتية أو الأعمال الإنشائية.",
      cta: "ابدأ المحادثة عبر واتساب",
      info: {
        whatsapp: "واتساب",
        call: "اتصال مباشر",
        location: "الموقع",
        hours: "أوقات العمل",
        hoursValue: "السبت - الخميس: 8 ص - 6 م",
      },
    },
    footer: {
      about: "شركة متخصصة في رصف الأسفلت وإنشاء الطرق وشبكات البنية التحتية والأعمال الإنشائية، بخبرة وريادة في الميدان.",
      quickLinks: "روابط سريعة",
      contact: "تواصل معنا",
      whatsappCta: "راسلنا على واتساب",
      rights: "جميع الحقوق محفوظة.",
    },
    whatsappMessage: "السلام عليكم، أرغب بالاستفسار عن خدمات نخبة الأسفلت.",
    whatsappAria: "تواصل معنا عبر واتساب",
  },
  en: {
    dir: "ltr",
    site: {
      name: "Asphalt Elite",
      tagline: "Leaders in roadworks & infrastructure",
      location: "Riyadh, Saudi Arabia",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      contactCta: "Contact Us",
    },
    langToggle: "ع",
    hero: {
      badge: "Roadworks & Infrastructure Contracting",
      titleLine1: "We build roads that last,",
      titleLine2: "with precision, durability & leadership",
      desc: "Asphalt Elite specializes in high-quality asphalt paving, road construction, water, drainage and electrical networks, and structural concrete works — backed by field experience and a complete fleet of equipment.",
      ctaWhatsapp: "Contact us on WhatsApp",
      ctaServices: "Explore our services",
      stats: [
        { value: "+15", label: "Years of experience" },
        { value: "+450", label: "Projects delivered" },
        { value: "+200", label: "Machines & equipment" },
        { value: "100%", label: "Quality commitment" },
      ],
    },
    about: {
      eyebrow: "About Us",
      title: "Your trusted partner in building infrastructure",
      p1: "Asphalt Elite was founded to lead the field of contracting companies specialized in asphalt paving, road construction, and infrastructure networks. We are committed to durability, precision, and excellence in every project we put our mark on, supported by a modern fleet of equipment and highly experienced technical and engineering teams.",
      p2: "We believe quality roads and infrastructure are the foundation of thriving communities, which is why we deliver our projects to the highest standards and on schedule.",
      badgeValue: "+15",
      badgeLabel: "Years in the field",
      imageAlt: "Asphalt paving work by Asphalt Elite",
      values: [
        { title: "Durability", desc: "We use the finest materials and latest equipment to ensure long-lasting roads and infrastructure." },
        { title: "Precision", desc: "Accurate engineering execution to the highest standards at every project stage." },
        { title: "Excellence", desc: "Field experience and a professional team delivering results that exceed expectations." },
        { title: "Integration", desc: "Complete solutions from asphalt to networks and concrete under one roof." },
      ],
    },
    services: {
      eyebrow: "Our Services",
      title: "Integrated solutions for roads & infrastructure",
      desc: "We offer three core service pillars to cover your project from the ground up to handover.",
      cta: "Request a quote now",
      items: [
        {
          title: "Asphalt Paving & Roads",
          desc: "Complete asphalt works — milling, tack coat, laying and compacting asphalt layers to deliver durable, high-spec roads.",
          features: ["Milling & base layer prep", "Asphalt laying & compaction", "Roads & yards execution", "Road maintenance & repair"],
        },
        {
          title: "Infrastructure Networks",
          desc: "Execution of all water, sewage and stormwater drainage works, plus electrical works, with efficiency and professionalism.",
          features: ["Water & sewage networks", "Stormwater drainage", "Electrical works", "Excavation & backfilling"],
        },
        {
          title: "Construction & Concrete",
          desc: "Construction and reinforced concrete works from foundations and columns to structural frames with high engineering precision.",
          features: ["Foundations & footings", "Reinforced concrete", "Construction works", "Insulation & finishing"],
        },
      ],
    },
    projects: {
      eyebrow: "Our Projects",
      title: "Samples of our completed & ongoing work",
      desc: "A selection of asphalt paving, infrastructure network, and construction projects we have delivered to the highest quality standards.",
      items: [
        { title: "Residential road paving", tag: "Asphalt" },
        { title: "Yards & sidewalks", tag: "Asphalt" },
        { title: "Main road asphalt works", tag: "Asphalt" },
        { title: "Water & drainage networks", tag: "Networks" },
        { title: "Construction & concrete works", tag: "Construction" },
        { title: "Equipment & machinery fleet", tag: "Equipment" },
        { title: "Heavy equipment rental", tag: "Equipment" },
      ],
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Ready to deliver your next project",
      desc: "Contact us directly on WhatsApp for a free consultation and a quote for your asphalt paving, infrastructure network, or construction project.",
      cta: "Start the chat on WhatsApp",
      info: {
        whatsapp: "WhatsApp",
        call: "Direct call",
        location: "Location",
        hours: "Working hours",
        hoursValue: "Sat - Thu: 8 AM - 6 PM",
      },
    },
    footer: {
      about: "A company specialized in asphalt paving, road construction, infrastructure networks, and construction works — with experience and leadership in the field.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      whatsappCta: "Message us on WhatsApp",
      rights: "All rights reserved.",
    },
    whatsappMessage: "Hello, I would like to inquire about Asphalt Elite's services.",
    whatsappAria: "Contact us on WhatsApp",
  },
} as const;

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "ae-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      window.localStorage.getItem(STORAGE_KEY)) as Lang | null;
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((p) => (p === "ar" ? "en" : "ar"));

  return (
    <I18nContext.Provider
      value={{ lang, setLang, toggle, t: translations[lang] }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
