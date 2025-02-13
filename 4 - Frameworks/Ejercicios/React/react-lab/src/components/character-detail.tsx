import { FC } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@mui/material";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  episode: string[];
}

interface CharacterDetailProps {
  character: Character;
}

export const CharacterDetail: FC<CharacterDetailProps> = ({ character }) => {
  return (
    <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", md: 300 },
          height: { xs: 300, md: "auto" },
          objectFit: "cover",
        }}
        image={character.image}
        alt={character.name}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h4" gutterBottom>
          {character.name}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
          <Chip
            label={character.status}
            color={character.status === "Alive" ? "success" : "error"}
          />
          <Chip label={character.species} />
          <Chip label={character.gender} />
        </Box>
        <Typography variant="body1" gutterBottom>
          <strong>Origin:</strong> {character.origin.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Location:</strong> {character.location.name}
        </Typography>
        {character.type && (
          <Typography variant="body1" gutterBottom>
            <strong>Type:</strong> {character.type}
          </Typography>
        )}
        <Typography variant="body1" gutterBottom>
          <strong>Featured in:</strong> {character.episode.length} episodes
        </Typography>
      </CardContent>
    </Card>
  );
};
