'use client';

import { HostingProvider } from '@/types/hosting';
import { StarRating } from '@/components/ui/StarRating';
import { useGCLID } from '@/lib/gclid/hook';
import Image from 'next/image';

interface BrandCardProps {
  provider: HostingProvider;
  index: number;
}

export function BrandCard({ provider, index }: BrandCardProps) {
  const { appendToUrl } = useGCLID();
  const finalUrl = appendToUrl(provider.affiliateUrl);

  const formatReviewCount = (count: number) => {
    return count.toLocaleString('en-US');
  };

  // Sabit visitor sayı (hydration üçün)
  const getVisitorCount = (providerId: string) => {
    let hash = 0;
    for (let i = 0; i < providerId.length; i++) {
      hash = ((hash << 5) - hash) + providerId.charCodeAt(i);
      hash = hash & hash;
    }
    return (Math.abs(hash) % 50000 + 20000).toLocaleString('en-US');
  };

  const showBadge = index === 0 || provider.rating >= 9.0;
  const badgeText = index === 0 ? "Best Offer" : "Editor's Choice";

  // Karta kliklədikdə affiliate linkə yönləndir
  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) return;
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleCardClick}
      className="relative bg-[#19191c] rounded-xl overflow-hidden border border-gray-800/50 transition-all hover:border-gray-700/70 hover:bg-[#1e1e22] flex flex-col md:flex-row items-center p-4 md:p-6 gap-4 md:gap-8 cursor-pointer"
    >
      {/* Top Right Badge */}
      {showBadge && (
        <div className="absolute top-0 right-0 z-10">
          <div className={`${index === 0 ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-[#006FEE] to-[#7D4EFF]'} text-white px-3 py-1.5 md:px-4 md:py-2 rounded-bl-xl rounded-tr-xl text-[10px] md:text-xs font-bold uppercase tracking-wide flex items-center gap-1.5`}>
            <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {badgeText}
          </div>
        </div>
      )}

      {/* Ranking Number - Hidden on mobile */}
      <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2">
        <div className="w-12 h-12 rounded-full bg-[#006FEE]/20 border-2 border-[#006FEE]/30 flex items-center justify-center">
          <span className="text-2xl font-bold text-[#338EF7]">{index + 1}</span>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden absolute top-2 left-2">
        <div className="w-8 h-8 rounded-full bg-[#006FEE]/20 border-2 border-[#006FEE]/30 flex items-center justify-center">
          <span className="text-lg font-bold text-[#338EF7]">{index + 1}</span>
        </div>
      </div>

      {/* Left Section */}
      <div className="flex-shrink-0 md:ml-6 w-full md:w-auto flex justify-center md:justify-start">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg flex items-center justify-center bg-white/5 p-3 md:p-5 border border-white/10">
          <Image
            src={provider.logo}
            alt={`${provider.name} logo`}
            width={112}
            height={112}
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex-1 flex flex-col gap-3 md:gap-4 w-full md:w-auto text-center md:text-left">
        {/* Company Name */}
        <h3 className="text-white font-bold text-xl md:text-2xl">{provider.name}</h3>
        
        {/* Features List */}
        {provider.features && (
          <ul className="space-y-2 md:space-y-2.5">
            {provider.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 md:gap-3 text-gray-300 text-xs md:text-sm leading-relaxed justify-center md:justify-start">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#006FEE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Visitor Count Badge */}
        {index < 3 && (
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-400 justify-center md:justify-start">
            <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-2.5 py-1 md:px-3 md:py-1.5 border border-white/10">
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#006FEE]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="text-[10px] md:text-xs"><strong>{getVisitorCount(provider.id)}</strong> visited this month</span>
            </div>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center gap-2 md:gap-3 flex-shrink-0 w-full md:w-auto md:min-w-[160px]">
        {/* Circular Rating */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center">
          <svg className="w-28 h-28 md:w-32 md:h-32 transform -rotate-90 absolute" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="2.5"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke={`url(#gradient-${index})`}
              strokeWidth="2.5"
              strokeDasharray={`${(provider.rating / 10) * 100} 100`}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={provider.rating >= 8.5 ? "#10b981" : provider.rating >= 7.5 ? "#006FEE" : "#f59e0b"} />
                <stop offset="100%" stopColor={provider.rating >= 8.5 ? "#059669" : provider.rating >= 7.5 ? "#7D4EFF" : "#d97706"} />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
            <span className="text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-wide leading-tight">{provider.ratingText}</span>
            <span className="text-white font-bold text-xl md:text-2xl leading-none mt-1">{provider.rating}</span>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex flex-col items-center gap-1">
          <StarRating stars={provider.stars} />
          <span className="text-gray-400 text-[9px] md:text-[10px]">{formatReviewCount(provider.reviewCount)} reviews</span>
        </div>

        {/* Special Offer Badge */}
        {provider.specialOffer && (
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg px-2 md:px-2.5 py-0.5 md:py-1 text-center">
            <div className="flex items-center gap-1 text-yellow-400 text-[9px] md:text-[10px] font-semibold">
              <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {provider.specialOffer}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <a
          href={finalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#006FEE] text-white px-6 py-2.5 md:py-2.5 rounded-full font-medium inline-flex items-center justify-center gap-2 transition-colors text-xs w-auto max-w-full md:w-auto hover:bg-[#0052CC]"
        >
          VIEW PLAN
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
}