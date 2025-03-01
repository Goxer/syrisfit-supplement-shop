
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating?: number;
  featured?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  brand,
  isNew = false,
  isBestSeller = false,
  rating = 4.5,
  featured = false,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div 
      className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
        featured ? "border-2 border-syris-secondary" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <div className="h-60 overflow-hidden">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover transform transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="bg-syris-secondary text-white text-xs font-semibold px-2 py-1 rounded-md">
              NUEVO
            </span>
          )}
          {isBestSeller && (
            <span className="bg-syris-accent text-white text-xs font-semibold px-2 py-1 rounded-md">
              POPULAR
            </span>
          )}
          {featured && (
            <span className="bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
              DESTACADO
            </span>
          )}
          {discount > 0 && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
              -{discount}%
            </span>
          )}
        </div>

        {/* Brand Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/80 backdrop-blur-sm text-gray-800 text-xs font-bold px-2 py-1 rounded-md">
            {brand}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-md px-2 py-1">
          <div className="flex items-center">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-semibold ml-1">{rating}</span>
          </div>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:bg-white"
        >
          <Heart
            size={18}
            className={`${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"
            } transition-colors duration-300`}
          />
        </button>

        {/* Quick Action Buttons (Appear on Hover) */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-syris-primary/90 transition-all duration-300 transform ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <div className="flex">
            <Button 
              className="w-3/4 rounded-none h-12 bg-transparent hover:bg-syris-primary/80 text-white border-none"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Agregar al carrito
            </Button>
            <Button 
              className="w-1/4 rounded-none h-12 bg-transparent hover:bg-syris-primary/80 text-white border-none border-l border-white/20"
            >
              <Eye className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 font-medium">{category}</span>
        </div>
        <h3 className="font-medium text-lg mb-1 line-clamp-2">{name}</h3>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">₡{price.toLocaleString('es-CR')}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              ₡{originalPrice.toLocaleString('es-CR')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
