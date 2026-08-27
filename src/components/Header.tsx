"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle, Languages } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { contactInfo, waLink } from "@/lib/dictionary";
import Logo from "./Logo";

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#rooms", label: t.nav.rooms },
    { href: "#facilities", label: t.nav.facilities },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-charcoal/95 shadow-lg shadow-black/30 backdrop-blur-md" : "bg-gradient-to-b from-charcoal/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="#home" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium tracking-wide text-beige/85 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-full border border-gold/40 px-3 py-1.5 font-body text-xs font-semibold text-gold transition-colors hover:bg-gold/10"
            aria-label="Switch language"
          >
            <Languages className="h-3.5 w-3.5" />
            {lang === "en" ? "العربية" : "English"}
          </button>
          <a
            href={waLink(contactInfo.whatsappNumber, lang === "ar" ? "مرحباً، أرغب بالاستفسار عن الحجز" : "Hello, I'd like to inquire about a booking")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 font-body text-xs font-semibold text-charcoal transition-transform hover:scale-105"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            {t.nav.whatsapp}
          </a>
          <a
            href="#booking"
            className="rounded-full bg-gold-gradient px-5 py-2 font-body text-xs font-bold text-charcoal shadow-md shadow-gold/20 transition-transform hover:scale-105"
          >
            {t.nav.book}
          </a>
        </div>

        <button
          className="flex items-center gap-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6 text-gold" /> : <Menu className="h-6 w-6 text-gold" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/10 bg-charcoal/98 px-4 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-body text-sm font-medium text-beige/90 transition-colors hover:bg-gold/10 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center justify-center gap-1.5 rounded-full border border-gold/40 px-3 py-2.5 font-body text-xs font-semibold text-gold"
            >
              <Languages className="h-3.5 w-3.5" />
              {lang === "en" ? "العربية" : "English"}
            </button>
            <a
              href={waLink(contactInfo.whatsappNumber, lang === "ar" ? "مرحباً، أرغب بالاستفسار عن الحجز" : "Hello, I'd like to inquire about a booking")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2.5 font-body text-xs font-semibold text-charcoal"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              {t.nav.whatsapp}
            </a>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gold-gradient px-5 py-2.5 text-center font-body text-xs font-bold text-charcoal"
            >
              {t.nav.book}
            </a>
            <a href={contactInfo.phoneHref} className="flex items-center justify-center gap-1.5 py-1 font-body text-xs text-beige/70">
              <Phone className="h-3.5 w-3.5" /> {contactInfo.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
