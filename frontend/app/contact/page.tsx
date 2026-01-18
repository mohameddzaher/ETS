import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactDetail from '@/components/pages/ContactDetail';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Energize Tech Solutions. Contact us for software development, AI solutions, and digital transformation services. Offices in Saudi Arabia, Egypt, Dubai, and Oman.',
  keywords: 'contact energize tech solutions, software development contact, tech support, business inquiry, Saudi Arabia, Egypt, Dubai, Oman',
  openGraph: {
    title: 'Contact Us - Energize Tech Solutions',
    description: 'Get in touch with our expert team',
    url: 'https://energizetechsolutions.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactDetail />
      <Footer />
    </main>
  );
}


