import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center mb-12">Контакты</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={24}
                    className="mr-2 text-purple-600"
                  />
                  Наш адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  г. Москва, ул. Цветочная, д. 15
                  <br />
                  метро Парк Культуры
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-600">📍 Карта будет здесь</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Clock"
                    size={24}
                    className="mr-2 text-purple-600"
                  />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Понедельник - Пятница:</span>
                  <span className="font-semibold">9:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота - Воскресенье:</span>
                  <span className="font-semibold">10:00 - 20:00</span>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700 flex items-center">
                    <Icon name="Truck" size={16} className="mr-2" />
                    Доставка работает круглосуточно
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Phone"
                    size={24}
                    className="mr-2 text-purple-600"
                  />
                  Связь с нами
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-green-500" />
                  <div>
                    <p className="font-semibold">+7 (495) 123-45-67</p>
                    <p className="text-sm text-gray-600">Основной номер</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-blue-500"
                  />
                  <div>
                    <p className="font-semibold">+7 (926) 123-45-67</p>
                    <p className="text-sm text-gray-600">WhatsApp, Telegram</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-purple-500" />
                  <div>
                    <p className="font-semibold">info@flowerparadise.ru</p>
                    <p className="text-sm text-gray-600">Электронная почта</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Написать нам</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input placeholder="Как к вам обращаться?" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Тема обращения
                  </label>
                  <Input placeholder="О чем хотите рассказать?" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Расскажите подробнее..."
                  />
                </div>

                <Button className="w-full bg-purple-500 hover:bg-purple-600">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-6">Мы в социальных сетях</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" className="hover:bg-blue-50">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-pink-50">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-blue-50">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-red-50">
              <Icon name="Youtube" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
