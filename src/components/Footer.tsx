"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { contactInfo } from "@/lib/dictionary";
import Logo from "./Logo";

export default function Footer() {
  const { t, lang } = useLanguage();

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#rooms", label: t.nav.rooms },
    { href: "#facilities", label: t.nav.facilities },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-gold/10 bg-charcoal-light">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-beige/60">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wide text-gold">{t.footer.quickLinks}</h4>
            <ul className="mt-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="font-body text-sm text-beige/60 transition-colors hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wide text-gold">{t.footer.contactInfo}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href={contactInfo.phoneHref} className="flex items-center gap-2 font-body text-sm text-beige/60 transition-colors hover:text-gold">
                  <Phone className="h-4 w-4 text-gold/70" />
                  <span dir="ltr">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contactInfo.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-beige/60 transition-colors hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4 text-gold/70" />
                  <span dir="ltr">{contactInfo.whatsapp}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 font-body text-sm text-beige/60 transition-colors hover:text-gold">
                  <Mail className="h-4 w-4 text-gold/70" />
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gold/10 pt-6 text-center font-body text-xs text-beige/40">
          © {new Date().getFullYear()} {lang === "ar" ? "نُزل طيبة الكبرى" : "Tayba Al Kubra Hostel"}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
