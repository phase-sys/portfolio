// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "Jose Alfred Magat",
    description: "Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
