import React, { useState } from 'react';

const CustomerHome = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    { id: '1', name: 'Vegetables', icon: '🥦' },
    { id: '2', name: 'Fruits', icon: '🍎' },
    { id: '3', name: 'Grains', icon: '🌾' },
    { id: '4', name: 'Dairy', icon: '🥛' },
  ];

  const nearbyFarmers = [
    {
      id: 1,
      name: "Ramu's Farm",
      village: "Pollachi",
      distance: "2.5 km",
      rating: 4.8,
      verified: true,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=300",
      product: "Organic Tomatoes",
      price: 45,
      breakdown: { farmer: 38, platform: 2, delivery: 5 }
    },
    {
      id: 2,
      name: "Green Valley",
      village: "Udumalaipettai",
      distance: "4.2 km",
      rating: 4.9,
      verified: true,
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=300",
      product: "Country Onions",
      price: 65,
      breakdown: { farmer: 54, platform: 3, delivery: 8 }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Search & Location */}
      <div className="bg-white p-6 sticky top-0 z-10 shadow-sm border-b">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-green-600">📍</span>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Delivering to</p>
            <h3 className="font-bold text-gray-800">Coimbatore North, TN ▾</h3>
          </div>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search fresh produce or farmers..." 
            className="w-full bg-gray-100 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-green-600"
          />
          <span className="absolute right-5 top-4 text-xl">🔍</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="p-6">
        <div className="bg-green-700 rounded-3xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10 w-2/3">
            <h2 className="text-2xl font-bold mb-2">100% Farmers, 0% Middlemen</h2>
            <p className="opacity-90 text-sm mb-4">Directly support local rural economy while getting the freshest harvest.</p>
            <button className="bg-white text-green-700 px-4 py-2 rounded-xl font-bold text-sm">See How It Works</button>
          </div>
          <div className="absolute top-0 right-0 h-full w-1/3 opacity-30 flex items-center justify-center text-7xl">
            🚜
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 mb-8 overflow-x-auto">
        <div className="flex gap-4">
          {categories.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex flex-col items-center gap-2 min-w-[80px] p-3 rounded-2xl transition-all ${
                activeCategory === cat.name ? 'bg-green-100 border-2 border-green-600' : 'bg-white'
              }`}
            >
              <div className="text-3xl">{cat.icon}</div>
              <span className="text-xs font-bold text-gray-700">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Product Feed */}
      <div className="px-6">
        <div className="flex justify-between items-end mb-6">
          <h3 className="section-title mb-0">Fresh Near You</h3>
          <span className="text-green-600 font-bold text-sm">View All</span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {nearbyFarmers.map(farmer => (
            <div key={farmer.id} className="premium-card relative group">
              <div className="h-48 overflow-hidden relative">
                <img src={farmer.image} alt={farmer.product} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                   <span className="badge-farmer shadow-md">
                     ✨ Verified Farmer
                   </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-md">
                   {farmer.distance} away
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{farmer.product}</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                       by <span className="text-green-700 font-semibold">{farmer.name}</span> • {farmer.village}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-green-800">₹{farmer.price}</span>
                    <span className="text-xs block text-gray-400 font-bold">per kg</span>
                  </div>
                </div>

                {/* Transparency Breakdown */}
                <div className="bg-gray-50 rounded-2xl p-4 mb-4 grid grid-cols-3 gap-2 border border-dashed border-gray-200">
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Farmer Gets</p>
                    <p className="font-bold text-green-700">₹{farmer.breakdown.farmer}</p>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Our Fee</p>
                    <p className="font-bold text-gray-600">₹{farmer.breakdown.platform}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Delivery</p>
                    <p className="font-bold text-gray-600">₹{farmer.breakdown.delivery}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 btn-primary py-3">Add to Cart</button>
                  <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-100 rounded-2xl hover:bg-gray-50">
                    💚
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t p-4 flex justify-around items-center rounded-t-[2.5rem] shadow-2xl">
        <div className="nav-item active">
          <span className="text-2xl">🌾</span>
          <span className="text-[10px] font-bold uppercase">Market</span>
        </div>
        <div className="nav-item">
          <span className="text-2xl">👨‍🌾</span>
          <span className="text-[10px] font-bold uppercase">Farmers</span>
        </div>
        <div className="nav-item relative">
          <div className="absolute -top-1 -right-1 bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] border-2 border-white">2</div>
          <span className="text-2xl">🛒</span>
          <span className="text-[10px] font-bold uppercase">Cart</span>
        </div>
        <div className="nav-item">
          <span className="text-2xl">📋</span>
          <span className="text-[10px] font-bold uppercase">Orders</span>
        </div>
        <div className="nav-item">
          <span className="text-2xl">👤</span>
          <span className="text-[10px] font-bold uppercase">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerHome;