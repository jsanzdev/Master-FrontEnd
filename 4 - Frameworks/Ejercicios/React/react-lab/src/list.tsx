import { FC, useState, useEffect } from "react";
import { MemberList, MemberEntity } from "./components/member-list";
import { Link } from "react-router-dom";

export const ListPage: FC = () => {
  const [members, setMembers] = useState<MemberEntity[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  return (
    <>
      <h2>Organization Members</h2>
      <MemberList members={members} />
    </>
  );
};
