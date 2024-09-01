import { NextRequest } from "next/server";

export function getRequestParams(
  request: NextRequest,
  defaultWidth?: string,
  defaultHeight?: string
): { stats: string[] } {
  const { searchParams } = new URL(request.url);
  const stats = searchParams.get("stats") ?? "anime,manga";

  const statsArr = stats.split(",").map((stat) => {
    if (stat !== "anime" && stat !== "manga") {
      throw new Error("Invalid stats parameter");
    }
    return stat;
  });

  console.log(statsArr);

  return {
    stats: statsArr,
  };
}
