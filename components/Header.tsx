
import React from 'react';
import { Tractor } from 'lucide-react';

interface HeaderProps {
  shopName: string;
}

const Header: React.FC<HeaderProps> = ({ shopName }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-amber-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-amber-600 p-2 rounded-lg text-white">
            <Tractor size={24} />
          </div>
          <span className="text-xl md:text-2xl font-bold text-amber-900 tracking-tight">{shopName}</span>
        </div>
        <nav className="hidden md:flex space-x-6 font-medium text-gray-600">
          <a href="#rates" className="hover:text-amber-700 transition">आज के भाव</a>
          <a href="#services" className="hover:text-amber-700 transition">सेवाएं</a>
          <a href="#contact" className="hover:text-amber-700 transition">संपर्क</a>
        </nav>
        <a 
          href="tel:8719932863"
          className="bg-amber-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-amber-700 transition text-sm"
        >
          कॉल करें
        </a>
      </div>
    </header>
  );
};

export default Header;
