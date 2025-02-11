import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';


const galleryImages = [
  { id: 1, src: "/api/placeholder/600/400?text=Therapy+Session+1", alt: "Loading soon...", category: "Individual" },
  { id: 2, src: "/api/placeholder/600/400?text=Therapy+Session+2", alt: "Loading soon...", category: "Couples" },
  { id: 3, src: "/api/placeholder/600/400?text=Therapy+Session+3", alt: "Loading soon...", category: "Family" },
  { id: 4, src: "/api/placeholder/600/400?text=Group+Session", alt: "Loading soon...", category: "Group" },
  { id: 5, src: "/api/placeholder/600/400?text=Therapy+Office", alt: "Loading soon...", category: "Office" },
  { id: 6, src: "/api/placeholder/600/400?text=Counseling+Space", alt: "Loading soon...", category: "Office" }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Individual', 'Couples', 'Family', 'Group', 'Office'];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <div className="min-h-screen " style={{ backgroundColor: "white" }}>


        <div className="container mx-auto px-4 py-20">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-8 text-gray-900"
          >
            Our Practice Gallery
          </motion.h1>

          {/* Category Filters */}
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${selectedCategory === category
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredImages.map(image => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Search className="text-white opacity-0 group-hover:opacity-100 w-12 h-12" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="text-center text-white mt-4">
                <p>{selectedImage.alt}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X className="w-10 h-10" />
              </button>
            </motion.div>
          </div>
        )}

      </div>
    </>
  );
};

export default Gallery;