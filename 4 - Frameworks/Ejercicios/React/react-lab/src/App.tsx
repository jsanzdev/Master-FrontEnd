import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Header } from "./components/header";
import { HomePage } from "./home";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RickHome } from "./rick-home";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            bgcolor: "background.default",
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/rickandmorty" element={<RickHome />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};
