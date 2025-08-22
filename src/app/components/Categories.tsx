import React from 'react';
import Image from 'next/image';

interface Category {
  name: string;
  img: string;
}

export const Categories: React.FC = () => {
  const categories: Category[] = [
    { name: 'Sirohi', img: 'https://placehold.co/300x200.png/cccccc/000000?text=Sirohi+Goat' },
    { name: 'Beetel', img: 'https://placehold.co/300x200.png/cccccc/000000?text=Beetel+Goat' },
    { name: 'Sojat', img: 'https://placehold.co/300x200.png/cccccc/000000?text=Sojat+Goat' },
    { name: 'Barbari', img: 'https://placehold.co/300x200.png/cccccc/000000?text=Barbari+Goat' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#0a3d23] mb-12">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <div className="relative w-full h-48">
                <Image src={category.img} alt={category.name} fill className="object-cover"/>
              </div>
              <h3 className="text-xl font-semibold text-[#0a3d23] py-4">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};