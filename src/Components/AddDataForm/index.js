import React, { Component } from "react";
import { database } from "../../firebase";

class AddData extends Component {
  state = {
    newData: ""
  };

  handleChange = e => {
    const newData = e.target.value;
    this.setState({
      newData
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    database
      .ref()
      .child(this.props.listName)
      .push(this.state.newData);
  };

  render() {
    return (
      <form className="listForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.newData}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default AddData;
