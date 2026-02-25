import { Truck, Clock, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Быстрая доставка',
    description: 'Доставим ваш заказ за 2 часа в любую точку города',
  },
  {
    icon: Clock,
    title: 'Работаем 24/7',
    description: 'Круглосуточная поддержка и прием заказов без выходных',
  },
  {
    icon: Award,
    title: 'Гарантия свежести',
    description: 'Только свежие цветы напрямую от поставщиков',
  },
  {
    icon: Heart,
    title: 'С любовью',
    description: 'Каждый букет создается с душой и вниманием к деталям',
  },
];

export default function Features() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Почему выбирают нас
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Мы заботимся о каждом клиенте и гарантируем высокое качество
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
