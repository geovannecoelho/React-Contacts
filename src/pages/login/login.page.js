import React from "react";
import Logo from '../../assets/img/Logo_principal.png'; 

class LoginPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <img
                className="usuario"
                src={Logo}
                alt="Usuário"
              />
              <h2 className="title">Login</h2>
              <div className="input-field input-focus">
                <i className="fas fa-user" />
                <input type="text" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Senha" />
              </div>
              <input
                type="submit"
                defaultValue="Entrar"
                className="btn solid"
              />
              <a href="recuperar-senha.html" className="recover">
                Esqueceu a senha?
              </a>
              <p className="social-text">
                Acesse sua conta através de suas redes sociais.
              </p>
              <div className="social-media">
                <a href="#" className="social-icon facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon google">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon linkedin">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <img
                className="usuario"
                src="img/Logo_principal.png"
                alt="Usuário"
              />
              <h2 className="title">Cadastre-se</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Nome" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Senha" />
              </div>
              <input type="submit" className="btn" defaultValue="Cadastrar" />
              <p className="social-text">
                Ou se preferir, Cadastre-se com suas redes sociais.
              </p>
              <div className="social-media">
                <a href="#" className="social-icon facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon google">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon linkedin">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Novo por aqui?</h3>
              <p>
                Crie sua conta, é rápido e fácil, embarque nessa aventura! Sua
                rotina de uma forma divertida.
              </p>
              <button className="btn transparent" id="sign-up-btn">
                Cadastrar
              </button>
            </div>
            <img src="img/Logo_jo.png" className="image" alt />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Login</h3>
              <p>Caso já possua conta, fazer login em vez disso.</p>
              <button className="btn transparent" id="sign-in-btn">
                Login
              </button>
            </div>
            <img src="img/banner-2.svg" className="image" alt />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
