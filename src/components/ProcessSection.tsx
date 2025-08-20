import { useState, useEffect, useRef } from "react";
import {
  MessageCircle, Lightbulb, Code, Rocket, Settings, CheckCircle,
  ArrowRight, Sparkles, Star
} from "lucide-react";

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const starsRef = useRef([]);

  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Conversamos sobre sua ideia",
      description: "Entendemos suas necessidades, objetivos e visão para criar a solução perfeita. Fazemos uma análise detalhada do seu negócio e definimos os melhores caminhos para alcançar seus objetivos.",
      gradient: "from-orange-500 to-pink-500",
      bgGradient: "from-orange-500/30 to-pink-500/30",
      iconColor: "text-orange-500"
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Planejamos juntos",
      description: "Definimos escopo, funcionalidades, cronograma e apresentamos nossa proposta detalhada. Criamos wireframes, definimos a arquitetura e estabelecemos marcos claros para o projeto.",
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-500/30 to-purple-500/30",
      iconColor: "text-pink-500"
    },
    {
      icon: Code,
      number: "03",
      title: "Desenvolvemos com qualidade",
      description: "Codificamos sua solução usando as melhores tecnologias e práticas do mercado. Mantemos código limpo, escalável e seguimos rigorosamente os padrões de qualidade da indústria.",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-500/30 to-blue-500/30",
      iconColor: "text-purple-500"
    },
    {
      icon: Rocket,
      number: "04",
      title: "Entregamos e colocamos no ar",
      description: "Testamos, refinamos e fazemos o deploy da sua aplicação para o mundo. Realizamos testes completos, otimizamos a performance e garantimos que tudo funcione perfeitamente.",
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-500/30 to-blue-500/30",
      iconColor: "text-teal-500"
    },
    {
      icon: Settings,
      number: "05",
      title: "Acompanhamos e otimizamos",
      description: "Oferecemos suporte contínuo, atualizações de segurança e melhorias de performance para manter tudo funcionando perfeitamente. Monitora­mos constantemente a saúde da aplicação.",
      gradient: "from-orange-500 to-purple-500",
      bgGradient: "from-orange-500/30 to-purple-500/30",
      iconColor: "text-orange-500"
    },
    {
      icon: CheckCircle,
      number: "06",
      title: "Seu sucesso é nosso sucesso",
      description: "Celebramos os resultados alcançados e continuamos disponíveis para novos desafios. Analisamos métricas, coletamos feedback e planejamos futuras melhorias e expansões.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/30 to-pink-500/30",
      iconColor: "text-purple-500"
    }
  ];

  // Generate stars
  const generateStars = () => {
    const starColors = [
      'text-orange-400', 'text-pink-400', 'text-purple-400',
      'text-teal-400', 'text-blue-400', 'text-yellow-400'
    ];

    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      animationDelay: Math.random() * 5,
      animationDuration: 3 + Math.random() * 4
    }));
  };

  useEffect(() => {
    starsRef.current = generateStars();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gray-900 overflow-hidden">

      {/* Fixed Starry Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated Gradient Background */}
        <div
          className="absolute inset-0 opacity-40 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(255, 107, 53, 0.15) 0%,
              rgba(247, 147, 30, 0.1) 20%,
              rgba(199, 65, 132, 0.15) 40%,
              rgba(114, 9, 183, 0.1) 60%,
              rgba(6, 214, 160, 0.15) 80%,
              transparent 100%)`
          }}
        />

        {/* Large Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float opacity-20 ${
              i % 2 === 0 ? 'animate-pulse' : ''
            }`}
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${10 + (i * 15)}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${6 + (i * 0.5)}s`
            }}
          >
            <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${steps[i].gradient} blur-xl`} />
          </div>
        ))}
      </div>

      {/* Header Section */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center">
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
                <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">
                  Como Trabalhamos
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Nosso </span>
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Processo
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Um fluxo transparente e colaborativo para transformar sua visão
                em realidade digital excepcional
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Cards Section */}
      <div className="relative z-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="sticky top-0 min-h-screen flex items-center justify-center py-20"
            style={{
              zIndex: 10 + index,
            }}
          >
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <div className={`group transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`} style={{animationDelay: `${index * 100}ms`}}>

                  {/* Glowing Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110`} />

                  {/* Main Glass Card */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 hover:bg-white/15 hover:border-white/30 transition-all duration-500 shadow-2xl hover:shadow-3xl group-hover:scale-105">

                    {/* Grid Layout */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                      {/* Left Side - Visual Elements */}
                      <div className="text-center md:text-left order-2 md:order-1">
                        {/* Step Number with Enhanced Design */}
                        <div className="flex items-center justify-center md:justify-start mb-8">
                          <div className={`bg-gradient-to-br ${step.gradient} rounded-full w-28 h-28 flex items-center justify-center group-hover:scale-125 transition-all duration-700 shadow-2xl relative overflow-hidden`}>
                            <span className="text-white font-bold text-4xl relative z-10">{step.number}</span>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse rounded-full" />

                            {/* Sparkle Effect */}
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Sparkles className="w-4 h-4 text-white/80 animate-spin" />
                            </div>
                          </div>
                        </div>

                        {/* Icon Container */}
                        <div className="flex items-center justify-center md:justify-start mb-8">
                          <div className={`bg-white/20 backdrop-blur-md rounded-full w-24 h-24 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl border border-white/30`}>
                            <step.icon className={`h-12 w-12 ${step.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                          </div>
                        </div>

                        {/* Progress Visualization */}
                        <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
                          {steps.map((_, i) => (
                            <div
                              key={i}
                              className={`transition-all duration-500 rounded-full ${
                                i <= index
                                  ? `w-4 h-4 bg-gradient-to-r ${step.gradient} shadow-lg`
                                  : 'w-3 h-3 bg-white/20'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="order-1 md:order-2">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-white transition-colors duration-300 leading-tight">
                          {step.title}
                        </h3>

                        <p className="text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-8">
                          {step.description}
                        </p>

                        {/* Step Counter */}
                        <div className="flex items-center space-x-4 text-gray-400">
                          <span className="text-sm font-medium">
                            Etapa {index + 1} de {steps.length}
                          </span>
                          <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${step.gradient} transition-all duration-1000 rounded-full`}
                              style={{
                                width: `${((index + 1) / steps.length) * 100}%`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute -top-6 -right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} blur-md animate-pulse`} />
                    </div>

                    <div className="absolute -bottom-6 -left-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.gradient} blur-sm animate-bounce`} />
                    </div>

                    {/* Interactive Corner Stars */}
                    <div className="absolute top-4 right-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <Star className={`w-6 h-6 ${step.iconColor} animate-pulse`} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA Section */}
      <div className="relative z-20 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl" />

              {/* Main CTA Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center hover:bg-white/15 transition-all duration-500 group">
                <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-4xl font-bold text-white mb-6">
                  Transparência <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">Total</span> em Cada Etapa
                </h3>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                  Você acompanha todo o desenvolvimento através de nossa plataforma,
                  com atualizações regulares, comunicação constante e acesso total ao progresso do seu projeto.
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  {[
                    { icon: Sparkles, text: "Atualizações em Tempo Real", color: "text-orange-400", bg: "from-orange-500/20 to-yellow-500/20" },
                    { icon: MessageCircle, text: "Comunicação Direta", color: "text-pink-400", bg: "from-pink-500/20 to-purple-500/20" },
                    { icon: Settings, text: "Controle Total do Projeto", color: "text-purple-400", bg: "from-purple-500/20 to-blue-500/20" }
                  ].map((feature, i) => (
                    <div key={i} className={`bg-gradient-to-br ${feature.bg} backdrop-blur-md rounded-2xl p-6 hover:scale-105 transition-all duration-300 border border-white/10`}>
                      <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-3`} />
                      <span className="text-sm font-medium text-white block">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <button className="group bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold px-10 py-5 rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-lg">
                  <span className="flex items-center justify-center">
                    Começar Meu Projeto Agora
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(180deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;