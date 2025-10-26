import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="text-2xl font-bold tracking-wider">LUXEDRIVE</div>
          <nav className="flex gap-8 text-sm">
            <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
            <a href="#pages" className="hover:text-gray-400 transition-colors">Pages</a>
            <a href="#about" className="hover:text-gray-400 transition-colors">About Us</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
          </nav>
          <div className="flex gap-4">
            <a href="#facebook" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors text-sm">
              f
            </a>
            <a href="#linkedin" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors text-sm">
              in
            </a>
            <a href="#instagram" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors text-sm">
              ig
            </a>
            <a href="#youtube" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors text-sm">
              yt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;