import React from 'react';

const MobileApp = () => {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Download our mobile app ⚡</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Get the best experience with our mobile app. Download now and book your next car rental on the go.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
            <span>🍎</span> App Store
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
            <span>▶️</span> Google Play
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;