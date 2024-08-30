"use server";
import MalProfileStats from "@/app/ProfileAnimeStats";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const svg = MalProfileStats();
  const svgString = ReactDOMServer.renderToString(svg);

  return new NextResponse(svgString, {
    status: 200,
    headers: { "Content-Type": "image/svg+xml" },
  });
}
