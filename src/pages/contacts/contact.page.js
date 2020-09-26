import React from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../components/navbar";
import authService from "../../services/auth.service";
import contactsService from "../../services/contacts.service";

class ContactsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      redirectTo: null,
    };

    this.onLogoutRequest = this.onLogoutRequest.bind(this);
    this.onContactClick = this.onContactClick.bind(this);
  }

  componentDidMount() {
    let userData = authService.getLoggedUser();
    if (!userData) {
      this.setState({ redirectTo: "/" });
    } else {
      this.loadContacts();
    }
  }

  async loadContacts() {
    try {
      let res = await contactsService.list();
      this.setState({ contacts: res.data.data });
    } catch (error) {
      console.log(error);
      alert("Não foi possível listar os contatos.");
    }
  }

  onLogoutRequest() {
    authService.clearLoggedUser();
  }

  onContactClick(contactId) {
    this.setState({
      redirectTo: "/contact-detail/" + contactId,
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    }

    return (
      <div className="">
        <Navbar />
        <h1>lista de contatos:</h1>
        <ul>
          {this.state.contacts.map((item) => (
            <li
              onClick={() => {
                this.onContactClick(item.id);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactsPage;
