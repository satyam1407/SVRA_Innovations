import AboutIntro from '@/components/AboutIntro';
import CustomerFeedback from '@/components/CustomerFeedback';
import Footer from '@/components/Footer';
import LocationSection from '@/components/LocationSection';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <>
     <Navbar />
      <AboutIntro />
      <LocationSection />
      <CustomerFeedback />
      <Footer />
    </>
  );
}