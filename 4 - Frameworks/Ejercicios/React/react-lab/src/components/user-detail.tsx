import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Typography,
  Chip,
  CircularProgress,
  Button,
  Pagination,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import { getUser, getUserOrgs, getUserRepos, getUserStarred } from "../api";
import { RepoList } from "./repo-list";

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

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
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

        const [userData, reposData, orgsData, starredData] = await Promise.all([
          getUser(username),
          getUserRepos(username),
          getUserOrgs(username),
          getUserStarred(username),
        ]);

        setUser(userData);
        setRepos(reposData);
        setOrgs(orgsData);
        setStarred(starredData.length);
      } catch (err: any) {
        if (err.message.includes("403")) {
          setRateLimitError(true);
        } else {
          setError("Error fetching data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  const handleRepoPageChange = function (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) {
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
    <>
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
          maxWidth: "90%",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Avatar
            src={user.avatar_url}
            sx={{ width: 100, height: 100, mr: 3 }}
          />
          <Box>
            <Typography variant="h4" color="primary">
              {user.name || user.login}
            </Typography>
            <Typography variant="body1" color="primary" sx={{ mb: 2 }}>
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
      </Box>
      <RepoList repos={paginatedRepos} />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 4 }}>
        <Pagination
          count={Math.ceil(repos.length / reposPerPage)}
          page={repoPage}
          onChange={handleRepoPageChange}
          color="primary"
        />
      </Box>
    </>
  );
};
