
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProposalSection from "@/components/ProposalSection";
import ServicesSection from "@/components/ServicesSection";
import CasesSection from "@/components/CasesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Change the document title
    document.title = "Aelityx | Transformando Datos en Conocimiento";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      <AnimateOnScroll>
        <ProposalSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <ServicesSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <CasesSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <TeamSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <ContactSection />
      </AnimateOnScroll>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
