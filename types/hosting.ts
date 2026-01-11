export interface HostingProvider {
  id: string;
  name: string;
  logo: string;
  rating: number;
  stars: number;
  ratingText: string;
  reviewCount: number;
  welcomeBonus: string;
  affiliateUrl: string;
  features?: string[];
  specialOffer?: string;
}
