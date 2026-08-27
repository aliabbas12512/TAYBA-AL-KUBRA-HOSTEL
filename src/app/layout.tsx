import type { Metadata } from "next";
import { Playfair_Display, Poppins, Amiri, Tajawal } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tayba-alkubra-hostel.vercel.app"),
  title: "Tayba Al Kubra Hostel | نُزل طيبة الكبرى — Luxury Hostel in Riyadh",
  description:
    "Tayba Al Kubra Hostel offers a clean, comfortable and premium accommodation experience in Riyadh — free WiFi, swimming pool, gym, lounge and workspace, available 24/7. نزل فاخر ومريح في الرياض.",
  keywords: [
    "Hostel in Riyadh",
    "Luxury Hostel Riyadh",
    "Accommodation in Riyadh",
    "Comfortable Hostel Riyadh",
    "Affordable Accommodation Riyadh",
    "نزل في الرياض",
    "سكن في الرياض",
    "إقامة في الرياض",
    "أفضل نزل في الرياض",
    "سكن مريح في الرياض",
  ],
  openGraph: {
    title: "Tayba Al Kubra Hostel | نُزل طيبة الكبرى",
    description: "Your comfortable, premium stay in Riyadh — available 24/7.",
    locale: "en_SA",
    alternateLocale: "ar_SA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Tayba Al Kubra Hostel",
    alternateName: "نُزل طيبة الكبرى",
    description:
      "A clean, comfortable and premium hostel in Riyadh offering free WiFi, swimming pool, gym, lounge and workspace, available 24/7.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
    telephone: "+966590925707",
    priceRange: "$$",
  };

  return (
    <html lang="en" dir="ltr" className={`${playfair.variable} ${poppins.variable} ${amiri.variable} ${tajawal.variable}`}>
      <body className="bg-charcoal font-body text-beige antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
