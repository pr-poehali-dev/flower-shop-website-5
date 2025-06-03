import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Bouquets = () => {
  const bouquets = [
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
    {
      title: "Белые хризантемы",
      price: "2 200 ₽",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
      description: "Элегантный букет белых хризантем",
    },
    {
      title: "Микс тюльпанов",
      price: "3 800 ₽",
      image:
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=300&fit=crop",
      badge: "Сезон",
      description: "Разноцветные тюльпаны в стильной упаковке",
    },
    {
      title: "Букет лилий",
      price: "4 500 ₽",
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop",
      description: "Ароматные белые лилии с зеленью",
    },
  ];

  const categories = [
    "Все букеты",
    "Розы",
    "Тюльпаны",
    "Пионы",
    "Лилии",
    "Хризантемы",
    "Сезонные",
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Наши букеты</h1>
          <p className="text-gray-600">
            Выберите идеальный букет для любого случая
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="cursor-pointer hover:bg-purple-50 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Icon name="Filter" size={16} className="mr-2" />
                Фильтры
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ArrowUpDown" size={16} className="mr-2" />
                Сортировка
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Найдено {bouquets.length} букетов
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bouquets.map((bouquet, index) => (
            <ProductCard key={index} {...bouquet} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Bouquets;
