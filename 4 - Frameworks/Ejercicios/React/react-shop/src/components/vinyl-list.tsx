import { FC } from "react";
import {
  Grid2,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { vinyls } from "../data/vinyls";
import { VinylListProps } from "../types/types";

export const VinylList: FC<VinylListProps> = ({ onAddToCart, cartItems }) => {
  const isInCart = (id: string) => cartItems.some((item) => item.id === id);

  return (
    <Grid2 container spacing={3}>
      {vinyls.map((vinyl) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={vinyl.id}>
          <Card>
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="200"
                image={vinyl.image}
                alt={vinyl.title}
              />
              {isInCart(vinyl.id) && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    bgcolor: "primary.main",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ShoppingCartIcon sx={{ color: "white", fontSize: 20 }} />
                </Box>
              )}
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {vinyl.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {vinyl.artist}
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">${vinyl.price}</Typography>
                <Button
                  variant="contained"
                  onClick={() => onAddToCart(vinyl)}
                  startIcon={isInCart(vinyl.id) ? <ShoppingCartIcon /> : null}
                >
                  {isInCart(vinyl.id) ? "Add More" : "Add to Cart"}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};
