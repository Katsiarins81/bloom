import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌸</span>
              </div>
              <span className="text-2xl font-bold">Bloom</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Создаем незабываемые моменты с помощью прекрасных цветов
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Меню</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#catalog" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-rose-400 transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-400" />
                <span className="text-gray-400">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-400" />
                <span className="text-gray-400">info@bloom.ru</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-rose-400" />
                <span className="text-gray-400">Москва, ул. Цветочная 1</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Социальные сети</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Bloom. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
