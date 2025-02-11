/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Freeconsult from "./Freeconsult.jsx";
import ChooseGift from "./ChooseGift.jsx";
import Aimtherapy from "./Aimtherapy.jsx";
import { useState } from "react";
import t1 from '../assets/t1.png'
import { Link } from "react-router-dom";

const GiftTherapy = () => {
  useGSAP(() => {
    // Hero section animation
    gsap.from(".hero-content", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2
    });

    // Image animation
    gsap.from(".hero-image", {
      opacity: 0,
      x: 30,
      duration: 1.2,
      delay: 0.5
    });
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-8 pt-24 md:pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="md:w-1/2 space-y-6 hero-content px-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Gift the Power of <span className="">Healing</span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Transform lives through the meaningful gift of therapy. Your gesture 
                can be the first step in someone's journey towards mental well-being 
                and personal growth.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Perfect for any occasion, therapy gifting opens doors to self-discovery, 
                emotional healing, and lasting positive change.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-black text-white rounded-lg  transition-colors duration-300 shadow-lg hover:shadow-xl"  onClick={toggleModal} >
                Gift Now
              </button>
              <button className="px-8 py-3 border-2 border-black rounded-lg  transition-colors duration-300"><Link to='/about'> Learn More</Link>
               
              </button>
              
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 hero-image pr-20">
            <div className="relative">
              <div className="absolute -inset-4  rounded-lg opacity-50 blur"></div>
              <img
                src={t1}
                alt="Therapy Session"
                className="relative w-full h-[80vh] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <div className="">
        <ChooseGift />
        <Freeconsult 
        isModalOpen={isModalOpen} 
        toggleModal={toggleModal} 
      />
        <Aimtherapy />
      </div>
    </div>
  );
};

export default GiftTherapy;