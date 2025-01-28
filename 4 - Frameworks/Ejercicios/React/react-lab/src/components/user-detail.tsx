import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Typography,
  Grid2,
  Card,
  CardContent,
  Chip,
  Container,
  CircularProgress,
  Button,
  Pagination,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
}

interface Organization {
  login: string;
  avatar_url: string;
}

interface User {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
}

interface Props {
  username: string;
}

export const UserDetail: FC<Props> = ({ username }) => {
  const navigate = useNavigate();
  const [repos, setRepos] = useState<Repository[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [orgs, setOrgs] = useState<Organization[]>([]);
  const [starred, setStarred] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [repoPage, setRepoPage] = useState(1);
  const [rateLimitError, setRateLimitError] = useState<boolean>(false);
  const reposPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        setRateLimitError(false);
        const [userResponse, reposResponse, orgsResponse, starredResponse] =
          await Promise.all([
            fetch(`https://api.github.com/users/${username}`),
            fetch(`https://api.github.com/users/${username}/repos`),
            fetch(`https://api.github.com/users/${username}/orgs`),
            fetch(`https://api.github.com/users/${username}/starred`),
          ]);

        if (userResponse.status === 403 || reposResponse.status === 403) {
          setRateLimitError(true);
          return;
        }

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();
        const orgsData = await orgsResponse.json();
        const starredData = await starredResponse.json();

        setUser(userData);
        setRepos(reposData);
        setOrgs(orgsData);
        setStarred(starredData.length);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  const handleRepoPageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setRepoPage(value);
  };

  const paginatedRepos = repos.slice(
    (repoPage - 1) * reposPerPage,
    repoPage * reposPerPage
  );

  if (loading) return <CircularProgress />;
  if (rateLimitError)
    return (
      <Typography color="error" sx={{ p: 3 }}>
        API rate limit exceeded. Please try again later.
      </Typography>
    );
  if (error) return <Typography color="error">{error}</Typography>;
  if (!user) return <Typography>No user data available</Typography>;

  return (
    <Container
      maxWidth={false}
      sx={{ height: "100vh", p: 0, position: "relative" }}
    >
      <Button
        onClick={() => navigate(-1)}
        variant="contained"
        sx={{
          position: "absolute",
          bottom: 20,
          left: 20,
          zIndex: 1,
        }}
      >
        Back to List
      </Button>
      <Box
        sx={{
          py: 4,
          px: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <Avatar
            src={user.avatar_url}
            sx={{ width: 100, height: 100, mr: 3 }}
          />
          <Box>
            <Typography variant="h4" color="primary">
              {user.name || user.login}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {user.bio}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Chip
                icon={<PeopleIcon />}
                label={`${user.followers} followers`}
                variant="outlined"
              />
              <Chip
                icon={<StarIcon />}
                label={`${starred} starred`}
                variant="outlined"
              />
              {orgs.map((org) => (
                <Chip
                  key={org.login}
                  component={Link}
                  to={`/list?org=${org.login}`}
                  icon={<BusinessIcon />}
                  label={org.login}
                  variant="outlined"
                  clickable
                />
              ))}
            </Box>
          </Box>
        </Box>

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
                    {repo.language && (
                      <Chip label={repo.language} size="small" />
                    )}
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

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 4 }}>
          <Pagination
            count={Math.ceil(repos.length / reposPerPage)}
            page={repoPage}
            onChange={handleRepoPageChange}
            color="primary"
          />
        </Box>
      </Box>
    </Container>
  );
};
