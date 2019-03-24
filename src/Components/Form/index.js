import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <form className="App-form" onSubmit={this.handleSubmit}>
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

export default Form;
