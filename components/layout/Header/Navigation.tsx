'use client';

import Link from 'next/link';
import { navigationLinks } from '@/data/navigation';
import { getStoredGCLID } from '@/lib/gclid/hook';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Navigation() {
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
    <nav className="hidden lg:flex items-center gap-8">
      {navigationLinks.map((link) => {
        const isActive = mounted && pathname === link.href;
        return (
          <Link
            key={link.id}
            href={getHref(link.href)}
            className={`font-medium transition-colors ${
              isActive ? 'text-[#0068de]' : 'text-white'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
