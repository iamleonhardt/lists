import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    let styles = {
      borderRadius: "2px",
      margin: "2vh auto",
      padding: "2vh",
      backgroundColor: "#fafafa",
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
    };

    const { text, id } = this.props;
    return (
      <div className="card" id={id} style={styles}>
        <div>{id}</div>
        {text}
      </div>
    );
  }
}

export const exportTest = {};
export default Card;
