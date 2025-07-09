
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, TechStart",
      content: "A Arcadia transformou nossa visão em uma plataforma incrível. O resultado superou nossas expectativas em design e funcionalidade.",
      rating: 5,
      company: "TechStart"
    },
    {
      name: "João Santos",
      role: "Diretor de Marketing, InovaCorp",
      content: "Profissionalismo excepcional e entrega no prazo. Nossa landing page aumentou as conversões em 300%.",
      rating: 5,
      company: "InovaCorp"
    },
    {
      name: "Ana Costa",
      role: "Fundadora, DesignLab",
      content: "Equipe criativa e técnica impressionante. Eles realmente entendem de UX e sabem como criar experiências memoráveis.",
      rating: 5,
      company: "DesignLab"
    },
    {
      name: "Carlos Oliveira",
      role: "CTO, FutureTech",
      content: "Código limpo, arquitetura sólida e suporte contínuo. Parceria que recomendo sem hesitar.",
      rating: 5,
      company: "FutureTech"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
              O que nossos <span className="bg-gradient-to-r from-arcadia-magenta to-arcadia-purple bg-clip-text text-transparent">clientes</span> dizem
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Depoimentos reais de quem confia no nosso trabalho
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-lg">
            <Quote className="h-12 w-12 text-arcadia-orange mb-6 mx-auto" />
            
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-gray-700 font-inter leading-relaxed mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </p>
              
              <div className="flex justify-center mb-4">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-arcadia-orange fill-current" />
                ))}
              </div>
              
              <div className="space-y-1">
                <h4 className="text-xl font-poppins font-semibold text-gray-800">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600 font-inter">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-sm text-arcadia-purple font-inter font-medium">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full border-arcadia-orange text-arcadia-orange hover:bg-arcadia-orange hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-arcadia-orange' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full border-arcadia-orange text-arcadia-orange hover:bg-arcadia-orange hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
