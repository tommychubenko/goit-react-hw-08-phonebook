import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from './contactForm';
import Filter from './filter';
import MarkUp from './markUp';

class App extends Component {
  // -----СТЕЙТ ------

  state = {
    contacts: [
      { id: 'id-0', name: 'Artem Chubenko', number: '020-12-22' },
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // -------------- Фунція зміни інпуту відповідно до стейту

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  // --------------------- Функція перевірки контакту на дублювання

  checkExistContacts = data => {
    for (const contact of this.state.contacts) {
      if (contact.name.toLowerCase() === data.name.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  // ---------------- Функція видалення контакту

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // ---- Отримання контакту з ContactForm
  getContact = data => {
    this.checkExistContacts(data)
      ? Notify.failure(`${data.name} Is already in your contact list!`)
      : this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
        }));
  };

  componentDidMount() {
    // console.log('App mounted');
    const local = localStorage.getItem('contacts');
    const parsedStorage = JSON.parse(local);
    console.log(parsedStorage);

    if (parsedStorage) {
      this.setState({ contacts: parsedStorage });
      console.log(this.state.contacts);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  //-------------------------------

  render() {
    return (
      <div className="container">
        <h1>PhoneBook</h1>

        <ContactForm contact={this.getContact} />

        <h2>Your contacts list</h2>
        <p>Find a contact by name</p>
        <Filter onChange={this.onChange} filter={this.state.filter} />

        <ul className="contact_list">
          <MarkUp
            contacts={this.state.contacts}
            filter={this.state.filter}
            del={this.deleteContact}
          />
        </ul>
      </div>
    );
  }
}
export default App;
