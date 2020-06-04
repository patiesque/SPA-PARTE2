import React, { Component } from 'react';

class Contact extends Component {

  formatDate = (date) => {
    let formatDate = new Date(date);

    let options = { year: "numeric", month: "2-digit", day: "2-digit" };

    return formatDate.toLocaleDateString("pt-BR", options);
};

  render() {
    const { avatar, name, phone, country, admissionDate, company, department } = this.props.data
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar"><img src={avatar} alt="avatar" /></span>
        <span className="contact__data" data-testid="contact-name">{name}</span>
        <span className="contact__data" data-testid="contact-phone">{phone}</span>
        <span className="contact__data" data-testid="contact-country">{country}</span>
        <span className="contact__data" data-testid="contact-date">{this.formatDate(admissionDate)}</span>
        <span className="contact__data" data-testid="contact-company">{company}</span>
        <span className="contact__data" data-testid="contact-department">{department}</span>
      </article>
    );
  }
}

export default Contact;