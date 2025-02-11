/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { ArrowRight } from 'lucide-react';

function Quote() {
  useEffect(() => {
    const scrollToSection = () => {
      const section = document.getElementById("next-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };



    return// Clean up timer
  }, []);
  const navigate = useNavigate(); 
  const CTAButton = ({ children, className = '' }) => (
    <button 
      className={`
        inline-flex items-center justify-center gap-2 
        whitespace-nowrap font-medium
        transition-colors focus-visible:outline-none 
        focus-visible:ring-1 focus-visible:ring-ring 
        disabled:pointer-events-none disabled:opacity-50 
        bg-primary text-primary-foreground shadow 
        hover:bg-primary/90 h-9 text-lg py-6 px-8 text-white rounded-full animate__animated animate__fadeInUp
        ${className}
      `} style={{backgroundColor:"black"}} onClick={() => {navigate('/contact')}}
    >
      {children}<ArrowRight className="ml-2" />
     
    </button>
  );

  return (
    <div className="bg-[#F8F9FA]">
     
      {/* Hero Section */}
      <header
        className="relative h-[60vh] text-black "
        style={{
          paddingTop: "60px", // Add padding equal to navbar height
          backgroundColor: "#F8F9FA",
          "--animate-slow": "8s", // Background color for the header
        }}
      >
        {/* Background Image */}
        {/* <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/d4/fb/8e/d4fb8edcd85d4ad5c9556838dc7d5358.jpg')", // Replace with your image URL
          }}
        ></div> */}

        {/* Content */}
        <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
          Ignite Your Inner Healing
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8">
          Embark on a journey to mental well-being with our expert therapy services
          </p>
          <div className="">
      <CTAButton>Start Your Journey</CTAButton>
    </div>
        </div>
      </header>

      {/* Next Section */}
      <div
        id="next-section" className="mt-4"
         // Background color for the next section
      >
         <Profile/>
      </div> 
    </div>
  );
}

export default Quote;
