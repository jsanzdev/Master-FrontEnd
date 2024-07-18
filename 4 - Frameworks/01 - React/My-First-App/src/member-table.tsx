import React from "react";
import { MemberRow } from "./member-row";
import { MemberEntity } from "./model";

export const MemberTable: React.FC = () => {
  const [members, setMembers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then((result) => setMembers(result));
  }, []);

  return (
    <>
      <div className="user-list-container">
        <span className="header">Avatar</span>
        <span className="header">Login</span>
        <span className="header">ID</span>
        {members.map((member: MemberEntity) => (
          <MemberRow key={member.id} member={member} />
        ))}
      </div>
    </>
  );
};
