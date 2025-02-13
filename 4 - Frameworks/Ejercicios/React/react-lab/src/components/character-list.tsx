import { FC } from "react";
import { Card, CardMedia, CardContent, Typography, Grid2 } from "@mui/material";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
}

interface CharacterListProps {
  characters: Character[];
}

export const CharacterList: FC<CharacterListProps> = ({ characters }) => {
  return (
    <Grid2 container spacing={3}>
      {characters.map((character) => (
        <Grid2
          key={character.id}
          // direction={"row"}
          size={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 2 }}
        >
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={character.image}
              alt={character.name}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {character.species} - {character.status}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};
