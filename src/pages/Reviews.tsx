import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Мария К.",
      rating: 5,
      date: "15 мая 2024",
      text: "Заказывала букет роз на день рождения мамы. Цветы свежайшие, доставили точно в срок. Мама была в восторге! Обязательно буду заказывать еще.",
      order: "Букет роз 'Романтика'",
    },
    {
      name: "Алексей П.",
      rating: 5,
      date: "3 мая 2024",
      text: "Отличный сервис! Помогли выбрать букет для жены на годовщину. Флористы настоящие профессионалы, учли все пожелания. Жена была счастлива!",
      order: "Букет пионов",
    },
    {
      name: "Анна Д.",
      rating: 4,
      date: "28 апреля 2024",
      text: "Красивые цветы, быстрая доставка. Единственное замечание — хотелось бы больше вариантов упаковки. Но в целом очень довольна.",
      order: "Весенний микс",
    },
    {
      name: "Дмитрий Л.",
      rating: 5,
      date: "20 апреля 2024",
      text: "Заказывал букет в последний момент, переживал что не успеют. Но ребята молодцы — доставили за 1.5 часа! Цветы шикарные.",
      order: "Букет лилий",
    },
    {
      name: "Елена В.",
      rating: 5,
      date: "12 апреля 2024",
      text: "Уже не первый раз заказываю в этом магазине. Всегда свежие цветы, красивая упаковка, вежливые курьеры. Рекомендую всем!",
      order: "Микс тюльпанов",
    },
    {
      name: "Игорь С.",
      rating: 4,
      date: "5 апреля 2024",
      text: "Хороший выбор букетов, адекватные цены. Доставка в срок. Единственное — хотелось бы видеть больше экзотических цветов в ассортименте.",
      order: "Белые хризантемы",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h1>
          <p className="text-gray-600 mb-6">Нам важно ваше мнение</p>

          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {renderStars(Math.round(averageRating))}
              </div>
              <span className="text-2xl font-bold text-purple-600">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <Badge variant="outline" className="px-4 py-2">
              {reviews.length} отзывов
            </Badge>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                  </div>
                  <Badge variant="outline" className="ml-4">
                    {review.order}
                  </Badge>
                </div>

                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-100">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Поделитесь своим опытом
              </h2>
              <p className="text-gray-600 mb-6">
                Ваш отзыв поможет другим клиентам сделать правильный выбор
              </p>
              <div className="flex items-center justify-center space-x-2 text-purple-600">
                <Icon name="Star" size={20} />
                <span className="font-semibold">Оставить отзыв</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
