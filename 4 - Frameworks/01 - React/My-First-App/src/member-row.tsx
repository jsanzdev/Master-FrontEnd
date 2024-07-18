import React from "react";
import { MemberEntity } from "./model";

interface Props {
  member: MemberEntity;
}

export const MemberRow = (props: Props) => {
  const { member } = props;
  return (
    <React.Fragment>
      <img src={member.avatar_url} />
      <div>{member.login}</div>
      <div>{member.id}</div>
    </React.Fragment>
  );
};
