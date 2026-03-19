import { Plus_Jakarta_Sans, Inter, Geist } from "next/font/google";
import "./globals.css";
import React from "react";

const plusJakartaSans = Plus_Jakarta_Sans({ 
    subsets: ["latin"],
    variable: "--font-plus-jakarta",
    display: 'swap',
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: 'swap',
});

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from 'next';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
    title: "Jose Alfred Magat | Custom Software Solutions",
    description: "Full-Stack Software Engineer specializing in streamlined business operations through custom Web, Mobile, and Desktop applications.",
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#12141a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={cn("scroll-smooth", plusJakartaSans.variable, inter.variable, "font-sans", geist.variable)}>
            <body className="font-sans antialiased selection:bg-brand-pear selection:text-bg-dark">
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
