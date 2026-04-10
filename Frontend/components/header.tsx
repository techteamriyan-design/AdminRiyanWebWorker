'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'SERVICES', href: '/services' },
    { label: 'OUR TEAM', href: '/team' },
    { label: 'NEWS & AWARDS', href: '/news' },
    { label: 'ACTIVITY', href: '/activity' },
    { label: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#2a2a2a] border-b-4 border-red-600 shadow-lg">
      {/* Top bar with contact info */}
      <div className="hidden md:flex justify-between items-center px-6 py-3 text-sm text-gray-300 bg-[#1a1a1a] border-b border-gray-700">
        <div className="flex gap-8">
          <span className="flex items-center gap-2 hover:text-white transition">
            <span>📞</span>
            +91 8062810032, +91 9653139869
          </span>
          <span className="flex items-center gap-2 hover:text-white transition">
            <span>✉️</span>
            support@instantmudra.co.in
          </span>
        </div>
        <div className="flex gap-4">
          <Link href="#careers" className="hover:text-red-500 transition">Careers</Link>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">in</span>
          </div>
          <span className="text-white font-bold text-lg">Instant Mudra</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white text-sm font-semibold hover:text-red-500 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/agent-login" className="px-6 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition inline-block">
            AGENT LOGIN
          </Link>
          <Link href="/partner-login" className="px-6 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition inline-block">
            PARTNER LOGIN
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#1a1a1a] px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-white text-sm font-semibold hover:text-red-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <Link href="/agent-login" className="w-full px-6 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition text-center block" onClick={() => setIsOpen(false)}>
              AGENT LOGIN
            </Link>
            <Link href="/partner-login" className="w-full px-6 py-2 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition text-center block" onClick={() => setIsOpen(false)}>
              PARTNER LOGIN
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
