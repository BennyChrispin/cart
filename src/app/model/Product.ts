export interface Product {
  image: any;
  id: number;
  title: string;
  description: string;
  price: number;
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}
