import React, { Component } from "react";
import { relative } from "path";

class Card extends Component {
  state = {};
  render() {
    let styles = {
      width: "88%",
      borderRadius: "2px",
      position: "relative",
      margin: "2vh auto",
      padding: "2vh",
      backgroundColor: "#fafafa",
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
    };

    let idStyles = {
      textAlign: "right",
      color: "lightgrey",
      position: "absolute",
      right: "10px",
      bottom: "5px",
      fontSize: "10px"
    };

    const { text, id } = this.props;
    return (
      <div className="card" id={id} style={styles}>
        {text}
        <div style={idStyles}>#{id}</div>
      </div>
    );
  }
}

export const exportTest = {};
export default Card;
