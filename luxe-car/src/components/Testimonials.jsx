import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => Math.min(testimonials.length - 1, prev + 1));
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <div className="flex gap-2">
            <button 
              onClick={handlePrevious}
              disabled={currentTestimonial === 0}
              className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentTestimonial === testimonials.length - 1}
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            "{testimonials[currentTestimonial].text}"
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl">
              {testimonials[currentTestimonial].avatar}
            </div>
            <div>
              <div className="font-bold">{testimonials[currentTestimonial].name}</div>
              <div className="text-gray-600 text-sm">{testimonials[currentTestimonial].role}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;