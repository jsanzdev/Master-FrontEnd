import React from "react";
import { useParams } from "react-router-dom";
import { CharacterComponent } from "./character.component";
import { getCharacter } from "./api";
import { mapCharacterFromApiToVm } from "./character.mapper";
import { CharacterVm, createEmptyCharacter } from "./character.vm";
import { Box, CircularProgress, Alert } from "@mui/material";

export const CharacterContainer: React.FC = () => {
  const [character, setCharacter] = React.useState<CharacterVm>(
    createEmptyCharacter()
  );
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    const loadCharacter = async () => {
      try {
        setLoading(true);
        const apiCharacter = await getCharacter(Number(id));
        setCharacter(mapCharacterFromApiToVm(apiCharacter));
        setError(null);
      } catch (e) {
        setError("Error loading character");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    loadCharacter();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return <CharacterComponent character={character} />;
};
