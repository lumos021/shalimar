import React from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Categories } from '@/app/components/Categories';
import { Products } from '@/app/components/Products';
import { AboutUs } from '@/app/components/AboutUs';
import { Testimonials } from '@/app/components/Testimonials';
import { ContactUs } from '@/app/components/ContactUs';
import { MapSection } from '@/app/components/MapSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Products />
        <AboutUs />
        <Testimonials />
        <ContactUs />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}