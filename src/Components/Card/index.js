import React from "react";
import { database } from "../../firebase";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  width: 84%;
  border-radius: 2px;
  position: relative;
  margin: 2vh auto;
  padding: 2vh;
  background-color: #fafafa;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  cursor: default;
  font-size: 12px;

  ${props =>
    props.active &&
    css`
      background-color: bisque;
    `}
`;

const IdLabel = styled.div`
  text-align: right;
  color: lightgrey;
  position: absolute;
  right: 6px;
  bottom: 6px;
  font-size: 10px;
`;

const DeleteButton = styled.div`
  position: absolute;
  right: 6px;
  top: 6px;
  font-size: 10px;
  cursor: pointer;
`;

const Card = props => {
  const { text, id, listName, active } = props;

  let deleteItem = () => {
    database
      .ref("ListItems")
      .child(listName)
      .child(props.dataId)
      .remove();
  };

  return (
    <StyledCard active={active} id={listName + "-" + id}>
      {text}
      <DeleteButton onClick={deleteItem}>X</DeleteButton>
      <IdLabel>#{id}</IdLabel>
    </StyledCard>
  );
};

export default Card;
