import React from 'react';
import { Search, Calendar, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Browse and select',
      description: 'Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.'
    },
    {
      icon: Calendar,
      title: 'Book and confirm',
      description: 'Book your desired car with just a few clicks and receive an instant confirmation via email or SMS.'
    },
    {
      icon: CheckCircle,
      title: 'Enjoy your ride',
      description: 'Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How it woks</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=600&fit=crop" 
              alt="Jeep"
              className="rounded-2xl shadow-xl max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;