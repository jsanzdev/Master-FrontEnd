import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { LocationEntityVm } from "../location-collection.vm";
import { Chip } from "@mui/material";

interface Props {
  location: LocationEntityVm;
}

export const LocationCard: React.FC<Props> = ({ location }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom noWrap>
          {location.name}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Type: {location.type}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Dimension: {location.dimension}
        </Typography>
        <Chip
          label={`${location.residentCount} Residents`}
          color="primary"
          size="small"
          sx={{ mt: 1 }}
        />
      </CardContent>
    </Card>
  );
};
