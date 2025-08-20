// src/components/About/About.Content.tsx
import { CheckCircle, ArrowRight } from "lucide-react";
import { stats, highlights } from "@/components/About/data/about.data";

interface ContentProps {
  isVisible: boolean;
}

export const AboutContent = ({ isVisible }: ContentProps) => (
  <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

    {/* Lado Esquerdo - História */}
    <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${
      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
    }`}>
      <div className="relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 via-purple-500 to-teal-500 rounded-full" />
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full p-3">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Do Front-end ao Back-end: Soluções Completas
            </h3>
          </div>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Na nossa empresa, acreditamos que cada linha de código conta uma história.
              Trabalhamos com tecnologias modernas e metodologias ágeis para transformar
              suas ideias em realidade digital.
            </p>
            <p>
              Nossa equipe multidisciplinar combina expertise técnica com sensibilidade
              criativa, garantindo que cada projeto seja único, impactante e verdadeiramente
              personalizado para o seu negócio.
            </p>
            <div className="flex items-center text-orange-400 font-medium">
              <ArrowRight className="w-4 h-4 mr-2" />
              Tecnologia que conecta, design que emociona
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Lado Direito - Estatísticas */}
    <div className={`transform transition-all duration-1000 delay-400 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
    }`}>
      <div className="grid gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center space-x-4">
              <div className={`bg-gradient-to-r ${highlights[index % highlights.length].gradient} rounded-full p-3 group-hover:scale-110 transition-transform`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);