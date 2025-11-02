import React from 'react';
import SearchForm from './SearchForm';

const Hero = () => {
  return (
    <section className="relative bg-black text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover the world on wheels<br />
          with our car rental service
        </h1>
        <div className="relative mt-12">
          <img 
            src="/img/Front.jpg" 
            alt="Luxury Car"
            className="w-full max-w-4xl mx-auto rounded-lg"
          />
        </div>
      </div>
      <SearchForm />
    </section>
  );
};

export default Hero;