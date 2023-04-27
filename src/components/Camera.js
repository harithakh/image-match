import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";

import './Camera.css';

const Camera = () => {
  const [mediaStream, setMediaStream] = useState(null);
  const webcamRef = useRef(null);

  useEffect(() => {
    async function getMediaStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setMediaStream(stream);
      } catch (error) {
        console.error(error);
      }
    }

    getMediaStream();
  }, []);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Do something with the image, e.g. save it to a file or upload it to a server
  }, [webcamRef]);

  return(
    <div className="webcam-div">
        <Webcam audio={false} ref={webcamRef} className="webcam"/>
        <button onClick={capture}>Capture</button>
    </div>
  );
};

export default Camera;
