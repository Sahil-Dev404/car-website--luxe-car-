import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const SearchForm = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8 bg-white rounded-2xl p-6 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Pick-up Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search a location"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Pick-up date</label>
          <div className="relative">
            <input 
              type="text" 
              defaultValue="12/12/2023"
              className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Drop-off Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search a location"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Drop-off date</label>
          <div className="relative">
            <input 
              type="text" 
              defaultValue="12/12/2023"
              className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
          Find a Vehicle <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchForm;