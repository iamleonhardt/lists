import React from "react";
import { firestore } from "../firebase";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  width: 80%;
  border-radius: 2px;
  position: relative;
  margin: 2vh auto;
  padding: 2vh;
  background-color: #fafafa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 5px rgba(0, 0, 0, 0.23);
  cursor: default;
  font-size: 12px;

  ${props =>
    props.active &&
    css`
      background-color: #caebf2;
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
    let deleteRef = firestore
      .collection("ListItems")
      .doc(listName)
      .collection("Items")
      .doc(props.dataId)
      .delete()
      .then(() => {
        console.log("Document succesfully deleted");
      })
      .catch(error => {
        console.log("Error removing document: ", error);
      });
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
