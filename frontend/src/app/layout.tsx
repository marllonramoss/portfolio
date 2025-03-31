import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/template/header/Header";
import CustomCursor from "@/components/template/custom_cursor/CustomCursor";
import Footer from "@/components/template/footer/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Marllon Ramos - Desenvolvedor Full Stack",
  description:
    "Portfolio pessoal de Marllon Ramos, Desenvolvedor Full Stack especializado em React, Next.js e Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased relative bg-black`}>
        <CustomCursor />
        <Header />
        <main className="min-h-screen bg-black text-white">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
