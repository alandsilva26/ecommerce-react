export interface Product {
  id: number;
  title: string;
  price: number | string;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: string;
  };
}

export type ProductState = Product[];

export type ProductAction = {
  type: string;
  product?: Product;
  products: Product[];
};

export type CartState = Product[];

export type CartAction = {
  type: string;
  product: Product;
};

export type AuthState = {
  isAuth: bool;
  name: string;
  email?: string;
  phone?: string;
};

export type AuthAction = {
  type: string;
  email?: string;
};

export type RootReducerState = {
  products: ProductState;
  cartItems: CartState;
  auth: AuthState;
};
