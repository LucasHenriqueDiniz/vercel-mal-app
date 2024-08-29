import { getRequestParams, setSvgBasicAttributes } from "@/app/utils/apiUtils";
import * as d3 from "d3";
import { JSDOM } from "jsdom";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const {
    data,
    width: stringWidth,
    height: stringHeight,
  } = getRequestParams(request);
  const width = parseInt(stringWidth);
  const height = parseInt(stringHeight);

  const document = new JSDOM().window.document;

  const svg = d3
    .select(document.body)
    .append("svg")
    .call(setSvgBasicAttributes);

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
    .attr("fill", "#8884d8");

  const s = d3.select(document.body).html().toString();

  return new NextResponse(s, {
    status: 200,
    headers: { "Content-Type": "image/svg+xml" },
  });
}
