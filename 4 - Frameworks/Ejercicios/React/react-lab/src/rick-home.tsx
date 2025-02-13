import { FC, useState, useEffect, ChangeEvent, useCallback } from "react";
import { TextField, Box, Typography, Pagination } from "@mui/material";
import { CharacterList } from "./components/character-list";
import { getCharacters } from "./rick-api";
import { useDebounce } from "./hooks/use-debounce";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
}

export const RickHome: FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const debouncedSearchTerm = useDebounce(inputValue, 500);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters(page, debouncedSearchTerm);
        setCharacters(data.results || []);
        setTotalPages(data.info?.pages || 1);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [page, debouncedSearchTerm]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Rick and Morty Characters
      </Typography>
      <TextField
        label="Search by name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={inputValue}
        onChange={handleSearchChange}
      />
      <CharacterList characters={characters} />
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
