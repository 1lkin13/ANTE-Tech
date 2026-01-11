'use client';

import { hostingProviders } from '@/data/hostingProviders';
import { BrandCard } from './BrandCard';

export function BrandCardsList() {
  return (
    <section id="hosting-plans" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Compare Hosting Plans
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find the perfect hosting solution for your website. Compare features, prices, and ratings.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {hostingProviders.map((provider, index) => (
            <BrandCard key={provider.id} provider={provider} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
