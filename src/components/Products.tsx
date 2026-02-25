import ProductCard from './ProductCard';

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

export default function Products() {
  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold">
            🌹 Наша коллекция
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Популярные букеты
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Каждый букет создан с любовью и вниманием к деталям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Показать все букеты
          </button>
        </div>
      </div>
    </section>
  );
}
