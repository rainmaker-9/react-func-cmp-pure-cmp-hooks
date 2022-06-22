import React, { Component } from "react";

export default class FirstName extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    console.log("render from firstname cmp");
    return <h3>{this.props.firstName}</h3>;
  }
}
