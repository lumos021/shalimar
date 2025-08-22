import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-[600px] pt-24">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/hero-banner.jpg')"}}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">Find Pure Breeds of</h1>
        <h2 className="text-5xl md:text-7xl font-bold">Goats at Our Goat Farms</h2>
        <button className="mt-8 bg-[#b48c5a] hover:bg-[#a57b4f] text-white font-bold py-3 px-6 rounded-lg w-48">
          Enquire Now
        </button>
      </div>
    </div>
  );
};