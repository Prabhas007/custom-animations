import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const data = [
  { name: "Chrome", value: 60 },
  { name: "Firefox", value: 20 },
  { name: "Safari", value: 10 },
  { name: "Edge", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function SimplePieChart() {
  return (
    <PieChart width={400} height={350}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={130}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
