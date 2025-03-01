
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Star, Truck, Clock, Shield } from "lucide-react";
import Newsletter from "@/components/Newsletter";
import { products } from "@/data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Find the product by ID
  const productId = parseInt(id || "1");
  const product = products.find((p) => p.id === productId);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 animate-pulse">SYRISFIT</h1>
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
            <p className="mb-8">Lo sentimos, el producto que buscas no existe.</p>
            <Link to="/">
              <Button variant="outline" className="border-black text-black hover:bg-black/5">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver a inicio
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-black transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/#productos" className="hover:text-black transition-colors">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-black font-medium">{product.name}</span>
          </div>
        </div>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name}
              className="max-h-[500px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {product.isNew && (
                <span className="bg-black text-white text-xs font-medium px-2.5 py-1 rounded">NUEVO</span>
              )}
              {product.isBestSeller && (
                <span className="bg-gray-900 text-white text-xs font-medium px-2.5 py-1 rounded">POPULAR</span>
              )}
              <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">{product.category}</span>
              <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">{product.brand}</span>
            </div>

            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={`${i < Math.floor(product.rating || 0) ? "text-black fill-black" : "text-gray-300"}`} 
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm">{product.rating} estrellas</span>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div>
                <span className="font-bold text-3xl">₡{product.price.toLocaleString('es-CR')}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-lg ml-2">
                    ₡{product.originalPrice.toLocaleString('es-CR')}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <span className="bg-gray-100 text-black text-sm font-medium px-2.5 py-1 rounded">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <p className="text-gray-700 mb-8">
              La creatina monohidratada 100% pura de Muscletech es el suplemento perfecto para aumentar tu fuerza, potencia 
              y rendimiento durante tus entrenamientos. Cada porción de 5g te proporciona creatina de la más alta calidad 
              para maximizar tus resultados.
            </p>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Cantidad</label>
              <div className="flex items-center">
                <button 
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input 
                  type="text" 
                  value={quantity} 
                  readOnly
                  className="w-16 h-10 border-t border-b border-gray-300 text-center"
                />
                <button 
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg" 
                onClick={() => console.log('Added to cart:', product.name, 'Quantity:', quantity)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Agregar al carrito
              </Button>
              <Button 
                variant="outline" 
                className="border-black text-black hover:bg-black/5"
              >
                Comprar ahora
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="border border-gray-200 rounded-lg p-4 mb-8">
              <div className="flex items-start mb-3">
                <Truck className="mr-3 h-5 w-5 text-black mt-0.5" />
                <div>
                  <h3 className="font-medium">Envío por Correos de CR</h3>
                  <p className="text-sm text-gray-600">Entrega en 72 horas a todo Costa Rica</p>
                </div>
              </div>
              <div className="flex items-start mb-3">
                <Clock className="mr-3 h-5 w-5 text-black mt-0.5" />
                <div>
                  <h3 className="font-medium">Entrega rápida</h3>
                  <p className="text-sm text-gray-600">Recibe tu pedido en un máximo de 72 horas</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="mr-3 h-5 w-5 text-black mt-0.5" />
                <div>
                  <h3 className="font-medium">Garantía de calidad</h3>
                  <p className="text-sm text-gray-600">Productos 100% originales garantizados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "description"
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Descripción
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "benefits"
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("benefits")}
              >
                Beneficios
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "howToUse"
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("howToUse")}
              >
                Modo de uso
              </button>
            </nav>
          </div>
          <div className="py-6">
            {activeTab === "description" && (
              <div>
                <h3 className="text-lg font-medium mb-4">Descripción del producto</h3>
                <p className="text-gray-700 mb-4">
                  La creatina monohidratada Muscletech 100% es un suplemento de alta calidad diseñado para mejorar el rendimiento deportivo, 
                  aumentar la fuerza y potenciar el desarrollo muscular. Es una fórmula micronizada que se disuelve fácilmente y se absorbe 
                  de manera eficiente.
                </p>
                <p className="text-gray-700 mb-4">
                  Cada envase contiene 400g de creatina monohidratada pura, suficiente para 80 porciones. La dosis recomendada es de 5g 
                  diarios, preferiblemente después del entrenamiento junto con carbohidratos para maximizar la absorción.
                </p>
                <p className="text-gray-700">
                  Esta creatina viene respaldada por múltiples estudios científicos que demuestran su eficacia en la mejora del rendimiento 
                  deportivo, especialmente en ejercicios de alta intensidad y corta duración.
                </p>
              </div>
            )}
            {activeTab === "benefits" && (
              <div>
                <h3 className="text-lg font-medium mb-4">Beneficios clave</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Aumenta la fuerza y potencia durante los entrenamientos</li>
                  <li>Mejora la recuperación muscular entre series</li>
                  <li>Promueve el desarrollo de masa muscular</li>
                  <li>Incrementa el rendimiento en ejercicios de alta intensidad</li>
                  <li>Fórmula pura sin aditivos ni azúcares añadidos</li>
                  <li>Se disuelve fácilmente sin dejar grumos</li>
                  <li>Respaldada por estudios científicos</li>
                </ul>
              </div>
            )}
            {activeTab === "howToUse" && (
              <div>
                <h3 className="text-lg font-medium mb-4">Modo de uso recomendado</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Fase de carga (opcional):</strong> Tomar 5g (una cucharada) cuatro veces al día durante 5-7 días.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Mantenimiento:</strong> Tomar 5g (una cucharada) al día, preferiblemente después del entrenamiento junto con un 
                  batido de proteínas o una bebida con carbohidratos para maximizar la absorción.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Instrucciones:</strong> Mezclar una cucharada (5g) en 250ml de agua o su bebida preferida. Agitar o remover hasta 
                  que se disuelva por completo.
                </p>
                <p className="text-gray-700">
                  <strong>Recomendación:</strong> Para obtener mejores resultados, mantenga una hidratación adecuada durante el día.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Productos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map(relatedProduct => (
                <Link to={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="relative overflow-hidden">
                      <div className="h-60 overflow-hidden">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      {relatedProduct.isBestSeller && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-black text-white text-xs font-medium px-2 py-1 rounded">
                            POPULAR
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg mb-1 line-clamp-2">{relatedProduct.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold">₡{relatedProduct.price.toLocaleString('es-CR')}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}
