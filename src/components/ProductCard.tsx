
import { useState } from "react";
import { Link } from "react-router-dom";
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
        featured ? "border-2 border-black" : "border border-gray-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${id}`} className="block relative overflow-hidden">
        {/* Product Image */}
        <div className="h-60 overflow-hidden bg-gray-50">
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-contain p-4 transform transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="bg-black text-white text-xs font-semibold px-2.5 py-1 rounded-md">
              NUEVO
            </span>
          )}
          {isBestSeller && (
            <span className="bg-gray-800 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
              POPULAR
            </span>
          )}
          {featured && (
            <span className="bg-black text-white text-xs font-semibold px-2.5 py-1 rounded-md">
              DESTACADO
            </span>
          )}
          {discount > 0 && (
            <span className="bg-gray-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
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
            <Star size={14} className="text-black fill-black" />
            <span className="text-xs font-semibold ml-1">{rating}</span>
          </div>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:bg-white"
        >
          <Heart
            size={18}
            className={`${
              isFavorite ? "fill-black text-black" : "text-gray-500"
            } transition-colors duration-300`}
          />
        </button>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 font-medium">{category}</span>
        </div>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-lg mb-1 line-clamp-2 hover:text-gray-700 transition-colors">{name}</h3>
        </Link>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">₡{price.toLocaleString('es-CR')}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              ₡{originalPrice.toLocaleString('es-CR')}
            </span>
          )}
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button 
            className="w-full rounded-md bg-black hover:bg-black/90 text-white"
            onClick={(e) => {
              e.preventDefault();
              console.log(`Added ${name} to cart`);
            }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Comprar
          </Button>
          <Button 
            variant="outline"
            className="w-full rounded-md border-gray-200 text-gray-700 hover:bg-gray-50"
            onClick={(e) => {
              e.preventDefault();
              console.log(`View ${name} details`);
            }}
          >
            <Eye className="mr-2 h-4 w-4" />
            Ver
          </Button>
        </div>
      </div>
    </div>
  );
}
