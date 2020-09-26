import React from "react";
import Logo from "../../assets/img/Logo_principal.png";
import Snackbar from '../../components/snackbar/index';
import authService from '../../services/auth.service';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      alertMessage: null,
    };

    this.Snackbar = React.createRef();
  }

  async sendLogin(event) {
    event.preventDefault();

    const data = {
      nickName: this.state.userName,
      password: this.state.password,
    };

    if (!data.nickName || data.nickName == "") {
      this.setState({ alertMessage: "Insira seu usúario." });
      this.Snackbar.current.toggleShow(true);
      return;
    }

    if (!data.password || data.password == "") {
      this.setState({ alertMessage: "Insira sua Senha." });
      this.Snackbar.current.toggleShow(true);
      return;
    }

    try {
      let res = await authService.sendLogin(data);
      authService.setLoggedUser(res.data.data);
      this.props.onLogin();
      this.props.history.replace("/");
    } catch (error) {
      console.log(error);
      this.setState({ alertMessage: "E-mail ou senhas inválidos." });
      this.Snackbar.current.toggleShow(true);
    }
  }

  closeModal() {
    this.setState({ alertMessage: null });
    this.Snackbar.current.toggleShow(false);
  }

  render() {
    return (
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={e => this.sendLogin(e)} action="#" className="sign-in-form">
              <img className="usuario" src={Logo} alt="Usuário" />
              <h2 className="title">Login</h2>
              <div className="input-field input-focus">
                <i className="fas fa-user" />
                <input
                  type="text"
                  id="userName"
                  placeholder="Usuário"
                  value={this.state.userName}
                  onChange={e => this.setState({userName : e.target.value})} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password"  id="password" placeholder="Senha" 
                value={this.state.password}
                onChange={e => this.setState({password : e.target.value})} />
              </div>
              <input
                type="submit"
                defaultValue="Entrar"
                className="btn solid"
              />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3> React API de Contatos </h3>
              <p>Abraão Azevedo - RM: 83983</p>
              <p>Geovanne Amorim - RM: 82578</p>
              <p>Iago Garcia - RM: 82448</p>
              <p>Rodrigo Sussumu - RM: 83888</p>
            </div>
          </div>
        </div>
        <Snackbar 
          ref={this.Snackbar}
          title="Tente novamente" 
          onCancel={() => this.closeModal()}
          onConfirm={() => this.closeModal()}>
          {this.state.alertMessage}
        </Snackbar>
      </div>
    );
  }
}

export default LoginPage;
