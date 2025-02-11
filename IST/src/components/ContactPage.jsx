import React, { useState } from 'react';
import { Card } from '../Components/ui/Card.jsx';
import { Input } from '../Components/ui/Input.jsx';
import { Textarea } from '../Components/ui/Textarea.jsx';
import { Button } from '../Components/ui/Button.jsx';
import { Phone, Mail, MapPin, Clock, Heart, Send, Leaf } from 'lucide-react';
import Navbar from './Navbar.jsx';
import { axiosInstance } from '../axiosInstance.js';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '' });

    try {
      const response = await axiosInstance.post("/users/sendmail", formData);
      
      if (response.status === 201) {
        setStatus({ loading: false, message: 'Your message has been sent successfully!' });
        setFormData({ firstname: '', lastname: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({ loading: false, message: 'Failed to send your message. Please try again later.' });
    }
  };

  return (
    <>
  
      <div className="min-h-screen bg-[#F8F9FA] px-4 py-8 md:px-8 lg:p-28">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-16">
            <div className="flex justify-center items-center mb-6 space-x-4 animate-fade-in">
              <Leaf className="w-8 h-8 md:w-12 md:h-12 text-[#968f77] animate-spin-slow" />
              <Heart className="w-8 h-8 md:w-12 md:h-12 text-[#776f59] animate-pulse" />
              <Leaf className="w-8 h-8 md:w-12 md:h-12 text-[#968f77] animate-spin-slow" transform="scale(-1,1)" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight">
              Begin Your Journey
            </h1>
            <p className="text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed font-light">
              Your path to wellness starts with a conversation. Let us be your companion on this transformative journey.
            </p>
          </div>

          {/* Cards Grid - Maintaining original layout */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {/* Contact Info Card - Left Side */}
            <Card className="p-6 md:p-10 bg-white/90 shadow-xl transition-transform hover:scale-105 border border-[#E4E1D6]/50 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">Connect With Us</h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Phone', value: '+91 70399 72867' },
                  { icon: Mail, label: 'Email', value: 'coach@innersparktherapy.com' },
                  { icon: MapPin, label: 'Location', values: ['Therapy session are done remotely'] },
                  { icon: Clock, label: 'Office Hours', values: ['Mon - Fri: 9am - 7pm', 'Sat: 10am - 4pm'] }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-4 bg-[#E4E1D6] rounded-full shadow-md">
                      <item.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-medium text-lg text-black">{item.label}</p>
                      {item.value && <p className="text-black">{item.value}</p>}
                      {item.values && item.values.map((val, idx) => (
                        <p key={idx} className="text-black">{val}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Form Card - Right Side */}
            <Card className="md:col-span-2 p-6 md:p-10 bg-white/90 shadow-xl border border-[#E4E1D6]/50 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">Share Your Story</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {['First Name', 'Last Name'].map((label, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-black mb-2">{label}</label>
                      <Input
                        type="text"
                        name={label.toLowerCase().replace(' ', '')}
                        value={formData[label.toLowerCase().replace(' ', '')]}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border-2 border-[#E4E1D6] focus:border-[#968f77] transition rounded-lg h-12 px-4"
                        placeholder={label}
                      />
                    </div>
                  ))}
                </div>

                {['Email', 'Phone'].map((label, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-black mb-2">{label}</label>
                    <Input
                      type={label === 'Email' ? 'email' : 'tel'}
                      name={label.toLowerCase()}
                      value={formData[label.toLowerCase()]}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border-2 border-[#E4E1D6] focus:border-[#968f77] transition rounded-lg h-12 px-4"
                      placeholder={label}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-black mb-2">Your Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-36 bg-white border-2 border-[#E4E1D6] focus:border-[#968f77] transition rounded-lg p-4"
                    placeholder="Share your thoughts..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-700 text-white py-4 rounded-lg shadow-lg flex items-center justify-center space-x-3 text-lg font-medium transition"
                  disabled={status.loading}
                >
                  <Send className="w-5 h-5" />
                  <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
                </Button>

                {status.message && (
                  <p className={`text-center mt-4 ${status.message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;