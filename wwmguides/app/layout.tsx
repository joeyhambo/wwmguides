import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Where Winds Meet Guides - Complete Game Guides & Tips",
  description: "Your ultimate guide for Where Winds Meet (Yan Yun 16 Sounds). Find beginner guides, combat tips, character builds, and explore the world of Chinese Wuxia.",
  keywords: "Where Winds Meet, Yan Yun, Wuxia game, game guide, beginner tips, combat guide",
  openGraph: {
    title: "Where Winds Meet Guides",
    description: "Complete guides and tips for Where Winds Meet",
    url: "https://wwmguides.com",
    siteName: "WWM Guides",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet Guides",
    description: "Complete guides and tips for Where Winds Meet",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
