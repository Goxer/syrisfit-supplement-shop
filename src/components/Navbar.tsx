import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10 ${isScrolled ? "bg-black/90 shadow-md backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-shadow text-zinc-950">
            SYRISFIT
          </h1>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center relative max-w-xs w-full mx-4">
          <input type="text" placeholder="Buscar productos..." className="w-full border border-white/20 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-white/60 bg-zinc-950" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-gray-300 transition-all duration-300 font-medium">
            Inicio
          </Link>
          <a href="/#productos" className="text-white hover:text-gray-300 transition-all duration-300 font-medium">
            Productos
          </a>
          <a href="/#categorias" className="text-white hover:text-gray-300 transition-all duration-300 font-medium">
            Categorías
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <User className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-white text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </Button>
          
          <Button className="bg-white text-black hover:bg-white/90 hidden md:inline-flex">
            Comprar Ahora
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="absolute top-full left-0 right-0 bg-black shadow-lg p-6 flex flex-col space-y-4 md:hidden animate-fade-in-up">
          {/* Search Bar - Mobile */}
          <div className="relative mb-4">
            <input type="text" placeholder="Buscar productos..." className="w-full bg-white/10 border border-white/20 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-white/60" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
          </div>
          
          <Link to="/" className="text-white hover:text-gray-300 transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Inicio
          </Link>
          <a href="/#productos" className="text-white hover:text-gray-300 transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Productos
          </a>
          <a href="/#categorias" className="text-white hover:text-gray-300 transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Categorías
          </a>
          <a href="/#nosotros" className="text-white hover:text-gray-300 transition-all duration-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Nosotros
          </a>
          <Button className="bg-white text-black hover:bg-white/90 w-full">
            Comprar Ahora
          </Button>
        </div>}
    </header>;
}