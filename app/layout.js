import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import { LangProvider } from "./context/LangContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://razor-tech-archive.vercel.app'),
  title: 'Razor Tech Archive',
  description: '感覚を理論へ。レザーカット技術の教育アーカイブ。Archive-Based Education System.',
  keywords: 'レザーカット, razor cut, ヘアカット, RTA, Razor Tech Archive, セミナー',
  openGraph: {
    title: 'Razor Tech Archive',
    description: '感覚を理論へ。レザーカット技術の教育アーカイブ。',
    url: 'https://razor-tech-archive.vercel.app',
    siteName: 'Razor Tech Archive',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Razor Tech Archive',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Razor Tech Archive',
    description: '感覚を理論へ。レザーカット技術の教育アーカイブ。',
    images: ['/hero.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LangProvider>
          <CartProvider>{children}</CartProvider>
        </LangProvider>
      </body>
    </html>
  );
}
