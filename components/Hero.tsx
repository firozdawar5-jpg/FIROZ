
import React from 'react';
import { MessageCircle, Phone, ArrowDown, User } from 'lucide-react';

interface HeroProps {
  shopName: string;
  proprietor: string;
  contact: string;
}

const Hero: React.FC<HeroProps> = ({ shopName, proprietor, contact }) => {
  // Split name for styling if it has multiple words
  const words = shopName.split(' ');
  const firstPart = words.slice(0, 2).join(' ');
  const lastPart = words.slice(2).join(' ');

  return (
    <section className="relative min-h-[90vh] flex items-center bg-agricultural text-white overflow-hidden pt-16">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-600/20 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            जलंद्रा का सबसे विश्वसनीय अनाज केंद्र
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-4 leading-[1.1] drop-shadow-2xl">
            <span className="text-white">{firstPart}</span> <br />
            <span className="text-amber-500">{lastPart || 'ट्रेडर्स'}</span>
          </h1>

          <div className="flex items-center gap-2 mb-8 text-amber-200 bg-black/30 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
            <User size={18} />
            <span className="font-semibold italic text-sm md:text-base">प्रोप्राइटर: {proprietor}</span>
          </div>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl leading-relaxed">
            परंपरागत ईमानदारी और आधुनिक सुविधाओं का संगम। हम लाते हैं आपकी मेहनत की फसल का सही मूल्य।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href={`tel:${contact}`}
              className="group flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl shadow-amber-900/40"
            >
              <Phone size={24} className="group-hover:scale-110 transition" />
              संपर्क करें
            </a>
            <a 
              href={`https://wa.me/91${contact}?text=नमस्ते, मुझे आज के अनाज के भाव जानने हैं।`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-xl font-bold transition-all"
            >
              <MessageCircle size={24} className="group-hover:scale-110 transition text-green-400" />
              व्हाट्सएप भाव
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <ArrowDown size={32} />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fcfaf7] to-transparent"></div>
    </section>
  );
};

export default Hero;
