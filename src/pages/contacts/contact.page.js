import React from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../components/navbar";
import authService from "../../services/auth.service";
import contactsService from "../../services/contacts.service";
import "./contacts.style.scss";

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
      <>
        <Navbar />

        <div className="contacts-list">
          <h1>Lista de contatos:</h1>
          <ul>
            {this.state.contacts.map((item) => (
              <div
                onClick={() => {
                  this.onContactClick(item.id);
                }}
                className="contacts"
              >
                <img src={item.avatar} alt />
                <div className="contacts__info">
                  <h1>{item.name}</h1>
                  <p>{item.cell}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default ContactsPage;
