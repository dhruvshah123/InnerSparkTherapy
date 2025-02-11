import React from 'react';
import { useNavigate } from 'react-router-dom';
import manav from '../assets/manav.jpg';

function Profile() {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate('/about');
    };

    return (    
        <section 
            className="flex flex-col md:flex-row items-center justify-center py-20 px-4 md:px-28 font-semibold bg-gray-100"
        >
            {/* Left Side - Description */}
            <div className=" md:w-1/2 text-center md:text-left md:pr-8 flex flex-col items-center md:items-start md:ml-10 ">
              
                <h3 className="text-4xl font-bold mb-6 ">Licensed counsellor | Founder of InnerSpark Therapy</h3>
                <p className="text-lg mb-6 text-gray-700 max-w-prose">
                    Licensed counsellor and founder of InnerSpark Therapy, Manav is dedicated to helping individuals navigate anxiety, depression, trauma, and relationship challenges. With a collaborative, evidence-based approach, he creates a compassionate, judgment-free space for healing and growth. By addressing root causes and equipping clients with practical tools, Manav empowers lasting change and emotional well-being.
                </p>
              
                <button 
                    className="text-lg py-2 px-4 mt-4 rounded-full bg-black hover:bg-black text-white transition-colors duration-300 animate__animated animate__fadeInUp"
                    onClick={handleLearnMore}
                >
                    Learn More
                </button>
            </div>

            {/* Right Side - Photo */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center ">
                <img
                    src={manav}
                    alt="Manav Mehta"
                    className="w-96 h-96 object-cover rounded-full shadow-lg"
                />
            </div>
        </section>
    );
}

export default Profile;