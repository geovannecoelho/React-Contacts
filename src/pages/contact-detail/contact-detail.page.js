import React from 'react';
import './contact-detail.style.scss'

class ContactDetailPage extends React.Component{
  render(){
    return(
      <div className="contact-detail">
        <img src alt />
        <div className="contact__detail__info">
          <h1>Nome do contato</h1>
          <div className="detail__info">
            <h2>Telefone</h2>
              <p>++ 55 11 99736-5555</p>
            <h2>Celular</h2>
              <p> dasf </p>
            <h2>Email</h2>
              <p>sdasd</p>
          </div>
        </div>
      </div>

    )
  }
}
export default ContactDetailPage;