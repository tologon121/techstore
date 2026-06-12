export type Category = 'All' | 'Smartphones' | 'Laptops' | 'Accessories';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: Omit<Category, 'All'>;
  description: string;
  longDescription: string;
  image: string;
  emoji: string;
  rating: number;
  reviewCount: number;
  badge?: 'Best Seller' | 'New' | "Editor's Choice" | 'Popular' | 'Sale';
  inStock: boolean;
  specs: { label: string; value: string }[];
  colors?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isInCart: (productId: string) => boolean;
  getItemQuantity: (productId: string) => number;
}

export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  paymentMethod: 'card' | 'paypal' | 'crypto';
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
  saveInfo: boolean;
}

export interface FormErrors {
  [key: string]: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  product: string;
}
