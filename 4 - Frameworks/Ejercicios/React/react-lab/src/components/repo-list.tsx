import { FC } from "react";
import { Box, Typography, Grid2, Card, CardContent, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
}

interface RepoListProps {
  repos: Repository[];
}

export const RepoList: FC<RepoListProps> = ({ repos }) => {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Repositories
      </Typography>

      <Grid2 container spacing={3}>
        {repos.map((repo) => (
          <Grid2 size={{ xs: 12, sm: 4, md: 3, lg: 2, xl: 2 }} key={repo.id}>
            <Card sx={{ height: 200 }}>
              <CardContent
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h6" noWrap gutterBottom>
                    {repo.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      mb: 2,
                    }}
                  >
                    {repo.description || "No description available"}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  {repo.language && <Chip label={repo.language} size="small" />}
                  <Chip
                    icon={<StarIcon />}
                    label={repo.stargazers_count}
                    size="small"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
