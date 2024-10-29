import React from "react";
import V1 from "../public/background.mp4";
import { useNavigate } from "react-router-dom";
import Earth from "../public/planet.png";

export const Hero = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/chartinfo');
  };

  const onClickHandler2 = () => {
    navigate('/signUp');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={V1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-11/12 md:w-1/2 h-full text-center text-white  p-4 md:p-8 flex flex-col items-center justify-center bg-opacity-50 rounded-lg">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-montserrat text-stone-400 text-opacity-80 font-bold mb-4">
            Space Trace
          </h1>
          <p className="text-md md:text-lg lg:text-xl font-inter font-extralight text-stone-400 text-opacity-75 mb-6">
            Charting the Cosmos, One Asteroid at a Time!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={onClickHandler}
              className="bg-orange-600 hover:bg-orange-700 bg-opacity-50 text-white py-2 px-4 md:px-6 rounded-full transition duration-300 w-full md:w-auto"
            >
              Explore the Charts
            </button>
            <button
              onClick={onClickHandler2}
              className="hover:border-orange-700 border-opacity-50 border border-orange-600 text-orange-600 font-semibold py-2 px-4 md:px-6 rounded-full transition duration-300 w-full md:w-auto"
            >
              Signup to get Latest Updates
            </button>
          </div>
        </div>
        <div className=" md:w-1/2"></div>
      </div>
    </div>
  );
};
