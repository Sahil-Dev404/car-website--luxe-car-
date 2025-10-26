import React from 'react';
import { Sparkles, DollarSign, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Quality Choice',
      description: 'We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more.'
    },
    {
      icon: DollarSign,
      title: 'Affordable Prices',
      description: 'Our rental rates are highly competitive and affordable, allowing our customers to enjoy their trips without breaking the bank.'
    },
    {
      icon: CheckCircle,
      title: 'Convenient Online Booking',
      description: 'With our easy-to-use online booking system, customers can quickly and conveniently reserve their rental car from anywhere, anytime.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services & Benefits</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            To make renting easy and hassle-free, we provide a variety of services and advantages. We have you covered with a variety of vehicles and flexible rental terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-black" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;