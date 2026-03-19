/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-plus-jakarta)", "ui-sans-serif", "system-ui"],
            },
            colors: {
                brand: {
                    pear: "oklch(var(--color-brand-pear) / <alpha-value>)",
                    blue: "oklch(var(--color-brand-blue) / <alpha-value>)",
                    emerald: "oklch(var(--color-brand-emerald) / <alpha-value>)",
                    coral: "oklch(var(--color-brand-coral) / <alpha-value>)",
                },
                bg: {
                    dark: "oklch(var(--color-bg-dark) / <alpha-value>)",
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
