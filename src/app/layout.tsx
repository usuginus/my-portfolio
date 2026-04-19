import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://usuginus.github.io/my-portfolio";

export const metadata: Metadata = {
  title: "Usuginu (伊藤弘一郎 / Koichiro Ito) - Portfolio",
  description:
    "うすぎぬ / Usuginu / 伊藤弘一郎 / Koichiro Ito のポートフォリオ。Audio, VR, Crypto, AI が好物の Backend & Data & Game エンジニア。メルコイン / REALITY でのサービス開発、VR研究の実績を紹介。",
  keywords: [
    "Usuginu",
    "usuginu",
    "うすぎぬ",
    "伊藤弘一郎",
    "Koichiro Ito",
    "ポートフォリオ",
    "Software Engineer",
    "Backend Engineer",
    "メルコイン",
    "REALITY",
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Usuginu (伊藤弘一郎) - Portfolio",
    description:
      "Audio, VR, Crypto, AI が好物の Backend & Data & Game エンジニア。",
    url: siteUrl,
    siteName: "Usuginu Portfolio",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Usuginu (伊藤弘一郎) - Portfolio",
    description:
      "Audio, VR, Crypto, AI が好物の Backend & Data & Game エンジニア。",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
