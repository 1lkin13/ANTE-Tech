import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { Hero } from '@/components/sections/Hero/Hero';
import { BrandCardsList } from '@/components/sections/BrandCards/BrandCardsList';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BrandCardsList />
      <Footer />
    </>
  );
}
