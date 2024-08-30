import { DataItem } from "@/app/types/DataItem"; // Assuming you have a types.ts file for shared types
import * as d3 from "d3";
import { NextRequest, NextResponse } from "next/server";

export function parseData(dataString: string | null | undefined): DataItem[] {
  if (!dataString) {
    throw new Error("Missing 'data' parameter");
  }

  try {
    return JSON.parse(dataString);
  } catch (e) {
    throw new Error("Invalid 'data' format");
  }
}

export function getRequestParams(
  request: NextRequest,
  defaultWidth?: string,
  defaultHeight?: string
) {
  const { searchParams } = new URL(request.url);
  const dataString = searchParams.get("data");
  const data = parseData(dataString);

  const width = searchParams.get("width") || defaultWidth || "600";
  const height = searchParams.get("height") || defaultHeight || "300";

  const title = searchParams.get("title") || null;
  const xLabel = searchParams.get("xLabel") || "X Axis Label";
  const yLabel = searchParams.get("yLabel") || "Y Axis Label";
  const titleFontSize = searchParams.get("titleFontSize") || "16";
  const sort = searchParams.get("sort") || null;

  var categories: string | null | string[] =
    searchParams.get("categories") || null;
  if (categories) {
    categories = categories.split(",");
  }

  return {
    data,
    width,
    height,
    title,
    xLabel,
    yLabel,
    titleFontSize,
    categories,
    sort,
  };
}

export function setSvgBasicAttributes(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width?: number,
  height?: number,
  margin: { top: number; right: number; bottom: number; left: number } = {
    top: 20,
    right: 30,
    bottom: 30,
    left: 40,
  }
) {
  return svg
    .attr("width", width || 600 + margin.left + margin.right)
    .attr("height", height || 300 + margin.top + margin.bottom)
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
}

export function isValidNumber(value: number) {
  return !isNaN(value) || value >= 0;
}

export function validateHeightAndWith(width: number, height: number) {
  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    return new NextResponse("Width and height must be numbers greater than 0", {
      status: 400,
    });
  }
}
