import React from "react";
import { Link, Redirect } from "react-router-dom";
import authService from "../../services/auth.service";
import contactsService from "../../services/contacts.service";

class ContactsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      redirectTo: null,
    };
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

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    }

    return (
      <div className="">
        <h1>
          Testeeee
        </h1>
      </div>
    )
  }
}

export default ContactsPage;
