import React, { Component } from "react";
import { database } from "../../firebase";

class ListHeader extends Component {
  state = { title: "" };

  componentDidMount() {
    database
      .ref("Lists")
      .child(this.props.title)
      .child("Name")
      .on("value", snapshot => {
        this.setState({ title: snapshot.val() });
      });
  }

  // let title = database
  //   .ref("Lists")
  //   .child(this.props.listName)
  //   .child("Name")

  render() {
    // const { title } = this.props;

    let headerStyles = {
      height: "10vh",
      lineHeight: "10vh",
      backgroundColor: "gainsboro",
      backgroundImage:
        "url('https://i.pinimg.com/originals/80/47/f0/8047f0869f4b3bd09a81d0faa149a25f.jpg')",
      backgroundSize: "cover"
    };

    let titleStyles = {
      color: "antiquewhite",
      fontSize: "1.3em"
    };

    return (
      <div style={headerStyles}>
        <div id="headerTitle" style={titleStyles}>
          {this.state.title}
        </div>
      </div>
    );
  }
}

export default ListHeader;
