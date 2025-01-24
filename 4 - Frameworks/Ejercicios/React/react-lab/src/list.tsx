import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  styled,
} from "@mui/material";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  maxWidth: "80%",
  margin: "2rem auto",
  boxShadow: theme.shadows[3],
}));
const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  "&.MuiTableCell-head": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  "&.MuiTableCell-body": {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:hover": {
    backgroundColor: theme.palette.action.selected,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
}));

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  return (
    <>
      <h2>Organization Members</h2>
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCell>Avatar</StyledTableCell>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <StyledTableRow key={member.id}>
                <StyledTableCell>
                  <Avatar
                    src={member.avatar_url}
                    alt={member.login}
                    sx={{ width: 50, height: 50 }}
                  />
                </StyledTableCell>
                <StyledTableCell>{member.id}</StyledTableCell>
                <StyledTableCell>{member.login}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </>
  );
};
