'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getStoredGCLID } from '@/lib/gclid/hook';
import { footerLinks, legalDisclaimer } from '@/data/footer';

export function Footer() {
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
    <footer className="bg-black border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section: Brand and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-lg uppercase tracking-wide">
                Ante Tech
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              A hosting comparison platform created with ❤️ by{' '}
              <a 
                href="https://wa.me/994503378465"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#338EF7] hover:underline"
              >
                1lkin13
              </a>
            </p>
          </div>

          {/* Secondary Navigation Links */}
          <div className="flex flex-wrap gap-6">
            {footerLinks.navigation.map((link) => {
              const isActive = mounted && pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={getHref(link.href)}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-[#0068de]' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            {footerLinks.legal.map((link) => {
              const isActive = mounted && pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={getHref(link.href)}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-[#0068de]' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-gray-900 pt-6">
          <p className="text-gray-500 text-xs leading-relaxed max-w-4xl">
            {legalDisclaimer.text}
          </p>
        </div>
      </div>
    </footer>
  );
}
