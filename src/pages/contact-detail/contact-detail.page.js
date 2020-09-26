import React from "react";
import authService from "../../services/auth.service";
import contactsService from "../../services/contacts.service";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../../components/navbar";

class ContactDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: {},
      redirectTo: null,
    };

    this.onBackRequest = this.onBackRequest.bind(this);
  }

  componentDidMount() {
    let userData = authService.getLoggedUser();

    if (!userData) {
      this.setState({ redirectTo: "/" });
    } else {
      this.loadContactInfo();
    }
  }

  async loadContactInfo() {
    try {
      let res = await contactsService.getOne(this.props.match.params.id);
      this.setState({ contactData: res.data.data });
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
      alert("Não foi possível listar os contatos.");
    }
  }

  onBackRequest() {
    this.setState({
      redirectTo: "/contacts",
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    }

    return (
      <>
        <Navbar />

        <a href="#" onClick={this.onBackRequest}>
          voltar
        </a>
        <img src={this.state.contactData.avatar} alt="Avatar" />
        <article>
          <p>
            <strong>Nome:</strong> <span>{this.state.contactData.name}</span>
          </p>
          <p>
            <strong>Celular:</strong> <span>{this.state.contactData.cell}</span>
          </p>
          <p>
            <strong>Telefone:</strong>{" "}
            <span>{this.state.contactData.phone}</span>
          </p>
          <p>
            <strong>E-mail:</strong> <span>{this.state.contactData.email}</span>
          </p>
        </article>
      </>
    );
  }
}
export default ContactDetailPage;
