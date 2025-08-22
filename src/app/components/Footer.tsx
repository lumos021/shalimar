import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a3d23] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">USEFUL LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:underline">PRIVACY POLICY</Link></li>
              <li><Link href="/categories" className="hover:underline">CATEGORIES</Link></li>
              <li><Link href="/about" className="hover:underline">ABOUT US</Link></li>
              <li><Link href="/testimonials" className="hover:underline">TESTIMONIALS</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4"></h4>
             <ul className="space-y-2 text-sm mt-10">
              <li><Link href="/" className="hover:underline">HOME</Link></li>
              <li><Link href="/products" className="hover:underline">PRODUCTS</Link></li>
              <li><Link href="/gallery" className="hover:underline">GALLERY</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">CONTACT</h4>
            <p className="text-sm leading-relaxed">
              Palm Court Bldg M, 501/B, 5th Floor, New Link Road, Beside Coregaon Sports Complex, Malad West, Mumbai, Maharashtra 400064
            </p>
            <p className="mt-4 text-sm">+91-8888888888</p>
            <p className="text-sm">websupport@justdial.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">CONNECT</h4>
            <div className="flex space-x-3">
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"><Facebook size={16} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"><Linkedin size={16} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"><Twitter size={16} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"><Instagram size={16} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-center text-sm py-4">
        <p>© Copyrights 2019 - 2020. Modern Goats Farm. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
