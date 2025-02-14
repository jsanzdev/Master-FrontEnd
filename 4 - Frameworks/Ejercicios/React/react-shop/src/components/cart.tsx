import { FC, useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  TextField,
  AppBar,
  Toolbar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { CartProps } from "../types/types";

export const Cart: FC<CartProps> = ({
  items,
  onRemove,
  onUpdateQuantity,
  onClose,
  onClearCart,
}) => {
  const [confirmOpen, setConfirmOpen] = useState(false);

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
          {items.length > 0 && (
            <IconButton
              edge="end"
              onClick={() => setConfirmOpen(true)}
              sx={{ mr: 1 }}
            >
              <DeleteSweepIcon />
            </IconButton>
          )}
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
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>Clear Cart</DialogTitle>
        <DialogContent>
          Are you sure you want to remove all items from your cart?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
          <Button
            onClick={() => {
              onClearCart();
              setConfirmOpen(false);
            }}
            color="error"
          >
            Clear Cart
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
