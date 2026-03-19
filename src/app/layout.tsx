import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = localFont({
  src: "../../public/SpaceGrotesk.ttf",
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Jose Alfred Magat — Full-Cycle Product Developer",
  description: "I partner with businesses and government agencies to build custom applications that digitize workflows, reduce operational costs, and scale with your team — across every platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg-dark text-white font-sans">{children}</body>
    </html>
  );
}
