
import { Heart, Users, Zap, Shield } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description: "Cada cliente é único e merece uma abordagem exclusiva e dedicada"
    },
    {
      icon: Users,
      title: "Equipe Criativa e Técnica",
      description: "Profissionais especializados que combinam arte e ciência"
    },
    {
      icon: Zap,
      title: "Entrega Ágil com Alta Qualidade",
      description: "Metodologias modernas que garantem rapidez sem comprometer a excelência"
    },
    {
      icon: Shield,
      title: "Transparência nos Processos",
      description: "Comunicação clara e acompanhamento em tempo real do seu projeto"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-arcadia-purple to-arcadia-teal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
              Diferenciais da <span className="text-arcadia-orange">Arcadia</span>
            </h2>
            <p className="text-xl text-white/90 font-inter max-w-2xl mx-auto">
              O que nos torna únicos no mercado de desenvolvimento digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <differential.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-white mb-4">
                  {differential.title}
                </h3>
                <p className="text-white/90 font-inter leading-relaxed">
                  {differential.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
