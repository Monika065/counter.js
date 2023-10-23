import React, { Component } from "react";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = { Profile: "Welcome to my page", count: 0 };
  }
  handleClick() {
    this.setState({ Profile: "Continue " });
  }
  addition() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.Profile}</h1>
        <p>Click the below button for view my profile</p>
        <button onClick={() => this.handleClick()}> click me </button>
        <p>Counter using state handling.</p>
        <button onClick={() => this.addition()}> Counter </button>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}
