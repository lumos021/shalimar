"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Menu } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`;
  const linkColorClass = scrolled ? 'text-gray-800' : 'text-white';
  
  return (
    <header className={headerClasses}>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
            <Link href="/">
                <Image src="/logo.png" alt="Shalimar Goats Farm Logo" width={150} height={50} className="h-12 w-auto" />
            </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className={`${linkColorClass} hover:text-[#b48c5a]`}>HOME</Link>
          <Link href="/categories" className={`${linkColorClass} hover:text-[#b48c5a]`}>CATEGORIES</Link>
          <Link href="/products" className={`${linkColorClass} hover:text-[#b48c5a]`}>PRODUCTS</Link>
          <Link href="/about" className={`${linkColorClass} hover:text-[#b48c5a]`}>ABOUT US</Link>
          <Link href="/gallery" className={`${linkColorClass} hover:text-[#b48c5a]`}>GALLERY</Link>
          <Link href="/testimonials" className={`${linkColorClass} hover:text-[#b48c5a]`}>TESTIMONIALS</Link>
          <Link href="/contact" className={`${linkColorClass} hover:text-[#b48c5a]`}>CONTACT US</Link>
        </div>
        <div className="md:hidden">
          <button className={`${linkColorClass} hover:text-[#b48c5a]`}>
            <Menu />
          </button>
        </div>
      </nav>
    </header>
  );
};