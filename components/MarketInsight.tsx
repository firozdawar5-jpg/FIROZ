
import React, { useState, useEffect } from 'react';
import { getMarketInsight } from '../services/geminiService';
import { Sparkles, Loader2 } from 'lucide-react';

const MarketInsight: React.FC = () => {
  const [insight, setInsight] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [crop, setCrop] = useState<string>('गेहूँ');

  const fetchInsight = async (selectedCrop: string) => {
    setLoading(true);
    const result = await getMarketInsight(selectedCrop);
    setInsight(result || 'जानकारी उपलब्ध नहीं है।');
    setLoading(false);
  };

  useEffect(() => {
    fetchInsight(crop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-16 bg-amber-50/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-amber-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-amber-100 p-2 rounded-full text-amber-600">
              <Sparkles size={24} />
            </div>
            <h2 className="text-2xl font-bold text-amber-900">बाजार विश्लेषण (AI द्वारा)</h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {['गेहूँ', 'मक्का', 'सोयाबीन'].map((c) => (
              <button
                key={c}
                onClick={() => { setCrop(c); fetchInsight(c); }}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  crop === c 
                  ? 'bg-amber-600 text-white shadow-md' 
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                }`}
              >
                {c} का रुझान
              </button>
            ))}
          </div>

          <div className="relative min-h-[150px] bg-gray-50 p-6 rounded-2xl border border-gray-100 italic text-gray-700 leading-relaxed">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="animate-spin text-amber-600" size={32} />
              </div>
            ) : (
              <div className="whitespace-pre-line text-sm md:text-base">
                {insight}
              </div>
            )}
          </div>
          
          <p className="mt-4 text-xs text-gray-500 text-right">
            * यह विश्लेषण कृत्रिम बुद्धिमत्ता (AI) द्वारा जनरेट किया गया है। व्यापारिक निर्णय लेने से पहले स्वयं जांच करें।
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketInsight;
