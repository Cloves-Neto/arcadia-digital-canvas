import { useState, useEffect, useRef } from "react";
import {
  Palette, Code, Globe, Zap, Settings,
  ChevronLeft, ChevronRight, ArrowRight,
  Sparkles, Play, Pause
} from "lucide-react";

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const services = [
    {
      icon: Palette,
      title: "Design Responsivo e UI/UX",
      description: "Criamos interfaces modernas, intuitivas e que se adaptam a qualquer dispositivo, priorizando a experiência do usuário.",
      gradient: "from-orange-500 to-pink-500",
      bgGradient: "from-orange-500/20 to-pink-500/20",
      color: "orange",
      features: ["Design System", "Prototipagem", "Testes de Usabilidade"]
    },
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Soluções completas com React, Node.js e Tailwind CSS. Código limpo, escalável e performático.",
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-500/20 to-purple-500/20",
      color: "pink",
      features: ["React/Next.js", "Node.js/Express", "APIs REST"]
    },
    {
      icon: Globe,
      title: "Landing Pages e Portfólios",
      description: "Páginas profissionais que convertem visitantes em clientes, com foco em performance e SEO.",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-500/20 to-blue-500/20",
      color: "purple",
      features: ["SEO Otimizado", "Alta Conversão", "Performance"]
    },
    {
      icon: Zap,
      title: "Animações e Interatividade",
      description: "Microinterações e animações que tornam a experiência mais envolvente e memorável.",
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-500/20 to-blue-500/20",
      color: "teal",
      features: ["Framer Motion", "CSS Animations", "3D Effects"]
    },
    {
      icon: Settings,
      title: "Manutenção e Otimização",
      description: "Suporte contínuo, atualizações de segurança e melhorias de performance para seu projeto.",
      gradient: "from-orange-500 to-purple-500",
      bgGradient: "from-orange-500/20 to-purple-500/20",
      color: "orange",
      features: ["Monitoramento", "Updates", "Backup"]
    }
  ];

  useEffect(() => {
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

  // Auto-play carousel
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, services.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + services.length) % services.length;
      visible.push({ ...services[index], position: i, originalIndex: index });
    }
    return visible;
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-transparent overflow-hidden"
    >

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
              <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">
                Nossos Serviços
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Soluções </span>
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Completas
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transformamos suas ideias em realidade digital com tecnologia de ponta
              e design que converte
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">

          {/* Main Carousel */}
          <div className="flex items-center justify-center gap-8 min-h-[600px] perspective-1000">
            {getVisibleServices().map((service, index) => {
              const isCenter = service.position === 0;
              const isLeft = service.position === -1;
              const isRight = service.position === 1;

              return (
                <div
                  key={`${currentIndex}-${index}`}
                  className={`
                    relative transition-all duration-700 cursor-pointer group
                    ${isCenter
                      ? 'scale-110 z-30 hover:scale-115'
                      : 'scale-75 z-10 opacity-60 hover:scale-80 hover:opacity-80'
                    }
                    ${isLeft ? 'transform-gpu -rotate-y-12 -translate-x-8' : ''}
                    ${isRight ? 'transform-gpu rotate-y-12 translate-x-8' : ''}
                    ${isCenter ? 'w-96' : 'w-80'}
                  `}
                  onClick={() => {
                    if (!isCenter) {
                      if (isLeft) prevSlide();
                      if (isRight) nextSlide();
                    }
                  }}
                >
                  {/* Glowing Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Main Card */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-300">

                    {/* Icon */}
                    <div className="text-center mb-6">
                      <div className={`
                        bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                        ${isCenter ? 'w-20 h-20' : 'w-16 h-16'}
                      `}>
                        <service.icon className={`text-white ${isCenter ? 'h-10 w-10' : 'h-8 w-8'}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center mb-6">
                      <h3 className={`font-bold text-white mb-4 ${isCenter ? 'text-2xl' : 'text-xl'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-gray-300 leading-relaxed ${isCenter ? 'text-base' : 'text-sm'}`}>
                        {service.description}
                      </p>
                    </div>

                    {/* Features - Only show on center card */}
                    {isCenter && (
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-gray-400 text-sm"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CTA Button - Only on center */}
                    {isCenter && (
                      <div className="text-center">
                        <button className={`group/btn bg-gradient-to-r ${service.gradient} text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg`}>
                          <span className="flex items-center justify-center">
                            Saiba Mais
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </button>
                      </div>
                    )}

                    {/* Card Index Indicator */}
                    <div className="absolute top-4 right-4">
                      <span className="text-gray-500 text-sm">
                        {String(service.originalIndex + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-40">
            <button
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-40">
            <button
              onClick={nextSlide}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Play/Pause Button */}
          <div className="absolute top-4 right-4 z-40">
            <button
              onClick={togglePlayPause}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 hover:bg-white/20 transition-all duration-300"
            >
              {isPlaying ?
                <Pause className="h-4 w-4 text-white" /> :
                <Play className="h-4 w-4 text-white" />
              }
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {services.map((service, index) => (
            <button
              key={index}
              className={`group transition-all duration-300 ${
                index === currentIndex ? 'scale-110' : 'hover:scale-105'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === currentIndex
                  ? `bg-gradient-to-r ${service.gradient} shadow-lg`
                  : 'bg-white/30 hover:bg-white/50'
                }
              `} />
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-white/10 rounded-full h-1 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${services[currentIndex].gradient} transition-all duration-300 rounded-full`}
              style={{
                width: `${((currentIndex + 1) / services.length) * 100}%`,
                transition: 'width 0.5s ease-in-out'
              }}
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;