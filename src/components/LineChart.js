import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Sample data
const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 200 },
  { name: "May", users: 700 },
];

export default function SimpleLineChart() {
  return (
    <LineChart width={600} height={350} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      
      <Line
        type="monotone"
        dataKey="users"
        stroke="#8884d8"
        strokeWidth={3}
        dot={{ r: 6 }}
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}
