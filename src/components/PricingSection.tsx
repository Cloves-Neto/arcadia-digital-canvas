import { useState, useEffect, useRef } from "react";
import { Check, Sparkles, ArrowRight, Crown, Rocket, Target, Star, Zap } from "lucide-react";
import BackgroundStarsPattern from "@/components/BackgroundStarsPattern";

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const plans = [
    {
      name: "Landing Page",
      price: "R$ 2.500",
      period: "projeto único",
      description: "Perfeito para apresentar sua empresa online com impacto e elegância",
      features: [
        "Design responsivo e moderno",
        "Até 5 seções personalizadas",
        "Formulário de contato integrado",
        "Otimização SEO básica",
        "1 revisão incluída",
        "Entrega em 7 dias"
      ],
      icon: Target,
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-500/20 to-blue-500/20",
      popular: false,
      badge: "Entrada"
    },
    {
      name: "Site Completo",
      price: "R$ 5.500",
      period: "projeto único",
      description: "Solução completa para dominar sua presença digital",
      features: [
        "Tudo do plano Landing Page",
        "Até 10 páginas personalizadas",
        "Blog integrado com CMS",
        "Painel administrativo completo",
        "Integração com redes sociais",
        "Analytics e métricas avançadas",
        "3 revisões incluídas",
        "Entrega em 15 dias"
      ],
      icon: Crown,
      gradient: "from-orange-500 to-pink-500",
      bgGradient: "from-orange-500/20 to-pink-500/20",
      popular: true,
      badge: "Mais Popular"
    },
    {
      name: "E-commerce",
      price: "R$ 8.500",
      period: "projeto único",
      description: "Loja virtual de alta performance para maximizar suas vendas",
      features: [
        "Tudo do plano Site Completo",
        "Catálogo de produtos ilimitado",
        "Carrinho e checkout otimizados",
        "Gateway de pagamento múltiplo",
        "Gestão avançada de estoque",
        "Dashboard de vendas em tempo real",
        "Integração com correios e logística",
        "5 revisões incluídas",
        "Entrega em 25 dias"
      ],
      icon: Rocket,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      popular: false,
      badge: "Profissional"
    }
  ];

  const benefits = [
    {
      icon: Check,
      title: "Garantia Total",
      description: "30 dias de garantia em todos os projetos desenvolvidos",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: Star,
      title: "Suporte Dedicado",
      description: "Acompanhamento personalizado do início ao fim do projeto",
      gradient: "from-orange-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Prazos cumpridos rigorosamente com qualidade máxima",
      gradient: "from-purple-500 to-pink-500"
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

  return (

      <section ref={sectionRef} className="container mx-auto px-6 max-w-7xl bg-transparent">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
              <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">
                Nossos Planos
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Planos & </span>
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Preços
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Escolha o plano ideal para transformar sua ideia em realidade digital
              com tecnologia de ponta e design excepcional
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const PlanIcon = plan.icon;
            return (
              <div
                key={index}
                className={`relative group transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${plan.popular ? 'lg:scale-110 lg:-translate-y-4' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ⭐ {plan.badge}
                    </div>
                  </div>
                )}

                {/* Glowing Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />

                {/* Main Card */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden group-hover:bg-white/15 transition-all duration-300">

                  {/* Header */}
                  <div className={`bg-gradient-to-br ${plan.gradient} p-8 relative overflow-hidden ${plan.popular ? 'pt-12' : ''}`}>
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <div className="w-12 h-12 border-2 border-white rounded-full animate-pulse" />
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-20">
                      <div className="w-8 h-8 border-2 border-white rounded-lg animate-bounce" />
                    </div>

                    <div className="relative z-10 text-center text-white">
                      {/* Icon */}
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <PlanIcon className="h-8 w-8" />
                      </div>

                      {/* Plan Name */}
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

                      {/* Price */}
                      <div className="mb-4">
                        <div className="text-4xl font-bold">{plan.price}</div>
                        <div className="text-sm opacity-90">{plan.period}</div>
                      </div>

                      {/* Description */}
                      <p className="text-sm opacity-90 leading-relaxed">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mr-3 mt-0.5 border border-white/10">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                      className={`w-full ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.gradient} hover:shadow-xl shadow-lg`
                          : 'bg-white/10 hover:bg-white/20 border border-white/20'
                      } text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-md`}
                    >
                      Escolher {plan.name}
                    </button>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-full blur-xl`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Quote Section */}
        <div className={`text-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-4">
                Precisa de algo personalizado?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Cada projeto é único! Vamos criar uma solução sob medida
                para suas necessidades específicas e objetivos de negócio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300">
                  <span className="flex items-center justify-center">
                    💬 Vamos Conversar!
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300">
                  📋 Orçamento Personalizado
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const BenefitIcon = benefit.icon;
            return (
              <div
                key={index}
                className={`text-center transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${800 + (index * 100)}ms` }}
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl mx-auto flex items-center justify-center group hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <BenefitIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                </div>

                <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>
  );
};

export default PricingSection;