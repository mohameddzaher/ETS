import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientsDetail from '@/components/pages/ClientsDetail';

export const metadata: Metadata = {
  title: 'Our Clients',
  description: 'Trusted by leading businesses across various industries. Explore our client success stories and partnerships. We serve clients in Saudi Arabia, Egypt, Dubai, and Oman.',
  keywords: 'energize tech solutions clients, software development clients, satisfied customers, client testimonials, business partnerships',
  openGraph: {
    title: 'Our Clients - Energize Tech Solutions',
    description: 'Trusted by leading businesses across various industries',
    url: 'https://energizetechsolutions.com/clients',
    type: 'website',
  },
};

export default function ClientsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ClientsDetail />
      <Footer />
    </main>
  );
}


