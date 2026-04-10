'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Mr. Navnit Kumar Navin',
    location: 'Bihar',
    quote: 'I am working as Mudra Sevak with Instant Mudra, all the services are so smooth and easy.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
  },
  {
    name: 'Ms. Priya Sharma',
    location: 'Mumbai',
    quote: 'Excellent support and reliable platform. Highly recommended for all business needs.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
  },
  {
    name: 'Mr. Rajesh Kumar',
    location: 'Delhi',
    quote: 'Great experience with Instant Mudra. Services are fast and secure.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-black/95 via-black/85 to-black/90 text-white relative overflow-hidden">
      {/* Background decorative image */}
      <div
        className="absolute inset-0 -z-10 opacity-15"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Quote mark */}
        <div className="text-7xl font-bold text-red-600 mb-8 leading-none">"</div>

        {/* Quote text */}
        <p className="text-2xl md:text-3xl font-light italic mb-12 leading-relaxed max-w-3xl text-gray-100">
          {testimonial.quote}
        </p>

        {/* Profile section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12 pb-8 border-b border-gray-700">
          <div className="w-24 h-24 rounded-full border-4 border-blue-400 overflow-hidden flex-shrink-0 shadow-lg">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
            <p className="text-gray-400 text-sm">📍 {testimonial.location}</p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-3 justify-end">
          <button
            onClick={prev}
            className="w-12 h-12 bg-red-600 rounded flex items-center justify-center hover:bg-red-700 hover:scale-110 transition-all shadow-lg"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 bg-red-600 rounded flex items-center justify-center hover:bg-red-700 hover:scale-110 transition-all shadow-lg"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
