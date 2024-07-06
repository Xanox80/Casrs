import create from "zustand";

interface Car {
  name: string;
  images: string[];
  year: number;
  engine: string;
}

interface CartState {
  cart: Car[];
  addToCart: (car: Car) => void;
  removeFromCart: (car: Car) => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (car) => set((state) => ({ cart: [...state.cart, car] })),
  removeFromCart: (car) =>
    set((state) => ({
      cart: state.cart.filter((c) => c.name !== car.name),
    })),
}));

export default useCartStore;
