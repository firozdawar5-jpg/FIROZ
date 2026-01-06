
import React from 'react';
import { GrainRate, Service } from './types';
import { Scale, Wallet, ShieldCheck, PhoneCall, MapPin } from 'lucide-react';

export const GRAIN_RATES: GrainRate[] = [
  { id: '1', cropName: 'गेहूँ (Wheat)', quality: 'नंबर 1 (उत्तम)', todayRate: '₹2400 - ₹2650' },
  { id: '2', cropName: 'मक्का (Maize)', quality: 'सूखा (Dry)', todayRate: '₹2100 - ₹2300' },
  { id: '3', cropName: 'सोयाबीन (Soybean)', quality: '9560 क्लीन', todayRate: '₹4200 - ₹4600' },
  { id: '4', cropName: 'चना (Gram)', quality: 'कांटा (Standard)', todayRate: '₹5800 - ₹6200' },
];

export const SERVICES: Service[] = [
  {
    title: 'सटीक तौल',
    description: 'हम आधुनिक डिजिटल कांटों का उपयोग करते हैं ताकि आपको अपनी फसल का सही वजन मिले।',
    icon: 'scale',
  },
  {
    title: 'तत्काल भुगतान',
    description: 'फसल की तुलाई के तुरंत बाद आपको नगद या बैंक ट्रांसफर के माध्यम से भुगतान किया जाता है।',
    icon: 'wallet',
  },
  {
    title: 'पूर्ण पारदर्शिता',
    description: 'व्यापार में ईमानदारी और स्पष्टता ही हमारी सबसे बड़ी पूंजी है।',
    icon: 'shield',
  },
];

export const CONTACT_NUMBERS = [
  '8719932863',
  '9302193475',
  '6265792200'
];

export const ADDRESS = 'जलंद्रा, तहसील: नेपानगर, जिला: बुरहानपुर (म.प्र.) 450331';
