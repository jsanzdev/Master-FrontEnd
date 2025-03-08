import React from "react";
import { Grid, Pagination, Box, CircularProgress, Alert } from "@mui/material";
import { LocationCard } from "./components/location-card.component";
import { LocationEntityVm } from "./location-collection.vm";

interface Props {
  locationCollection: LocationEntityVm[];
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const LocationCollectionComponent: React.FC<Props> = ({
  locationCollection,
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
        {locationCollection.map((location) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={location.id}>
            <LocationCard location={location} />
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
