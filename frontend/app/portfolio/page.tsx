import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioDetail from '@/components/pages/PortfolioDetail';

export const metadata = {
  title: 'Portfolio - Energize Tech Solutions',
  description: 'Explore our portfolio of successful projects across web development, mobile applications, AI solutions, and e-commerce platforms.',
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


