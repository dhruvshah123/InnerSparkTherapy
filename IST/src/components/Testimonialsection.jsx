import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../axiosInstance.js';
import { toast, Toaster } from 'react-hot-toast';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    rating: 0,
    review: ''
  });
  const [hoveredRating, setHoveredRating] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axiosInstance.get('/users/fetchtesti');
        setTestimonials(response.data || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        toast.error('Failed to fetch testimonials');
      }
    };

    fetchTestimonials();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/users/posttest', newTestimonial);
      setTestimonials(prev => [response.data, ...prev]);
      setNewTestimonial({ name: '', rating: 0, review: '' });
      setHoveredRating(0);
      toast.success('Testimonial submitted successfully!');
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      toast.error('Failed to submit testimonial');
    }
  };

  const calculateRatingDistribution = () => {
    const distribution = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0
    };

    testimonials.forEach(testi => {
      const starRating = Math.floor(testi.rating / 2);
      distribution[starRating + 1] += 1;
    });

    return distribution;
  };

  const calculateAverageRating = () => {
    if (testimonials.length === 0) return 0;
    const avgRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
    return avgRating;
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index} 
        className={`inline-block ${index < Math.floor(rating / 2) ? 'text-yellow-500' : 'text-gray-300'}`} 
        size={24} 
        fill={index < Math.floor(rating / 2) ? '#fbbf24' : 'none'}
      />
    ));
  };

  const ratingDistribution = calculateRatingDistribution();
  const totalTestimonials = testimonials.length;
  const avgRating = calculateAverageRating();

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-100 flex flex-col">
      <Toaster position="top-right" />
      
      <div className="container mx-auto px-4 flex-grow">
        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-8">
          {/* Ratings Overview */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Average Rating</h2>
            <div className="flex items-center mb-4">
              <span className="text-4xl font-bold mr-2">{avgRating.toFixed(1)}</span>
              {renderStars(avgRating)}
            </div>
            
            {/* Rating Distribution */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center">
                  <span className="mr-2">{star}</span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5 mr-2">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full" 
                      style={{width: `${(ratingDistribution[star] / totalTestimonials) * 100 || 0}%`}}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {totalTestimonials > 0 
                      ? `${((ratingDistribution[star] / totalTestimonials) * 100).toFixed(0)}%` 
                      : '0%'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Review Submission Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Submit Your Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-2 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    className={`cursor-pointer ${
                      (hoveredRating ? index < hoveredRating : index < Math.floor(newTestimonial.rating / 2)) 
                      ? 'text-yellow-500' 
                      : 'text-gray-300'
                    }`}
                    size={24} 
                    fill={
                      (hoveredRating ? index < hoveredRating : index < Math.floor(newTestimonial.rating / 2)) 
                      ? '#fbbf24' 
                      : 'none'
                    }
                    onClick={() => setNewTestimonial(prev => ({...prev, rating: (index + 1) * 2}))}
                    onMouseEnter={() => setHoveredRating(index + 1)}
                    onMouseLeave={() => setHoveredRating(0)}
                  />
                ))}
              </div>
              
              <input
                type="text"
                name="name"
                value={newTestimonial.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
                placeholder="Name"
              />
              
              <textarea
                name="review"
                value={newTestimonial.review}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                rows="4"
                required
                placeholder="Write Your Review"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-[#2C7873] text-white py-2 rounded-md  transition duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

        {/* Customer Feedbacks */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Customer Feedbacks</h2>
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{testimonial.name}</span>
                  <span className="text-sm text-gray-500"></span>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star 
                      key={index} 
                      className={`inline-block ${index < Math.floor(testimonial.rating/2) ? 'text-yellow-500' : 'text-gray-300'}`} 
                      size={20} 
                      fill={index < Math.floor(testimonial.rating/2) ? '#fbbf24' : 'none'}
                    />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;