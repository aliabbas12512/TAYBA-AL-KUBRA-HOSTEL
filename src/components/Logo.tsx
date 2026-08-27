import { useLanguage } from "@/lib/LanguageContext";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldMark" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E6C766" />
          <stop offset="55%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#9c7d1c" />
        </linearGradient>
      </defs>
      {/* four-point star */}
      <path
        d="M74 18 L77.2 25.4 L84.6 28.6 L77.2 31.8 L74 39.2 L70.8 31.8 L63.4 28.6 L70.8 25.4 Z"
        fill="url(#goldMark)"
      />
      {/* arch */}
      <path
        d="M20 78 V44 C20 26.3 33.4 12 50 12 C66.6 12 80 26.3 80 44 V78"
        stroke="url(#goldMark)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* door frame */}
      <path d="M34 78 V45 C34 34.5 41 26 50.5 26" stroke="url(#goldMark)" strokeWidth="4" strokeLinecap="round" />
      {/* open door leaf */}
      <path
        d="M50.5 26 C58 26 64 32.5 64 41 V70 L50.5 78 V26 Z"
        fill="url(#goldMark)"
        fillOpacity="0.16"
        stroke="url(#goldMark)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* door handle */}
      <circle cx="56" cy="53" r="2.1" fill="url(#goldMark)" />
      {/* base step */}
      <path d="M42 78 H64" stroke="url(#goldMark)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ compact = false }: { compact?: boolean }) {
  const { t, lang } = useLanguage();
  return (
    <div className="flex items-center gap-3">
      <LogoMark className="h-9 w-9 shrink-0 sm:h-11 sm:w-11" />
      {!compact && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-display text-base font-semibold tracking-wide text-gold sm:text-lg ${
              lang === "ar" ? "font-arDisplay" : ""
            }`}
          >
            {lang === "ar" ? "نُزل طيبة الكبرى" : "Tayba Al Kubra Hostel"}
          </span>
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-beige/60 sm:text-[11px]">
            {lang === "ar" ? "الرياض" : "Riyadh"}
          </span>
        </div>
      )}
    </div>
  );
}
