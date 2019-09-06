import React from "react";
import CurrentUser from "./CurrentUser.js";
import SignInSignUp from "./SignInSignUp.js";

const Authentication = ({ user }) => {
  return <div>{user ? <CurrentUser {...user} /> : <SignInSignUp />}</div>;
};

export default Authentication;
