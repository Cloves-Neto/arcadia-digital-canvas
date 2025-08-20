// src/components/About/About.Highlights.tsx
import { useState } from 'react';
import { highlights } from '@/components/About/data/about.data';
interface HighlightsProps {
  isVisible: boolean;
}

export const AboutHighlights = ({ isVisible }: HighlightsProps) => {
  // O estado de hover agora é local deste componente!
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {highlights.map((highlight, index) => (
        <div
          key={index}
          className={`group cursor-pointer transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${600 + index * 100}ms` }}
          onMouseEnter={() => setActiveCard(index)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
            activeCard === index ? `shadow-2xl` : '' 
          }`}>
            {/* Efeito de brilho */}
            <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Ícone */}
            <div className="relative z-10 mb-6">
              <div className={`bg-gradient-to-r ${highlight.gradient} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <highlight.icon className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 text-center">
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                {highlight.title}
              </h4>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                {highlight.description}
              </p>
            </div>

            {/* Indicador de Hover */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className={`w-8 h-1 bg-gradient-to-r ${highlight.gradient} rounded-full`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};