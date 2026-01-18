import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactDetail from '@/components/pages/ContactDetail';

export const metadata = {
  title: 'Contact Us - Energize Tech Solutions',
  description: 'Get in touch with Energize Tech Solutions. Contact us for software development, AI solutions, and digital transformation services.',
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


