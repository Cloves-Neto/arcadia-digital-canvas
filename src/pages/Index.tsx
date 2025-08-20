
import {AboutSection} from "@/components";

import BackgroundStarsPattern from "@/components/BackgroundStarsPattern";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionSection from "@/components/CallToActionSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}

      <BackgroundStarsPattern
        starCount={100}
        orbCount={5}
        enableMouseGradient={true}
      />

      <main className="container relative z-10">
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        {/* <ProcessSection /> */}

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="pricing">
          <PricingSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        {/* <CallToActionSection /> */}

        {/* <section id="contact">
          <ContactSection />
        </section> */}
      </main>

    </div>
  );
};

export default Index;
