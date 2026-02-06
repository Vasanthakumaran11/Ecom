import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const userType = searchParams.get('type') || 'customer';
  const isFarmer = userType === 'farmer';

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      setOtpSent(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, verify OTP here
    if (isFarmer) {
      navigate('/farmer/dashboard');
    } else {
      navigate('/customer/home');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center p-8 transition-colors duration-500 ${isFarmer ? 'bg-green-900 text-white' : 'bg-orange-50'}`}>
      <div className="max-w-md w-full mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="mb-12 flex items-center gap-2 font-bold opacity-80 hover:opacity-100"
        >
          ← Back
        </button>

        <div className="mb-12">
          <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest ${isFarmer ? 'bg-green-700 text-green-200' : 'bg-orange-600 text-white'}`}>
            {isFarmer ? 'Farmer Portal' : 'Customer Shop'}
          </span>
          <h1 className="text-4xl font-black mt-4 mb-2">
            {otpSent ? 'Verify Identity' : 'Welcome Home'}
          </h1>
          <p className={`opacity-80 font-medium ${isFarmer ? 'text-green-100' : 'text-gray-600'}`}>
            {otpSent 
              ? 'We sent a 4-digit code to your mobile' 
              : 'Enter your mobile number to get started'
            }
          </p>
        </div>

        {!otpSent ? (
          <form onSubmit={handleSendOTP} className="space-y-6">
            <div className="relative">
              <span className="absolute left-6 top-5 font-bold opacity-50">+91</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="Mobile Number"
                className={`w-full py-5 pl-16 pr-6 rounded-[2rem] text-xl font-bold bg-white focus:ring-4 transition-all border-none ${isFarmer ? 'text-black focus:ring-green-400' : 'text-gray-800 focus:ring-orange-300 shadow-xl shadow-orange-100'}`}
                required
              />
            </div>
            <button className={`w-full py-5 rounded-[2rem] text-xl font-black transition-all active:scale-95 ${isFarmer ? 'bg-green-500 hover:bg-green-400 text-green-950' : 'bg-orange-600 hover:bg-orange-700 text-white shadow-xl shadow-orange-200'}`}>
              Get Login OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-8">
             <div className="flex justify-between gap-4">
               {[1,2,3,4].map(i => (
                 <input 
                  key={i}
                  type="text" 
                  maxLength="1" 
                  className={`w-16 h-16 text-center text-3xl font-black rounded-3xl border-none focus:ring-4 ${isFarmer ? 'bg-green-800 text-white focus:ring-green-400' : 'bg-white text-gray-800 focus:ring-orange-300 shadow-lg'}`}
                 />
               ))}
             </div>
             <button className={`w-full py-5 rounded-[2rem] text-xl font-black transition-all active:scale-95 ${isFarmer ? 'bg-green-500 text-green-950' : 'bg-orange-600 text-white'}`}>
                Verify & Continue
             </button>
             <p className="text-center font-bold opacity-60">
               Didn't get code? <span className="underline cursor-pointer">Resend</span>
             </p>
          </form>
        )}

        <div className="mt-12 text-center">
          <p className="opacity-60 text-sm font-medium">
             By continuing, you agree to support <br/>
             <span className="font-bold underline italic">locally sourced agricultural revolution.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;