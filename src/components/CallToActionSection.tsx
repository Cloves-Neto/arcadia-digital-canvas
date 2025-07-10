import { ArrowRight, ShoppingBag, MessageSquare, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CallToActionSection = () => {
  const products = [
    {
      name: "ArcShop",
      icon: ShoppingBag,
      description: "Plataforma moderna para pequenos lojistas que querem praticidade para ter um site, controlar estoque e ter uma estética mais profissional.",
      highlights: ["Site profissional", "Controle de estoque", "Interface moderna"],
      color: "from-arcadia-orange to-arcadia-purple"
    },
    {
      name: "ArcGendo",
      icon: MessageSquare,
      description: "Web app integrado ao WhatsApp para gerenciar e automatizar processos de atendimento com assistente personalizado, cobranças e muito mais.",
      highlights: ["Integração WhatsApp", "Automação de vendas", "Assistente IA"],
      color: "from-arcadia-purple to-arcadia-magenta"
    },
    {
      name: "ArcyStudy",
      icon: GraduationCap,
      description: "Sistema para auxiliar estudos de processos seletivos com ferramentas de transcrição, resumos, mapas mentais e flashcards adaptados às suas necessidades.",
      highlights: ["Transcrição automática", "Mapas mentais", "Flashcards inteligentes"],
      color: "from-arcadia-magenta to-arcadia-teal"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 bg-gradient-to-r from-arcadia-orange via-arcadia-purple to-arcadia-magenta bg-clip-text text-transparent">
            Conheça Nossos Produtos SaaS
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Soluções inovadoras desenvolvidas pela Arcadia para transformar seu negócio e acelerar seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardHeader className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-poppins font-bold text-foreground">
                    {product.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground font-inter text-base leading-relaxed mb-6">
                    {product.description}
                  </CardDescription>
                  
                  <div className="space-y-2 mb-6">
                    {product.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.color} mr-3`} />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full group-hover:scale-105 transition-transform duration-300"
                    size="lg"
                  >
                    Conhecer {product.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center p-8 rounded-3xl bg-gradient-to-r from-arcadia-orange/10 via-arcadia-purple/10 to-arcadia-magenta/10 border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">
                Pronto para transformar seu negócio?
              </h3>
              <p className="text-muted-foreground font-inter mb-6 max-w-2xl">
                Entre em contato conosco e descubra como nossas soluções podem acelerar seu crescimento
              </p>
              <Button size="lg" className="font-semibold px-8 py-6 text-lg">
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;