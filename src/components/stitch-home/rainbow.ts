/* Overrides that turn the shared RainbowButton into the Stitch CTA: dark fill, light label, 52px tall. */
const FILL =
  "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]";

export const stitchRainbow = `h-[52px] gap-3 px-8 text-white font-st-label-md text-st-label-md font-semibold uppercase tracking-[0.14em] ${FILL} dark:${FILL}`;
