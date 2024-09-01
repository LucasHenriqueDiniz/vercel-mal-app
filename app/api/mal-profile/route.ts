"use server";
import MalProfileClassic from "@/components/classic-mal/MalProfileFullAnime";
import { NextRequest, NextResponse } from "next/server";
import { getRequestParams } from "./getRequestParams";
import { exampleStatisticsResponse } from "@/components/test/exampleStatisticsResponse";
import { exampleLastUpdateResponse } from "@/components/test/exampleLastUpdatesResponse";
import { MalStatisticsResponse } from "@/app/types/malStatisticsResponse";
import { MalLastUpdatesResponse } from "@/app/types/malLastUpdatesResponse";
const lastUpdateData: MalLastUpdatesResponse = exampleLastUpdateResponse;
const statisticsData: MalStatisticsResponse = exampleStatisticsResponse;

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const ReactDOMServer = (await import("react-dom/server")).default;
    const { stats } = getRequestParams(req);
    const svg = MalProfileClassic({
      stats,
      statisticsData,
      lastActivityData: lastUpdateData,
    });

    const svgString = ReactDOMServer.renderToString(svg);
    return new NextResponse(svgString, {
      status: 200,
      headers: { "Content-Type": "image/svg+xml" },
    });
  } catch (error: any) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
}
