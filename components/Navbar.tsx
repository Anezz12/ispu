'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Info', href: '#info-section' },
    { name: 'Prediksi', href: '#prediction-form' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md text-gray-800 py-2'
          : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div
              className={`text-2xl font-bold flex items-center ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}
            >
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-9 w-9 mr-2 transition-transform duration-300 group-hover:rotate-12 ${
                    isScrolled ? 'text-blue-600' : 'text-white'
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hidden sm:inline font-extrabold tracking-tight">
                  ISPU
                  <span className="font-semibold tracking-normal">
                    {' '}
                    Jakarta
                  </span>
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 font-medium text-base transition duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-yellow-300'
                } group`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isScrolled ? 'bg-blue-600' : 'bg-yellow-300'
                  }`}
                ></span>
              </Link>
            ))}
            <Link
              href="#prediction-form"
              className={`ml-3 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-yellow-300 hover:text-blue-800'
              }`}
            >
              Cek Sekarang
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isScrolled
                  ? 'text-gray-700 focus:ring-blue-600'
                  : 'text-white focus:ring-white'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-90' : 'rotate-0'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 transform ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl mx-4 overflow-hidden">
          <div className="px-2 py-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                href="#prediction-form"
                className="block w-full px-4 py-3 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 text-center transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cek Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
