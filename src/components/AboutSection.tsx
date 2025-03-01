
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="nosotros" ref={sectionRef} className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-on-scroll opacity-0">
              <span className="text-syris-secondary font-medium">Nuestra Historia</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 animate-on-scroll opacity-0">
              Suplementos de Costa Rica<br />para el mundo
            </h2>
            <div className="w-20 h-1 bg-syris-secondary mb-6 animate-on-scroll opacity-0"></div>
            <p className="text-gray-600 mb-6 animate-on-scroll opacity-0">
              En SyrisFit, nos apasiona la naturaleza y el bienestar. Nacimos en Costa Rica, 
              un país reconocido mundialmente por su biodiversidad y riqueza natural, 
              y hemos aprovechado este entorno único para crear suplementos de la más alta calidad.
            </p>
            <p className="text-gray-600 mb-8 animate-on-scroll opacity-0">
              Nuestro compromiso es ofrecerte productos premium que potencien tu rendimiento 
              físico y mejoren tu calidad de vida, respetando siempre el medio ambiente y 
              utilizando ingredientes sostenibles.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll opacity-0">
                <h3 className="text-lg font-bold mb-2">Calidad Premium</h3>
                <p className="text-gray-600 text-sm">Ingredientes de la más alta calidad y fórmulas avanzadas.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll opacity-0">
                <h3 className="text-lg font-bold mb-2">100% Tico</h3>
                <p className="text-gray-600 text-sm">Producidos con orgullo en Costa Rica bajo estrictos estándares.</p>
              </div>
            </div>
            
            <Button 
              className="bg-syris-primary hover:bg-syris-primary/90 text-white animate-on-scroll opacity-0"
              size="lg"
            >
              Conoce Nuestra Historia
            </Button>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg transform translate-y-8 animate-on-scroll opacity-0">
                <img 
                  src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80" 
                  alt="Laboratorio SyrisFit" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg animate-on-scroll opacity-0">
                <img 
                  src="https://images.unsplash.com/photo-1622398925373-3f91b1eba7eb?auto=format&fit=crop&q=80" 
                  alt="Ingredientes naturales" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg animate-on-scroll opacity-0">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" 
                  alt="Producción de suplementos" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg transform -translate-y-8 animate-on-scroll opacity-0">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" 
                  alt="Costa Rica" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
