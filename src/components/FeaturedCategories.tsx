
import { useEffect, useRef } from "react";

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Proteínas",
    description: "Suplementos para el desarrollo muscular y recuperación",
    image: "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Pre-Entreno",
    description: "Maximiza tu energía y enfoque durante el entrenamiento",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Quemadores",
    description: "Apoya tus objetivos de pérdida de grasa y definición",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Vitaminas",
    description: "Nutrientes esenciales para tu bienestar general",
    image: "https://images.unsplash.com/photo-1584308874594-1db2a5ba3801?auto=format&fit=crop&q=80"
  }
];

export default function FeaturedCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.category-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="categorias" ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in-up">
            Nuestras Categorías
          </h2>
          <div className="w-24 h-1 bg-syris-secondary mx-auto mb-6 opacity-0 animate-fade-in-up animate-delay-100"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
            Explora nuestra amplia gama de suplementos de alta calidad diseñados para diferentes objetivos y necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="category-card opacity-0 group cursor-pointer overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-syris-primary/80 to-transparent opacity-70 transition-opacity group-hover:opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1 transition-transform duration-300 group-hover:translate-y-0">{category.name}</h3>
                  <p className="text-sm text-white/90 transform transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
