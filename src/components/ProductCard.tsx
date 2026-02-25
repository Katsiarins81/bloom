import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ id, name, price, image });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

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
          <button
            onClick={handleAddToCart}
            className={`w-full px-4 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
              isAdded
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-900 hover:bg-rose-500 hover:text-white'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>{isAdded ? 'Добавлено!' : 'В корзину'}</span>
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
          <span className="text-2xl font-bold text-gray-900">{price.toLocaleString('ru-RU')} ₽</span>
          <div className="flex items-center space-x-1 text-yellow-500">
            <span>⭐</span>
            <span className="text-sm font-semibold text-gray-700">4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
