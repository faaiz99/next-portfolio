import { ImageResponse } from "next/og";
import { siteConfig } from "./lib/site";

export const alt = siteConfig.title;
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
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          color: "#e4e4e7",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, color: "#4ade80" }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 48, marginTop: 16 }}>{siteConfig.jobTitle}</div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#a1a1aa" }}>
          Next.js · React · Node.js · NestJS · .NET Core · Azure
        </div>
      </div>
    ),
    size
  );
}
