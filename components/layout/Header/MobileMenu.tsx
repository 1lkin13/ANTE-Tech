'use client';

import Link from 'next/link';
import { navigationLinks } from '@/data/navigation';
import { getStoredGCLID } from '@/lib/gclid/hook';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [gclid, setGclid] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setGclid(getStoredGCLID());
  }, []);

  const getHref = (href: string) => {
    return gclid ? `${href}?gclid=${gclid}` : href;
  };

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`absolute inset-y-0 left-0 w-full bg-black border-r border-gray-900 overflow-y-auto transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-900">
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="text-white p-2 rounded-md transition-colors"
                aria-label="Close menu"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Logo */}
              <span className="text-white font-semibold text-lg uppercase tracking-wide">
                Ante Tech
              </span>
            </div>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/994503378465"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#006FEE]/20 text-[#338EF7] px-4 py-2 rounded-lg font-medium transition-colors text-sm hover:bg-[#006FEE]/30"
            >
              1lkin13
            </a>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 p-4 space-y-1">
            {navigationLinks.map((link, index) => {
              const isActive = mounted && pathname === link.href;
              return (
                <Link
                  key={link.id}
                  href={getHref(link.href)}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  } ${
                    isActive ? 'text-[#0068de]' : 'text-white'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
