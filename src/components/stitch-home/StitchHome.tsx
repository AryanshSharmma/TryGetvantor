import "./stitch-home.css";
import { stitchFontVariables } from "./fonts";
import { StitchCapabilities } from "./StitchCapabilities";
import { StitchContact } from "./StitchContact";
import { StitchDifference } from "./StitchDifference";
import { StitchConcepts } from "./StitchConcepts";
import { StitchFooter } from "./StitchFooter";
import { StitchHeader } from "./StitchHeader";
import { StitchHero } from "./StitchHero";
import { StitchPricing } from "./StitchPricing";
import { StitchTimeline } from "./StitchTimeline";
import { MotionLayer } from "./MotionLayer";
import { StitchWhy } from "./StitchWhy";

export function StitchHome() {
  return (
    <div
      className={`stitch-home ${stitchFontVariables} bg-st-surface-container-lowest font-st-body-md text-st-on-surface antialiased selection:bg-st-secondary-container selection:text-st-secondary-fixed`}
    >
      <link
        rel="stylesheet"
        precedence="default"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
      />
      <MotionLayer />
      <StitchHeader />
      <main id="main" className="w-full pt-20 bg-st-surface-container-lowest min-h-screen">
        <StitchHero />
        <StitchWhy />
        <StitchCapabilities />
        <StitchDifference />
        <StitchConcepts />
        <StitchPricing />
        <StitchTimeline />
        <StitchContact />
      </main>
      <StitchFooter />
    </div>
  );
}
