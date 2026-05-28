import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title")?.slice(0, 120) || "Saddie - AI Fitness Coach";
  const tag = searchParams.get("tag")?.slice(0, 48) || "TRL/Active";
  const logoUrl = new URL("/trl-active-logo.png", req.nextUrl.origin).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #060706 0%, #12140d 50%, #050505 100%)",
          color: "#f6f3e6",
          padding: 72,
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 15%, rgba(232,199,53,0.28) 0, transparent 28%), radial-gradient(circle at 85% 78%, rgba(124,108,250,0.2) 0, transparent 30%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 40,
            border: "1px solid rgba(232,199,53,0.24)",
            borderRadius: 36,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 20, position: "relative" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              backgroundImage: `url(${logoUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: 0 }}>saddie.ai</div>
            <div style={{ fontSize: 18, color: "#b7b19a" }}>AI fitness coaching for TRL/Active</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28, position: "relative" }}>
          <div
            style={{
              alignSelf: "flex-start",
              border: "1px solid rgba(232,199,53,0.32)",
              background: "rgba(232,199,53,0.12)",
              color: "#f3d94c",
              borderRadius: 999,
              padding: "12px 22px",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {tag}
          </div>
          <div
            style={{
              fontSize: title.length > 78 ? 54 : 64,
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: 0,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            color: "#b7b19a",
            fontSize: 24,
          }}
        >
          <div>Adaptive workouts, nutrition, voice coaching, and progress</div>
          <div style={{ color: "#f3d94c", fontWeight: 800 }}>Try free</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=86400, immutable",
      },
    },
  );
}
