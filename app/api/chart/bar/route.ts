import { DataItem } from "@/app/types/DataItem";
import {
  getRequestParams,
  isValidNumber,
  setSvgBasicAttributes,
} from "@/app/utils/apiUtils";
import generateRandomColorWithString from "@/app/utils/generateRandomColorWithString";
import * as d3 from "d3";
import { JSDOM } from "jsdom";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const {
      data,
      width: stringWidth,
      height: stringHeight,
      title,
      xLabel,
      yLabel,
      titleFontSize,
    } = getRequestParams(request);
    const width = parseInt(stringWidth) ?? 600;
    const height = parseInt(stringHeight);

    if (isValidNumber(width) || isValidNumber(height)) {
      return new NextResponse("Width and height must be greater than 0", {
        status: 400,
      });
    }

    const document = new JSDOM().window.document;

    const svg = d3.select(document.body).append("svg");
    setSvgBasicAttributes(svg, width, height);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.number)!])
      .range([height, 0]);

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y));

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.label)!)
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(d.number))
      .attr("height", (d) => height - y(d.number))
      .attr("fill", (d) => d.color || generateRandomColorWithString(d.label))
      .style("font-size", titleFontSize)
      .text((d) => d.label);

    const s = d3.select(document.body).html().toString();

    return new NextResponse(s, {
      status: 200,
      headers: { "Content-Type": "image/svg+xml" },
    });
  } catch (e: any) {
    return new NextResponse(e.message, { status: 400 });
  }
}
