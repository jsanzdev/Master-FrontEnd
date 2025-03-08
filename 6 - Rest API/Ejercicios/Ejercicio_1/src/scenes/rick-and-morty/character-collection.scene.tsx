import React from "react";
import { AppLayout } from "#layouts";
import { CharacterCollectionContainer } from "#pods/character-collection";
import { Typography, Container, Box, TextField } from "@mui/material";

export const CharacterCollectionScene: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

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
        <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
          <TextField
            label="Search characters"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
            sx={{ width: "100%", maxWidth: 500 }}
            InputProps={{
              type: "search",
            }}
          />
        </Box>

        <CharacterCollectionContainer searchQuery={searchQuery} />
      </Container>
    </AppLayout>
  );
};
