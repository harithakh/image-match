import React from "react";

import './capture.css'

import Camera from "./components/Camera";
import ImageSelector from "./components/ImageSelector";

function Capture() {
  return (
    <>
      <div className="image-display">
        <ImageSelector />
      </div>
      <div className="camera-display">
        <Camera />
      </div>
    </>
  );
}

export default Capture;
