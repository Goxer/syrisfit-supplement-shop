
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import AboutSection from "@/components/AboutSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

// Sample products data
const products = [
  {
    id: 1,
    name: "Proteína Premium Whey Isolate - Chocolate",
    price: 29500,
    originalPrice: 32900,
    image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80",
    category: "Proteínas",
    isNew: true,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Pre-Entreno Matrix Energy Boost - Fruit Punch",
    price: 22500,
    image: "https://images.unsplash.com/photo-1621607152860-976d7398e4eb?auto=format&fit=crop&q=80",
    category: "Pre-Entreno",
    isBestSeller: true
  },
  {
    id: 3,
    name: "Quemador Termogénico Costa Rica Fire",
    price: 24900,
    originalPrice: 27900,
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed49cc79?auto=format&fit=crop&q=80",
    category: "Quemadores"
  },
  {
    id: 4,
    name: "Multivitamínico Daily Essentials - 60 Cápsulas",
    price: 18900,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80",
    category: "Vitaminas",
    isNew: true
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
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
              Descubre nuestros suplementos más vendidos, formulados con ingredientes de la más alta calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                category={product.category}
                isNew={product.isNew}
                isBestSeller={product.isBestSeller}
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
