// pages/api/chart.js

import { Chart, registerables } from "chart.js";
Chart.register(...registerables); // Registrar todos os controladores, elementos, escalas e plugins

export default function handler(
  req: { query: { [x: string]: any; labels: any; data: any; chartType?: "bar" | undefined } },
  res: {
    setHeader: (arg0: string, arg1: string) => void;
    status: (arg0: number) => { (): any; new (): any; send: { (arg0: any): void; new (): any } };
  }
) {
  // 1. Obter os dados da requisição (neste exemplo, via query parameters)
  const { labels, data, chartType = "bar", ...chartOptions } = req.query;

  // 2. Criar um canvas virtual (não visível no navegador)
  const canvas = createCanvas(400, 300); // Ajuste as dimensões conforme necessário
  const ctx = canvas.getContext("2d");

  // 3. Criar o gráfico com Chart.js
  new Chart(ctx, {
    type: chartType,
    data: {
      labels: labels ? labels.split(",") : [],
      datasets: [
        {
          label: "Dados do gráfico",
          data: data ? data.split(",").map(Number) : [],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: chartOptions ? JSON.parse(JSON.stringify(chartOptions)) : {},
  });

  // 4. Converter o canvas para SVG
  const svgString = canvas.toDataURL("image/svg+xml");

  // 5. Retornar o SVG
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svgString);
}

// Função auxiliar para criar um canvas virtual
const { createCanvas } = require("canvas");
