import React from "react";
import { AppLayout } from "#layouts";
import { EpisodeCollectionContainer } from "#pods/episode-collection";
import { Typography, Container, Box, TextField } from "@mui/material";

export const EpisodeCollectionScene: React.FC = () => {
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
          Rick and Morty Episodes
        </Typography>

        <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
          <TextField
            label="Search episodes"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
            sx={{ width: "100%", maxWidth: 500 }}
            InputProps={{
              type: "search",
            }}
          />
        </Box>

        <EpisodeCollectionContainer searchQuery={searchQuery} />
      </Container>
    </AppLayout>
  );
};
