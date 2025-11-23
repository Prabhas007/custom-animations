// import React, { useState } from "react";
// import Modal from "./Modal";
// import SimpleLineChart from "./LineChart";
// import BasicBarChart from "./BarChat";
// import SimplePieChart from "./PieChart";
// import ThreeDPie from "./threeDPie";
// import "../styles/selector.css";

// export default function ChartSelector() {
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedChart, setSelectedChart] = useState(null);

//   const openChart = (chartName) => {
//     setSelectedChart(chartName);
//     setOpenModal(true);
//   };

//   return (
//     <>
//       <div className="chart-selector-container">
//         <h2>Select a Chart</h2>

//         <div className="chart-buttons">
//           <button onClick={() => openChart("line")}>📈 Line Chart</button>
//           <button onClick={() => openChart("bar")}>📊 Bar Chart</button>
//           <button onClick={() => openChart("pie")}>🥧 Pie Chart</button>
//           <button onClick={() => openChart("3dpie")}>🌀 3D Pie Chart</button>
//         </div>
//       </div>

//       <Modal open={openModal} onClose={() => setOpenModal(false)}>
//         {selectedChart === "line" && (
//           <>
//             <h3>Line Chart</h3>
//             <p>This chart shows data trends over time...</p>
//             <SimpleLineChart />
//           </>
//         )}

//         {selectedChart === "bar" && (
//           <>
//             <h3>Bar Graph</h3>
//             <p>This chart compares values across categories...</p>
//             <BasicBarChart />
//           </>
//         )}

//         {selectedChart === "pie" && (
//           <>
//             <h3>Pie Chart</h3>
//             <p>This chart represents proportional values...</p>
//             <SimplePieChart />
//           </>
//         )}

//         {selectedChart === "3dpie" && (
//           <>
//             <h3>3D-Style Pie Chart</h3>
//             <p>A gradient style pie chart with 3D visual feel...</p>
//             <ThreeDPie />
//           </>
//         )}
//       </Modal>
//     </>
//   );
// }

import React, { useState } from "react";
import Modal from "./Modal";
import SimpleLineChart from "./LineChart";
import BasicBarChart from "./BarChat";
import SimplePieChart from "./PieChart";
import ThreeDPie from "./threeDPie";
import FootprintPieChart from "./FootprintPieChart"; // <-- NEW IMPORT
import "../styles/selector.css";

export default function ChartSelector() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedChart, setSelectedChart] = useState(null);

  const openChart = (chartName) => {
    setSelectedChart(chartName);
    setOpenModal(true);
  };

  return (
    <>
      <div className="chart-selector-container">
        <h2>Select a Chart</h2>

        <div className="chart-buttons">
          <button onClick={() => openChart("line")}>📈 Line Chart</button>
          <button onClick={() => openChart("bar")}>📊 Bar Chart</button>
          <button onClick={() => openChart("pie")}>🥧 Pie Chart</button>
          <button onClick={() => openChart("3dpie")}>🌀 3D Pie Chart</button>

          {/* NEW BUTTON */}
          <button onClick={() => openChart("footprint")}>
            🦶 Footprint Chart
          </button>
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        {selectedChart === "line" && (
          <>
            <h3>Line Chart</h3>
            <p>This chart shows data trends over time...</p>
            <SimpleLineChart />
          </>
        )}

        {selectedChart === "bar" && (
          <>
            <h3>Bar Graph</h3>
            <p>This chart compares values across categories...</p>
            <BasicBarChart />
          </>
        )}

        {selectedChart === "pie" && (
          <>
            <h3>Pie Chart</h3>
            <p>This chart represents proportional values...</p>
            <SimplePieChart />
          </>
        )}

        {selectedChart === "3dpie" && (
          <>
            <h3>3D-Style Pie Chart</h3>
            <p>A gradient style pie chart with 3D visual feel...</p>
            <ThreeDPie />
          </>
        )}

        {/* NEW FOOTPRINT PIE OPTION */}
        {selectedChart === "footprint" && (
          <>
            <h3>Carbon Footprint Chart</h3>
            <p>This pie chart visualizes environmental impact categories with a footprint icon overlay.</p>
            <FootprintPieChart />
          </>
        )}
      </Modal>
    </>
  );
}
