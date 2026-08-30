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
  metadataBase: new URL("https://taibah-co.sa"),
  title: "Tayba Al Kubra Hostel - Best Budget Hostel Riyadh, Beds from 110 SAR | Cheap Accommodation",
  description:
    "Best budget hostel in central Riyadh — beds from 110 SAR/night, single rooms 150 SAR, double rooms 200 SAR. Free WiFi, pool, gym & kitchen included. Central King Fahd Road location. Book now!",
  keywords: [
    "Hostel Riyadh",
    "Budget Hostel Riyadh",
    "Cheap Accommodation Riyadh",
    "Affordable Hotel Riyadh",
    "110 SAR beds",
    "Backpacker Hostel Riyadh",
    "Student Accommodation Riyadh",
    "Cheap Rooms Riyadh",
    "Group Accommodation Riyadh",
    "نزل الرياض",
    "سكن رخيص",
    "نزل اقتصادي الرياض",
    "أسرّة 110 ريال",
    "سكن طلاب الرياض",
  ],
  alternates: {
    canonical: "https://taibah-co.sa",
  },
  openGraph: {
    title: "Tayba Al Kubra Hostel - Riyadh's Best Value Budget Hostel",
    description: "Cheapest hostel in Riyadh — comfortable beds from 110 SAR. Free WiFi, pool, gym & kitchen. Perfect for backpackers, travelers, students and workers.",
    url: "https://taibah-co.sa",
    locale: "en_SA",
    alternateLocale: "ar_SA",
    type: "website",
    images: [{ url: "/images/pool-1.jpg" }],
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
      "Riyadh's best-value budget hostel — beds from 110 SAR/night, with free WiFi, swimming pool, gym and kitchen included, available 24/7.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
    telephone: "+966590925707",
    email: "LuxHostel@taibah-co.sa",
    url: "https://taibah-co.sa",
    priceRange: "$",
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
