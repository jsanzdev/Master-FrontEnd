import React from "react";

interface Member {
  id: number;
  login: string;
  avatar_url: string;
}

export const App = () => {
  const [members, setMembers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then((result) => setMembers(result));
  }, []);

  return (
    <div className="user-list-container">
      <span className="header">Avatar</span>
      <span className="header">Login</span>
      <span className="header">ID</span>
      {members.map((member: Member) => (
        <React.Fragment key={member.id}>
          <img src={member.avatar_url} />
          <div>{member.login}</div>
          <div>{member.id}</div>
        </React.Fragment>
      ))}
    </div>
  );
};
