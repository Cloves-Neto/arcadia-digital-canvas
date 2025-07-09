
import { Palette, Code, Globe, Zap, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Design Responsivo e UI/UX",
      description: "Criamos interfaces modernas, intuitivas e que se adaptam a qualquer dispositivo, priorizando a experiência do usuário.",
      gradient: "from-arcadia-orange to-arcadia-magenta",
      bgColor: "bg-gradient-to-br from-arcadia-orange/10 to-arcadia-magenta/10"
    },
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Soluções completas com React, Node.js e Tailwind CSS. Código limpo, escalável e performático.",
      gradient: "from-arcadia-magenta to-arcadia-purple",
      bgColor: "bg-gradient-to-br from-arcadia-magenta/10 to-arcadia-purple/10"
    },
    {
      icon: Globe,
      title: "Landing Pages e Portfólios",
      description: "Páginas profissionais que convertem visitantes em clientes, com foco em performance e SEO.",
      gradient: "from-arcadia-purple to-arcadia-teal",
      bgColor: "bg-gradient-to-br from-arcadia-purple/10 to-arcadia-teal/10"
    },
    {
      icon: Zap,
      title: "Animações e Interatividade",
      description: "Microinterações e animações que tornam a experiência mais envolvente e memorável.",
      gradient: "from-arcadia-teal to-arcadia-orange",
      bgColor: "bg-gradient-to-br from-arcadia-teal/10 to-arcadia-orange/10"
    },
    {
      icon: Settings,
      title: "Manutenção e Otimização",
      description: "Suporte contínuo, atualizações de segurança e melhorias de performance para seu projeto.",
      gradient: "from-arcadia-orange to-arcadia-purple",
      bgColor: "bg-gradient-to-br from-arcadia-orange/10 to-arcadia-purple/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
              Nossos <span className="bg-gradient-to-r from-arcadia-orange to-arcadia-magenta bg-clip-text text-transparent">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
              Oferecemos soluções completas para transformar sua presença digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`${service.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer`}>
                <CardHeader className="text-center">
                  <div className={`bg-gradient-to-br ${service.gradient} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-poppins font-semibold text-gray-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 font-inter text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
