import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from './contactForm';
import Filter from './filter';
import MarkUp from './markUp';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  // -------------- Фунція зміни інпуту відповідно до стейту

  const onChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  // --------------------- Функція перевірки контакту на дублювання

  const checkExistContacts = data => {
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === data.name.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  // ---------------- Функція видалення контакту

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  // ---- Отримання контакту з ContactForm

  const handleAddContact = data => {
    console.log(data);
    checkExistContacts(data)
      ? Notify.failure(`${data.name} Is already in your contact list!`)
      : setContacts(prevState => [data, ...prevState]);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //-------------------------------

  // render() {
  return (
    <div className="container">
      <ContactForm addContact={handleAddContact} />
      <Filter onChange={onChange} filter={filter} />
      <MarkUp contacts={contacts} filter={filter} del={deleteContact} />
    </div>
  );
};
// }
export default App;
