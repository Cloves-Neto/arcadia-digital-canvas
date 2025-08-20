// src/components/About/types.ts
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

// Tipo para o Ícone
type IconComponent = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

export interface Highlight {
  icon: IconComponent;
  title: string;
  description: string;
  gradient: string;
  bgGradient: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: IconComponent;
}