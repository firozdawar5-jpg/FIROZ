
import React from 'react';
import { Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

interface ContactProps {
  address: string;
  numbers: string[];
}

const Contact: React.FC<ContactProps> = ({ address, numbers }) => {
  return (
    <section id="contact" className="py-24 bg-gray-900 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              हमेशा आपके <br />
              <span className="text-amber-500">साथ खड़े हैं</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              अपनी उपज की सर्वोत्तम जानकारी के लिए हमारे विशेषज्ञों से जुड़ें। जलंद्रा मंडी में आपका स्वागत है।
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 border border-amber-500/20">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">दुकान का पता</p>
                  <p className="text-white text-lg font-medium">{address}</p>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 border border-amber-500/20">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">मुख्य नंबर</p>
                  <div className="flex flex-wrap gap-x-4">
                    {numbers.map((num) => (
                      <a key={num} href={`tel:${num}`} className="text-white text-xl font-bold hover:text-amber-400 transition">
                        +91 {num}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-amber-600/10 rounded-2xl flex items-center justify-center text-amber-500 border border-amber-500/20">
                  <Clock size={28} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">सेवा समय</p>
                  <p className="text-white text-lg font-medium">9:00 AM - 7:00 PM (सोम - शनि)</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-amber-600 rounded-3xl flex items-center gap-6">
              <div className="p-4 bg-white/20 rounded-2xl text-white">
                <MessageSquare size={32} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl">सीधे व्हाट्सएप करें</h4>
                <a href={`https://wa.me/91${numbers[0]}`} className="text-amber-100 hover:underline">चैट शुरू करें</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative">
              <div className="absolute top-0 right-10 -mt-6 bg-amber-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
                तेजी से रिप्लाई
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">पूछताछ फॉर्म</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">आपका नाम</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 px-6 py-4 rounded-2xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all" 
                      placeholder="पूरा नाम दर्ज करें"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">मोबाइल नंबर</label>
                    <input 
                      type="tel" 
                      className="w-full bg-gray-50 px-6 py-4 rounded-2xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all" 
                      placeholder="10 अंकों का नंबर"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">आपकी फसल</label>
                  <select className="w-full bg-gray-50 px-6 py-4 rounded-2xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all appearance-none">
                    <option>गेहूँ</option>
                    <option>मक्का</option>
                    <option>सोयाबीन</option>
                    <option>अन्य</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">विवरण (Optional)</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-gray-50 px-6 py-4 rounded-2xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all" 
                    placeholder="कोई विशेष जानकारी..."
                  ></textarea>
                </div>
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-transform active:scale-[0.98]">
                  <Send size={24} className="text-amber-500" />
                  विवरण सबमिट करें
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
