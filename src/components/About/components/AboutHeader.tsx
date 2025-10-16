// src/components/About/About.Header.tsx
import { Sparkles } from "lucide-react";

interface HeaderProps {
  isVisible: boolean;
}

export const AboutHeader = ({ isVisible }: HeaderProps) => (
  <div className="w-full text-center mb-20">
    <div className={`w-full transform transition-all duration-1000 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}>

      <div className="flex items-center justify-center mb-6">
        <Sparkles className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
        <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">
          Nossa Essência
        </span>
      </div>

      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        <span className="text-white">Criamos </span>
        <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Experiências
        </span>
        <br />
      </h2>

      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Combinamos criatividade, tecnologia e estratégia para criar soluções digitais
        que fazem a diferença no seu negócio e na vida dos seus usuários.
      </p>
    </div>
  </div>
);