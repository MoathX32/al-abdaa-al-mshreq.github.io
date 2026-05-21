import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abdaamshreq.com"),
  title: {
    default: "AL-ABDAA AL-MSHREQ — Building Contracting L.L.C",
    template: "%s · AL-ABDAA AL-MSHREQ",
  },
  description:
    "Premier building contracting in Dubai, UAE. Villa construction, renovation, civil engineering, MEP and turnkey delivery — trusted by Emaar, DAMAC, MBRHE and Dubai Municipality.",
  keywords: [
    "construction Dubai",
    "building contracting UAE",
    "villa construction Dubai",
    "renovation Dubai",
    "AL-ABDAA AL-MSHREQ",
    "AMC Contracting",
  ],
  openGraph: {
    title: "AL-ABDAA AL-MSHREQ — Building Contracting L.L.C",
    description:
      "Crafting tomorrow's landmarks today. Villa construction, renovation, MEP, and turnkey delivery across the UAE.",
    url: "https://www.abdaamshreq.com",
    siteName: "AL-ABDAA AL-MSHREQ",
    images: [{ url: "/images/construction-bg.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
