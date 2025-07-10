
import { Palette, Code, Globe, Zap, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: Palette,
      title: "Design Responsivo e UI/UX",
      description: "Criamos interfaces modernas, intuitivas e que se adaptam a qualquer dispositivo, priorizando a experiência do usuário.",
      gradient: "from-arcadia-orange to-arcadia-magenta",
      bgColor: "bg-gradient-to-br from-arcadia-orange/10 to-arcadia-magenta/10"
    },
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Soluções completas com React, Node.js e Tailwind CSS. Código limpo, escalável e performático.",
      gradient: "from-arcadia-magenta to-arcadia-purple",
      bgColor: "bg-gradient-to-br from-arcadia-magenta/10 to-arcadia-purple/10"
    },
    {
      icon: Globe,
      title: "Landing Pages e Portfólios",
      description: "Páginas profissionais que convertem visitantes em clientes, com foco em performance e SEO.",
      gradient: "from-arcadia-purple to-arcadia-teal",
      bgColor: "bg-gradient-to-br from-arcadia-purple/10 to-arcadia-teal/10"
    },
    {
      icon: Zap,
      title: "Animações e Interatividade",
      description: "Microinterações e animações que tornam a experiência mais envolvente e memorável.",
      gradient: "from-arcadia-teal to-arcadia-orange",
      bgColor: "bg-gradient-to-br from-arcadia-teal/10 to-arcadia-orange/10"
    },
    {
      icon: Settings,
      title: "Manutenção e Otimização",
      description: "Suporte contínuo, atualizações de segurança e melhorias de performance para seu projeto.",
      gradient: "from-arcadia-orange to-arcadia-purple",
      bgColor: "bg-gradient-to-br from-arcadia-orange/10 to-arcadia-purple/10"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + services.length) % services.length;
      visible.push({ ...services[index], position: i });
    }
    return visible;
  };

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
              Nossos <span className="bg-gradient-to-r from-arcadia-orange to-arcadia-magenta bg-clip-text text-transparent">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
              Oferecemos soluções completas para transformar sua presença digital
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center gap-8 min-h-[500px]">
              {getVisibleServices().map((service, index) => {
                const isCenter = service.position === 0;
                const isLeft = service.position === -1;
                const isRight = service.position === 1;
                
                return (
                  <Card 
                    key={`${currentIndex}-${index}`}
                    className={`
                      ${service.bgColor} border-0 shadow-lg transition-all duration-500 cursor-pointer
                      ${isCenter 
                        ? 'scale-110 z-20 hover:scale-115 shadow-2xl' 
                        : 'scale-90 z-10 opacity-70 hover:scale-95 hover:opacity-85'
                      }
                      ${isLeft ? 'transform -translate-x-4' : ''}
                      ${isRight ? 'transform translate-x-4' : ''}
                      ${isCenter ? 'w-80' : 'w-72'}
                    `}
                    onClick={() => {
                      if (!isCenter) {
                        if (isLeft) prevSlide();
                        if (isRight) nextSlide();
                      }
                    }}
                  >
                    <CardHeader className="text-center">
                      <div className={`
                        bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300
                        ${isCenter ? 'w-20 h-20' : 'w-16 h-16'}
                      `}>
                        <service.icon className={`text-white ${isCenter ? 'h-10 w-10' : 'h-8 w-8'}`} />
                      </div>
                      <CardTitle className={`font-poppins font-semibold text-gray-800 ${isCenter ? 'text-2xl' : 'text-xl'}`}>
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className={`text-gray-600 font-inter text-center leading-relaxed ${isCenter ? 'text-base' : 'text-sm'}`}>
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg z-30"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg z-30"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-arcadia-orange to-arcadia-magenta' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
