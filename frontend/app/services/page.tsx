import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesDetail from '@/components/pages/ServicesDetail';

export const metadata = {
  title: 'Services - Energize Tech Solutions',
  description: 'Comprehensive software development services including web development, mobile apps, AI solutions, e-commerce, and digital transformation.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesDetail />
      <Footer />
    </main>
  );
}


