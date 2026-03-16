import { ImageResponse } from "next/og";

export const alt = "BenK Tech Labs — Web · App · AI · Marketing — Vijayawada, AP";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1E3A8A",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            BenK Tech Labs
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.02em",
            }}
          >
            Web · App · AI · Marketing — Vijayawada, AP
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
