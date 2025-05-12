import CartItem from "@/features/cart/components/cart-item";
import { useCartItems } from "@/features/cart/hooks/use-cart";
import { ShoppingCartIcon } from "lucide-react";

const CartShowcase = () => {
  const items = useCartItems();

  if (items.length <= 0) {
    return (
      <div className="max-w-full h-full flex items-center justify-center">
        <h1 className="text-2xl">No Items in Cart!!!</h1>
      </div>
    );
  }

  const totalPrice = items.reduce(
    (acc, items) => (acc += items.price * items.quantity),
    0
  );

  return (
    <section className="flex flex-col justify-center items-start py-4 w-full gap-4">
      <div className="flex gap-2 items-center justify-center text-2xl">
        <ShoppingCartIcon />
        <h1>Cart</h1>
      </div>
      {items.length > 0 && items.map((item) => <CartItem item={item} />)}
      <div className="flex items-center justify-between w-full py-4 px-2 text-lg">
        <h1>Total</h1>
        <h2>${totalPrice.toFixed(2)}</h2>
      </div>
    </section>
  );
};

export default CartShowcase;
