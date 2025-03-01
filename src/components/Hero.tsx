
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="max-w-5xl">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/10 backdrop-blur-sm inline-block px-4 py-2 rounded-full mb-4">
              <p className="text-white font-medium text-sm">Distribuidores de Marcas Premium en Costa Rica</p>
            </div>
          </div>

          <h1 
            className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 text-shadow transition-all duration-1000 transform delay-100 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            Las Mejores Marcas <br className="hidden md:block" />
            <span className="text-syris-secondary">Para Tu Rendimiento</span>
          </h1>

          <p 
            className={`text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 transition-all duration-1000 transform delay-200 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            Muscletech, Magnum, ABE y más. Encuentra las marcas de suplementos más reconocidas 
            del mundo con envío a todo Costa Rica.
          </p>

          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 transform delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              size="lg" 
              className="bg-syris-secondary hover:bg-syris-secondary/90 text-white px-8 py-6 text-lg transition-all"
            >
              Explorar Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg"
            >
              Conoce Más
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-1 h-16 relative">
          <span className="absolute top-0 left-0 w-full h-1/3 bg-white/80 rounded-full animate-scroll-down"></span>
        </div>
      </div>
      
      <style>
        {`
          @keyframes scroll-down {
            0% { top: 0; opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}
      </style>
    </section>
  );
}
