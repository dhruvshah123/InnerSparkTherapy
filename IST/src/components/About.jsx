
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import { Users, Heart, Award, Quote, Star, Coffee } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Manavprofile from './Manavprofile';
import about3 from '../assets/about3.jpg'
import about4 from '../assets/about4.jpg'
import Consultdetail from './Consultdetail';

import { useState } from 'react';

const About = () => {
  return (
    <>
      <div className="min-h-screen ">

        {/* Hero Section */}
        <div className="bg-gradient-to-br text-black" style={{ backgroundColor: "white" }}>
          <div className="max-w-6xl mx-auto  py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center ">
              <div className=''>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-black">
                  Empowering Lives Through Compassionate Therapy
                </h1>
                <p className="text-lg text-black mb-8">
                  At Inner Spark Therapy, we believe everyone deserves a space to grow,
                  heal, and discover their inner strength.
                </p>
                {/* <div className="flex space-x-4">
                <Stat number="1+" text="Years Experience" />
                <Stat number="5000+" text="Lives Touched" />
                <Stat number="98%" text="Client Satisfaction" />
              </div> */}
              </div>
              <div className="grid grid-cols-2 gap-12 mt-8">
                <ImageBlock className="transform translate-y-4" src="data:image/jpeg;base64,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" />
                <ImageBlock className="transform -translate-y-8" src="data:image/jpeg;base64,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" />
                <ImageBlock className="transform -translate-y-4" src={about3} />
                <ImageBlock className="transform translate-y-8" src={about4} />
              </div>
            </div>
          </div>
        </div>
        <Manavprofile/>

        {/* Mission Section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
      <style>
        {`
          @keyframes slideUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slideUp {
            opacity: 0;
            animation: slideUp 0.8s ease-out forwards;
          }
        `}
      </style>
      <div className="grid md:grid-cols-3 gap-8">
        <ValueCard
          icon={<Heart className="w-8 h-8" />}
          title="Our Mission"
          description="To provide accessible, compassionate mental health care that empowers individuals to lead fuller, more authentic lives."
          delay={0}
        />
        <ValueCard
          icon={<Users className="w-8 h-8" />}
          title="Our Vision"
          description="Creating a world where mental health support is stigma-free, accessible, and integral to everyone's wellness journey."
          delay={200}
        />
        <ValueCard
          icon={<Award className="w-8 h-8" />}
          title="Our Values"
          description="Empathy, excellence, integrity, and inclusivity guide everything we do in serving our diverse community."
          delay={400}
        />
      </div>
    </div>



        {/* Testimonial Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
      <div 
        className="rounded-2xl p-8 md:p-12 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-xl"
        style={{ backgroundColor: "#2C7873" }}
      >
        <Quote className="w-12 h-12 text-white mb-6 " />
        
        <blockquote className="text-xl md:text-2xl text-white mb-6 transition-opacity duration-500 hover:opacity-90">
          "Inner Spark Therapy has created an environment where healing feels natural
          and growth seems limitless. Their approach to therapy is both professional
          and deeply human."
        </blockquote>
        
        <div className="flex items-center opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
          <div className="flex text-yellow-400 mr-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-5 h-5 fill-current transform transition-transform duration-300 hover:scale-125"
              />
            ))}
          </div>
          <p className="text-white transition-all duration-300 hover:translate-x-2">
            — Anonymous Client Review
          </p>
        </div>
      </div>
    </div>

        {/* Contact CTA */}
         <Consultdetail/>

      </div>
      <br></br>

    </>
  );
};



const ImageBlock = ({ className, src }) => (
  <div className={`${className}  h-48 rounded-lg overflow-hidden`}>
    <img
      src={src}
      alt="Therapy session"
      className="w-full h-full object-cover  hover:opacity-100 transition-opacity"
    />
  </div>
);

const ValueCard = ({ icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        p-6 rounded-3xl bg-[#2C7873] 
        transform transition-all duration-500
        hover:shadow-2xl
        relative overflow-hidden
        animate-slideUp
        
      `}
      style={{
        animationDelay: `${delay}ms`,
       
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-teal-600 to-[#2C7873]
          transition-opacity duration-500 
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* Content container */}
      <div className="relative z-10">
        <div 
          className={`
            mb-4 text-white transform transition-all duration-500
            ${isHovered ? '' : ''}
          `}
        >
          {icon}
        </div>

        <h3 
          className={`
            text-xl font-semibold text-white mb-2
            transform transition-all duration-500
            ${isHovered ? 'translate-x-2' : ''}
          `}
        >
          {title}
        </h3>

        <p 
          className={`
            text-white transition-all duration-500
            ${isHovered ? 'translate-x-1' : ''}
          `}
        >
          {description}
        </p>

        {/* Animated underline */}
        <div 
          className={`
            h-0.5 bg-white mt-4 transition-all duration-500 ease-out
            ${isHovered ? 'w-full' : 'w-0'}
          `} 
        />
      </div>

      {/* Corner decoration */}
      <div 
        className={`
          absolute -right-12 -top-12 w-24 h-24
          bg-white/10 rounded-full blur-lg
          transition-all duration-500
          ${isHovered ? 'scale-150' : 'scale-100'}
        `}
      />
    </div>
  );
};


export default About;