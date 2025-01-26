import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid2,
} from "@mui/material";

export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

interface Props {
  members: MemberEntity[];
}

export const MemberList: FC<Props> = ({ members }) => {
  return (
    <Box sx={{ flexGrow: 1, p: 2, maxWidth: "90%", margin: "0 auto" }}>
      <Grid2 container spacing={3}>
        {members.map((member) => (
          <Grid2
            key={member.id}
            // direction={"row"}
            size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
          >
            <Link
              to={`/detail/${member.login}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 200,
                    objectFit: "cover",
                  }}
                  image={member.avatar_url}
                  alt={member.login}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {member.login}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: {member.id}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
