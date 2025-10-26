import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import CarCard from './CarCard';
import { cars } from '../data/cars';

const CarCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Popular Car');
  const categories = ['Popular Car', 'Luxury Car', 'Vintage Car', 'Family Car', 'Off-Road Car'];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Impressive Collection of Cars</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ranging from elegant sedans to powerful sports cars, all carefully selected to provide our customers with the ultimate driving experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} featured={index === 1} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto">
            See all Cars <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarCollection;