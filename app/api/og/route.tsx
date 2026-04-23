import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Saddie — AI Fitness Coach";
  const tag = searchParams.get("tag") ?? "";

  const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#06060a"/>
      <stop offset="100%" stop-color="#0e0a1a"/>
    </linearGradient>
    <radialGradient id="glow" cx="600" cy="200" r="400" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#7c6cfa" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#7c6cfa" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="60" y="60" width="1080" height="510" rx="24" fill="none" stroke="#7c6cfa" stroke-opacity="0.2" stroke-width="1"/>

  <!-- Logo mark -->
  <rect x="80" y="80" width="48" height="48" rx="12" fill="#7c6cfa"/>
  <text x="104" y="113" font-family="system-ui,-apple-system,sans-serif" font-size="26" font-weight="700" fill="white" text-anchor="middle">S</text>
  <text x="144" y="113" font-family="system-ui,-apple-system,sans-serif" font-size="22" font-weight="600" fill="#f0f0f5">saddie.ai</text>

  ${tag ? `
  <rect x="80" y="160" height="32" rx="16" fill="#7c6cfa" fill-opacity="0.2" stroke="#7c6cfa" stroke-opacity="0.4" stroke-width="1" width="${tag.length * 10 + 32}"/>
  <text x="${tag.length * 5 + 96}" y="181" font-family="system-ui,-apple-system,sans-serif" font-size="14" font-weight="500" fill="#7c6cfa" text-anchor="middle">${tag}</text>
  ` : ""}

  <!-- Title -->
  <foreignObject x="80" y="${tag ? "210" : "175"}" width="1040" height="280">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:system-ui,-apple-system,sans-serif;font-size:52px;font-weight:700;color:#f0f0f5;line-height:1.2;word-wrap:break-word;">
      ${title}
    </div>
  </foreignObject>

  <!-- Bottom CTA -->
  <text x="80" y="560" font-family="system-ui,-apple-system,sans-serif" font-size="20" fill="#9090a0">Powered by Saddie · TRLActive app</text>
  <rect x="980" y="530" width="200" height="44" rx="22" fill="#7c6cfa"/>
  <text x="1080" y="558" font-family="system-ui,-apple-system,sans-serif" font-size="16" font-weight="600" fill="white" text-anchor="middle">Try free →</text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=86400, immutable",
    },
  });
}
