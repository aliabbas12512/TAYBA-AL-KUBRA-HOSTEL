"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { dictionary, Lang } from "./dictionary";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (typeof dictionary)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("tayba-lang") : null;
    if (stored === "ar" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = dictionary[lang].htmlLang;
    document.documentElement.dir = dictionary[lang].dir;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("tayba-lang", next);
    }
  };

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: dictionary[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
