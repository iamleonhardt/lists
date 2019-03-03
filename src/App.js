import React, { Component } from "react";
import { database } from "./firebase";
import "./App.css";
import { card } from "./Components/card";

let cardStyles = {
  height: '20px',
  width: '20px'
}

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
        {/* {JSON.stringify(this.state.data, null, 2)} */}
        {
          <div>
            {Object.entries(this.state.data).map(([key, value]) => (
              <card style={cardStyles} key={key} listcontent={value}/>
            ))}
          </div>
        }
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
