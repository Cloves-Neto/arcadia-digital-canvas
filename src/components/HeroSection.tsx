
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-arcadia-orange/10 via-arcadia-white to-arcadia-magenta/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-arcadia-orange to-arcadia-magenta rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-arcadia-teal to-arcadia-purple rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-br from-arcadia-purple to-arcadia-teal rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-gray-800 mb-6 leading-tight">
            Construímos{' '}
            <span className="bg-gradient-to-r from-arcadia-orange via-arcadia-magenta to-arcadia-purple bg-clip-text text-transparent">
              experiências digitais
            </span>{' '}
            únicas.
          </h1>
          
          <p className="text-xl md:text-2xl font-inter text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Somos a Arcadia, uma software house que une criatividade e tecnologia para transformar ideias em soluções digitais.
          </p>
          
          <Button 
            size="lg" 
            className="bg-arcadia-orange hover:bg-arcadia-magenta text-white font-inter font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça nossos serviços
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
