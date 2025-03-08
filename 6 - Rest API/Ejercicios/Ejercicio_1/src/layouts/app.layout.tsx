import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import * as classes from "./app.layout.styles";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Menu"
            sx={{ mr: 2 }}
          >
            <AccountCircle />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
            <Button color="inherit" onClick={() => navigate("/characters")}>
              Characters
            </Button>
            <Button color="inherit" onClick={() => navigate("/episodes")}>
              Episodes
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
