'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Team() {
  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: '19+ years in fintech and payments industry'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Expert in cloud infrastructure and security'
    },
    {
      name: 'Amit Patel',
      role: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Specialist in financial services operations'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Customer Relations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Dedicated to customer success and satisfaction'
    },
    {
      name: 'Vikram Singh',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Full-stack developer with blockchain expertise'
    },
    {
      name: 'Anjali Gupta',
      role: 'Compliance Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Expert in RBI regulations and compliance'
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600)',
          }}
        />
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Our Team</h1>
          <p className="text-xl text-gray-300">Experts Driving Innovation in Fintech</p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-balance">Meet Our Leaders</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-balance">Our Culture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-700">
                We continuously push boundaries to create cutting-edge financial solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-700">
                Teamwork and diverse perspectives drive our success and growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-700">
                We maintain the highest standards in everything we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
