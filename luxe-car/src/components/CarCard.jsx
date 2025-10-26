import React from 'react';

const CarCard = ({ car, featured }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
      <div className="relative h-48">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{car.name}</h3>
        <div className="text-3xl font-bold mb-4">
          {car.price}<span className="text-lg font-normal text-gray-600">/day</span>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-6 text-center text-sm">
          <div>
            <div className="text-gray-400 mb-1">⚙️</div>
            <div className="font-medium">{car.mileage}</div>
          </div>
          <div>
            <div className="text-gray-400 mb-1">🔄</div>
            <div className="font-medium">{car.transmission}</div>
          </div>
          <div>
            <div className="text-gray-400 mb-1">👥</div>
            <div className="font-medium">{car.capacity}</div>
          </div>
          <div>
            <div className="text-gray-400 mb-1">⚡</div>
            <div className="font-medium">{car.fuel}</div>
          </div>
        </div>
        <button 
          className={`w-full py-3 rounded-full font-medium transition-colors ${
            featured 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'border-2 border-black text-black hover:bg-black hover:text-white'
          }`}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;