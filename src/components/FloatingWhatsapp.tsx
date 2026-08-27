"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { contactInfo, waLink } from "@/lib/dictionary";

export default function FloatingWhatsapp() {
  const { t, lang } = useLanguage();

  return (
    <a
      href={waLink(contactInfo.whatsappNumber, lang === "ar" ? "مرحباً، أرغب بالاستفسار" : "Hello, I'd like to make an inquiry")}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pe-4 ps-3 text-charcoal shadow-lg shadow-black/40 transition-transform hover:scale-105"
      style={{ insetInlineEnd: "1.25rem" }}
      aria-label={t.floatingWhatsapp}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50" />
      <MessageCircle className="h-6 w-6 shrink-0" fill="currentColor" strokeWidth={0} />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap font-body text-sm font-semibold transition-all duration-300 group-hover:max-w-xs sm:inline-block">
        {t.floatingWhatsapp}
      </span>
    </a>
  );
}
