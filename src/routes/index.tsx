import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "نخبة الأسفلت | رصف الطرق وشبكات البنية التحتية" },
      {
        name: "description",
        content:
          "نخبة الأسفلت — شركة مقاولات متخصصة في رصف الأسفلت وإنشاء الطرق وشبكات المياه والصرف والكهرباء والأعمال الإنشائية والخرسانية بجودة ومتانة عالية في الرياض.",
      },
      { property: "og:title", content: "نخبة الأسفلت | رصف الطرق وشبكات البنية التحتية" },
      {
        property: "og:description",
        content:
          "خبرة وريادة في رصف الأسفلت وإنشاء الطرق وشبكات البنية التحتية والأعمال الخرسانية.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
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
  );
}
