import React from "react";
import { signInWithGoogle } from "../firebase";
import styled from "styled-components";

const SignIn = styled.div`
  padding: 4px;
  width: 80px;
  border-radius: 4px;
  text-align: center;
  background: steelblue;
  color: #fff;
  display: inline-block;
`;

const SignInSignUp = () => {
  return <SignIn onClick={signInWithGoogle}> Sign In </SignIn>;
};

export default SignInSignUp;
