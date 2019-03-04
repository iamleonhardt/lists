import React, { Component } from "react";

class RollButton extends Component {
  state = {};

  handleClick = e => {
    console.log("Clicked, e: ", e);
  };
  render() {
    let styles = {
      backgroundColor: "#dd4444",
      color: "#fff",
      padding: "10px",
      fontSize: "20px",
      borderRadius: "4px"
    };
    return (
      <button style={styles} onClick={this.handleClick}>
        Roll
      </button>
    );
  }
}

export default RollButton;
