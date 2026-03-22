import AppsShowcase from "@/components/AppsShowcase";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import ServicesOverview from "@/components/ServicesOverview";
import ServicesTestimonial from "@/components/ServicesTestimonial";

export default function Services() {
  return (
    <>
      <Navbar />
      <ServicesOverview />
      <AppsShowcase />
      <ServicesTestimonial />
      <Footer />
    </>
  );
}
