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

  componentDidMount() {
    database.ref("Lists").on("value", snap => {
      this.setState({
        data: snap.val()
      });
    });
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
        {Object.entries(this.state.data).map(([key, value]) => (
          <List key={key} listName={key} />
        ))}
      </React.Fragment>
    );
  }
}

export default App;
