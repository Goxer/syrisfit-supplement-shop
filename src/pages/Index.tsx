import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import AboutSection from "@/components/AboutSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

// Sample products data
const products = [
  {
    id: 1,
    name: "Muscletech 100% Creatina Monohidratada - 400g",
    price: 19900,
    originalPrice: 24900,
    image: "https://vitalikecr.com/wp-content/uploads/2024/12/mt-100-creatine.png",
    category: "Creatina",
    brand: "Muscletech",
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    featured: true
  },
  {
    id: 2,
    name: "Proteína Nitro-Tech 100% Whey Gold - Chocolate",
    price: 29500,
    originalPrice: 32900,
    image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80",
    category: "Proteínas",
    brand: "Muscletech",
    isBestSeller: true,
    rating: 4.7
  },
  {
    id: 3,
    name: "Pre-Entreno C4 Original - Fruit Punch",
    price: 22500,
    image: "https://images.unsplash.com/photo-1621607152860-976d7398e4eb?auto=format&fit=crop&q=80",
    category: "Pre-Entreno",
    brand: "Cellucor",
    isBestSeller: true,
    rating: 4.6
  },
  {
    id: 4,
    name: "Quemador Hydroxycut Elite - 100 caps",
    price: 24900,
    originalPrice: 27900,
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed49cc79?auto=format&fit=crop&q=80",
    category: "Quemadores",
    brand: "Muscletech",
    rating: 4.3
  },
  {
    id: 5,
    name: "Hi-Performance Protein - Vanilla",
    price: 18900,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80",
    category: "Proteínas",
    brand: "Magnum",
    isNew: true,
    rating: 4.5
  },
  {
    id: 6,
    name: "ABE Pre-Workout - Cherry Cola",
    price: 25900,
    originalPrice: 28900,
    image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&q=80",
    category: "Pre-Entreno",
    brand: "ABE",
    isNew: true,
    rating: 4.8
  },
  {
    id: 7,
    name: "Magnum Hard Muscle Builder - 90 caps",
    price: 32500,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c1dddd0ee?auto=format&fit=crop&q=80",
    category: "Constructores",
    brand: "Magnum",
    rating: 4.4
  },
  {
    id: 8,
    name: "BCAA Aminoácidos Esenciales - Fruit Punch",
    price: 21900,
    originalPrice: 24900,
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80",
    category: "Aminoácidos",
    brand: "Muscletech",
    rating: 4.6
  }
];

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 animate-pulse">SYRISFIT</h1>
          <div className="w-16 h-16 border-4 border-syris-secondary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  // Get the featured product
  const featuredProduct = products.find(product => product.featured);
  
  // Get the rest of the products
  const regularProducts = products.filter(product => !product.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Featured Product Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in-up">
              Producto Destacado
            </h2>
            <div className="w-24 h-1 bg-syris-secondary mx-auto mb-6 opacity-0 animate-fade-in-up animate-delay-100"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
              Descubre nuestro producto estrella del mes con beneficios exclusivos para tu entrenamiento.
            </p>
          </div>

          {featuredProduct && (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 flex items-center justify-center">
                  <img 
                    src={featuredProduct.image} 
                    alt={featuredProduct.name}
                    className="max-h-[400px] object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-2">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded">DESTACADO</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded ml-2">{featuredProduct.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredProduct.name}</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(featuredProduct.rating || 0) ? "text-yellow-500" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">{featuredProduct.rating} estrellas</span>
                  </div>
                  <p className="text-gray-700 mb-6">
                    La creatina monohidratada 100% pura de Muscletech es el suplemento perfecto para aumentar tu fuerza, potencia 
                    y rendimiento durante tus entrenamientos. Cada porción de 5g te proporciona creatina de la más alta calidad 
                    para maximizar tus resultados.
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div>
                      <span className="font-bold text-3xl">₡{featuredProduct.price.toLocaleString('es-CR')}</span>
                      {featuredProduct.originalPrice && (
                        <span className="text-gray-400 line-through text-lg ml-2">
                          ₡{featuredProduct.originalPrice.toLocaleString('es-CR')}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-syris-secondary hover:bg-syris-secondary/90 text-white px-8 py-6 text-lg">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Agregar al carrito
                    </Button>
                    <Button variant="outline" className="border-syris-primary text-syris-primary hover:bg-syris-primary/10">
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <FeaturedCategories />
      
      {/* Top Products Section */}
      <section id="productos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in-up">
              Productos Destacados
            </h2>
            <div className="w-24 h-1 bg-syris-secondary mx-auto mb-6 opacity-0 animate-fade-in-up animate-delay-100"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
              Las mejores marcas de suplementos del mundo, disponibles en Costa Rica con entrega a todo el país.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                category={product.category}
                brand={product.brand}
                isNew={product.isNew}
                isBestSeller={product.isBestSeller}
                rating={product.rating}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-syris-primary text-syris-primary font-medium rounded-md hover:bg-syris-primary hover:text-white transition-colors duration-300">
              Ver Todos los Productos
            </button>
          </div>
        </div>
      </section>

      <AboutSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
