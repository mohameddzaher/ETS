import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CareerDetail from '@/components/pages/CareerDetail';

export const metadata: Metadata = {
  title: 'Career',
  description: 'Join our team of talented professionals. Explore career opportunities at Energize Tech Solutions and be part of our innovative journey. Open positions for developers, designers, and tech professionals.',
  keywords: 'career opportunities, software developer jobs, tech jobs Saudi Arabia, tech jobs Egypt, software engineering careers, join energize tech',
  openGraph: {
    title: 'Career - Join Energize Tech Solutions',
    description: 'Explore career opportunities and join our innovative team',
    url: 'https://energizetechsolutions.com/career',
    type: 'website',
  },
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


