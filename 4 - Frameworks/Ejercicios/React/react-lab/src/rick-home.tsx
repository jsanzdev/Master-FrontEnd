import { FC, useState, useEffect, ChangeEvent } from "react";
import { TextField, Box, Typography, Pagination } from "@mui/material";
import { CharacterList } from "./components/character-list";
import { getCharacters } from "./rick-api";

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
      try {
        const data = await getCharacters(page, searchTerm);
        setCharacters(data.results || []);
        setTotalPages(data.info?.pages || 1);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [page, searchTerm]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset page to 1 when search term changes
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const paginatedCharacters = characters.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" align="center" color="primary" gutterBottom>
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
      <CharacterList characters={paginatedCharacters} />
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
