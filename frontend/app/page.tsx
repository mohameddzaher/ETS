import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesPreview from '@/components/sections/ServicesPreview';
import AboutPreview from '@/components/sections/AboutPreview';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Achievements from '@/components/sections/Achievements';
import VisionMission from '@/components/sections/VisionMission';
import Vision2030 from '@/components/sections/Vision2030';
import Clients from '@/components/sections/Clients';
import Newsletter from '@/components/sections/Newsletter';
import MapSection from '@/components/sections/MapSection';
import GetInTouch from '@/components/sections/GetInTouch';
import SectionDivider from '@/components/SectionDivider';
import TechStack from '@/components/sections/TechStack';

export const metadata: Metadata = {
  title: "Home",
  description: "Energize Tech Solutions - Premier software development company with 24+ years of experience. Expert in web development, mobile apps, AI solutions, e-commerce, and digital transformation across Saudi Arabia, Egypt, Dubai, and Oman.",
  keywords: "software development company, web development, mobile apps, AI solutions, e-commerce development, digital transformation, Saudi Arabia, Egypt, Dubai, Oman",
  openGraph: {
    title: "Energize Tech Solutions - Leading Software Development & AI Solutions",
    description: "Premier software development company with 24+ years of experience providing cutting-edge solutions",
    url: "https://energizetechsolutions.com",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Energize Tech Solutions",
  "alternateName": "ETS",
  "url": "https://energizetechsolutions.com",
  "logo": "https://energizetechsolutions.com/images/white-logo.png",
  "description": "Premier software development company with 24+ years of experience providing cutting-edge software solutions, AI services, web development, mobile applications, and digital transformation services",
  "foundingDate": "2000",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "50-100"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": ["SA", "EG", "AE", "OM"],
    "addressLocality": ["Riyadh", "Cairo", "Dubai", "Muscat"]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": ["English", "Arabic"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/energize-tech-solutions",
    "https://twitter.com/energizetech",
    "https://www.facebook.com/energizetechsolutions"
  ],
  "areaServed": [
    {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    {
      "@type": "Country",
      "name": "Egypt"
    },
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    {
      "@type": "Country",
      "name": "Oman"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom web applications and websites"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "iOS and Android mobile applications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Solutions",
          "description": "Artificial Intelligence and Machine Learning solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce Development",
          "description": "E-commerce platforms and online stores"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Transformation",
          "description": "Complete digital transformation services"
        }
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        <Header />
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <PortfolioPreview />
      <WhyChooseUs />
      <Achievements />
      <TechStack />
      <VisionMission />
      {/* <Vision2030 /> */}
      <Clients />
      <Newsletter />
      <MapSection />
      <GetInTouch />
      <Footer />
      </main>
    </>
  );
}
