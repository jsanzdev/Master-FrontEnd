import React from "react";
import { Link, useParams } from "react-router-dom";
import { UserDetail } from "./components/user-detail";
import { Button, Box } from "@mui/material";

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <Box>
      <UserDetail username={id || ""} />
      <Button component={Link} to="/list" variant="contained" sx={{ m: 2 }}>
        Back to List
      </Button>
    </Box>
  );
};
