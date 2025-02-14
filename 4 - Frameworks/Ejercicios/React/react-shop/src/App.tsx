import { useState } from "react";
import { Box, Grid2 } from "@mui/material";
import { VinylList } from "./components/vinyl-list";
import { Cart } from "./components/cart";

export interface CartItem {
  id: string;
  title: string;
  artist: string;
  price: number;
  quantity: number;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((current) => {
      const exists = current.find((x) => x.id === item.id);
      if (exists) {
        return current.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2>
        <Grid2>
          <VinylList onAddToCart={addToCart} />
        </Grid2>
        <Grid2>
          <Cart
            items={cartItems}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default App;
