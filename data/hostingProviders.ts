import { HostingProvider } from '@/types/hosting';

export const hostingProviders: HostingProvider[] = [
  {
    id: 'digitalocean',
    name: 'DigitalOcean',
    logo: '/images/digitalocean.svg',
    rating: 9.2,
    stars: 5,
    ratingText: 'Outstanding',
    reviewCount: 55214,
    welcomeBonus: 'Free Domain + 80% Off',
    affiliateUrl: 'https://www.digitalocean.com/test1',
    features: ['Unlimited Bandwidth', 'Free SSL Certificate', '24/7 Customer Support']
  },
  {
    id: 'godaddy',
    name: 'GoDaddy',
    logo: '/images/godaddy.svg',
    rating: 8.9,
    stars: 4,
    ratingText: 'Excellent',
    reviewCount: 47368,
    welcomeBonus: 'Free Domain + 75% Off',
    affiliateUrl: 'https://godaddy.com/test2',
    features: ['99.9% Uptime Guarantee', 'Free Website Builder', '45-Day Money-Back Guarantee']
  },
  {
    id: 'namecheap',
    name: 'Namecheap',
    logo: '/images/namecheap.svg',
    rating: 8.2,
    stars: 3,
    ratingText: 'Outstanding',
    reviewCount: 38392,
    welcomeBonus: 'Free SSL + 70% Off',
    affiliateUrl: 'https://namecheap.com/test3',
    features: ['SuperCacher Technology', 'Free CDN Included', 'Daily Automated Backups']
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    logo: '/images/hostinger.svg',
    rating: 7.6,
    stars: 3,
    ratingText: 'Excellent',
    reviewCount: 31566,
    welcomeBonus: 'Free Domain + 65% Off',
    affiliateUrl: 'https://hostinger.com/test4',
    features: ['Unlimited Storage Space', 'Free SSL Certificate', '97-Day Money-Back Guarantee']
  },
  {
    id: 'hetzner',
    name: 'Hetzner',
    logo: '/images/hetzner.svg',
    rating: 6.4,
    stars: 3,
    ratingText: 'Medium',
    reviewCount: 26742,
    welcomeBonus: 'Free Domain + 15% Off',
    affiliateUrl: 'https://hostinger.com/test5',
    features: ['Unlimited Storage Space', 'Free SSL Certificate', '70-Day Money-Back Guarantee']
  },
];
