import React, { useState } from 'react';

const VoiceInput = ({ label, onTranscript, placeholder }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
      // Mock finishing
      if (onTranscript) onTranscript(transcript);
    } else {
      setIsListening(true);
      setTranscript('Processing voice...');
      // Mock detection after 2 seconds
      setTimeout(() => {
        setTranscript('5kg Organic Tomatoes');
        setIsListening(false);
        if (onTranscript) onTranscript('5kg Organic Tomatoes');
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-semibold text-gray-700">{label}</label>}
      <div className="relative flex items-center">
        <input
          type="text"
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          placeholder={placeholder || "Type or use voice..."}
          className="w-full px-5 py-4 rounded-2xl bg-gray-100 border-none focus:ring-2 focus:ring-green-600 transition-all text-lg"
        />
        <button
          onClick={toggleListening}
          className={`absolute right-2 p-3 rounded-xl transition-all ${
            isListening 
              ? 'bg-red-500 text-white animate-pulse' 
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>
      </div>
      {isListening && <p className="text-xs text-green-600 font-medium ml-2">Listening in Tamil/Hindi/English...</p>}
    </div>
  );
};

export default VoiceInput;
