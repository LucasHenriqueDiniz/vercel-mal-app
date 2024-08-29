"use server";
import * as d3 from "d3";
import { NextRequest, NextResponse } from "next/server";

const data = {
  mean_score: 6.42,
  total_score: 1483,
  total_count: 231,
  std_dev: "2.05",
  items: [
    {
      item: "1",
      item_label: "Appalling",
      item_count: 0,
      item_ratio: "0.00",
      watching: 0,
      completed: 0,
      on_hold: 0,
      dropped: 0,
    },
    {
      item: "2",
      item_label: "Horrible",
      item_count: 12,
      item_ratio: "0.05",
      watching: 0,
      completed: 7,
      on_hold: 0,
      dropped: 5,
    },
    {
      item: "3",
      item_label: "Very Bad",
      item_count: 7,
      item_ratio: "0.03",
      watching: 0,
      completed: 4,
      on_hold: 0,
      dropped: 3,
    },
    {
      item: "4",
      item_label: "Bad",
      item_count: 23,
      item_ratio: "0.10",
      watching: 0,
      completed: 15,
      on_hold: 0,
      dropped: 8,
    },
    {
      item: "5",
      item_label: "Average",
      item_count: 28,
      item_ratio: "0.12",
      watching: 1,
      completed: 23,
      on_hold: 0,
      dropped: 4,
    },
    {
      item: "6",
      item_label: "Fine",
      item_count: 50,
      item_ratio: "0.22",
      watching: 0,
      completed: 42,
      on_hold: 0,
      dropped: 8,
    },
    {
      item: "7",
      item_label: "Good",
      item_count: 33,
      item_ratio: "0.14",
      watching: 0,
      completed: 33,
      on_hold: 0,
      dropped: 0,
    },
    {
      item: "8",
      item_label: "Very Good",
      item_count: 45,
      item_ratio: "0.19",
      watching: 0,
      completed: 45,
      on_hold: 0,
      dropped: 0,
    },
    {
      item: "9",
      item_label: "Great",
      item_count: 15,
      item_ratio: "0.06",
      watching: 0,
      completed: 15,
      on_hold: 0,
      dropped: 0,
    },
    {
      item: "10",
      item_label: "Masterpiece",
      item_count: 18,
      item_ratio: "0.08",
      watching: 0,
      completed: 18,
      on_hold: 0,
      dropped: 0,
    },
  ],
  scored_list_count: 202,
  not_scored_list_count: 51,
  list_count: 304,
  is_lt_10_title: false,
  is_complete_title_lt_5: false,
  result: true,
};

const chartData = data.items.map((item) => ({
  name: item.item_label,
  count: item.item_count,
}));

export async function GET(req: NextRequest, res: NextResponse) {
  // const ReactDOMServer = (await import("react-dom/server")).default;
  const jsdom = (await import("jsdom")).default;
  const { JSDOM } = jsdom;

  const document = new JSDOM().window.document;

  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const width = 600 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const svg = d3
    .select(document.body)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3
    .scaleBand()
    .domain(chartData.map((d) => d.name))
    .range([0, width])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(chartData, (d) => d.count)!])
    .range([height, 0]);

  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

  svg.append("g").call(d3.axisLeft(y));

  svg
    .selectAll(".bar")
    .data(chartData)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d) => x(d.name)!)
    .attr("width", x.bandwidth())
    .attr("y", (d) => y(d.count))
    .attr("height", (d) => height - y(d.count))
    .attr("fill", "#8884d8");

  const s = d3.select(document.body).html().toString();

  return new NextResponse(s, {
    status: 200,
    headers: { "Content-Type": "image/svg+xml" },
  });
}
