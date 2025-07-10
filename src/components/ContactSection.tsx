
import { Mail, Phone, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-arcadia-teal/10 via-background to-arcadia-orange/10 dark:from-arcadia-teal/5 dark:to-arcadia-orange/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-arcadia-orange/20 to-arcadia-magenta/20 rounded-full transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-arcadia-purple/20 to-arcadia-teal/20 rounded-full transform -translate-x-24 translate-y-24"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-foreground mb-6">
              Vamos tirar sua ideia do{' '}
              <span className="bg-gradient-to-r from-arcadia-orange via-arcadia-magenta to-arcadia-purple bg-clip-text text-transparent">
                papel?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para transformar sua visão em realidade digital. Vamos conversar sobre seu projeto!
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-arcadia-orange hover:bg-arcadia-magenta text-white font-inter font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Solicitar orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-arcadia-purple text-arcadia-purple hover:bg-arcadia-purple hover:text-white font-inter font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Ver portfólio
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Mail className="h-8 w-8 text-arcadia-orange mx-auto mb-4" />
              <h3 className="text-lg font-poppins font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground font-inter">contato@arcadia.dev</p>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Phone className="h-8 w-8 text-arcadia-teal mx-auto mb-4" />
              <h3 className="text-lg font-poppins font-semibold text-foreground mb-2">Telefone</h3>
              <p className="text-muted-foreground font-inter">+55 (11) 9 9999-9999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
