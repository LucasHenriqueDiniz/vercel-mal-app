import {
  getRequestParams,
  isValidNumber,
  setSvgBasicAttributes,
  validateHeightAndWith,
} from "@/app/utils/apiUtils";
import * as d3 from "d3";
import { JSDOM } from "jsdom";
import { NextResponse, type NextRequest } from "next/server";

// Função para formatar números como porcentagens
const format = d3.format(".0%");

export async function GET(request: NextRequest) {
  const {
    data,
    width: stringWidth,
    height: stringHeight,
    title,
    xLabel,
    yLabel,
    titleFontSize,
  } = getRequestParams(request);
  const document = new JSDOM().window.document;

  const dataTitles = data.map((d) => d.label);
  const dataValues = data.map((d) => d.number);

  const labelWidth = d3.max(dataTitles, (d) => d.length)! * 8;
  const valueWidth = d3.max(dataValues, (d) => d.toString().length)! * 8;

  const lowestValue = d3.min(dataValues)!;
  const highestValue = d3.max(dataValues)!;

  const marginTop = 40; // Aumentamos um pouco a margem superior para o título
  const marginBottom = 50; // Aumentamos um pouco a margem inferior para os rótulos
  const marginLeft = 30; // Aumentamos a margem esquerda para os rótulos mais longos
  const marginRight = title === "" ? 30 : 60; // Aumentamos a margem direita para os rótulos mais longos
  const barHeight = 30;

  let height: number;
  if (stringHeight === "auto") {
    height =
      Math.ceil((data.length + 0.1) * barHeight) + marginTop + marginBottom;
  } else {
    height = parseInt(stringHeight);
  }

  const width = parseInt(stringWidth);

  console.log(
    "height",
    height,
    "Is valid number",
    isValidNumber(height),
    "width",
    width,
    "Is valid number",
    isValidNumber(width),
    "stringHeight",
    stringHeight,
    stringHeight === "auto"
  );

  validateHeightAndWith(height, width);

  // Horizontal Bar Chart - Corrigido
  const x = d3
    .scaleLinear()
    .domain([lowestValue, highestValue])
    .range([marginLeft + 20, width - marginRight]);

  const y = d3
    .scaleBand()
    .domain(data.map((d) => d.label))
    .range([marginTop, height - marginBottom])
    .padding(0.1);

  const svg = d3
    .select(document.body)
    .append("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");
  setSvgBasicAttributes(svg, width, height);

  // Barras com cores variadas e bordas
  svg
    .append("g")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("fill", (d, i) => d3.schemeCategory10[i % 10])
    .attr("x", x(0))
    .attr("y", (d) => y(d.label)!)
    .attr("width", (d) => x(d.number) - x(0))
    .attr("height", y.bandwidth())
    .attr("stroke", "white")
    .attr("stroke-width", 1);

  // Rótulos nas barras
  svg
    .append("g")
    .attr("fill", "white")
    .attr("text-anchor", "end")
    .selectAll("text")
    .data(data)
    .join("text")
    .attr("x", (d) => x(d.number) - 4)
    .attr("y", (d) => y(d.label)! + y.bandwidth() / 2)
    .attr("dy", "0.35em")
    .text((d) => format(d.number))
    .call((text) =>
      text
        .filter((d) => x(d.number) - x(0) < 20)
        .attr("dx", +4)
        .attr("fill", "black")
        .attr("text-anchor", "start")
    );

  // Eixos
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(
      d3
        .axisBottom(x)
        .tickFormat(format)
        .ticks(width / 80)
    )
    .call((g) => g.select(".domain").remove());

  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y).tickSizeOuter(0))
    .selectAll("text")
    .attr("text-anchor", "end"); // Alinha os rótulos à direita

  // Título do gráfico
  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .style("font-size", titleFontSize)
    .text(title);

  const s = d3.select(document.body).html().toString();

  return new NextResponse(s, {
    status: 200,
    headers: { "Content-Type": "image/svg+xml" },
  });
}
