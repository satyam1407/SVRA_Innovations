import AboutStats from "@/components/AboutStats";
import AppsShowcase from "@/components/AppsShowcase";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutStats />
      <Services />
      <Testimonial />
      <AppsShowcase />
      <Footer />
    </>
  );
}
