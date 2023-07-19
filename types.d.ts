export interface Product {
  _id: number;
  brand: string;
  category: string;
  title: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
}

export interface CartItem {
  _id: number;
  brand: string;
  category: string;
  title: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  quantity: number;
}
