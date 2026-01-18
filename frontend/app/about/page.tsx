import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutDetail from '@/components/pages/AboutDetail';

export const metadata = {
  title: 'About Us - Energize Tech Solutions',
  description: 'Learn about Energize Tech Solutions - 24 years of excellence in software development, serving clients across Saudi Arabia, Egypt, Dubai, and Oman.',
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


