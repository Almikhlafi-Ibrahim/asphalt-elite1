import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function WhatsAppFloat() {
  const { t } = useI18n();
  return (
    <a
      href={whatsappLink(t.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappAria}
      className="fixed bottom-6 left-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] transition-transform hover:scale-110"
    >
      <MessageCircle className="size-7" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50" />
    </a>
  );
}
