import React, { Component } from "react";
import RollButton from "../rollButton";

class ListHeader extends Component {
  state = {};
  render() {
    const { title } = this.props;

    let headerStyles = {
      height: "10vh",
      backgroundColor: "gainsboro",
      backgroundImage:
        "url('https://i.pinimg.com/originals/80/47/f0/8047f0869f4b3bd09a81d0faa149a25f.jpg')",
      backgroundSize: "cover"
    };

    let titleStyles = {
      color: "#fff",
      fontSize: "1.5em"
    };

    return (
      <div style={headerStyles}>
        <div id="headerTitle" style={titleStyles}>
          {title}
        </div>
        <RollButton />
      </div>
    );
  }
}

export default ListHeader;
