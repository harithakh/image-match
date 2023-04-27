import { Routes, Route } from "react-router-dom";
import React from "react";

import "./App.css";

import Header from "./components/Header";
import Home from "./Home"
import Capture from "./Capture";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/capture" element={<Capture />} />
        </Routes>
      </div>
     
    </>
  );
}

export default App;
