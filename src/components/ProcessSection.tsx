
import { MessageCircle, Lightbulb, Code, Rocket, Settings, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Conversamos sobre sua ideia",
      description: "Entendemos suas necessidades, objetivos e visão para criar a solução perfeita"
    },
    {
      icon: Lightbulb,
      number: "02", 
      title: "Planejamos juntos",
      description: "Definimos escopo, funcionalidades, cronograma e apresentamos nossa proposta detalhada"
    },
    {
      icon: Code,
      number: "03",
      title: "Desenvolvemos com qualidade",
      description: "Codificamos sua solução usando as melhores tecnologias e práticas do mercado"
    },
    {
      icon: Rocket,
      number: "04",
      title: "Entregamos e colocamos no ar",
      description: "Testamos, refinamos e fazemos o deploy da sua aplicação para o mundo"
    },
    {
      icon: Settings,
      number: "05",
      title: "Acompanhamos e otimizamos",
      description: "Oferecemos suporte contínuo, atualizações e melhorias para manter tudo funcionando perfeitamente"
    },
    {
      icon: CheckCircle,
      number: "06",
      title: "Seu sucesso é nosso sucesso",
      description: "Celebramos os resultados alcançados e continuamos disponíveis para novos desafios"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-arcadia-orange to-arcadia-magenta rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-arcadia-purple to-arcadia-teal rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-gradient-to-br from-arcadia-teal to-arcadia-orange rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
              Nosso <span className="bg-gradient-to-r from-arcadia-orange to-arcadia-magenta bg-clip-text text-transparent">Processo</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
              Um passo a passo transparente e eficiente para transformar sua ideia em realidade digital
            </p>
          </div>

          {/* Horizontal Process Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-arcadia-orange via-arcadia-magenta to-arcadia-purple"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative z-10">
                    {/* Step Number */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-gradient-to-br from-arcadia-orange to-arcadia-magenta rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-20">
                        <span className="text-white font-poppins font-bold text-lg">{step.number}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-gradient-to-br from-arcadia-purple/10 to-arcadia-teal/10 rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-6 w-6 text-arcadia-purple" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-3 text-center">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 font-inter leading-relaxed text-sm text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-arcadia-orange/10 via-arcadia-magenta/10 to-arcadia-purple/10 rounded-2xl p-8">
              <h3 className="text-2xl font-poppins font-semibold text-gray-800 mb-4">
                Transparência total em cada etapa
              </h3>
              <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
                Você acompanha todo o desenvolvimento através de nossa plataforma de gestão de projetos, 
                com atualizações regulares e comunicação constante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
