import React from "react";
import { AppLayout } from "#layouts";
import { CharacterContainer } from "#pods/character";
import { Typography, Container } from "@mui/material";

export const CharacterScene: React.FC = () => {
  return (
    <AppLayout>
      <Container maxWidth="lg">
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
          Character Details
        </Typography>
        <CharacterContainer />
      </Container>
    </AppLayout>
  );
};
