import { ImageResponse } from "next/og";

export const alt = "GetVantor — Websites that make a business look as good as it is.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#fbf2e6", color: "#17211c", padding: 72, position: "relative" }}>
        <div style={{ position: "absolute", right: -120, top: 80, width: 560, height: 560, borderRadius: 560, background: "#cd2a3e", display: "flex" }} />
        <div style={{ position: "absolute", right: 80, top: 200, width: 360, height: 230, background: "#0f3a2d", borderRadius: 12, display: "flex" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 700 }}>
          <div style={{ fontSize: 34, display: "flex" }}>GetVantor</div>
          <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2, fontFamily: "Georgia, serif", display: "flex", flexWrap: "wrap" }}>
            Websites that make a business look <i style={{ color: "#0f3a2d", marginLeft: 16 }}>as good as it is.</i>
          </div>
          <div style={{ fontSize: 26, color: "#56625d", display: "flex" }}>A web studio for businesses and brands of every kind.</div>
        </div>
      </div>
    ),
    size,
  );
}
