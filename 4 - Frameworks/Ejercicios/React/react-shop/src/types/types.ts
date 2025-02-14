export interface CartItem {
  id: string;
  title: string;
  artist: string;
  price: number;
  quantity: number;
}

export interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onClose: () => void;
  onClearCart: () => void;
  onCheckout: () => void;
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

export interface CheckoutProps {
  items: CartItem[];
  onClose: () => void;
}

export interface ShippingForm {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface PaymentForm {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolder: string;
}
