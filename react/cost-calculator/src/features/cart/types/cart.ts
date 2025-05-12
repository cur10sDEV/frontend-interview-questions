export interface ICartItem {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
}

type CartActionType =
  | "INCREMENT_QUANTITY"
  | "DECREMENT_QUANTITY"
  | "ADD_ITEM_TO_CART"
  | "REMOVE_ITEM_FROM_CART";

export interface ICartAction {
  type: CartActionType;
  payload: ICartItem | number;
}
