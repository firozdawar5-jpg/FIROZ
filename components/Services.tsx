
import React from 'react';
import { Scale, Wallet, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
        <Scale size={300} />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">हमें ही <span className="text-amber-600">क्यों चुनें?</span></h2>
          <div className="h-2 w-20 bg-amber-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            सालों का अनुभव और हजारों किसानों का भरोसा ही हमारी असली पहचान है।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: 'सटीक एवं निष्पक्ष तौल',
              desc: 'प्रत्येक ग्राम का हिसाब। हमारे डिजिटल कांटे नियमित रूप से प्रमाणित किए जाते हैं ताकि आपको नुकसान न हो।',
              icon: <Scale className="w-10 h-10" />,
              features: ['डिजिटल डिस्पले', 'बिना कटौती', 'पारदर्शी प्रक्रिया']
            },
            {
              title: 'त्वरित नकद भुगतान',
              desc: 'जैसे ही फसल की तुलाई समाप्त होती है, आपका भुगतान आपके हाथ में होता है। कोई उधारी नहीं।',
              icon: <Wallet className="w-10 h-10" />,
              features: ['नकद भुगतान', 'RTGS/IMPS', 'पक्की रसीद']
            },
            {
              title: 'विश्वसनीय व्यवहार',
              desc: 'व्यापार से पहले हमारा रिश्ता है। हम किसानों की मेहनत का सम्मान करते हैं और सही सलाह देते हैं।',
              icon: <ShieldCheck className="w-10 h-10" />,
              features: ['इमानदारी', 'साफ नीति', 'पुराना अनुभव']
            }
          ].map((service, idx) => (
            <div key={idx} className="relative group">
              <div className="h-full bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:border-amber-200 transition-all duration-500 hover:bg-white hover:shadow-2xl">
                <div className="bg-amber-600 text-white p-5 rounded-2xl inline-block mb-8 shadow-lg shadow-amber-200 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                      <CheckCircle2 size={16} className="text-amber-600" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
