"use server";
import { NextRequest, NextResponse } from "next/server";
import testSvg from "../../dump/testSvg";

export async function GET(req: NextRequest, res: NextResponse) {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const svg = testSvg();
  const svgString = ReactDOMServer.renderToString(svg);

  return new NextResponse(svgString, {
    status: 200,
    headers: { "Content-Type": "image/svg+xml" },
  });
}
