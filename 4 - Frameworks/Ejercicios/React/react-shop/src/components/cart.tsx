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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartItem } from "../App";

interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export const Cart: FC<CartProps> = ({ items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Paper sx={{ p: 2, position: "sticky", top: 20 }}>
      <Typography variant="h6" gutterBottom>
        Shopping Cart
      </Typography>
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
              onChange={(e: { target: { value: string } }) => {
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
    </Paper>
  );
};
