import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ante Tech - Hosting Comparison",
  description: "Find the best hosting provider for your website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen relative`}
      >
        {/* Arxa plan gradient */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div 
            className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(0,111,238,0.12) 0%, rgba(125,78,255,0.08) 50%, transparent 70%)'
            }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
