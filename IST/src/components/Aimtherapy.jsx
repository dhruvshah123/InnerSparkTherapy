/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import Freeconsult from './Freeconsult'
import { Heart, Wallet, Gift } from 'lucide-react';
function Aimtherapy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const aims = [
    {
      icon: Wallet,
      title: "Making Mental Healthcare Accessible",
      description: "We're committed to providing affordable therapy options for everyone."
    },
    {
      icon: Heart,
      title: "Breaking Down Barriers",
      description: "Destigmatizing therapy by fostering open conversations about mental health."
    },
    {
      icon: Gift,
      title: "Transforming Lives Through Giving",
      description: "Reimagining gifting as a way to share meaningful life changes."
    }
  ];

  return (
    <div className='h-150 w-full bg-cover bg-center bg-gray-100 flex flex-col justify-center'
    style={{
      
      color: "",
    }}>
       <div className=" min-h-screen">
       <div className="w-full bg-gray-100 pt-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 ">
          GIFT A THERAPY believes in:
          </h1>
          <div className="w-60 h-0.5 bg-black mx-auto rounded-full" />
        </div>

        {/* Aims Section */}
        <div className="flex flex-nowrap overflow-x-auto gap-8">
          {aims.map((aim, index) => (
            <div key={index} className="flex-1 min-w-[280px] text-center group">
              {/* Icon */}
              <div className="mb-6 inline-block">
                <div className="w-16 h-16 rounded-xl bg-[#E4E1D6] shadow-lg flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                  <aim.icon className="w-8 h-8 text-black" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {aim.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {aim.description}
                </p>
              </div>

              {/* Divider for all except last item */}
              {index < aims.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div> 

      <section className="py-10">
  <h2 className="text-center text-3xl text-black pt-2 font-bold mb-8">TYPES OF THERAPY PACKAGES</h2>
  <div className="grid md:grid-cols-3 gap-6 px-4 md:px-12">
    {/* Package 1 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={img7}
        alt="Gift the entire therapy process"
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-bold">Individual Therapy Package</h3>
        <p className="mt-2 text-gray-700">
        One-on-one sessions tailored to personal mental health needs, offering support and guidance.
        </p>
      </div>
    </div>

    {/* Package 2 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={img8}
        alt="Gift a few therapy sessions"
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-bold">Couple Therapy Package</h3>
        <p className="mt-2 text-gray-700">
        Strengthen your relationship with professional counseling focused on communication resolution.
        </p>
      </div>
    </div>

    {/* Package 3 */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={img9}
        alt="Gift one therapy session"
        className="w-full h-40 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-bold">Family Therapy Package</h3>
        <p className="mt-2 text-gray-700">
        Work through family challenges together with therapy sessions to build stronger bonds.        </p>
      </div>
    </div>
  </div>

  <p className="text-center text-sm text-black mt-6">
    *Note: Pricing details will be shared via email upon package selection.
  </p>
  <div className="text-center mt-4">
    <button 
      className="bg-black text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
      onClick={toggleModal}
    >
      Gift Now
    </button>
  </div>
</section>
    </div>

    <Freeconsult 
      isModalOpen={isModalOpen} 
      toggleModal={toggleModal} 
    />
    </div>
  )
}

export default Aimtherapy