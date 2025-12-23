
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProposalSection from "@/components/ProposalSection";
import ResearchAreasSection from "@/components/ServicesSection";
import ResearchProjectsSection from "@/components/CasesSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useEffect } from "react";
import ResearcherProfileSection from "@/components/CEOSection.tsx";

const Index = () => {
  useEffect(() => {
    // Change the document title
    document.title = "Dr. Mauricio Rosales Rivera | Investigación en Ciencia de Datos | Aelityx Research";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      <AnimateOnScroll>
        <ProposalSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <ResearchAreasSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <ResearchProjectsSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <PublicationsSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <ResearcherProfileSection />
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
