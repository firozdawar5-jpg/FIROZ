
import React, { useState } from 'react';
import { X, Save, Plus, Trash2, Edit2, LogOut, Shield } from 'lucide-react';
import { GrainRate, BusinessInfo } from '../types';

interface AdminPanelProps {
  crops: GrainRate[];
  businessInfo: BusinessInfo;
  onUpdateCrops: (crops: GrainRate[]) => void;
  onUpdateBusiness: (info: BusinessInfo) => void;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ crops, businessInfo, onUpdateCrops, onUpdateBusiness, onClose }) => {
  const [activeTab, setActiveTab] = useState<'rates' | 'info'>('rates');
  const [editingCrop, setEditingCrop] = useState<GrainRate | null>(null);
  const [newCrop, setNewCrop] = useState<Partial<GrainRate>>({ cropName: '', quality: '', todayRate: '' });
  const [editInfo, setEditInfo] = useState<BusinessInfo>({ ...businessInfo });

  const handleAddCrop = () => {
    if (newCrop.cropName && newCrop.todayRate) {
      const cropToAdd: GrainRate = {
        id: Date.now().toString(),
        cropName: newCrop.cropName!,
        quality: newCrop.quality || '-',
        todayRate: newCrop.todayRate!,
      };
      onUpdateCrops([...crops, cropToAdd]);
      setNewCrop({ cropName: '', quality: '', todayRate: '' });
    }
  };

  const handleDeleteCrop = (id: string) => {
    onUpdateCrops(crops.filter(c => c.id !== id));
  };

  const handleUpdateCrop = () => {
    if (editingCrop) {
      onUpdateCrops(crops.map(c => c.id === editingCrop.id ? editingCrop : c));
      setEditingCrop(null);
    }
  };

  const handleSaveInfo = () => {
    onUpdateBusiness(editInfo);
    alert('जानकारी सुरक्षित कर दी गई है!');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-amber-900 p-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <Shield className="text-amber-400" />
            <h2 className="text-2xl font-bold">एडमिन कंट्रोल पैनल</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition">
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          <button 
            onClick={() => setActiveTab('rates')}
            className={`flex-1 py-4 font-bold transition-all ${activeTab === 'rates' ? 'text-amber-700 border-b-2 border-amber-700 bg-amber-50' : 'text-gray-400 hover:text-gray-600'}`}
          >
            भाव मैनेजमेंट
          </button>
          <button 
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-4 font-bold transition-all ${activeTab === 'info' ? 'text-amber-700 border-b-2 border-amber-700 bg-amber-50' : 'text-gray-400 hover:text-gray-600'}`}
          >
            दुकान की जानकारी
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-8">
          {activeTab === 'rates' ? (
            <div className="space-y-8">
              {/* Add New */}
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <Plus size={20} /> नई फसल जोड़ें
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <input 
                    className="px-4 py-3 rounded-xl border border-amber-200 outline-none focus:ring-2 focus:ring-amber-500" 
                    placeholder="फसल का नाम (उदा. गेहूँ)"
                    value={newCrop.cropName}
                    onChange={e => setNewCrop({...newCrop, cropName: e.target.value})}
                  />
                  <input 
                    className="px-4 py-3 rounded-xl border border-amber-200 outline-none focus:ring-2 focus:ring-amber-500" 
                    placeholder="क्वालिटी (उदा. लोकवन)"
                    value={newCrop.quality}
                    onChange={e => setNewCrop({...newCrop, quality: e.target.value})}
                  />
                  <input 
                    className="px-4 py-3 rounded-xl border border-amber-200 outline-none focus:ring-2 focus:ring-amber-500" 
                    placeholder="आज का भाव (उदा. ₹2500)"
                    value={newCrop.todayRate}
                    onChange={e => setNewCrop({...newCrop, todayRate: e.target.value})}
                  />
                </div>
                <button 
                  onClick={handleAddCrop}
                  className="mt-4 w-full bg-amber-700 text-white py-3 rounded-xl font-bold hover:bg-amber-800 transition"
                >
                  लिस्ट में जोड़ें
                </button>
              </div>

              {/* List */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">मौजूदा फसलें ({crops.length})</h3>
                {crops.map((crop) => (
                  <div key={crop.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition">
                    {editingCrop?.id === crop.id ? (
                      <div className="grid grid-cols-3 gap-2 flex-grow mr-4">
                        <input className="px-3 py-2 rounded-lg border text-sm" value={editingCrop.cropName} onChange={e => setEditingCrop({...editingCrop, cropName: e.target.value})} />
                        <input className="px-3 py-2 rounded-lg border text-sm" value={editingCrop.quality} onChange={e => setEditingCrop({...editingCrop, quality: e.target.value})} />
                        <input className="px-3 py-2 rounded-lg border text-sm" value={editingCrop.todayRate} onChange={e => setEditingCrop({...editingCrop, todayRate: e.target.value})} />
                      </div>
                    ) : (
                      <div className="flex-grow">
                        <span className="font-bold text-gray-900">{crop.cropName}</span>
                        <span className="mx-2 text-gray-400">|</span>
                        <span className="text-gray-600">{crop.quality}</span>
                        <span className="mx-2 text-gray-400">|</span>
                        <span className="font-bold text-amber-700">{crop.todayRate}</span>
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      {editingCrop?.id === crop.id ? (
                        <button onClick={handleUpdateCrop} className="p-2 text-green-600 hover:bg-green-50 rounded-full"><Save size={20}/></button>
                      ) : (
                        <button onClick={() => setEditingCrop(crop)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"><Edit2 size={20}/></button>
                      )}
                      <button onClick={() => handleDeleteCrop(crop.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-full"><Trash2 size={20}/></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">दुकान का नाम (Logo Text)</label>
                <input 
                  className="w-full px-4 py-4 rounded-xl border-2 focus:border-amber-500 outline-none" 
                  value={editInfo.shopName}
                  onChange={e => setEditInfo({...editInfo, shopName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">प्रोप्राइटर का नाम</label>
                <input 
                  className="w-full px-4 py-4 rounded-xl border-2 focus:border-amber-500 outline-none" 
                  value={editInfo.proprietorName}
                  onChange={e => setEditInfo({...editInfo, proprietorName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">पता (Address)</label>
                <textarea 
                  rows={2}
                  className="w-full px-4 py-4 rounded-xl border-2 focus:border-amber-500 outline-none" 
                  value={editInfo.address}
                  onChange={e => setEditInfo({...editInfo, address: e.target.value})}
                />
              </div>
              <button 
                onClick={handleSaveInfo}
                className="w-full bg-amber-900 text-white py-4 rounded-xl font-bold hover:bg-black transition flex items-center justify-center gap-2"
              >
                <Save size={20} /> ब्रांडिंग अपडेट करें
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex justify-between items-center bg-gray-50">
          <p className="text-sm text-gray-500 font-medium italic">
            * बदलाव तुरंत वेबसाइट पर दिखने लगेंगे।
          </p>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-red-600 font-bold hover:bg-red-50 px-4 py-2 rounded-xl transition"
          >
            <LogOut size={18} /> पैनल बंद करें
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
