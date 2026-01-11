'use client';

import Image from 'next/image';

export function Hero() {
  const scrollToPlans = () => {
    const element = document.getElementById('hosting-plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-32">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
            <span className="text-orange-500">🔥</span>
            <span className="text-white text-sm font-medium">Hosting Comparison 2026</span>
            <span className="text-gray-400">→</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Find the best{' '}
            <span className="relative inline-block">
  <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite]">
    hosting
  </span>
</span> for your website
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Compare top hosting providers and get the best deals. Fast, reliable, and affordable hosting solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-start">
            <a 
              href="https://wa.me/994503378465"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#006FEE] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 transition-colors text-sm sm:text-base hover:bg-[#0052CC]"
            >
              Get Started
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <button 
              onClick={scrollToPlans}
              className="bg-gray-800/50 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium border border-gray-700 inline-flex items-center justify-center gap-2 transition-colors text-sm sm:text-base hover:bg-gray-700/50"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Compare Plans
            </button>
          </div>
        </div>

        {/* Right Side - Floating Card with Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Floating Card */}
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 shadow-2xl animate-float">
              {/* Card Content */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                <Image
                  src="/images/banner.png"
                  alt="Hosting illustration"
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#7D4EFF]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#006FEE]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
