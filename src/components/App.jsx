import { useEffect, useState } from 'react';
import { addContact, getContacts } from 'redux/contactsOperations';
import ContactForm from './contactForm';
import Filter from './filter';
import MarkUp from './markUp';
import { deleteCOntact } from 'redux/contactsOperations';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const App = () => {
  const [filter, setFilter] = useState('');
  const [newContact, setNewContact] = useState('');
  const [contacts, setContacts] = useState('');

  const isLoggedin = useSelector(state => state.user.isLoggedin);
  let navigate = useNavigate();

  useEffect(() => {
    isLoggedin
      ? getContacts().then(r => {
          setContacts(r);
        })
      : navigate('/');
  }, [isLoggedin, navigate]);

  useEffect(() => {
    if (newContact !== '') {
      addContact(newContact);
      getContacts().then(r => setContacts(r));
      setNewContact('');
    }
  }, [newContact]);

  const getNewContact = data => {
    setNewContact(data);
  };

  const onDelete = id => {
    deleteCOntact(id);
    getContacts().then(r => setContacts(r));
  };

  // -------------- Фунція зміни інпуту відповідно до стейту

  const onChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  return (
    <>
      <ContactForm sendNewContact={getNewContact} />
      <Filter onChange={onChange} filter={filter} />
      <MarkUp
        filter={filter}
        contacts={contacts}
        deleteContact={onDelete}
        className="markup"
      />
    </>
  );
};

export default App;
