import { Button } from "@/components/ui/button";
import { useCartActions } from "@/features/cart/hooks/use-cart";
import type { ICartItem } from "@/features/cart/types/cart";
import { Trash2Icon } from "lucide-react";

interface ICartItemProps {
  item: ICartItem;
}
const CartItem = ({ item }: ICartItemProps) => {
  const { incrementItemQuantity, decrementItemQuantity, removeItemFromCart } =
    useCartActions();

  return (
    <div
      key={item.id}
      className="flex border items-center shadow w-[400px] p-4 gap-3 rounded-lg relative"
    >
      <img src={item.image} alt={item.title} className="w-[75px]" />
      <div className="space-y-2">
        <h1 className="font-semibold w-[90%]">{item.title}</h1>
        <h3>${item.price}</h3>
        <div className="flex items-center gap-3">
          <Button
            variant={"secondary"}
            className="p-2.5 text-2xl cursor-pointer hover:bg-gray-200"
            onClick={() => decrementItemQuantity(item.id)}
          >
            -
          </Button>
          <span>{item.quantity}</span>
          <Button
            variant={"secondary"}
            className="p-2.5 text-2xl cursor-pointer hover:bg-gray-200"
            onClick={() => incrementItemQuantity(item.id)}
          >
            +
          </Button>
        </div>
      </div>
      <Button
        className="cursor-pointer absolute right-4"
        onClick={() => removeItemFromCart(item.id)}
      >
        <Trash2Icon />
      </Button>
    </div>
  );
};

export default CartItem;
