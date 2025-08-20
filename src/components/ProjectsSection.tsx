import { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Monitor,
  ShoppingCart,
  BarChart3,
  Sparkles,
  Star,
  ArrowRight,
  Eye,
  Github,
  Play,
  Pause
} from "lucide-react";

const ProjectsSection = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(true);
  const sectionRef = useRef(null);
  const starsRef = useRef([]);
  const intervalRef = useRef(null);

  const projects = [
    {
      title: "E-commerce Inovador",
      description: "Plataforma completa de vendas online com design moderno, sistema de pagamentos integrado, gestão de estoque em tempo real e experiência excepcional do usuário em todos os dispositivos.",
      category: "E-commerce",
      icon: ShoppingCart,
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      gradient: "from-orange-500 to-pink-500",
      bgGradient: "from-orange-500/20 to-pink-500/20",
      iconColor: "text-orange-500",
      stats: { views: "2.5K", conversions: "12%", performance: "98%" }
    },
    {
      title: "Dashboard Analítico",
      description: "Sistema avançado de visualização de dados em tempo real para empresas de logística, com métricas detalhadas, relatórios automatizados e insights inteligentes para tomada de decisões.",
      category: "Web App",
      icon: BarChart3,
      technologies: ["React", "TypeScript", "D3.js", "Python"],
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-500/20 to-blue-500/20",
      iconColor: "text-purple-500",
      stats: { users: "500+", data: "1TB+", uptime: "99.9%" }
    },
    {
      title: "Landing Page Corporativa",
      description: "Site institucional de alta conversão com design impactante, animações fluidas, otimização SEO avançada e integração completa com ferramentas de marketing digital.",
      category: "Landing Page",
      icon: Monitor,
      technologies: ["React", "Tailwind", "Framer Motion", "Vercel"],
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-500/20 to-blue-500/20",
      iconColor: "text-teal-500",
      stats: { speed: "95+", seo: "100%", mobile: "Perfect" }
    },
    {
      title: "App Mobile Híbrido",
      description: "Aplicativo multiplataforma com interface nativa, sincronização offline, notificações push inteligentes e experiência fluida tanto em iOS quanto Android.",
      category: "Mobile App",
      icon: Smartphone,
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-500/20 to-purple-500/20",
      iconColor: "text-pink-500",
      stats: { downloads: "10K+", rating: "4.8★", retention: "85%" }
    },
    {
      title: "Sistema de Gestão",
      description: "ERP personalizado para pequenas e médias empresas, com módulos de vendas, estoque, financeiro, relatórios avançados e integração com sistemas externos.",
      category: "ERP System",
      icon: Code,
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
      gradient: "from-orange-500 to-purple-500",
      bgGradient: "from-orange-500/20 to-purple-500/20",
      iconColor: "text-orange-500",
      stats: { efficiency: "+40%", errors: "-60%", roi: "300%" }
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
        setActiveProject((prev) => (prev + 1) % projects.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, projects.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Get the current project's icon component
  const CurrentProjectIcon = projects[activeProject].icon;

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-gray-900 overflow-hidden"
    >
      <div className="relative inset-0 z-10 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
              <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">
                Nosso Portfólio
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Projetos </span>
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Excepcionais
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Conheça alguns dos projetos que desenvolvemos com paixão, tecnologia de ponta
              e dedicação total aos nossos clientes
            </p>
          </div>
        </div>

        {/* Main Project Showcase */}
        <div className="relative mb-16">
          {/* Featured Project */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
            <div className="relative">
              {/* Glowing Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${projects[activeProject].bgGradient} rounded-3xl blur-2xl opacity-60`} />

              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 hover:bg-white/15 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Side - Project Visual */}
                  <div className="relative">
                    {/* Project Preview Area */}
                    <div className={`bg-gradient-to-br ${projects[activeProject].gradient} rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden group`}>
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full animate-pulse" />
                        <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-lg animate-bounce" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white rounded-full opacity-50" />
                      </div>

                      {/* Project Icon */}
                      <div className="relative z-10 text-center">
                        <div className="bg-white/20 backdrop-blur-md rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <CurrentProjectIcon className="h-12 w-12 text-white" />
                        </div>
                        <span className="text-white font-semibold text-lg">
                          {projects[activeProject].category}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-colors">
                          <Eye className="w-4 h-4 text-white" />
                        </button>
                        <button className="bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-colors">
                          <Github className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {Object.entries(projects[activeProject].stats).map(([key, value], index) => (
                        <div key={key} className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/10">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${projects[activeProject].gradient} bg-clip-text text-transparent`}>
                            {value}
                          </div>
                          <div className="text-gray-400 text-sm capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Project Info */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-4">
                        {projects[activeProject].title}
                      </h3>
                      <p className="text-xl text-gray-300 leading-relaxed">
                        {projects[activeProject].description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Code className="w-5 h-5 mr-2" />
                        Tecnologias Utilizadas
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {projects[activeProject].technologies.map((tech, index) => (
                          <span
                            key={index}
                            className={`px-4 py-2 bg-gradient-to-r ${projects[activeProject].gradient} bg-opacity-20 text-white rounded-full text-sm font-medium border border-white/20`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button className={`group bg-gradient-to-r ${projects[activeProject].gradient} text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center`}>
                        <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                        Ver Projeto
                      </button>
                      <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center">
                        <Play className="w-5 h-5 mr-2" />
                        Demo Live
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Play/Pause Control */}
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={togglePlayPause}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300"
            >
              {isPlaying ?
                <Pause className="h-5 w-5 text-white" /> :
                <Play className="h-5 w-5 text-white" />
              }
            </button>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center items-center gap-4 mb-12">
          {projects.map((project, index) => {
            const ProjectNavIcon = project.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`group relative transition-all duration-300 ${index === activeProject
                    ? 'scale-110'
                    : 'scale-90 opacity-60 hover:scale-95 hover:opacity-80'
                  }`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center ${index === activeProject ? 'shadow-xl' : ''
                  }`}>
                  <ProjectNavIcon className="w-8 h-8 text-white" />
                </div>

                {index === activeProject && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                  </div>
                )}

                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-gray-400">{project.category}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-white/10 rounded-full h-1 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${projects[activeProject].gradient} transition-all duration-300 rounded-full`}
              style={{
                width: `${((activeProject + 1) / projects.length) * 100}%`,
                transition: 'width 0.5s ease-in-out'
              }}
            />
          </div>
          <div className="text-center mt-2">
            <span className="text-sm text-gray-400">
              {activeProject + 1} de {projects.length} projetos
            </span>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                Gostou do que viu? Vamos criar algo incrível juntos!
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Cada projeto é único e desenvolvido especialmente para atender suas necessidades
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300">
                  <span className="flex items-center justify-center">
                    Ver Todos os Projetos
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300">
                  Começar Meu Projeto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProjectsSection;