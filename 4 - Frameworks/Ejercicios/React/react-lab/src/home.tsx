import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h3" sx={{ textAlign: "center", my: 4 }}>
        Choose Your Adventure
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/list")}
          startIcon={<GitHubIcon />}
          sx={{
            minWidth: 200,
            minHeight: 100,
            fontSize: "1.2rem",
          }}
        >
          Github Search
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/rickandmorty")}
          startIcon={<LiveTvIcon />}
          sx={{
            minWidth: 200,
            minHeight: 100,
            fontSize: "1.2rem",
          }}
        >
          Rick and Morty
        </Button>
      </Box>
    </Container>
  );
};
