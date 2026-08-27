"use client";

import { useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

export default function Gallery() {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState<string>(t.gallery.categories[0]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (active === t.gallery.categories[0]) return t.gallery.items;
    return t.gallery.items.filter((item) => item.cat === active);
  }, [active, t]);

  const openLightbox = (id: string) => {
    const idx = filtered.findIndex((i) => i.id === id);
    setLightboxIndex(idx);
  };

  const close = () => setLightboxIndex(null);
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  return (
    <section id="gallery" className="bg-charcoal-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold text-white sm:text-4xl ${lang === "ar" ? "font-arDisplay" : "font-display"}`}>
            {t.gallery.title}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold-gradient" />
          <p className="mt-4 font-body text-beige/70">{t.gallery.subtitle}</p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {t.gallery.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-1.5 font-body text-xs font-medium transition-colors ${
                active === cat
                  ? "border-gold bg-gold-gradient text-charcoal"
                  : "border-gold/20 text-beige/70 hover:border-gold/50 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={(i % 6) * 60}>
              <button
                onClick={() => openLightbox(item.id)}
                className="group block w-full overflow-hidden rounded-xl"
              >
                <div className="relative">
                  <PlaceholderImage
                    id={item.id}
                    label={item.label}
                    className={`w-full transition-transform duration-500 group-hover:scale-105 ${
                      i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                    }`}
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/80 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-body text-xs font-medium text-white">{item.label}</span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute end-4 top-4 rounded-full bg-charcoal/60 p-2 text-white transition-colors hover:bg-gold hover:text-charcoal"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute start-4 top-1/2 -translate-y-1/2 rounded-full bg-charcoal/60 p-2 text-white transition-colors hover:bg-gold hover:text-charcoal"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <PlaceholderImage
              id={filtered[lightboxIndex].id}
              label={filtered[lightboxIndex].label}
              className="aspect-[4/3] w-full rounded-2xl"
            />
            <p className="mt-4 text-center font-body text-sm text-beige/80">{filtered[lightboxIndex].label}</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute end-4 top-1/2 -translate-y-1/2 rounded-full bg-charcoal/60 p-2 text-white transition-colors hover:bg-gold hover:text-charcoal"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
