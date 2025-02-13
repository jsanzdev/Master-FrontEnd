import { FC, useState, useEffect, ChangeEvent } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Pagination,
  Card,
  CardMedia,
  CardContent,
  Grid2,
} from "@mui/material";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
}

export const RickHome: FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchTerm}`
      );
      const data = await response.json();
      setCharacters(data.results || []);
      setTotalPages(data.info?.pages || 1);
    };

    fetchCharacters();
  }, [page, searchTerm]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Rick and Morty Characters
      </Typography>
      <TextField
        label="Search by name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
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
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};
