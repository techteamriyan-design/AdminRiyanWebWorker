'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function About() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center bg-gradient-to-r from-black/90 to-black/70 text-white overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600)',
          }}
        />
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About Instant Mudra</h1>
          <p className="text-xl text-gray-300">Revolutionizing Financial Services for Everyone</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-balance">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Instant Mudra was established in May 2019 with a mission to democratize financial services across India. Founded by industry veterans with over 19+ years of expertise in the payments sector, we're committed to serving the unbanked and underbanked communities.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our platform leverages cutting-edge cloud infrastructure to provide comprehensive financial solutions including banking, payments, bills management, loans, and microfinance services to retailers and individuals across the nation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We operate under the Financial Inclusion Programme framework set by the Reserve Bank of India (RBI), ensuring compliance and trust in every transaction.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-600">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-balance">Mission & Vision</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold">
                🎯
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide accessible, secure, and innovative financial services to every individual and retailer, enabling them to participate fully in the digital economy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold">
                👁️
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be India&apos;s most trusted fintech platform, empowering millions of unbanked individuals and small retailers with world-class financial solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold">
                ⭐
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Trust, Innovation, Accessibility, and Customer-centricity guide every decision we make and service we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-balance">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">19+</div>
              <p className="text-gray-700 font-semibold">Years Experience</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">50K+</div>
              <p className="text-gray-700 font-semibold">Active Partners</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">100M+</div>
              <p className="text-gray-700 font-semibold">Transactions</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <p className="text-gray-700 font-semibold">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
