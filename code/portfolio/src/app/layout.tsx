import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Domenic Jernigan - CS + Cognitive Science @ UCSD",
  description: "Third-year UC San Diego student studying Computer Science and Cognitive Science. Building at the intersection of AI/ML and systems security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={'${inter.variable} ${jetBrainsMono.variable} bg-[#0a0a0a] text-zinc-300 antialiased'}
      >
        {children}
      </body>
    </html>
  );
}