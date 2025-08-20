// src/components/About/data.ts
import { Highlight, Stat } from "@/components/About/types/about.types";
import { Users, Palette, Code, Zap, Target, Heart, Sparkles } from "lucide-react";

export const highlights: Highlight[] = [
  {
    icon: Users,
    title: "Foco no Cliente",
    description: "Cada projeto é único e desenvolvido pensando nas suas necessidades específicas",
    gradient: "from-orange-500 to-yellow-500",
    bgGradient: "from-orange-500/20 to-yellow-500/20"
  },
  {
    icon: Palette,
    title: "Experiência em Design",
    description: "Criamos interfaces que não apenas funcionam, mas encantam e engajam",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/20 to-pink-500/20"
  },
];

export const stats: Stat[] = [
  { number: "150+", label: "Projetos Entregues", icon: Target },
  { number: "98%", label: "Satisfação Cliente", icon: Heart },
  { number: "24/7", label: "Suporte Dedicado", icon: Sparkles }
];