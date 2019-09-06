import React from "react";
import styled from "styled-components";

const StyledCollection = styled.div`
  display: inline-block;
  border-radius: 4px;
  background-color: coral;
  padding: 8px;
  margin-right: 8px;
`;

const Collection = props => {
  return <StyledCollection>{props.collection.title}</StyledCollection>;
};

export default Collection;
