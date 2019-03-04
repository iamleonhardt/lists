import React, { Component } from "react";
import { database } from "./firebase";
import "./App.css";
import Card from "./Components/card";
import ListHeader from "./Components/listHeader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newData: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    database.ref("List").on("value", snap => {
      this.setState({
        data: snap.val()
      });
    });
  }

  handleChange(e) {
    const newData = e.target.value;
    this.setState({
      newData
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    database
      .ref()
      .child("List")
      .push(this.state.newData);
  }

  render() {
    return (
      <div className="App">
        <ListHeader title="100 Shops" />
        <div>
          {Object.entries(this.state.data).map(([key, value]) => (
            <Card key={key} text={value} />
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

export default App;
