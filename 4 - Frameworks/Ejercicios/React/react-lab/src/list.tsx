import { FC, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { TextField, Button, Box, Typography, Pagination } from "@mui/material";
import { MemberList, MemberEntity } from "./components/member-list";

export const ListPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const orgParam = searchParams.get("org");
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [organization, setOrganization] = useState<string>(
    orgParam || "lemoncode"
  );
  const [currentSearch, setCurrentSearch] = useState<string>(
    orgParam || "lemoncode"
  );
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const [rateLimitError, setRateLimitError] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentSearch(organization);
    setSearchParams({ org: organization });
    setPage(1); // Reset to first page on new search
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrganization(e.target.value);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const fetchMembers = () => {
    setRateLimitError(false);
    fetch(`https://api.github.com/orgs/${currentSearch}/members`)
      .then((response) => {
        if (response.status === 403) {
          setRateLimitError(true);
          throw new Error("Rate limit exceeded");
        }
        return response.json();
      })
      .then((json) => setMembers(json))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchMembers();
  }, [currentSearch]);

  const paginatedMembers = members.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <>
      {rateLimitError ? (
        <Typography color="error" sx={{ p: 3, textAlign: "center" }}>
          API rate limit exceeded. Please try again later.
        </Typography>
      ) : (
        <>
          <Typography
            variant="h3"
            color="primary"
            sx={{
              textAlign: "center",
              mb: 3,
              mt: 2,
            }}
          >
            Github Organizations Search
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: "center",
              maxWidth: "90%",
              margin: "0 auto",
            }}
          >
            <TextField
              value={organization}
              onChange={handleInputChange}
              label="Organization"
              variant="outlined"
              size="small"
              sx={{ mr: 1 }}
            />
            <Button type="submit" variant="contained">
              Search
            </Button>
          </Box>
          <MemberList members={paginatedMembers} />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 4 }}>
            <Pagination
              count={Math.ceil(members.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </>
      )}
    </>
  );
};
