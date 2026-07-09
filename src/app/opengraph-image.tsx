import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0b1220 0%, #0f2a43 60%, #0b7e64 130%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              border: "3px solid rgba(14,159,126,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#0e9f7e",
              }}
            />
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, display: "flex" }}>
            Wissens<span style={{ color: "#3ddbb0" }}>Kern</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
          <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.15, display: "flex" }}>
            Das Gehirn Ihres Unternehmens –
          </div>
          <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.15, color: "#3ddbb0", display: "flex" }}>
            lokal betrieben, nur mit Ihrem Wissen.
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.75)", display: "flex" }}>
            On-Premise-KI für den deutschen Mittelstand · {siteConfig.company.legalName}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
