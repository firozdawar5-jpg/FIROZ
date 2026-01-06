
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RatesTable from './components/RatesTable';
import MarketInsight from './components/MarketInsight';
import Services from './components/Services';
import Contact from './components/Contact';
import AdminPanel from './components/AdminPanel';
import { GrainRate, BusinessInfo } from './types';
import { GRAIN_RATES, CONTACT_NUMBERS, ADDRESS } from './constants';
import { ShieldAlert, Lock } from 'lucide-react';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  
  // Persistent State
  const [crops, setCrops] = useState<GrainRate[]>(() => {
    const saved = localStorage.getItem('dawar_crops');
    return saved ? JSON.parse(saved) : GRAIN_RATES;
  });

  const [bizInfo, setBizInfo] = useState<BusinessInfo>(() => {
    const saved = localStorage.getItem('dawar_biz_info');
    return saved ? JSON.parse(saved) : {
      shopName: 'न्यू डावर ट्रेडर्स',
      proprietorName: 'अब्दुल करीम डावर',
      address: ADDRESS,
      contactNumbers: CONTACT_NUMBERS
    };
  });

  useEffect(() => {
    localStorage.setItem('dawar_crops', JSON.stringify(crops));
  }, [crops]);

  useEffect(() => {
    localStorage.setItem('dawar_biz_info', JSON.stringify(bizInfo));
  }, [bizInfo]);

  const handleAdminLogin = () => {
    // Simple password for demo purposes
    if (password === '8719') {
      setIsAuthModalOpen(false);
      setIsAdminOpen(true);
      setPassword('');
    } else {
      alert('गलत पासवर्ड! कृपया सही पिन डालें।');
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200 selection:text-amber-900">
      <Header shopName={bizInfo.shopName} />
      
      <main className="flex-grow">
        <Hero 
          shopName={bizInfo.shopName} 
          proprietor={bizInfo.proprietorName} 
          contact={bizInfo.contactNumbers[0]} 
        />
        
        {/* Sticky Call to Action for Mobile */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 w-[90%] md:hidden">
          <div className="grid grid-cols-2 gap-2">
            <a 
              href={`tel:${bizInfo.contactNumbers[0]}`}
              className="bg-amber-600 text-white py-3 rounded-xl font-bold shadow-2xl flex items-center justify-center gap-2 text-sm"
            >
              कॉल करें
            </a>
            <a 
              href={`https://wa.me/91${bizInfo.contactNumbers[0]}`}
              className="bg-green-600 text-white py-3 rounded-xl font-bold shadow-2xl flex items-center justify-center gap-2 text-sm"
            >
              व्हाट्सएप
            </a>
          </div>
        </div>

        <RatesTable crops={crops} contact={bizInfo.contactNumbers[0]} />
        <MarketInsight />
        <Services />
        <Contact 
          address={bizInfo.address} 
          numbers={bizInfo.contactNumbers} 
        />
      </main>

      {/* Admin Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80">
          <div className="bg-white p-8 rounded-[2rem] max-w-sm w-full shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-amber-100 text-amber-900 rounded-full">
                <Lock size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">एडमिन लॉगिन</h3>
            <p className="text-gray-500 text-center text-sm mb-6">कंट्रोल पैनल एक्सेस करने के लिए पिन डालें।</p>
            <input 
              type="password" 
              className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-amber-500 rounded-2xl outline-none text-center text-2xl tracking-widest mb-4"
              placeholder="••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
            />
            <div className="flex gap-2">
              <button 
                onClick={() => setIsAuthModalOpen(false)}
                className="flex-1 py-4 text-gray-500 font-bold hover:bg-gray-100 rounded-xl transition"
              >
                रद्द करें
              </button>
              <button 
                onClick={handleAdminLogin}
                className="flex-1 py-4 bg-amber-700 text-white font-bold rounded-xl hover:bg-amber-800 transition"
              >
                खोलें
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Control Overlay */}
      {isAdminOpen && (
        <AdminPanel 
          crops={crops} 
          businessInfo={bizInfo} 
          onUpdateCrops={setCrops}
          onUpdateBusiness={setBizInfo}
          onClose={() => setIsAdminOpen(false)}
        />
      )}
      
      <footer className="bg-amber-950 py-10 text-amber-200/60 text-center border-t border-amber-900/50">
        <div className="container mx-auto px-4">
          <p className="font-bold text-amber-100 mb-2 text-lg">{bizInfo.shopName}, जलंद्रा</p>
          <p className="text-amber-400 font-medium mb-4">प्रोप्राइटर: {bizInfo.proprietorName}</p>
          <p className="text-sm">© {new Date().getFullYear()} सर्वाधिकार सुरक्षित। अनाज व्यापार और सेवा।</p>
          
          <button 
            onClick={() => setIsAuthModalOpen(true)}
            className="mt-6 inline-flex items-center gap-2 text-xs opacity-30 hover:opacity-100 transition-opacity bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
          >
            <ShieldAlert size={14} />
            एडमिन पैनल
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
