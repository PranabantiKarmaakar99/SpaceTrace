// src/components/VideoBackground.js
import React from "react";
import V1 from "../public/background.mp4";

const VideoBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src={V1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
