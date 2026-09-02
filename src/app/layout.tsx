import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tharushi - Software Developer & AI Builder",
  description: "Personal portfolio of Tharushi, a Full-Stack Software Developer & AI Builder crafting useful digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-white text-[#0F172A] antialiased selection:bg-[#2563EB] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
