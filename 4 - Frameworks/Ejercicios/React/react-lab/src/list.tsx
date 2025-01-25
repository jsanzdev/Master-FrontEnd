import { FC, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";
import { MemberList, MemberEntity } from "./components/member-list";

export const ListPage: FC = () => {
  const [searchParams] = useSearchParams();
  const orgParam = searchParams.get("org");
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [organization, setOrganization] = useState<string>(
    orgParam || "lemoncode"
  );
  const [currentSearch, setCurrentSearch] = useState<string>(
    orgParam || "lemoncode"
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentSearch(organization);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrganization(e.target.value);
  };

  const fetchMembers = () => {
    fetch(`https://api.github.com/orgs/${currentSearch}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  };

  useEffect(() => {
    fetchMembers();
  }, [currentSearch]);

  return (
    <>
      <Typography
        variant="h4"
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
          sx={{ mr: 1, ml: 2 }}
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </Box>
      <MemberList members={members} />
    </>
  );
};
