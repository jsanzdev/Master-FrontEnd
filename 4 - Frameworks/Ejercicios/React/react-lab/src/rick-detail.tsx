import { FC, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Button,
  CircularProgress,
} from "@mui/material";
import { getCharacter } from "./rick-api";

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

export const RickDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getCharacter(Number(id));
        setCharacter(data);
      } catch (error) {
        setError("Error fetching character details");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCharacter();
    }
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!character) return <Typography>No character found</Typography>;

  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: "0 auto" }}>
      <Button
        onClick={() => navigate(-1)}
        variant="contained"
        sx={{ position: "absolute", bottom: 20, left: 20, zIndex: 1 }}
      >
        Back to Characters
      </Button>
      <Card
        sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
      >
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
    </Box>
  );
};
