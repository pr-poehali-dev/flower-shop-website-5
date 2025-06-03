import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">О нашем магазине</h1>
          <p className="text-xl text-gray-600">
            Более 10 лет мы создаем красоту и дарим радость через цветы
          </p>
        </div>

        {/* Story */}
        <div className="mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🌸</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">Наша история</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Цветочный рай начался как маленькая семейная мастерская в центре
                Москвы. Мы верили, что цветы способны превратить обычный день в
                особенный момент, а простой жест — в незабываемое воспоминание.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Сегодня мы — команда профессиональных флористов, которые каждый
                день создают уникальные букеты и композиции. Наша миссия —
                дарить красоту и эмоции через искусство флористики.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Качество</h3>
              <p className="text-gray-600">
                Работаем только с лучшими поставщиками и тщательно отбираем
                каждый цветок
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Palette" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Творчество</h3>
              <p className="text-gray-600">
                Каждый букет — это произведение искусства, созданное с душой и
                вдохновением
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Забота</h3>
              <p className="text-gray-600">
                Мы заботимся о каждом клиенте и стремимся превзойти ваши
                ожидания
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              Наша команда
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👩‍🎨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Анна Петрова</h3>
                <p className="text-gray-600 mb-2">Главный флорист</p>
                <p className="text-sm text-gray-500">
                  15 лет опыта, специализация на свадебной флористике
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Михаил Иванов</h3>
                <p className="text-gray-600 mb-2">Менеджер по качеству</p>
                <p className="text-sm text-gray-500">
                  Контролирует свежесть и качество всех цветов
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👩‍💻</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Елена Смирнова</h3>
                <p className="text-gray-600 mb-2">Служба поддержки</p>
                <p className="text-sm text-gray-500">
                  Поможет с выбором и ответит на все вопросы
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default About;
