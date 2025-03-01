
import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <h1 className={`text-2xl font-bold ${isScrolled ? "text-syris-primary" : "text-white"} text-shadow`}>
            SYRISFIT
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
            className={`${isScrolled ? "text-syris-primary" : "text-white"} hover:text-syris-secondary transition-all duration-300 font-medium`}
          >
            Inicio
          </a>
          <a 
            href="#productos" 
            className={`${isScrolled ? "text-syris-primary" : "text-white"} hover:text-syris-secondary transition-all duration-300 font-medium`}
          >
            Productos
          </a>
          <a 
            href="#categorias" 
            className={`${isScrolled ? "text-syris-primary" : "text-white"} hover:text-syris-secondary transition-all duration-300 font-medium`}
          >
            Categorías
          </a>
          <a 
            href="#nosotros" 
            className={`${isScrolled ? "text-syris-primary" : "text-white"} hover:text-syris-secondary transition-all duration-300 font-medium`}
          >
            Nosotros
          </a>
          <a 
            href="#contacto" 
            className={`${isScrolled ? "text-syris-primary" : "text-white"} hover:text-syris-secondary transition-all duration-300 font-medium`}
          >
            Contacto
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className={`${isScrolled ? "text-syris-primary" : "text-white"} hover:bg-white/10`}
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
          
          <Button 
            className="bg-syris-secondary text-white hover:bg-syris-secondary/90 hidden md:inline-flex"
          >
            Comprar Ahora
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? "text-syris-primary" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 flex flex-col space-y-4 md:hidden animate-fade-in-up">
          <a 
            href="#" 
            className="text-syris-primary hover:text-syris-secondary transition-all duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Inicio
          </a>
          <a 
            href="#productos" 
            className="text-syris-primary hover:text-syris-secondary transition-all duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Productos
          </a>
          <a 
            href="#categorias" 
            className="text-syris-primary hover:text-syris-secondary transition-all duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Categorías
          </a>
          <a 
            href="#nosotros" 
            className="text-syris-primary hover:text-syris-secondary transition-all duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Nosotros
          </a>
          <a 
            href="#contacto" 
            className="text-syris-primary hover:text-syris-secondary transition-all duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contacto
          </a>
          <Button className="bg-syris-secondary text-white hover:bg-syris-secondary/90 w-full">
            Comprar Ahora
          </Button>
        </div>
      )}
    </header>
  );
}
