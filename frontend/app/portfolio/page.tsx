import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioDetail from '@/components/pages/PortfolioDetail';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our portfolio of successful projects across web development, mobile applications, AI solutions, and e-commerce platforms. See how we help businesses transform digitally.',
  keywords: 'software development portfolio, web development projects, mobile app portfolio, AI solutions projects, e-commerce projects, case studies',
  openGraph: {
    title: 'Portfolio - Energize Tech Solutions',
    description: 'Explore our successful projects and case studies',
    url: 'https://energizetechsolutions.com/portfolio',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PortfolioDetail />
      <Footer />
    </main>
  );
}


