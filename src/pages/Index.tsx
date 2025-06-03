import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ui/product-card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const popularBouquets = [
    {
      title: "Букет роз 'Романтика'",
      price: "3 500 ₽",
      originalPrice: "4 200 ₽",
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop",
      badge: "Хит",
      description: "Нежный букет из 15 красных роз с эвкалиптом",
    },
    {
      title: "Весенний микс",
      price: "2 800 ₽",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Яркий весенний букет с тюльпанами и нарциссами",
    },
    {
      title: "Букет пионов",
      price: "4 200 ₽",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      badge: "Новинка",
      description: "Роскошные розовые пионы в стильной упаковке",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cocktail-purple via-cocktail-rose to-cocktail-mauve bg-clip-text text-transparent">
                Цветочный коктейль
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Создаем неповторимые букеты для ваших особенных моментов. Свежие
              цветы, быстрая доставка, безграничная красота.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-cocktail-purple hover:bg-cocktail-purple/90 px-8"
                asChild
              >
                <Link to="/bouquets">
                  <Icon name="Flower" size={20} className="mr-2" />
                  Выбрать букет
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cocktail-purple/30 hover:bg-cocktail-lavender text-cocktail-purple"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cocktail-green/20 to-cocktail-green/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-cocktail-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Доставим ваш заказ в течение 2-х часов по Москве
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cocktail-purple/20 to-cocktail-mauve/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="Flower2"
                  size={32}
                  className="text-cocktail-purple"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Свежие цветы</h3>
              <p className="text-gray-600">
                Работаем только с проверенными поставщиками
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cocktail-pink/30 to-cocktail-rose/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-cocktail-rose" />
              </div>
              <h3 className="text-xl font-semibold mb-2">С любовью</h3>
              <p className="text-gray-600">
                Каждый букет создается с особой заботой и вниманием
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Bouquets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Популярные букеты</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Самые любимые композиции наших клиентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {popularBouquets.map((bouquet, index) => (
              <ProductCard key={index} {...bouquet} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/bouquets">
              <Button
                size="lg"
                variant="outline"
                className="border-cocktail-purple/30 hover:bg-cocktail-lavender text-cocktail-purple"
              >
                Смотреть все букеты
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cocktail-purple to-cocktail-mauve">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Не знаете, что выбрать?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Наши флористы помогут подобрать идеальный букет для любого случая
          </p>
          <Button
            size="lg"
            className="bg-white text-cocktail-purple hover:bg-cocktail-white/90"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
