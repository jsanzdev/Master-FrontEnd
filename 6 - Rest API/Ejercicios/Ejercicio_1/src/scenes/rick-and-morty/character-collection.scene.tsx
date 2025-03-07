import React from "react";
import { AppLayout } from "#layouts";
import { CharacterCollectionContainer } from "#pods/character-collection";
import { Typography, Container } from "@mui/material";

export const CharacterCollectionScene: React.FC = () => {
  return (
    <AppLayout>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            py: 4,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          Rick and Morty Characters
        </Typography>
        <CharacterCollectionContainer />
      </Container>
    </AppLayout>
  );
};
