import type { Metadata } from "next";
import {
  Cinzel,
  Cinzel_Decorative,
  Cormorant_Garamond,
  Roboto,
  Lora,
} from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel-var",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel-deco-var",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-var",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-roboto-var",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SYMC Wellness - Shree Yogmaya Meditation Centre",
  description:
    "Where spirituality meets wellness. Meditation, Astrology, Life Coaching, Vastu and Spiritual Products. Based in Rishikesh.",
  keywords: [
    "meditation",
    "astrology",
    "life coaching",
    "vastu",
    "rishikesh",
    "spiritual",
    "wellness",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${cormorantGaramond.variable} ${roboto.variable} ${lora.variable}`}
    >
      <body>
        <ThemeProvider>
          {/* Header (TopBar + Navbar) is fixed, present on all routes */}
          <Header />
          {/* Page-specific content */}
          <div className="pt-[65px] md:pt-[100px]">{children}</div>
          {/* Footer is present on all routes */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
