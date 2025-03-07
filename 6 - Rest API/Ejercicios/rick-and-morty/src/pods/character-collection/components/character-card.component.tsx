import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { CharacterCollection } from "../api/character-collection.api-model";

interface Props {
  character: CharacterCollection;
}

export const CharacterCard: React.FC<Props> = (props) => {
  const { character } = props;
  const navigate = useNavigate();

  const getStatusColor = (status: string): "success" | "error" | "default" => {
    switch (status) {
      case "Alive":
        return "success";
      case "Dead":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        onClick={() => navigate(`/character/${character.id}`)}
        sx={{ height: "100%" }}
      >
        <CardMedia
          component="img"
          height="280"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {character.species}
          </Typography>
          <Chip
            label={character.status}
            color={getStatusColor(character.status)}
            size="small"
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
