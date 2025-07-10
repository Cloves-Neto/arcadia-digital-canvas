
import { ExternalLink, Code, Palette, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Inovador",
      description: "Plataforma completa de vendas online com design moderno e experiência excepcional do usuário.",
      category: "E-commerce",
      icon: <Smartphone className="h-6 w-6" />,
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "Stripe"],
      gradient: "from-arcadia-orange to-arcadia-magenta"
    },
    {
      title: "Dashboard Analítico",
      description: "Sistema de visualização de dados em tempo real para empresas de logística.",
      category: "Web App",
      icon: <Code className="h-6 w-6" />,
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Charts"],
      gradient: "from-arcadia-purple to-arcadia-teal"
    },
    {
      title: "Landing Page Corporativa",
      description: "Site institucional com foco em conversão e experiência visual impactante.",
      category: "Landing Page",
      icon: <Palette className="h-6 w-6" />,
      image: "/placeholder.svg",
      technologies: ["React", "Tailwind", "Framer Motion"],
      gradient: "from-arcadia-teal to-arcadia-orange"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Nossos{' '}
            <span className="bg-gradient-to-r from-arcadia-orange via-arcadia-magenta to-arcadia-purple bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-xl font-inter text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com paixão e dedicação para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-white text-center">
                    {project.icon}
                    <p className="mt-2 font-inter font-medium">{project.category}</p>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="font-poppins text-xl text-gray-800">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 font-inter mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-inter rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-arcadia-orange group-hover:text-white group-hover:border-arcadia-orange transition-all duration-300"
                >
                  Ver Projeto <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-arcadia-orange hover:bg-arcadia-magenta text-white font-inter font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
