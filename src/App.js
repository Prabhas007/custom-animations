// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import SplashAnimation from "./components/SplashAnimation";
// import Navbar from "./components/Navbar";

// function SplashWrapper() {
//   const navigate = useNavigate();

//   // Redirect after 5 seconds
//   setTimeout(() => {
//     navigate("/navbar");
//   }, 5000);

//   return <SplashAnimation />;
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<SplashWrapper />} />
//         <Route path="/navbar" element={<Navbar />} />
//         <Route path="/home" element={<div>Home Page</div>} />
//         <Route path="/features" element={<div>Features</div>} />
//         <Route path="/dashboard" element={<div>Dashboard</div>} />
//         <Route path="/contact" element={<div>Contact</div>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import NavbarWithFlip from "./components/NavbarWithFlip";
import SimpleLineChart from "./components/LineChart";
import BasicBarChart from "./components/BarChat";
import SimplePieChart from "./components/PieChart";
import ThreeDPie from "./components/threeDPie";
import ChartSelector from "./components/ChartSelector";

export default function App() {
  const [showStart, setShowStart] = useState(true);

  return (
    <>
      <CustomCursor/>
      {showStart ? (
        <StartScreen onFinish={() => setShowStart(false)} />
      ) : (
        <>
          <Navbar/>
          <ChartSelector/>
        </>
        // <NavbarWithFlip/>
      )}
    </>
  );
}

