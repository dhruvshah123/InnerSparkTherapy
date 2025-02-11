/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Users, 
  Home, 
  ArrowRight 
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import couple from '../assets/couple.webp'
import family from '../assets/family.webp'
import indi from '../assets/iindividual.webp'
import Freeconsult from './Freeconsult';
const ServiceCard = ({ image, icon, title, description, issues, techniques }) => {
  return (
    
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
     
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h2 className="text-2xl font-bold ml-3 text-gray-800">{title}</h2>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Addressed Issues:</h3>
          <ul className="space-y-2 text-gray-800">
            {issues.map((issue, index) => (
              <li key={index} className="flex items-center">
                <ArrowRight className="mr-2 text-gray-600 w-4 h-4" />
                {issue}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-2 text-gray-900">Therapeutic Approaches:</h3>
          <p className="text-gray-700 italic">{techniques}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      image: indi,
      icon: <HeartPulse className="w-10 h-10 text-gray-700" />,
      title: "Individual Therapy",
      description: "Our individual therapy sessions provide a safe space for personal growth and healing.",
      issues: [
        "Anxiety and Depression",
        "Stress Management",
        "Self-esteem Issues",
        "Life Transitions",
        "Trauma Recovery",
        "Personal Development"
      ],
      techniques: "Cognitive Behavioral Therapy (CBT), Mindfulness-Based Stress Reduction (MBSR), Acceptance and Commitment Therapy (ACT)"
    },
    {
      image: couple,
      icon: <Users className="w-10 h-10 text-gray-700" />,
      title: "Couples Counseling",
      description: "Our couples therapy helps partners improve their relationship through better communication and understanding.",
      issues: [
        "Communication Difficulties",
        "Trust Issues",
        "Conflict Resolution",
        "Intimacy Concerns",
        "Premarital Counseling",
        "Navigating Major Life Changes"
      ],
      techniques: "Emotionally Focused Therapy (EFT), Gottman Method"
    },
    {
      image: family,
      icon: <Home className="w-10 h-10 text-gray-700" />,
      title: "Family Therapy",
      description: "Our family therapy sessions aim to improve family dynamics and resolve conflicts.",
      issues: [
        "Parent-Child Conflicts",
        "Sibling Rivalries",
        "Blended Family Issues",
        "Family Life Transitions",
        "Behavioral Problems in Children",
        "Improving Family Communication"
      ],
      techniques: "Structural Family Therapy, Narrative Therapy"
    }
  ];

  return (
    <>
    <div className="min-h-screen font-sans" style={{ backgroundColor: 'white' }}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8"
      >
        <motion.h1 
          className="text-4xl font-extrabold text-center mb-20 pt-10 mt-10 text-gray-900"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Our Therapeutic Services
        </motion.h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </motion.div>
    </div>

    </>
  );
};

export default Services;