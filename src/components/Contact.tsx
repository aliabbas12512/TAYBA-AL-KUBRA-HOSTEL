"use client";

import { Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { contactInfo, waLink } from "@/lib/dictionary";
import Reveal from "./Reveal";

export default function Contact() {
  const { t, lang } = useLanguage();

  const cards = [
    {
      icon: Phone,
      label: t.contact.call,
      value: contactInfo.phone,
      href: contactInfo.phoneHref,
      accent: "text-gold",
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: contactInfo.whatsapp,
      href: waLink(contactInfo.whatsappNumber, lang === "ar" ? "مرحباً، أرغب بالتواصل معكم" : "Hello, I'd like to get in touch"),
      accent: "text-[#25D366]",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      accent: "text-gold",
    },
    {
      icon: Clock,
      label: t.contact.service,
      value: t.contact.serviceValue,
      href: undefined,
      accent: "text-gold",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 font-body text-xs font-medium text-gold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            {t.contact.badge}
          </span>
          <h2 className={`mt-5 text-3xl font-bold text-white sm:text-4xl ${lang === "ar" ? "font-arDisplay" : "font-display"}`}>
            {t.contact.title}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold-gradient" />
          <p className="mt-4 font-body text-beige/70">{t.contact.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const Cmp = card.href ? "a" : "div";
            return (
              <Reveal key={card.label} delay={i * 70}>
                <Cmp
                  {...(card.href
                    ? { href: card.href, target: card.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
                    : {})}
                  className={`flex h-full flex-col items-center gap-3 rounded-2xl border border-gold/10 bg-charcoal-light p-6 text-center transition-all duration-300 ${
                    card.href ? "hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <card.icon className={`h-5 w-5 ${card.accent}`} strokeWidth={1.7} />
                  </div>
                  <div>
                    <div className="font-body text-xs uppercase tracking-wide text-beige/50">{card.label}</div>
                    <div dir="ltr" className="mt-1 font-body text-sm font-semibold text-white">
                      {card.value}
                    </div>
                  </div>
                </Cmp>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={280} className="mt-10 text-center">
          <a
            href={waLink(contactInfo.whatsappNumber, lang === "ar" ? "مرحباً، أرغب بالتواصل معكم" : "Hello, I'd like to get in touch")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-body text-sm font-bold text-charcoal shadow-lg shadow-black/30 transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            {t.hero.ctaWhatsapp}
          </a>
        </Reveal>

        <Reveal delay={340} className="mx-auto mt-10 max-w-xl rounded-2xl border border-gold/15 bg-charcoal-light p-5 text-center">
          <div className="font-body text-sm font-semibold text-gold">{t.contact.groupsTitle}</div>
          <p className="mt-1.5 font-body text-xs leading-relaxed text-beige/65 sm:text-sm">{t.contact.groupsText}</p>
        </Reveal>
      </div>
    </section>
  );
}
