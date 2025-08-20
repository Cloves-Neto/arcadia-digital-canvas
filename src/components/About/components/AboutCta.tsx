// src/components/About/About.CTA.tsx
import { ArrowRight } from "lucide-react";

interface CTAProps {
  isVisible: boolean;
}

export const AboutCTA = ({ isVisible }: CTAProps) => (
  <div className={`text-center mt-20 transform transition-all duration-1000 delay-1000 ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`}>
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-4">
        Pronto para transformar sua presença digital?
      </h3>
      <p className="text-gray-300 mb-6">
        Vamos conversar sobre como podemos levar seu projeto ao próximo nível
      </p>
      <button className="group bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
        <span className="flex items-center justify-center">
          Começar Conversa
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
    </div>
  </div>
);