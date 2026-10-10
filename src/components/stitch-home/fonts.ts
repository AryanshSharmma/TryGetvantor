import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-st-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-st-playfair-display",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-st-space-grotesk", display: "swap" });

export const stitchFontVariables = `${inter.variable} ${playfair.variable} ${spaceGrotesk.variable}`;
