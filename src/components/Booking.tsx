"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { contactInfo, waLink } from "@/lib/dictionary";
import Reveal from "./Reveal";

const inputClass =
  "w-full rounded-lg border border-gold/15 bg-charcoal px-4 py-3 font-body text-sm text-beige placeholder:text-beige/30 outline-none transition-colors focus:border-gold/60";

export default function Booking() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkin: "",
    checkout: "",
    guests: "",
    room: t.booking.roomOptions[0],
    request: "",
  });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const buildMessage = () => {
    const f = t.booking.fields;
    return [
      lang === "ar" ? "طلب حجز جديد - نُزل طيبة الكبرى" : "New Booking Request - Tayba Al Kubra Hostel",
      `${f.name}: ${form.name}`,
      `${f.phone}: ${form.phone}`,
      `${f.email}: ${form.email}`,
      `${f.checkin}: ${form.checkin}`,
      `${f.checkout}: ${form.checkout}`,
      `${f.guests}: ${form.guests}`,
      `${f.room}: ${form.room}`,
      form.request ? `${f.request}: ${form.request}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.open(waLink(contactInfo.whatsappNumber, buildMessage()), "_blank", "noopener,noreferrer");
  };

  const mailtoHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    lang === "ar" ? "طلب حجز - نُزل طيبة الكبرى" : "Booking Request - Tayba Al Kubra Hostel"
  )}&body=${encodeURIComponent(buildMessage())}`;

  return (
    <section id="booking" className="relative bg-charcoal-light py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold text-white sm:text-4xl ${lang === "ar" ? "font-arDisplay" : "font-display"}`}>
            {t.booking.title}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold-gradient" />
          <p className="mt-4 font-body text-beige/70">{t.booking.subtitle}</p>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 grid grid-cols-1 gap-4 rounded-2xl border border-gold/10 bg-charcoal p-6 sm:grid-cols-2 sm:p-9"
          >
            <input required placeholder={t.booking.fields.name} value={form.name} onChange={update("name")} className={inputClass} />
            <input
              required
              type="tel"
              placeholder={t.booking.fields.phone}
              value={form.phone}
              onChange={update("phone")}
              className={inputClass}
            />
            <input
              required
              type="email"
              placeholder={t.booking.fields.email}
              value={form.email}
              onChange={update("email")}
              className={`${inputClass} sm:col-span-2`}
            />
            <label className="flex flex-col gap-1.5">
              <span className="font-body text-xs text-beige/50">{t.booking.fields.checkin}</span>
              <input required type="date" value={form.checkin} onChange={update("checkin")} className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-body text-xs text-beige/50">{t.booking.fields.checkout}</span>
              <input required type="date" value={form.checkout} onChange={update("checkout")} className={inputClass} />
            </label>
            <input
              required
              type="number"
              min={1}
              placeholder={t.booking.fields.guests}
              value={form.guests}
              onChange={update("guests")}
              className={inputClass}
            />
            <select value={form.room} onChange={update("room")} className={inputClass}>
              {t.booking.roomOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-charcoal">
                  {opt}
                </option>
              ))}
            </select>
            <textarea
              placeholder={t.booking.fields.request}
              value={form.request}
              onChange={update("request")}
              rows={3}
              className={`${inputClass} sm:col-span-2 resize-none`}
            />

            <div className="mt-2 flex flex-col gap-3 sm:col-span-2 sm:flex-row">
              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-gradient py-3.5 font-body text-sm font-bold text-charcoal shadow-lg shadow-gold/20 transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" />
                {t.booking.submit}
              </button>
              <a
                href={waLink(contactInfo.whatsappNumber, buildMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#25D366]/60 py-3.5 font-body text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/10"
              >
                <MessageCircle className="h-4 w-4" />
                {t.booking.whatsappDirect}
              </a>
            </div>
            <p className="text-center font-body text-[11px] text-beige/40 sm:col-span-2">
              {lang === "ar" ? (
                <>
                  يمكنك أيضاً إرسال طلبك عبر البريد الإلكتروني:{" "}
                  <a href={mailtoHref} className="text-gold underline underline-offset-2">
                    {contactInfo.email}
                  </a>
                </>
              ) : (
                <>
                  You can also send this request via email:{" "}
                  <a href={mailtoHref} className="text-gold underline underline-offset-2">
                    {contactInfo.email}
                  </a>
                </>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
