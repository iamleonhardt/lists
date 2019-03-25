import React from "react";

const RollButton = () => {
  let handleClick = e => {
    let ranNum = Math.floor(Math.random() * 23);
    let elem = document.getElementById(ranNum);
    elem.style.backgroundColor = "antiquewhite";
    elem.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  let styles = {
    backgroundColor: "darkolivegreen",
    color: "gainsboro",
    fontSize: "14px",
    cursor: "pointer",
    border: "none"
  };

  return (
    <button style={styles} onClick={handleClick}>
      Roll
    </button>
  );
};

export default RollButton;
