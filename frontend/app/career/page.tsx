import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CareerDetail from '@/components/pages/CareerDetail';

export const metadata = {
  title: 'Career - Join Energize Tech Solutions',
  description: 'Join our team of talented professionals. Explore career opportunities at Energize Tech Solutions and be part of our innovative journey.',
};

export default function CareerPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CareerDetail />
      <Footer />
    </main>
  );
}


