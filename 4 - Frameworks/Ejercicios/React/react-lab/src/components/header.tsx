import { FC } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            React Lab
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/list">
              Github Search
            </Button>
            <Button color="inherit" component={Link} to="/rickandmorty">
              Rick and Morty
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
