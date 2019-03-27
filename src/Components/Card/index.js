import React from "react";
import { database } from "../../firebase";

const Card = props => {
  const { text, id, listName } = props;

  let deleteItem = () => {
    database
      .ref(listName)
      .child(props.dataId)
      .remove();
    console.log("delete item " + props.dataId);
  };
  let styles = {
    width: "88%",
    borderRadius: "2px",
    position: "relative",
    margin: "2vh auto",
    padding: "2vh",
    backgroundColor: "#fafafa",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    cursor: "default"
  };

  let idStyles = {
    textAlign: "right",
    color: "lightgrey",
    position: "absolute",
    right: "10px",
    bottom: "5px",
    fontSize: "10px"
  };

  let xStyles = {
    position: "absolute",
    right: "6px",
    top: "6px",
    fontSize: "10px",
    cursor: "pointer"
  };

  return (
    <div className="card" id={id} style={styles}>
      {text}
      <div style={xStyles} onClick={deleteItem}>
        X
      </div>
      <div style={idStyles}>#{id}</div>
    </div>
  );
};

export default Card;
