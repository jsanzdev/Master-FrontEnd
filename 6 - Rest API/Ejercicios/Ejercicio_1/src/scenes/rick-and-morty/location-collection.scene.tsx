import React from "react";
import { AppLayout } from "#layouts";
import { LocationCollectionContainer } from "#pods/location-collection";
import { Typography, Container, Box, TextField } from "@mui/material";

export const LocationCollectionScene: React.FC = () => {
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
          Rick and Morty Locations
        </Typography>

        <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
          <TextField
            label="Search locations"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
            sx={{ width: "100%", maxWidth: 500 }}
            InputProps={{
              type: "search",
            }}
          />
        </Box>

        <LocationCollectionContainer searchQuery={searchQuery} />
      </Container>
    </AppLayout>
  );
};
