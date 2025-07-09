
import { CheckCircle, Users, Palette, Code, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Cada projeto é único e desenvolvido pensando nas suas necessidades específicas"
    },
    {
      icon: Palette,
      title: "Experiência em Design",
      description: "Criamos interfaces que não apenas funcionam, mas encantam e engajam"
    },
    {
      icon: Code,
      title: "Soluções Escaláveis",
      description: "Desenvolvemos pensando no crescimento do seu negócio"
    },
    {
      icon: Zap,
      title: "Agilidade e Qualidade",
      description: "Entregamos projetos no prazo sem comprometer a excelência"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
              Nossa <span className="bg-gradient-to-r from-arcadia-purple to-arcadia-teal bg-clip-text text-transparent">Essência</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
              Combinamos criatividade, tecnologia e estratégia para criar soluções digitais que fazem a diferença.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="h-8 w-8 text-arcadia-teal" />
                <h3 className="text-2xl font-poppins font-semibold text-gray-800">
                  Desde o front-end ao back-end, entregamos soluções que encantam e funcionam.
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                Na Arcadia, acreditamos que cada linha de código conta uma história. Trabalhamos com tecnologias modernas e metodologias ágeis para transformar suas ideias em realidade digital.
              </p>
              
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                Nossa equipe multidisciplinar combina expertise técnica com sensibilidade criativa, garantindo que cada projeto seja único e impactante.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-arcadia-orange/20 via-arcadia-magenta/20 to-arcadia-purple/20 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-center h-48 bg-gradient-to-br from-arcadia-teal to-arcadia-purple rounded-lg mb-4">
                    <Code className="h-20 w-20 text-white" />
                  </div>
                  <h4 className="text-xl font-poppins font-semibold text-gray-800 mb-2">Interface Moderna</h4>
                  <p className="text-gray-600 font-inter">Design responsivo e experiência intuitiva</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-arcadia-orange/10 to-arcadia-magenta/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:from-arcadia-orange/20 group-hover:to-arcadia-magenta/20 transition-all duration-300">
                  <highlight.icon className="h-10 w-10 text-arcadia-purple" />
                </div>
                <h4 className="text-lg font-poppins font-semibold text-gray-800 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 font-inter">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
