import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
  Box,
} from "@mui/material";
import { CharacterVm } from "./character.vm";

interface Props {
  character: CharacterVm;
}

export const CharacterComponent: React.FC<Props> = ({ character }) => {
  const navigate = useNavigate();

  const getStatusColor = (status: string): "success" | "error" | "default" => {
    switch (status) {
      case "Alive":
        return "success";
      case "Dead":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Card sx={{ maxWidth: 800, margin: "0 auto", mt: 4 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            height="400"
            image={character.image}
            alt={character.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              {character.name}
            </Typography>
            <Chip
              label={character.status}
              color={getStatusColor(character.status)}
              sx={{ mb: 2 }}
            />
            <Typography variant="body1" gutterBottom>
              <strong>Species:</strong> {character.species}
            </Typography>
            {character.type && (
              <Typography variant="body1" gutterBottom>
                <strong>Type:</strong> {character.type}
              </Typography>
            )}
            <Typography variant="body1" gutterBottom>
              <strong>Gender:</strong> {character.gender}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Origin:</strong> {character.origin}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Location:</strong> {character.location}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Episodes:</strong> {character.episodes}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                onClick={() => navigate("/characters")}
              >
                Back to List
              </Button>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
