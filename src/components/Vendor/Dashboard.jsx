import React from 'react';
import VoiceInput from '../common/VoiceInput';

const FarmerDashboard = () => {
  const stats = [
    { label: 'Today Orders', value: '12', color: 'bg-green-100 text-green-700' },
    { label: 'Pending Harvest', value: '4', color: 'bg-orange-100 text-orange-700' },
    { label: 'Earnings', value: '₹4,500', color: 'bg-blue-100 text-blue-700' },
  ];

  const quickActions = [
    { icon: '📸', label: 'Photo Upload', color: 'bg-green-500' },
    { icon: '🎤', label: 'Voice Add', color: 'bg-orange-500' },
    { icon: '💰', label: 'Pricelist', color: 'bg-yellow-500' },
    { icon: '📈', label: 'Market Trends', color: 'bg-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-green-800 text-white p-6 pb-20 rounded-b-[3rem] shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Vanakkam, Ramu!</h1>
            <p className="text-green-100">Farmer ID: #4521 | Village: Pollachi</p>
          </div>
          <div className="w-14 h-14 bg-green-200 rounded-full border-4 border-white overflow-hidden shadow-inner">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Farmer" alt="Farmer Profile" />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, i) => (
            <div key={i} className={`${stat.color} p-4 rounded-3xl text-center shadow-sm`}>
              <p className="text-xs opacity-70 mb-1">{stat.label}</p>
              <p className="text-lg font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Actions */}
      <div className="px-6 -mt-10">
        <div className="premium-card p-6 mb-8">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span>🎤</span> Quick Product Add
          </h2>
          <VoiceInput placeholder="Say '10kg Potatoes for 300 rupees'..." />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action, i) => (
            <button key={i} className="icon-btn hover:scale-105 transition-transform">
              <span className="text-4xl mb-2">{action.icon}</span>
              <span className="font-bold text-gray-700">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Market Insight Section */}
      <div className="p-6">
        <h3 className="section-title text-xl mb-4">Market Demand Alerts</h3>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-2xl">
          <div className="flex gap-3">
            <span className="text-2xl mt-1">🔥</span>
            <div>
              <p className="font-bold text-orange-800">High Demand for Onions</p>
              <p className="text-sm text-orange-700 leading-tight">Price in nearby city: ₹60/kg. You can earn 15% more this week!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around items-center rounded-t-3xl shadow-2xl">
        <div className="nav-item active">
          <span>🏠</span>
          <span className="text-xs">Home</span>
        </div>
        <div className="nav-item">
          <span>📦</span>
          <span className="text-xs">Orders</span>
        </div>
        <div className="nav-item">
          <div className="bg-green-600 p-4 rounded-full -mt-12 shadow-lg border-4 border-white text-white">
            <span>➕</span>
          </div>
        </div>
        <div className="nav-item">
          <span>📊</span>
          <span className="text-xs">Money</span>
        </div>
        <div className="nav-item">
          <span>⚙️</span>
          <span className="text-xs">Setup</span>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
