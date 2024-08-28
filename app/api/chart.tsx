import { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";
import { PureComponent } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ResponsiveContainer, LineChart, ResponsiveContainerProps } from "recharts";
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart, Line } from "recharts";

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

// Preparar os dados para o Recharts
const chartData = data.items.map((item) => ({
  name: item.item_label,
  count: item.item_count,
}));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Renderizar o gráfico Recharts para uma string SVG

  const svgString = renderToStaticMarkup(
    <BarChart
      width={600}
      height={300}
      data={chartData}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="count"
        fill="#8884d8"
      />
    </BarChart>
  );

  // Definir o cabeçalho da resposta como SVG
  res.setHeader("Content-Type", "image/svg+xml");

  // Enviar o SVG como resposta
  res.status(200).send(svgString);
}
// Create a chart and responde a SVG img like badge.io and such
