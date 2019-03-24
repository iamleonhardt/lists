import React from "react";

const RollButton = () => {
  let handleClick = e => {
    console.log("Clicked, e: ", e);
  };

  let styles = {
    backgroundColor: "darkolivegreen",
    color: "gainsboro",
    padding: ".5em 2em",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "2px solid gainsboro"
  };

  return (
    <button style={styles} onClick={handleClick}>
      Roll
    </button>
  );
};

export default RollButton;
