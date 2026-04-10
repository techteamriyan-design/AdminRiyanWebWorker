'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const partners = [
  { name: 'PayU', logo: '💚' },
  { name: 'Airtel Payments', logo: '📱' },
  { name: 'Razorpay', logo: '💳' },
  { name: 'RBL Bank', logo: '🏦' },
  { name: 'Cellmoney', logo: '📞' },
  { name: 'iServeU', logo: '🎯' },
  { name: 'Trav.in', logo: '✈️' },
];

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, partners.length - 4));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, partners.length - 4)) % Math.max(1, partners.length - 4));
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">Our Strategic Partners</h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-16 rounded-full" />

        {/* Partners Carousel */}
        <div className="relative mb-16">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-8 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 hover:scale-110 transition-all z-10 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex justify-center items-center gap-4 px-8 md:px-16 overflow-hidden">
            {partners.slice(currentIndex, currentIndex + 4).map((partner, idx) => (
              <div
                key={idx}
                className="flex-1 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200 hover:border-red-400 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center group-hover:scale-110 transition-transform">
                  <div className="text-5xl mb-2 group-hover:animate-bounce">{partner.logo}</div>
                  <p className="text-xs text-gray-700 font-semibold">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-8 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 hover:scale-110 transition-all z-10 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* About Us section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">About Us</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Instant Mudra is a young Fintech Organisation incorporated in May 2019, by the industry veterans with over 19+ years of expertise in Payment industry with a vision to serve the Unbanked and under banked community based on Financial Inclusion programme and Model run by Reserve Bank Of India(RBI).
            </p>
            <div className="flex gap-4 pt-4">
              <div className="w-1 h-20 bg-red-600 rounded-full" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="absolute inset-0 border-8 border-red-600 rounded-3xl z-10" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
