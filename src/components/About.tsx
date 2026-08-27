"use client";

import { useLanguage } from "@/lib/LanguageContext";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <PlaceholderImage
              id="interior-1"
              label={lang === "ar" ? "داخل النُزل" : "Hostel Interior"}
              className="aspect-[5/4] w-full rounded-2xl"
            />
          </Reveal>

          <Reveal delay={120}>
            <h2 className={`text-3xl font-bold text-white sm:text-4xl ${lang === "ar" ? "font-arDisplay" : "font-display"}`}>
              {t.about.title}
            </h2>
            <div className="mt-4 h-px w-16 bg-gold-gradient" />
            <p className="mt-6 font-body text-sm leading-relaxed text-beige/75 sm:text-base">{t.about.text}</p>

            <div className="mt-9 grid grid-cols-3 gap-4">
              {t.about.stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-gold/15 bg-charcoal-light px-3 py-5 text-center">
                  <div className="font-display text-2xl font-bold text-gold sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 font-body text-[10px] uppercase tracking-wide text-beige/60 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
