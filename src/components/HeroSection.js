import React from 'react';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
     <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4x sm:text-6xl lg:text-7xl text-center tracking-wide">
        FixOps build tools<br /> 
        <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text">
            for developers 
            </span>  
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Fuel your creativity and realize your FixOps app visions with our easy-to-use development tools. Start now and convert your ideas into an engaging virtual reality experience!
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-blue-500 to-red-800 py-3 px-4 mx-3 rouded-md">Start for free</a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border">Documentation</a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className="runded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
            <source src={video1} type="video/mp4 "/>
            Your browser does not support the video tag.
            </video> 

            <video autoPlay loop muted className="runded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
            <source src={video2} type="video/mp4 "/>
            Your browser does not support the video tag.
            </video> 
        </div>
     </div>
  );
}

export default HeroSection;