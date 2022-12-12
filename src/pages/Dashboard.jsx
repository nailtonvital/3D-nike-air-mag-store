import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AirMagPage from "./AirMagPage";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return (
    <div className="bg-[#101010]">
      {windowSize.innerWidth > 640 ? <Sidebar /> : <Navbar/>}
      
      <div className="h-full md:ml-28 ">
        <Routes>
          <Route path="" />
          <Route path="shoes" />
          <Route path="shoes/shoe" element={<AirMagPage />} />
        </Routes>
      </div>
    </div>
  );
}
