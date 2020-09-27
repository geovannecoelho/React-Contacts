import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import authService from "../../services/auth.service";
import { Link } from "react-router-dom";
import './navbar.scss'
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
      <div className="navbar">
        <h1> Contatos </h1>
        <Link className="navbar_link" to="/" onClick={this.onLogoutRequest}>
          Sair
        </Link>
      </div>
    );
  }
}

export default Navbar;
