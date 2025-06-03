import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-cocktail-dark text-cocktail-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cocktail-pink to-cocktail-mauve rounded-xl flex items-center justify-center">
                <span className="text-2xl">🍸</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cocktail-purple to-cocktail-rose bg-clip-text text-transparent">
                Цветочный коктейль
              </span>
            </div>
            <p className="text-cocktail-gray mb-4 max-w-md">
              Создаем уникальные цветочные композиции для ваших особенных
              моментов. Свежесть, красота и индивидуальный подход в каждом
              букете.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                size={20}
                className="text-cocktail-rose hover:text-cocktail-pink cursor-pointer transition-colors"
              />
              <Icon
                name="Facebook"
                size={20}
                className="text-cocktail-rose hover:text-cocktail-pink cursor-pointer transition-colors"
              />
              <Icon
                name="MessageCircle"
                size={20}
                className="text-cocktail-rose hover:text-cocktail-pink cursor-pointer transition-colors"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-cocktail-white mb-4">
              Навигация
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-cocktail-gray hover:text-cocktail-pink transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/bouquets"
                  className="text-cocktail-gray hover:text-cocktail-pink transition-colors"
                >
                  Букеты
                </Link>
              </li>
              <li>
                <Link
                  to="/delivery"
                  className="text-cocktail-gray hover:text-cocktail-pink transition-colors"
                >
                  Доставка
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-cocktail-gray hover:text-cocktail-pink transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="text-cocktail-gray hover:text-cocktail-pink transition-colors"
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-cocktail-gray hover:text-cocktail-pink transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-cocktail-white mb-4">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-cocktail-rose" />
                <span className="text-cocktail-gray">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-cocktail-rose" />
                <span className="text-cocktail-gray">
                  info@cocktail-flowers.ru
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-cocktail-rose" />
                <span className="text-cocktail-gray">
                  Москва, ул. Цветочная, 15
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cocktail-gray mt-8 pt-8 text-center">
          <p className="text-cocktail-gray">
            © 2024 Цветочный коктейль. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
