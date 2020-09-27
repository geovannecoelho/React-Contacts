import React from 'react';
import './navbar.scss'

class Navbar extends Component{
  render(){
    return(
      <header>
        <a href="#">contatos</a>
        <a className="btn" href="#">
          {" "}
          <button>NOME DO INDIVIDUO</button>
        </a>
        <a onclick="openNav()" className="menu" href="#">
          {" "}
          <button>Menu</button>
        </a>
      </header>
      )
    }
  }
  export default Navbar;

