import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Laptop", sales: 120 },
  { name: "Phones", sales: 300 },
  { name: "TV", sales: 80 },
  { name: "Headphones", sales: 150 },
];

export default function BasicBarChart() {
  return (
    <BarChart width={600} height={350} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" fill="#82ca9d" barSize={40} />
    </BarChart>
  );
}
