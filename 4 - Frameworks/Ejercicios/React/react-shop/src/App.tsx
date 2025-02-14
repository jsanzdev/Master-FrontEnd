import { useState } from "react";
import { Box, Grid2, Fab, Drawer, Badge } from "@mui/material";
import { VinylList } from "./components/vinyl-list";
import { Cart } from "./components/cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartItem } from "./types/types";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
      <Grid2 container>
        <Grid2>
          <VinylList
            onAddToCart={addToCart}
            cartItems={cartItems} // Add this prop
          />
        </Grid2>
      </Grid2>

      <Fab
        color="primary"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={toggleCart}
      >
        <Badge badgeContent={totalItems} color="error">
          <ShoppingCartIcon />
        </Badge>
      </Fab>

      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: 400 },
            boxSizing: "border-box",
          },
        }}
      >
        <Cart
          items={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onClose={() => setIsCartOpen(false)}
          onClearCart={clearCart}
        />
      </Drawer>
    </Box>
  );
}

export default App;
