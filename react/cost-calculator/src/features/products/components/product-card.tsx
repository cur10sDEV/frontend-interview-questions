import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { IProduct } from "@/features/products/types/product";

interface IProductCardProps {
  product: IProduct;
  handleAddToCart: (product: IProduct) => void;
}

const ProductCard = ({ product, handleAddToCart }: IProductCardProps) => {
  const { title, images, description, price, stock } = product;

  return (
    <Card className="max-w-[250px] max-h-[370px] shadow-md py-4 gap-4 cursor-pointer hover:shadow-lg transition">
      <CardHeader className="flex justify-center items-center">
        <img src={images[0]} className="max-w-[150px]" />
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description.substring(0, Math.min(description.length, 50)) + "..."}
        </CardDescription>
        <h1>${price}</h1>
      </CardContent>
      <CardFooter>
        <Button
          disabled={stock > 0 ? false : true}
          className="cursor-pointer"
          onClick={() => handleAddToCart(product)}
        >
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
    // TODO: add product price
  );
};

export default ProductCard;
