export const SITE = {
  name: "نخبة الأسفلت",
  nameEn: "Asphalt Elite",
  tagline: "ريادة في رصف الطرق والبنية التحتية",
  whatsappNumber: "967777136688",
  location: "الرياض، المملكة العربية السعودية",
} as const;

export const WHATSAPP_MESSAGE =
  "السلام عليكم، أرغب بالاستفسار عن خدمات نخبة الأسفلت.";

export const whatsappLink = () =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_LINKS = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#projects", label: "مشاريعنا" },
  { href: "#contact", label: "تواصل معنا" },
] as const;
