
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Contato", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-arcadia-orange to-arcadia-magenta w-10 h-10 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-poppins font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-poppins font-bold text-gray-800">Arcadia</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-arcadia-orange font-inter font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="bg-arcadia-orange hover:bg-arcadia-magenta text-white font-inter font-medium px-6 py-2 rounded-full transition-all duration-300"
              onClick={() => scrollToSection('#contact')}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-arcadia-orange font-inter font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="w-full mt-4 bg-arcadia-orange hover:bg-arcadia-magenta text-white font-inter font-medium py-2 rounded-full transition-all duration-300"
              onClick={() => scrollToSection('#contact')}
            >
              Fale Conosco
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
