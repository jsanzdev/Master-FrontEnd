import { FC } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { CartItem } from "../App";

const vinyls = [
  {
    id: "1",
    title: "From Zero",
    artist: "Linkin Park",
    price: 29.99,
    image: "/img/linkin_park_vinyl.webp",
  },
  {
    id: "2",
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    price: 39.99,
    image: "/img/dark-side.webp",
  },
  {
    id: "3",
    title: "Back in Black",
    artist: "AC/DC",
    price: 24.99,
    image: "/img/ACDC-BiB.webp",
  },
  {
    id: "4",
    title: "Thriller",
    artist: "Michael Jackson",
    price: 19.99,
    image: "/img/thriller.webp",
  },
  // Add more vinyls here
];

interface VinylListProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

export const VinylList: FC<VinylListProps> = ({ onAddToCart }) => {
  return (
    <Grid container spacing={3}>
      {vinyls.map((vinyl) => (
        <Grid item xs={12} sm={6} md={4} key={vinyl.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={vinyl.image}
              alt={vinyl.title}
            />
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
                <Button variant="contained" onClick={() => onAddToCart(vinyl)}>
                  Add to Cart
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
