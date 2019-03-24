import React from "react";

const RollButton = () => {
  let handleClick = e => {
    let ranNum = Math.floor(Math.random() * 22);
    let elem = document.getElementById(ranNum);

    elem.scrollIntoView({ behavior: "smooth", block: "center" });
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
