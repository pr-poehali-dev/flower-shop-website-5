import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      title: "Букет роз 'Романтика'",
      price: 3500,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Весенний микс",
      price: 2800,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const delivery = subtotal >= 3000 ? 0 : 300;
  const total = subtotal + delivery;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-cocktail-dark mb-8">Корзина</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="border-cocktail-rose/20">
              <CardHeader>
                <CardTitle className="text-cocktail-dark">
                  Ваши товары
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 border border-cocktail-rose/20 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-cocktail-dark">
                        {item.title}
                      </h3>
                      <p className="text-cocktail-purple font-semibold">
                        {item.price.toLocaleString()} ₽
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-cocktail-rose text-cocktail-purple"
                      >
                        <Icon name="Minus" size={16} />
                      </Button>
                      <span className="w-8 text-center text-cocktail-dark">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-cocktail-rose text-cocktail-purple"
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-cocktail-gray hover:text-red-500"
                    >
                      <Icon name="Trash2" size={18} />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-cocktail-rose/20">
              <CardHeader>
                <CardTitle className="text-cocktail-dark">Итого</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-cocktail-gray">Товары:</span>
                  <span className="text-cocktail-dark">
                    {subtotal.toLocaleString()} ₽
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cocktail-gray">Доставка:</span>
                  <span className="text-cocktail-dark">
                    {delivery === 0 ? "Бесплатно" : `${delivery} ₽`}
                  </span>
                </div>
                <div className="border-t border-cocktail-rose/20 pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-cocktail-dark">Итого:</span>
                    <span className="text-cocktail-purple">
                      {total.toLocaleString()} ₽
                    </span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-cocktail-dark">
                    Промокод
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Введите код"
                      className="border-cocktail-rose/30"
                    />
                    <Button
                      variant="outline"
                      className="border-cocktail-rose text-cocktail-purple"
                    >
                      Применить
                    </Button>
                  </div>
                </div>

                <Button
                  className="w-full bg-cocktail-purple hover:bg-cocktail-purple/90"
                  asChild
                >
                  <Link to="/delivery">
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Оформить заказ
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="border-cocktail-rose/20 mt-6">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-cocktail-green">
                  <Icon name="Truck" size={20} />
                  <span className="text-sm font-medium">
                    {delivery === 0
                      ? "Бесплатная доставка!"
                      : "Добавьте товаров на " +
                        (3000 - subtotal) +
                        " ₽ для бесплатной доставки"}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            className="border-cocktail-rose text-cocktail-purple"
            asChild
          >
            <Link to="/bouquets">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Продолжить покупки
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
