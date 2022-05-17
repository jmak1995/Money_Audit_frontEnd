import Userfront from "@userfront/core";
import React from "react";

Userfront.init("demo1234");

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: !Userfront.tokens.accessToken,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    Userfront.logout();
    console.log(Userfront.logout);
  }

  render() {
    return (
      <button id="logout-button" onClick={this.handleClick}>
        Log out
      </button>
    );
  }
}
export default LogoutButton;
