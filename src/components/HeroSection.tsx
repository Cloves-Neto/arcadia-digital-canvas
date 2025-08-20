import { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Users, Code, Palette, Heart } from 'lucide-react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [layoutState, setLayoutState] = useState(0);

  const elements = {
    header: {
      0: { x: 0, y: 0, width: 100, height: 12, zIndex: 1 },
      1: { x: 0, y: 0, width: 100, height: 15, zIndex: 1 },
      2: { x: 0, y: 0, width: 100, height: 12, zIndex: 1 },
    },
    sidebar: {
      0: { x: 0, y: 15, width: 30, height: 70, zIndex: 2 },
      1: { x: 75, y: 20, width: 25, height: 55, zIndex: 2 },
      2: { x: 0, y: 15, width: 15, height: 80, zIndex: 2 },
    },
    main: {
      0: { x: 35, y: 15, width: 65, height: 45, zIndex: 3 },
      1: { x: 0, y: 20, width: 70, height: 30, zIndex: 3 },
      2: { x: 20, y: 15, width: 55, height: 35, zIndex: 3 },
    },
    card1: {
      0: { x: 35, y: 65, width: 30, height: 20, zIndex: 4 },
      1: { x: 0, y: 55, width: 32, height: 20, zIndex: 4 },
      2: { x: 20, y: 55, width: 25, height: 40, zIndex: 4 },
    },
    // Amarelo
    card2: {
      0: { x: 70, y: 65, width: 30, height: 20, zIndex: 4 },
      1: { x: 35, y: 55, width: 35, height: 20, zIndex: 4 },
      2: { x: 50, y: 55, width: 25, height: 40, zIndex: 4 },
    },
    footer: {
      0: { x: 0, y: 88, width: 100, height: 12, zIndex: 5 },
      1: { x: 0, y: 80, width: 100, height: 10, zIndex: 5 },
      2: { x: 80, y: 15, width: 20, height: 80, zIndex: 5 },
    },
  };

  const elementColors = {
    header: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    sidebar: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    main: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    card1: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    card2: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    footer: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  };

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Cicla entre os layouts com timing variado
    const layoutInterval = setInterval(() => {
      setLayoutState(prev => (prev + 1) % 3);
    }, 2000);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(layoutInterval);
    };
  }, []);

  const features = [
    { icon: Code, text: 'Sites Personalizáveis', color: 'from-orange-500 to-yellow-500' },
    { icon: Users, text: 'Atendimento Humanizado', color: 'from-purple-500 to-pink-500' },
    { icon: Palette, text: 'Design Criativo', color: 'from-teal-500 to-blue-500' }
  ];

  const layoutNames = ['Desktop Layout', 'Mobile Layout', 'Sidebar Layout'];

  return (
    <div className="relative min-h-screen z-10 overflow-hidden bg-transparent">


      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">

          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 lg:pr-12">
            <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Sparkles className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
                <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">
                  Tecnologia + Criatividade
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Criamos Sites
                </span>
                <br />
                <span className="text-white">
                  Únicos Para Você
                </span>
              </h1>

              <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Transformamos suas ideias em experiências digitais incríveis com design personalizado
                e atendimento verdadeiramente humano. Cada projeto é único, assim como você.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-500 hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all">
                      <feature.icon className={`w-4 h-4 mr-2 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                      <span className="text-white text-sm font-medium">
                        {feature.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group relative overflow-hidden bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
                  <span className="relative z-10 flex items-center justify-center">
                    Começar Meu Projeto
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                <button className="group flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                  <Heart className="w-5 h-5 mr-2 text-pink-400" />
                  Ver Nosso Trabalho
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="lg:w-1/2 mt-16 lg:mt-0">
            <div className={`transform transition-all duration-1200 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
              <div className="relative">
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  {/* Mock Website Preview with Fluid Transforms */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 mb-6 relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>

                    {/* Container com dimensões controladas */}
                    <div className="relative w-full h-80 rounded-lg">
                      {Object.entries(elements).map(([elementId, positions]) => {
                        const currentPos = positions[layoutState];
                        return (
                          <div
                            key={elementId}
                            className="absolute rounded shadow-lg"
                            style={{
                              background: elementColors[elementId],
                              left: `${currentPos.x}%`,
                              top: `${currentPos.y}%`,
                              width: `${currentPos.width}%`,
                              height: `${currentPos.height}%`,
                              zIndex: currentPos.zIndex,
                              transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
                              opacity: 0.85,
                              transform: 'translateZ(0)',
                            }}
                          >

                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-white font-bold text-xl mb-2">
                      Seu site! Sua identidade.
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Design feito sobre medida
                    </p>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl p-4 shadow-lg animate-bounce">
                  <Code className="w-6 h-6 text-white" />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 shadow-lg animate-pulse">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}