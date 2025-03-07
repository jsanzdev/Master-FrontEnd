import React from "react";
import { Grid, Pagination, Box, CircularProgress, Alert } from "@mui/material";
import { CharacterCard } from "./components/character-card.component";
import { CharacterEntityVm } from "./character-collection.vm";

interface Props {
  characterCollection: CharacterEntityVm[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = ({
  characterCollection,
  loading,
  error,
  page,
  totalPages,
  onPageChange,
}) => {
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

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {characterCollection.map((character) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" p={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => onPageChange(value)}
          color="primary"
        />
      </Box>
    </Box>
  );
};
