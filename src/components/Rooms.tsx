"use client";

import { MessageCircle, Users } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { contactInfo, waLink } from "@/lib/dictionary";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

export default function Rooms() {
  const { t, lang } = useLanguage();

  return (
    <section id="rooms" className="bg-charcoal-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold text-white sm:text-4xl ${lang === "ar" ? "font-arDisplay" : "font-display"}`}>
            {t.rooms.title}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold-gradient" />
          <p className="mt-4 font-body text-beige/70">{t.rooms.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.rooms.list.map((room, i) => (
            <Reveal key={room.name} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gold/10 bg-charcoal transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5">
                <div className="relative">
                  <PlaceholderImage id={room.image} label={room.name} className="aspect-[4/3] w-full" />
                  {"tag" in room && room.tag && (
                    <span className="absolute end-3 top-3 rounded-full bg-gold-gradient px-2.5 py-1 font-body text-[10px] font-bold text-charcoal shadow-md">
                      {room.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-gold">{room.name}</h3>
                    {"price" in room && room.price && (
                      <span className="shrink-0 font-body text-xs font-bold text-beige">{room.price}</span>
                    )}
                  </div>
                  <p className="mt-2 flex-1 font-body text-xs leading-relaxed text-beige/65">{room.desc}</p>

                  <div className="mt-3 flex items-center gap-1.5 font-body text-xs text-beige/50">
                    <Users className="h-3.5 w-3.5 text-gold/70" />
                    {room.guests}
                  </div>

                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {room.amenities.map((a) => (
                      <li
                        key={a}
                        className="rounded-full border border-gold/15 bg-gold/5 px-2.5 py-1 font-body text-[10px] text-beige/70"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-col gap-2">
                    <a
                      href="#booking"
                      className="rounded-full bg-gold-gradient py-2.5 text-center font-body text-xs font-bold text-charcoal transition-transform hover:scale-[1.03]"
                    >
                      {t.rooms.bookNow}
                    </a>
                    <a
                      href={waLink(
                        contactInfo.whatsappNumber,
                        lang === "ar" ? `مرحباً، أرغب بالاستفسار عن ${room.name}` : `Hello, I'd like to inquire about the ${room.name}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-full border border-[#25D366]/50 py-2.5 font-body text-xs font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/10"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      {t.rooms.inquire}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
