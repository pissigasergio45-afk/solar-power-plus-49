import { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: string;
  category: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getCartSummary: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.id === newItem.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === newItem.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartSummary = () => {
    if (items.length === 0) return '';
    
    return items.map(item => 
      `${item.name} (${item.category}) - Quantité: ${item.quantity} - Prix: ${item.price}`
    ).join('\n');
  };

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      clearCart,
      getCartSummary
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};