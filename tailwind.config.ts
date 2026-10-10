import type { Config } from "tailwindcss";
import { stitchTokens } from "./src/components/stitch-home/tokens";

const config: Config = {
  theme: {
    extend: {
      fontSize: { ...stitchTokens.fontSize },
      spacing: { ...stitchTokens.spacing },
      colors: {
        ...stitchTokens.colors,
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        outline: "rgb(var(--outline) / <alpha-value>)",
        heading: "rgb(var(--heading) / <alpha-value>)",
        body: "rgb(var(--body) / <alpha-value>)",
        brand: {
          violet: "#A855F7",
          rose: "#E11D48",
        },
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      animation: {
        rainbow: "rainbow var(--speed, 2s) infinite linear",
      },
      keyframes: {
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #A855F7 0%, #E11D48 100%)",
      },
      fontFamily: {
        ...stitchTokens.fontFamily,
        sans: ["var(--font-sans-face)", "system-ui", "sans-serif"],
        display: ["var(--font-display-face)", "Georgia", "serif"],
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
};

export default config;
