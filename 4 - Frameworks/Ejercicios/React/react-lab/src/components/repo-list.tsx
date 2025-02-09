import { FC } from "react";
import {
  Box,
  Typography,
  Grid2,
  Card,
  CardContent,
  Chip,
  Pagination,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
}

interface RepoListProps {
  paginatedRepos: Repository[];
  repoPage: number;
  handleRepoPageChange: (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => void;
  reposPerPage: number;
  reposLength: number;
}

export const RepoList: FC<RepoListProps> = ({
  paginatedRepos,
  repoPage,
  handleRepoPageChange,
  reposPerPage,
  reposLength,
}) => {
  return (
    <Box>
      <Typography variant="h5" color="secondary" sx={{ mb: 3 }}>
        Repositories
      </Typography>

      <Grid2 container spacing={3}>
        {paginatedRepos.map((repo) => (
          <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={repo.id}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {repo.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {repo.description || "No description available"}
                </Typography>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          mb: 4,
        }}
      >
        <Pagination
          count={Math.ceil(reposLength / reposPerPage)}
          page={repoPage}
          onChange={handleRepoPageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};
