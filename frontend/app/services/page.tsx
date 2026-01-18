import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesDetail from '@/components/pages/ServicesDetail';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive software development services including web development, mobile apps, AI solutions, e-commerce, digital transformation, cloud services, and cybersecurity. Expert solutions for businesses across the Middle East.',
  keywords: 'web development services, mobile app development, AI solutions, e-commerce development, digital transformation, cloud services, cybersecurity, custom software development',
  openGraph: {
    title: 'Services - Energize Tech Solutions',
    description: 'Comprehensive software development services for businesses',
    url: 'https://energizetechsolutions.com/services',
    type: 'website',
  },
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


