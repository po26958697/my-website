import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "市場軍師 Remi | 法人級交易紀律與實戰策略諮詢",
  description:
    "拒絕散戶思維，以極度理性的法人邏輯重構交易。市場軍師 Remi 提供深度市場分析與風險控管，助你建立穩定盈利的交易系統，翻轉虧損，重塑操盤紀律。",
  keywords: ["市場軍師", "交易紀律", "法人視角", "投資策略", "風險控管", "Remi"],
  verification: {
    google: "ksHW8wxS8dLQbt8LxIe8Q2HIULflS0MLSMnyAYs3110",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "市場軍師 Remi",
                  jobTitle: "交易策略顧問",
                  description: "法人級交易紀律與實戰策略諮詢，結合 Web 開發者邏輯嚴謹性與法人視角。",
                  url: "https://my-website-po26958697.vercel.app",
                },
                {
                  "@type": "WebSite",
                  name: "市場軍師 Remi",
                  url: "https://my-website-po26958697.vercel.app",
                  inLanguage: "zh-TW",
                },
              ],
            }),
          }}
        />
        <Navbar />
        {children}
        {/* TODO: 將 G-XXXXXXXXXX 替換為你的 GA4 Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
