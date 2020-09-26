import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import authService from "../../services/auth.service";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectTo: null,
    };

    this.onLogoutRequest = this.onLogoutRequest.bind(this);
  }

  onLogoutRequest() {
    authService.clearLoggedUser();
  }

  render() {
    return (
      <div>
        <Link to="/" onClick={this.onLogoutRequest}>
          sair
        </Link>
      </div>
    );
  }
}

export default Navbar;
