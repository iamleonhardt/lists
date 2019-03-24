import React, { Component } from "react";
import { database } from "./firebase";
import "./App.css";
import List from "./Components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newData: ""
    };
  }

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
      .child("List")
      .push(this.state.newData);
  };

  render() {
    return (
      <React.Fragment>
        <List listName="Things" />
        <List listName="List" />
      </React.Fragment>
    );
  }
}

export default App;
