'use client';

import { useRouter } from 'next/navigation';
import { getStoredGCLID } from '@/lib/gclid/hook';

export default function CatchAllPage() {
  const router = useRouter();

  const handleGoHome = () => {
    const gclid = getStoredGCLID();
    const homeUrl = gclid ? `/?gclid=${gclid}` : '/';
    router.push(homeUrl);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[120px] sm:text-[180px] font-bold leading-none">
            <span className="bg-gradient-to-r from-[#006FEE] via-[#7D4EFF] to-[#9353D3] bg-clip-text text-transparent">
              404
            </span>
          </h1>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={handleGoHome}
          className="bg-[#006FEE] text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-all hover:bg-[#0052CC] hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>

        {/* Decorative Element */}
        <div className="mt-16 flex items-center justify-center gap-2 text-gray-600">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-700" />
          <span className="text-sm uppercase tracking-wider">Ante Tech</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-700" />
        </div>
      </div>
    </div>
  );
}
