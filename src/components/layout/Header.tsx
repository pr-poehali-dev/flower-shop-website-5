import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Букеты", href: "/bouquets" },
    { name: "Доставка", href: "/delivery" },
    { name: "О нас", href: "/about" },
    { name: "Отзывы", href: "/reviews" },
    { name: "Контакты", href: "/contacts" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🌸</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Цветочный рай
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                  location.pathname === item.href
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hover:bg-purple-50">
              <Icon name="Search" size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-purple-50 relative"
            >
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-purple-50">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
