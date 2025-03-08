import React from "react";
import { Grid, Pagination, Box, CircularProgress, Alert } from "@mui/material";
import { EpisodeCard } from "./components/episode-card.component";
import { EpisodeEntityVm } from "./episode-collection.vm";

interface Props {
  episodeCollection: EpisodeEntityVm[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const EpisodeCollectionComponent: React.FC<Props> = ({
  episodeCollection,
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
        {episodeCollection.map((episode) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={episode.id}>
            <EpisodeCard episode={episode} />
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
