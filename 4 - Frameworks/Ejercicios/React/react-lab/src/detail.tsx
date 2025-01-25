import React from "react";
import { useParams } from "react-router-dom";
import { UserDetail } from "./components/user-detail";
import { Box } from "@mui/material";

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <Box>
      <UserDetail username={id || ""} />
    </Box>
  );
};
