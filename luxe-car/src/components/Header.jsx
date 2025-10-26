import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="text-2xl font-bold tracking-wider">LUXEDRIVE</div>
          </div>
          <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors">
            Login / Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;