import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#0a3d23] mb-8">Testimonials</h2>
        <p className="text-xl text-gray-600 italic max-w-3xl mx-auto">
          “They have various breeds of goats and that too at reasonable cost.”
        </p>
        <p className="mt-4 font-semibold text-[#0a3d23]">- Ashish Survey</p>
        <div className="flex justify-center mt-6 space-x-2">
            <span className="w-3 h-3 bg-[#0a3d23] rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};