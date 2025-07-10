
import { MessageCircle, Lightbulb, Code, Rocket, Settings, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Conversamos sobre sua ideia",
      description: "Entendemos suas necessidades, objetivos e visão para criar a solução perfeita",
      color: "from-arcadia-orange to-arcadia-magenta",
      bgColor: "from-arcadia-orange/5 to-arcadia-magenta/5",
      delay: "0s"
    },
    {
      icon: Lightbulb,
      number: "02", 
      title: "Planejamos juntos",
      description: "Definimos escopo, funcionalidades, cronograma e apresentamos nossa proposta detalhada",
      color: "from-arcadia-magenta to-arcadia-purple",
      bgColor: "from-arcadia-magenta/5 to-arcadia-purple/5",
      delay: "0.1s"
    },
    {
      icon: Code,
      number: "03",
      title: "Desenvolvemos com qualidade",
      description: "Codificamos sua solução usando as melhores tecnologias e práticas do mercado",
      color: "from-arcadia-purple to-arcadia-teal",
      bgColor: "from-arcadia-purple/5 to-arcadia-teal/5",
      delay: "0.2s"
    },
    {
      icon: Rocket,
      number: "04",
      title: "Entregamos e colocamos no ar",
      description: "Testamos, refinamos e fazemos o deploy da sua aplicação para o mundo",
      color: "from-arcadia-teal to-arcadia-orange",
      bgColor: "from-arcadia-teal/5 to-arcadia-orange/5",
      delay: "0.3s"
    },
    {
      icon: Settings,
      number: "05",
      title: "Acompanhamos e otimizamos",
      description: "Oferecemos suporte contínuo, atualizações e melhorias para manter tudo funcionando perfeitamente",
      color: "from-arcadia-orange to-arcadia-purple",
      bgColor: "from-arcadia-orange/5 to-arcadia-purple/5",
      delay: "0.4s"
    },
    {
      icon: CheckCircle,
      number: "06",
      title: "Seu sucesso é nosso sucesso",
      description: "Celebramos os resultados alcançados e continuamos disponíveis para novos desafios",
      color: "from-arcadia-purple to-arcadia-magenta",
      bgColor: "from-arcadia-purple/5 to-arcadia-magenta/5",
      delay: "0.5s"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-arcadia-orange/20 to-arcadia-magenta/20 rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-arcadia-purple/20 to-arcadia-teal/20 rounded-full animate-float opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-gradient-to-br from-arcadia-teal/20 to-arcadia-orange/20 rounded-full animate-float opacity-30" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-arcadia-magenta/15 to-arcadia-purple/15 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-arcadia-orange/10 to-arcadia-magenta/10 rounded-full px-6 py-2 mb-6">
              <Sparkles className="h-5 w-5 text-arcadia-orange mr-2" />
              <span className="text-arcadia-purple font-inter font-semibold">Como trabalhamos</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-poppins font-bold text-gray-800 mb-6 leading-tight">
              Nosso{' '}
              <span className="bg-gradient-to-r from-arcadia-orange via-arcadia-magenta to-arcadia-purple bg-clip-text text-transparent relative">
                Processo
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-arcadia-orange/30 via-arcadia-magenta/30 to-arcadia-purple/30 rounded-full"></div>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed">
              Um fluxo transparente e colaborativo para transformar sua visão em realidade digital excepcional
            </p>
          </div>

          {/* Enhanced Interactive Timeline */}
          <div className="relative mb-16">
            {/* Animated Timeline Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-arcadia-orange via-arcadia-magenta via-arcadia-purple to-arcadia-teal rounded-full shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-arcadia-orange/50 via-arcadia-magenta/50 via-arcadia-purple/50 to-arcadia-teal/50 rounded-full animate-pulse"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative group animate-fade-in"
                  style={{animationDelay: step.delay}}
                >
                  {/* Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden xl:block absolute top-20 -right-3 z-30">
                      <ArrowRight className="h-6 w-6 text-gray-300 group-hover:text-arcadia-orange transition-all duration-300 transform group-hover:scale-110" />
                    </div>
                  )}
                  
                  <div className={`bg-gradient-to-br ${step.bgColor} backdrop-blur-sm border border-white/50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 relative overflow-hidden group-hover:border-white/80`}>
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    {/* Step Number with Enhanced Design */}
                    <div className="flex items-center justify-center mb-6 relative z-10">
                      <div className={`bg-gradient-to-br ${step.color} rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-arcadia-orange/25 relative`}>
                        <span className="text-white font-poppins font-bold text-xl">{step.number}</span>
                        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Icon with Enhanced Animation */}
                    <div className="flex items-center justify-center mb-6 relative z-10">
                      <div className={`bg-gradient-to-br ${step.color} bg-opacity-10 rounded-full w-14 h-14 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-md`}>
                        <step.icon className={`h-7 w-7 bg-gradient-to-br ${step.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-poppins font-bold text-gray-800 mb-4 text-center group-hover:text-gray-900 transition-colors duration-300 relative z-10">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 font-inter leading-relaxed text-sm text-center group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                      {step.description}
                    </p>

                    {/* Interactive Sparkle Effect */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="h-4 w-4 text-arcadia-orange animate-spin" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-arcadia-orange/10 via-arcadia-magenta/10 to-arcadia-purple/10 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-arcadia-orange/5 via-arcadia-magenta/5 to-arcadia-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-arcadia-orange to-arcadia-magenta rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-poppins font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  Transparência{' '}
                  <span className="bg-gradient-to-r from-arcadia-orange to-arcadia-magenta bg-clip-text text-transparent">
                    total
                  </span>{' '}
                  em cada etapa
                </h3>
                
                <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Você acompanha todo o desenvolvimento através de nossa plataforma de gestão de projetos, 
                  com atualizações regulares, comunicação constante e acesso total ao progresso do seu projeto.
                </p>

                {/* Interactive Features */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white/50 rounded-2xl p-4 hover:bg-white/70 transition-all duration-300 hover:scale-105">
                    <Sparkles className="h-6 w-6 text-arcadia-orange mx-auto mb-2" />
                    <span className="text-sm font-inter font-semibold text-gray-700">Atualizações em tempo real</span>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-4 hover:bg-white/70 transition-all duration-300 hover:scale-105">
                    <MessageCircle className="h-6 w-6 text-arcadia-magenta mx-auto mb-2" />
                    <span className="text-sm font-inter font-semibold text-gray-700">Comunicação direta</span>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-4 hover:bg-white/70 transition-all duration-300 hover:scale-105">
                    <Settings className="h-6 w-6 text-arcadia-purple mx-auto mb-2" />
                    <span className="text-sm font-inter font-semibold text-gray-700">Controle total</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
