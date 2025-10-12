import React from "react";
import Screen1 from "./Routes/Screen1";
import Screen2 from "./Routes/Screen2";
import Screen3 from "./Routes/Screen3";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Screen1 />} />
      <Route path="/screen2" element={<Screen2 />} />
      <Route path="/screen3" element={<Screen3 />} />
    </Routes>
  );
}

export default App;
