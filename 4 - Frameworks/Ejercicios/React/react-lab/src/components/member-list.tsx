import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
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
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "80%", margin: "2rem auto" }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Avatar</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member) => (
            <TableRow
              key={member.id}
              hover
              sx={{ "&:last-child td": { border: 0 } }}
            >
              <TableCell>
                <Avatar
                  src={member.avatar_url}
                  alt={member.login}
                  sx={{ width: 50, height: 50 }}
                />
              </TableCell>
              <TableCell>{member.id}</TableCell>
              <TableCell>{member.login}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
