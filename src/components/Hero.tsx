
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
        {/* Content Column */}
        <div className="order-2 lg:order-1">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-syris-primary/10 inline-block px-4 py-2 rounded-full mb-4">
              <p className="text-syris-primary font-medium text-sm">Nuevo Producto Destacado</p>
            </div>
          </div>

          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow transition-all duration-1000 transform delay-100 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            Muscletech <br className="hidden md:block" />
            <span className="text-syris-secondary">100% Creatina</span>
          </h1>

          <p 
            className={`text-lg md:text-xl text-gray-700 max-w-2xl mb-8 transition-all duration-1000 transform delay-200 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            Aumenta tu fuerza, potencia y rendimiento con la creatina monohidratada pura de Muscletech. 
            Sin azúcar, sin carbohidratos y sin grasa.
          </p>

          <div 
            className={`flex flex-col sm:flex-row items-center justify-start gap-4 transition-all duration-1000 transform delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              size="lg" 
              className="bg-syris-secondary hover:bg-syris-secondary/90 text-white px-8 py-6 text-lg transition-all w-full sm:w-auto"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Comprar Ahora
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-syris-primary text-syris-primary hover:bg-syris-primary/10 px-8 py-6 text-lg w-full sm:w-auto"
            >
              Ver Detalles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Product Highlights */}
          <div className={`grid grid-cols-3 gap-4 mt-8 transition-all duration-1000 transform delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center p-3 rounded-lg bg-white/80 shadow-sm">
              <p className="font-bold text-lg">5g</p>
              <p className="text-xs text-gray-500">por porción</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-white/80 shadow-sm">
              <p className="font-bold text-lg">100%</p>
              <p className="text-xs text-gray-500">pura</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-white/80 shadow-sm">
              <p className="font-bold text-lg">80</p>
              <p className="text-xs text-gray-500">porciones</p>
            </div>
          </div>
        </div>
        
        {/* Image Column */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div 
            className={`relative transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200/40 to-blue-200/40 rounded-full blur-3xl"></div>
            <img 
              src="https://vitalikecr.com/wp-content/uploads/2024/12/mt-100-creatine.png"
              alt="Muscletech 100% Creatina"
              className="relative z-10 max-h-[500px] object-contain mx-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
