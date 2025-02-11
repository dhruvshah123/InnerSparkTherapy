import React from 'react';
import { User, Target, BookOpen } from 'lucide-react';
import manav from '../assets/manav.jpg'

const Manavprofile = () => {
  return (
    <div className="min-h-10 flex flex-col bg-[#2C7873]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 lg:py-16 w-full">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 text-center w-full">
          <div className="flex justify-center mb-4 sm:mb-6">
            <img 
              src={manav} 
              alt="Manav Mehta" 
              className="rounded-full w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover border-4 border-black"
            />
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-2">Manav Mehta</h1>
          <h2 className="text-lg sm:text-xl text-black mb-4 sm:mb-6">Licensed Psychotherapist | Founder of InnerSpark Therapy</h2>
          
          <div className="space-y-4 sm:space-y-6 text-left">
            <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-2 sm:space-y-0">
              <User className="w-8 h-8 sm:w-12 sm:h-12 text-black mt-1 flex-shrink-0 mx-auto sm:mx-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-black text-center sm:text-left">Professional Profile</h3>
                <p className="text-black mt-2 text-sm sm:text-base">
                  Manav Mehta is a licensed psychotherapist and the founder of InnerSpark Therapy, dedicated to helping individuals navigate their mental health journeys with confidence and clarity. With extensive experience in the field, he specializes in anxiety, depression, trauma, and relationship challenges, offering personalized therapeutic solutions tailored to each client's unique needs.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-2 sm:space-y-0">
              <Target className="w-8 h-8 sm:w-12 sm:h-12 text-black mt-1 flex-shrink-0 mx-auto sm:mx-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-black text-center sm:text-left">Professional Specialties</h3>
                <ul className="text-black mt-2 list-disc pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Advanced trauma-informed care techniques</li>
                  <li>Cognitive Behavioral Therapy (CBT) and Mindfulness-based interventions</li>
                  <li>Relationship and communication skills development</li>
                  <li>Stress management and emotional regulation strategies</li>
                  <li>Individual and couples counseling</li>
                </ul>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manavprofile;