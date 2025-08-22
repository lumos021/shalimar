import React from 'react';
import Image from 'next/image';

interface Product {
    name: string;
    price: string;
    img: string;
}

export const Products: React.FC = () => {
    const products: Product[] = [
        { name: 'Boer Goats', price: '₹25,000', img: 'https://placehold.co/300x200.png/cccccc/000000?text=Boer+Goat' },
        { name: 'Sojat Goats', price: '₹22,000', img: 'https://placehold.co/300x200.png/cccccc/000000?text=Sojat+Goat' },
        { name: 'Jamnapari Goats', price: '₹15,000', img: 'https://placehold.co/300x200.png/cccccc/000000?text=Jamnapari+Goat' },
        { name: 'Sirohi Goats', price: '₹10,000', img: 'https://placehold.co/300x200.png/cccccc/000000?text=Sirohi+Goat' },
        { name: 'Barbari Goats', price: '₹18,000', img: 'https://placehold.co/300x200.png/cccccc/000000?text=Barbari+Goat' },
        { name: 'Beetal Goats', price: '₹9,000', img: 'https://placehold.co/300x200.png/cccccc/000000?text=Beetal+Goat' },
    ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#0a3d23] mb-12">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-center pb-4">
              <div className="relative w-full h-40">
                <Image src={product.img} alt={product.name} fill className="object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#0a3d23]">{product.name}</h3>
                <p className="text-gray-500 mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};