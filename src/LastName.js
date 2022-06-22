import React, { PureComponent } from "react";

export default class LastName extends PureComponent {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    console.log("render from lastname cmp");
    return <h3>{this.props.lastName}</h3>;
  }
}
