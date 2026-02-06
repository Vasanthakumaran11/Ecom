import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = [
    {
      id: 1,
      name: "Organic Tomatoes",
      farmer: "Ramu",
      qty: "2 kg",
      price: 90,
      image: "https://images.unsplash.com/photo-1546069901-ba0d28472901?auto=format&fit=crop&q=80&w=200",
      breakdown: { farmer: 76, platform: 4, delivery: 10 }
    },
    {
      id: 2,
      name: "Country Onions",
      farmer: "Green Valley",
      qty: "1 kg",
      price: 65,
      image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80&w=200",
      breakdown: { farmer: 54, platform: 3, delivery: 8 }
    }
  ];

  const totalBreakdown = {
    farmer: 130,
    platform: 7,
    delivery: 18,
    total: 155
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
       {/* Transparent Header */}
       <div className="bg-white p-6 flex items-center gap-4 sticky top-0 z-10 shadow-sm">
         <button onClick={() => navigate(-1)} className="text-2xl">←</button>
         <h1 className="text-xl font-black">Your Fresh Basket</h1>
       </div>

       <div className="p-6">
          {/* Cart Items */}
          <div className="space-y-4 mb-8">
            {cartItems.map(item => (
              <div key={item.id} className="premium-card p-4 flex gap-4 items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover" />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  <p className="text-xs text-green-700 font-bold mb-1">From {item.farmer}'s Farm</p>
                  <p className="text-xs text-gray-400 font-bold">{item.qty} • ₹{item.price}</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-2 py-1">
                    <button className="font-bold w-6 h-6 flex items-center justify-center">-</button>
                    <span className="font-bold text-sm">1</span>
                    <button className="font-bold w-6 h-6 flex items-center justify-center">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Options */}
          <h3 className="section-title text-lg mb-4">Delivery & Pickup</h3>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="p-4 rounded-[2rem] border-2 border-green-600 bg-green-50 text-left">
              <span className="text-2xl block mb-2">🚚</span>
              <p className="font-black text-green-900 leading-tight">Home Delivery</p>
              <p className="text-[10px] text-green-700 font-bold">Slot: 8 AM - 10 AM</p>
            </button>
            <button className="p-4 rounded-[2rem] border-2 border-gray-100 bg-white text-left opacity-60">
              <span className="text-2xl block mb-2">🏪</span>
              <p className="font-black text-gray-800 leading-tight">Hub Pickup</p>
              <p className="text-[10px] text-gray-500 font-bold">Save ₹18</p>
            </button>
          </div>

          {/* Transparency Panel */}
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
            <h3 className="section-title text-lg mb-6 flex items-center gap-2">
              <span>🧾</span> Transparent Billing
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center bg-green-50 p-4 rounded-2xl">
                <div>
                  <p className="font-bold text-green-900">Farmers Earn</p>
                  <p className="text-[10px] text-green-600 font-bold uppercase tracking-wider">Direct Payment</p>
                </div>
                <span className="text-xl font-black text-green-700">₹{totalBreakdown.farmer}</span>
              </div>
              
              <div className="flex justify-between items-center px-4">
                <p className="text-sm font-bold text-gray-500">Platform Handling Fee (2.5%)</p>
                <span className="font-bold text-gray-700">₹{totalBreakdown.platform}</span>
              </div>
              
              <div className="flex justify-between items-center px-4">
                <p className="text-sm font-bold text-gray-500">Logistics & Delivery</p>
                <span className="font-bold text-gray-700">₹{totalBreakdown.delivery}</span>
              </div>
            </div>

            <div className="border-t-2 border-dashed border-gray-100 pt-6 mb-8 flex justify-between items-center">
              <p className="text-lg font-black text-gray-800 uppercase tracking-tighter">You Pay Total</p>
              <span className="text-3xl font-black text-green-800">₹{totalBreakdown.total}</span>
            </div>

            <button className="w-full btn-primary py-5 text-xl font-black rounded-3xl shadow-xl shadow-green-100">
              Pay ₹{totalBreakdown.total} via UPI 
            </button>
            
            <p className="text-center mt-6 text-[10px] font-bold text-gray-400 leading-relaxed uppercase tracking-widest">
              Guaranteed Fresh • Fair Prices • Direct to Farm
            </p>
          </div>
       </div>
    </div>
  );
};

export default Cart;