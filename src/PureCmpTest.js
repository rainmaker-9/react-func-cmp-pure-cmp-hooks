import React, { Component } from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";

class PureCmpTest extends Component {
  state = {
    firstName: "First_Name",
    lastName: "Last_Name",
  };

  componentDidMount() {
    let id = setInterval(() => {
      this.setState({ firstName: "FName" + Math.random() });
    }, 2000);
    setTimeout(() => {
      clearInterval(id);
    }, 6000);
  }

  render() {
    return (
      <div>
        <FirstName firstName={this.state.firstName} />
        <LastName lastName={this.state.lastName} />
      </div>
    );
  }
}

export default PureCmpTest;
