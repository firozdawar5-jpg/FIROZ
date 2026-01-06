
import React from 'react';
import { GrainRate } from '../types';
import { Calendar, ChevronRight } from 'lucide-react';

interface RatesTableProps {
  crops: GrainRate[];
  contact: string;
}

const RatesTable: React.FC<RatesTableProps> = ({ crops, contact }) => {
  const today = new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section id="rates" className="py-24 bg-[#fcfaf7]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">मंडी की ताजा <span className="text-amber-600">स्थितियाँ</span></h2>
            <div className="h-2 w-20 bg-amber-600 rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">
              हम बाजार के उतार-चढ़ाव पर नजर रखते हैं ताकि आपको सर्वोत्तम भाव मिल सके।
            </p>
          </div>
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-xl text-amber-900 font-semibold border border-amber-200 self-start">
            <Calendar size={18} />
            {today} के भाव
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {crops.length > 0 ? crops.map((rate) => (
            <div 
              key={rate.id} 
              className="bg-white p-6 rounded-3xl border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider">
                  {rate.quality}
                </span>
                <ChevronRight className="text-amber-200 group-hover:text-amber-500 transition" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{rate.cropName}</h3>
              <div className="text-3xl font-black text-amber-700">
                {rate.todayRate}
              </div>
              <p className="text-xs text-gray-400 mt-4 italic">प्रति क्विंटल (लगभग)</p>
            </div>
          )) : (
            <div className="col-span-full text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
              <p className="text-gray-400 text-xl">अभी कोई भाव उपलब्ध नहीं हैं।</p>
            </div>
          )}
        </div>

        <div className="mt-12 bg-amber-900 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-800 rounded-full -mr-32 -mt-32 opacity-50"></div>
          <div className="z-10 text-center md:text-left">
            <h4 className="text-2xl font-bold text-white mb-2">क्या आप अपनी फसल बेचना चाहते हैं?</h4>
            <p className="text-amber-200">अभी फोन करें और तुलाई का समय बुक करें।</p>
          </div>
          <a 
            href={`tel:${contact}`} 
            className="z-10 bg-white text-amber-900 px-8 py-4 rounded-2xl font-bold hover:bg-amber-50 transition-colors shadow-lg"
          >
            अभी बात करें
          </a>
        </div>
      </div>
    </section>
  );
};

export default RatesTable;
