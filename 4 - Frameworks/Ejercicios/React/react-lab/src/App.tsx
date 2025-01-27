import { FC } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";

export const App: FC = () => {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React Lab
            </Typography>
            <Button color="inherit" component={Link} to="/login">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/list">
              Github Search
            </Button>
            <Button color="inherit" component={Link} to="/list">
              Rick and Morty
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Box>
    </Router>
  );
};
