import { X } from 'lucide-react';
import { useState, useMemo } from 'react';

const products = [
  {
    id: 1,
    name: 'Романтический букет роз',
    price: 3500,
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Розы',
  },
  {
    id: 2,
    name: 'Весенний микс',
    price: 2800,
    image: 'https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Букеты',
  },
  {
    id: 3,
    name: 'Элегантные тюльпаны',
    price: 2200,
    image: 'https://images.pexels.com/photos/1078850/pexels-photo-1078850.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Тюльпаны',
  },
  {
    id: 4,
    name: 'Нежные пионы',
    price: 4200,
    image: 'https://images.pexels.com/photos/3073979/pexels-photo-3073979.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Пионы',
  },
  {
    id: 5,
    name: 'Летнее настроение',
    price: 3000,
    image: 'https://images.pexels.com/photos/1524232/pexels-photo-1524232.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Букеты',
  },
  {
    id: 6,
    name: 'Королевские лилии',
    price: 3800,
    image: 'https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Лилии',
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center pt-20">
      <div className="bg-white w-full max-w-2xl mx-4 rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative">
          <input
            autoFocus
            type="text"
            placeholder="Поиск букетов..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-6 py-4 text-lg outline-none"
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {query.trim() && results.length === 0 ? (
            <div className="py-12 px-6 text-center">
              <p className="text-gray-500">Ничего не найдено по запросу "{query}"</p>
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y">
              {results.map((product) => (
                <a
                  key={product.id}
                  href="#catalog"
                  onClick={onClose}
                  className="flex gap-4 p-4 hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{product.category}</p>
                    <p className="text-rose-600 font-bold mt-2">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="py-12 px-6 text-center text-gray-500">
              Введите название букета или категорию
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
