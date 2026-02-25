import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ name, price, image, category }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100">
          <Heart className="w-5 h-5 text-rose-500" />
        </button>

        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full px-4 py-3 bg-white text-gray-900 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-rose-500 hover:text-white transition-all duration-300">
            <ShoppingCart className="w-5 h-5" />
            <span>В корзину</span>
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-500 transition-colors">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{price} ₽</span>
          <div className="flex items-center space-x-1 text-yellow-500">
            <span>⭐</span>
            <span className="text-sm font-semibold text-gray-700">4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
