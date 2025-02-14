import { FC } from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  TextField,
  AppBar,
  Toolbar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { CartItem } from "../App";

interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onClose: () => void;
}

export const Cart: FC<CartProps> = ({
  items,
  onRemove,
  onUpdateQuantity,
  onClose,
}) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>
          <IconButton edge="end" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 2, overflowY: "auto", height: "calc(100% - 64px)" }}>
        <List>
          {items.map((item) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => onRemove(item.id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={item.title}
                secondary={`$${item.price} x ${item.quantity}`}
              />
              <TextField
                type="number"
                size="small"
                value={item.quantity}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value > 0) {
                    onUpdateQuantity(item.id, value);
                  }
                }}
                sx={{ width: 60, ml: 2 }}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 2, borderTop: 1, pt: 2, borderColor: "divider" }}>
          <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
        </Box>
      </Box>
    </>
  );
};
