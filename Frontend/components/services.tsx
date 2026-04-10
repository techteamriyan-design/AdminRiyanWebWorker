'use client';

import { useState } from 'react';

const services = [
  {
    title: 'IMudra Banking',
    image: 'https://techeela.com/wp-content/uploads/2023/06/Cloud-Banking-for-Legacy-System-Modernization-1-1024x536.jpg',
  },
  {
    title: 'IMudra Pay',
    image: 'https://wallpaperaccess.com/full/4597130.jpg',
  },
  {
    title: 'IMudra Bills Payments',
    image: 'https://onlinecheckwriter.com/wp-content/uploads/2023/08/Simplify-Your-Finances-with-Easy-Online-Bill-Payment-OCW.png',
  },
  {
    title: 'IMudra Loans & Micro Finance',
    image: 'https://cdn.dnaindia.com/sites/default/files/2022/12/18/2561300-untitled-design-62.png?im=FitAndFill=(1200,900)',
  },
  {
    title: 'IMudra Banking',
    image: 'https://storage.googleapis.com/flip-prod-mktg-strapi/media-library/Rekomendasi_Aplikasi_Mobile_Banking_Beserta_Keunggulannya_28a57d0667/Rekomendasi_Aplikasi_Mobile_Banking_Beserta_Keunggulannya_28a57d0667.jpg',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-indigo-50 scroll-mt-20 shadow-lg border border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          What we do?
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-16 rounded-full" />

        {/* Services */}
        <div className="relative">

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6">

            {services.map((service, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-24 lg:w-32 aspect-square mb-4">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-300 shadow-md transition-all duration-500 group-hover:border-blue-500 group-hover:shadow-xl group-hover:ring-4 group-hover:ring-blue-200">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 transition duration-500"></div>

                  </div>
                </div>

                <h3 className="text-center font-bold text-black text-sm md:text-base transition duration-300 group-hover:text-blue-600">
                  {service.title}
                </h3>
              </div>
            ))}

          </div>

          {/* Mobile Scroll (Swipe) */}
          <div className="md:hidden flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

            {services.map((service, idx) => (
              <div
                key={idx}
                className="min-w-[140px] group flex flex-col items-center transition-all duration-500 cursor-pointer"
              >
                <div className="w-20 aspect-square mb-3">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-300 shadow-md transition-all duration-500 group-hover:border-blue-500 group-hover:ring-4 group-hover:ring-blue-200">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                  </div>
                </div>

                <h3 className="text-center font-bold text-xs transition group-hover:text-blue-600">
                  {service.title}
                </h3>
              </div>
            ))}

          </div>

        </div>

        {/* Why section */}
        <div className="mt-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why Instant Mudra?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              We aim on providing online platform (Web and App) which can help retailers to provide end to end financial services products to the masses through its well massive Cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-4xl">🎧</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Active & Quick Support Service
              </h3>
              <p className="text-sm text-gray-600">
                24/7 dedicated support for all your needs
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                Safe & Secure Payment Process
              </h3>
              <p className="text-sm text-gray-600">
                Bank-level encryption and security standards
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}