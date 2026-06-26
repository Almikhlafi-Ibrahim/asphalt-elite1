export const SITE = {
  name: "نخبة الأسفلت",
  nameEn: "Asphalt Elite",
  tagline: "ريادة في رصف الطرق والبنية التحتية",
  whatsappNumber: "966597522413",
  location: "الرياض، المملكة العربية السعودية",
} as const;

export const WHATSAPP_MESSAGE =
  "السلام عليكم، أرغب بالاستفسار عن خدمات نخبة الأسفلت.";

export const whatsappLink = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { href: "#home", key: "home" },
  { href: "#about", key: "about" },
  { href: "#services", key: "services" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] as const;
