import { FC, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { getCharacter } from "./rick-api";
import { CharacterDetail } from "./components/character-detail";

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
      <CharacterDetail character={character} />
    </Box>
  );
};
