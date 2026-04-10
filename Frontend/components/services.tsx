'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    title: 'IMudra Banking',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=400&fit=crop',
  },
  {
    title: 'IMudra Pay',
    image: 'https://images.unsplash.com/photo-1556742213-3c8e6c1d3dba?w=400&h=400&fit=crop',
  },
  {
    title: 'IMudra Bills Payments',
    image: 'https://images.unsplash.com/photo-1512941692340-369bc067d0ff?w=400&h=400&fit=crop',
  },
  {
    title: 'IMudra Loans & Micro Finance',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
  },
  {
    title: 'IMudra Banking',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=400&fit=crop',
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">What we do?</h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-16 rounded-full" />

        {/* Services Carousel */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {/* Previous button */}
            <button
              onClick={prev}
              className="hidden lg:flex absolute left-0 -ml-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 text-white rounded-full items-center justify-center hover:bg-red-700 transition z-10"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Services display */}
            {services.map((service, idx) => {
              const position = (idx - currentIndex + services.length) % services.length;
              const isCenter = position === 0;
              const scale = isCenter ? 1 : 0.7;
              const opacity = isCenter ? 1 : 0.5;

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center transition-all duration-500"
                  style={{
                    transform: `scale(${scale})`,
                    opacity,
                  }}
                >
                  <div className="w-20 md:w-28 lg:w-32 aspect-square mb-4">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 md:border-6 border-gray-300 shadow-md hover:shadow-lg transition">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-center font-bold text-black text-xs sm:text-sm md:text-base max-w-xs px-2">
                    {service.title}
                  </h3>
                </div>
              );
            })}

            {/* Next button */}
            <button
              onClick={next}
              className="hidden lg:flex absolute right-0 -mr-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-red-600 text-white rounded-full items-center justify-center hover:bg-red-700 transition z-10"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Mobile carousel buttons */}
          <div className="flex lg:hidden justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
            >
              ← Previous
            </button>
            <button
              onClick={next}
              className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Why Instant Mudra section below */}
        <div className="mt-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Why Instant Mudra?</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              We aim on providing online platform (Web and App) which can help retailers to provide end to end financial services products to the masses through its well massive Cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-4xl">🎧</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Active & Quick Support Service</h3>
              <p className="text-sm text-gray-600">24/7 dedicated support for all your needs</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Safe & Secure Payment Process</h3>
              <p className="text-sm text-gray-600">Bank-level encryption and security standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
