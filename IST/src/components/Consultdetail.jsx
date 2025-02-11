/* eslint-disable no-unused-vars */

import React from 'react'
import Freeconsult from './Freeconsult'
import { useState } from 'react';
const Consultdetail = () => {
          const [isModalOpen, setIsModalOpen] = useState(false);
        
          const toggleModal = () => setIsModalOpen(!isModalOpen);
 
 
    return (
    <>
                 <div className="bg-cover bg-center text-center py-16 px-4 relative font-sans">
          <h2 className="text-2xl md:text-3xl text-black mb-4">
            For a <span className="font-bold">FREE consultation</span>, 
            fill out the form below !
          </h2>
          <button 
          className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
          onClick={toggleModal}
        >
          Schedule Meeting
        </button>
        </div>
        <Freeconsult 
        isModalOpen={isModalOpen} 
        toggleModal={toggleModal} 
      />


    </>
  )
}

export default Consultdetail