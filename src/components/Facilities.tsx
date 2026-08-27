"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Icon, { IconName } from "./Icon";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

export default function Facilities() {
  const { t, lang } = useLanguage();

  return (
    <section id="facilities" className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold text-white sm:text-4xl ${lang === "ar" ? "font-arDisplay" : "font-display"}`}>
            {t.facilities.title}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold-gradient" />
          <p className="mt-4 font-body text-beige/70">{t.facilities.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <PlaceholderImage id="pool-1" label={lang === "ar" ? "المسبح" : "Swimming Pool"} className="aspect-square rounded-2xl" />
              <PlaceholderImage id="gym-1" label={lang === "ar" ? "الصالة الرياضية" : "Gym"} className="mt-6 aspect-square rounded-2xl" />
              <PlaceholderImage id="lounge-1" label={lang === "ar" ? "صالة الاستراحة" : "Lounge"} className="-mt-6 aspect-square rounded-2xl" />
              <PlaceholderImage id="workspace-1" label={lang === "ar" ? "مساحة العمل" : "Workspace"} className="aspect-square rounded-2xl" />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {t.facilities.list.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="flex items-center gap-3 rounded-xl border border-gold/10 bg-charcoal-light p-4 transition-all duration-300 hover:border-gold/40 hover:bg-charcoal-lighter">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <Icon name={item.icon as IconName} className="h-5 w-5 text-gold" strokeWidth={1.6} />
                  </div>
                  <span className="font-body text-xs font-medium text-beige/85 sm:text-sm">{item.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
