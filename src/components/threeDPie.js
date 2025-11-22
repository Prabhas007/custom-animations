import { Chart } from "react-google-charts";

const data = [
  ["Element", "Percentage"],
  ["Ether", 20],
  ["Air", 15],
  ["Fire", 25],
  ["Water", 18],
  ["Earth", 22],
];

const options = {
  title: "Panchabhootha",
  is3D: true,
};

export default function Real3DPie() {
  return <Chart chartType="PieChart" data={data} options={options} width="100%" height="400px" />;
}
