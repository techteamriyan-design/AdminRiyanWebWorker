'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Activity() {
  const activities = [
    {
      id: 1,
      type: 'Event',
      title: 'Digital Literacy Workshop - Mumbai',
      date: 'April 15, 2024',
      location: 'Mumbai, Maharashtra',
      description: 'Free training workshop for retailers on digital payment solutions and financial services.',
      attendees: '250+',
      image: '🎓'
    },
    {
      id: 2,
      type: 'CSR',
      title: 'Financial Inclusion for Rural Communities',
      date: 'April 10, 2024',
      location: 'Rural Areas',
      description: 'Bringing banking and payment services to unbanked rural communities across India.',
      attendees: '5000+',
      image: '🤲'
    },
    {
      id: 3,
      type: 'Partnership',
      title: 'Strategic Alliance with Leading Bank',
      date: 'April 5, 2024',
      location: 'Virtual',
      description: 'Partnering to expand microfinance and loan distribution across our platform.',
      attendees: 'Partners',
      image: '🤝'
    },
    {
      id: 4,
      type: 'Training',
      title: 'Agent Training Program - Delhi',
      date: 'March 28, 2024',
      location: 'Delhi',
      description: 'Comprehensive training for Mudra Sevaks on AEPS, DMT, and bill payment services.',
      attendees: '100+',
      image: '👨‍🏫'
    },
    {
      id: 5,
      type: 'Event',
      title: 'Fintech Expo 2024',
      date: 'March 20, 2024',
      location: 'Bangalore',
      description: 'Showcasing latest innovations in digital payments and financial technology.',
      attendees: '1000+',
      image: '🎪'
    },
    {
      id: 6,
      type: 'CSR',
      title: 'Women Entrepreneurship Initiative',
      date: 'March 15, 2024',
      location: 'Across India',
      description: 'Empowering women entrepreneurs through digital payment and financial services.',
      attendees: '2000+',
      image: '👩‍💼'
    },
    {
      id: 7,
      type: 'Webinar',
      title: 'Digital Payments Security Webinar',
      date: 'March 10, 2024',
      location: 'Online',
      description: 'Expert discussion on cybersecurity and safe digital payment practices.',
      attendees: '500+',
      image: '🔒'
    },
    {
      id: 8,
      type: 'Event',
      title: 'Awards Night Celebration',
      date: 'March 5, 2024',
      location: 'Mumbai',
      description: 'Celebrating achievements and honoring top performing partners and agents.',
      attendees: '300+',
      image: '🎉'
    }
  ];

  const getActivityColor = (type: string) => {
    switch(type) {
      case 'Event': return 'from-blue-50 to-blue-100 border-blue-300';
      case 'CSR': return 'from-green-50 to-green-100 border-green-300';
      case 'Partnership': return 'from-purple-50 to-purple-100 border-purple-300';
      case 'Training': return 'from-yellow-50 to-yellow-100 border-yellow-300';
      case 'Webinar': return 'from-pink-50 to-pink-100 border-pink-300';
      default: return 'from-red-50 to-red-100 border-red-300';
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'Event': return 'bg-blue-600';
      case 'CSR': return 'bg-green-600';
      case 'Partnership': return 'bg-purple-600';
      case 'Training': return 'bg-yellow-600';
      case 'Webinar': return 'bg-pink-600';
      default: return 'bg-red-600';
    }
  };

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Our Activities</h1>
          <p className="text-xl text-gray-300">Events, Initiatives, and Community Engagement</p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-balance">Recent Activities & Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className={`bg-gradient-to-br ${getActivityColor(activity.type)} border-2 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className={`${getTypeColor(activity.type)} text-white px-4 py-1 rounded-full text-sm font-bold`}>
                    {activity.type}
                  </span>
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {activity.image}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition">
                  {activity.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  {activity.description}
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-300 border-opacity-50">
                  <div className="flex flex-col space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-red-600">
                      <span>👥</span>
                      <span>{activity.attendees}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Be Part of Our Community</h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Join thousands of partners, agents, and customers who are part of the Instant Mudra ecosystem. Attend our events, participate in training, and grow together.
          </p>
          <button className="px-10 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 hover:scale-105 transition-all text-lg shadow-lg">
            Register for Upcoming Events
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
