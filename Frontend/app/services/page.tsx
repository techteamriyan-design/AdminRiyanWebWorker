'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Services() {
  const services = [
    {
      title: 'iMudra Banking',
      description: 'Complete digital banking solutions with account opening, fund transfers, and balance inquiries through our secure platform.',
      icon: '🏦',
      features: ['Account Management', 'Fund Transfers', 'Balance Inquiry', 'Statement Download']
    },
    {
      title: 'iMudra Pay',
      description: 'Fast and secure payment solutions enabling digital transactions for retailers and customers across all platforms.',
      icon: '💳',
      features: ['Mobile Payments', 'QR Code Payments', 'Wallet Services', 'Instant Settlement']
    },
    {
      title: 'iMudra Bills Payments',
      description: 'Hassle-free bill payment services for utilities, mobile, DTH, and insurance with instant confirmation.',
      icon: '📋',
      features: ['Utility Bills', 'Mobile Recharge', 'DTH Services', 'Insurance Payments']
    },
    {
      title: 'iMudra Loans & Micro Finance',
      description: 'Quick approval loans and microfinance options tailored for small retailers and individuals with minimal documentation.',
      icon: '💰',
      features: ['Quick Approval', 'Low Interest Rates', 'Flexible Terms', 'Minimal Documentation']
    },
    {
      title: 'iMudra AEPS',
      description: 'Aadhaar Enabled Payment System for banking services without a physical bank account.',
      icon: '🔐',
      features: ['Cash Withdrawal', 'Balance Inquiry', 'Aadhaar Verification', 'Secure Transactions']
    },
    {
      title: 'iMudra DMT',
      description: 'Domestic Money Transfer services for seamless fund transfers across the country.',
      icon: '📤',
      features: ['Quick Transfers', 'Low Fees', 'Wide Coverage', 'Real-time Tracking']
    }
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center bg-gradient-to-r from-black/90 to-black/70 text-white overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600)',
          }}
        />
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Our Services</h1>
          <p className="text-xl text-gray-300">Comprehensive Financial Solutions for Everyone</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-balance">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-lg p-8 hover:border-red-600 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                {/* Features list */}
                <div className="space-y-2 pt-6 border-t border-gray-200">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-balance">Why Choose Instant Mudra?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3">RBI Compliant</h3>
              <p className="text-gray-700">
                All our services operate under Reserve Bank of India guidelines ensuring maximum security and trust.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Instant Processing</h3>
              <p className="text-gray-700">
                Real-time transaction processing and instant fund settlements for seamless operations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3">Bank-Level Security</h3>
              <p className="text-gray-700">
                Advanced encryption and multi-layer security protocols protecting your data and funds.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3">Easy Access</h3>
              <p className="text-gray-700">
                Available on web and mobile platforms with user-friendly interfaces for all age groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
