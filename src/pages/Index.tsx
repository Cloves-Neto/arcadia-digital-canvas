
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <DifferentialsSection />
        
        <section id="pricing">
          <PricingSection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-arcadia-orange to-arcadia-magenta w-10 h-10 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-poppins font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-poppins font-bold">Arcadia</span>
          </div>
          <p className="text-gray-400 font-inter">
            © 2024 Arcadia Software House. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 font-inter mt-2">
            Construindo experiências digitais únicas.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
