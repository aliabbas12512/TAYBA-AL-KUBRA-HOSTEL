"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Icon, { IconName } from "./Icon";
import Reveal from "./Reveal";

export default function WhyChooseUs() {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold text-white sm:text-4xl ${lang === "ar" ? "font-arDisplay" : "font-display"}`}>
            {t.why.title}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold-gradient" />
          <p className="mt-4 font-body text-beige/70">{t.why.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {t.why.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-gold/10 bg-charcoal-light p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                  <Icon name={item.icon as IconName} className="h-6 w-6 text-gold" strokeWidth={1.6} />
                </div>
                <h3 className="mt-4 font-body text-sm font-semibold text-white sm:text-base">{item.title}</h3>
                <p className="mt-1.5 font-body text-xs leading-relaxed text-beige/60 sm:text-sm">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
