import type { ICartItem } from "@/features/cart/types/cart";
import { create } from "zustand";

interface ICartStore {
  items: ICartItem[];
  actions: {
    addItemToCart: (item: ICartItem) => void;
    removeItemFromCart: (itemId: number) => void;
    incrementItemQuantity: (itemId: number) => void;
    decrementItemQuantity: (itemId: number) => void;
  };
}

const useCartStore = create<ICartStore>((set, get) => ({
  items: [],
  actions: {
    addItemToCart: (item) => {
      let isAlreadyPresent = false;
      const cartItems = get().items;
      // check for item in the cart - if present increment quantity
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          isAlreadyPresent = true;
          cartItem.quantity++;
          return cartItem;
        } else {
          return cartItem;
        }
      });

      // if not present - add it to the cart
      if (!isAlreadyPresent) {
        updatedCart.push(item);
      }

      set(() => ({
        items: updatedCart,
      }));
    },
    removeItemFromCart: (itemId) => {
      set((state) => ({
        items: state.items.filter((item) => item.id !== itemId),
      }));
    },
    incrementItemQuantity: (itemId) => {
      set((state) => ({
        items: state.items.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      }));
    },
    decrementItemQuantity: (itemId) => {
      set((state) => ({
        items: state.items.map((item) => {
          if (item.id === itemId && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      }));
    },
  },
}));

// Atomic selectors
export const useCartItems = () => useCartStore((state) => state.items);

export const useCartActions = () => useCartStore((state) => state.actions);
