import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white py-16 px-6 md:px-12">
      {/* Top contact bar */}
      <div className="max-w-7xl mx-auto mb-12 pb-12 border-b border-gray-700">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Head Office */}
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Head Office</h3>
              <p className="text-gray-300 text-sm">Navi Mumbai, Maharashtra.</p>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Call Us</h3>
              <p className="text-gray-300 text-sm">
                +91 8062810032 , +91 9653139869
              </p>
            </div>
          </div>

          {/* Mail Us */}
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Mail Us</h3>
              <p className="text-gray-300 text-sm">support@instantmudra.co.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Us column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact us</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <div>
                  <p>Instant Mudra Technologies Pvt. Ltd.</p>
                  <p>Building "F", Pudhari Bhavan, 5th Floor,</p>
                  <p>Plot No.29 to 32, 36 and 37,</p>
                  <p>Sec-30A, Sanpada 400705,</p>
                  <p>Navi Mumbai, Maharashtra.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-1" />
                <p>support@instantmudra.co.in</p>
              </div>
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-1" />
                <p>+91 8062810032 , +91 9653139869</p>
              </div>
            </div>
          </div>

          {/* Quick Links column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3 text-gray-300">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Our Team', href: '#team' },
                { label: 'News & Awards', href: '#news' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block hover:text-red-500 transition text-sm"
                >
                  → {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 space-y-3 text-gray-300">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Refund & Cancellation Policy', href: '/refund' },
                { label: 'Contact Us', href: '#contact' },
                { label: 'Careers', href: '#careers' },
                { label: 'Terms & Conditions', href: '/terms' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block hover:text-red-500 transition text-sm"
                >
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Logo and social column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-1">in</div>
                <p className="text-xs text-gray-700 font-semibold">Instant Mudra</p>
                <p className="text-xs text-gray-600">अपना डिजिटल मुद्रा</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              {[
                { icon: '🔵', label: 'Facebook' },
                { icon: '𝕏', label: 'Twitter' },
                { icon: '💼', label: 'LinkedIn' },
                { icon: '📷', label: 'Instagram' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-11 h-11 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300 text-lg shadow-md"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>Copyright © 2020 Instantmudra. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/cookies" className="hover:text-white transition">
              Cookies Policy
            </Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/refund" className="hover:text-white transition">
              Refund & Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
