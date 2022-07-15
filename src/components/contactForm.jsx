import { Component } from 'react';
import { nanoid } from 'nanoid';

export default class Form extends Component {
  state = { id: '', name: '', number: '' };

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.state.id = nanoid(3);
    this.props.contact(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          value={this.state.name}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.onChange}
        />
        <h3>Telephone number</h3>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.onChange}
        />
        <button type="submit">Add a contact</button>
      </form>
    );
  }
}
