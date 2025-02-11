/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import { 
  Heart, 
  Brain, 
  Sparkles, 
  Shield, 
  Users, 
  Clock,
  Waves,
} from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  const [hoveredStage, setHoveredStage] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 5000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  const therapyStages = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Emotional Landscape",
      description: "Explore the intricate terrain of your inner emotions, mapping out pathways to healing",
      color: "text-rose-500",
      bgColor: "bg-rose-50",
      overlayColor: "bg-rose-100/80"
    },
    {
      icon: <Brain className="w-12 h-12 " />,
      title: "Cognitive Cartography",
      description: "Navigate the complex neural networks of your mind, charting new routes of thought and perception.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      overlayColor: "bg-purple-100/80"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Inner Illumination",
      description: "Uncover your hidden strengths and unlock untapped potential through guided self-reflection.",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      overlayColor: "bg-amber-100/80"
    },
    {
      icon: <Shield className="w-12 h-12 " />,
      title: "Sanctuary of Self",
      description: "Create a protected inner space where vulnerability becomes strength and healing begins.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      overlayColor: "bg-blue-100/80"
    },
    {
      icon: <Users className="w-12 h-12 " />,
      title: "Relational Resonance",
      description: "Harmonize your interpersonal dynamics, creating deeper, more meaningful connections.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      overlayColor: "bg-green-100/80"
    },
    {
      icon: <Clock className="w-12 h-12 " />,
      title: "Transformative Timeline",
      description: "Rewrite your narrative, transforming past experiences into powerful catalysts for growth.",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      overlayColor: "bg-teal-100/80"
    }
  ];

  return (
    <section className="py-16 bg-white text-gray-800 relative overflow-hidden px-4">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Waves className="w-full h-full animate-pulse" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 pb-4 text-gray-900">
            Your Therapeutic Odyssey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            An immersive journey of transformation, where each interaction <br></br>unveils a deeper layer of your inner landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16 " data-aos="fade-up">
          {therapyStages.map((stage, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredStage(index)}
              onMouseLeave={() => setHoveredStage(null)}
              className="relative group " 
            >
              <div className={`
                p-6 rounded-3xl relative overflow-hidden
                 bg-[#2c7873] text-white transition-all duration-500 
                ${hoveredStage === index ? 'shadow-xl scale-95' : 'scale-100'}
              `}   >
                {/* Blur overlay */}
                <div className={`
                  absolute inset-0 transition-opacity duration-500 backdrop-blur-sm
                  bg-[#399c94]
                  ${hoveredStage === index ? 'opacity-100' : 'opacity-0'}
                `} />

                {/* Content */}
                <div className={`
                  flex flex-col items-center text-center relative z-10
                  transition-all duration-500
                  ${hoveredStage === index ? 'transform translate-y-0' : 'transform translate-y-4'}
                `}>
                  <div className={`
                    mb-4 p-3 rounded-full transition-all duration-500 text-white
                    ${hoveredStage === index ? 'opacity-0' : 'opacity-100'}
                  `}>
                    {stage.icon}
                  </div>
                  <h3 className={`
                    text-xl font-bold mb-0 text-white
                    transition-all duration-500
                    ${hoveredStage === index ? 'transform -translate-y-6 scale-125 text-3xl' : ''}
                  `}>
                    {stage.title}
                  </h3>
                  
                  <div className={`
                    transition-all duration-500
                    ${hoveredStage === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
                  `}>
                    <p className="text-gray-800 text-xl mb-2">{stage.description}</p>
                    {/* <button 
                      className={`
                        px-5 py-1.5 rounded-full transition-all duration-300
                        text-white hover:opacity-80
                        bg-black shadow-sm text-sm font-medium
                      `} 
                    >
                      Learn More
                      
                    </button> */}
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;