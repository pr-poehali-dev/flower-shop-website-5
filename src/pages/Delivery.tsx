import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Delivery = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Доставка и оплата</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Delivery Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Truck" size={24} className="mr-2 text-purple-600" />
                Доставка
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="Clock" size={20} className="text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Быстрая доставка</h4>
                  <p className="text-gray-600">В течение 2 часов по Москве</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={20} className="text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Зона доставки</h4>
                  <p className="text-gray-600">Москва и Московская область</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon
                  name="Banknote"
                  size={20}
                  className="text-orange-500 mt-1"
                />
                <div>
                  <h4 className="font-semibold">Стоимость</h4>
                  <p className="text-gray-600">
                    Бесплатно от 3000 ₽, иначе 300 ₽
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon
                  name="CreditCard"
                  size={24}
                  className="mr-2 text-purple-600"
                />
                Оплата
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon
                  name="Smartphone"
                  size={20}
                  className="text-green-500 mt-1"
                />
                <div>
                  <h4 className="font-semibold">Онлайн оплата</h4>
                  <p className="text-gray-600">Картой или через СБП</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon
                  name="HandCoins"
                  size={20}
                  className="text-blue-500 mt-1"
                />
                <div>
                  <h4 className="font-semibold">При получении</h4>
                  <p className="text-gray-600">Наличными или картой</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon
                  name="Shield"
                  size={20}
                  className="text-orange-500 mt-1"
                />
                <div>
                  <h4 className="font-semibold">Безопасность</h4>
                  <p className="text-gray-600">Все платежи защищены</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Form */}
        <Card>
          <CardHeader>
            <CardTitle>Оформить заказ</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Адрес доставки
                </label>
                <Input placeholder="Укажите полный адрес" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Дата доставки
                  </label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Время доставки
                  </label>
                  <Input type="time" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Комментарий к заказу
                </label>
                <Input placeholder="Дополнительные пожелания..." />
              </div>

              <Button
                size="lg"
                className="w-full bg-purple-500 hover:bg-purple-600"
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Оформить заказ
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Delivery;
