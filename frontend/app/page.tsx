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

export default function Home() {
  return (
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
  );
}
