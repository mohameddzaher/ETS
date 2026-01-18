import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientsDetail from '@/components/pages/ClientsDetail';

export const metadata = {
  title: 'Our Clients - Energize Tech Solutions',
  description: 'Trusted by leading businesses across various industries. Explore our client success stories and partnerships.',
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


