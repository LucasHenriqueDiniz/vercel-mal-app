"use server";
import MalProfileClassic from "@/components/classic-mal/MalProfileFullAnime";
import myAnimeListRequest from "@/components/requests/malApi";
import { NextRequest, NextResponse } from "next/server";
import { getRequestParams } from "../mal-profile/getRequestParams";

async function getMalProfileData() {
  const lastUpdate = await myAnimeListRequest("Amayacrab", "last_updated");

  const statistics = await myAnimeListRequest("Amayacrab", "statistics");

  return { lastUpdate: lastUpdate, statistics: statistics };
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const ReactDOMServer = (await import("react-dom/server")).default;
    const { stats } = getRequestParams(req);

    const response = await getMalProfileData();

    const svg = MalProfileClassic({
      stats: stats,
      lastActivityData: response.lastUpdate,
      statisticsData: response.statistics,
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
