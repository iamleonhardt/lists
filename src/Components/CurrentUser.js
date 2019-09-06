import React from "react";
import { signOut } from "../firebase";
import styled from "styled-components";

const UserPhoto = styled.img`
  height: 24px;
  border-radius: 50%;
  border: gold 1px solid;
  padding: 4px;
`;

const SignOut = styled.div`
  padding: 2px;
  margin: 0 10px;
  border-radius: 2px;
  vertical-align: middle;
  font-size: 10px;
  text-align: center;
  background: coral;
  color: #fff;
  display: inline-block;
  cursor: pointer;
`;

const UserSection = styled.section`
  display: grid;
  grid-template-columns: 0.25fr 1fr 1fr 5fr;
  font-size: 12px;
`;

const UserInfo = styled.div``;

const UserName = styled.div``;

const UserEmail = styled.div``;

const CurrentUser = ({ displayName, photoURL, email }) => {
  return (
    <UserSection>
      {photoURL && <UserPhoto src={photoURL} />}

      <UserInfo>
        <UserName>
          {displayName}
          <SignOut onClick={signOut}>Sign Out</SignOut>
        </UserName>
        <UserEmail>{email}</UserEmail>
      </UserInfo>
    </UserSection>
  );
};

export default CurrentUser;
