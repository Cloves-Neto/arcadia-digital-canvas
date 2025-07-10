
import { Check, Star, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Landing Page",
      price: "R$ 2.500",
      period: "projeto único",
      description: "Perfeito para apresentar sua empresa online",
      features: [
        "Design responsivo e moderno",
        "Até 5 seções personalizadas",
        "Formulário de contato",
        "Otimização SEO básica",
        "1 revisão incluída",
        "Entrega em 7 dias"
      ],
      icon: <Star className="h-6 w-6" />,
      gradient: "from-arcadia-teal to-arcadia-orange",
      popular: false
    },
    {
      name: "Site Completo",
      price: "R$ 5.500",
      period: "projeto único",
      description: "Solução completa para sua presença digital",
      features: [
        "Tudo do plano Landing Page",
        "Até 10 páginas",
        "Blog integrado",
        "Painel administrativo",
        "Integração com redes sociais",
        "Analytics avançado",
        "3 revisões incluídas",
        "Entrega em 15 dias"
      ],
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-arcadia-orange to-arcadia-magenta",
      popular: true
    },
    {
      name: "E-commerce",
      price: "R$ 8.500",
      period: "projeto único",
      description: "Loja virtual completa e profissional",
      features: [
        "Tudo do plano Site Completo",
        "Catálogo de produtos ilimitado",
        "Carrinho de compras",
        "Gateway de pagamento",
        "Gestão de estoque",
        "Painel de vendas",
        "Integração com correios",
        "5 revisões incluídas",
        "Entrega em 25 dias"
      ],
      icon: <Check className="h-6 w-6" />,
      gradient: "from-arcadia-purple to-arcadia-teal",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
            Planos &{' '}
            <span className="bg-gradient-to-r from-arcadia-orange via-arcadia-magenta to-arcadia-purple bg-clip-text text-transparent">
              Preços
            </span>
          </h2>
          <p className="text-xl font-inter text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para transformar sua ideia em realidade digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-arcadia-orange scale-105' : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-arcadia-orange to-arcadia-magenta text-white text-center py-2 text-sm font-inter font-semibold">
                  Mais Popular
                </div>
              )}
              
              <CardHeader className={`bg-gradient-to-br ${plan.gradient} text-white ${plan.popular ? 'pt-8' : ''}`}>
                <div className="flex items-center justify-center mb-4">
                  {plan.icon}
                </div>
                <CardTitle className="text-center font-poppins text-2xl">
                  {plan.name}
                </CardTitle>
                <div className="text-center">
                  <div className="text-3xl font-poppins font-bold">{plan.price}</div>
                  <div className="text-sm opacity-90 font-inter">{plan.period}</div>
                </div>
                <p className="text-center text-sm opacity-90 font-inter mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-arcadia-teal mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-inter text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-arcadia-orange hover:bg-arcadia-magenta' 
                      : 'bg-gray-800 hover:bg-arcadia-orange'
                  } text-white font-inter font-semibold py-6 text-lg rounded-full transition-all duration-300`}
                >
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 font-inter mb-4">
            Precisa de algo personalizado? Vamos conversar!
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-arcadia-orange text-arcadia-orange hover:bg-arcadia-orange hover:text-white font-inter font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
          >
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
