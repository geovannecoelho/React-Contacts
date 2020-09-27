import "./contact-detail.style.scss";

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

        <div className="back-area">
          <a href="#" onClick={this.onBackRequest}>
            {"<"} voltar
          </a>
        </div>
        <div className="contact-detail">
          <img src={this.state.contactData.avatar} alt="Avatar" />

          <div className="contact__detail__info">
            <h1>{this.state.contactData.name}</h1>
            <div className="detail__info">
              <h2>Telefone</h2>
              <p>{this.state.contactData.phone}</p>
              <h2>Celular</h2>
              <p> {this.state.contactData.cell} </p>
              <h2>Email</h2>
              <p>{this.state.contactData.email}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ContactDetailPage;
