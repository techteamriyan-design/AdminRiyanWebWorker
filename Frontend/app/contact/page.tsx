'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: 'Navi Mumbai',
      address: 'Building F, Pudhari Bhavan, 5th Floor, Plot No.29 to 32, 36 and 37, Sec-30A, Sanpada 400705, Navi Mumbai, Maharashtra',
      phone: '+91 8062810032, +91 9653139869',
      email: 'support@instantmudra.co.in',
      image: '🏢'
    },
    {
      city: 'Delhi',
      address: 'Financial District, New Delhi',
      phone: '+91 XXXX-XXXX-XXXX',
      email: 'delhi@instantmudra.co.in',
      image: '🏛️'
    },
    {
      city: 'Bangalore',
      address: 'Tech Park, Bangalore',
      phone: '+91 XXXX-XXXX-XXXX',
      email: 'bangalore@instantmudra.co.in',
      image: '💼'
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Get In Touch</h1>
          <p className="text-xl text-gray-300">We&apos;re here to help and answer any questions</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-balance">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
                    placeholder="+91 XXXX XXXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
                  >
                    <option value="">Select Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="partner">Partner Inquiry</option>
                    <option value="agent">Agent Inquiry</option>
                    <option value="support">Support Request</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-balance">Contact Information</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-red-50 rounded-lg border-l-4 border-red-600">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-700">+91 8062810032</p>
                    <p className="text-gray-700">+91 9653139869</p>
                    <p className="text-sm text-gray-600 mt-2">Available 24/7</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-red-50 rounded-lg border-l-4 border-red-600">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">support@instantmudra.co.in</p>
                    <p className="text-sm text-gray-600 mt-2">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-red-50 rounded-lg border-l-4 border-red-600">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Head Office</h3>
                    <p className="text-gray-700 text-sm">Building F, Pudhari Bhavan, 5th Floor, Plot No.29 to 32, 36 and 37, Sec-30A, Sanpada 400705</p>
                    <p className="text-gray-700 text-sm">Navi Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-red-50 rounded-lg border-l-4 border-red-600">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-700">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Sat: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-700">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-balance">Our Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-5xl mb-4">{office.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-4 text-gray-700 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <p className="leading-relaxed">{office.address}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <p>{office.phone}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <p className="text-red-600">{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
