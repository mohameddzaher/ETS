import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutDetail from '@/components/pages/AboutDetail';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Energize Tech Solutions - 24+ years of excellence in software development, serving clients across Saudi Arabia, Egypt, Dubai, and Oman. Our team of expert developers delivers cutting-edge solutions.',
  keywords: 'about energize tech solutions, software company history, experienced developers, Saudi Arabia software company, Egypt tech solutions',
  openGraph: {
    title: 'About Us - Energize Tech Solutions',
    description: '24+ years of excellence in software development across the Middle East',
    url: 'https://energizetechsolutions.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutDetail />
      <Footer />
    </main>
  );
}


