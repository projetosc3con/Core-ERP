import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { CartItem } from '../types/cart';

// ─── Mock initial cart data ───
const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Ração Premium Sanctuary',
    description: 'Sabor Salmão & Batata Doce - 15kg',
    price: 189.9,
    priceFormatted: 'R$ 189,90',
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLPRegOJ6_chmS7ylWhwX5BcupE7J8La2mj5cXJ8BTkFfhNPO9RC6hlOyYQiNlpLpZKORV-HqRgrknWx1GoDo3tszk9rkCZUjeRx8JD3EqWNuRfS703M4ZKVnCEj7Iihoc3KpIg4Jw_U27z2AF6zvsuvhEVAjGCNLGQASWIvGHzoEyYtOE1r3QE82iNmG_rJ-L55eRqBBqmI2M-fEmPlVW3gjTQ0rg02-Wia7LFUCtO0FZAM_fF036QEEuYD2aOMoAyJB2rFjJIe2-',
  },
  {
    id: 2,
    name: 'Cama OrthoComfort XL',
    description: 'Cor Grafite - Ergonômica',
    price: 449.0,
    priceFormatted: 'R$ 449,00',
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdGeHWEBWS-FC8g0zPw0HEa--D3p9zNESwiMG-ItCHvhK_s5OX_kFOcO-cy74CacR-ELPyg3DL_pU_ejeFfmd7gF7zRwXqHhkCf18kDR--p-mqmVjxn6RL1BwvFM_uLNAmO6qg7oXbhlcpREKDdQGpW9s8lxN5FvFexsPZq66rFpl3ud0k1aWEmgl27tIocdMry-zgPlhbcNctxGMDPy8_NPU3WydpfrOl7pbF1o2uKf2DPg_3pK0TlUg3RPDiLakdjhbtIddI4KfV',
  },
  {
    id: 3,
    name: 'Coleira Couro Artesanal',
    description: 'Tamanho M - Marrom',
    price: 89.0,
    priceFormatted: 'R$ 89,00',
    quantity: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2-1lcx8gTkiHZaHSWi7x77lWcJuTyoj3Ac8-inUPXEe-b9y6i14ViXtpIVbrBtYcyp7HGnQ2QACmFy83CVc9suZcIz7hW38OQWGNqrn2XDd8P6CUsIUuLiM4_QD_DSD7OCTmZnNuMbV6QVCDgs-tQEcIEbjIlVZF9T_o5XqoVxUDzQVY-CKGeil4lT_9d5FoaLqMpJXmEcJBXAswQUlwcGlAJEZ6jPJr_xuuLXXX_FU-Fv66rGKC12yR8o_ED9KuU8okGOnbdCK_Y',
  },
];

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(initialCartItems);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addItem = useCallback((newItem: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id);
      if (existing) {
        return prev.map((i) => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.id !== id));
      return;
    }
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, quantity } : i));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  return (
    <CartContext.Provider value={{ items, totalItems, totalPrice, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}
