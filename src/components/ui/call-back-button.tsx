import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const CallBackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    time: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет отправка данных
    console.log("Заказ звонка:", formData);
    setIsOpen(false);
    // Сброс формы
    setFormData({ name: "", phone: "", time: "", comment: "" });
  };

  return (
    <>
      {/* Плавающая кнопка */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="bg-cocktail-purple hover:bg-cocktail-purple/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 py-3 group animate-pulse hover:animate-none"
            >
              <Icon
                name="Phone"
                size={20}
                className="mr-2 group-hover:rotate-12 transition-transform duration-300"
              />
              Заказать звонок
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-cocktail-purple flex items-center">
                <Icon name="Phone" size={24} className="mr-2" />
                Заказать звонок
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Оставьте ваши контакты и наш менеджер свяжется с вами в удобное
                время
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input
                  id="name"
                  placeholder="Как к вам обращаться?"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Номер телефона</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Удобное время звонка</Label>
                <Input
                  id="time"
                  placeholder="Например: с 10:00 до 18:00"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">Комментарий (необязательно)</Label>
                <Textarea
                  id="comment"
                  placeholder="Укажите повод для заказа или особые пожелания"
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-cocktail-purple hover:bg-cocktail-purple/90"
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="border-cocktail-purple/30 text-cocktail-purple hover:bg-cocktail-lavender"
                >
                  Отмена
                </Button>
              </div>
            </form>

            <div className="mt-4 p-3 bg-cocktail-lavender/30 rounded-lg">
              <p className="text-sm text-cocktail-gray flex items-center">
                <Icon
                  name="Clock"
                  size={16}
                  className="mr-2 text-cocktail-purple"
                />
                Обычно перезваниваем в течение 15 минут
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default CallBackButton;
