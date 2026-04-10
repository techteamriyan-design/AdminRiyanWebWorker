'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function News() {
  const awards = [
    {
      title: 'Best Fintech Innovation Award 2023',
      organization: 'Indian Fintech Association',
      date: 'December 2023',
      description: 'Recognized for groundbreaking digital payment solutions'
    },
    {
      title: 'Customer Choice Award',
      organization: 'Digital India Awards',
      date: 'October 2023',
      description: 'Outstanding service quality and customer satisfaction'
    },
    {
      title: 'RBI Compliant Platform Award',
      organization: 'Reserve Bank of India',
      date: 'August 2023',
      description: 'Excellence in regulatory compliance and security'
    },
    {
      title: 'Best Microfinance Platform',
      organization: 'National Finance Forum',
      date: 'June 2023',
      description: 'Leading role in financial inclusion initiatives'
    }
  ];

  const news = [
    {
      date: 'March 15, 2024',
      title: 'Instant Mudra Reaches 50K Active Partners Milestone',
      content: 'We&apos;re proud to announce that our platform now has 50,000 active partners across India, helping bring financial services to underserved communities.'
    },
    {
      date: 'February 28, 2024',
      title: 'New AEPS Service Launch',
      content: 'Launched Aadhaar Enabled Payment System (AEPS) for seamless banking without physical accounts, reaching even more unbanked citizens.'
    },
    {
      date: 'February 10, 2024',
      title: 'Partnership with Leading Banks',
      content: 'Announced strategic partnerships with major Indian banks to expand our micro-finance and loans product offerings.'
    },
    {
      date: 'January 20, 2024',
      title: 'Mobile App Reaches 1 Million Downloads',
      content: 'Our iMudra app crossed 1 million downloads on Android, making digital financial services accessible to millions of Indians.'
    },
    {
      date: 'December 15, 2023',
      title: 'Processing 100M+ Transactions Monthly',
      content: 'Celebrating a major milestone as we process over 100 million transactions every month across all our platforms.'
    },
    {
      date: 'November 30, 2023',
      title: 'New Training Academy Launch',
      content: 'Opened our Digital Mudra Sevak Academy to train agents and partners in financial inclusion and digital payments.'
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600)',
          }}
        />
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">News & Awards</h1>
          <p className="text-xl text-gray-300">Latest Updates and Recognition</p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-balance">Awards & Recognition</h2>
          <div className="space-y-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-lg hover:shadow-lg transition border-l-4 border-red-600"
              >
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-red-600 rounded-full text-white text-3xl flex-shrink-0">
                  🏆
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-red-600 font-semibold mb-2">{award.organization}</p>
                  <p className="text-gray-700 mb-2">{award.description}</p>
                  <p className="text-sm text-gray-600">📅 {award.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-balance">Latest News</h2>
          <div className="space-y-6">
            {news.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-red-600 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <p className="text-sm text-red-600 font-semibold bg-red-50 px-4 py-1 rounded-full">
                    📅 {item.date}
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Media */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-balance">Featured In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Times of India', logo: '📰' },
              { name: 'Economic Times', logo: '📊' },
              { name: 'FinTech News', logo: '💼' },
              { name: 'Business Today', logo: '🎯' }
            ].map((media, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-lg hover:bg-red-50 transition">
                <div className="text-4xl mb-2">{media.logo}</div>
                <p className="font-semibold text-gray-900">{media.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
