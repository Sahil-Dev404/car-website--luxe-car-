import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RentByBrands from './components/RentByBrands';
import RentByBodyType from './components/RentByBodyType';
import CarCollection from './components/CarCollection';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      
      <Header />

      
      <main className="grow flex flex-col gap-20">
        <Hero />

        
        <section className="max-w-7xl w-full mx-auto px-4 space-y-20">
          <RentByBrands />
          <RentByBodyType />
          <CarCollection />
          <HowItWorks />
          <Services />
          <Testimonials />
          <MobileApp />
        </section>
      </main>

      
      <Footer />
    </div>
  );
};

export default App;
