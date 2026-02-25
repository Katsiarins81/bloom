import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🌸</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Bloom
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">
              Главная
            </a>
            <a href="#catalog" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">
              Каталог
            </a>
            <a href="#about" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">
              О нас
            </a>
            <a href="#contact" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              <span className="absolute top-0 right-0 w-5 h-5 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#home" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">
              Главная
            </a>
            <a href="#catalog" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">
              Каталог
            </a>
            <a href="#about" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">
              О нас
            </a>
            <a href="#contact" className="text-gray-700 hover:text-rose-500 transition-colors font-medium">
              Контакты
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
