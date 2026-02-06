import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserTypeSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-green-900 mb-2">Welcome to Farm2U</h1>
        <p className="text-green-700 font-medium">Choose your path to get started</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
        <button 
          onClick={() => navigate('/login?type=farmer')}
          className="group relative bg-white p-8 rounded-[3rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-4 border-transparent hover:border-green-600 text-left overflow-hidden"
        >
          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">👨‍🌾</div>
          <h2 className="text-2xl font-black text-gray-800 mb-2">I am a Farmer</h2>
          <p className="text-gray-500 text-sm mb-4 leading-relaxed">Directly sell your harvest, set your own prices, and grow your local identity.</p>
          <div className="flex items-center gap-2 text-green-700 font-bold uppercase text-xs tracking-widest">
            Register & Sell <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
          <div className="absolute -bottom-6 -right-6 text-green-50 text-9xl font-black opacity-20 pointer-events-none">
            FARM
          </div>
        </button>

        <button 
          onClick={() => navigate('/login?type=customer')}
          className="group relative bg-white p-8 rounded-[3rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-4 border-transparent hover:border-orange-500 text-left overflow-hidden"
        >
          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🛒</div>
          <h2 className="text-2xl font-black text-gray-800 mb-2">I am a Customer</h2>
          <p className="text-gray-500 text-sm mb-4 leading-relaxed">Buy fresh, chemical-free produce directly from verified nearby farms.</p>
          <div className="flex items-center gap-2 text-orange-600 font-bold uppercase text-xs tracking-widest">
            Discover Freshness <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
          <div className="absolute -bottom-6 -right-6 text-orange-50 text-9xl font-black opacity-20 pointer-events-none">
            SHOP
          </div>
        </button>
      </div>

      <p className="mt-12 text-green-700 text-sm font-bold cursor-pointer hover:underline">
        Supported in தமிழ், हिंदी, తెలుగు, ಕನ್ನಡ and more
      </p>
    </div>
  );
};

export default UserTypeSelection;
