'use client';

import { useState } from 'react';
import { MobileMenu } from './MobileMenu';
import { Navigation } from './Navigation';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Hamburger Menu - Mobile Only */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-white p-2 rounded-md transition-colors"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo Icon */}
         
            <span className="text-white font-semibold text-lg uppercase tracking-wide">
              Ante Tech
            </span>
          </div>

          {/* Desktop Navigation */}
          <Navigation />

          {/* WhatsApp */}
          <a 
            href="https://wa.me/994503378465"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#006FEE]/20 text-[#338EF7] px-6 py-2 rounded-lg font-medium transition-colors hover:bg-[#006FEE]/30"
          >
            1lkin13
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
