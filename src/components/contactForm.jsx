import { useState } from 'react';
import React from 'react';
import { nanoid } from 'nanoid';

const Form = ({ addContact }) => {
  const [contact, setContact] = useState({
    id: nanoid(3),
    name: '',
    number: '',
  });

  const onChange = e => {
    const { name, value } = e.currentTarget;
    setContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clear = () => {
    setContact({ id: nanoid(3), name: '', number: '' });
  };

  const onSubmit = e => {
    e.preventDefault();
    addContact(contact);
    clear();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>PhoneBook</h1>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        value={contact.name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
      />
      <h3>Telephone number</h3>
      <input
        type="tel"
        name="number"
        value={contact.number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onChange}
      />
      <button type="submit">Add a contact</button>
    </form>
  );
  // }
};

export default Form;
