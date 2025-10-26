import React from 'react';
import { ArrowRight } from 'lucide-react';
import { brands } from '../data/brands';

const RentByBrands = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Rent by Brands</h2>
          <button className="flex items-center gap-2 text-black font-medium hover:underline">
            View all <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-25 mx-auto mb-4 object-contain"
              />
              <div className="font-medium">{brand.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentByBrands;
