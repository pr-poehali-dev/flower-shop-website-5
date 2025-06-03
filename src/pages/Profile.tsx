import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const orders = [
    {
      id: "#12345",
      date: "15 мая 2024",
      items: "Букет роз 'Романтика'",
      total: "3 500 ₽",
      status: "Доставлен",
    },
    {
      id: "#12344",
      date: "10 мая 2024",
      items: "Весенний микс",
      total: "2 800 ₽",
      status: "Доставлен",
    },
    {
      id: "#12343",
      date: "5 мая 2024",
      items: "Букет пионов",
      total: "4 200 ₽",
      status: "В пути",
    },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-cocktail-dark mb-8">
          Личный кабинет
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <Card className="border-cocktail-rose/20">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cocktail-pink to-cocktail-mauve rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="User"
                    size={40}
                    className="text-cocktail-purple"
                  />
                </div>
                <CardTitle className="text-cocktail-dark">
                  Анна Петрова
                </CardTitle>
                <p className="text-cocktail-gray">anna.petrova@example.com</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-cocktail-purple hover:bg-cocktail-purple/90">
                  <Icon name="Edit" size={16} className="mr-2" />
                  Редактировать профиль
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-cocktail-rose text-cocktail-purple"
                >
                  <Icon name="Settings" size={16} className="mr-2" />
                  Настройки
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Orders & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Info Form */}
            <Card className="border-cocktail-rose/20">
              <CardHeader>
                <CardTitle className="text-cocktail-dark">
                  Личная информация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-cocktail-dark mb-2">
                        Имя
                      </label>
                      <Input
                        defaultValue="Анна"
                        className="border-cocktail-rose/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cocktail-dark mb-2">
                        Фамилия
                      </label>
                      <Input
                        defaultValue="Петрова"
                        className="border-cocktail-rose/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cocktail-dark mb-2">
                      Email
                    </label>
                    <Input
                      defaultValue="anna.petrova@example.com"
                      className="border-cocktail-rose/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cocktail-dark mb-2">
                      Телефон
                    </label>
                    <Input
                      defaultValue="+7 (999) 123-45-67"
                      className="border-cocktail-rose/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cocktail-dark mb-2">
                      Адрес
                    </label>
                    <Input
                      defaultValue="Москва, ул. Примерная, д. 10"
                      className="border-cocktail-rose/30"
                    />
                  </div>
                  <Button className="bg-cocktail-purple hover:bg-cocktail-purple/90">
                    Сохранить изменения
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Orders History */}
            <Card className="border-cocktail-rose/20">
              <CardHeader>
                <CardTitle className="text-cocktail-dark">
                  История заказов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-4 border border-cocktail-rose/20 rounded-lg"
                    >
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-cocktail-dark">
                            {order.id}
                          </span>
                          <Badge
                            variant={
                              order.status === "Доставлен"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              order.status === "Доставлен"
                                ? "bg-cocktail-green text-white"
                                : "bg-cocktail-rose text-cocktail-dark"
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <p className="text-cocktail-gray text-sm">
                          {order.date}
                        </p>
                        <p className="text-cocktail-dark">{order.items}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-cocktail-purple">
                          {order.total}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-cocktail-purple hover:bg-cocktail-lavender"
                        >
                          Подробнее
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
