import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  description?: string;
}

const ProductCard = ({
  title,
  price,
  originalPrice,
  image,
  badge,
  description,
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 shadow-sm">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <Badge className="absolute top-3 left-3 bg-purple-500 hover:bg-purple-600">
            {badge}
          </Badge>
        )}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white"
        >
          <Icon name="Heart" size={18} />
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-purple-600">{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
            <Icon name="ShoppingCart" size={16} className="mr-1" />В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
