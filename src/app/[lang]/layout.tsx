import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Locale, i18n } from "@/i18n.config";
import { Toaster } from "react-hot-toast";
import { Topbar } from "@/components/topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Outside In",
  description: "Outside In",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Toaster />
        {/* <Topbar lang={params.lang} /> */}
        {children}
      </body>
    </html>
  );
}
