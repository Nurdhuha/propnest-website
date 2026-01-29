import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import PropertyTypes from "@/components/sections/PropertyTypes";
import FeaturedListings from "@/components/sections/FeaturedListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AgentShowcase from "@/components/sections/AgentShowcase";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import FloatingWA from "@/components/FloatingWA";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />
      <Hero />
      <PropertyTypes />
      <FeaturedListings />
      <WhyChooseUs />
      <AgentShowcase />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingWA />
    </main>
  );
}
