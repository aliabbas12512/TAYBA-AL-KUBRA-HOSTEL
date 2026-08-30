"use client";

import { MessageCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { contactInfo, waLink } from "@/lib/dictionary";

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          poster="/images/hero-main.jpg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fadeUp inline-block rounded-full border border-gold/40 bg-charcoal/40 px-4 py-1.5 font-body text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
            {t.hero.eyebrow}
          </span>

          <div
            className="mt-4 flex animate-fadeUp justify-center"
            style={{ animationDelay: "60ms", animationFillMode: "backwards" }}
          >
            <span className="rounded-full bg-gold-gradient px-5 py-1.5 font-body text-xs font-bold uppercase tracking-wide text-charcoal shadow-lg shadow-gold/20 sm:text-sm">
              {t.hero.priceBadge}
            </span>
          </div>

          <h1
            className={`mt-6 animate-fadeUp text-4xl font-bold leading-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.75)] sm:text-5xl md:text-6xl ${
              lang === "ar" ? "font-arDisplay" : "font-display"
            }`}
            style={{ animationDelay: "120ms", animationFillMode: "backwards" }}
          >
            {t.hero.headline}
          </h1>

          <p
            className="mx-auto mt-5 max-w-xl animate-fadeUp font-body text-base text-beige/90 [text-shadow:0_2px_10px_rgba(0,0,0,0.75)] sm:text-lg"
            style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
          >
            {t.hero.subheadline}
          </p>

          <div
            className="mt-9 flex animate-fadeUp flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "360ms", animationFillMode: "backwards" }}
          >
            <a
              href={waLink(contactInfo.whatsappNumber, lang === "ar" ? "مرحباً، أرغب بالاستفسار عن الإقامة" : "Hello, I'd like to inquire about staying")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-body text-sm font-semibold text-charcoal shadow-lg shadow-black/30 transition-transform hover:scale-105 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              {t.hero.ctaWhatsapp}
            </a>
            <a
              href="#booking"
              className="w-full rounded-full bg-gold-gradient px-7 py-3.5 text-center font-body text-sm font-bold text-charcoal shadow-lg shadow-gold/20 transition-transform hover:scale-105 sm:w-auto"
            >
              {t.hero.ctaBook}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-floatSlow text-beige/60">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
