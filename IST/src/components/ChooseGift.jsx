import React, { useRef, useState } from "react";
import gsap from "gsap";
import img1 from "../assets/img1.png";
import img3 from "../assets/img3.png";
import icon1 from "../assets/icon1.png";
import Freeconsult from "./Freeconsult";

export default function ChooseGift() {
  const stringRef = useRef(null);
  const [path, setPath] = useState("M 10 100 Q 500 100 990 100");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="w-full px-4 pb-8">
      <div className="max-w-6xl mx-auto text-black text-center" ref={stringRef}>
        {/* SVG Responsive Adjustments */}
        <svg 
          viewBox="0 0 1000 120" 
          preserveAspectRatio="xMidYMid meet" 
          className="w-full h-[10vh] mb-4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={path} stroke="black" strokeWidth="2" fill="transparent" />
        </svg>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-6">CHOOSE A GIFT</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center max-w-4xl mx-auto">
          {/* Individual Therapy Sessions */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[250px] mb-4">
              <img
                src={img1}
                alt="Individual Therapy Sessions"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-base md:text-lg font-medium text-center">
              Individual Therapy Sessions
            </p>
          </div>
          
          {/* Couple / Family Therapy Sessions */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[250px] mb-4">
              <img 
                src={icon1} 
                alt="Couple / Family Therapy Sessions" 
                className="w-full h-auto object-contain"
                style={{maxHeight: 107}}
              />
            </div>
            <p className="text-base md:text-lg font-medium text-center">
              Couple / Family Therapy Sessions
            </p>
          </div>
          
          {/* Career Growth */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[250px] mb-4">
              <img
                src={img3}
                alt="Career Growth"
                className="w-full h-auto object-contain"
                style={{maxHeight: 125}}
              />
            </div>
            <p className="text-base md:text-lg font-medium text-center">
              Career Growth / Assessment <br /> / Counseling Sessions/Testing
            </p>
          </div>
        </div>
        
        <button 
          className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
          onClick={toggleModal}
        >
          Gift Now
        </button>
      </div>

      <Freeconsult 
        isModalOpen={isModalOpen} 
        toggleModal={toggleModal} 
      />
    </div>
  );
}