import { Component } from 'react';
import { PhonebookForm, PhonebookInputButton } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.addContact({ name, number });
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <PhonebookForm onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(['\s\-][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="phone-number">Number:</label>
        <input
          type="tel"
          name="number"
          id="phone-number"
          value={number}
          onChange={this.handleChange}
          pattern="^(\+\d{1,3}\s?)?(\(\d{1,4}\)|\d{1,4})[\s\-]?\d{1,18}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <PhonebookInputButton
          type="submit"
          value="Add contact"
        ></PhonebookInputButton>
      </PhonebookForm>
    );
  }
}

export default ContactForm;
