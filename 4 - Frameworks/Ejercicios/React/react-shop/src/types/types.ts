export interface CartItem {
  id: string;
  title: string;
  artist: string;
  price: number;
  quantity: number;
}

export interface Vinyl {
  id: string;
  title: string;
  artist: string;
  price: number;
  image: string;
}

export interface VinylListProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
  cartItems: CartItem[];
}
