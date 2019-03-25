import React, { Component } from "react";
import Card from "../Card/";
import ListHeader from "../ListHeader/";
import { database } from "../../firebase";
import RollButton from "../RollButton";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newData: ""
    };
  }

  state = {};

  handleChange = e => {
    const newData = e.target.value;
    this.setState({
      newData
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    database
      .ref()
      .child(this.props.listName)
      .push(this.state.newData);
  };

  componentDidMount() {
    database.ref(this.props.listName).on("value", snap => {
      this.setState({
        data: snap.val()
      });
    });
  }

  render() {
    let styles = {
      display: "inline-block",
      padding: "10px",
      width: "290px",
      textAlign: "center",
      backgroundColor: "#ddd",
      fontSize: "1em",
      verticalAlign: "top"
    };

    let cardListStyles = {
      height: "80vh",
      overflow: "auto"
    };

    return (
      <div className="listContainer" style={styles}>
        <ListHeader title={this.props.listName} />
        <RollButton />

        <div className="listContainer" style={cardListStyles}>
          {Object.entries(this.state.data).map(([key, value], i) => (
            <Card key={key} id={i} text={value} />
          ))}
        </div>

        <form className="App-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newData}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default List;
