'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AgentLogin() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setCredentials({
      ...credentials,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', credentials);
    alert('Login functionality would be implemented with backend authentication');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between p-6 md:p-8">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="text-3xl font-bold text-red-600">in</div>
            <div className="hidden md:block">
              <div className="text-sm font-bold text-white">Instant Mudra</div>
              <div className="text-xs text-gray-400">Digital Financial Services</div>
            </div>
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition">
            Back to Home
          </Link>
        </header>

        {/* Login Container */}
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-6">
          <div className="w-full max-w-md">
            {/* Card */}
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-2xl">
              {/* Logo and Title */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  👤
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Agent Login</h1>
                <p className="text-gray-400">Access Your Instant Mudra Agent Portal</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Input */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-red-600 focus:bg-gray-700 focus:outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-red-600 focus:bg-gray-700 focus:outline-none transition"
                    placeholder="••••••••"
                  />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={credentials.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 accent-red-600"
                    />
                    <span className="text-gray-400 hover:text-white transition">Remember me</span>
                  </label>
                  <Link href="#" className="text-red-600 hover:text-red-500 transition font-semibold">
                    Forgot Password?
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all duration-300 text-lg shadow-lg hover:shadow-red-600/50"
                >
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-700" />
                <span className="text-gray-500 text-sm">Or</span>
                <div className="flex-1 h-px bg-gray-700" />
              </div>

              {/* Additional Options */}
              <div className="space-y-3 mb-6">
                <button className="w-full py-3 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition border border-gray-600 font-semibold">
                  📱 Login with OTP
                </button>
              </div>

              {/* Footer Links */}
              <div className="text-center space-y-2 text-sm">
                <p className="text-gray-400">
                  Not an agent yet?{' '}
                  <Link href="#" className="text-red-600 hover:text-red-500 font-semibold transition">
                    Apply Now
                  </Link>
                </p>
                <div className="flex justify-center gap-4 pt-4 border-t border-gray-700">
                  <Link href="/partner-login" className="text-gray-400 hover:text-white transition">
                    Partner Login
                  </Link>
                  <span className="text-gray-700">|</span>
                  <Link href="#" className="text-gray-400 hover:text-white transition">
                    Need Help?
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center">
              <p className="text-gray-400 text-sm mb-4">
                As a Digital Mudra Sevak, manage your transactions and earnings with our agent portal.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-500">📞 Support: +91 8062810032</p>
                <p className="text-gray-500">📧 Email: support@instantmudra.co.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
