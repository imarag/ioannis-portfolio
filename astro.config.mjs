// @ts-check
import { defineConfig, fontProviders } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    prefetch: {
        prefetchAll: true,
    },
    integrations: [icon()],
    fonts: [
        {
            provider: fontProviders.google(),
            name: "Inter",
            cssVariable: "--font-inter",
            weights: [300, 400, 500, 700],
        },
        {
            provider: fontProviders.google(),
            name: "Instrument Serif",
            cssVariable: "--font-instrument-serif",
            weights: [400],
            styles: ["normal", "italic"],
        },
    ],
})
