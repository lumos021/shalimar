import React from 'react';
import Image from 'next/image';

export const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#0a3d23] mb-12">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative w-full h-64 md:h-80 rounded-lg shadow-lg overflow-hidden">
                <Image src="https://placehold.co/500x300.png/cccccc/000000?text=About+Us+Goat" alt="Goat eating leaves" fill className="object-cover"/>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 leading-relaxed">
              We, Modern Goats Farm, situated at Malad West, Mumbai, Maharashtra are one of the renowned and finest goat farms in the city. Goats are reared for milk and meat. Our range of products include Boer goats, Sojat goats, Jamnapari goats, Sirohi goats, Barbari goats, Beetal goats, etc. Our products are high in demand due to their premium quality and affordable prices. We deliver the goats to our valuable customers as per their demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
