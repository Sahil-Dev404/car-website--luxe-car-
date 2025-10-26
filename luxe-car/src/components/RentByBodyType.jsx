import React from 'react';
import { ArrowRight } from 'lucide-react';
import { bodyTypes } from '../data/bodyTypes';

const RentByBodyType = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Rent by body type</h2>
          <button className="flex items-center gap-2 text-black font-medium hover:underline">
            View all <ArrowRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {bodyTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img 
                src={type.image} 
                alt={type.name} 
                className="w-full h-32 object-contain mb-2 rounded-lg"
              />
              <div className="font-medium">{type.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentByBodyType;
