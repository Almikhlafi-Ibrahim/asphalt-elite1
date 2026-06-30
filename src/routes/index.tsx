import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { I18nProvider } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "سفلتة مداخل الفلل والمنازل بالرياض | سفلتة مواقف وأحواش | نخبة الأسفلت",
      },

      {
        name: "description",
        content:
          "نخبة الأسفلت تقدم خدمات سفلتة مداخل الفلل، المواقف، الأحواش، الاستراحات والطرق الخاصة في الرياض. جودة عالية، تنفيذ سريع، ومعاينة مجانية.",
      },

      {
        name: "keywords",
        content:
          "سفلتة الرياض, سفلتة مداخل فلل بالرياض, سفلتة مداخل منازل, سفلتة مواقف, سفلتة أحواش, سفلتة استراحات, مقاول سفلتة الرياض, ترميم الأسفلت, أسفلت الرياض",
      },

      {
        property: "og:title",
        content:
          "سفلتة مداخل الفلل والمواقف بالرياض | نخبة الأسفلت",
      },

      {
        property: "og:description",
        content:
          "متخصصون في سفلتة مداخل الفلل والمنازل، المواقف، الأحواش والاستراحات في مدينة الرياض بجودة عالية وأسعار منافسة.",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:locale",
        content: "ar_SA",
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content:
          "سفلتة مداخل الفلل والمواقف بالرياض | نخبة الأسفلت",
      },

      {
        name: "twitter:description",
        content:
          "أفضل خدمات سفلتة المداخل والمواقف والأحواش في الرياض مع سرعة التنفيذ وضمان الجودة.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </I18nProvider>
  );
}
