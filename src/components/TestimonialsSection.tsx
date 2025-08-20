import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles, User, Building, Heart } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const starsRef = useRef([]);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO & Fundadora",
      content: "A Arcadia transformou nossa visão em uma plataforma incrível. O resultado superou nossas expectativas em design e funcionalidade. A equipe demonstrou um profissionalismo excepcional!",
      rating: 5,
      company: "TechStart",
      avatar: "MS",
      gradient: "from-orange-500 to-pink-500",
      bgGradient: "from-orange-500/20 to-pink-500/20"
    },
    {
      name: "João Santos",
      role: "Diretor de Marketing",
      content: "Profissionalismo excepcional e entrega no prazo. Nossa landing page aumentou as conversões em 300%. Recomendo sem hesitação para qualquer empresa que busca excelência digital.",
      rating: 5,
      company: "InovaCorp",
      avatar: "JS",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      name: "Ana Costa",
      role: "Fundadora & Designer",
      content: "Equipe criativa e técnica impressionante. Eles realmente entendem de UX e sabem como criar experiências memoráveis. O processo foi colaborativo e o resultado, simplesmente perfeito!",
      rating: 5,
      company: "DesignLab",
      avatar: "AC",
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-500/20 to-blue-500/20"
    },
    {
      name: "Carlos Oliveira",
      role: "CTO & Co-fundador",
      content: "Código limpo, arquitetura sólida e suporte contínuo. A parceria com a Arcadia elevou nosso produto a um novo patamar. Expertise técnica e criatividade em perfeita harmonia.",
      rating: 5,
      company: "FutureTech",
      avatar: "CO",
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-500/20 to-purple-500/20"
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

  // Auto-play testimonials
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 bg-transparent overflow-hidden"
    >

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-pink-400 mr-2 animate-pulse" />
              <span className="text-pink-400 font-medium tracking-wider uppercase text-sm">
                Depoimentos
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">O que nossos </span>
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
                clientes
              </span>
              <span className="text-white"> dizem</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Depoimentos reais de quem confia no nosso trabalho e viu seus projetos
              se transformarem em sucessos digitais
            </p>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>

          {/* Background Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${currentTest.bgGradient} rounded-3xl blur-2xl opacity-60`} />

          {/* Main Card */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 hover:bg-white/15 transition-all duration-500">

            {/* Quote Icon */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${currentTest.gradient} rounded-2xl shadow-lg mb-6`}>
                <Quote className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center mb-8">
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic">
                "{currentTest.content}"
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-8">
                {Array.from({ length: currentTest.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 text-yellow-400 fill-current mx-1 animate-pulse`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-6">
              {/* Avatar */}
              <div className={`relative w-16 h-16 bg-gradient-to-r ${currentTest.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {currentTest.avatar}
                <div className={`absolute inset-0 bg-gradient-to-r ${currentTest.gradient} rounded-2xl blur-md opacity-50`} />
              </div>

              {/* Author Details */}
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-1">
                  {currentTest.name}
                </h4>
                <p className="text-gray-300 mb-1">
                  {currentTest.role}
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <Building className="w-4 h-4 text-gray-400" />
                  <span className={`text-sm font-semibold bg-gradient-to-r ${currentTest.gradient} bg-clip-text text-transparent`}>
                    {currentTest.company}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-6 mt-12">
              {/* Previous Button */}
              <button
                onClick={prevTestimonial}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6 text-white group-hover:text-orange-400 transition-colors" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`transition-all duration-300 rounded-full ${index === currentTestimonial
                        ? `w-12 h-4 bg-gradient-to-r ${currentTest.gradient}`
                        : 'w-4 h-4 bg-white/30 hover:bg-white/50'
                      }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextTestimonial}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-6 w-6 text-white group-hover:text-orange-400 transition-colors" />
              </button>
            </div>

            {/* Auto-play Indicator */}
            <div className="text-center mt-6">
              <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                <Sparkles className={`w-4 h-4 ${isAutoPlaying ? 'animate-pulse text-yellow-400' : ''}`} />
                <span>{isAutoPlaying ? 'Reprodução automática ativa' : 'Reprodução pausada'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className={`grid md:grid-cols-3 gap-8 mt-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          {[
            {
              number: "50+",
              label: "Projetos Entregues",
              icon: Building,
              gradient: "from-orange-500 to-pink-500"
            },
            {
              number: "100%",
              label: "Clientes Satisfeitos",
              icon: Heart,
              gradient: "from-pink-500 to-purple-500"
            },
            {
              number: "5★",
              label: "Avaliação Média",
              icon: Star,
              gradient: "from-purple-500 to-teal-500"
            }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl mx-auto flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                    <StatIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl blur-xl opacity-30`} />
                </div>

                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            );
          })}
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

export default TestimonialsSection;