import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { EpisodeEntityVm } from "../episode-collection.vm";
import { Chip } from "@mui/material";

interface Props {
  episode: EpisodeEntityVm;
}

export const EpisodeCard: React.FC<Props> = ({ episode }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom noWrap>
          {episode.name}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {episode.episode}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Air Date: {episode.airDate}
        </Typography>
        <Chip
          label={`${episode.characterCount} Characters`}
          color="primary"
          size="small"
          sx={{ mt: 1 }}
        />
      </CardContent>
    </Card>
  );
};
